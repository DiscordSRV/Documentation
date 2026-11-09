import ConfigLink from '@site/src/components/ConfigLink';

# Commands

DiscordSRV has commands in two places:

- **In game and in the console**, through [`/discordsrv`](#discordsrv). Who can use them is controlled with [permissions](/ascension/permissions).
- **On Discord**, through the [`/discordsrv`](#discordsrv) and [`/minecraft`](#minecraft) slash commands. Who can use them is controlled by Discord.

## Where Commands Are Available

| Command                                                                                 | In game | On Discord | Available when                                                                                           |
|-----------------------------------------------------------------------------------------|---------|------------|----------------------------------------------------------------------------------------------------------|
| [`help`](#help) / `?`                                                                   | ✅ | ❌ | Always |
| [`version`](#version)                                                                   | ✅ | ✅ | Always |
| [`debug`](#debug)                                                                       | ✅ | ✅ | Always |
| [`parse`](#parse)                                                                       | ✅ | ✅ | Always |
| [`resync`](#resync)                                                                     | ✅ | ✅ | Always |
| [`reload`](#reload)                                                                     | ✅ | ❌ | Always |
| [`broadcast`](#broadcast)                                                               | ✅ | ❌ | Always |
| [`broadcastd`](#broadcastd)                                                             | ✅ | ❌ | Always |
| [`broadcastraw`](#broadcastraw)                                                         | ✅ | ❌ | Always |
| [`broadcastdraw`](#broadcastdraw)                                                       | ✅ | ❌ | Always |
| [`linked`](#linked)                                                                     | ✅ | ✅ | Account linking is available |
| [`link`](#link)                                                                         | ✅ | ✅ | Local linking |
| [`unlink`](#unlink)                                                                     | ✅ | ✅ | Local linking |
| [`bypass`](#bypass)                                                                     | ✅ | ✅ | <ConfigLink file="config" path="required-linking.enabled">`required-linking.enabled`</ConfigLink> is `true` and account linking is available |
| [`execute`](#execute)                                                                   | ❌ | ✅ | <ConfigLink file="config" path="execute-command.enabled">`execute-command.enabled`</ConfigLink> is `true` |
| [`link-message`](#link-message)                                                         | ❌ | ✅ | Always |
| [`playerlist`](#playerlist)                                                             | ❌ | ✅ | <ConfigLink file="config" path="player-list.command.output-mode">`player-list.command.output-mode`</ConfigLink> is NOT `off` |

:::info
"Local linking" means the links are stored by DiscordSRV itself, as opposed to an external linked account provider.
:::

## `/discordsrv`

The main command. In game it can also be used as `/discord` and `/dsrv`.

- **In game:** `/discordsrv [subcommand]`
- **On Discord:** `/discordsrv <subcommand>`
- **Permission:** [`discordsrv.command.root`](/ascension/permissions#player-commands) in game. On Discord, only server administrators can use it by default.

In game, using the command without a subcommand shows what is configured in <ConfigLink file="config" path="game-command.discord-format">`game-command.discord-format`</ConfigLink>. Each subcommand needs its own permission, which is listed in its section.

If DiscordSRV's configuration fails to load, only [`debug`](#debug), [`version`](#version) and [`reload`](#reload) are available, so you can find and fix the problem.

On Discord, `/discordsrv` has these subcommands: [`version`](#version), [`debug`](#debug), [`parse`](#parse), [`resync`](#resync), [`linked`](#linked), [`link`](#link), [`unlink`](#unlink), [`bypass`](#bypass), [`execute`](#execute) and [`link-message`](#link-message). Most do the same as their in-game version, and Discord shows the options each one takes as you type the command.

The `discordsrv.command.*` permissions don't apply on Discord. Who can use a slash command is decided by Discord: server administrators can change it under **Server Settings → Integrations → Your Discord Bot**.

Where `/discordsrv` is registered on Discord:

| Option                                                                                  | Description                                                                  |
|-----------------------------------------------------------------------------------------|------------------------------------------------------------------------------|
| <ConfigLink file="config" path="discord-command.management-command-server-id">`discord-command.management-command-server-id`</ConfigLink>       | If set, `/discordsrv` is only registered in the Discord server with this ID  |
| <ConfigLink file="config" path="discord-command.enable-management-command-globally">`discord-command.enable-management-command-globally`</ConfigLink> | Makes `/discordsrv` available globally                                       |

## `/minecraft`

A slash command on Discord that everyone can use by default. The name can be changed with <ConfigLink file="config" path="discord-command.user-command-alias">`discord-command.user-command-alias`</ConfigLink>.

It has these subcommands: [`playerlist`](#playerlist), `link` (see [`link`](#link)) and `unlink` (see [`unlink`](#unlink)). The last two work on your own account, and only with local linking.

Where `/minecraft` is registered on Discord:

| Option                                                                      | Description                                                                 |
|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------|
| <ConfigLink file="config" path="discord-command.user-command-server-id">`discord-command.user-command-server-id`</ConfigLink>  | If set, `/minecraft` is only registered in the Discord server with this ID  |
| <ConfigLink file="config" path="discord-command.enable-user-command-globally">`discord-command.enable-user-command-globally`</ConfigLink> | Makes `/minecraft` available globally                                  |

## Targets

Commands that work on an account take a *target*. A target can be written in any of these ways:

| Target             | Example                                                           | Notes                                                                                   |
|--------------------|-------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| Minecraft username | `Notch`                                                           | Online or offline players. 1 to 16 letters, numbers or underscores.                     |
| Minecraft UUID     | `069a79f4-44e9-4726-a5be-fca90e38aaf5`                            | With or without dashes.                                                                 |
| Discord user ID    | `123456789012345678`                                              | 17 to 22 digits.                                                                        |
| Discord username   | `@username`                                                       | Must start with `@`. Only finds users the bot knows about, if it fails use the user ID. |

If a command allows leaving the target out, it targets **yourself**: your Minecraft account when you run it in game, or your Discord account when you run it on Discord. The console has no account, so it always has to give a target.

In game, giving a target to `linked` or `unlink` (even your own) needs the matching `.other` permission. See the permissions in each command's section.

## `help`

Shows the commands you can use. Add a command name to see help for that command.

- **In game:** `/discordsrv help [command]` or `/discordsrv ?`
- **Permission:** [`discordsrv.command.help`](/ascension/permissions#player-commands)

Only the commands you have permission for are listed.

## `link`

Links a Minecraft account to a Discord account. This needs local linking.

- **In game:** `/discordsrv link [player] <user>`
- **On Discord:** `/discordsrv link` (administrators) and `/minecraft link` (yourself)
- **Permissions:**
  - [`discordsrv.command.link.self`](/ascension/permissions#player-commands): link **your own** account
  - [`discordsrv.command.link.other`](/ascension/permissions#admin-commands): link **other players'** accounts

| Argument   | Description                                                                         |
|------------|-------------------------------------------------------------------------------------|
| `[player]` | The Minecraft account to link, as a username or UUID. Leave it out to link yourself. |
| `<user>`   | The Discord account to link, as a user ID or `@username`.                           |

If either account is already linked, nothing is changed and you are told which one. Otherwise the accounts are linked and you are told so.

## `linked`

Shows which Discord account a Minecraft player is linked to, or which Minecraft account a Discord user is linked to.

- **In game:** `/discordsrv linked [target]`
- **On Discord:** `/discordsrv linked [user] [player]`
- **Permissions:**
  - [`discordsrv.command.linked.self`](/ascension/permissions#player-commands): check **your own** account
  - [`discordsrv.command.linked.other`](/ascension/permissions#admin-commands): check **other** accounts, by giving a target

| Argument   | Description                                                                                   |
|------------|-----------------------------------------------------------------------------------------------|
| `[target]` | A [target](#targets). Leave it out to check yourself.                                         |

The reply is only visible to you. This works with any linked account provider, not just local linking.

## `unlink`

Removes the link between a Minecraft account and a Discord account. This needs local linking.

- **In game:** `/discordsrv unlink [target]`
- **On Discord:** `/discordsrv unlink [user] [player]` (administrators) and `/minecraft unlink` (yourself)
- **Permissions:**
  - [`discordsrv.command.unlink.self`](/ascension/permissions#player-commands): unlink **your own** account
  - [`discordsrv.command.unlink.other`](/ascension/permissions#admin-commands): unlink **other** accounts, by giving a target

| Argument   | Description                                                                                                        |
|------------|--------------------------------------------------------------------------------------------------------------------|
| `[target]` | In game: a [target](#targets). Leave it out to unlink yourself.                                                    |
| `[user]`   | On Discord (`/discordsrv unlink`): the Discord user to unlink. Leave out both options to unlink yourself.         |
| `[player]` | On Discord (`/discordsrv unlink`): the Minecraft player to unlink, chosen from linked players. `user` is used first if both are given. |

The reply is only visible to you. If the account isn't linked, you are told so.

What happens to synchronized roles and groups when an account is unlinked is decided by `unlink-behaviour` in each synchronization: `do_nothing`, `remove_discord`, `remove_game` or `remove_both`.

:::info
See [unlink-behaviour](synchronization/#unlink-behaviour) for further information.
:::

## `version`

Shows the running version of DiscordSRV, for example `Running DiscordSRV v3.0.0-SNAPSHOT (150132/main)`. Snapshot builds also show the start of the git revision and the branch.

- **In game:** `/discordsrv version`
- **On Discord:** `/discordsrv version`
- **Permission:** [`discordsrv.command.version`](/ascension/permissions#admin-commands)

## `parse`

Parses placeholders in a text through DiscordSRV's placeholder service and replies with the result. Useful for testing placeholders.

- **In game:** `/discordsrv parse <target> <input>`
- **On Discord:** `/discordsrv parse`
- **Permission:** [`discordsrv.command.parse`](/ascension/permissions#admin-commands)

| Argument   | Description                                                                                                                              |
|------------|------------------------------------------------------------------------------------------------------------------------------------------|
| `<target>` | The [target](#targets) the placeholders are resolved for, a Minecraft player (online or offline) or a Discord user. Use `--null` for no target. |
| `<input>`  | The text to parse, everything after the target.                                                                                          |

The target is always required, there is no default to yourself.

## `resync`

:::info
See [Synchronization](synchronization) for more information regarding this feature.
:::

Resynchronizes **online players** for one feature, and tells you how long it took and how many results there were. Hover over the result to see what happened.

- **In game:** `/discordsrv resync <type>`
- **On Discord:** `/discordsrv resync <type>`
- **Permission:** [`discordsrv.command.resync`](/ascension/permissions#admin-commands)

| Argument | Description                                                                |
|----------|----------------------------------------------------------------------------|
| `<type>` | The feature to resync: `ban`, `group`, `linkedrole`, `mute`, `nickname` or `onlinerole`. |

Which side takes priority when Minecraft and Discord differ is decided by [`tie-breakers.resync-command`](synchronization#tie-breakers) of that feature: `minecraft`, `discord`, or `disabled`.

You may see these replies instead of a result:

| Reply                                   | Meaning                                                                          |
|-----------------------------------------|----------------------------------------------------------------------------------|
| Unknown sync                            | `<type>` isn't one of the features above.                                        |
| Sync is disabled                        | The feature is turned off in the configuration.                                  |
| No permission provider available.       | `group` only: DiscordSRV can't find a supported permission plugin.               |
| Command disabled for this sync type     | [`tie-breakers.resync-command`](synchronization#tie-breakers) is `disabled` for every configuration of the feature. |

## `reload`

Reloads parts of DiscordSRV without a restart.

- **In game:** `/discordsrv reload [flags] [-confirm]`
- **Permission:** [`discordsrv.command.reload`](/ascension/permissions#admin-commands)

Without flags only `config` is reloaded. You can give several flags, in any order, separated by spaces:

| Flag                      | Description                                                              |
|---------------------------|--------------------------------------------------------------------------|
| `config`                  | Reloads the configuration. This is the default.                          |
| `config_upgrade`          | Upgrades the configuration files.                                        |
| `linked_account_provider` | Reloads the linked account provider.                                     |
| `storage`                 | Reconnects the storage. Needs `-confirm`.                                |
| `discord_connection`      | Reconnects to Discord. Needs `-confirm` while DiscordSRV is connected.   |
| `discord_commands`        | Registers the Discord slash commands again.                              |
| `translation`             | Reloads the translations.                                                |

Flags that could leave DiscordSRV in an unrecoverable state are refused unless you add `-confirm` at the end:

```
/discordsrv reload discord_connection -confirm
```

If a change needs a restart or a Discord connection reload, you are told after the reload. If DiscordSRV failed to start, every flag except `config_upgrade` is reloaded whatever you give.

## `debug`

Creates a debug report to share when asking for support.

- **In game:** `/discordsrv debug [start|stop|upload|zip]`
- **On Discord:** `/discordsrv debug <start|stop|upload|zip>`
- **Permission:** [`discordsrv.command.debug`](/ascension/permissions#admin-commands)

Without a subcommand it works like [`debug upload`](#debug-upload) and falls back to [`debug zip`](#debug-zip) if the upload fails.

### `debug start`

Starts debug observation. If it is already running you are told so.

### `debug stop`

Stops debug observation without creating a report. If it isn't running you are told so.

### `debug upload`

Uploads a debug report to `https://bytebin.lucko.me` with AES 128 encryption, for easy sharing. Also stops debug observation.

### `debug zip`

Creates a debug report as an unencrypted local zip, stored inside DiscordSRV's configuration files. Also stops debug observation.

## `bypass`

Manages the players who bypass the required linking requirements. Only available when required linking is enabled.

- **In game:** `/discordsrv bypass <add|remove|list>`
- **On Discord:** `/discordsrv bypass <add|remove|list>`
- **Permission:** [`discordsrv.command.bypass`](/ascension/permissions#admin-commands)

### `bypass add`

Adds a player to the list of players who bypass required linking requirements.

- **Usage:** `/discordsrv bypass add <target>`

The target is a [target](#targets), but it can't be left out. If you give a Discord user, their linked Minecraft account is used. The player is checked again right away if they are online. You are told if they are already bypassing.

### `bypass remove`

Removes a player from the list of players who bypass required linking requirements.

- **Usage:** `/discordsrv bypass remove <target>`

Works like [`bypass add`](#bypass-add). Players who bypass because of the configuration can't be removed with the command, and you are told so. You are told if they aren't bypassing.

### `bypass list`

Lists the players who bypass required linking requirements.

- **Usage:** `/discordsrv bypass list`

## `broadcast`

Sends a message formatted like Minecraft text to Discord channels. There are four broadcast commands, which only differ in how `<content>` is written: [`broadcast`](#broadcast), [`broadcastd`](#broadcastd), [`broadcastraw`](#broadcastraw) and [`broadcastdraw`](#broadcastdraw).

- **In game:** `/discordsrv broadcast <channel> <content>`
- **Permission:** [`discordsrv.command.broadcast`](/ascension/permissions#admin-commands) (all four commands)

| Argument    | Description                                                                                                                                                                  |
|-------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `<channel>` | The ID of a Discord channel, or the name of a channel from your channel configuration (names are suggested as you type). A named channel can send to more than one Discord channel. |
| `<content>` | The message, everything after the channel. Placeholders are replaced.                                                                                                        |

If the channel can't be found, you are told so. Otherwise the message is sent and you are told it was broadcast.

## `broadcastd`

Sends a plain message with Discord formatting to Discord channels.

- **In game:** `/discordsrv broadcastd <channel> <content>`
- **Permission:** [`discordsrv.command.broadcast`](/ascension/permissions#admin-commands)

Takes the same arguments as [`broadcast`](#broadcast). `<content>` is sent as it is, so Discord markdown works. Write `\n` for a new line.

## `broadcastraw`

Sends a raw JSON Minecraft message to Discord channels.

- **In game:** `/discordsrv broadcastraw <channel> <content>`
- **Permission:** [`discordsrv.command.broadcast`](/ascension/permissions#admin-commands)

Takes the same arguments as [`broadcast`](#broadcast). `<content>` is a Minecraft JSON text component, which is converted to Discord formatting:

```
/discordsrv broadcastraw 123456789012345678 {"text":"Server restarting","bold":true}
```

## `broadcastdraw`

Sends a raw JSON Discord message to Discord channels.

- **In game:** `/discordsrv broadcastdraw <channel> <content>`
- **Permission:** [`discordsrv.command.broadcast`](/ascension/permissions#admin-commands)

Takes the same arguments as [`broadcast`](#broadcast). `<content>` is a Discord message as JSON, with the same fields as the [Discord message format](/ascension/config/discord-messages), so it can have embeds and more. If the JSON is invalid, you get an error message.

## `execute`

Runs a Minecraft console command from Discord.

- **On Discord:** `/discordsrv execute <command>`
- **Available when:** <ConfigLink file="config" path="execute-command.enabled">`execute-command.enabled`</ConfigLink> is `true`

| Argument    | Description                                                                                                                                  |
|-------------|----------------------------------------------------------------------------------------------------------------------------------------------|
| `<command>` | The command to run. Suggestions are shown while typing when <ConfigLink file="config" path="execute-command.suggest">`execute-command.suggest`</ConfigLink> is enabled.          |

:::warning
This lets people run commands as the server console. Keep `/discordsrv execute` limited to people you fully trust, and use [execution conditions](#execution-conditions) to limit which commands they can run.
:::

When the command is used, the person gets "Executing `<command>`" and then the console output, sent in batches to fit Discord's message length. If the command is turned off, or the person isn't allowed to run that command, they get a reply saying so that only they can see.

If you turn the command off or on, use [`reload`](#reload) with `discord_commands` so Discord is updated.

### Options

| Option                                                                           | Default    | Description                                                                              |
|----------------------------------------------------------------------------------|------------|------------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="execute-command.enabled">`execute-command.enabled`</ConfigLink>                      | `true`     | Whether the command can be used.                                                         |
| <ConfigLink file="config" path="execute-command.ephemeral">`execute-command.ephemeral`</ConfigLink>                    | `true`     | Only show the replies and output to the person who ran the command.                      |
| <ConfigLink file="config" path="execute-command.output-mode">`execute-command.output-mode`</ConfigLink>                  | `markdown` | How the output is shown: `markdown`, `ansi` (colored), `plain`, `code_block` or `off`. Some commands don't work with output forwarding. |
| <ConfigLink file="config" path="execute-command.execution-conditions">`execute-command.execution-conditions`</ConfigLink>         |            | Who can run which commands, see [execution conditions](#execution-conditions).          |
| <ConfigLink file="config" path="execute-command.suggest">`execute-command.suggest`</ConfigLink>                      | `true`     | Suggest commands while typing.                                                           |
| <ConfigLink file="config" path="execute-command.filter-suggestions">`execute-command.filter-suggestions`</ConfigLink>           | `true`     | Only suggest commands the person is allowed to run (see execution conditions).           |

### Execution conditions

`execution-conditions` is a list. A command is allowed when **at least one** condition accepts it. Each condition has:

| Option        | Description                                                                                                                        |
|---------------|------------------------------------------------------------------------------------------------------------------------------------|
| `user-filter` | Who the condition applies to. **It must have at least one whitelist filter with ids, otherwise nobody matches.** See [Who Can Run It](#who-can-run-it) for how filters work. |
| `filter-mode` | `blacklist` (default) allows every command except the ones listed. `whitelist` only allows the ones listed.                        |
| `commands`    | The commands or patterns the mode applies to.                                                                                      |

A command matches an entry in `commands` when it starts with the entry, as whole words: `list` matches `list` and `list all`, but not `listsecrets`. Aliases of the first word are treated as the same command where possible. An entry that starts and ends with `/` is a regular expression, which has to match the entire command.

For example, to let one role run only `list` and `say`:

```yaml
execute-command:
  execution-conditions:
    - user-filter:
        filters:
          - ids: [123456789012345678] # a role ID
            mode: whitelist
      filter-mode: whitelist
      commands:
        - list
        - say
```

Because nobody matches without a whitelisted user filter, nobody can use `/discordsrv execute` until you add one.

## `link-message`

Sends a message in the current channel with a button that starts linking for whoever presses it. Use it to set up a "link your account" message in a channel such as `#rules` or `#verify`.

- **On Discord:** `/discordsrv link-message`
- **Access:** server administrators by default

## `playerlist`

Shows the players currently online.

- **On Discord:** `/minecraft playerlist`
- **Access:** everyone by default
- **Available when:** <ConfigLink file="config" path="player-list.command.output-mode">`player-list.command.output-mode`</ConfigLink> is NOT `off`

## Custom Discord Commands

You can add your own slash commands to the Discord bot. A custom command replies with a message and can run console commands when it is used, for example to show the server IP or to greet someone.

They are configured in the <ConfigLink file="config" path="custom-commands">`custom-commands`</ConfigLink> list. Every entry is disabled until you set `enabled` to `true`.

After editing custom commands, reload DiscordSRV with `/discordsrv reload config discord_commands` so they are registered on Discord.

### Options

| Option                    | Default       | Description                                                                                                                          |
|---------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `enabled`                 | `false`       | Whether the command is registered on Discord.                                                                                        |
| `command`                 |               | The command as it is used on Discord, in up to 3 parts separated by spaces. See [Command names](#command-names).                     |
| `description`             |               | The description shown to the user on Discord. **Required**, a command with an empty description is skipped.                          |
| `ephemeral`               | `false`       | Only show the response to the user who ran the command.                                                                              |
| `server-id`               | `0`           | The Discord server ID to register the command in. Use `0` for all Discord servers, or `-1` to make the command global.               |
| `console-commands-to-run` | none          | Console commands to run when the command is used.                                                                                    |
| `response`                | `test`        | The message sent in reply, see [Response](#response).                                                                                |
| `options`                 | none          | Arguments the user can fill in. See [Command options](#command-options).                                                             |
| `user-filter`             | nobody        | Which users are allowed to run the command. **Nobody can until you set it**, see [Who can run it](#who-can-run-it).                  |

### Command Names

`command` can have up to 3 parts. Discord requires each part to be lowercase and without spaces (letters, numbers, `-` and `_`).

| `command`          | Used on Discord as   |
|--------------------|----------------------|
| `ip`               | `/ip`                |
| `server ip`        | `/server ip`         |
| `server info ip`   | `/server info ip`    |

The first part is the main command, the following parts are a subcommand group and subcommand. There are two limits:

- You cannot use the 2nd and the 3rd layer for the same main command at once. For example `server ip` and `server info ip` can't both exist.
- You cannot give the main command an action itself if the same main command is used on the 2nd or 3rd layer. For example `server` can't exist next to `server ip`.

### Command Options

Options are the arguments of a command, which the user fills in on Discord. Their values can be used in the [response](#response).

| Option        | Default                | Description                                                  |
|---------------|------------------------|--------------------------------------------------------------|
| `type`        | `user`                 | The kind of value. See the list of types below.              |
| `name`        | `target_user`          | The name of the option. This is also what you use in placeholders. |
| `description` | `The user to greet`    | The description shown to the user. **Required**, an option with an empty description is skipped and an error is logged. |
| `required`    | `true`                 | Whether the user has to fill in the option.                  |

Types: `string`, `long`, `double`, `boolean`, `user`, `channel`, `role`, `mentionable` and `attachment`.

### Who Can Run It

`user-filter` decides which users can run the command. **By default nobody can**, so every custom command needs a filter before it works. Users who aren't included are told "You do not have permission to run that command", and only they see it.

`filters` is a list. Each filter has `ids` (Discord user IDs and role IDs) and a `mode` (`whitelist` or `blacklist`):

- A user is allowed when at least one whitelist filter matches them and no blacklist filter does.
- A filter matches when the user matches **every** ID in it, either as the user ID or as one of their roles. Use separate filters to allow several users or roles.
- A filter without IDs is ignored. A lone blacklist filter without IDs allows everyone.

To allow one role:

```yaml
user-filter:
  filters:
    - ids: [123456789012345678] # a role ID
      mode: whitelist
```

To allow everyone:

```yaml
user-filter:
  filters:
    - ids: []
      mode: blacklist
```

Other things that limit who can use a command:

- `server-id` decides where the command shows up. Use it to keep the command to your own server.
- Custom commands only work in Discord servers. Using them somewhere else, such as in direct messages, is ignored.

:::warning
`console-commands-to-run` runs the commands as the server console. Use `user-filter` so that only people you trust can run commands that do this.
:::

Console commands are logged together with the Discord user who used the command.

### Response

`response` is the message sent back after the command is used, and it uses the same format as [Discord messages](/ascension/config/discord-messages#yaml). The response is sent even when the command doesn't run any console commands.

You can use these placeholders in it, along with DiscordSRV's usual placeholders:

| Placeholder             | Value                                                                                                              |
|-------------------------|--------------------------------------------------------------------------------------------------------------------|
| `%option_<name>%`       | What the user filled in for the option called `<name>`.                                                            |
| `%option_<name>_...%`   | For `user`, `channel`, `role` and `mentionable` options, details about the selected user, channel or role, like `%option_target_user_name%`. |

For the other types (`string`, `long`, `double`, `boolean` and `attachment`) the placeholder is the value as text.

### Examples
There are a couple of examples in the default configuration.

<ConfigLink file="config" path="discord-command.user-command-alias">A command that replies with the server IP, only visible to the person who asked</ConfigLink>.

<ConfigLink file="config" path="discord-command.user-command-alias">A command that greets a user</ConfigLink>.
