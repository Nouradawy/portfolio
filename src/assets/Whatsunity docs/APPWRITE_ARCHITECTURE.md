# Appwrite Architecture & Detailed Schema

This document provides the exhaustive, attribute-by-attribute schema for all Appwrite collections across all databases, auto-generated from `tools/provision_spec.json`.

## Databases Overview
- **`auth`** (6 collections)
- **`social`** (8 collections)
- **`admin`** (2 collections)
- **`maintenance`** (5 collections)
- **`security`** (11 collections)
- **`services`** (1 collections)

---
## Database: `auth`

### `profiles` (Profiles)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `full_name` | String | Max: 256 | No |  |
| `display_name` | String | Max: 128 | No |  |
| `avatar_url` | String | Max: 2000 | No |  |
| `phone_number` | String | Max: 64 | No |  |
| `owner_type` | String | Max: 64 | No |  |
| `userState` | Enum (String) | Enum: newAccount, pending, underReview, approved, declined, banned, onConflict, chatBanned | No | newAccount |
| `actionTakenBy` | String | Max: 128 | No |  |
| `verFiles` | String (Text/JSON) |  | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_profiles_display_name_ft` (Fulltext) on `[display_name]`
- `idx_profiles_full_name_ft` (Fulltext) on `[full_name]`
- `idx_profiles_userState` (Key) on `[userState]`

### `user_roles` (User roles)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `user_id` | String | Max: 36 | Yes |  |
| `role_id` | Enum (String) | Enum: user, manager, admin, developer, owner, tenant, staff, service_provider | No | user |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |
| `profile` | String | Max: 36 | No |  |

**Indexes:**
- `idx_user_roles_user_id` (Unique) on `[user_id]`

### `user_apartments` (User apartments)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `user_id` | String | Max: 36 | Yes |  |
| `compound_id` | String | Max: 36 | Yes |  |
| `building_num` | String | Max: 64 | Yes |  |
| `apartment_num` | String | Max: 64 | Yes |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |
| `profile` | String | Max: 36 | No |  |

**Indexes:**
- `idx_ua_user_id` (Key) on `[user_id]`
- `idx_ua_compound_building_apt` (Unique) on `[compound_id, building_num, apartment_num]`

### `buildings` (Buildings)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `building_name` | String | Max: 128 | Yes |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_buildings_compound_name` (Unique) on `[compound_id, building_name]`



### `notification_preferences` (Notification preferences)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `user_id` | String | Max: 36 | Yes |  |
| `general_chat_enabled` | Boolean |  | No | true |
| `building_chat_enabled` | Boolean |  | No | true |
| `admin_notifications_enabled` | Boolean |  | No | true |
| `maintenance_notifications_enabled` | Boolean |  | No | true |
| `version` | Integer |  | No | 0 |
| `profile` | String | Max: 36 | No |  |

**Indexes:**
- `idx_notif_pref_user` (Unique) on `[user_id]`

---
## Database: `social`

### `channels` (Channels)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `building_id` | String | Max: 36 | No |  |
| `name` | String | Max: 128 | Yes |  |
| `type` | String | Max: 64 | Yes |  |
| `message_seq` | Integer |  | No | 0 |
| `mention_seq` | Integer |  | No | 0 |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_channels_compound_building_type` (Unique) on `[compound_id, building_id, type]`

### `messages` (Messages)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `author_id` | String | Max: 36 | Yes |  |
| `channel_id` | String | Max: 36 | Yes |  |
| `text` | String (Text/JSON) |  | No |  |
| `uri` | String (Text/JSON) |  | No |  |
| `type` | String | Max: 32 | No |  |
| `sent_at` | Datetime |  | No |  |
| `metadata` | String (Text/JSON) |  | No |  |
| `reply_to` | String | Max: 64 | No |  |
| `deleted_at` | Datetime |  | No |  |
| `version` | Integer |  | No | 0 |

**Indexes:**
- `idx_msg_channel` (Key) on `[channel_id]`
- `idx_msg_channel_created` (Key) on `[channel_id, $createdAt]`
- `idx_msg_author` (Key) on `[author_id]`

### `channel_read_states` (Channel read states)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `channel_id` | String | Max: 36 | Yes |  |
| `user_id` | String | Max: 36 | Yes |  |
| `last_read_at` | Datetime |  | Yes |  |

**Indexes:**
- `idx_channel_read_channel_user` (Unique) on `[channel_id, user_id]`
- `idx_channel_read_last_read` (Key) on `[channel_id, last_read_at]`

### `posts` (Posts)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `author_id` | String | Max: 36 | Yes |  |
| `post_head` | String (Text/JSON) |  | Yes |  |
| `source_url` | String (Text/JSON) |  | No |  |
| `cta_type` | Enum (String) | Enum: none, phone, whatsapp | No | none |
| `cta_phone` | String | Max: 32 | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_posts_compound_created` (Key) on `[compound_id, $createdAt]`

### `community_votes` (Community votes)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `channel_id` | String | Max: 36 | Yes |  |
| `compound_id` | String | Max: 36 | Yes |  |
| `author_id` | String | Max: 36 | Yes |  |
| `title` | String | Max: 256 | Yes |  |
| `imageSources` | String (Text/JSON) |  | No |  |
| `options` | String (Text/JSON) |  | No |  |
| `votes` | String (Text/JSON) |  | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_votes_channel_compound_created` (Key) on `[channel_id, compound_id, $createdAt]`

### `comments` (Comments)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `parent_id` | String | Max: 36 | Yes |  |
| `type` | String | Max: 32 | Yes |  |
| `author_id` | String | Max: 36 | Yes |  |
| `content` | String (Text/JSON) |  | Yes |  |
| `createdAt` | Datetime |  | Yes |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_comments_parent_type` (Key) on `[parent_id, type]`
- `idx_comments_compound` (Key) on `[compound_id]`

### `presence_sessions` (Presence sessions)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `user_id` | String | Max: 36 | Yes |  |
| `compound_id` | String | Max: 36 | No |  |
| `status` | String | Max: 32 | No |  |
| `last_seen_at` | Datetime |  | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |
| `profile` | String | Max: 36 | No |  |

**Indexes:**
- `idx_presence_user` (Unique) on `[user_id]`
- `idx_presence_compound` (Key) on `[compound_id]`
- `idx_presence_last_seen` (Key) on `[last_seen_at]`

### `compound_announcements` (Compound announcements)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `author_id` | String | Max: 36 | Yes |  |
| `author_type` | String | Max: 32 | Yes |  |
| `audience` | String | Max: 32 | Yes |  |
| `title` | String | Max: 256 | Yes |  |
| `body` | String (Text/JSON) |  | Yes |  |
| `priority` | String | Max: 16 | Yes |  |
| `published_at` | Datetime |  | Yes |  |
| `expires_at` | Datetime |  | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_ca_compound_audience_published` (Key) on `[compound_id, audience, published_at]`

---
## Database: `admin`

### `report_user` (User reports)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `authorId` | String | Max: 36 | Yes |  |
| `createdAt` | Datetime |  | Yes |  |
| `reportedUserId` | String | Max: 36 | Yes |  |
| `state` | String | Max: 64 | Yes |  |
| `description` | String (Text/JSON) |  | Yes |  |
| `messageId` | String | Max: 64 | No |  |
| `reportedFor` | String | Max: 64 | No |  |
| `compoundId` | String | Max: 36 | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_report_user_reported` (Key) on `[reportedUserId]`
- `idx_report_user_compound` (Key) on `[compoundId]`

### `compound_governors` (Compound Governors)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `user_id` | String | Max: 36 | Yes |  |
| `display_name` | String | Max: 128 | Yes |  |
| `avatar_url` | String | Max: 2000 | No |  |
| `is_active` | Boolean |  | No | true |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_cg_compound_active` (Key) on `[compound_id, is_active]`
- `idx_cg_user` (Unique) on `[compound_id, user_id]`

---
## Database: `maintenance`

### `maintenance_reports` (Maintenance reports)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `user_id` | String | Max: 36 | Yes |  |
| `compound_id` | String | Max: 36 | No |  |
| `title` | String | Max: 256 | Yes |  |
| `description` | String (Text/JSON) |  | Yes |  |
| `category` | String | Max: 64 | Yes |  |
| `type` | String | Max: 64 | Yes |  |
| `report_code` | String | Max: 32 | Yes |  |
| `status` | String | Max: 32 | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_maint_compound_type` (Key) on `[compound_id, type]`
- `idx_maint_compound_type_status` (Key) on `[compound_id, type, status]`
- `idx_maint_report_code` (Unique) on `[report_code]`

### `report_code_counters` (Report code counters)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `prefix` | String | Max: 8 | Yes |  |
| `next_number` | Integer |  | Yes | 1 |
| `version` | Integer |  | No | 0 |

**Indexes:**
- `idx_report_code_counters_prefix` (Unique) on `[prefix]`

### `maintenance_attachments` (Maintenance attachments)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `report_id` | String | Max: 36 | Yes |  |
| `compound_id` | String | Max: 36 | No |  |
| `type` | String | Max: 64 | Yes |  |
| `source_url` | String (Text/JSON) |  | Yes |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_matt_report` (Key) on `[report_id]`
- `idx_matt_compound_type` (Key) on `[compound_id, type]`

### `maintenance_history` (Maintenance history)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `report_id` | String | Max: 36 | Yes |  |
| `actor_id` | String | Max: 36 | Yes |  |
| `action` | String (Text/JSON) |  | Yes |  |
| `created_at` | Datetime |  | Yes |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_mhist_report` (Key) on `[report_id]`

### `maintenance_team_members` (Maintenance team roster)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `user_id` | String | Max: 36 | Yes |  |
| `display_name` | String | Max: 128 | Yes |  |
| `role` | Enum (String) | Enum: chief_engineer, supervisor, coordinator, technician, housekeeping | Yes | technician |
| `avatar_url` | String | Max: 2000 | No |  |
| `is_active` | Boolean |  | No | true |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_mtm_compound_active` (Key) on `[compound_id, is_active]`
- `idx_mtm_user` (Unique) on `[compound_id, user_id]`

---
## Database: `security`

### `gate_passes` (Gate passes)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `resident_id` | String | Max: 36 | Yes |  |
| `guest_id` | String (Text/JSON) |  | No |  |
| `guest_name` | String (Text/JSON) |  | Yes |  |
| `purpose` | String (Text/JSON) |  | Yes |  |
| `access_notes` | String (Text/JSON) |  | No |  |
| `valid_until` | Datetime |  | Yes |  |
| `status` | String | Max: 32 | Yes |  |
| `qr_payload` | String (Text/JSON) |  | No |  |
| `record_type` | Enum (String) | Enum: visitor_pass, security_note | No | visitor_pass |
| `entered_at` | Datetime |  | No |  |
| `exited_at` | Datetime |  | No |  |
| `expected_duration_min` | Integer |  | No | 0 |
| `building_num` | String | Max: 64 | No |  |
| `apartment_num` | String | Max: 64 | No |  |
| `phone_number` | String | Max: 64 | No |  |
| `plate_number` | String | Max: 64 | No |  |
| `id_photo_url` | String (Text/JSON) |  | No |  |
| `entry_kind` | String (Text/JSON) |  | No |  |
| `photo_url` | String (Text/JSON) |  | No |  |
| `valid_from` | Datetime |  | No |  |
| `visit_purpose` | Enum (String) | Enum: visitor, service_provider, delivery | No | visitor |
| `service_type` | String (Text/JSON) |  | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_gate_passes_compound_resident` (Key) on `[compound_id, resident_id]`
- `idx_gate_passes_valid_until` (Key) on `[valid_until]`
- `idx_gate_passes_status` (Key) on `[status]`
- `idx_gp_compound_entered` (Key) on `[compound_id, entered_at]`
- `idx_gp_compound_building_apt` (Key) on `[compound_id, building_num, apartment_num]`

### `resident_notes` (Resident notes per apartment)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `building_num` | String | Max: 64 | Yes |  |
| `apartment_num` | String | Max: 64 | Yes |  |
| `apartment_id` | String | Max: 36 | Yes |  |
| `author_id` | String | Max: 36 | Yes |  |
| `body` | String (Text/JSON) |  | Yes |  |
| `priority` | String | Max: 16 | Yes |  |
| `is_active` | Boolean |  | No | true |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_rn_compound_building_apt` (Key) on `[compound_id, building_num, apartment_num]`
- `idx_rn_apartment` (Key) on `[apartment_id]`

### `lost_found_items` (Lost and found items)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `reporter_id` | String | Max: 36 | Yes |  |
| `reporter_role` | String | Max: 32 | Yes |  |
| `category` | String | Max: 64 | Yes |  |
| `description` | String (Text/JSON) |  | Yes |  |
| `location_found` | String | Max: 256 | Yes |  |
| `found_at` | Datetime |  | Yes |  |
| `photo_url` | String (Text/JSON) |  | No |  |
| `status` | String | Max: 32 | Yes |  |
| `claimant_id` | String | Max: 36 | No |  |
| `claimed_at` | Datetime |  | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_lf_compound_status` (Key) on `[compound_id, status]`
- `idx_lf_compound_created` (Key) on `[compound_id, $createdAt]`

### `security_shifts` (Security guard shifts)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `guard_id` | String | Max: 36 | Yes |  |
| `shift_type` | String | Max: 32 | Yes |  |
| `start_at` | Datetime |  | Yes |  |
| `end_at` | Datetime |  | Yes |  |
| `clock_in_at` | Datetime |  | No |  |
| `clock_out_at` | Datetime |  | No |  |
| `status` | String | Max: 32 | Yes |  |
| `post_label` | String | Max: 128 | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_ss_compound_start` (Key) on `[compound_id, start_at]`
- `idx_ss_compound_guard_status` (Key) on `[compound_id, guard_id, status]`

### `security_team_members` (Security team roster)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `user_id` | String | Max: 36 | Yes |  |
| `display_name` | String | Max: 128 | Yes |  |
| `role` | Enum (String) | Enum: head_security, supervisor, gatekeeper, patrol | Yes | gatekeeper |
| `post_label` | String | Max: 128 | No |  |
| `avatar_url` | String | Max: 2000 | No |  |
| `is_active` | Boolean |  | No | true |
| `pattern_json` | String (Text/JSON) |  | No |  |
| `overrides_json` | String (Text/JSON) |  | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_stm_compound_active` (Key) on `[compound_id, is_active]`
- `idx_stm_user` (Unique) on `[compound_id, user_id]`

### `security_incidents` (Security Incidents)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `guard_id` | String | Max: 36 | Yes |  |
| `type` | String | Max: 32 | Yes |  |
| `subtype` | String | Max: 64 | Yes |  |
| `description` | String (Text/JSON) |  | Yes |  |
| `plate_number` | String | Max: 64 | No |  |
| `photo_url` | String (Text/JSON) |  | No |  |
| `building_num` | String | Max: 64 | No |  |
| `apartment_num` | String | Max: 64 | No |  |
| `resident_id` | String | Max: 36 | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_si_compound_type` (Key) on `[compound_id, type]`
- `idx_si_guard` (Key) on `[guard_id]`
- `idx_si_apt` (Key) on `[compound_id, building_num, apartment_num]`

### `gate_pass_events` (Gate pass historical events)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `pass_id` | String | Max: 36 | Yes |  |
| `compound_id` | String | Max: 36 | Yes |  |
| `guard_id` | String | Max: 36 | No |  |
| `event_type` | Enum (String) | Enum: created, updated, approved, entered, exited, denied, canceled, overstayed | Yes | created |
| `notes` | String (Text/JSON) |  | No |  |
| `photo_url` | String | Max: 2000 | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_gpe_pass` (Key) on `[pass_id]`
- `idx_gpe_compound_event` (Key) on `[compound_id, event_type]`
- `idx_gpe_created` (Key) on `[pass_id, $createdAt]`

### `guests_directory` (Guests CRM directory)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `phone_number` | String | Max: 64 | Yes |  |
| `full_name` | String | Max: 128 | Yes |  |
| `plate_number` | String | Max: 64 | No |  |
| `id_photo_url` | String (Text/JSON) |  | No |  |
| `trust_level` | Enum (String) | Enum: trusted, neutral, blacklisted | No | neutral |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_guests_compound_phone` (Unique) on `[compound_id, phone_number]`
- `idx_guests_plate` (Key) on `[plate_number]`

### `guard_activities` (Guard activity statistics)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `guard_id` | String | Max: 36 | Yes |  |
| `date` | Datetime |  | Yes |  |
| `incidents` | Integer |  | No | 0 |
| `guests` | Integer |  | No | 0 |
| `deliveries` | Integer |  | No | 0 |
| `role` | String | Max: 64 | Yes |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_ga_lookup` (Key) on `[compound_id, guard_id, date]`

### `compound_shift_settings` (Compound Shift Settings and Fixed Routes)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `gate_names_json` | String (Text/JSON) |  | Yes |  |
| `zone_names_json` | String (Text/JSON) |  | Yes |  |
| `shift_times_json` | String (Text/JSON) |  | Yes |  |
| `active_weekdays_json` | String (Text/JSON) |  | Yes |  |
| `calendar_assignments_json` | String (Text/JSON) |  | Yes |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_css_compound` (Unique) on `[compound_id]`

### `shift_requests` (Shift requests)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `guard_id` | String | Max: 36 | Yes |  |
| `request_type` | String | Max: 32 | Yes |  |
| `start_date` | Datetime |  | Yes |  |
| `end_date` | Datetime |  | Yes |  |
| `status` | String | Max: 32 | Yes |  |
| `decline_reason` | String | Max: 512 | No |  |
| `backup_guard_id` | String | Max: 36 | No |  |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_sreq_compound_guard` (Key) on `[compound_id, guard_id]`
- `idx_sreq_compound_status` (Key) on `[compound_id, status]`

---
## Database: `services`

### `service_providers` (Service Providers)

| Attribute | Type | Notes / Size | Required | Default |
| --- | --- | --- | --- | --- |
| `compound_id` | String | Max: 36 | Yes |  |
| `user_id` | String | Max: 36 | Yes |  |
| `display_name` | String | Max: 128 | Yes |  |
| `role` | Enum (String) | Enum: technician, broker | Yes | technician |
| `avatar_url` | String | Max: 2000 | No |  |
| `is_active` | Boolean |  | No | true |
| `version` | Integer |  | No | 0 |
| `deleted_at` | Datetime |  | No |  |

**Indexes:**
- `idx_sp_compound_active` (Key) on `[compound_id, is_active]`
- `idx_sp_user` (Unique) on `[compound_id, user_id]`

---
