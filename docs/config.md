### Table of Contents

[`ConfigVersion`](config#ConfigVersion) | [`BotToken`](config#BotToken)[¹] | [`Channels`](config#Channels) | [`DiscordConsoleChannelId`](config#DiscordConsoleChannelId)[¹]  | [`DiscordInviteLink`](config#DiscordInviteLink)  

> * [Debug..](config#Debug)
> 	* DebugLevel
> 	* DebugJDA
> 	* DebugJDARestActionStacks

[`CancelConsoleCommandIfLoggingFailed`](config#CancelConsoleCommandIfLoggingFailed) | [`RespectChatPlugins`](config#RespectChatPlugins) | [`ForcedLanguage`](config#ForcedLanguage) | [`AvatarUrl`](config#AvatarUrl)  

> * [Experiment_Jdbc..](config#Experiment_Jdbc)
> 	* Experiment_JdbcAccountLinkBackend
> 	* Experiment_JdbcTablePrefix
> 	* Experiment_JdbcUsername
> 	* Experiment_JdbcPassword

> * [Experiment_WebhookChatMessage..](config#Experiment_WebhookChatMessage)
>   * Experiment_WebhookChatMessageDelivery
>   * Experiment_WebhookChatMessageUsernameFormat
>   * Experiment_WebhookChatMessageFormat
>   * Experiment_WebhookChatMessageUsernameFromDiscord
>   * Experiment_WebhookChatMessageAvatarFromDiscord

> * [Experiment_MCDiscordReserializer...](config#Experiment_MCDiscordReserializer)
>   * Experiment_MCDiscordReserializer_ToDiscord
>   * Experiment_MCDiscordReserializer_ToMinecraft
>   * Experiment_MCDiscordReserializer_InBroadcast

[`PrintGuildsAndChannels`](config#PrintGuildsAndChannels) | [`ForceTLSv12`](config#ForceTLSv12) | [`NoopHostnameVerifier`](config#NoopHostnameVerifier) | [`ParseEmojisToNames`](config#ParseEmojisToNames) | [`MaximumAttemptsForSystemDNSBeforeUsingFallbackDNS`](config#MaximumAttemptsForSystemDNSBeforeUsingFallbackDNS) | [`DisabledPluginHooks`](config#DisabledPluginHooks) | [`VentureChatBungee`](config#VentureChatBungee) | [`EnablePresenceInformation`](config#EnablePresenceInformation) | [`DiscordGameStatus`](config#DiscordGameStatus) | [`StatusUpdateRateInMinutes`](config#StatusUpdateRateInMinutes) | [`TimestampFormat`](config#TimestampFormat) | [`DateFormat`](config#DateFormat) | [`Timezone`](config#Timezone)  

> * [DiscordChatChannel..](config#DiscordChatChannel)
> 	* DiscordChatChannelDiscordToMinecraft
> 	* DiscordChatChannelMinecraftToDiscord
> 	* DiscordChatChannelTruncateLength
> 	* DiscordChatChannelTranslateMentions
> 	* DiscordChatChannelAllowedMentions
> 	* DiscordChatChannelPrefixRequiredToProcessMessage
> 	* DiscordChatChannelRolesAllowedToUseColorCodesInChat
> 	* DiscordChatChannelBroadcastDiscordMessagesToConsole
> 	* DiscordChatChannelRequireLinkedAccount
> 	* DiscordChatChannelBlockBots
> 	* DiscordChatChannelBlockedIds
> 	* DiscordChatChannelColorTranslations
> 	* DiscordChatChannelRolesSelectionAsWhitelist
> 	* DiscordChatChannelRolesSelection
> 	* DiscordChatChannelRoleAliases

> * [DiscordConsoleChannel..](config#DiscordConsoleChannel)
> 	* DiscordConsoleChannelLogRefreshRateInSeconds
> 	* DiscordConsoleChannelUsageLog
> 	* DiscordConsoleChannelBlacklistActsAsWhitelist
> 	* DiscordConsoleChannelBlacklistedCommands
> 	* DiscordConsoleChannelFilters
> 	* DiscordConsoleChannelLevels
> 	* DiscordConsoleChannelAllowPluginUpload

> * [DiscordChatChannelConsoleCommand..](config#DiscordChatChannelConsoleCommand)	
> 	* DiscordChatChannelConsoleCommandEnabled
> 	* DiscordChatChannelConsoleCommandNotifyErrors
> 	* DiscordChatChannelConsoleCommandPrefix
> 	* DiscordChatChannelConsoleCommandRolesAllowed
> 	* DiscordChatChannelConsoleCommandWhitelist
> 	* DiscordChatChannelConsoleCommandWhitelistBypassRoles
> 	* DiscordChatChannelConsoleCommandWhitelistActsAsBlacklist
> 	* DiscordChatChannelConsoleCommandExpiration
> 	* DiscordChatChannelConsoleCommandExpirationDeleteRequest

> * [DiscordChatChannelListCommand..](config#DiscordChatChannelListCommand)
> 	* DiscordChatChannelListCommandEnabled
> 	* DiscordChatChannelListCommandMessage
> 	* DiscordChatChannelListCommandExpiration
> 	* DiscordChatChannelListCommandExpirationDeleteRequest

> * [DiscordChatChannel..](config#DiscordChatChannel)
> 	* DiscordChatChannelGameFilters
> 	* DiscordChatChannelDiscordFilters

> * [ChannelTopicUpdater..](config#ChannelTopicUpdater)
> 	* ChannelTopicUpdaterChannelTopicsAtShutdownEnabled
> 	* ChannelTopicUpdaterRateInMinutes

[`DiscordCannedResponses`](config#DiscordCannedResponses)  

> * [MinecraftDiscordAccount..](config#MinecraftDiscordAccount)
> 	* MinecraftDiscordAccountLinkedConsoleCommands
> 	* MinecraftDiscordAccountUnlinkedConsoleCommands
> 	* MinecraftDiscordAccountLinkedRoleNameToAddUserTo
> 	* MinecraftDiscordAccountLinkedAllowRelinkBySendingANewCode

> * [ServerWatchdog..](config#ServerWatchdog)
> 	* ServerWatchdogEnabled
> 	* ServerWatchdogTimeout
> 	* ServerWatchdogMessageCount

Clicking on ` :fontawesome-solid-external-link-alt:` will lead you to the exact line it's located at in the config

---

### `ConfigVersion`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/ConfigVersion)
This is for the plugin to handle config updates. This is not something you should modify manually.  

### `BotToken`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/BotToken)[¹]
This is the token that your bot will use to connect to DiscordSRV. You can find it at the developer page for your bot. https://discord.com/developers/applications/me  

### `Channels`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Channels)
This is a list of Minecraft text channels and their discord equivalent. The first channel in the list is used as the main channel. All additional messages like start/stop/join/quit/death/etc go to it.  
All of DiscordSRV's messages will go to the first channel unless there's a channel for that type of messages defined:
| channel name | channel defined |
| :----------: | :---------- |
| `global` | for player chat messages <br> (when not using a chat plugin) |
| `awards` | for achievement/advancement messages |
| `deaths` | for death messages |
| `join` | for join messages |
| `leave` | for leave messages |
| `dynmap` | for dynmap messages |
| `watchdog` | for watchdog messages |
| `broadcasts` <br> (unless specified in the command) | for /discord broadcast |
The first part of channel pairs is not the Discord channel name!

The format is `{"Minecraft-Channel-Name": "Discord-Channel-ID"}`. If you have no special chat channel plugin installed, the default is always global. In Discord you can get a channel's ID by right clicking a channel and choosing "Copy ID" after enabling Developer Mode in `Settings → Appearance → Developer Mode`.  

If you have a plugin installed that supports additional chats, you can define more than one pair of linked channels. What you can't do is have multiple "Channels" with the same ID or Channel name.  
Example:
```yaml
Channels: {"global": "219559668236681216", "admin": "221419146028646401"}
```
Supported chat channel plugins:
Herochat, Legendchat, LunaChat, TownyChat, UltimateChat, VentureChat, and others.  
#### `DiscordConsoleChannelId`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordConsoleChannelId)[¹]  
This is the ID of the channel in which the Minecraft server console will be forwarded. It is highly recommended that you do not use the same Discord channel for chat and console!  

#### `DiscordInviteLink`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordInviteLink)  
Invitation link shown to players when using /discord ([DiscordCommandFormat](https://config.discordsrv.com/config/DiscordCommandFormat)) and on the message shown to unlinked players when linking is enforced.  

--- 

### Debug:
These options allow you to debug several parts of DiscordSRV. It is recommended that you do not touch these unless specifically needed.  

#### `DebugLevel`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DebugLevel)
0. Disables debug messages.
1. Enables debug messages.
2. Enables debug messages w/ Stack Trace.
#### `DebugJDA`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DebugJDA)
Enables/Disables debug messages for JDA.
#### `DebugJDARestActionStacks`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DebugJDARestActionStacks)
Enables/Disables the creation of exceptions for **every** JDA execution.

---

### `CancelConsoleCommandIfLoggingFailed`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/CancelConsoleCommandIfLoggingFailed)
This option disables running a console command through discord if logging is unsuccessful.  


### `ForcedLanguage`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/ForcedLanguage)[¹]
This option forcefully changes the language to the specified type.  
Currently Supported Languages: `[EN,FR,DE,JA,KO,NL,ES,RU,ET,ZH]`  

#### `AvatarUrl`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/AvatarUrl)
The link to pull the player's skin from. 
Placeholders: `{texture}, {username}, {uuid}, {uuid-nodashes}, {size}`

---

### Experiment_Jdbc:
This allows the ability to connect to SQL databases.
#### `Experiment_JdbcAccountLinkBackend`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Experiment_JdbcAccountLinkBackend)
```elm
jdbc:mysql://HOST:PORT/DATABASE?autoReconnect=true&useSSL=false
```

Replace the capitalized words with the designated information.
#### `Experiment_JdbcTablePrefix`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Experiment_JdbcTablePrefix)
The table prefix for the database.
#### `Experiment_JdbcUsername`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Experiment_JdbcUsername)
The username for the database.
#### `Experiment_JdbcPassword`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Experiment_JdbcPassword)
You get the gist.

---

### Experiment_Webhook:
Replaces minecraft messages with a webhook of the minecraft player's username and skin.  

#### `Experiment_WebhookChatMessageDelivery`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Experiment_WebhookChatMessageDelivery)
Enable/disable the experimental webhook feature
#### `Experiment_WebhookChatMessageUsernameFormat`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Experiment_WebhookChatMessageUsernameFormat)
The username format when the message delivery is set to webhooks.
Placeholders: `%displayname%, %username%`
#### `Experiment_WebhookChatMessageFormat`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Experiment_WebhookChatMessageFormat)
The message format when the message delivery is set to webhooks.
Placeholders: `%message%`
#### `Experiment_WebhookChatMessageUsernameFromDiscord`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Experiment_WebhookChatMessageUsernameFromDiscord)
Use the discord username instead of the minecraft username if the user is linked
#### `Experiment_WebhookChatMessageAvatarFromDiscord`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Experiment_WebhookChatMessageUsernameFromDiscord)
Use the discord avatar instead of the minecraft player skin if the user is linked

---

### `Experiment_MCDiscordReserializer`
Converts formatting between Discord and Minecraft (bold, italics, strikethrough, underline)
>`Minecraft Formatting` → "Output" ← `Discord Formatting`  
`&lHello&r &oWorld&r` → "**Hello** _World_" ← `**Hello** *World*`  

### `Experiment_MCDiscordReserializer_ToDiscord`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Experiment_MCDiscordReserializer_ToDiscord)
Converts minecraft messages formatted with format codes into Discord format

### `Experiment_MCDiscordReserializer_ToMinecraft`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Experiment_MCDiscordReserializer_ToMinecraft)
Converts discord messages formatted with format codes into the Minecraft format

### `Experiment_MCDiscordReserializer_InBroadcast`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Experiment_MCDiscordReserializer_InBroadcast)
Converts minecraft messages formatted with format codes into Discord format

---

### `PrintGuildsAndChannels`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/PrintGuildsAndChannels)
Prints Guilds and Channels in the console on startup.  

### `ForceTLSv12`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/ForceTLSv12)
Force SSL to TLSv1.2

### `NoopHostnameVerifier`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/NoopHostnameVerifier)
Returns valid hostname without making an attempt to actually validate it (insecure)

### `ParseEmojisToNames`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/ParseEmojisToNames)
Parses emojis from unicode to aliases (😒 -> `:unamused:`) if enabled. Disable if you'd like to strip emojis.

### `MaximumAttemptsForSystemDNSBeforeUsingFallbackDNS`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/MaximumAttemptsForSystemDNSBeforeUsingFallbackDNS)
Maximum amount of attempts using system DNS servers before using fallback DNS servers.

### `DisabledPluginHooks`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DisabledPluginHooks)
It is highly recommended you don't mess with this option, as it can break the hooks for plugins.  
* [Available Hooks](Home#Plugins-we-hook-into)
* `LuckPerms-Contexts` - more info at [LPContext](LPContext)

### `VentureChatBungee`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/VentureChatBungee)  
Enables VentureChat's optional BungeeCord functionality. This will allow the use of only one bot for messaging across multiple servers. (messages are received from every server via VentureChat and passed to a single instance of DiscordSRV)  

Make sure to install DiscordSRV on the server with the most consistent players online.  
Keep in mind this requires at least 1 player to be online (on the server with DiscordSRV installed) for this feature to operate properly.  

### `EnablePresenceInformation`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/EnablePresenceInformation)
Enables presence information which is required for some of our PlaceholderAPI placeholders. 
Keep in mind this requires `Presence Intent` to be enabled from the Discord developer portal.

### `DiscordGameStatus`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordGameStatus)
This is the status "Playing ..." shown for the bot in Discord.
Preface the status with "playing", "watching", or "listening to" to set the activity type
Can be a single, static value, or cycle through multiple different options.
[PlaceholderAPI placeholders](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders) are supported.

```yaml
DiscordGameStatus: "Minecraft" # The activity type is "playing" by default if not defined
```
```yaml
DiscordGameStatus: "playing Minecraft"
```
```yaml
DiscordGameStatus: ["playing Minecraft","watching yourip.changeme.com", "listening to a song"]
```
Example using [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) to show amount of online players (first one shows all, second one excludes the ones having the permission `discordsrv.hidden`). For this example you have to run `/papi ecloud download PlayerList` once to install the [required PlaceholderAPI extension](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#list-players).
```yaml
DiscordGameStatus: ["watching %playerlist_online,normal,yes,amount% players", "playing with %playerlist_online,perm,no,amount,discordsrv.hidden% players"]
```

### `StatusUpdateRateInMinutes`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/StatusUpdateRateInMinutes)  
This sets the frequency of the status update. It can't be set below 2 minutes.

### `TimestampFormat`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/TimestampFormat)  
This sets the format of the `%time%` and `%date%` placeholders used in message formats, notification messages, the topic updater, and the server watchdog.

### `DateFormat`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DateFormat)  
This sets the format of the `%date%` placeholder used in the [`DiscordConsoleChannelUsageLog`](https://config.discordsrv.com/config/DiscordConsoleChannelUsageLog) option.

### `Timezone`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/Timezone)  
This sets the timezone used for the `DateFormat` and `TimestampFormat` options.

Setting the timezone as `default` will set it to the system's timezone.

<details>
<summary>List of available timezone values</summary>

```
Africa/Abidjan
Africa/Accra
Africa/Addis_Ababa
Africa/Algiers
Africa/Asmara
Africa/Asmera
Africa/Bamako
Africa/Bangui
Africa/Banjul
Africa/Bissau
Africa/Blantyre
Africa/Brazzaville
Africa/Bujumbura
Africa/Cairo
Africa/Casablanca
Africa/Ceuta
Africa/Conakry
Africa/Dakar
Africa/Dar_es_Salaam
Africa/Djibouti
Africa/Douala
Africa/El_Aaiun
Africa/Freetown
Africa/Gaborone
Africa/Harare
Africa/Johannesburg
Africa/Juba
Africa/Kampala
Africa/Khartoum
Africa/Kigali
Africa/Kinshasa
Africa/Lagos
Africa/Libreville
Africa/Lome
Africa/Luanda
Africa/Lubumbashi
Africa/Lusaka
Africa/Malabo
Africa/Maputo
Africa/Maseru
Africa/Mbabane
Africa/Mogadishu
Africa/Monrovia
Africa/Nairobi
Africa/Ndjamena
Africa/Niamey
Africa/Nouakchott
Africa/Ouagadougou
Africa/Porto-Novo
Africa/Sao_Tome
Africa/Timbuktu
Africa/Tripoli
Africa/Tunis
Africa/Windhoek

America/Adak
America/Anchorage
America/Anguilla
America/Antigua
America/Araguaina
America/Argentina/Buenos_Aires
America/Argentina/Catamarca
America/Argentina/ComodRivadavia
America/Argentina/Cordoba
America/Argentina/Jujuy
America/Argentina/La_Rioja
America/Argentina/Mendoza
America/Argentina/Rio_Gallegos
America/Argentina/Salta
America/Argentina/San_Juan
America/Argentina/San_Luis
America/Argentina/Tucuman
America/Argentina/Ushuaia
America/Aruba
America/Asuncion
America/Atikokan
America/Atka
America/Bahia
America/Bahia_Banderas
America/Barbados
America/Belem
America/Belize
America/Blanc-Sablon
America/Boa_Vista
America/Bogota
America/Boise
America/Buenos_Aires
America/Cambridge_Bay
America/Campo_Grande
America/Cancun
America/Caracas
America/Catamarca
America/Cayenne
America/Cayman
America/Chicago
America/Chihuahua
America/Coral_Harbour
America/Cordoba
America/Costa_Rica
America/Creston
America/Cuiaba
America/Curacao
America/Danmarkshavn
America/Dawson
America/Dawson_Creek
America/Denver
America/Detroit
America/Dominica
America/Edmonton
America/Eirunepe
America/El_Salvador
America/Ensenada
America/Fort_Nelson
America/Fort_Wayne
America/Fortaleza
America/Glace_Bay
America/Godthab
America/Goose_Bay
America/Grand_Turk
America/Grenada
America/Guadeloupe
America/Guatemala
America/Guayaquil
America/Guyana
America/Halifax
America/Havana
America/Hermosillo
America/Indiana/Indianapolis
America/Indiana/Knox
America/Indiana/Marengo
America/Indiana/Petersburg
America/Indiana/Tell_City
America/Indiana/Vevay
America/Indiana/Vincennes
America/Indiana/Winamac
America/Indianapolis
America/Inuvik
America/Iqaluit
America/Jamaica
America/Jujuy
America/Juneau
America/Kentucky/Louisville
America/Kentucky/Monticello
America/Knox_IN
America/Kralendijk
America/La_Paz
America/Lima
America/Los_Angeles
America/Louisville
America/Lower_Princes
America/Maceio
America/Managua
America/Manaus
America/Marigot
America/Martinique
America/Matamoros
America/Mazatlan
America/Mendoza
America/Menominee
America/Merida
America/Metlakatla
America/Mexico_City
America/Miquelon
America/Moncton
America/Monterrey
America/Montevideo
America/Montreal
America/Montserrat
America/Nassau
America/New_York
America/Nipigon
America/Nome
America/Noronha
America/North_Dakota/Beulah
America/North_Dakota/Center
America/North_Dakota/New_Salem
America/Nuuk
America/Ojinaga
America/Panama
America/Pangnirtung
America/Paramaribo
America/Phoenix
America/Port-au-Prince
America/Port_of_Spain
America/Porto_Acre
America/Porto_Velho
America/Puerto_Rico
America/Punta_Arenas
America/Rainy_River
America/Rankin_Inlet
America/Recife
America/Regina
America/Resolute
America/Rio_Branco
America/Rosario
America/Santa_Isabel
America/Santarem
America/Santiago
America/Santo_Domingo
America/Sao_Paulo
America/Scoresbysund
America/Shiprock
America/Sitka
America/St_Barthelemy
America/St_Johns
America/St_Kitts
America/St_Lucia
America/St_Thomas
America/St_Vincent
America/Swift_Current
America/Tegucigalpa
America/Thule
America/Thunder_Bay
America/Tijuana
America/Toronto
America/Tortola
America/Vancouver
America/Virgin
America/Whitehorse
America/Winnipeg
America/Yakutat
America/Yellowknife

Antarctica/Casey
Antarctica/Davis
Antarctica/DumontDUrville
Antarctica/Macquarie
Antarctica/Mawson
Antarctica/McMurdo
Antarctica/Palmer
Antarctica/Rothera
Antarctica/South_Pole
Antarctica/Syowa
Antarctica/Troll
Antarctica/Vostok

Arctic/Longyearbyen

Asia/Aden
Asia/Almaty
Asia/Amman
Asia/Anadyr
Asia/Aqtau
Asia/Aqtobe
Asia/Ashgabat
Asia/Ashkhabad
Asia/Atyrau
Asia/Baghdad
Asia/Bahrain
Asia/Baku
Asia/Bangkok
Asia/Barnaul
Asia/Beirut
Asia/Bishkek
Asia/Brunei
Asia/Calcutta
Asia/Chita
Asia/Choibalsan
Asia/Chongqing
Asia/Chungking
Asia/Colombo
Asia/Dacca
Asia/Damascus
Asia/Dhaka
Asia/Dili
Asia/Dubai
Asia/Dushanbe
Asia/Famagusta
Asia/Gaza
Asia/Harbin
Asia/Hebron
Asia/Ho_Chi_Minh
Asia/Hong_Kong
Asia/Hovd
Asia/Irkutsk
Asia/Istanbul
Asia/Jakarta
Asia/Jayapura
Asia/Jerusalem
Asia/Kabul
Asia/Kamchatka
Asia/Karachi
Asia/Kashgar
Asia/Kathmandu
Asia/Katmandu
Asia/Khandyga
Asia/Kolkata
Asia/Krasnoyarsk
Asia/Kuala_Lumpur
Asia/Kuching
Asia/Kuwait
Asia/Macao
Asia/Macau
Asia/Magadan
Asia/Makassar
Asia/Manila
Asia/Muscat
Asia/Nicosia
Asia/Novokuznetsk
Asia/Novosibirsk
Asia/Omsk
Asia/Oral
Asia/Phnom_Penh
Asia/Pontianak
Asia/Pyongyang
Asia/Qatar
Asia/Qostanay
Asia/Qyzylorda
Asia/Rangoon
Asia/Riyadh
Asia/Saigon
Asia/Sakhalin
Asia/Samarkand
Asia/Seoul
Asia/Shanghai
Asia/Singapore
Asia/Srednekolymsk
Asia/Taipei
Asia/Tashkent
Asia/Tbilisi
Asia/Tehran
Asia/Tel_Aviv
Asia/Thimbu
Asia/Thimphu
Asia/Tokyo
Asia/Tomsk
Asia/Ujung_Pandang
Asia/Ulaanbaatar
Asia/Ulan_Bator
Asia/Urumqi
Asia/Ust-Nera
Asia/Vientiane
Asia/Vladivostok
Asia/Yakutsk
Asia/Yangon
Asia/Yekaterinburg
Asia/Yerevan

Atlantic/Azores
Atlantic/Bermuda
Atlantic/Canary
Atlantic/Cape_Verde
Atlantic/Faeroe
Atlantic/Faroe
Atlantic/Jan_Mayen
Atlantic/Madeira
Atlantic/Reykjavik
Atlantic/South_Georgia
Atlantic/St_Helena
Atlantic/Stanley

Australia/ACT
Australia/Adelaide
Australia/Brisbane
Australia/Broken_Hill
Australia/Canberra
Australia/Currie
Australia/Darwin
Australia/Eucla
Australia/Hobart
Australia/LHI
Australia/Lindeman
Australia/Lord_Howe
Australia/Melbourne
Australia/NSW
Australia/North
Australia/Perth
Australia/Queensland
Australia/South
Australia/Sydney
Australia/Tasmania
Australia/Victoria
Australia/West
Australia/Yancowinna

Brazil/Acre
Brazil/DeNoronha
Brazil/East
Brazil/West

Canada/Atlantic
Canada/Central
Canada/Eastern
Canada/Mountain
Canada/Newfoundland
Canada/Pacific
Canada/Saskatchewan
Canada/Yukon

Chile/Continental
Chile/EasterIsland

Europe/Amsterdam
Europe/Andorra
Europe/Astrakhan
Europe/Athens
Europe/Belfast
Europe/Belgrade
Europe/Berlin
Europe/Bratislava
Europe/Brussels
Europe/Bucharest
Europe/Budapest
Europe/Busingen
Europe/Chisinau
Europe/Copenhagen
Europe/Dublin
Europe/Gibraltar
Europe/Guernsey
Europe/Helsinki
Europe/Isle_of_Man
Europe/Istanbul
Europe/Jersey
Europe/Kaliningrad
Europe/Kiev
Europe/Kirov
Europe/Lisbon
Europe/Ljubljana
Europe/London
Europe/Luxembourg
Europe/Madrid
Europe/Malta
Europe/Mariehamn
Europe/Minsk
Europe/Monaco
Europe/Moscow
Europe/Nicosia
Europe/Oslo
Europe/Paris
Europe/Podgorica
Europe/Prague
Europe/Riga
Europe/Rome
Europe/Samara
Europe/San_Marino
Europe/Sarajevo
Europe/Saratov
Europe/Simferopol
Europe/Skopje
Europe/Sofia
Europe/Stockholm
Europe/Tallinn
Europe/Tirane
Europe/Tiraspol
Europe/Ulyanovsk
Europe/Uzhgorod
Europe/Vaduz
Europe/Vatican
Europe/Vienna
Europe/Vilnius
Europe/Volgograd
Europe/Warsaw
Europe/Zagreb
Europe/Zaporozhye
Europe/Zurich

Indian/Antananarivo
Indian/Chagos
Indian/Christmas
Indian/Cocos
Indian/Comoro
Indian/Kerguelen
Indian/Mahe
Indian/Maldives
Indian/Mauritius
Indian/Mayotte
Indian/Reunion

Pacific/Apia
Pacific/Auckland
Pacific/Bougainville
Pacific/Chatham
Pacific/Chuuk
Pacific/Easter
Pacific/Efate
Pacific/Enderbury
Pacific/Fakaofo
Pacific/Fiji
Pacific/Funafuti
Pacific/Galapagos
Pacific/Gambier
Pacific/Guadalcanal
Pacific/Guam
Pacific/Honolulu
Pacific/Johnston
Pacific/Kiritimati
Pacific/Kosrae
Pacific/Kwajalein
Pacific/Majuro
Pacific/Marquesas
Pacific/Midway
Pacific/Nauru
Pacific/Niue
Pacific/Norfolk
Pacific/Noumea
Pacific/Pago_Pago
Pacific/Palau
Pacific/Pitcairn
Pacific/Pohnpei
Pacific/Ponape
Pacific/Port_Moresby
Pacific/Rarotonga
Pacific/Saipan
Pacific/Samoa
Pacific/Tahiti
Pacific/Tarawa
Pacific/Tongatapu
Pacific/Truk
Pacific/Wake
Pacific/Wallis
Pacific/Yap

SystemV/AST4
SystemV/AST4ADT
SystemV/CST6
SystemV/CST6CDT
SystemV/EST5
SystemV/EST5EDT
SystemV/HST10
SystemV/MST7
SystemV/MST7MDT
SystemV/PST8
SystemV/PST8PDT
SystemV/YST9
SystemV/YST9YDT

US/Alaska
US/Aleutian
US/Arizona
US/Central
US/East-Indiana
US/Eastern
US/Hawaii
US/Indiana-Starke
US/Michigan
US/Mountain
US/Pacific
US/Samoa

Etc/GMT
Etc/GMT0
Etc/GMT+0
Etc/GMT+1
Etc/GMT+2
Etc/GMT+3
Etc/GMT+4
Etc/GMT+5
Etc/GMT+6
Etc/GMT+7
Etc/GMT+8
Etc/GMT+9
Etc/GMT+10
Etc/GMT+11
Etc/GMT+12
Etc/GMT-0
Etc/GMT-1
Etc/GMT-2
Etc/GMT-3
Etc/GMT-4
Etc/GMT-5
Etc/GMT-6
Etc/GMT-7
Etc/GMT-8
Etc/GMT-9
Etc/GMT-10
Etc/GMT-11
Etc/GMT-12
Etc/GMT-13
Etc/GMT-14
Etc/Greenwich
Etc/UCT
Etc/UTC
Etc/Universal
Etc/Zulu
```

</details>

---

### DiscordChatChannel:  
#### `DiscordChatChannelDiscordToMinecraft`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelDiscordToMinecraft)
Whether or not to send messages from Discord to Minecraft. Either true or false.  

#### `DiscordChatChannelMinecraftToDiscord`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelMinecraftToDiscord)
Whether or not to send messages from Minecraft to Discord. Either true or false.  

#### `DiscordChatChannelTruncateLength`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelTruncateLength)
Maximum length of messages from Discord to Minecraft, longer messages are going to be cut off and the discord message will be reacted with "💬 ❗".  

#### `DiscordChatChannelTranslateMentions`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelTranslateMentions)
Whether or not to translate mentions like @Person for Minecraft to Discord messages

#### `DiscordChatChannelAllowedMentions`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelAllowedMentions)
Types of mentions allowed in Minecraft to Discord messages.
Available values: `[user, channel, emote, role, here, everyone]`

#### `DiscordChatChannelPrefixRequiredToProcessMessage`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelPrefixRequiredToProcessMessage)
The character(s) required at the start of a message for it to be sent from Minecraft to Discord. Set to "" to not require a prefix.  

#### `DiscordChatChannelRolesAllowedToUseColorCodesInChat`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelRolesAllowedToUseColorCodesInChat)
States which roles are enabled to use colors when sending messages from Discord to Minecraft. Set to [] to disable.  

#### `DiscordChatChannelBroadcastDiscordMessagesToConsole`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelBroadcastDiscordMessagesToConsole)
Whether or not to print messages sent to Discord in Minecraft console. 
*This will broadcast into the console channel if the console channel is enabled.*  

#### `DiscordChatChannelRequireLinkedAccount`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelRequireLinkedAccount)
Whether or not to require players have their Discord account linked to their Minecraft to have their Discord messages sent to Minecraft
#### `DiscordChatChannelBlockBots`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelBlockBots)
Whether or not bots should be blocked from Discord -> MC chat
#### `DiscordChatChannelBlockedIds`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelBlockedIds)
IDs of discord users (or bots) that should not have their messages processed & sent to MC
#### `DiscordChatChannelColorTranslations`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelColorTranslations)
States which codes are replaced with which colors. Author needs to have at least one of the roles configured in `DiscordChatChannelRolesAllowedToUseColorCodesInChat` for this to work. Don't touch anything unless you know what you are doing.  

#### `DiscordChatChannelRolesSelectionAsWhitelist`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelRolesSelectionAsWhitelist)
If the following list should be treated as a whitelist (true) or a blacklist (false)
#### `DiscordChatChannelRolesSelection`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelRolesSelection)
List of roles that get filtered from all of a user's roles  
#### `DiscordChatChannelRoleAliases`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelRoleAliases)
List of role aliases that allows you to replace the role name displayed in minecraft if the role in discord uses characters not supported by minecraft  

---

### DiscordConsoleChannel:
The console channel is the text channel that receives messages which are then run as server commands by the console. This includes having the server's console being forwarded line by line.  

#### `DiscordConsoleChannelLogRefreshRateInSeconds`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordConsoleChannelLogRefreshRateInSeconds)
Rate in seconds between new lines being sent. Unless you want really fast log, leave it at default. If you change it below 1.5 you can get ratelimited, so the bot is blocked from sending messages for a short time.  

#### `DiscordConsoleChannelUsageLog`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordConsoleChannelUsageLog)
The file that logs all commands being executed by users in the console channel, and only those commands. Commands executed either in Minecraft or using the server console directly are not logged.  

#### `DiscordConsoleChannelBlacklistActsAsWhitelist`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordConsoleChannelBlacklistActsAsWhitelist)
If the command blacklist should be interpreted as whitelist, so that only the commands on the list can be executed using the console channel. Either true (whitelist mode) or false (blacklist mode).  

#### `DiscordConsoleChannelBlacklistedCommands`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordConsoleChannelBlacklistedCommands)
The blacklisted (or whitelisted) commands for the console channel. Include commands with huge outputs (Discord messages can only be 2000 characters long), commands bypassing the security system, etc. Replace with [] to not blacklist any commands.  

#### `DiscordConsoleChannelFilters`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordConsoleChannelFilters)
The Regex filter to be applied to messages from the console sent to Discord. If you are unfamiliar with Regex, it is likely that you don't need this option.  

Some examples can be found in the FAQ: [Block special console-output from appearing in console-channel](FAQ#block-special-console-output-from-appearing-in-console-channel)  

#### `DiscordConsoleChannelLevels`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordConsoleChannelLevels)
The different debug levels that are sent to the console.
Options: `["debug", "info", "warn", "error"]`  

#### `DiscordConsoleChannelAllowPluginUpload`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordConsoleChannelAllowPluginUpload)
Enable for the ability to upload plugins through the console channel.

---

### DiscordChatChannelConsoleCommand:
These options control the ability to say "!c kick Notch", or whatever the prefix is to run a command, as the console, from a registered chat channel.  

#### `DiscordChatChannelConsoleCommandEnabled`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandEnabled)
If this feature is enabled at all. Set to false to disable.  

#### `DiscordChatChannelConsoleCommandNotifyErrors`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandNotifyErrors)
Whether or not to send a user who tries to run a command without permission a message that they don't have permission.  

#### `DiscordChatChannelConsoleCommandPrefix`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandPrefix)
Prefix to use for console commands in the chat channel.  

#### `DiscordChatChannelConsoleCommandRolesAllowed`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandRolesAllowed)
List of roles for which this feature is enabled. If you don't want anyone to be able to use it, set DiscordChatChannelConsoleCommandEnabled to false.  

#### `DiscordChatChannelConsoleCommandWhitelist`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandWhitelist)
List of commands that can be run using the prefix set in DiscordChatChannelConsoleCommandPrefix and the command, e.g. `!c tps`  

#### `DiscordChatChannelConsoleCommandWhitelistBypassRoles`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandWhitelistBypassRoles)
List of roles which can bypass the whitelist, e.g. execute any command. Set to [] to disable.  

#### `DiscordChatChannelConsoleCommandWhitelistActsAsBlacklist`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandWhitelistActsAsBlacklist)
Whether or not to use the whitelist in blacklist mode, e.g. all commands except for listed ones can be run.  

#### `DiscordChatChannelConsoleCommandExpiration`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandExpiration)
Time in seconds until the response to a command is automatically removed. Set to 0 to disable.  

#### `DiscordChatChannelConsoleCommandExpirationDeleteRequest`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandExpirationDeleteRequest)
Whether or not to also remove the original, user-sent command as well.  

---

### DiscordChatChannelListCommand:  
#### `DiscordChatChannelListCommandEnabled`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelListCommandEnabled)
Whether or not this command is enabled.
#### `DiscordChatChannelListCommandMessage`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelListCommandMessage)
The required message for the playerlist to be sent.  

#### `DiscordChatChannelListCommandExpiration`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelListCommandExpiration)
Time in seconds until the playerlist-message is going to be deleted again. Set to 0 to disable.
#### `DiscordChatChannelListCommandExpirationDeleteRequest`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelListCommandExpirationDeleteRequest)
hether or not the requesting message should be deleted as well.

---

### DiscordChatChannel:  

#### `DiscordChatChannelGameFilters`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelGameFilters)
Filter what gets sent from Minecraft -> Discord using Regex expressions  

#### `DiscordChatChannelDiscordFilters`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordChatChannelDiscordFilters)
Filter what gets sent from Discord -> Minecraft using Regex expression  

---

### ChannelTopicUpdater:  
#### `ChannelTopicUpdaterChannelTopicsAtShutdownEnabled`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/ChannelTopicUpdaterChannelTopicsAtShutdownEnabled)
whether or not the channel topics should be changed at server shutdown. set to false to disable  

#### `ChannelTopicUpdaterRateInMinutes`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/ChannelTopicUpdaterRateInMinutes)
amount of minutes between automatically updating the channel topics with fresh information. Minimum is 10 minutes because of a recent change in Discord's rate limit. Originally the [limit was 5 which was suggested by a Discord Developer](../issues/238).  

---

### `DiscordCannedResponses`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/DiscordCannedResponses)
These are commands that will be sent as a reply in the channel it was ran in. 
Syntax is `{"TRIGGER": "RESPONSE", "TRIGGER": "RESPONSE", ...}` If you do not want any canned responses, set this to just `{}`.
PlaceholderAPI placeholders are supported for the values  

---

### MinecraftDiscordAccount:  
#### `MinecraftDiscordAccountLinkedConsoleCommands`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/MinecraftDiscordAccountLinkedConsoleCommands)
commands to run when an account is linked
#### `MinecraftDiscordAccountUnlinkedConsoleCommands`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/MinecraftDiscordAccountUnlinkedConsoleCommands)
commands to run when an account is unlinked  

#### `MinecraftDiscordAccountLinkedRoleNameToAddUserTo`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/MinecraftDiscordAccountLinkedRoleNameToAddUserTo)
the name of a discord role to add a discord user to when they link their account  

#### `MinecraftDiscordAccountLinkedAllowRelinkBySendingANewCode`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/MinecraftDiscordAccountLinkedAllowRelinkBySendingANewCode)
allows sending a new code to the bot to unlink and relink with the new code  

---

### ServerWatchdog:  
#### `ServerWatchdogEnabled`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/ServerWatchdogEnabled)
whether or not the watchdog is enabled at all  
#### `ServerWatchdogTimeout`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/ServerWatchdogTimeout)
time in seconds that need to elapse before the watchdog takes action (Spigot's crash detection uses 60 for this) the minimum for this value is 10  
#### `ServerWatchdogMessageCount`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/config/ServerWatchdogMessageCount)
the amount of times ServerWatchdogMessage is sent. useful if you really want to make sure you know something's up  

---

# References
1. Requires a server restart for changes to take effect.  

[¹]: config#References