***
**Note: 🏗 This page is under construction.**
***  

### Table of Contents

> * [DiscordToMinecraft..](messages#DiscordToMinecraft)
> 	* `ChatMessageFormat`
> 	* `ChatMessageFormatNoRole`
> 	* `ChatMessageFormat_<channel>`
> 	* `ChatMessageFormatNoRole_<channel>`
> 	* `AllRolesSeparator`
> * [MinecraftChatToDiscordMessage..](messages#MinecraftChatToDiscordMessage)
> 	* `Format`
> 	* `FormatNoPrimaryGroup`  

[`ChatChannelHookMessageFormat`](messages#ChatChannelHookMessageFormat)

> * [Dynmap..](messages#Dynmap)
> 	* `NameFormat`
> 	* `ChatFormat`  
> 	* `DiscordFormat`  

> * [DiscordConsoleChannel..](messages#DiscordConsoleChannel)
> 	* `Format`
> 	* `MessagePrefix`
> 	* `MessageSuffix`  

[`DiscordChatChannelConsoleCommandNotifyErrorsFormat`](messages#DiscordChatChannelConsoleCommandNotifyErrorsFormat)  


> * [DiscordChatChannelListCommand..](messages#DiscordChatChannelListCommand)
> 	* `FormatOnlinePlayers`
> 	* `FormatNoOnlinePlayers`
> 	* `PlayerFormat`
> 	* `AllPlayersSeparator`)  

[`MinecraftPlayerJoinMessage`](messages#MinecraftPlayerJoinMessage) | [`MinecraftPlayerFirstJoinMessage`](messages#MinecraftPlayerFirstJoinMessage) | [`MinecraftPlayerLeaveMessage`](messages#MinecraftPlayerLeaveMessage) | [`MinecraftPlayerDeathMessage`](messages#MinecraftPlayerDeathMessage) | [`MinecraftPlayerAchievementMessage`](messages#MinecraftPlayerAchievementMessage)

> * [ChannelTopicUpdater..](messages#ChannelTopicUpdater)
> 	* `ChatChannelTopicFormat`
> 	* `ConsoleChannelTopicFormat`
> 	* `ChatChannelTopicAtServerShutdownFormat`
> 	* `ConsoleChannelTopicAtServerShutdownFormat`)  

[`DiscordCommandFormat`](messages#DiscordCommandFormat)  

> * [DiscordChatChannelServer..](messages#DiscordChatChannelServer)
> 	* `StartupMessage`
> 	* `ShutdownMessage`  

[`ServerWatchdogMessage`](messages#ServerWatchdogMessage) | [`CodeGenerated`](messages#CodeGenerated) | [`UnknownCode`](messages#UnknownCode) | [`InvalidCode`](messages#InvalidCode) | [`DiscordAccountLinked`](messages#DiscordAccountLinked) | [`DiscordAccountAlreadyLinked`](messages#DiscordAccountAlreadyLinked) | [`DiscordLinkedAccountRequired`](messages#DiscordLinkedAccountRequired) | [`DiscordLinkedAccountCheckFailed`](messages#DiscordLinkedAccountCheckFailed) | [`ClickToCopyCode`](messages#ClickToCopyCode) | [`MinecraftAccountLinked`](messages#MinecraftAccountLinked) | [`MinecraftAccountAlreadyLinked`](messages#MinecraftAccountAlreadyLinked) | [`LinkedCommandSuccess`](messages#LinkedCommandSuccess) | [`UnlinkCommandSuccess`](messages#UnlinkCommandSuccess) | [`MinecraftNoLinkedAccount`](messages#MinecraftNoLinkedAccount) | [`LinkingError`](messages#LinkingError) | [`MinecraftNobodyFound`](messages#MinecraftNobodyFound)

Clicking on `🔗` will lead you to the exact line it's located at in the config of our source


---

### DiscordToMinecraft:
Placeholders:
* `%allroles%` All the user's roles separated by **`DiscordToMinecraftAllRolesSeparator`**
[Owner | Developer | Boss man]
* `%message%` The Message content. [Hello!]
* `%toprole%` The user's highest ranking role. [Owner]
* `%toprolealias%` the alias for the role from `DiscordChatChannelRoleAliases`, otherwise the role's name [Owner]
* `%toproleinitial%` The first initial of the user's highest ranking role. [O]
* `%toprolecolor%` The approximate color of that role defined in **`DiscordChatChannelColorTranslations`** [&4]
* `%username%` The user's username/nickname if set [scarsz]
* `%channelname%` The name of the Discord channel the message is coming from. []
#### `DiscordToMinecraftChatMessageFormat`[🔗](https://config.discordsrv.com/messages/DiscordToMinecraftChatMessageFormat)
The format used when sending messages from Discord to Minecraft.
#### `DiscordToMinecraftChatMessageFormatNoRole`[🔗](https://config.discordsrv.com/messages/DiscordToMinecraftChatMessageFormatNoRole)
The format used when sending messages from Discord to Minecraft for the user with no roles.
#### `DiscordToMinecraftChatMessageFormat_<channel>`
The format used when sending messages from Discord to Minecraft for &lt;channel>.
#### `DiscordToMinecraftChatMessageFormatNoRole_<channel>`
The format used when sending messages from Discord to Minecraft for the user with no roles for &lt;channel>.
#### `DiscordToMinecraftAllRolesSeparator`[🔗](https://config.discordsrv.com/messages/DiscordToMinecraftAllRolesSeparator)
The separator used in between roles in `%allroles%`

---

### MinecraftChatToDiscordMessage:
Placeholders (PlaceholderAPI supported):
* `%username%` raw player username
* `%displayname%` display name from things like nicknames
* `%message%` message content
* `%primarygroup%` the name of the user's primary group
* `%world%` name of world player is in
* `%worldalias%` alias of world player is in via Multiverse-Core
* `%date%` current date & time
* `%channelname%` the name of the channel that the message was sent in, if the message was sent in a channel at all
#### `MinecraftChatToDiscordMessageFormat`[🔗](https://config.discordsrv.com/messages/MinecraftChatToDiscordMessageFormat)
the format used when sending messages from Minecraft to Discord.
#### `MinecraftChatToDiscordMessageFormatNoPrimaryGroup`[🔗](https://config.discordsrv.com/messages/MinecraftChatToDiscordMessageFormatNoPrimaryGroup)
used in place of `MinecraftChatToDiscordMessageFormat` when no primary group for the player was found.

---

### `ChatChannelHookMessageFormat`[🔗](https://config.discordsrv.com/messages/ChatChannelHookMessageFormat)
This is a special message that's only used when a supported chat channel plugin is hooked.
It modifies what the message would be like in-game to include information related to the channel the message is from.  
Placeholders:
* `%channelcolor%` the color character corresponding to the channel
* `%channelname%` the literal name of the channel, usually the name only the server sees internally
* `%channelnickname%` the formal nickname of the channel, usually the name of the channel that players see
* `%message%` the message after processing through `DiscordToMinecraftChatMessageFormat`/`DiscordToMinecraftChatMessageFormatNoRole`

ChatChannelHookMessageFormat
NameFormat
ChatFormat
DiscordFormat
MessagePrefix
MessageSuffix


### Dynmap:
Placeholders for `DynmapNameFormat` & `DynmapChatFormat`:
* `%allroles%` All the user's roles separated by **`DiscordToMinecraftAllRolesSeparator`**
[Owner | Developer | Boss man]
* `%message%` The Message content. [Hello!]
* `%toprole%` The user's highest ranking role. [Owner]
* `%toproleinitial%` The first initial of the user's highest ranking role. [O]
* `%toprolecolor%` The approximate color of that role defined in **`DiscordChatChannelColorTranslations`** [&4]
* `%username%` The user's username/nickname if set [scarsz]
* `%channelname%` The name of the Discord channel the message is coming from. []
PlaceholderAPI placeholders are also supported

#### `DynmapNameFormat`[🔗](https://config.discordsrv.com/messages/DynmapNameFormat)
The format for the username part of the message sent to Dynmap (this may be hidden depending on dynmap settings).
#### `DynmapChatFormat`[🔗](https://config.discordsrv.com/messages/DynmapChatFormat)
The format for the message part of the message sent to Dynmap.
#### `DynmapDiscordFormat`[🔗](https://config.discordsrv.com/messages/DynmapDiscordFormat)
Placeholders for `DynmapDiscordFormat`:
* `%message%` The Message content. [Hello!]
* `%name%` The username for the message sent on the Dynmap web chat (could be blank) [scarsz]
The format for Dynmap messages going to Discord

---

### DiscordConsoleChannel:
#### `DiscordConsoleChannelFormat`[🔗](https://config.discordsrv.com/messages/DiscordConsoleChannelFormat)
This is the format used when sending a line from the console to the console channel, if enabled  
Placeholders:
* `%datetime%` current date & time
* `%level%` message severity level
* `%line%` line from the console  
#### `DiscordConsoleChannelMessagePrefix`[🔗](https://config.discordsrv.com/messages/DiscordConsoleChannelMessagePrefix)
The literal prefix to prepend to a batch of lines.
#### `DiscordConsoleChannelMessageSuffix`[🔗](https://config.discordsrv.com/messages/DiscordConsoleChannelMessageSuffix)
The literal suffix to append to a batch of lines.

### `DiscordChatChannelConsoleCommandNotifyErrorsFormat`[🔗](https://config.discordsrv.com/messages/DiscordChatChannelConsoleCommandNotifyErrorsFormat)
Used when an error occurs with permissions for the player to run the command, not an error running the command itself. This is sent as a PM to the user.  
Placeholders:
* `%user%` the name of the user that tried running the command.
* `%error%` the reason for the error.  

---

### DiscordChatChannelListCommand:
#### `DiscordChatChannelListCommandFormatOnlinePlayers`[🔗](https://config.discordsrv.com/messages/DiscordChatChannelListCommandFormatOnlinePlayers)
the message at the beginning of the list, before all of the player names.
#### `DiscordChatChannelListCommandFormatNoOnlinePlayers`[🔗](https://config.discordsrv.com/messages/DiscordChatChannelListCommandFormatNoOnlinePlayers)
used instead for when no players are online
#### `DiscordChatChannelListCommandPlayerFormat`[🔗](https://config.discordsrv.com/messages/DiscordChatChannelListCommandPlayerFormat)
the format of how each player should appear in the list  
Placeholders (PlaceholderAPI supported):
* `%username%`:     raw player username
* `%displayname%`:  display name from things like nicknames
* `%primarygroup%`: the name of the user's primary group
* `%world%`:        name of world player is in
* `%worldalias%`:   alias of world player is in via Multiverse-Core  
#### `DiscordChatChannelListCommandAllPlayersSeparator`[🔗](https://config.discordsrv.com/messages/DiscordChatChannelListCommandAllPlayersSeparator)
the separator used in between players  

---

### MinecraftPlayer:
Placeholders (PlaceholderAPI supported):
* `%displayname%` display name from things like nicknames
* `%username%` raw player username
* `%date%` current date & time
#### `MinecraftPlayerJoinMessageFormat`[🔗](https://config.discordsrv.com/messages/MinecraftPlayerJoinMessageFormat)
* `%message%` join message as seen in-game
The message that gets broadcasted when a player joins the server.
#### `MinecraftPlayerFirstJoinMessageFormat`[🔗](https://config.discordsrv.com/messages/MinecraftPlayerFirstJoinMessageFormat)
* `%message%` join message as seen in-game
The message that gets broadcasted when a player joins for the first time.
#### `MinecraftPlayerLeaveMessageFormat`[🔗](https://config.discordsrv.com/messages/MinecraftPlayerLeaveMessageFormat)
The message that gets broadcasted when a player leaves.
#### `MinecraftPlayerDeathMessageFormat`[🔗](https://config.discordsrv.com/messages/MinecraftPlayerDeathMessageFormat)
The message that gets broadcasted on player death.  
Placeholder specific to this option:
* `%deathmessage%` Raw death message.  
#### `MinecraftPlayerAchievementMessagesFormat`[🔗](https://config.discordsrv.com/messages/MinecraftPlayerAchievementMessagesFormat)
The message that gets broadcasted when a player gets an achievement.
Placeholder specific to this option:
* `%achievement%` Title of the achievement/advancement.  

---

### ChannelTopicUpdater:
Placeholders:
* `%playercount%` current player count
* `%playermax%` maximum player count
* `%date%` current date
* `%totalplayers%` total amount of players to ever join the main world
* `%uptimemins%` amount of minutes since DiscordSRV has started
* `%uptimehours%` amount of hours since DiscordSRV has started
* `%motd%` motto of the day of the server
* `%serverversion%` server version such as Spigot-1.9
* `%freememory%` free memory of the JVM in MB
* `%usedmemory%` used memory of the JVM in MB
* `%totalmemory%` total memory of the JVM in MB
* `%maxmemory%` max memory of the JVM in MB
* `%freememorygb%` free memory of the JVM in GB
* `%usedmemorygb%` used memory of the JVM in GB
* `%totalmemorygb%` total memory of the JVM in GB
* `%maxmemorygb%` max memory of the JVM in GB
* `%tps%` average TPS of the server
#### `ChannelTopicUpdaterChatChannelTopicFormat`[🔗](https://config.discordsrv.com/messages/ChannelTopicUpdaterChatChannelTopicFormat)
message to set the chat channel's topic to every X seconds
#### `ChannelTopicUpdaterConsoleChannelTopicFormat`[🔗](https://config.discordsrv.com/messages/ChannelTopicUpdaterConsoleChannelTopicFormat)
message to set the console channel's topic to every X seconds
#### `ChannelTopicUpdaterChatChannelTopicAtServerShutdownFormat`[🔗](https://config.discordsrv.com/messages/ChannelTopicUpdaterChatChannelTopicAtServerShutdownFormat)
message to set the chat channel's topic when the server shuts down
#### `ChannelTopicUpdaterConsoleChannelTopicAtServerShutdownFormat`[🔗](https://config.discordsrv.com/messages/ChannelTopicUpdaterConsoleChannelTopicAtServerShutdownFormat)
message to set the console channel's topic when the server shuts down  

---

### `DiscordCommandFormat`[🔗](https://config.discordsrv.com/messages/DiscordCommandFormat)
This is the message sent to players when they run "/discord". It's recommended to leave command syntax as a part of this.  

---

### DiscordChatChannelServer:
#### `DiscordChatChannelServerStartupMessage`[🔗](https://config.discordsrv.com/messages/DiscordChatChannelServerStartupMessage)
message to be sent when server starts; leave blank to disable
#### `DiscordChatChannelServerShutdownMessage`[🔗](https://config.discordsrv.com/messages/DiscordChatChannelServerShutdownMessage)
message to be sent when server shuts down; leave blank to disable  

---

### `ServerWatchdogMessage`[🔗](https://config.discordsrv.com/messages/ServerWatchdogMessage)
The watchdog constantly monitors the last time your server performed a game tick.
If the time since the last tick goes above the set interval in seconds, Discord messages can be triggered.  
Placeholders:
* `%guildowner%` The guild owner's mention tag.
* `%date%` The date & time when the message gets sent.  

### `CodeGenerated`[🔗](https://config.discordsrv.com/messages/CodeGenerated)
The message that appears in minecraft when a player runs the `/discordsrv link` command.  

Placeholders:  
* `%code%` the code generated for the player to link their account with  
* `%botname%` the name of the bot on Discord    

### `UnknownCode`[🔗](https://config.discordsrv.com/messages/UnknownCode)
The message that appears in the bot's discord DMs if a user sends a 4 character message that isn't a generated code.  

### `InvalidCode`[🔗](https://config.discordsrv.com/messages/InvalidCode)
The message that appears in the bot's discord DMs if a user sends any message that isn't a generated code.  

### `DiscordAccountLinked`[🔗](https://config.discordsrv.com/messages/DiscordAccountLinked)
The bot's DM response when a user gets their discord account linked.  

Placeholders:  
* `%name%` the name of the Minecraft player that the user's Discord account was linked to  
* `%uuid%` the uuid of the Minecraft player that the user's Discord account was linked to  

### `DiscordAccountAlreadyLinked`[🔗](https://config.discordsrv.com/messages/DiscordAccountAlreadyLinked)
The bot's DM response if a user tries to link their minecraft account but they're already linked.  

Placeholders:  
* `%uuid%` the Minecraft uuid of the user's linked Minecraft account  
* `%username%` the Minecraft username of the user's linked Minecraft account  

### `DiscordLinkedAccountRequired`[🔗](https://config.discordsrv.com/messages/DiscordLinkedAccountRequired)
The bot's reply if a player that isn't linked tries to send a discord message through the registered text channel.  

Placeholders:  
* `%message%` the message the user was not able to send because they were not linked  

### `DiscordLinkedAccountCheckFailed`[🔗](https://config.discordsrv.com/messages/DiscordLinkedAccountCheckFailed)
The bot's reply if it can't check if a player is linked.  

### `ClickToCopyCode`[🔗](https://config.discordsrv.com/messages/ClickToCopyCode)
The hover text for [CodeGenerated](#CodeGenerated)'s `%code%` placeholder.

### `MinecraftAccountLinked`[🔗](https://config.discordsrv.com/messages/MinecraftAccountLinked)
The message to the player that gets sent when the player links their discord account.  

Placeholders:  
* `%id%` the discord id of the Discord user that the user's Minecraft account was linked to  
* `%username%` the discord name of the Discord user that the user's Minecraft account was linked to    

### `MinecraftAccountAlreadyLinked`[🔗](https://config.discordsrv.com/messages/MinecraftAccountAlreadyLinked)
The message to the player if they try to link their discord account but they're already linked.  

### `LinkedCommandSuccess`[🔗](https://config.discordsrv.com/messages/LinkedCommandSuccess)
The message that appears to a linked player when they run `/discordsrv linked`.

Placeholders:  
* `%name%` the discord username of the Discord user that the user's Minecraft account is linked to  

### `UnlinkCommandSuccess`[🔗](https://config.discordsrv.com/messages/UnlinkCommandSuccess)
The message that appears to a linked player when they run `/discordsrv unlink`.

Placeholders:  
* `%name%` the discord username of the Discord user that the user's Minecraft account was linked to  

### `MinecraftNoLinkedAccount`[🔗](https://config.discordsrv.com/messages/MinecraftNoLinkedAccount)
The message that appears to an unlinked player when they try to use `/discordsrv linked` or `/discordsrv unlink`

### `LinkingError`[🔗](https://config.discordsrv.com/messages/LinkingError)
The message that appears to a player if the linking system did not register.

### `MinecraftNobodyFound`[🔗](https://config.discordsrv.com/messages/MinecraftNobodyFound)
The message that appears to the player/console if `/discord linked %target%` is not found.

Placeholders:  
* `%target%` the input that led to no results being found  

---

# References
1. Requires a server restart for changes to take effect.  

[¹]: messages#References