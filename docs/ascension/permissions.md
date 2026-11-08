import ConfigLink from '@site/src/components/ConfigLink';

# Permissions

A permissions plugin (preferably [LuckPerms](https://luckperms.net)) is highly recommended to use these permissions effectively. If this is your first time setting up permissions and you're planning on using LuckPerms, [read this section of LuckPerms' wiki](https://luckperms.net/wiki/Usage).

## Command permissions

Each permission lets the player use the linked command. Permissions ending in `.self` apply to the player's own account, and permissions ending in `.other` apply to other accounts.

### Player commands

| Permission                       | Default | Description                                                                                                       |
|----------------------------------|---------|-------------------------------------------------------------------------------------------------------------------|
| `discordsrv.command.root`        | true    | Can use the [`/discordsrv`](/ascension/commands#discordsrv) command. Its subcommands need their own permissions  |
| `discordsrv.command.help`        | true    | Can use [`/discordsrv help`](/ascension/commands#help)                                                            |
| `discordsrv.command.link.self`   | true    | Can use [`/discordsrv link`](/ascension/commands#link) to link **their own** account                              |
| `discordsrv.command.linked.self` | true    | Can use [`/discordsrv linked`](/ascension/commands#linked) to check **their own** account                         |
| `discordsrv.command.unlink.self` | true    | Can use [`/discordsrv unlink`](/ascension/commands#unlink) to unlink **their own** account                        |

### Admin commands

| Permission                        | Default | Description                                                                                                                                                                                                                         |
|-----------------------------------|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `discordsrv.command.version`      | OP      | Can use [`/discordsrv version`](/ascension/commands#version)                                                                                                                                                                        |
| `discordsrv.command.parse`        | OP      | Can use [`/discordsrv parse`](/ascension/commands#parse)                                                                                                                                                                            |
| `discordsrv.command.resync`       | OP      | Can use [`/discordsrv resync`](/ascension/commands#resync)                                                                                                                                                                          |
| `discordsrv.command.reload`       | OP      | Can use [`/discordsrv reload`](/ascension/commands#reload)                                                                                                                                                                          |
| `discordsrv.command.debug`        | OP      | Can use [`/discordsrv debug`](/ascension/commands#debug) and its subcommands                                                                                                                                                        |
| `discordsrv.command.bypass`       | OP      | Can use [`/discordsrv bypass`](/ascension/commands#bypass) and its subcommands                                                                                                                                                      |
| `discordsrv.command.broadcast`    | OP      | Can use [`broadcast`](/ascension/commands#broadcast), [`broadcastd`](/ascension/commands#broadcastd), [`broadcastraw`](/ascension/commands#broadcastraw) and [`broadcastdraw`](/ascension/commands#broadcastdraw)                    |
| `discordsrv.command.link.other`   | OP      | Can use [`/discordsrv link`](/ascension/commands#link) to link **other players'** accounts                                                                                                                                          |
| `discordsrv.command.linked.other` | OP      | Can use [`/discordsrv linked`](/ascension/commands#linked) to check **other** accounts (a Minecraft player or a Discord user)                                                                                                       |
| `discordsrv.command.unlink.other` | OP      | Can use [`/discordsrv unlink`](/ascension/commands#unlink) to unlink **other** accounts                                                                                                                                             |

## Mention permissions
:::caution NeoForge Dynamic Permissions
NeoForge doesn't allow taking dynamic suffixes for permission node. 
The permission `discordsrv.mention.role.<id>` below is granted differently on NeoForge. See [NeoForge Dynamic Permissions](#dynamic-permissions) for more information.
:::

These control what a player is able to mention in messages sent from Minecraft to Discord.

All of these permissions can be further configured in each channel's <ConfigLink file="config" path="channels.default.minecraft-to-discord.mentions" />
| Permission                          | Default | Description                                                              |
|-------------------------------------|---------|--------------------------------------------------------------------------|
| `discordsrv.mention.user.all`       | OP      | allows mentioning all Discord users                                      |
| `discordsrv.mention.user.lookup`    | OP      | allows looking up Discord users to mention them                          |
| `discordsrv.mention.role.mentionable` | OP    | allows mentioning roles that are set as mentionable on Discord           |
| `discordsrv.mention.role.all`       | OP      | allows mentioning all Discord roles                                      |
| `discordsrv.mention.role.<id>`      | OP      | allows mentioning the Discord role with the given role ID                |
| `discordsrv.mention.everyone`       | OP      | allows using `@everyone` and `@here`                                     |

## Miscellaneous permissions

| Permission                       | Default | Description                                                                                                                                                                                                      |
|----------------------------------|---------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `discordsrv.updatenotification`  | OP      | whether or not the player is told if there's an update to DiscordSRV upon joining (can be configured in <ConfigLink file="connections" path="update.notification-ingame" />)                                     |
| `discordsrv.silentjoin`          | OP      | whether or not join messages are silenced for players with this permission (can be configured for each channel via <ConfigLink file="config" path="channels.default.join-messages.enable-silent-permission" />)  |
| `discordsrv.silentquit`          | OP      | whether or not quit messages are silenced for players with this permission (can be configured for each channel via <ConfigLink file="config" path="channels.default.leave-messages.enable-silent-permission" />) |

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
