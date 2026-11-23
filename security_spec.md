# Security Specification — Oceanic Atlas Firestore Rules

## 1. Data Invariants
1. A `UserProfile` at `/users/{userId}` can only be read (`get`) or modified by the authenticated verified user whose `request.auth.uid == userId`. Collection listing on `/users` is unconditionally forbidden to prevent PII (`email`) exposure.
2. All `bookmarkedIds` and `masteredTopicIds` arrays are bounded strictly to `<= 200` items to prevent unbounded document growth.
3. A `StudyNote` at `/users/{userId}/notes/{noteId}` belongs strictly to `userId == request.auth.uid` and must carry `userId == request.auth.uid` on both create and update.
4. `createdAt` must equal `request.time` on creation and remain immutable on updates; `updatedAt` must equal `request.time` on both create and update.

## 2. Adversarial Payloads Tested ("Dirty Dozen")
1. Unauthenticated `get` on `/users/uid123` -> DENIED.
2. Authenticated user `uidA` attempting `get` on `/users/uidB` -> DENIED (PII isolation).
3. Authenticated user `uidA` attempting `list` on `/users` -> DENIED.
4. Unverified email user (`email_verified: false`) writing `/users/uidA` -> DENIED.
5. Spoofed `uid` field (`uid: "uidB"`) when writing `/users/uidA` -> DENIED.
6. Shadow field injection (`isAdmin: true`) on `/users/uidA` create -> DENIED (`hasOnly` check).
7. Oversized `bookmarkedIds` array (`size > 200`) -> DENIED.
8. Invalid `preferredLanguage` enum (`"xx"`) -> DENIED.
9. Client-forged `createdAt` timestamp not equal to `request.time` -> DENIED.
10. Update changing immutable `uid` or `createdAt` on `/users/uidA` -> DENIED.
11. User `uidA` attempting `list` or `create` on `/users/uidB/notes` -> DENIED.
12. Oversized `content` (`> 5000` chars) or invalid path ID (`id` containing `/`) -> DENIED.
