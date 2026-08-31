# WhatsUnity Appwrite Installation Guide

This guide provides step-by-step instructions on how to set up a new Appwrite Project (Database) for a new compound and correctly link it to the WhatsUnity mobile application.

## 1. Environment Preparation

Before running any CLI scripts, you must set the environment variables targeting the **new** Appwrite project. 

1. Create or open your local `.env` file at the root of the project.
2. Provide the newly created Appwrite Project ID and an API key with `databases` scope from that specific project:

```env
APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=<YOUR_NEW_PROJECT_ID>
APPWRITE_API_KEY=<YOUR_NEW_PROJECT_API_KEY>
```
*Note: Do NOT include `APPWRITE_API_KEY` in the mobile app bundle or `appwrite_compounds_data.dart`. It is strictly for backend provisioning.*

## 2. Registering the Compound in Code

To ensure the Flutter app knows about this new compound, you need to map it in the Dart code.

1. Open `lib/core/config/appwrite_compounds_data.dart`.
2. Add a new key-value entry for your compound ID (e.g., `"14"`).

```json
{
  "14": {
    "endpoint": "https://cloud.appwrite.io/v1",
    "projectId": "<YOUR_NEW_PROJECT_ID>",
    "databaseId": "wu_auth",
    "authDatabaseId": "wu_auth",
    "maintenanceDatabaseId": "wu_maint",
    "securityDatabaseId": "wu_sec",
    "socialDatabaseId": "wu_social",
    "adminDatabaseId": "wu_admin",
    "servicesDatabaseId": "wu_services"
  }
}
```

## 3. Provisioning the Appwrite Schema

We have automated the creation of all required databases, collections, attributes, and indexes. 

Run the provisioning script from the terminal:

```bash
dart run tools/provision_appwrite_schema.dart --compound 14
```
*(Replace `14` with your compound ID)*

**What this does:**
- It reads the `.env` API Key and `APPWRITE_PROJECT_ID`.
- It fetches the database IDs configured in `appwrite_compounds_data.dart` for the specified compound.
- It sequentially creates databases, collections, and attributes as defined in `tools/provision_spec.json`.

## 4. Seeding Entitlements (Billing Plans)

Each compound must have a billing plan to unlock specific UI features (e.g., `basic`, `pro`, `elite`). This plan is enforced server-side.

Run the entitlements seeder:

```bash
dart run tools/seed_compound_entitlements.dart --compound 14 --plan pro
```
*(Available plans: `basic`, `pro`, `elite`)*

## 5. Setting Up Appwrite Functions

Deploy the necessary Appwrite Functions into your new project. Each function must be deployed inside the Appwrite Console of the new project.

**Required Functions:**
1. `mint_security_qr`: Generates gate passes.
2. `notify_new_message`: Handles background push notifications.

**Important for Functions:**
- You must create a new API Key inside the Appwrite Console of your *new project* and bind it to the `APPWRITE_FUNCTION_API_KEY` environment variable for each function.
- Configure execution permissions on the functions to allow users with the correct roles to trigger them.

## 6. Verification

1. Start the Flutter app.
2. In the Welcome Screen or Compound Switcher, select your new compound.
3. Attempt to register a new user. Check the Appwrite Console in your new project to verify the Auth user and `profiles` document were created successfully.
