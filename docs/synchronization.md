---
title: synchronization.yml
---

# [synchronization.yml](https://config.discordsrv.com/synchronization/_)

### NicknameSynchronization...
#### [`Enabled`](https://config.discordsrv.com/synchronization/NicknameSynchronizationEnabled) {#NicknameSynchronizationEnabled}
whether or not to set the discord user's nickname to the nickname format automatically

#### [`CycleTime`](https://config.discordsrv.com/synchronization/NicknameSynchronizationCycleTime) {#NicknameSynchronizationCycleTime}
amount of minutes between repeatedly triggering synchronization for all online players
#### [`Format`](https://config.discordsrv.com/synchronization/NicknameSynchronizationFormat) {#NicknameSynchronizationFormat}
the nickname format (keep in mind this shouldn't go over 32 characters)

+---------------------------+--------------------------------+---------+
| Available Placeholders    | Explanation                    | Example |
+===========================+================================+=========+
| `%displayname%`           | player's display name          | Jeb     |
+---------------------------+--------------------------------+---------+
| `%username%`              | player's username              | Jeb_    |
+---------------------------+--------------------------------+---------+
| `%discord_name%`          | player's discord username      | Jeb     |
+---------------------------+--------------------------------+---------+
| `%discord_discriminator%` | player's discord discriminator | 4988    |
+---------------------------+--------------------------------+---------+

PlaceholderAPI placeholders are supported

### GroupRoleSynchronization...
#### [`...GroupsAndRolesToSync`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationGroupsAndRolesToSync) {#GroupRoleSynchronizationGroupsAndRolesToSync}
these are roles/groups you'd like synchronized between Discord and Minecraft

#### [`...MinecraftIsAuthoritative`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationMinecraftIsAuthoritative) {#GroupRoleSynchronizationMinecraftIsAuthoritative}
whether or not Minecraft group changes override Discord role changes
#### [`...OneWay`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationOneWay) {#GroupRoleSynchronizationOneWay}
whether or not to synchronise only one way, the way it is synchronised depends on the value of MinecraftIsAuthoritative.
#### [`...EnableDenyPermission`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationEnableDenyPermission) {#GroupRoleSynchronizationEnableDenyPermission}
whether or not discordsrv.sync.deny.&lt;role id&gt; permissions are enabled

#### [`PrimaryGroupOnly`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationPrimaryGroupOnly) {#GroupRoleSynchronizationPrimaryGroupOnly}
if true, only the player's primary group is counted for synchronization, otherwise, group sync counts all groups the player is in, including parent groups

#### [`...OnLink`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationOnLink) {#GroupRoleSynchronizationOnLink}
whether or not to resync when a player links

#### [`...CycleTime`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationCycleTime) {#GroupRoleSynchronizationCycleTime}
amount of minutes between repeatedly triggering synchronization for all online players

#### [`...CycleCompletely`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationCycleCompletely) {#GroupRoleSynchronizationCycleCompletely}
whether or not synchronizations running on a timer should synchronize every member in the bots Discord servers

### BanSynchronization...
#### [`...DiscordToMinecraft`](https://config.discordsrv.com/synchronization/BanSynchronizationDiscordToMinecraft) {#BanSynchronizationDiscordToMinecraft}
the message at the beginning of the list, before all of the player names.
#### [`...DiscordToMinecraftReason`](https://config.discordsrv.com/synchronization/BanSynchronizationDiscordToMinecraftReason) {#BanSynchronizationDiscordToMinecraftReason}
used instead for when no players are online
#### [`...MinecraftToDiscord`](https://config.discordsrv.com/synchronization/BanSynchronizationMinecraftToDiscord) {#BanSynchronizationMinecraftToDiscord}

---
