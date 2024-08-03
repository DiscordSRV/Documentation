:::danger
This is documentation for **a future version of DiscordSRV** and information on this page does not apply to DiscordSRV version 1 and may be **inaccurate** in general
:::

# Placeholders
DiscordSRV contains many placeholders which allows you to customise messages entirely to your liking.

Information about which placeholders can be used where can be found in the config.

---
## Formatting

:::info General Formatting Help
Information on formatting Minecraft messages can be found [here](https://github.com/Vankka/EnhancedLegacyText/wiki/Format).

Information on Discord markdown can be found [here](https://support.discord.com/hc/en-us/articles/210298617)
:::

### Checking for empty placeholders
You can take empty placeholders into account and use an alternate placeholder instead.

For example `%player_meta_prefix|player_prefix%`. This first looks for `%player_meta_prefix%` if that is empty, than `%player_prefix%` is used instead.

### Placeholder Suffixes
Placeholders which provide a list of items can have a suffix set between each item to separate them.

For example `%user_roles:', '%`, lists the users roles seperated by a comma and a space (`', '`).

### Recursive Placeholders
Recursive placeholders are a special type of placeholder which allow you to specify what information you want from it.

In this example we will be using `%user_highest_role_<role>%`. The `%user_highest_role_` part returns the highest role of the user and turns it into a [role placeholder](#role).

You can then use any [role](#role) related placeholders. For example `%user_highest_role_name%` will return the highest roles name, or `%user_highest_role_color%` returns the color of the highest role.

This same premise is used for all the re lookup placeholders.

---
## Discord
### User
#### `%user_id%`
The ID for the Discord user  
Example value: `185828288466255874`

#### `%user_name%`
The username of the Discord user  
Example value: `myusername1`

#### `%user_tag%`
The Discord user's username, including discriminator if they have one  
Example value: `myusername1#1234`

#### `%user_effective_name%`
The effective display name of the Discord user  
Example value: `My Display Name`

#### `%user_discriminator%`
The user's discriminator (This is being phased out and is only truly useful for bots)  
Example value: `0000`

#### `%user_avatar_url%`
The Discord user's avatar (if they do not have one set, this will be empty)  
Example value: `https://cdn.discordapp.com/avatars/827880927199494164/bdde9008a644ecc62d97c6f9153462c7.webp?size=64`

#### `%user_effective_avatar_url%`
The Discord user's avatar that is currently active (if they do not have one set, this will provide the default Discord avatar)  
Example value: `https://cdn.discordapp.com/avatars/827880927199494164/bdde9008a644ecc62d97c6f9153462c7.webp?size=64`

### User (Server Member)
#### `%user_effective_server_name%` 
The nickname name of this Discord server member  
Example value: `My cool nickname`

#### `%user_effective_server_avatar_url%`
The avatar url that that is active for this server member  
Example value: `https://cdn.discordapp.com/avatars/827880927199494164/bdde9008a644ecc62d97c6f9153462c7.webp?size=64`

#### `%user_color%`
The color of the user's highest role that has a color. May be used with [color](#color) subplaceholders.  
Example usages: `%user_color%`, `%user_color_hex%`

#### `%user_isboosting%`
Whether this member is currently boosting the server  
Example values: `false`, `true`

#### `%user_time_boosted%`
The time the user started boosting, use with [date formatting](#date-formatting)  
Example usage: `%user_time_boosted:'dd-MM-yyyy'%`

#### `%user_time_joined%`
The time the user started joined, use with [date formatting](#date-formatting)  
Example usage: `%user_time_joined:'dd-MM-yyyy%`

#### `%user_highest_role_<subplaceholder>%`
The highest role of the member. Replace `<subplaceholder>` with any of the [role](#role) placeholders. More information about recursive placeholders [here](#recursive-placeholders)  
Example usages: `%user_highest_role_name%`, `%user_highest_role_color%`

#### `%user_hoisted_role_<subplaceholder>%`
The highest hoisted role of the member. Replace `<subplaceholder>` with any of the [role](#role). More information about recursive placeholders [here](#recursive-placeholders)  
Example usages: `%user_hoisted_role_name%`, `%user_hoisted_role_color%`

#### `%user_roles%`
The roles of the member. You can specify the separator for multiple roles as a suffix, more information can be found [here](#placeholder-suffixes)  
Example usages: `%user_roles%`, `%user_roles:', '%`

#### `%user_server%`
The server for user membership, for using [Server](#server) placeholders  
Example usage: `%user_server_name%`

### Message
#### `%message_id%`
The id of message  
Example value: `135796844314886144`

#### `%message_content%`
The content of the message  
Example value: `Hello`

#### `%message_jump_url%`
The URL to jump to this message  
Example value: `https://discord.com/channels/135634590575493120/137421286501646336/1228806460172140616`

#### `%message_reply%`
The format for messages which contain a reply. The format for the content of this placeholder can be edited in the config (`channels.*.discord-to-minecraft.reply-format`)

#### `%message_attachments%`
The attachments in the message sent. The format for the content of this placeholder can be edited in the config (`channels.*.discord-to-minecraft.attachment-format`). You can specify the separator for multiple attachments as a suffix, more information can be found [here](#placeholder-suffixes)  
Example usages: `%message_attachments%`, `%message_attachments:', '%`

#### `%message_server%`
The server this message was sent in, if any, for using [Server](#server) placeholders  
Example usage: `%message_server_name%`

#### `%message_user%`
The user that sent this message, for using [User](#user) placeholders  
Example usage: `%message_user_name%`

#### `%message_channel%`
The channel this message was sent in, for using [Channel](#channel) placeholders  
Example usage: `%message_channel_name%`

### Role
#### `%role_id%`
The id of the role  
Example value: `135634730535092224`

#### `%role_name%`
The name of the Discord role  
Example value: `Moderator`

#### `%role_color%`
The color of the Discord role. May be used with [color](#color) subplaceholders.  
Example usages: `%role_color%`, `%role_color_hex%`

#### `%role_server%`
The server of the role, for using [Server](#server) placeholders  
Example usage: `%role_server_name%`

### Channel
#### `%channel_id%`
The id of the channel  
Example value: `137421286501646336`

#### `%channel_name%`
The name of the channel  
Example value: `discordsrv-test-chat`

#### `%channel_jump_url%`
The jump url of the channel  
Example value: `https://discord.com/channels/135634590575493120/137421286501646336`

### Server
#### `%server_id%`
The id of the Discord server  
Example value: `135634590575493120`

#### `%server_name%`
The name of the Discord server  
Example value: `My Awesome Server`

#### `%server_member_count%`
The member count of the Discord server  
Example value: `107`

---
## Minecraft
### Player
#### `%player_name%`
The username of the Minecraft player  
Example value: `Notch`

#### `%player_uuid%`
The UUID of the Minecraft player, may also use [UUID](#uuid) placeholders  
Example usages: `%player_uuid%`, `%player_uuid_short%`
Example value: `069a79f4-44e9-4726-a5be-fca90e38aaf5`

#### `%player_skin%`
The skin information of the Minecraft player for use with [Skin](#skin)  
Example usages: `%player_skin_texture_id%`, `%player_skin_model%`

#### `%player_avatar_url%`
The avatar url of the Minecraft player (the API used for this can be changed in the config (`avatar-provider.avatar-url-template`))

#### `%player_meta_prefix%`
The meta prefix of the Minecraft player (set using the [LuckPerms meta] key `discordsrv_prefix`)  
Example value: `Mod `

#### `%player_meta_suffix%`
The meta suffix of the Minecraft player (set using the [LuckPerms meta] key `discordsrv_suffix`)  
Example value: ` Staff Member`

#### `%player_prefix%`
The prefix of the Minecraft player  
Example value: `[Mod] `

#### `%player_suffix%`
The suffix of the Minecraft player  
Example value: ` (Staff Member)`

### Skin
#### `%skin_texture_id%`
The texture id for the skin  
Example value: `5183d47698a28e20b6c3c6d9b8a8a33449c866cff50d725a53260bd6a5ae0b64`

#### `%skin_model%`
The model of the skin  
Example value: `slim`

---

## Color
#### `%color_rgb%`
The rgb decimal value for the color  
Example value: `16738740`

#### `%color_hex%`  
The hex value for the color  
Example value: `ff69b4`

#### `%color_red%`
The red value for the color  
Example value: `255`

#### `%color_green%`
The green value for the color  
Example value: `105`

#### `%color_blue%`
The blue value for the color  
Example value: `180`

## UUID
#### `%uuid_short%`
The UUID without any dashes  
Example value: `069a79f444e94726a5befca90e38aaf5`

#### `%uuid_version%`
The version of the UUID  
Example value: `4`

#### `%uuid_isgeyser%`
If the UUID is from a [Geyser](https://geysermc.org/wiki/geyser/) player using [Floodgate authentication](https://geysermc.org/wiki/floodgate/setup/)  
Values: `true`, `false`

#### `%uuid_isoffline%`
If this UUID is for a cracked Minecraft player based on its version  
Values: `true`, `false`

---

## Global placeholders

#### `%discord_invite%`
The invite of your Discord server (this is either provided by you in the config, or DiscordSRV auto generates it for you)  
Example value: `https://discord.gg/HGAdJEumxC`

#### `%text:'<text>'"`
Returns arbitrary text. An example of a use case would be changing the placeholder to custom text if it is empty.  
Example usage: `%player_prefix|text:'No Prefix'%`

## Date formatting
Some placeholders such as `log_time` for console lines take a time formatting string, for example: `ccc HH:mm:ss zzz` in `%log_time:'ccc HH:mm:ss zzz'%`

#### (Useful) Formatting characters
Use multiple of the same character back-to-back for a longer output, for example `uu` -> `04`, `uuuu` -> `2004`

| Symbol | Meaning                    | Examples                                       |
|--------|----------------------------|------------------------------------------------|
| u      | year                       | 2004; 04                                       |
| D      | day-of-year                | 189                                            |
| M/L    | month-of-year              | 7; 07; Jul; July; J                            |
| d      | day-of-month               | 10                                             |
| Q/q    | quarter-of-year            | 3; 03; Q3; 3rd quarter                         |
| Y      | week-based-year            | 1996; 96                                       |
| w      | week-of-week-based-year    | 27                                             |
| W      | week-of-month              | 4                                              |
| E      | day-of-week                | Tue; Tuesday; T                                |
| e/c    | localized day-of-week      | 2; 02; Tue; Tuesday; T                         |
| F      | week-of-month              | 3                                              |
| a      | am-pm-of-day               | PM                                             |
| K      | hour-of-am-pm (0-11)       | 0                                              |
| H      | hour-of-day                | 0                                              |
| m      | minute-of-hour             | 30                                             |
| s      | second-of-minute           | 55                                             |
| S      | fraction-of-second         | 978                                            |
| V      | time-zone ID               | America/Los_Angeles; Z; -08:30                 |
| z      | time-zone name             | Pacific Standard Time; PST                     |
| O      | localized zone-offset      | GMT+8; GMT+08:00; UTC-08:00;                   |
| X      | zone-offset 'Z' for zero   | Z; -08; -0830; -08:30; -083015; -08:30:15;     |
| x      | zone-offset                | +0000; -08; -0830; -08:30; -083015; -08:30:15; |
| Z      | zone-offset                | +0000; -0800; -08:00;                          |

[Source](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html)

### Discord timestamp formatting
Example usages: `%log_time:'timestamp'%` or `%log_time:'timestamp:t'%`

#### Styles
| Style       | Meaning         | Example                      |
|-------------|-----------------|------------------------------|
| t           | Short Time      | 16:20                        |
| T           | Long Time       | 16:20:30                     |
| d           | Short Date      | 20/04/2021                   |
| D           | Long Date       | 20 April 2021                |
| f (default) | Short Date/Time | 20 April 2021 16:20          |
| F           | Long Date/Time  | Tuesday, 20 April 2021 16:20 |
| R           | Relative Time   | 2 months ago                 | 

[Source](https://discord.com/developers/docs/reference#message-formatting-timestamp-styles)

[LuckPerms meta]: https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta#meta/