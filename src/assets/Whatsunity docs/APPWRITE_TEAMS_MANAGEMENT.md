# WhatsUnity Appwrite Teams & Multi-Tenancy Management Guide

This document defines the hybrid multi-tenancy architecture for **WhatsUnity**, detailing how **Appwrite Teams**, **Document Level Security (DLS)**, and **`compound_id` indexing** operate together across isolated and shared multi-tenant modes.

---

## 1. Architecture Overview

WhatsUnity supports two distinct compound backend models:

```
                                  +---------------------------------------+
                                  |           WhatsUnity App              |
                                  +---------------------------------------+
                                                      |
                                       ActiveCompoundContext.isShared?
                                                      |
                       +------------------------------+------------------------------+
                       |                                                             |
                   [ FALSE ]                                                     [ TRUE ]
                       v                                                             v
        +----------------------------+                                 +----------------------------+
        |   Isolated Mode (Legacy)   |                                 |   Shared Multi-Tenant Mode  |
        +----------------------------+                                 +----------------------------+
        | Dedicated Appwrite Project |                                 | Central Appwrite Project   |
        | Dedicated Databases        |                                 | Appwrite Teams per Compound|
        | Standard Collection Perms  |                                 | DLS: Role.team(team_id)    |
        | compound_id attribute      |                                 | Explicit compound_id tag   |
        +----------------------------+                                 +----------------------------+
```

### 1.1 Shared Multi-Tenant Model (New)
- **Central Infrastructure**: Multiple residential compounds share a single Appwrite project and database infrastructure, using the standard database IDs (`wu_auth`, `wu_sec`, etc.) without a central database ID override.
- **Tenant Isolation via Teams**: Data isolation is enforced at the protocol level using **Appwrite Teams** and **Document Level Security (DLS)**. Read access is constrained to members of `Role.team(teamId)`.
- **Admin & Export Tagging**: **EVERY collection** across all databases (`auth`, `social`, `admin`, `maintenance`, `security`, `services`, `finance`) strictly includes an indexed `compound_id` string attribute (max length 36) for administrative queries, cross-tenant auditing, and targeted single-compound data exports. For new shared compounds, the `compound_id` is identically their Appwrite Team ID.

### 1.2 Isolated Model (Legacy)
- **Dedicated Infrastructure**: Legacy compounds continue to run on dedicated Appwrite projects/databases without disruption.
- **Backwards Compatibility**: Default configuration falls back to isolated mode (`architectureType: "isolated"`). Legacy compounds originally used numeric string IDs (e.g. `"62"`, `"7"`) but are being migrated to use slugified names consistently for `compound_id`.

---

## 2. Team Naming & Role Mapping Conventions

### 2.1 Team ID Naming Standard
To ensure strict consistency across the backend and mobile clients:
- **Rule**: The Appwrite **Team ID** MUST strictly evaluate to the specific compound's name, slugified into a valid Appwrite ID format.
- **Format Algorithm**:
  - Convert to lowercase.
  - Replace spaces and special characters with underscores `_`.
  - Strip leading underscores and truncate to a maximum of 36 characters.
- **Examples**:
  - `Green Hills Compound` -> Team ID: `green_hills_compound`
  - `Palm Parks (Phase 1)` -> Team ID: `palm_parks_phase_1`
  - `Al Rehab City 2` -> Team ID: `al_rehab_city_2`

### 2.2 Standardized Membership Roles
Within each compound's Appwrite Team, users are assigned explicit roles that map to application entitlements:

| Role Name | Description & Permissions Scope |
| :--- | :--- |
| `resident` | General compound residents; read public feeds, create maintenance requests & gate passes. |
| `owner` | Property owner with unit verification rights; access finance/billing invoices. |
| `tenant` | Tenant residing in rented property. |
| `manager` | Compound manager / board governor; manage announcements, view reports & audit logs. |
| `gatekeeper` | Security guard staff; scan QR passes, log shift activities, inspect entry/exit events. |
| `technician` | Maintenance staff; view assigned work orders, update repair statuses. |
| `admin` | System administrator with full operational access to the compound team. |

---

## 3. Appwrite MCP Integration & Automated Management

Management of multi-tenant teams, role assignments, and collection DLS rules can be automated using `appwriteMCP` CLI tooling.

### 3.1 Step 1: Auto-Create Appwrite Team for a Compound
To create a team using the slugified compound name:

```bash
# Call appwriteMCP tool to create team
appwrite_call_tool --name teams_create \
  --arguments '{
    "teamId": "green_hills_compound",
    "name": "Green Hills Compound"
  }'
```

### 3.2 Step 2: Assign User Roles within Compound Team
Add a user to the compound team with assigned operational roles:

```bash
# Assign a manager role
appwrite_call_tool --name teams_create_membership \
  --arguments '{
    "teamId": "green_hills_compound",
    "email": "manager@greenhills.com",
    "roles": ["manager", "resident"],
    "url": "https://whatsunity.app/invite"
  }'

# Assign a gatekeeper security role
appwrite_call_tool --name teams_create_membership \
  --arguments '{
    "teamId": "green_hills_compound",
    "email": "guard1@greenhills.com",
    "roles": ["gatekeeper"],
    "url": "https://whatsunity.app/invite"
  }'
```

### 3.3 Step 3: Configure DLS Permissions on Collections via Schema Provisioning Tool
Run the schema provisioning Dart tool to automatically apply `Role.team(teamId)` DLS permissions across all central collections:

```bash
# Provision shared compound schema and apply Team DLS rules
dart run tools/provision_appwrite_schema.dart --compound mivida
```

---

## 4. Backup, Migration & Single-Tenant Export Protocols

### 4.1 Single-Compound Data Export (Targeted CSV / JSON Export)
Because every document is tagged with `compound_id`, single-tenant data exports can be generated safely from the central database without exposing other tenants:

```bash
# Example query to fetch all profiles for a specific compound
appwrite_call_tool --name databases_list_documents \
  --arguments '{
    "databaseId": "wu_auth",
    "collectionId": "profiles",
    "queries": [
      "equal(\"compound_id\", [\"green_hills_compound\"])"
    ]
  }'
```

### 4.2 Automated Single-Tenant Backup Procedure
1. Execute export queries filtering by `compound_id` across all database domains (`auth`, `social`, `maintenance`, `security`, `services`, `finance`).
2. Package exported collections into isolated JSON/CSV archives named `backup_<compound_id>_<timestamp>.json`.
3. Store back-ups in isolated secure S3/R2 storage buckets.

### 4.3 Migration from Isolated to Shared Multi-Tenant
1. Provision the compound team in the central project using `teams_create`.
2. Run `tools/provision_appwrite_schema.dart` on the central database.
3. Migrate collection rows from the isolated project to the central database, setting `'compound_id': '<team_id>'` on every row and updating document permissions to `Permission.read(Role.team('<team_id>'))`.
4. Update `lib/core/config/appwrite_compounds_data.dart` to change the compound entry's `architectureType` to `"shared"`.

---

## 5. Flutter Integration Guide

### 5.1 BLoC/Cubit Layer Context Access
During application initialization or compound selection, `bootstrapAppwriteForCompound()` populates `ActiveCompoundContext`. Any presentation or domain layer can synchronously read multi-tenant parameters:

```dart
// Check active architecture
if (ActiveCompoundContext.isShared) {
  final teamId = ActiveCompoundContext.teamId;       // e.g. "green_hills_compound"
  final compoundId = ActiveCompoundContext.compoundId; // e.g. "62"
  
  // Apply compound filter to Appwrite queries
  final queries = [
    Query.equal('compound_id', compoundId!),
    Query.orderDesc('\$createdAt'),
  ];
}
```

### 5.2 Document Permissions Helper for Repository Writes
When creating new documents in shared mode, repositories construct permissions using `Role.team`:

```dart
List<String>? buildDocumentPermissions({required String userId}) {
  if (ActiveCompoundContext.isShared && ActiveCompoundContext.teamId != null) {
    final team = ActiveCompoundContext.teamId!;
    return [
      Permission.read(Role.team(team)),
      Permission.update(Role.user(userId)),
      Permission.delete(Role.user(userId)),
    ];
  }
  return null; // Fallback to collection-level permissions for isolated mode
}
```

---
*Maintained by WhatsUnity Engineering Team.*
