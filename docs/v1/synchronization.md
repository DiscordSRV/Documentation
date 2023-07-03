# [synchronization.yml](https://config.discordsrv.com/synchronization/_)

### NicknameSynchronization...
#### [`Enabled`](https://config.discordsrv.com/synchronization/NicknameSynchronizationEnabled) {id="NicknameSynchronizationEnabled"}
whether or not to set the discord user's nickname to the nickname format automatically

#### [`CycleTime`](https://config.discordsrv.com/synchronization/NicknameSynchronizationCycleTime) {id="NicknameSynchronizationCycleTime"}
amount of minutes between repeatedly triggering synchronization for all online players
#### [`Format`](https://config.discordsrv.com/synchronization/NicknameSynchronizationFormat) {id="NicknameSynchronizationFormat"}
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
#### [`...GroupsAndRolesToSync`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationGroupsAndRolesToSync) {id="GroupRoleSynchronizationGroupsAndRolesToSync"}
these are roles/groups you'd like synchronized between Discord and Minecraft

#### [`...MinecraftIsAuthoritative`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationMinecraftIsAuthoritative) {id="GroupRoleSynchronizationMinecraftIsAuthoritative"}
whether or not Minecraft group changes override Discord role changes
#### [`...OneWay`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationOneWay) {id="GroupRoleSynchronizationOneWay"}
whether or not to synchronise only one way, the way it is synchronised depends on the value of MinecraftIsAuthoritative.
#### [`...EnableDenyPermission`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationEnableDenyPermission) {id="GroupRoleSynchronizationEnableDenyPermission"}
whether or not discordsrv.sync.deny.<role id> permissions are enabled

#### [`PrimaryGroupOnly`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationPrimaryGroupOnly) {id="GroupRoleSynchronizationPrimaryGroupOnly"}
if true, only the player's primary group is counted for synchronization, otherwise, group sync counts all groups the player is in, including parent groups

#### [`...OnLink`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationOnLink) {id="GroupRoleSynchronizationOnLink"}
whether or not to resync when a player links

#### [`...CycleTime`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationCycleTime) {id="GroupRoleSynchronizationCycleTime"}
amount of minutes between repeatedly triggering synchronization for all online players

#### [`...CycleCompletely`](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationCycleCompletely) {id="GroupRoleSynchronizationCycleCompletely"}
whether or not synchronizations running on a timer should synchronize every member in the bots Discord servers

### BanSynchronization...
#### [`...DiscordToMinecraft`](https://config.discordsrv.com/synchronization/BanSynchronizationDiscordToMinecraft) {id="BanSynchronizationDiscordToMinecraft"}
the message at the beginning of the list, before all of the player names.
#### [`...DiscordToMinecraftReason`](https://config.discordsrv.com/synchronization/BanSynchronizationDiscordToMinecraftReason) {id="BanSynchronizationDiscordToMinecraftReason"}
used instead for when no players are online
#### [`...MinecraftToDiscord`](https://config.discordsrv.com/synchronization/BanSynchronizationMinecraftToDiscord) {id="BanSynchronizationMinecraftToDiscord"}

---
