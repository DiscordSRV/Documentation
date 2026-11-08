import ConfigLink from '@site/src/components/ConfigLink';

# Commands

## Where Commands Are Available

| Command         | In game | On Discord | Available when |
|-----------------|---------|------------|----------------|
| `help` / `?`    | ✅ | ❌ | Always |
| `version`       | ✅ | ✅ | Always |
| `debug`         | ✅ | ✅ | Always |
| `parse`         | ✅ | ✅ | Always |
| `resync`        | ✅ | ✅ | Always |
| `reload`        | ✅ | ❌ | Always |
| `broadcast`     | ✅ | ❌ | Always |
| `broadcastd`    | ✅ | ❌ | Always |
| `broadcastraw`  | ✅ | ❌ | Always |
| `broadcastdraw` | ✅ | ❌ | Always |
| `linked`        | ✅ | ✅ | Account linking is available |
| `link`          | ✅ | ✅ | Account linking is available. Linking *other* accounts, and linking on Discord, needs local linking     |
| `unlink`        | ✅ | ✅ | When local linking                                                                                      |
| `bypass`        | ✅ | ✅ | <ConfigLink file="config" path="required-linking.enabled" /> is `true` and Account linking is available |
| `execute`       | ❌ | ✅ | <ConfigLink file="config" path="execute-command.enabled" /> is `true` |
| `link-message`  | ❌ | ✅ | Always |
| `playerlist`    | ❌ | ✅ | <ConfigLink file="config" path="player-list.command.output-mode" /> is NOT `off` |

## Game Commands

If DiscordSRV's configuration fails to load, only `debug`, `version` and `reload` are available, so you can find and fix the problem.

| Command | Permission | Description |
|---------|------------|-------------|
| `/discord` <br /> `/discordsrv` <br /> `/dsrv` | [`discordsrv.command.root`](/ascension/permissions#command-permissions) | Shows whatever is configured in the <ConfigLink file="config" path="game-command.discord-format" /> option |

**The following tables are arguments to the above command.**

### Player Commands

| Command           | Permission                                                                 | Description                                                                      |
|-------------------|----------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| `help` <br /> `?` | [`discordsrv.command.help`](/ascension/permissions#player-commands)        | Shows a list of all the options you have permissions for                         |
| `linked`          | [`discordsrv.command.linked.self`](/ascension/permissions#player-commands) | Shows if your Minecraft account is linked with a discord account.                |
| `link`            | [`discordsrv.command.link.self`](/ascension/permissions#player-commands)   | Sends you instructions to link your Minecraft account with your Discord account. |
| `unlink`          | [`discordsrv.command.unlink.self`](/ascension/permissions#player-commands) | Unlink your Discord account from your Minecraft account.                         |

### Admin Commands

| Command   | Arguments                                                                                                                         | Permission                                                                | Description                                                                                                    |
|-----------|-----------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------|
| `version` |                                                                                                                                   | [`discordsrv.command.version`](/ascension/permissions#admin-commands)    | Shows the current version of DiscordSRV.                                                                       |
| `parse`   | `<Name/UUID/DiscordID/DiscordTag/--null>` `<parse input>`                                                                         | [`discordsrv.command.parse`](/ascension/permissions#admin-commands)      | Parse placeholders through DiscordSRV's placeholder service.                                                   |
| `resync`  | `<ban/group/linkedrole/mute/nickname/onlinerole>`                                                                                 | [`discordsrv.command.resync`](/ascension/permissions#admin-commands)     | Triggers a resynchronization for the specified feature (ban, group, linkedrole, mute, nickname or onlinerole). |
| `reload`  | `["config"]` `["<config_upgrade"]` `["discord_commands"]` `["discord_connection"]` `["linked_account_provider"]` `["storage"]` `["translation"]` | [`discordsrv.command.reload`](/ascension/permissions#admin-commands)     | Reloads the specified features (can select multiple, doesn't have to be in the same order).                   |

### Link Commands

Linking other accounts needs local linking.

| Command  | Arguments                            | Permission                                                                  | Description                                                                       |
|----------|--------------------------------------|-----------------------------------------------------------------------------|-----------------------------------------------------------------------------------|
| `linked` | `<Name/UUID/DiscordID/DiscordTag>`   | [`discordsrv.command.linked.other`](/ascension/permissions#admin-commands) | Shows which Discord account a Minecraft account is linked to, or the reverse.     |
| `link`   | `<Name/UUID> <DiscordID/DiscordTag>` | [`discordsrv.command.link.other`](/ascension/permissions#admin-commands)   | Links the given Minecraft account with the given Discord account.                 |
| `unlink` | `<Name/UUID/DiscordID/DiscordTag>`   | [`discordsrv.command.unlink.other`](/ascension/permissions#admin-commands) | Unlinks the given account from the account it is linked to.                       |

### Broadcast Commands

| Command         | Arguments                             | Permission                                                                 | Description                                                                             |
|-----------------|---------------------------------------|----------------------------------------------------------------------------|-----------------------------------------------------------------------------------------|
| `broadcast`     | `<#ChannelID/#ChannelName> <Message>` | [`discordsrv.command.broadcast`](/ascension/permissions#admin-commands)   | Broadcast a Minecraft formatted message to the specified Discord channel(s).            |
| `broadcastd`    | `<#ChannelID/#ChannelName> <Message>` | [`discordsrv.command.broadcast`](/ascension/permissions#admin-commands)   | Broadcast a plain message with Discord formatting to the specified Discord channel(s).  |
| `broadcastraw`  | `<#ChannelID/#ChannelName> <Message>` | [`discordsrv.command.broadcast`](/ascension/permissions#admin-commands)   | Broadcast a raw json Minecraft message to the specified Discord channel(s).             |
| `broadcastdraw` | `<#ChannelID/#ChannelName> <Message>` | [`discordsrv.command.broadcast`](/ascension/permissions#admin-commands)   | Broadcast a raw json Discord message to the specified Discord channel(s).               |

### Debug Commands

| Command | Permission                                                                | Description                   |
|---------|---------------------------------------------------------------------------|-------------------------------|
| `debug` | [`discordsrv.command.debug`](/ascension/permissions#admin-commands)       | Diagnostic reporting commands |

**The following tables are arguments to the above command.**

| Command  | Description                                                                                       |
|----------|---------------------------------------------------------------------------------------------------|
| `start`  | Starts debug observation                                                                          |
| `stop`   | Stop debug observation                                                                            |
| `upload` | Uploads a debug report for easy sharing into `https://bytebin.lucko.me` with AES 128 encryption   |
| `zip`    | Creates a debug report into an uncrypted local zip (stored inside DiscordSRV configuration files) |

### Bypass Commands

Only available when required linking is enabled.

| Command  | Permission                                                                | Description                                               |
|----------|---------------------------------------------------------------------------|-----------------------------------------------------------|
| `bypass` | [`discordsrv.command.bypass`](/ascension/permissions#admin-commands)      | Manage players which bypass required linking requirements |

**The following tables are arguments to the above command.**

| Command  | Description                                                                     |
|----------|---------------------------------------------------------------------------------|
| `add`    | Add a player to the list of players who bypass required linking requirements    |
| `remove` | Remove a player from the list of players who bypass required linking requirements |
| `list`   | List players who bypass required linking requirements                           |

## Discord Commands

DiscordSRV registers two slash commands on Discord. You can also add your own, see [Custom Discord Commands](#custom-discord-commands).

| Slash command           | Who can use it by default | Purpose                                                  |
|-------------------------|---------------------------|----------------------------------------------------------|
| `/discordsrv`           | Server administrators     | Management commands, mostly the same as the in-game ones |
| `/minecraft`            | Everyone                  | Commands for your own account and for the server status  |

The `/minecraft` command name can be changed with <ConfigLink file="config" path="discord-command.user-command-alias" />.

The `discordsrv.command.*` permissions don't apply on Discord. Who can use a slash command is decided by Discord: server administrators can change it under **Server Settings → Integrations → Your Discord Bot**.

### Where The Commands Are Registered

| Option                                                                                                       | Description                                                                |
|--------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------|
| <ConfigLink file="config" path="discord-command.management-command-server-id" />       | If set, `/discordsrv` is only registered in the Discord server with this ID |
| <ConfigLink file="config" path="discord-command.enable-management-command-globally" /> | Makes `/discordsrv` available globally                                      |
| <ConfigLink file="config" path="discord-command.user-command-server-id" />             | If set, `/minecraft` is only registered in the Discord server with this ID  |
| <ConfigLink file="config" path="discord-command.enable-user-command-globally" />       | Makes `/minecraft` available globally                                       |

### Management Commands (`/discordsrv`)

These are subcommands of `/discordsrv`, which only server administrators can use by default.

| Subcommand     | Description                                                           |
|----------------|-----------------------------------------------------------------------|
| `version`      | Shows the current version of DiscordSRV.                              |
| `debug`        | Diagnostic reporting commands (a command group).                      |
| `parse`        | Parse placeholders through DiscordSRV's placeholder service.          |
| `resync`       | Triggers a resynchronization for the specified feature.               |
| `link-message` | [Sends a message with a link button](#link-message).                  |
| `execute`      | [Runs a Minecraft console command](#execute).         |
| `linked`       | Shows which account a Minecraft player or Discord user is linked to.  |
| `link`         | Links a Minecraft account with a Discord account.                     |
| `unlink`       | Unlinks an account.                                                   |
| `bypass`       | Manage players which bypass required linking requirements (a command group). |

Most of these do the same as their [in-game version](#game-commands). Discord shows the options each one takes as you type the command.

### User Commands (`/minecraft`)

These are subcommands of `/minecraft`, which everyone can use by default.

| Subcommand   | Description                                                  |
|--------------|--------------------------------------------------------------|
| `playerlist` | Shows the players currently online.                          |
| `link`       | Starts linking your Discord account to a Minecraft account.  |
| `unlink`     | Unlinks your own account.                                    |

### Discord Only Commands

#### `execute`

Runs a Minecraft console command from Discord: `/discordsrv execute <command>`.

| Option    | Description                                                                                                   |
|-----------|---------------------------------------------------------------------------------------------------------------|
| `command` | The command to run (required). Suggestions are shown while typing when <ConfigLink file="config" path="execute-command.suggest" /> is enabled. |

The command is only registered when <ConfigLink file="config" path="execute-command.enabled" /> is enabled. If the option is turned off after the command was registered, using it replies that the execute command is disabled. After changing the option, use `/discordsrv reload` with `discord_commands` (in game) to update Discord.

:::warning
This lets people run commands as the server console. Keep `/discordsrv execute` limited to people you fully trust. You can further limit command usage by using <ConfigLink file="config" path="execute-command.execution-conditions" />
:::

#### `link-message`

Sends a message in the current channel with a button that starts linking for whoever presses it. Use it to set up a "link your account" message in a channel such as `#rules` or `#verify`.

## Custom Discord Commands

You can add your own slash commands to the Discord bot. A custom command replies with a message and can run console commands when it is used, for example to show the server IP or to greet someone.

They are configured in the <ConfigLink file="config" path="custom-commands" /> list. Every entry is disabled until you set `enabled` to `true`.

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
| `user-filter`             |               | Which users are allowed to run the command. See [Who can run it](#who-can-run-it).                                                   |

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

- `user-filter` decides who is allowed to run the command. Users who aren't included are told "You do not have permission to run that command", and only they see it.
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

<ConfigLink file="config" path="discord-command.user-command-alias">A command that replies with the server IP, only visible to the person who asked.</ConfigLink>
<ConfigLink file="config" path="discord-command.user-command-alias">A command that greets a user.</ConfigLink>
