---
title: messages.yml
---

# [messages.yml](https://config.discordsrv.com/messages/_)

### DiscordToMinecraft...

| Placeholders       | Example                        | Description                                                                                                                        |
|--------------------|--------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
| `%allroles%`       | `Owner | Developer | Boss man` | All the user's roles separated by [`DiscordToMinecraftAllRolesSeparator`](../config/#DiscordToMinecraftAllRolesSeparator)          |
| `%message%`        | `Hello!`                       | The message content                                                                                                                |
| `%toprole%`        | `Owner`                        | The user's highest ranking role                                                                                                    |
| `%toprolealias%`   | `Owner`                        | The alias for the role from [`DiscordChatChannelRoleAliases`](../config/#DiscordChatChannelRoleAliases), otherwise the role's name |
| `%toproleinitial%` | `O`                            | The first initial of the user's highest ranking role                                                                               |
| `%toprolecolor%`   | `<dark_red>`                   | The approximate color of the highest ranking role                                                                                  |
| `%username%`       | `scarsz`                       | The user's username/nickname if set                                                                                                |
| `%channelname%`    | `global`                       | The name of the Discord channel the message is coming from                                                                         |

:::note
[PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported
:::


#### [`...ChatMessageFormat`](https://config.discordsrv.com/messages/DiscordToMinecraftChatMessageFormat) {#DiscordToMinecraftChatMessageFormat}
The format used when sending messages from Discord to Minecraft.
#### [`...ChatMessageFormatNoRole`](https://config.discordsrv.com/messages/DiscordToMinecraftChatMessageFormatNoRole) {#DiscordToMinecraftChatMessageFormatNoRole}
The format used when sending messages from Discord to Minecraft for the user with no roles.
#### `...ChatMessageFormat_<channel>`
The format used when sending messages from Discord to Minecraft for `<channel>`.

You can specify a different format per channel. To add a format for a channel named `mychannel` you'd add the following options to your `messages.yml`:
```yaml
DiscordToMinecraftChatMessageFormat_mychannel: "[&bDiscord From MyChannel &r| %toprolecolor%%toprole%&r] %name% » %message%"
DiscordToMinecraftChatMessageFormatNoRole_mychannel: "[&bDiscord From MyChannel&r] %name% » %message%"
```

#### `...ChatMessageFormatNoRole_<channel>`
The format used when sending messages from Discord to Minecraft for the user with no roles for `<channel>`.

This can be formatted using the same idea as the previous option:
```yaml
DiscordToMinecraftChatMessageFormatNoRole_mychannel: "[&bDiscord From MyChannel&r] %name% » %message%"
```

#### [`...AllRolesSeparator`](https://config.discordsrv.com/messages/DiscordToMinecraftAllRolesSeparator) {#DiscordToMinecraftAllRolesSeparator}
The separator used in between roles in `%allroles%`

#### [`...ReplyFormat`](https://config.discordsrv.com/messages/DiscordToMinecraftReplyFormat) {#DiscordToMinecraftReplyFormat}
The format for the message displayed to indicate that the message is a reply
NOTE: The %reply% placeholder needs to be present in the format if you want the DiscordToMinecraftMessageReplyFormat to display in your message.

### MinecraftChatToDiscordMessage...

| Placeholders             | Example                       | Description                                                                                                            |
|--------------------------|-------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `%username%`             | `jeb_`                        | raw player username                                                                                                    |
| `%displayname%`          | `BigBossManJeb`               | display name from things like nicknames                                                                                |
| `%usernamenoescapes%`    | `jeb_`                        | raw player username without escaping discord format (for use in inline code & code block markdown)                     |
| `%displaynamenoescapes%` | `BigBossManJeb`               | display name from things like nicknames without escaping discord format (for use in inline code & code block markdown) |
| `%message%`              | `Hello!`                      | message content                                                                                                        |
| `%primarygroup%`         | `Owner`                       | the name of the user's primary group                                                                                   |
| `%world%`                | `world`                       | name of world player is in                                                                                             |
| `%worldalias%`           | `Mainland`                    | alias of world player is in via Multiverse-Core                                                                        |
| `%date%`                 | `Sun Jan 1 15:30:45 PDT 2017` | current date & time                                                                                                    |
| `%channelname%`          | `global`                      | the name of the channel that the message was sent in, if the message was sent in a channel at all                      |

:::note
[PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported
:::

#### [`...Format`](https://config.discordsrv.com/messages/MinecraftChatToDiscordMessageFormat) {#MinecraftChatToDiscordMessageFormat}
the format used when sending messages from Minecraft to Discord.
#### [`...FormatNoPrimaryGroup`](https://config.discordsrv.com/messages/MinecraftChatToDiscordMessageFormatNoPrimaryGroup) {#MinecraftChatToDiscordMessageFormatNoPrimaryGroup}
used in place of `MinecraftChatToDiscordMessageFormat` when no primary group for the player was found.

### [`ChatChannelHookMessageFormat`](https://config.discordsrv.com/messages/ChatChannelHookMessageFormat) {#ChatChannelHookMessageFormat}
This is a special message that's only used when a supported chat channel plugin is hooked.
It modifies what the message would be like in-game to include information related to the channel the message is from.  

| Placeholders        | Explanations                                                                                                                                                                                                 |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `%channelcolor%`    | the color character corresponding to the channel                                                                                                                                                             |
| `%channelname%`     | the literal name of the channel, usually the name only the server sees internally                                                                                                                            |
| `%channelnickname%` | the formal nickname of the channel, usually the name of the channel that players see                                                                                                                         |
| `%message%`         | the message after processing through [`DiscordToMinecraftChatMessageFormat`](#DiscordToMinecraftChatMessageFormat)/[`DiscordToMinecraftChatMessageFormatNoRole`](#DiscordToMinecraftChatMessageFormatNoRole) |

### Dynmap...

| Placeholders | Example  | Description                                                               |
|--------------|----------|---------------------------------------------------------------------------|
| Same as [Discord -> Minecraft placeholders](#discordtominecraft)                                    |

:::note
[PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported
:::

#### [`...NameFormat`](https://config.discordsrv.com/messages/DynmapNameFormat) {#DynmapNameFormat}
The format for the username part of the message sent to Dynmap (this may be hidden depending on dynmap settings).
#### [`...ChatFormat`](https://config.discordsrv.com/messages/DynmapChatFormat) {#DynmapChatFormat}
The format for the message part of the message sent to Dynmap.
#### [`...DiscordFormat`](https://config.discordsrv.com/messages/DynmapDiscordFormat) {#DynmapDiscordFormat}

| Placeholders | Example  | Description                                                               |
|--------------|----------|---------------------------------------------------------------------------|
| `%name%`     | `Notch`  | the username for the message sent on the Dynmap web chat (could be blank) |
| `%message%`  | `Hello!` | message content                                                           |

:::note
[PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported
:::

The format for Dynmap messages going to Discord

### DiscordConsoleChannel...
#### [`...Format`](https://config.discordsrv.com/messages/DiscordConsoleChannelFormat) {#DiscordConsoleChannelFormat}

| Placeholders        | Example                       | Description                              |
|---------------------|-------------------------------|------------------------------------------|
| `{level}`           | `INFO, WARN, ERROR`           | message severity level                   |
| `{name}`            | `Server`                      | logger name                              |
| `{datetime}`        | `Sun Jan 1 15:30:45 PDT 2017` | current date & time                      |

:::note
[PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported
:::

This is the format used when sending a line from the console to the console channel, if enabled  

#### [`...TimestampFormat`](https://config.discordsrv.com/messages/DiscordConsoleChannelTimestampFormat) {#DiscordConsoleChannelTimestampFormat}
The date format that will be used for the `{date}` and `{datetime}` placeholders
#### [`...Prefix`](https://config.discordsrv.com/messages/DiscordConsoleChannelPrefix) {#DiscordConsoleChannelPrefix}
The literal prefix to prepend to a batch of lines
#### [`...Suffix`](https://config.discordsrv.com/messages/DiscordConsoleChannelSuffix) {#DiscordConsoleChannelSuffix}
The literal suffix to append to a batch of lines
#### [`...Padding`](https://config.discordsrv.com/messages/DiscordConsoleChannelPadding) {#DiscordConsoleChannelPadding}
The amount of padding to add inside the prefix

### [`DiscordChatChannelConsoleCommandNotifyErrorsFormat`](https://config.discordsrv.com/messages/DiscordChatChannelConsoleCommandNotifyErrorsFormat) {#DiscordChatChannelConsoleCommandNotifyErrorsFormat}

| Placeholders | Example         | Description                                         |
|--------------|-----------------|-----------------------------------------------------|
| `%user%`     | `scarsz`        | the name of the user that tried running the command |
| `%error%`    | `no permission` | the reason for the error                            |

Used when an error occurs with permissions for the player to run the command, not an error running the command itself. This is sent as a PM to the user.

### DiscordChatChannelListCommand...
#### [`...FormatOnlinePlayers`](https://config.discordsrv.com/messages/DiscordChatChannelListCommandFormatOnlinePlayers) {#DiscordChatChannelListCommandFormatOnlinePlayers}
the message at the beginning of the list, before all of the player names.
#### [`...FormatNoOnlinePlayers`](https://config.discordsrv.com/messages/DiscordChatChannelListCommandFormatNoOnlinePlayers) {#DiscordChatChannelListCommandFormatNoOnlinePlayers}
used instead for when no players are online
#### [`...PlayerFormat`](https://config.discordsrv.com/messages/DiscordChatChannelListCommandPlayerFormat) {#DiscordChatChannelListCommandPlayerFormat}

|  Placeholders         |  Example             |  Description                                         |
|-----------------------|----------------------|------------------------------------------------------|
| `%username%`          | `jeb_`               | raw player username                                  |
| `%displayname%`       | `BigBossManJeb`      | display name from things like nicknames              |
| `%primarygroup%`      | `Owner`              | the name of the user's primary group                 |
| `%world%`             | `world`              | name of world player is in                           |
| `%worldalias%`        | `Mainland`           | alias of world player is in via Multiverse-Core      |

:::note
[PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported
:::

the format of how each player should appear in the list  
#### [`...AllPlayersSeparator`](https://config.discordsrv.com/messages/DiscordChatChannelListCommandAllPlayersSeparator) {#DiscordChatChannelListCommandAllPlayersSeparator}
the separator used in between players

### MinecraftPlayer...
| Embed Information |  Description                                                                                                                    |
|-------------------|---------------------------------------------------------------------------------------------------------------------------------|
| Color             | accepts a hex color code (eg. "#ffffff") or a rgb integer (eg. 0)                                                               |
| Fields            | format is "title;value;inline" (eg. "Who joined?;%displayname%;true") or "blank" to add a blank field                           |
| Timestamp         | set to true to use the time the message was sent or use a epoch timestamp for a specific time (https://www.epochconverter.com/) |

|  Placeholders            |  Example                                             |  Description                                                                                                           |
|--------------------------|------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------|
| `%displayname%`          | `BigBossManJeb`                                      | display name from things like nicknames                                                                                |
| `%username%`             | `jeb_`                                               | raw player username                                                                                                    |
| `%displaynamenoescapes%` | `BigBossManJeb`                                      | display name from things like nicknames without escaping discord format (for use in inline code & code block markdown) |
| `%usernamenoescapes%`    | `jeb_`                                               | raw player username without escaping discord format (for use in inline code & code block markdown)                     |
| `%date%`                 | `Sun Jan 1 15:30:45 PDT 2017`                        | current date & time                                                                                                    |
| `%embedavatarurl%`       | [`<AvatarUrl>`](../config/#AvatarUrl)                | the user's avatar                                                                                                      |
| `%botavatarurl%`         | `<Bot Avatar Url>`                                   | the bot's avatar                                                                                                       |
| `%botname%`              | `DiscordSRV bot`                                     | the bot's name                                                                                                         |

:::note
[PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported
:::

#### [`...JoinMessageFormat`](https://config.discordsrv.com/messages/MinecraftPlayerJoinMessageFormat) {#MinecraftPlayerJoinMessageFormat}

|  Placeholders                             |  Description                                            |
|-------------------------------------------|---------------------------------------------------------|
| `%message%`                               | join message as seen in-game                            |

:::note
[PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported
:::

The message that gets broadcasted when a player joins the server.
#### [`...FirstJoinMessageFormat`](https://config.discordsrv.com/messages/MinecraftPlayerFirstJoinMessageFormat) {#MinecraftPlayerFirstJoinMessageFormat}

|  Placeholders                             |  Description                                            |
|-------------------------------------------|---------------------------------------------------------|
| `%message%`                               | first join message as seen in-game                      |

:::note
[PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported
:::

The message that gets broadcasted when a player joins for the first time.
#### [`...LeaveMessageFormat`](https://config.discordsrv.com/messages/MinecraftPlayerLeaveMessageFormat) {#MinecraftPlayerLeaveMessageFormat}
The message that gets broadcasted when a player leaves.
#### [`...DeathMessageFormat`](https://config.discordsrv.com/messages/MinecraftPlayerDeathMessageFormat) {#MinecraftPlayerDeathMessageFormat}

|  Placeholders                             |  Description                                            |
|-------------------------------------------|---------------------------------------------------------|
|  `%deathmessage%`                         |  Raw death message                                      |

:::note
[PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported
:::

The message that gets broadcasted on player death.  
#### [`...AchievementMessagesFormat`](https://config.discordsrv.com/messages/MinecraftPlayerAchievementMessagesFormat) {#MinecraftPlayerAchievementMessagesFormat}

|  Placeholders                             |  Description                                            |
|-------------------------------------------|---------------------------------------------------------|
|  `%achievement%`                          |  Title of the achievement/advancement                   |

:::note
[PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported
:::

The message that gets broadcasted when a player gets an achievement.

### ChannelTopicUpdater...

|  Placeholders                   |  Description                                                      |
|---------------------------------|-------------------------------------------------------------------|
| `%playercount%`                 | current player count                                              |
| `%playermax%`                   | maximum player count                                              |
| `%date%`                        | current date                                                      |
| `%timestamp%`                   | current time in seconds since UNIX epoch                          |
| `%starttimestamp%`              | start time in seconds since UNIX epoch                            |
| `%totalplayers%`                | total amount of players to ever join the main world               |
| `%uptimemins%`                  | amount of minutes since DiscordSRV has started                    |
| `%uptimehours%`                 | amount of hours since DiscordSRV has started                      |
| `%motd%`                        | motto of the day of the server                                    |
| `%serverversion%`               | server version such as Spigot-1.9                                 |
| `%freememory%`                  | free memory of the JVM in MB                                      |
| `%usedmemory%`                  | used memory of the JVM in MB                                      |
| `%totalmemory%`                 | total memory of the JVM in MB                                     |
| `%maxmemory%`                   | max memory of the JVM in MB                                       |
| `%freememorygb%`                | free memory of the JVM in GB                                      |
| `%usedmemorygb%`                | used memory of the JVM in GB                                      |
| `%totalmemorygb%`               | total memory of the JVM in GB                                     |
| `%maxmemorygb%`                 | max memory of the JVM in GB                                       |
| `%tps%`                         | average TPS of the server                                         |

:::note
[PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported
:::

#### [`...ChatChannelTopicFormat`](https://config.discordsrv.com/messages/ChannelTopicUpdaterChatChannelTopicFormat) {#ChannelTopicUpdaterChatChannelTopicFormat}
message to set the chat channel's topic to every X seconds
#### [`...ConsoleChannelTopicFormat`](https://config.discordsrv.com/messages/ChannelTopicUpdaterConsoleChannelTopicFormat) {#ChannelTopicUpdaterConsoleChannelTopicFormat}
message to set the console channel's topic to every X seconds
#### [`...ChatChannelTopicAtServerShutdownFormat`](https://config.discordsrv.com/messages/ChannelTopicUpdaterChatChannelTopicAtServerShutdownFormat) {#ChannelTopicUpdaterChatChannelTopicAtServerShutdownFormat}
message to set the chat channel's topic when the server shuts down
#### [`...ConsoleChannelTopicAtServerShutdownFormat`](https://config.discordsrv.com/messages/ChannelTopicUpdaterConsoleChannelTopicAtServerShutdownFormat) {#ChannelTopicUpdaterConsoleChannelTopicAtServerShutdownFormat}
message to set the console channel's topic when the server shuts down

### [`DiscordCommandFormat`](https://config.discordsrv.com/messages/DiscordCommandFormat) {#DiscordCommandFormat}
This is the message sent to players when they run "`/discord`". It's recommended to leave command syntax as a part of this.

### [`NoPermissionMessage`](https://config.discordsrv.com/messages/NoPermissionMessage) {#NoPermissionMessage}
 No permission message

### [`UnknownCommandMessage`](https://config.discordsrv.com/messages/UnknownCommandMessage) {#UnknownCommandMessage}
Unknown command message

### DiscordChatChannelServer...
#### [`...StartupMessage`](https://config.discordsrv.com/messages/DiscordChatChannelServerStartupMessage) {#DiscordChatChannelServerStartupMessage}
message to be sent when server starts; leave blank to disable
#### [`...ShutdownMessage`](https://config.discordsrv.com/messages/DiscordChatChannelServerShutdownMessage) {#DiscordChatChannelServerShutdownMessage}
message to be sent when server shuts down; leave blank to disable

### [`ServerWatchdogMessage`](https://config.discordsrv.com/messages/ServerWatchdogMessage) {#ServerWatchdogMessage}

|  Placeholders  |  Description                                                 |
|----------------|--------------------------------------------------------------|
| `%guildowner%` | The guild owner's mention tag.                               |
| `%date%`       | The date & time when the message gets sent.                  |
| `%timeout%`    | ServerWatchdogTimeout as a placeholder                       |
| `%timestamp%`  | For use in discord's timestamp format EG: `\<t:%timestamp%:R> |

The watchdog constantly monitors the last time your server performed a game tick.
If the time since the last tick goes above the set interval in seconds, Discord messages can be triggered.  

### [`CodeGenerated`](https://config.discordsrv.com/messages/CodeGenerated) {#CodeGenerated}

|  Placeholders |  Description                                                 |
|---------------|--------------------------------------------------------------|
| `%code%`      | the code generated for the player to link their account with |
| `%botname%`   | the name of the bot on Discord                               |

The message that appears in minecraft when a player runs the `/discordsrv link` command.  

### [`UnknownCode`](https://config.discordsrv.com/messages/UnknownCode) {#UnknownCode}
The message that appears in the bot's discord DMs if a user sends a 4 character message that isn't a generated code.  

### [`InvalidCode`](https://config.discordsrv.com/messages/InvalidCode) {#InvalidCode}
The message that appears in the bot's discord DMs if a user sends any message that isn't a generated code.  

### [`DiscordAccountLinked`](https://config.discordsrv.com/messages/DiscordAccountLinked) {#DiscordAccountLinked}

|  Placeholders |  Description                                                                   |
|---------------|--------------------------------------------------------------------------------|
| `%name%`      | the name of the Minecraft player that the user's Discord account was linked to |
| `%uuid%`      | the uuid of the Minecraft player that the user's Discord account was linked to |

The bot's DM response when a user gets their discord account linked.  

### [`DiscordAccountAlreadyLinked`](https://config.discordsrv.com/messages/DiscordAccountAlreadyLinked) {#DiscordAccountAlreadyLinked}

|  Placeholders |  Description                                                  |
|---------------|---------------------------------------------------------------|
| `%name%`      | the Minecraft uuid of the user's linked Minecraft account     |
| `%uuid%`      | the Minecraft username of the user's linked Minecraft account |

The bot's DM response if a user tries to link their minecraft account but they're already linked.  

### [`DiscordLinkedAccountRequired`](https://config.discordsrv.com/messages/DiscordLinkedAccountRequired) {#DiscordLinkedAccountRequired}

|  Placeholders |  Description                                                           |
|---------------|------------------------------------------------------------------------|
| `%message%`   | the message the user was not able to send because they were not linked |

The bot's reply if a player that isn't linked tries to send a discord message through the registered text channel.  

### [`DiscordLinkedAccountCheckFailed`](https://config.discordsrv.com/messages/DiscordLinkedAccountCheckFailed) {#DiscordLinkedAccountCheckFailed}
The bot's reply if it can't check if a player is linked.  

### [`ClickToCopyCode`](https://config.discordsrv.com/messages/ClickToCopyCode) {#ClickToCopyCode}
The hover text for [CodeGenerated](#CodeGenerated)'s `%code%` placeholder.

### [`MinecraftAccountLinked`](https://config.discordsrv.com/messages/MinecraftAccountLinked) {#MinecraftAccountLinked}

|  Placeholders |  Description                                                                         |
|---------------|--------------------------------------------------------------------------------------|
| `%id%`        | the discord id of the Discord user that the user's Minecraft account was linked to   |
| `%username%`  | the discord name of the Discord user that the user's Minecraft account was linked to |

The message to the player that gets sent when the player links their discord account.  

### [`MinecraftAccountAlreadyLinked`](https://config.discordsrv.com/messages/MinecraftAccountAlreadyLinked) {#MinecraftAccountAlreadyLinked}
The message to the player if they try to link their discord account but they're already linked.  

### [`LinkedCommandSuccess`](https://config.discordsrv.com/messages/LinkedCommandSuccess) {#LinkedCommandSuccess}

|  Placeholders |  Description                                                                            |
|---------------|-----------------------------------------------------------------------------------------|
| `%name%`      | the discord username of the Discord user that the user's Minecraft account is linked to |

The message that appears to a linked player when they run `/discordsrv linked`.

### [`UnlinkCommandSuccess`](https://config.discordsrv.com/messages/UnlinkCommandSuccess) {#UnlinkCommandSuccess}

|  Placeholders |  Description                                                                             |
|---------------|------------------------------------------------------------------------------------------|
| `%name%`      | the discord username of the Discord user that the user's Minecraft account was linked to |

The message that appears to a linked player when they run `/discordsrv unlink`.

### [`MinecraftNoLinkedAccount`](https://config.discordsrv.com/messages/MinecraftNoLinkedAccount) {#MinecraftNoLinkedAccount}
The message that appears to an unlinked player when they try to use `/discordsrv linked` or `/discordsrv unlink`

### [`LinkingError`](https://config.discordsrv.com/messages/LinkingError) {#LinkingError}
The message that appears to a player if the linking system did not register.

### [`MinecraftNobodyFound`](https://config.discordsrv.com/messages/MinecraftNobodyFound) {#MinecraftNobodyFound}

|  Placeholders |  Description                                 |
|---------------|----------------------------------------------|
| `%target%`    | the input that led to no results being found |

The message that appears to the player/console if `/discord linked %target%` is not found.

[^1]: Requires a server restart for changes to take effect.
