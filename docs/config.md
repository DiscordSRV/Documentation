# [config.yml](https://config.discordsrv.com/config/_)

### [`ConfigVersion`](https://config.discordsrv.com/config/ConfigVersion) {id="ConfigVersion"}
This is for the plugin to handle config updates. This is not something you should modify manually.

### [`BotToken`](https://config.discordsrv.com/config/BotToken)[^1] {id="MTA4NTQyMDIwODM0MjE4ODA5Mw.GKgxi2.GkR95L34O2zbu8mEMSwzDbWcuq1i-wHWPMU7xI"}
This is the token that your bot will use to connect to DiscordSRV. You can find it at the developer page for your bot. https://discord.com/developers/applications/me

### [`broadcasts`](https://config.discordsrv.com/config/Channels) {id="1085452133047992382"}
This is a list of Minecraft text channels and their discord equivalent. The first channel in the list is used as the main channel. All additional messages like start/stop/join/quit/death/etc go to it.

All of DiscordSRV's messages will go to the first channel defined unless there's already a channel for that type of message defined, those being:

|             channel name             |                      channel defined                       |
| ------------------------------------ | ---------------------------------------------------------- |
| `global`                             | all player chat messages <br> (unless using a chat plugin) |
| `status`                             | for server start/stop messages                             |
| `awards`                             | achievement/advancement messages                           |
| `deaths`                             | death messages                                             |
| `join`                               | join messages                                              |
| `leave`                              | leave messages                                             |
| `dynmap`                             | dynmap messages                                            |
| `watchdog`                           | watchdog messages                                          |
| `broadcasts` <br> (unless specified) | default `/discord broadcast` channel                       |
| `link`                               | account linking via text channel                           |

The first part of channel pairs is not the Discord channel name!

The format is `{"Minecraft-Channel-Name": "Discord-Channel-ID"}`. If you have no special chat channel plugin installed, the default is always `global`.

You can get a channel's ID by right-clicking a channel and choosing "Copy ID" after enabling Developer Mode in your Discord Settings; `Settings → Appearance → Developer Mode`.

you can define more than one pair of linked channels if you have a plugin installed that supports additional chats. What you *can't* do is have multiple "Channels" with duplicate IDs or Channel names.

Example:
```yaml
Channels: {"global": "219559668236681216", "admin": "221419146028646401"}
```
Supported chat channel plugins are listed [here](/#chat)

### [`DiscordConsoleChannelId`](https://config.discordsrv.com/config/DiscordConsoleChannelId)[^1] {id="DiscordConsoleChannelId"}

This is the ID of the channel in which the Minecraft server console will be forwarded. It is highly recommended that you do not use the same Discord channel for chat and console!

### [`DiscordInviteLink`](https://config.discordsrv.com/config/DiscordInviteLink) {id="DiscordInviteLink"}

Invitation link shown:

* to players when either `/discordsrv` or `/discord` is ran ([`DiscordCommandFormat`](https://config.discordsrv.com/messages/DiscordCommandFormat))
* to unlinked players when linking is enforced [`Not linked message`](https://config.discordsrv.com/linking/Not%20linked%20message)

---

### [`Debug`](https://config.discordsrv.com/config/Debug)
- Add one of the debug categories listed below to debug a specific feature of DiscordSRV

??? info "Available debug categories"
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | Categories               | Explanation                                                                                                                                   |
    +==========================+===============================================================================================================================================+
    | `MINECRAFT_TO_DISCORD`   | Messages coming from Minecraft                                                                                                                |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `DISCORD_TO_MINECRAFT`   | Messages coming from Discord                                                                                                                  |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `GROUP_SYNC`             | Group synchronization                                                                                                                         |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `PRESENCE`               | The bot's game status or presence                                                                                                             |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `VOICE`                  | The voice module (see voice.yml)                                                                                                              |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `REQUIRE_LINK`           | The require link to join module (see linking.yml)                                                                                             |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `NICKNAME_SYNC`          | Nickname synchronization                                                                                                                      |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `ALERTS`                 | Alerts (see alerts.yml)                                                                                                                       |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `WATCHDOG`               | The watchdog                                                                                                                                  | 
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `BAN_SYNCHRONISATION`    | Ban synchronization                                                                                                                           |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `LP_CONTEXTS`            | LuckPerm's contexts                                                                                                                           |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `ACCOUNT_LINKING`        | Discord/minecraft account linking                                                                                                             |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `UNCATEGORISED`          | Anything not in any of the above categories                                                                                                   |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `ALL`                    | All the above categories (including UNCATEGORIZED)                                                                                            |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `JDA`                    | JDA's debug messages                                                                                                                          |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `JDA_REST_ACTIONS`       | For debugging JDA's rest actions                                                                                                              |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+
    | `CALLSTACKS`             | Displays the stack trace for DiscordSRV debug calls                                                                                           |
    +--------------------------+-----------------------------------------------------------------------------------------------------------------------------------------------+


### [`DebugLevel`](https://config.discordsrv.com/config/DebugLevel) {id="DebugLevel"}
- `0` - Disables debug messages
- `1` - Enables debug messages
- `2` - Enables debug messages w/ Stack Trace

Note: DebugLevel is now deprecated

---

### Experiment_Jdbc...
This allows the ability to connect to SQL databases.
#### [`...AccountLinkBackend`](https://config.discordsrv.com/config/Experiment_JdbcAccountLinkBackend) {id="Experiment_JdbcAccountLinkBackend"}
```elm
jdbc:mysql://HOST:PORT/DATABASE?autoReconnect=true&useSSL=false
```

Replace the capitalized words with the designated information.
#### [`...TablePrefix`](https://config.discordsrv.com/config/Experiment_JdbcTablePrefix) {id="Experiment_JdbcTablePrefix"}
The table prefix for the database.
#### [`...Username`](https://config.discordsrv.com/config/Experiment_JdbcUsername) {id="Experiment_JdbcUsername"}
The username for the database.
#### [`...Password`](https://config.discordsrv.com/config/Experiment_JdbcPassword) {id="Experiment_JdbcPassword"}
The password for the database.

---

### Experiment_WebhookChatMessage...
Replaces minecraft messages with a webhook of the minecraft player's username and skin.

#### [`...Delivery`](https://config.discordsrv.com/config/Experiment_WebhookChatMessageDelivery) {id="Experiment_WebhookChatMessageDelivery"}
Enable/disable the experimental webhook feature
#### [`...UsernameFormat`](https://config.discordsrv.com/config/Experiment_WebhookChatMessageUsernameFormat) {id="Experiment_WebhookChatMessageUsernameFormat"}

+-------------------+-------------------------------+-------------------------------------------------+
|  Placeholders     |  Example                      |  Description                                    |
+===================+===============================+=================================================+
| `%displayname%`   | `BigBossManJeb`               | display name from things like nicknames         |
+-------------------+-------------------------------+-------------------------------------------------+
| `%username%`      | `jeb_`                        | raw player username                             |
+-------------------+-------------------------------+-------------------------------------------------+
|  [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported |
+-----------------------------------------------------------------------------------------------------+

The username format when the message delivery is set to webhooks.

#### [`...Format`](https://config.discordsrv.com/config/Experiment_WebhookChatMessageFormat) {id="Experiment_WebhookChatMessageFormat"}
The message format when the message delivery is set to webhooks.

+-------------------+-------------------------------+-------------------------------------------------+
|  Placeholders     |  Example                      |  Description                                    |
+===================+===============================+=================================================+
| `%message%`       | `Hello!`                      | message content                                 |
+-------------------+-------------------------------+-------------------------------------------------+
|  [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported |
+-----------------------------------------------------------------------------------------------------+

#### [`...UsernameFromDiscord`](https://config.discordsrv.com/config/Experiment_WebhookChatMessageUsernameFromDiscord) {id="Experiment_WebhookChatMessageUsernameFromDiscord"}
Use the discord username instead of the minecraft username if the user is linked
#### [`...AvatarFromDiscord`](https://config.discordsrv.com/config/Experiment_WebhookChatMessageUsernameFromDiscord) {id="Experiment_WebhookChatMessageUsernameFromDiscord"}
Use the discord avatar instead of the minecraft player skin if the user is linked

---

### [`AvatarUrl`](https://config.discordsrv.com/config/AvatarUrl) {id="AvatarUrl"}

+-------------------+----------------------------------------+-----------------------------------------------------------------------------------------------------------+
|  Placeholders     |  Example                               |  Description                                                                                              |
+===================+========================================+===========================================================================================================+
| `{texture}`       | `<unique texture id>`                  | the player's unique texture id that's used in a hacky workaround for discord's inconsistent image caching |
+-------------------+----------------------------------------+-----------------------------------------------------------------------------------------------------------+
| `{username}`      | `jeb_`                                 | raw player username                                                                                       |
+-------------------+----------------------------------------+-----------------------------------------------------------------------------------------------------------+
| `{uuid}`          | `d7c1db4d-e57b-488b-b8bc-4462fe49a3e8` | player's UUID                                                                                             |
+-------------------+----------------------------------------+-----------------------------------------------------------------------------------------------------------+
| `{uuid-nodashes}` | `d7c1db4de57b488bb8bc4462fe49a3e8`     | player's UUID without dashes                                                                              |
+-------------------+----------------------------------------+-----------------------------------------------------------------------------------------------------------+
| `{size}`          | `128`                                  | size of the avatar image                                                                                  |
+-------------------+----------------------------------------+-----------------------------------------------------------------------------------------------------------+
|  [PlaceholderAPI](https://github.com/PlaceholderAPI/PlaceholderAPI) placeholders are also supported                                                                    |
+------------------------------------------------------------------------------------------------------------------------------------------------------------------------+

The link to pull the player's skin from.

---

### Experiment_MCDiscordReserializer_...
Converts formatting between Discord and Minecraft (bold, italics, strikethrough, underline)
>`Minecraft Formatting` → "Output" ← `Discord Formatting`
`&lHello&r &oWorld&r` → "**Hello** _World_" ← `**Hello** *World*`

#### [`...ToDiscord`](https://config.discordsrv.com/config/Experiment_MCDiscordReserializer_ToDiscord) {id="Experiment_MCDiscordReserializer_ToDiscord"}
Converts minecraft messages formatted with format codes into Discord format

#### [`...ToMinecraft`](https://config.discordsrv.com/config/Experiment_MCDiscordReserializer_ToMinecraft) {id="Experiment_MCDiscordReserializer_ToMinecraft"}
Converts discord messages formatted with format codes into the Minecraft format

#### [`...InBroadcast`](https://config.discordsrv.com/config/Experiment_MCDiscordReserializer_InBroadcast) {id="Experiment_MCDiscordReserializer_InBroadcast"}
Converts minecraft messages formatted with format codes into Discord format

---

### [`CancelConsoleCommandIfLoggingFailed`](https://config.discordsrv.com/config/CancelConsoleCommandIfLoggingFailed) {id="CancelConsoleCommandIfLoggingFailed"}
This option disables running a console command through discord if logging is unsuccessful.

### [`ForcedLanguage`](https://config.discordsrv.com/config/ForcedLanguage)[^1] {id="ForcedLanguage"}
This option forcefully changes the language to the specified type.
Currently Supported Languages: `[EN,FR,DE,JA,KO,NL,ES,RU,ET,ZH]`

### [`PrintGuildsAndChannels`](https://config.discordsrv.com/config/PrintGuildsAndChannels) {id="PrintGuildsAndChannels"}
Prints Guilds and Channels in the console on startup

### [`ForceTLSv12`](https://config.discordsrv.com/config/ForceTLSv12) {id="ForceTLSv12"}
Force SSL to TLSv1.2

### [`NoopHostnameVerifier`](https://config.discordsrv.com/config/NoopHostnameVerifier) {id="NoopHostnameVerifier"}
Returns valid hostname without making an attempt to actually validate it (insecure)

### [`MaximumAttemptsForSystemDNSBeforeUsingFallbackDNS`](https://config.discordsrv.com/config/MaximumAttemptsForSystemDNSBeforeUsingFallbackDNS) {id="MaximumAttemptsForSystemDNSBeforeUsingFallbackDNS"}
Maximum amount of attempts to try using system DNS servers before using fallback DNS servers.

### [`TimestampFormat`](https://config.discordsrv.com/config/TimestampFormat) {id="TimestampFormat"}

This sets the format of the `%time%` and `%date%` placeholders used in message formats, notification messages, the topic updater, and the server watchdog.

### [`DateFormat`](https://config.discordsrv.com/config/DateFormat) {id="DateFormat"}

This sets the format of the `%date%` placeholder used in the [`DiscordConsoleChannelUsageLog`](https://config.discordsrv.com/config/DiscordConsoleChannelUsageLog) option

### [`Timezone`](https://config.discordsrv.com/config/Timezone) {id="Timezone"}

This sets the timezone used for the `DateFormat` and `TimestampFormat` options

Setting the timezone as `default` will set it to the system's timezone

??? note "List of available timezone values"
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

### [MinecraftMentionSound](https://config.discordsrv.com/config/MinecraftMentionSound) {id="MinecraftMentionSound"}
Whether a sound should be sent to the player in Minecraft when they are mentioned from Discord

---

### [`DisabledPluginHooks`](https://config.discordsrv.com/config/DisabledPluginHooks) {id="DisabledPluginHooks"}
It is highly recommended you don't mess with this option, as it can break the hooks for plugins.

+------------------------------------------------------------+
|                      Available values                      |
+============================================================+
| [Names of our hooks](Home#Plugins-we-hook-into)            |
+------------------------------------------------------------+
| `LuckPerms-Contexts` - more info at [LPContext](LPContext) |
+------------------------------------------------------------+

---

### [`VentureChatBungee`](https://config.discordsrv.com/config/VentureChatBungee) {id="VentureChatBungee"}

Enables VentureChat's optional BungeeCord functionality. This will allow the use of only one bot for messaging across multiple servers. (messages are received from every server via VentureChat and passed to a single instance of DiscordSRV)

Make sure to install DiscordSRV on the server with the most consistent players online.

Keep in mind this requires at least 1 player to be online (on the server with DiscordSRV installed) for this feature to operate properly. Also, PlaceholderAPI placeholders that are player related (or require Player) can't be used when using the VentureBungee option.

### [`EnablePresenceInformation`](https://config.discordsrv.com/config/EnablePresenceInformation) {id="EnablePresenceInformation"}
Enables presence information which is required for some of our PlaceholderAPI placeholders.

Keep in mind this requires `Presence Intent` to be enabled from the [Discord developer portal](https://discord.com/developers/applications)

### [`UseModernPaperChatEvent`](https://config.discordsrv.com/config/UseModernPaperChatEvent) {id="UseModernPaperChatEvent"}

UseModernPaperChatEvent: only use this if you have a chat plugins that SPECIFICALLY utilizes Paper's "AsyncChatEvent"

---

### [`DiscordGameStatus`](https://config.discordsrv.com/config/DiscordGameStatus) {id="DiscordGameStatus"}

This is the user status shown for the bot in Discord; "Playing ..."

Preface the status with "playing", "watching", or "listening to" to set the activity type

Can be a single, static value, or cycle through multiple different options.

[PlaceholderAPI placeholders](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders) are supported.

=== "single value"
    ```yaml
    DiscordGameStatus: "Minecraft" # The activity type is "playing" by default if not defined
    ```
=== "prefaced status"
    ```yaml
    DiscordGameStatus: "playing Minecraft"
    ```
=== "multiple prefaced statuses"
    ```yaml
    DiscordGameStatus: ["playing Minecraft", "watching yourserveripchange.me", "listening to a song"]
    ```
=== "example using PlaceholderAPI"
    For this example you have to run `/papi ecloud download PlayerList` once to install the [required PlaceholderAPI extension](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#list-players).
    ```yaml
    # Example using PlaceholderAPI to show amount of online players
    #   First item shows all online players
    #   Second item excludes players with the discordsrv.hidden permission
    DiscordGameStatus: ["watching %playerlist_online,normal,yes,amount% players", "playing with %playerlist_online,perm,no,amount,discordsrv.hidden% players"]
    ```

### [`DiscordOnlineStatus`](https://config.discordsrv.com/config/DiscordOnlineStatus) {id="DiscordOnlineStatus"}
Activity status to display. This must be one of the following: `ONLINE`, `DND`, `IDLE` or `INVISIBLE`

### [`StatusUpdateRateInMinutes`](https://config.discordsrv.com/config/StatusUpdateRateInMinutes) {id="StatusUpdateRateInMinutes"}

This sets the frequency of the status update. It can't be set below 2 minutes.


### DiscordChatChannel...

#### [`...DiscordToMinecraft`](https://config.discordsrv.com/config/DiscordChatChannelDiscordToMinecraft) {id="DiscordChatChannelDiscordToMinecraft"}
Whether or not to send messages from Discord to Minecraft. Either `true` or `false`.

#### [`...MinecraftToDiscord`](https://config.discordsrv.com/config/DiscordChatChannelMinecraftToDiscord) {id="DiscordChatChannelMinecraftToDiscord"}
Whether or not to send messages from Minecraft to Discord. Either `true` or `false`.

#### [`...TruncateLength`](https://config.discordsrv.com/config/DiscordChatChannelTruncateLength) {id="DiscordChatChannelTruncateLength"}
Maximum length of messages from Discord to Minecraft, longer messages are going to be cut off and the discord message will be reacted with "💬 ❗"

#### [`...TranslateMentions`](https://config.discordsrv.com/config/DiscordChatChannelTranslateMentions) {id="DiscordChatChannelTranslateMentions"}
Whether or not to translate mentions like [@Person]() for Minecraft to Discord messages

#### [`...AllowedMentions`](https://config.discordsrv.com/config/DiscordChatChannelAllowedMentions) {id="DiscordChatChannelAllowedMentions"}
Types of mentions allowed in Minecraft to Discord messages

Available values: `[user, channel, emote, role, here, everyone]`

#### [`...EmojiBehavior`](https://config.discordsrv.com/config/DiscordChatChannelEmojiBehavior) {id="DiscordChatChannelEmojiBehavior"}
How emojis should be sent to Minecraft. Can be "show", "name" or "hide"

#### [`...EmoteBehavior`](https://config.discordsrv.com/config/DiscordChatChannelEmoteBehavior) {id="DiscordChatChannelEmoteBehavior"}
How emotes should be sent to Minecraft. Can be "name" or "hide"

#### [`...PrefixRequiredToProcessMessage`](https://config.discordsrv.com/config/DiscordChatChannelPrefixRequiredToProcessMessage) {id="DiscordChatChannelPrefixRequiredToProcessMessage"}
The character(s) required at the start of a message for it to be sent from Minecraft to Discord. Set to "" to not require a prefix.

#### [`...PrefixActsAsBlacklist`](https://config.discordsrv.com/config/DiscordChatChannelPrefixActsAsBlacklist) {id="DiscordChatChannelPrefixActsAsBlacklist"}
Whether or not the prefix should act as a blacklist.

#### [`...RolesAllowedToUseColorCodesInChat`](https://config.discordsrv.com/config/DiscordChatChannelRolesAllowedToUseColorCodesInChat) {id="DiscordChatChannelRolesAllowedToUseColorCodesInChat"}
States which roles are enabled to use colors when sending messages from Discord to Minecraft. Set to [] to disable

#### [`...BroadcastDiscordMessagesToConsole`](https://config.discordsrv.com/config/DiscordChatChannelBroadcastDiscordMessagesToConsole) {id="DiscordChatChannelBroadcastDiscordMessagesToConsole"}
Whether or not to print messages sent to Discord in Minecraft console.

*This will broadcast into the console channel if the console channel is enabled.*

#### [`...RequireLinkedAccount`](https://config.discordsrv.com/config/DiscordChatChannelRequireLinkedAccount) {id="DiscordChatChannelRequireLinkedAccount"}
Whether or not to require players have their Discord account linked to their Minecraft to have their Discord messages sent to Minecraft
#### [`...BlockBots`](https://config.discordsrv.com/config/DiscordChatChannelBlockBots) {id="DiscordChatChannelBlockBots"}
Whether or not bots should be blocked from Discord -> MC chat
#### [`...BlockWebhooks`](https://config.discordsrv.com/config/DiscordChatChannelBlockWebhooks) {id="DiscordChatChannelBlockWebhooks"}
Whether or not webhooks should be blocked from Discord -> MC chat
#### [`...BlockedIds`](https://config.discordsrv.com/config/DiscordChatChannelBlockedIds) {id="DiscordChatChannelBlockedIds"}
IDs of discord users (or bots) that should not have their messages processed & sent to MC
#### [`...BlockedRolesAsWhitelist`](https://config.discordsrv.com/config/DiscordChatChannelBlockedRolesAsWhitelist) {id="DiscordChatChannelBlockedRolesAsWhitelist"}
If the following list should be treated as a whitelist (true) or a blacklist (false)
#### [`...BlockedRolesIds`](https://config.discordsrv.com/config/DiscordChatChannelBlockedRolesIds) {id="DiscordChatChannelBlockedRolesIds"}
IDs of discord roles that should not have their messages processed & sent to MC
#### [`...RolesSelectionAsWhitelist`](https://config.discordsrv.com/config/DiscordChatChannelRolesSelectionAsWhitelist) {id="DiscordChatChannelRolesSelectionAsWhitelist"}
If the following list should be treated as a whitelist (true) or a blacklist (false)
#### [`...RolesSelection`](https://config.discordsrv.com/config/DiscordChatChannelRolesSelection) {id="DiscordChatChannelRolesSelection"}
List of roles that get filtered from all of a user's roles
#### [`...RoleAliases`](https://config.discordsrv.com/config/DiscordChatChannelRoleAliases) {id="DiscordChatChannelRoleAliases"}
List of role aliases that allows you to replace the role name displayed in minecraft if the role in discord uses characters not supported by minecraft

---

### DiscordConsoleChannel...
The console channel is the text channel that receives messages which are then run as server commands by the console. This includes having the server's console being forwarded line by line

#### [`...LogRefreshRateInSeconds`](https://config.discordsrv.com/config/DiscordConsoleChannelLogRefreshRateInSeconds) {id="DiscordConsoleChannelLogRefreshRateInSeconds"}
Rate in seconds between new lines being sent. Unless you want really fast log, leave it at default. If you change it below 1.5 you can get ratelimited, so the bot is blocked from sending messages for a short time

#### [`...UsageLog`](https://config.discordsrv.com/config/DiscordConsoleChannelUsageLog) {id="DiscordConsoleChannelUsageLog"}
The file that logs all commands being executed by users in the console channel, and only those commands. Commands executed either in Minecraft or using the server console directly are not logged

#### [`...BlacklistActsAsWhitelist`](https://config.discordsrv.com/config/DiscordConsoleChannelBlacklistActsAsWhitelist) {id="DiscordConsoleChannelBlacklistActsAsWhitelist"}
If the command blacklist should be interpreted as whitelist, so that only the commands on the list can be executed using the console channel. Either true (whitelist mode) or false (blacklist mode)

#### [`...BlacklistedCommands`](https://config.discordsrv.com/config/DiscordConsoleChannelBlacklistedCommands) {id="DiscordConsoleChannelBlacklistedCommands"}
The blacklisted (or whitelisted) commands for the console channel. Include commands with huge outputs (Discord messages can only be 2000 characters long), commands bypassing the security system, etc. Replace with [] to not blacklist any commands

#### [`...Filters`](https://config.discordsrv.com/config/DiscordConsoleChannelFilters) {id="DiscordConsoleChannelFilters"}
The Regex filter to be applied to messages from the console sent to Discord. If you are unfamiliar with Regex, it is likely that you don't need this option

Some examples can be found in the FAQ: [Block special console-output from appearing in console-channel](/FAQ#Block-special-console-output)

#### [`...Levels`](https://config.discordsrv.com/config/DiscordConsoleChannelLevels) {id="DiscordConsoleChannelLevels"}
The different debug levels that are sent to the console.

Options: `["debug", "info", "warn", "error"]`

#### [`...UseCodeBlocks`](https://config.discordsrv.com/config/DiscordConsoleChannelUseCodeBlocks) {id="DiscordConsoleChannelUseCodeBlocks"}
If the console should be wrapped in code blocks and colored

#### [`...AllowPluginUpload`](https://config.discordsrv.com/config/DiscordConsoleChannelAllowPluginUpload) {id="DiscordConsoleChannelAllowPluginUpload"}
Enable for the ability to upload plugins through the console channel.

#### [`...BlockBots`](https://config.discordsrv.com/config/DiscordConsoleChannelBlockBots) {id="DiscordConsoleChannelBlockBots"}
Whether or not bots should be allowed to send commands in the console channel

---

### DiscordChatChannelConsoleCommand...
These options control the ability to say "!c kick Notch", or whatever the prefix is to run a command, as the console, from a registered chat channel

#### [`...Enabled`](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandEnabled) {id="DiscordChatChannelConsoleCommandEnabled"}
If this feature is enabled at all. Set to `false` to disable

#### [`...NotifyErrors`](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandNotifyErrors) {id="DiscordChatChannelConsoleCommandNotifyErrors"}
Whether or not to send a user who tries to run a command without permission a message that they don't have permission

#### [`...Prefix`](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandPrefix) {id="DiscordChatChannelConsoleCommandPrefix"}
Prefix to use for console commands in the chat channel

#### [`...RolesAllowed`](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandRolesAllowed) {id="DiscordChatChannelConsoleCommandRolesAllowed"}
List of roles for which this feature is enabled. If you don't want anyone to be able to use it, set DiscordChatChannelConsoleCommandEnabled to false

#### [`...Whitelist`](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandWhitelist) {id="DiscordChatChannelConsoleCommandWhitelist"}
List of commands that can be run using the prefix set in DiscordChatChannelConsoleCommandPrefix and the command, e.g. `!c tps`

#### [`...WhitelistBypassRoles`](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandWhitelistBypassRoles) {id="DiscordChatChannelConsoleCommandWhitelistBypassRoles"}
List of roles which can bypass the whitelist, e.g. execute any command. Set to `[]` to disable

#### [`...WhitelistActsAsBlacklist`](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandWhitelistActsAsBlacklist) {id="DiscordChatChannelConsoleCommandWhitelistActsAsBlacklist"}
Whether or not to use the whitelist in blacklist mode, e.g. all commands except for listed ones can be run

#### [`...Expiration`](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandExpiration) {id="DiscordChatChannelConsoleCommandExpiration"}
Time in seconds until the response to a command is automatically removed. Set to `0` to disable

#### [`...ExpirationDeleteRequest`](https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandExpirationDeleteRequest) {id="DiscordChatChannelConsoleCommandExpirationDeleteRequest"}
Whether or not to also remove the original, user-sent command as well

---

### DiscordChatChannelListCommand...
#### [`...Enabled`](https://config.discordsrv.com/config/DiscordChatChannelListCommandEnabled) {id="DiscordChatChannelListCommandEnabled"}
Whether or not this command is enabled
#### [`...Message`](https://config.discordsrv.com/config/DiscordChatChannelListCommandMessage) {id="DiscordChatChannelListCommandMessage"}
The required message for the playerlist to be sent

#### [`...Expiration`](https://config.discordsrv.com/config/DiscordChatChannelListCommandExpiration) {id="DiscordChatChannelListCommandExpiration"}
Time in seconds until the playerlist-message is going to be deleted again. Set to `0` to disable
#### [`...ExpirationDeleteRequest`](https://config.discordsrv.com/config/DiscordChatChannelListCommandExpirationDeleteRequest) {id="DiscordChatChannelListCommandExpirationDeleteRequest"}
hether or not the requesting message should be deleted as well

---

### DiscordChatChannel...

#### [`...GameFilters`](https://config.discordsrv.com/config/DiscordChatChannelGameFilters) {id="DiscordChatChannelGameFilters"}
Filter what gets sent from Minecraft -> Discord using RegEx expressions

#### [`...DiscordFilters`](https://config.discordsrv.com/config/DiscordChatChannelDiscordFilters) {id="DiscordChatChannelDiscordFilters"}
Filter what gets sent from Discord -> Minecraft using RegEx expressions

---

### ChannelTopicUpdater...
#### [`...ChannelTopicsAtShutdownEnabled`](https://config.discordsrv.com/config/ChannelTopicUpdaterChannelTopicsAtShutdownEnabled) {id="ChannelTopicUpdaterChannelTopicsAtShutdownEnabled"}
whether or not the channel topics should be changed at server shutdown. Set to `false` to disable

#### [`...RateInMinutes`](https://config.discordsrv.com/config/ChannelTopicUpdaterRateInMinutes) {id="ChannelTopicUpdaterRateInMinutes"}
amount of minutes between automatically updating the channel topics with fresh information.

Minimum is 10 minutes because of a change in Discord's rate limit. It was originally 5 minutes because of a [suggestion by a Discord Developer](https://github.com/DiscordSRV/DiscordSRV/issues/238)

---

### [`DiscordCannedResponses`](https://config.discordsrv.com/config/DiscordCannedResponses) {id="DiscordCannedResponses"}
These are commands that will be sent as a reply in the channel it was ran in

Syntax is `{"TRIGGER": "RESPONSE", "TRIGGER": "RESPONSE", ...}` If you do not want any canned responses, Set this to `{}`

PlaceholderAPI placeholders are supported in the responses

---

### MinecraftDiscordAccount...
#### [`...LinkedConsoleCommands`](https://config.discordsrv.com/config/MinecraftDiscordAccountLinkedConsoleCommands) {id="MinecraftDiscordAccountLinkedConsoleCommands"}
commands to run when an account is linked
#### [`...UnlinkedConsoleCommands`](https://config.discordsrv.com/config/MinecraftDiscordAccountUnlinkedConsoleCommands) {id="MinecraftDiscordAccountUnlinkedConsoleCommands"}
commands to run when an account is unlinked

#### [`...LinkedRoleNameToAddUserTo`](https://config.discordsrv.com/config/MinecraftDiscordAccountLinkedRoleNameToAddUserTo) {id="MinecraftDiscordAccountLinkedRoleNameToAddUserTo"}
the name or id of a discord role to add a discord user to when they link their account

#### [`...LinkedAllowRelinkBySendingANewCode`](https://config.discordsrv.com/config/MinecraftDiscordAccountLinkedAllowRelinkBySendingANewCode) {id="MinecraftDiscordAccountLinkedAllowRelinkBySendingANewCode"}
allows sending a new code to the bot to unlink and relink with the new code

---

### ServerWatchdog...  
#### [`...Enabled`](https://config.discordsrv.com/config/ServerWatchdogEnabled) {id="ServerWatchdogEnabled"}
whether or not the watchdog is enabled at all  
#### [`...Timeout`](https://config.discordsrv.com/config/ServerWatchdogTimeout) {id="ServerWatchdogTimeout"}
time in seconds that need to elapse before the watchdog takes action (Spigot's crash detection uses 60 for this) the minimum for this value is 10  
#### [`...MessageCount`](https://config.discordsrv.com/config/ServerWatchdogMessageCount) {id="ServerWatchdogMessageCount"}
the amount of times ServerWatchdogMessage is sent. useful if you really want to make sure you know something's up  

[^1]: Requires a server restart for changes to take effect.
