# Permissions

A permissions plugin (preferably [LuckPerms](https://luckperms.net)) is highly recommended to use these permissions effectively. If this is your first time setting up permissions and you're planning on using LuckPerms, [read this section of LuckPerms' wiki](https://luckperms.net/wiki/Usage).

## Command permissions

### Player commands

| Permission                       | Default | Description                                                                               |
|----------------------------------|---------|-------------------------------------------------------------------------------------------|
| `discordsrv.command.root`        | true    | allows access to the base `/discordsrv` command                                           |
| `discordsrv.command.help`        | true    | allows the player to run `/discordsrv help` to view command help                          |
| `discordsrv.command.link.self`   | true    | allows the player to link their own Minecraft account to a Discord account                |
| `discordsrv.command.linked.self` | true    | allows the player to check which Discord account their own Minecraft account is linked to |
| `discordsrv.command.unlink.self` | true    | allows the player to unlink their own Minecraft account from their Discord account        |

### Admin commands

| Permission                       | Default | Description                                                                                                 |
|----------------------------------|---------|-------------------------------------------------------------------------------------------------------------|
| `discordsrv.command.bypass`      | OP      | allows the player to run `/discordsrv bypass` to manage players who bypass required linking requirements    |
| `discordsrv.command.debug`       | OP      | allows the player to run `/discordsrv debug` and its diagnostic reporting subcommands                       |
| `discordsrv.command.parse`       | OP      | allows the player to run `/discordsrv parse` to parse placeholders through DiscordSRV's placeholder service |
| `discordsrv.command.reload`      | OP      | allows the player to run `/discordsrv reload` to reload specific DiscordSRV functions                       |
| `discordsrv.command.broadcast`   | OP      | allows the player to run the `/discordsrv broadcast` commands to send messages to Discord channels          |
| `discordsrv.command.resync`      | OP      | allows the player to run `/discordsrv resync` to resync online players                                      |
| `discordsrv.command.version`     | OP      | allows the player to view the installed DiscordSRV version                                                  |
| `discordsrv.command.link.other`  | OP      | allows the player to link other people's Minecraft accounts to Discord accounts                             |
| `discordsrv.command.linked.other`| OP      | allows the player to check which Discord account other Minecraft accounts are linked to                     |
| `discordsrv.command.unlink.other`| OP      | allows the player to unlink other people's Minecraft accounts from their Discord accounts                   |

## Mention permissions
:::caution NeoForge Dynamic Permissions
NeoForge doesn't allow taking dynamic suffixes for permission node. 
The permission `discordsrv.mention.role.<id>` below is granted differently on NeoForge. See [NeoForge Dynamic Permissions](#dynamic-permissions) for more information.
:::

These control what a player is able to mention in messages sent from Minecraft to Discord.

| Permission                          | Default | Description                                                              |
|-------------------------------------|---------|--------------------------------------------------------------------------|
| `discordsrv.mention.user.all`       | OP      | allows mentioning all Discord users                                      |
| `discordsrv.mention.user.lookup`    | OP      | allows looking up Discord users to mention them                          |
| `discordsrv.mention.role.mentionable` | OP    | allows mentioning roles that are set as mentionable on Discord           |
| `discordsrv.mention.role.all`       | OP      | allows mentioning all Discord roles                                      |
| `discordsrv.mention.role.<id>`      | OP      | allows mentioning the Discord role with the given role ID                |
| `discordsrv.mention.everyone`       | OP      | allows using `@everyone` and `@here`                                     |

## Miscellaneous permissions

| Permission                       | Default | Description                                                                              |
|----------------------------------|---------|------------------------------------------------------------------------------------------|
| `discordsrv.updatenotification`  | OP      | whether or not the player is told if there's an update to DiscordSRV upon joining        |
| `discordsrv.silentjoin`          | OP      | whether or not join messages are silenced for players with this permission               |
| `discordsrv.silentquit`          | OP      | whether or not quit messages are silenced for players with this permission               |

## NeoForge

NeoForge's permission API requires every permission to be registered when the server starts, and checking a permission that wasn't registered isn't allowed. This means permissions can't be created dynamically like on other platforms, where a suffix can simply be added to the end of a permission.

### Dynamic permissions

Permissions that take a parameter or a *suffix* use a NeoForge *dynamic context* instead of a suffix on the permission name. DiscordSRV registers one permission for them, and the parameter is passed along with the check as a context value.

| Other platforms                | NeoForge                       | Context | Value               |
|--------------------------------|--------------------------------|---------|---------------------|
| `discordsrv.mention.role.<id>` | `discordsrv.mention.role[id]`  | `id`    | the Discord role ID |

To allow a player to mention a specific role, set `discordsrv.mention.role` in your permission handler with the `id` context set to that role's ID. Giving `discordsrv.mention.role.<id>` as a plain permission will not work on NeoForge.

With LuckPerms, add the context to the end of the command as `id=<role id>`. For example, to let the `default` group mention the role with the ID `1545512022861684778`:

```
/luckperms group default permission set discordsrv.mention.role true id=1545512022861684778
```
![neoforge luckperms context example](/assets/luckperms_context_menu.png)
![neoforge luckperms context example](/assets/luckperms_context_full_example.png)
