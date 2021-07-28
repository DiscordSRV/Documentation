# [messages.yml](https://config.discordsrv.com/messages/_)

### DiscordToMinecraft...

+--------------------+--------------------------------+------------------------------------------------------------------------------------------------------------------------------------+
| Placeholders       | Example                        | Description                                                                                                                        |
+====================+================================+====================================================================================================================================+
| `%allroles%`       | `Owner | Developer | Boss man` | All the user's roles separated by [`DiscordToMinecraftAllRolesSeparator`](../config/#DiscordToMinecraftAllRolesSeparator)          |
+--------------------+--------------------------------+------------------------------------------------------------------------------------------------------------------------------------+
| `%message%`        | `Hello!`                       | The message content                                                                                                                |
+--------------------+--------------------------------+------------------------------------------------------------------------------------------------------------------------------------+
| `%toprole%`        | `Owner`                        | The user's highest ranking role                                                                                                    |
+--------------------+--------------------------------+------------------------------------------------------------------------------------------------------------------------------------+
| `%toprolealias%`   | `Owner`                        | The alias for the role from [`DiscordChatChannelRoleAliases`](../config/#DiscordChatChannelRoleAliases), otherwise the role's name |
+--------------------+--------------------------------+------------------------------------------------------------------------------------------------------------------------------------+
| `%toproleinitial%` | `O`                            | The first initial of the user's highest ranking role                                                                               |
+--------------------+--------------------------------+------------------------------------------------------------------------------------------------------------------------------------+
| `%toprolecolor%`   | `<dark_red>`                   | The approximate color of the highest ranking role                                                                                  |
+--------------------+--------------------------------+------------------------------------------------------------------------------------------------------------------------------------+
| `%username%`       | `scarsz`                       | The user's username/nickname if set                                                                                                |
+--------------------+--------------------------------+------------------------------------------------------------------------------------------------------------------------------------+
| `%channelname%`    | `global`                       | The name of the Discord channel the message is coming from                                                                         |
+--------------------+--------------------------------+------------------------------------------------------------------------------------------------------------------------------------+
|                                            [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported                                            |
|                                                       <!-- TODO Modify the mdx-grid-tables extension to allow centering items -->                                                        |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+


#### [`...ChatMessageFormat`](https://config.discordsrv.com/messages/DiscordToMinecraftChatMessageFormat) {id="DiscordToMinecraftChatMessageFormat"}
The format used when sending messages from Discord to Minecraft.
#### [`...ChatMessageFormatNoRole`](https://config.discordsrv.com/messages/DiscordToMinecraftChatMessageFormatNoRole) {id="DiscordToMinecraftChatMessageFormatNoRole"}
The format used when sending messages from Discord to Minecraft for the user with no roles.
#### `...ChatMessageFormat_<channel>`
The format used when sending messages from Discord to Minecraft for `<channel>`.
#### `...ChatMessageFormatNoRole_<channel>`
The format used when sending messages from Discord to Minecraft for the user with no roles for `<channel>`.
#### [`...AllRolesSeparator`](https://config.discordsrv.com/messages/DiscordToMinecraftAllRolesSeparator) {id="DiscordToMinecraftAllRolesSeparator"}
The separator used in between roles in `%allroles%`

---

### MinecraftChatToDiscordMessage...

+--------------------------+-------------------------------+------------------------------------------------------------------------------------------------------------------------+
| Placeholders             | Example                       | Description                                                                                                            |
+==========================+===============================+========================================================================================================================+
| `%username%`             | `jeb_`                        | raw player username                                                                                                    |
+--------------------------+-------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%displayname%`          | `BigBossManJeb`               | display name from things like nicknames                                                                                |
+--------------------------+-------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%usernamenoescapes%`    | `jeb_`                        | raw player username without escaping discord format (for use in inline code & code block markdown)                     |
+--------------------------+-------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%displaynamenoescapes%` | `BigBossManJeb`               | display name from things like nicknames without escaping discord format (for use in inline code & code block markdown) |
+--------------------------+-------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%message%`              | `Hello!`                      | message content                                                                                                        |
+--------------------------+-------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%primarygroup%`         | `Owner`                       | the name of the user's primary group                                                                                   |
+--------------------------+-------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%world%`                | `world`                       | name of world player is in                                                                                             |
+--------------------------+-------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%worldalias%`           | `Mainland`                    | alias of world player is in via Multiverse-Core                                                                        |
+--------------------------+-------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%date%`                 | `Sun Jan 1 15:30:45 PDT 2017` | current date & time                                                                                                    |
+--------------------------+-------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%channelname%`          | `global`                      | the name of the channel that the message was sent in, if the message was sent in a channel at all                      |
+--------------------------+-------------------------------+------------------------------------------------------------------------------------------------------------------------+
|                                         [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported                                        |
|                                                    <!-- TODO Modify the mdx-grid-tables extension to allow centering items -->                                                    |
+-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

#### [`...Format`](https://config.discordsrv.com/messages/MinecraftChatToDiscordMessageFormat) {id="MinecraftChatToDiscordMessageFormat"}
the format used when sending messages from Minecraft to Discord.
#### [`...FormatNoPrimaryGroup`](https://config.discordsrv.com/messages/MinecraftChatToDiscordMessageFormatNoPrimaryGroup) {id="MinecraftChatToDiscordMessageFormatNoPrimaryGroup"}
used in place of `MinecraftChatToDiscordMessageFormat` when no primary group for the player was found.

---

### [`ChatChannelHookMessageFormat`](https://config.discordsrv.com/messages/ChatChannelHookMessageFormat) {id="ChatChannelHookMessageFormat"}
This is a special message that's only used when a supported chat channel plugin is hooked.
It modifies what the message would be like in-game to include information related to the channel the message is from.  

+---------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Placeholders        | Explanations                                                                                                                                                                                                 |
+---------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| `%channelcolor%`    | the color character corresponding to the channel                                                                                                                                                             |
+---------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| `%channelname%`     | the literal name of the channel, usually the name only the server sees internally                                                                                                                            |
+---------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| `%channelnickname%` | the formal nickname of the channel, usually the name of the channel that players see                                                                                                                         |
+---------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| `%message%`         | the message after processing through [`DiscordToMinecraftChatMessageFormat`](#DiscordToMinecraftChatMessageFormat)/[`DiscordToMinecraftChatMessageFormatNoRole`](#DiscordToMinecraftChatMessageFormatNoRole) |
+---------------------+--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

### Dynmap...

+--------------+----------+---------------------------------------------------------------------------+
| Placeholders | Example  | Description                                                               |
+==============+==========+===========================================================================+
| Same as [Discord -> Minecraft placeholders](#discordtominecraft)                                    |
+--------------+----------+---------------------------------------------------------------------------+
|  [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported |
+-----------------------------------------------------------------------------------------------------+

#### [`...NameFormat`](https://config.discordsrv.com/messages/DynmapNameFormat) {id="DynmapNameFormat"}
The format for the username part of the message sent to Dynmap (this may be hidden depending on dynmap settings).
#### [`...ChatFormat`](https://config.discordsrv.com/messages/DynmapChatFormat) {id="DynmapChatFormat"}
The format for the message part of the message sent to Dynmap.
#### [`...DiscordFormat`](https://config.discordsrv.com/messages/DynmapDiscordFormat) {id="DynmapDiscordFormat"}

+--------------+----------+---------------------------------------------------------------------------+
| Placeholders | Example  | Description                                                               |
+==============+==========+===========================================================================+
| `%name%`     | `Notch`  | the username for the message sent on the Dynmap web chat (could be blank) |
+--------------+----------+---------------------------------------------------------------------------+
| `%message%`  | `Hello!` | message content                                                           |
+--------------+----------+---------------------------------------------------------------------------+
|  [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported |
+-----------------------------------------------------------------------------------------------------+

The format for Dynmap messages going to Discord

---

### DiscordConsoleChannel...
#### [`...Format`](https://config.discordsrv.com/messages/DiscordConsoleChannelFormat) {id="DiscordConsoleChannelFormat"}

+---------------------+-----------------------------------------------+------------------------------+
| Placeholders        | Example                                       | Description                  |
+=====================+===============================================+==============================+
| `%datetime%`        | `Sun Jan 1 15:30:45 PDT 2017`                 | current date & time          |
+---------------------+-----------------------------------------------+------------------------------+
| `%level%`           | `INFO, WARN, ERROR`                           | message severity level       |
+---------------------+-----------------------------------------------+------------------------------+
| `%line%`            | `[DiscordSRV] Enabling DiscordSRV vX.Y`       | line from the console        |
+---------------------+-----------------------------------------------+------------------------------+
| [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported |
+----------------------------------------------------------------------------------------------------+

This is the format used when sending a line from the console to the console channel, if enabled  

#### [`...MessagePrefix`](https://config.discordsrv.com/messages/DiscordConsoleChannelMessagePrefix) {id="DiscordConsoleChannelMessagePrefix"}
The literal prefix to prepend to a batch of lines
#### [`...MessageSuffix`](https://config.discordsrv.com/messages/DiscordConsoleChannelMessageSuffix) {id="DiscordConsoleChannelMessageSuffix"}
The literal suffix to append to a batch of lines

---

### [`DiscordChatChannelConsoleCommandNotifyErrorsFormat`](https://config.discordsrv.com/messages/DiscordChatChannelConsoleCommandNotifyErrorsFormat) {id="DiscordChatChannelConsoleCommandNotifyErrorsFormat"}

+--------------+-----------------+-----------------------------------------------------+
| Placeholders | Example         | Description                                         |
+==============+=================+=====================================================+
| `%user%`     | `scarsz`        | the name of the user that tried running the command |
+--------------+-----------------+-----------------------------------------------------+
| `%error%`    | `no permission` | the reason for the error                            |
+--------------+-----------------+-----------------------------------------------------+

Used when an error occurs with permissions for the player to run the command, not an error running the command itself. This is sent as a PM to the user.  

---

### DiscordChatChannelListCommand...
#### [`...FormatOnlinePlayers`](https://config.discordsrv.com/messages/DiscordChatChannelListCommandFormatOnlinePlayers) {id="DiscordChatChannelListCommandFormatOnlinePlayers"}
the message at the beginning of the list, before all of the player names.
#### [`...FormatNoOnlinePlayers`](https://config.discordsrv.com/messages/DiscordChatChannelListCommandFormatNoOnlinePlayers) {id="DiscordChatChannelListCommandFormatNoOnlinePlayers"}
used instead for when no players are online
#### [`...PlayerFormat`](https://config.discordsrv.com/messages/DiscordChatChannelListCommandPlayerFormat) {id="DiscordChatChannelListCommandPlayerFormat"}

+-----------------------+----------------------+------------------------------------------------------+
|  Placeholders         |  Example             |  Description                                         |
+=======================+======================+======================================================+
| `%username%`          | `jeb_`               | raw player username                                  |
+-----------------------+----------------------+------------------------------------------------------+
| `%displayname%`       | `BigBossManJeb`      | display name from things like nicknames              |
+-----------------------+----------------------+------------------------------------------------------+
| `%primarygroup%`      | `Owner`              | the name of the user's primary group                 |
+-----------------------+----------------------+------------------------------------------------------+
| `%world%`             | `world`              | name of world player is in                           |
+-----------------------+----------------------+------------------------------------------------------+
| `%worldalias%`        | `Mainland`           | alias of world player is in via Multiverse-Core      |
+-----------------------+----------------------+------------------------------------------------------+
|  [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported |
+-----------------------------------------------------------------------------------------------------+

the format of how each player should appear in the list  
#### [`...AllPlayersSeparator`](https://config.discordsrv.com/messages/DiscordChatChannelListCommandAllPlayersSeparator) {id="DiscordChatChannelListCommandAllPlayersSeparator"}
the separator used in between players  

---

### MinecraftPlayer...
+-------------------+---------------------------------------------------------------------------------------------------------------------------------+
| Embed Information |  Description                                                                                                                    |
+===================+=================================================================================================================================+
| Color             | accepts a hex color code (eg. "#ffffff") or a rgb integer (eg. 0)                                                               |
+-------------------+---------------------------------------------------------------------------------------------------------------------------------+
| Fields            | format is "title;value;inline" (eg. "Who joined?;%displayname%;true") or "blank" to add a blank field                           |
+-------------------+---------------------------------------------------------------------------------------------------------------------------------+
| Timestamp         | set to true to use the time the message was sent or use a epoch timestamp for a specific time (https://www.epochconverter.com/) |
+-------------------+---------------------------------------------------------------------------------------------------------------------------------+

+--------------------------+------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|  Placeholders            |  Example                                             |  Description                                                                                                           |
+==========================+======================================================+========================================================================================================================+
| `%displayname%`          | `BigBossManJeb`                                      | display name from things like nicknames                                                                                |
+--------------------------+------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%username%`             | `jeb_`                                               | raw player username                                                                                                    |
+--------------------------+------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%displaynamenoescapes%` | `BigBossManJeb`                                      | display name from things like nicknames without escaping discord format (for use in inline code & code block markdown) |
+--------------------------+------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%usernamenoescapes%`    | `jeb_`                                               | raw player username without escaping discord format (for use in inline code & code block markdown)                     |
+--------------------------+------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%date%`                 | `Sun Jan 1 15:30:45 PDT 2017`                        | current date & time                                                                                                    |
+--------------------------+------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%embedavatarurl%`       | [`<AvatarUrl>`](../config/#AvatarUrl)                | the user's avatar                                                                                                      |
+--------------------------+------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%botavatarurl%`         | `<Bot Avatar Url>`                                   | the bot's avatar                                                                                                       |
+--------------------------+------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
| `%botname%`              | `DiscordSRV bot`                                     | the bot's name                                                                                                         |
+--------------------------+------------------------------------------------------+------------------------------------------------------------------------------------------------------------------------+
|  [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported                                                                                                      |
+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

#### [`...JoinMessageFormat`](https://config.discordsrv.com/messages/MinecraftPlayerJoinMessageFormat) {id="MinecraftPlayerJoinMessageFormat"}

+-------------------------------------------+---------------------------------------------------------+
|  Placeholders                             |  Description                                            |
+===========================================+=========================================================+
| `%message%`                               | join message as seen in-game                            |
+-------------------------------------------+---------------------------------------------------------+
|  [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported |
+-----------------------------------------------------------------------------------------------------+

The message that gets broadcasted when a player joins the server.
#### [`...FirstJoinMessageFormat`](https://config.discordsrv.com/messages/MinecraftPlayerFirstJoinMessageFormat) {id="MinecraftPlayerFirstJoinMessageFormat"}

+-------------------------------------------+---------------------------------------------------------+
|  Placeholders                             |  Description                                            |
+===========================================+=========================================================+
| `%message%`                               | first join message as seen in-game                      |
+-------------------------------------------+---------------------------------------------------------+
|  [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported |
+-----------------------------------------------------------------------------------------------------+

The message that gets broadcasted when a player joins for the first time.
#### [`...LeaveMessageFormat`](https://config.discordsrv.com/messages/MinecraftPlayerLeaveMessageFormat) {id="MinecraftPlayerLeaveMessageFormat"}
The message that gets broadcasted when a player leaves.
#### [`...DeathMessageFormat`](https://config.discordsrv.com/messages/MinecraftPlayerDeathMessageFormat) {id="MinecraftPlayerDeathMessageFormat"}

+-------------------------------------------+---------------------------------------------------------+
|  Placeholders                             |  Description                                            |
+===========================================+=========================================================+
|  `%deathmessage%`                         |  Raw death message                                      |
+-------------------------------------------+---------------------------------------------------------+
|  [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported |
+-----------------------------------------------------------------------------------------------------+

The message that gets broadcasted on player death.  
#### [`...AchievementMessagesFormat`](https://config.discordsrv.com/messages/MinecraftPlayerAchievementMessagesFormat) {id="MinecraftPlayerAchievementMessagesFormat"}

+-------------------------------------------+---------------------------------------------------------+
|  Placeholders                             |  Description                                            |
+===========================================+=========================================================+
|  `%achievement%`                          |  Title of the achievement/advancement                   |
+-------------------------------------------+---------------------------------------------------------+
|  [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported |
+-----------------------------------------------------------------------------------------------------+

The message that gets broadcasted when a player gets an achievement.

---

### ChannelTopicUpdater...

+---------------------------------+-------------------------------------------------------------------+
|  Placeholders                   |  Description                                                      |
+=================================+===================================================================+
| `%playercount%`                 | current player count                                              |
+---------------------------------+-------------------------------------------------------------------+
| `%playermax%`                   | maximum player count                                              |
+---------------------------------+-------------------------------------------------------------------+
| `%date%`                        | current date                                                      |
+---------------------------------+-------------------------------------------------------------------+
| `%totalplayers%`                | total amount of players to ever join the main world               |
+---------------------------------+-------------------------------------------------------------------+
| `%uptimemins%`                  | amount of minutes since DiscordSRV has started                    |
+---------------------------------+-------------------------------------------------------------------+
| `%uptimehours%`                 | amount of hours since DiscordSRV has started                      |
+---------------------------------+-------------------------------------------------------------------+
| `%motd%`                        | motto of the day of the server                                    |
+---------------------------------+-------------------------------------------------------------------+
| `%serverversion%`               | server version such as Spigot-1.9                                 |
+---------------------------------+-------------------------------------------------------------------+
| `%freememory%`                  | free memory of the JVM in MB                                      |
+---------------------------------+-------------------------------------------------------------------+
| `%usedmemory%`                  | used memory of the JVM in MB                                      |
+---------------------------------+-------------------------------------------------------------------+
| `%totalmemory%`                 | total memory of the JVM in MB                                     |
+---------------------------------+-------------------------------------------------------------------+
| `%maxmemory%`                   | max memory of the JVM in MB                                       |
+---------------------------------+-------------------------------------------------------------------+
| `%freememorygb%`                | free memory of the JVM in GB                                      |
+---------------------------------+-------------------------------------------------------------------+
| `%usedmemorygb%`                | used memory of the JVM in GB                                      |
+---------------------------------+-------------------------------------------------------------------+
| `%totalmemorygb%`               | total memory of the JVM in GB                                     |
+---------------------------------+-------------------------------------------------------------------+
| `%maxmemorygb%`                 | max memory of the JVM in GB                                       |
+---------------------------------+-------------------------------------------------------------------+
| `%tps%`                         | average TPS of the server                                         |
+---------------------------------+-------------------------------------------------------------------+
|  [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported |
+-----------------------------------------------------------------------------------------------------+

#### [`...ChatChannelTopicFormat`](https://config.discordsrv.com/messages/ChannelTopicUpdaterChatChannelTopicFormat) {id="ChannelTopicUpdaterChatChannelTopicFormat"}
message to set the chat channel's topic to every X seconds
#### [`...ConsoleChannelTopicFormat`](https://config.discordsrv.com/messages/ChannelTopicUpdaterConsoleChannelTopicFormat) {id="ChannelTopicUpdaterConsoleChannelTopicFormat"}
message to set the console channel's topic to every X seconds
#### [`...ChatChannelTopicAtServerShutdownFormat`](https://config.discordsrv.com/messages/ChannelTopicUpdaterChatChannelTopicAtServerShutdownFormat) {id="ChannelTopicUpdaterChatChannelTopicAtServerShutdownFormat"}
message to set the chat channel's topic when the server shuts down
#### [`...ConsoleChannelTopicAtServerShutdownFormat`](https://config.discordsrv.com/messages/ChannelTopicUpdaterConsoleChannelTopicAtServerShutdownFormat) {id="ChannelTopicUpdaterConsoleChannelTopicAtServerShutdownFormat"}
message to set the console channel's topic when the server shuts down  

---

### [`DiscordCommandFormat`](https://config.discordsrv.com/messages/DiscordCommandFormat) {id="DiscordCommandFormat"}
This is the message sent to players when they run "`/discord`". It's recommended to leave command syntax as a part of this.  

---

### DiscordChatChannelServer...
#### [`...StartupMessage`](https://config.discordsrv.com/messages/DiscordChatChannelServerStartupMessage) {id="DiscordChatChannelServerStartupMessage"}
message to be sent when server starts; leave blank to disable
#### [`...ShutdownMessage`](https://config.discordsrv.com/messages/DiscordChatChannelServerShutdownMessage) {id="DiscordChatChannelServerShutdownMessage"}
message to be sent when server shuts down; leave blank to disable  

---

### [`ServerWatchdogMessage`](https://config.discordsrv.com/messages/ServerWatchdogMessage) {id="ServerWatchdogMessage"}

+----------------+---------------------------------------------+
|  Placeholders  |  Description                                |
+================+=============================================+
| `%guildowner%` | The guild owner's mention tag.              |
+----------------+---------------------------------------------+
| `%date%`       | The date & time when the message gets sent. |
+----------------+---------------------------------------------+

The watchdog constantly monitors the last time your server performed a game tick.
If the time since the last tick goes above the set interval in seconds, Discord messages can be triggered.  

### [`CodeGenerated`](https://config.discordsrv.com/messages/CodeGenerated) {id="CodeGenerated"}

+---------------+--------------------------------------------------------------+
|  Placeholders |  Description                                                 |
+===============+==============================================================+
| `%code%`      | the code generated for the player to link their account with |
+---------------+--------------------------------------------------------------+
| `%botname%`   | the name of the bot on Discord                               |
+---------------+--------------------------------------------------------------+

The message that appears in minecraft when a player runs the `/discordsrv link` command.  

### [`UnknownCode`](https://config.discordsrv.com/messages/UnknownCode) {id="UnknownCode"}
The message that appears in the bot's discord DMs if a user sends a 4 character message that isn't a generated code.  

### [`InvalidCode`](https://config.discordsrv.com/messages/InvalidCode) {id="InvalidCode"}
The message that appears in the bot's discord DMs if a user sends any message that isn't a generated code.  

### [`DiscordAccountLinked`](https://config.discordsrv.com/messages/DiscordAccountLinked) {id="DiscordAccountLinked"}

+---------------+--------------------------------------------------------------------------------+
|  Placeholders |  Description                                                                   |
+===============+================================================================================+
| `%name%`      | the name of the Minecraft player that the user's Discord account was linked to |
+---------------+--------------------------------------------------------------------------------+
| `%uuid%`      | the uuid of the Minecraft player that the user's Discord account was linked to |
+---------------+--------------------------------------------------------------------------------+

The bot's DM response when a user gets their discord account linked.  

### [`DiscordAccountAlreadyLinked`](https://config.discordsrv.com/messages/DiscordAccountAlreadyLinked) {id="DiscordAccountAlreadyLinked"}

+---------------+---------------------------------------------------------------+
|  Placeholders |  Description                                                  |
+===============+===============================================================+
| `%name%`      | the Minecraft uuid of the user's linked Minecraft account     |
+---------------+---------------------------------------------------------------+
| `%uuid%`      | the Minecraft username of the user's linked Minecraft account |
+---------------+---------------------------------------------------------------+

The bot's DM response if a user tries to link their minecraft account but they're already linked.  

### [`DiscordLinkedAccountRequired`](https://config.discordsrv.com/messages/DiscordLinkedAccountRequired) {id="DiscordLinkedAccountRequired"}

+---------------+------------------------------------------------------------------------+
|  Placeholders |  Description                                                           |
+===============+========================================================================+
| `%message%`   | the message the user was not able to send because they were not linked |
+---------------+------------------------------------------------------------------------+

The bot's reply if a player that isn't linked tries to send a discord message through the registered text channel.  

### [`DiscordLinkedAccountCheckFailed`](https://config.discordsrv.com/messages/DiscordLinkedAccountCheckFailed) {id="DiscordLinkedAccountCheckFailed"}
The bot's reply if it can't check if a player is linked.  

### [`ClickToCopyCode`](https://config.discordsrv.com/messages/ClickToCopyCode) {id="ClickToCopyCode"}
The hover text for [CodeGenerated](#CodeGenerated)'s `%code%` placeholder.

### [`MinecraftAccountLinked`](https://config.discordsrv.com/messages/MinecraftAccountLinked) {id="MinecraftAccountLinked"}

+---------------+--------------------------------------------------------------------------------------+
|  Placeholders |  Description                                                                         |
+===============+======================================================================================+
| `%id%`        | the discord id of the Discord user that the user's Minecraft account was linked to   |
+---------------+--------------------------------------------------------------------------------------+
| `%username%`  | the discord name of the Discord user that the user's Minecraft account was linked to |
+---------------+--------------------------------------------------------------------------------------+

The message to the player that gets sent when the player links their discord account.  

### [`MinecraftAccountAlreadyLinked`](https://config.discordsrv.com/messages/MinecraftAccountAlreadyLinked) {id="MinecraftAccountAlreadyLinked"}
The message to the player if they try to link their discord account but they're already linked.  

### [`LinkedCommandSuccess`](https://config.discordsrv.com/messages/LinkedCommandSuccess) {id="LinkedCommandSuccess"}

+---------------+-----------------------------------------------------------------------------------------+
|  Placeholders |  Description                                                                            |
+===============+=========================================================================================+
| `%name%`      | the discord username of the Discord user that the user's Minecraft account is linked to |
+---------------+-----------------------------------------------------------------------------------------+

The message that appears to a linked player when they run `/discordsrv linked`.

### [`UnlinkCommandSuccess`](https://config.discordsrv.com/messages/UnlinkCommandSuccess) {id="UnlinkCommandSuccess"}

+---------------+------------------------------------------------------------------------------------------+
|  Placeholders |  Description                                                                             |
+===============+==========================================================================================+
| `%name%`      | the discord username of the Discord user that the user's Minecraft account was linked to |
+---------------+------------------------------------------------------------------------------------------+

The message that appears to a linked player when they run `/discordsrv unlink`.

### [`MinecraftNoLinkedAccount`](https://config.discordsrv.com/messages/MinecraftNoLinkedAccount) {id="MinecraftNoLinkedAccount"}
The message that appears to an unlinked player when they try to use `/discordsrv linked` or `/discordsrv unlink`

### [`LinkingError`](https://config.discordsrv.com/messages/LinkingError) {id="LinkingError"}
The message that appears to a player if the linking system did not register.

### [`MinecraftNobodyFound`](https://config.discordsrv.com/messages/MinecraftNobodyFound) {id="MinecraftNobodyFound"}

+---------------+----------------------------------------------+
|  Placeholders |  Description                                 |
+===============+==============================================+
| `%target%`    | the input that led to no results being found |
+---------------+----------------------------------------------+

The message that appears to the player/console if `/discord linked %target%` is not found.

[^1]: Requires a server restart for changes to take effect.