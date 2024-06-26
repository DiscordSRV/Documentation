# Placeholders
DiscordSRV contains many placeholders which allows you to customise messages entirely to your liking.

Information about which placeholders can be used where can be found in the config.

---
# Formatting

:::info General Formatting Help
Information on formatting Minecraft messages can be found [here](https://github.com/Vankka/EnhancedLegacyText/wiki/Format).

Information on Discord markdown can be found [here](https://support.discord.com/hc/en-us/articles/210298617)
:::

## Checking for empty placeholders
You can take empty placeholders into account and use an alternate placeholder instead.

For example `%player_meta_prefix|player_prefix%`. This first looks for `%player_meta_prefix%` if that is empty, than `%player_prefix%` is used instead.

## Placeholder Suffixes
Placeholders which provide a list of items can have a suffix set between each item to separate them.

For example `%user_roles:', '%`, lists the users roles seperated by a comma and a space (`', '`).

## Recursive Placeholders
Recursive placeholders are a special type of placeholder which allow you to specify what information you want from it.

In this example we will be using `%user_highest_role_<role>%`. The `%user_highest_role_` part returns the highest role of the user and turns it into a [role placeholder](#role).

You can then use any [role](#role) related placeholders. For example `%user_highest_role_name%` will return the highest roles name, or `%user_highest_role_color%` returns the color of the highest role.

This same premise is used for all the re lookup placeholders.

---
# Discord
## User
`%user_name%` - The username of the Discord user

`%user_effective_name%` -The effective display name of the Discord user

`%user_discriminator%` - The user's discriminator

`%user_avatar_url%` - The Discord user's avatar (if they do not have one set, this will be empty)

`%user_effective_avatar_url%` - The Discord user's avatar that is currently active (if they do not have one set, this will provide the default Discord avatar)

`%user_tag%` - The Discord user's username, including discriminator if they have one

## Member
`%user_effective_server_name%` - The nickname name of this Discord server member

`%user_effective_server_avatar_url%` - The avatar url that that is active for this server member

`%user_color%` - The color of the user's highest role that has a color

`%user_isboosting%` - Whether this member is currently boosting the server

`%user_highest_role_<role>%` - The highest role of the member. Replace `<role>` with any of the [role](#role) placeholders. More information about recursive placeholders [here](#recursive-placeholders)

`%user_hoisted_role_<role>%` - The highest hoisted role of the member. Replace `<role>` with any of the [role](#role). More information about recursive placeholders [here](#recursive-placeholders)

`%user_roles%` - The roles of the member. This placeholder supports a suffix to be set, more information can be found [here](#placeholder-suffixes)

## Message
`%message_jump_url%` - The URL to jump to this message

`%message_reply%` - The format for messages which contain a reply. This can be edited in the config

`%message_attachments%` - The attachments in the message sent. This placeholder supports a suffix to be set, more information can be found [here](#placeholder-suffixes)

## Role
`%role_name%` - The name of the Discord role

`%role_color%` - The color of the Discord role

## Channel
`%channel_name%` - The name of the channel

`%channel_jump_url%` - The jump url of the channel

## Guild
`%server_name%` - The name of the Discord guild

`%server_member_count%` - The member count of the guild

## Global
`%discord_invite%` - The invite of your Discord server (this is either provided by you in the config, or DiscordSRV auto generates it for you)

---
# Minecraft
## Player
`%player_name%` - The username of the Minecraft player

`%player_uuid%` - The UUID of the Minecraft player

`%player_uuid_nodashes%` - The UUID of the Minecraft player without any dashes

`%player_texture%` - The texture of the Minecraft player (not implemented yet)

`%player_avatar_url%` - The avatar url of the Minecraft player (the API used for this can be changed in the config)

`%player_meta_prefix%` - The meta prefix of the Minecraft player (set using the meta key `discordsrv_prefix`)

`%player_meta_suffix%` - The meta suffix of the Minecraft player (set using the meta key `discordsrv_suffix`)

`%player_prefix%` - The prefix of the Minecraft player

`%player_suffix%` - The suffix of the Minecraft player

---

# Global placeholders
`%text:'<text>'"` - Returns arbitrary text. An example of a use case would be changing the placeholder to custom text if it is empty. For example `%player_prefix|text:'No Prefix'%`

# Date formatting
Some placeholders such as `log_time` for console lines take a time formatting string, for example: `ccc HH:mm:ss zzz` in `%log_time:'ccc HH:mm:ss zzz'%`

### (Useful) Formatting characters
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

## Discord timestamp formatting
Example: `%log_time:'timestamp'%` or `%log_time:'timestamp:t'%`

### Styles
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
