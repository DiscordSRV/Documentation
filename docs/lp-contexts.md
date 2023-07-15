Allows permissions/groups/prefixes/etc to be assigned easily based on certain DiscordSRV states.

More information about contexts can be found here: https://luckperms.net/wiki/Context

Available contexts:

* `discordsrv:linked` - whether the player has linked a Discord account (true/false)
* `discordsrv:boosting` - whether the player is boosting the Discord guild (true/false)
* `discordsrv:role` - the role the user has in Discord
* `discordsrv:role_id` - the role id the user has in Discord
* `discordsrv:server_id` - whether the user is a member of the server with the given id (which the bot is also a part of)

##### Examples

/// tab | discordsrv:linked
+-----------------------------------------------------------------------------------+
| Command                                                                           |
+-----------------------------------------------------------------------------------+
| `/lp group default permission set essentials.fly true discordsrv:linked=true`     |
+-----------------------------------------------------------------------------------+
| Explanation                                                                       |
+-----------------------------------------------------------------------------------+
| will give all users access to `/fly` if they have their account linked to Discord |
+-----------------------------------------------------------------------------------+
///

/// tab | discordsrv:boosting
+-----------------------------------------------------------------------------------+
| Command                                                                           |
+-----------------------------------------------------------------------------------+
| `/lp group default meta addsuffix 100 &d[Boost] discordsrv:boosting=true`         |
+-----------------------------------------------------------------------------------+
| Explanation                                                                       |
+-----------------------------------------------------------------------------------+
| will give a pink `[Boost]` suffix to all users boosting the Discord guild         |
+-----------------------------------------------------------------------------------+
///

/// tab | discordsrv:role
+-----------------------------------------------------------------------------------+
| Command                                                                           |
+-----------------------------------------------------------------------------------+
| `/lp group default permission set chat.use false discordsrv:role=muted`           |
+-----------------------------------------------------------------------------------+
| Explanation                                                                       |
+-----------------------------------------------------------------------------------+
| will negate the `chat.use` permission for anyone with the `muted` role in Discord |
+-----------------------------------------------------------------------------------+
///

/// tab | discordsrv:role_id
+----------------------------------------------------------------------------------------------------------+
| Command                                                                                                  |
+----------------------------------------------------------------------------------------------------------+
| `/lp group default permission set chat.use false discordsrv:role_id=000000000000`                        |
+----------------------------------------------------------------------------------------------------------+
| Explanation                                                                                              |
+----------------------------------------------------------------------------------------------------------+
| will negate the `chat.use` permission for anyone with the role that has the `000000000000` ID in Discord |
+----------------------------------------------------------------------------------------------------------+
///

/// tab | discordsrv:server_id
+----------------------------------------------------------------------------------------------------------+
| Command                                                                                                  |
+----------------------------------------------------------------------------------------------------------+
| `/lp group default permission set essentials.back true discordsrv:server_id=000000000000`                |
+----------------------------------------------------------------------------------------------------------+
| Explanation                                                                                              |
+----------------------------------------------------------------------------------------------------------+
| will give all users access to `/back` for anyone in the server that has the `000000000000` ID in Discord |
+----------------------------------------------------------------------------------------------------------+
///


These can be disabled using a `LuckPerms-Contexts` entry in the `DisabledPluginHooks` config section.

Original implementation: https://github.com/DiscordSRV/DiscordSRV/pull/728
