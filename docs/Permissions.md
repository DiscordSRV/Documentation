A permissions plugin (preferably [LuckPerms](https://luckperms.net)) is highly recommended to use these permissions effectively. If this is your first time setting up permissions and you're planning on using LuckPerms, [read this section of LuckPerms' wiki](https://luckperms.net/wiki/Usage).

## Parent Permissions
These are super permissions that grant a bunch of standard permissions for your use case. Generally, these two parent permissions are the ones you should use.  

+-----------------------+-------------+------------------------------------------------------------+-----------------------------------------+
| **Parent Permission** | **Default** | **Description**                                            | **Child Permissions**                   |
+=======================+=============+============================================================+=========================================+
| `discordsrv.player`   | true        | parent permission of player-related function of DiscordSRV | `discordsrv.chat` <br>                  |
|                       |             |                                                            | `discordsrv.help` <br>                  |
|                       |             |                                                            | `discordsrv.link` <br>                  |
|                       |             |                                                            | `discordsrv.linked` <br>                |
|                       |             |                                                            | `discordsrv.discord` <br>               |
+-----------------------+-------------+------------------------------------------------------------+-----------------------------------------+
| `discordsrv.admin`    | op          | parent permission of admin-related functions of DiscordSRV | `discordsrv.player` <br>                |
|                       |             |                                                            | `discordsrv.updatenotification` <br>    |
|                       |             |                                                            | `discordsrv.bcast` <br>                 |
|                       |             |                                                            | `discordsrv.reload` <br>                |
|                       |             |                                                            | `discordsrv.resync` <br>                |
|                       |             |                                                            | `discordsrv.debug` <br>                 |
|                       |             |                                                            | `discordsrv.link.others` <br>           |
|                       |             |                                                            | `discordsrv.linked.others` <br>         |
|                       |             |                                                            | `discordsrv.unlink` <br>                |
|                       |             |                                                            | `discordsrv.unlink.others` <br>         |
|                       |             |                                                            | `discordsrv.groupsyncwithcommands` <br> |
|                       |             |                                                            | `discordsrv.resync` <br>                |
+-----------------------+-------------+------------------------------------------------------------+-----------------------------------------+

## Permissions
These are individual permissions that can be given or taken away to fine tune what players are able to do.  

+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| Permission                        | Default | Description                                                                                                                                   |
+===================================+=========+===============================================================================================================================================+
| `discordsrv.discord`              | true    | allows access to the `/discord`/`/discordsrv` command                                                                                         |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.chat`                 | true    | whether or not the user is able to have their chat forwarded to Discord                                                                       |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.silentjoin`           | false   | whether or not to have join messages silenced for players with this permission                                                                |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.silentquit`           | false   | whether or not to have quit messages silenced for players with this permission                                                                |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.help`                 | true    | whether or not the player is able to run DiscordSRV's help command                                                                            |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.updatenotification`   | op      | whether or not the player should be told if there's an update to DiscordSRV upon joining                                                      |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.bcast`                | op      | whether or not the player is able to run DiscordSRV's broadcast command                                                                       |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.reload`               | op      | whether or not the player is able to reload DiscordSRV's configuration                                                                        |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.resync`               | op      | whether or not the player is able to manually resynchronize all groups & roles                                                                |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.debug`                | op      | whether or not the player is able to run a debug report                                                                                       |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.link`                 | true    | whether or not the player is able to link their Minecraft account to their Discord account                                                    |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.link.others`          | op      | whether or not the player is able to link other people's Minecraft accounts to Discord accounts                                               |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.unlink`               | op      | whether or not the player is able to unlink their Minecraft account from their Discord account                                                |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.unlink.others`        | op      | whether or not the player is able to unlink other people's Minecraft accounts from their Discord accounts                                     |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.linked`               | true    | whether or not the player is able to check what Discord account their Minecraft account is linked to                                          |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.linked.others`        | op      | whether or not the player is able to check what Discord account other Minecraft accounts are linked to                                        |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.groupsyncwithcommands`| op      | whether or not the player can run a permission plugin command to force group sync to occur                                                    |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.resync`               | op      | whether or not the player can run `/discord resync` to force a resync of all groups/roles                                                     |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.sync.<group>`         | true    | Groups that should be added to the player if their discord account is linked.                                                                 |
|                                   |         |                                                                                                                                               |
|                                   |         | Each group must be added to the `GroupRoleSynchronizationGroupsAndRolesToSync` option in [synchronization.yml](../synchronization) first      |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+
| `discordsrv.sync.deny.<group>`    | true    | Groups that should be removed from the player if their discord account is linked.                                                             |
|                                   |         |                                                                                                                                               |
|                                   |         | Permissions need to be enabled through the `GroupRoleSynchronizationEnableDenyPermission` option in [synchronization.yml](../synchronization) |
+-----------------------------------+---------+-----------------------------------------------------------------------------------------------------------------------------------------------+

## Deprecated Permissions

+-------------------------+---------+-------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------+
| Permission              | Default | Description                                                                               | Notice                                                                                                                                       |
+=========================+=========+===========================================================================================+==============================================================================================================================================+
| `discordsrv.subscribe`  | true    | whether or not the player is able to subscribe to Discord messages being sent to them     |                                                                                                                                              |
+-------------------------+---------+-------------------------------------------------------------------------------------------+                                                                                                                                              |
| `discordsrv.unsubscribe`| true    | whether or not the player is able to unsubscribe from Discord messages being sent to them | The subscription system was removed in version 15.3 due to low usage and unrecoverable problems with use of chat channel supporting plugins. |
+-------------------------+---------+-------------------------------------------------------------------------------------------+                                                                                                                                              |
| `discordsrv.toggle`     | true    | whether or not the player is able to toggle their subscription status to Discord messages |                                                                                                                                              |
+-------------------------+---------+-------------------------------------------------------------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------+