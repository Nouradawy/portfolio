# Appwrite identity migration

## Current compatibility phase

`profiles.$id`, `user_roles.$id`, and `notification_preferences.$id` are the
canonical Appwrite Auth user ID. `user_apartments.$id` remains an independent
assignment ID and uses `user_id` as its user reference.

New writers must not populate the legacy `profile` relationship. Production
still requires `user_roles.user_id` and `notification_preferences.user_id`, so
writers keep those values until the data migration is complete.

## Production cutover (review and approve separately)

1. Export the four affected tables and verify every role/preference `$id`
   equals `user_id`, and every apartment has a non-empty `user_id`.
2. Backfill or repair rows that do not meet those invariants. Do not delete a
   row as a substitute for resolving a duplicate.
3. Replace the user-apartment unique index with
   `(compound_id, building_num, apartment_num, user_id)`. Define an explicit
   active-assignment policy before allowing a reassignment after soft deletion.
4. Make legacy `user_id` columns optional, deploy writers that use `$id` only,
   and validate registration plus notification preference creation.
5. Remove `user_id`, `profile`, and unused `compound_id` columns only after a
   successful validation window. Appwrite schema changes are irreversible in
   practice; take a fresh export immediately before each destructive step.

The provisioner intentionally reports drift but does not mutate an existing
index definition or remove an existing column. Apply this runbook through a
reviewed, explicitly approved production migration.
