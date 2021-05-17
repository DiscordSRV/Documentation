Allows permissions/groups/prefixes/etc to be assigned easily based on certain DiscordSRV states.

More information about contexts can be found here: https://github.com/lucko/LuckPerms/wiki/Context

Available contexts:

* `discordsrv:linked` - whether the player has linked a Discord account (true/false)
* `discordsrv:boosting` - whether the player is boosting the Discord guild (true/false)
* `discordsrv:role` - the roles the user has in Discord

e.g. 

##### `/lp group default permission set essentials.fly true discordsrv:linked=true`
will give all users access to `/fly` if they have their account linked to Discord.

##### `/lp group default meta addsuffix 100 &d[Boost] discordsrv:boosting=true`
will give a pink `[Boost]` suffix to all users boosting the Discord guild.

##### `/lp group default permission set chat.use false discordsrv:role=muted`
will negate the `chat.use` permission for anyone with the `muted` role in Discord.

These can be disabled using a `LuckPerms-Contexts` entry in the `DisabledPluginHooks` config section.

Original implementation: https://github.com/DiscordSRV/DiscordSRV/pull/728