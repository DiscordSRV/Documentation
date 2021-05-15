***
**Note: 🏗 This page is under construction.**
***  

### Table of Contents

> * [NicknameSynchronization](#NicknameSynchronization)
> 	* NicknameSynchronizationEnabled
> 	* NicknameSynchronizationCycleTime
> 	* NicknameSynchronizationFormat
> * [GroupRoleSynchronization](#GroupRoleSynchronization)
> 	* GroupRoleSynchronizationGroupsAndRolesToSync
> 	* GroupRoleSynchronizationMinecraftIsAuthoritative
> 	* GroupRoleSynchronizationOneWay
> 	* GroupRoleSynchronizationEnableDenyPermission
> 	* GroupRoleSynchronizationPrimaryGroupOnly
> 	* GroupRoleSynchronizationOnLink
> 	* GroupRoleSynchronizationCycleTime
> 	* GroupRoleSynchronizationCycleCompletely
> * [BanSynchronization](#BanSynchronization)
> 	* BanSynchronizationDiscordToMinecraft
> 	* BanSynchronizationDiscordToMinecraftReason
> 	* BanSynchronizationMinecraftToDiscord

### NicknameSynchronization:
#### `NicknameSynchronizationEnabled`[🔗](https://config.discordsrv.com/synchronization/NicknameSynchronizationEnabled)
whether or not to set the discord user's nickname to the nickname format automatically

#### `NicknameSynchronizationCycleTime`[🔗](https://config.discordsrv.com/synchronization/NicknameSynchronizationCycleTime)
amount of minutes between repeatedly triggering synchronization for all online players
#### `NicknameSynchronizationFormat`[🔗](https://config.discordsrv.com/synchronization/NicknameSynchronizationFormat)
the nickname format (keep in mind this shouldn't go over 32 characters)
| Available Placeholders | Usage
| --- | --- |
| %displayname%: player's display name | example: Jeb
| %username%:    player's username | example: Jeb_
PlaceholderAPI placeholders are supported

### GroupRoleSynchronization:
#### `GroupRoleSynchronizationGroupsAndRolesToSync`[🔗](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationGroupsAndRolesToSync)
these are roles/groups you'd like synchronized between Discord and Minecraft

#### `GroupRoleSynchronizationMinecraftIsAuthoritative`[🔗](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationMinecraftIsAuthoritative)
whether or not Minecraft group changes override Discord role changes
#### `GroupRoleSynchronizationOneWay`[🔗](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationOneWay)
whether or not to synchronise only one way, the way it is synchronised depends on the value of GroupRoleSynchronizationMinecraftIsAuthoritative.
#### `GroupRoleSynchronizationEnableDenyPermission`[🔗](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationEnableDenyPermission)
whether or not discordsrv.sync.deny.<role id> permissions are enabled

#### `GroupRoleSynchronizationPrimaryGroupOnly`[🔗](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationPrimaryGroupOnly)
if true, only the player's primary group is counted for synchronization, otherwise, group sync counts all groups the player is in, including parent groups

#### `GroupRoleSynchronizationOnLink`[🔗](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationOnLink)
whether or not to resync when a player links

#### `GroupRoleSynchronizationCycleTime`[🔗](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationCycleTime)
amount of minutes between repeatedly triggering synchronization for all online players

#### `GroupRoleSynchronizationCycleCompletely`[🔗](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationCycleCompletely)
whether or not synchronizations running on a timer should synchronize every member in the bots Discord servers

### BanSynchronization:
#### `BanSynchronizationDiscordToMinecraft`[🔗](https://config.discordsrv.com/synchronization/BanSynchronizationDiscordToMinecraft)
the message at the beginning of the list, before all of the player names.
#### `BanSynchronizationDiscordToMinecraftReason`[🔗](https://config.discordsrv.com/synchronization/BanSynchronizationDiscordToMinecraftReason)
used instead for when no players are online
#### `BanSynchronizationMinecraftToDiscord`[🔗](https://config.discordsrv.com/synchronization/BanSynchronizationMinecraftToDiscord)

---
