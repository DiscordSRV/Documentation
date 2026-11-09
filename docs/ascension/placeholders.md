import ConfigLink from '@site/src/components/ConfigLink';

:::danger
This is documentation for **a future version of DiscordSRV** and information on this page does not apply to DiscordSRV version 1 and may be **inaccurate** in general
:::

# Placeholders
DiscordSRV contains many placeholders which allows you to customize messages entirely to your liking.

Information about which placeholders can be used where can be found in the config.

---
## Syntax

### Additional context
You can "inject" additional context to lookups by including a placeholder that gives the desired context inside the paratheses. Adding a context will take priority over every context that was in the original request (so an added context will take precedence over one that was supplied to the request).

This is most useful with [Discord Entity](#discord-entities) global placeholders, for example when you want to get a Discord user's membership in a specific Discord server, you can specify the server you want as an additional context.

For example `%[server:'1234567890']player_linked_server_member_highest_role_color%` will add `%server:'1234567890'%` as a context for the lookup of `%player_linked_server_member_highest_role_color%`

### Checking for empty placeholders (Coalesce)
You can take empty placeholders into account and use an alternate placeholder instead.

For example `%player_meta_prefix|player_permission_prefix%`. This first looks for `%player_meta_prefix%` if that is empty, than `%player_permission_prefix%` is used instead.

### Placeholder Parameters
Placeholders may require **or** allow giving a parameter

For example on placeholders which provide a list of items may have a parameter set between each item to separate them.
Example: `%user_roles:', '%`, lists the users roles separated by a comma and a space (`, `).

### Placeholders that don't result in text
Placeholders can provide an output directly e.g. `%player_name%` would give the name of the Player, but some placeholders provide another context, which has further placeholders.  

For example `%user_highest_role%` returns the highest role of the user and turns it into a [role placeholder](#role). 
You can then use any [role](#role) related placeholders, for example `%user_highest_role_name%` will return the highest roles name, or `%user_highest_role_color%` returns the color of the highest role.

Some placeholders for example those that return a [Color](#color) may be applied as formatting (e.g. in formatting a Discord message to Minecraft) or convert directly to text, but are **also** a context which has placeholders. 
So a placeholder returning a context doesn't always mean you need to use placeholders behind that context.

### Recursive Placeholders
You may parse placeholder recursively by adding more placeholder between `{` and`}`. This is useful with [Integrations](#integrations) and [Additional context](#additional-context) to build more complex placeholders.

A few examples:
- `%discord_{text:'invite'}%` will be processed into `%discord_invite%`.
- `%player_prefix|text:'{player_name} has no prefix!'%` will first check if player_prefix exists, if it doesn't then return a text with a recursive placeholder of the player name. 
Will result in either `%player_prefix%` or `%player_name% has no prefix!`
- `[%user_primary_server_tag|text:'NO TAG'%] %player_name%` will first check if the user in context has a primary server tag. If it does then it will return that tag. 
Will result in either `[%user_primary_server_tag%] %player_name%` or `[NO TAG] %player_name%`

## I/O and Server Threads
Any placeholder that requires a I/O operation to be fulfilled, will **not** wait for that request to be completed, if the placeholder is requested on a server thread.
Instead, that placeholder will be replaced with the text `Unavailable`

:::warning
The above does not apply to placeholders provided by 3rd party plugins/mods.
:::

Most of DiscordSRV's own usage is resolved off-thread, if some 3rd party placeholder requires that it be resolved on the main thread, you may not be able to use it.

---
## Discord
### User
#### `%user_id%`
The ID for the Discord user  
Example value: `185828288466255874`

#### `%user_mention%`
<!-- TODO: link to Discord message documentation once written -->

#### `%user_name%`
The username of the Discord user  
Example value: `myusername1`

#### `%user_tag%`
The Discord user's username, including discriminator if they have one  
Example value: `myusername1`, `Discord Bot#3201`

#### `%user_effective_name%`
The effective display name of the Discord user  
Example value: `My Display Name`

#### `%user_discriminator%`
**Deprecated:** only bots use discriminators

The user's discriminator (This is being phased out and is only truly useful for bots)  
Example value: `0000`

#### `%user_avatar_url%`
The Discord user's avatar (if they do not have one set, this will be empty)  
Example value: `https://cdn.discordapp.com/avatars/827880927199494164/bdde9008a644ecc62d97c6f9153462c7.webp?size=64`

#### `%user_effective_avatar_url%`
The Discord user's avatar that is currently active (if they do not have one set, this will provide the default Discord avatar)  
Example value: `https://cdn.discordapp.com/avatars/827880927199494164/bdde9008a644ecc62d97c6f9153462c7.webp?size=64`

#### `%user_profile%`
For use with [Profile](#profile) placeholders

#### `%user_linked_player%`
For use with [Player](#player) placeholders

#### `%user_linked_offline_player%`
For use with [Player](#player) placeholders (other than placeholders that require the player to be online)

#### `%user_server_member%`
**Note** Only available if a Discord server is in context. You can use the [Server](#server) global placeholder as an [Additional context](#additional-context) to specify the Discord server.

For user with [User (Server Member)](#user-server-member) placeholders. This placeholder is useful when only a [User](#user) is provided in context, or you want to get the User's membership in a specific Discord server (which you can do by using [Additional context](#additional-context) to overwrite the [Discord server](#server) in context).

### User (Server Member)
A Discord user's membership in a specific Discord server. These placeholders provide additional information that is related to the user in a specified Discord server.

#### `%user_color%`
The color of the user's highest role that has a color. May be used with [color](#color) subplaceholders.  
Example usages: `%user_color%`, `%user_color_hex%`

#### `%user_isboosting%`
Whether this member is currently boosting the server  
See [Boolean formatting](#boolean-formatting)

#### `%user_time_boosted%`
The time the user started boosting, use with [date formatting](#date-formatting)  
Example usage: `%user_time_boosted:'dd-MM-yyyy'%`

#### `%user_time_joined%`
The time the user started joined, use with [date formatting](#date-formatting)  
Example usage: `%user_time_joined:'dd-MM-yyyy%`

#### `%user_selected_highest_role%`
The highest role of the member (filtered based on <ConfigLink file="config" path="channels.default.role-selection" />). Replace `<subplaceholder>` with any of the [role](#role) placeholders.  
Example usages: `%user_selected_highest_role_name%`, `%user_selected_highest_role_color%`

#### `%user_selected_hoisted_role%`
The highest hoisted role of the member (filtered based on <ConfigLink file="config" path="channels.default.role-selection" />). Replace `<subplaceholder>` with any of the [role](#role).  
Example usages: `%user_selected_hoisted_role_name%`, `%user_selected_hoisted_role_color%`

#### `%user_selected_roles%`
The roles of the member (filtered based on <ConfigLink file="config" path="channels.default.role-selection" />). You can specify the separator for multiple roles as a suffix, more information can be found [here](#placeholder-parameters)  
Example usages: `%user_selected_roles%`, `%user_selected_roles:', '%`

#### `%user_highest_role%`
The highest role of the member. Replace `<subplaceholder>` with any of the [role](#role) placeholders.  
Example usages: `%user_highest_role_name%`, `%user_highest_role_color%`

#### `%user_hoisted_role%`
The highest hoisted role of the member. Replace `<subplaceholder>` with any of the [role](#role).  
Example usages: `%user_hoisted_role_name%`, `%user_hoisted_role_color%`

#### `%user_roles%`
The roles of the member. You can specify the separator for multiple roles as a suffix, more information can be found [here](#placeholder-parameters)  
Example usages: `%user_roles%`, `%user_roles:', '%`

#### `%user_server%`
The server for user membership, for using [Server](#server) placeholders  
Example usage: `%user_server_name%`

#### `%user_primary_server%`
See [Primary Server](#user-primary-server) placeholders.

### User Primary Server
<!-- TODO: add descriptions, example values -->

#### `%primary_server_user%`
#### `%primary_server_identity_enabled%`
See [Boolean formatting](#boolean-formatting)

#### `%primary_server_tag%`
#### `%primary_server_badge_url%`

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
The format for messages which contain a reply. The format for the content of this placeholder can be edited in the config (<ConfigLink file="config" path="channels.default.discord-to-minecraft.reply-format" />)

#### `%message_attachments%`
The attachments in the message sent. The format for the content of this placeholder can be edited in the config (<ConfigLink file="config" path="channels.default.discord-to-minecraft.attachment-format" />). You can specify the separator for multiple attachments as a suffix, more information can be found [here](#placeholder-parameters)  
Example usages: `%message_attachments%`, `%message_attachments:', '%`

#### `%message_server%`
The server this message was sent in, if any, for use with [Server](#server) placeholders  
Example usage: `%message_server_name%`

#### `%message_user%`
The user that sent this message, for use with [User](#user) placeholders  
Example usage: `%message_user_name%`

#### `%message_channel%`
The channel this message was sent in, for use with [Channel](#channel) placeholders  
Example usage: `%message_channel_name%`

#### `%message_created%`
The time the message was sent   
See [Date formatting](#date-formatting)

#### `%message_edited%`
The time the message was edited, will be empty if the message isn't edited   
See [Date formatting](#date-formatting)

### Role
#### `%role_id%`
The id of the role  
Example value: `135634730535092224`

#### `%role_mention%`
<!-- TODO: link to Discord message documentation once written -->

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

#### `%channel_mention%`
<!-- TODO: link to Discord message documentation once written -->

#### `%channel_name%`
The name of the channel  
Example value: `discordsrv-test-chat`

#### `%channel_jump_url%`
The jump url of the channel  
Example value: `https://discord.com/channels/135634590575493120/137421286501646336`

#### `%channel_server%`
The Discord server the channel is in, for use with [Server](#server) placeholders  
Example usage: `%channel_server_name%`

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

#### `%server_self_member%`
The Discord bot's (of the bot that DiscordSRV uses) membership in the Discord server
For use with [Server Member](#user-server-member) placeholders.

---
## Minecraft
### Player
#### `%player_name%`
The username of the Minecraft player  
Example value: `Notch`

#### `%player_display_name%`
The display name of the Minecraft player (this may contain the player's prefix and suffix, usually depending on your chat plugin's configuration)  
Example value: `*Notch`
<!-- TODO: only some platforms -->

#### `%player_team_display_name%`
The formatted display name of the Minecraft player containing their [Team](https://minecraft.wiki/w/Scoreboard#Teams)'s prefix, suffix and color   
Example value: `[Mojang] Notch`
<!-- TODO: not for proxies -->

#### `%player_world_name%`
The name of the world that the player is in   
Example value: `overworld`
<!-- TODO: not for proxies -->

#### `%player_uuid%`
The UUID of the Minecraft player. May be used with [UUID](#uuid) placeholders  
Example usages: `%player_uuid%`, `%player_uuid_short%`
Example value: `069a79f4-44e9-4726-a5be-fca90e38aaf5`

#### `%player_skin%`
The skin information of the Minecraft player for use with [Skin](#skin)  
Example usages: `%player_skin_texture_id%`, `%player_skin_model%`

#### `%player_avatar_url%`
The avatar url of the Minecraft player, generated as configured in <ConfigLink file="config" path="avatar-provider" />

#### `%player_prefix%`
Equivalent of `%player_meta_prefix|player_permission_prefix%`

#### `%player_suffix%`
Equivalent of `%player_meta_suffix|player_permission_suffix%`

#### `%player_meta_prefix%`
The meta prefix of the Minecraft player (set using the [LuckPerms meta] key `discordsrv_prefix`)  
Example value: `Mod `

#### `%player_meta_suffix%`
The meta suffix of the Minecraft player (set using the [LuckPerms meta] key `discordsrv_suffix`)  
Example value: ` Staff Member`

#### `%player_permission_prefix%`
The prefix of the Minecraft player  
Example value: `[Mod] `

#### `%player_permission_suffix%`
The suffix of the Minecraft player  
Example value: ` (Staff Member)`

#### `%player_primary_group%`
The primary group of the Minecraft player
Example value: `default`

#### `%player_profile%`
For use with [Profile](#profile) placeholders

#### `%player_linked_user%`
For use with [User](#user) placeholders

#### `%player_linked_server_member%`
**Note** Only available if a Discord server is in context. You can use the [Server](#server) global placeholder as an [Additional context](#additional-context) to specify the Discord server.

For use with [Server Member](#user-server-member) placeholders.

### Skin
#### `%skin_texture_id%`
The texture id for the skin  
Example value: `5183d47698a28e20b6c3c6d9b8a8a33449c866cff50d725a53260bd6a5ae0b64`

#### `%skin_model%`
The model of the skin  
Example value: `slim`

## Skin (Parts)

#### `%skin_parts_cape%`
#### `%skin_parts_jacket%`
#### `%skin_parts_left_sleeve%`
#### `%skin_parts_right_sleeve%`
#### `%skin_parts_left_pants%`
#### `%skin_parts_right_pants%`
#### `%skin_parts_hat%`
If the given part of the skin is enabled in the player's settings  
See [Boolean formatting](#boolean-formatting)

---

## Profile
#### `%profile_player_uuid%`
The Minecraft Player UUID linked to the profile, empty if this is a profile of an unlinked Discord user. May be used with [UUID](#uuid) placeholders

#### `%profile_user_id%`
The Discord User ID linked to the profile, empty if this is a profile of an unlinked Minecraft player.

#### `%profile_is_online%`
If the player is online.  
See [Boolean formatting](#boolean-formatting)

#### `%profile_player%`
For use with [Player](#player) placeholders

#### `%profile_offline_player%`
For use with [Player](#player) placeholders (other than placeholders that require the player to be online)

#### `%profile_user%`
For use with [User](#user) placeholders

## GameChannel
#### `%gamechannel_name%`
The name of the game channel

#### `%gamechannel_color%`
Only with LunaChat, VentureChat channels. May be used with [color](#color) placeholders.

#### `%gamechannel_alias%`
Only with LunaChat, VentureChat channels

#### `%gamechannel_description%`
Only with LunaChat channels

#### `%gamechannel_online_members%`
Only with LunaChat channels

#### `%gamechannel_total_members%`
Only with LunaChat channels

#### `%gamechannel_tag%`
Only with TownyChat channels

#### `%gamechannel_message_color%`
Only with TownyChat channels. May be used with [color](#color) placeholders.

#### `%gamechannel_chat_color%`
Only with VentureChat channels. May be used with [color](#color) placeholders.

#### `%gamechannel_prefix%`
Only with VentureChat channels

#### `%gamechannel_command_name%`
Only with CarbonChat channels

#### `%gamechannel_quick_prefix%`
Only with CarbonChat channels

---

## Punishment
#### `%punishment_until%`
The time when the punishment ends, empty for no expiry  
See [Date formatting](#date-formatting)

#### `%punishment_reason%`
The reason provided for the punishment

#### `%punishment_punisher%`
The name of the punisher

---

## Console Log Entry
These placeholders are available when formatting console log lines.

#### `%logger_name%`
The name of the logger that produced the log message. This may be empty, since not every log message has a logger name.

This value is nullable and may be empty, consider checking using [Coalesce](#checking-for-empty-placeholders-coalesce).

See [String formatting](#string-formatting) for padding, truncation and case options.

Example usage: `%logger_name:' [\%s]'%`

#### `%log_level%`
The level of the log message.

Possible values: `INFO`, `WARN`, `ERROR`, `DEBUG`, `TRACE`

See [String formatting](#string-formatting) for padding, truncation and case options, for example `%log_level:'\%-5s'%` to align the levels in a column.

#### `%log_time%`
The time when the message was logged.

See [Date formatting](#date-formatting) for formatting options.

Example usage: `%log_time:'ccc HH:mm:ss zzz'%` gives `Sun 13:24:12 UTC`

See also [Discord timestamp formatting](#discord-timestamp-formatting) for `%log_time:'timestamp'%`, which shows the time in each reader's own timezone.
Discord timestamp formatting would only render correctly in Discord when the console log appender output mode is either `markdown` or `plain` because timestamps cannot be used inside code blocks.

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
See [Boolean formatting](#boolean-formatting)

#### `%uuid_isoffline%`
If this UUID is for a cracked Minecraft player based on its version  
See [Boolean formatting](#boolean-formatting)

---

## Global placeholders

#### `%discord_invite%`
The invite of your Discord server, as configured in the <ConfigLink file="config" path="invite" /> section (and possibly automatically generated)  
Example value: `https://discord.gg/HGAdJEumxC`

#### `%discord_invite_simple%`
The invite of your Discord server without the protocol, as configured in the <ConfigLink file="config" path="invite" /> section (and possibly automatically generated)  
Example value: `discord.gg/HGAdJEumxC`

#### `%discordcommand_minecraft_alias%`
The command alias for the Discord command for users, configured in the <ConfigLink file="config" path="discord-command.user-command-alias" /> option  
Example value: `minecraft`

#### `%gamecommand_discord_link_alias%`
The in-game command alias used for linking Discord accounts, configured under the <ConfigLink file="config" path="game-command" /> section  
Possible values: `link`, `discord link`, `discordsrv link`

#### `%text:'<text>'"`
Returns arbitrary text. An example of a use case would be changing the placeholder to custom text if it is empty.  
Example usage: `%player_prefix|text:'No Prefix'%`

### PlayerList

#### `%playerlist%`
List of players, further configurable in <ConfigLink file="config" path="player-list" />

#### `%playerlist_count%`
The current amount of online players excluding vanished players.

### Discord entities

#### `%bot_user%`
The bot user, see [User placeholders](#user)  
Example usage: `%bot_user_name%`

#### `%channel:'id'%`
#### `%user:'id'%`
#### `%server:'id'%`
#### `%role:'id'%`
#### `%emoji:'id'%`
Get a Discord entity by ID  
Example usage: `%user:'185828288466255874'%`, `%server:'135634590575493120'%`

##### `%member:'id'%`
Gets a Discord server member by ID.  
Requires `Discord Server` context.  
Example: usage: `%[server:'135634590575493120']member:'185828288466255874'%`

### Current & server start time

#### `%initialize_date:'format'%`
The time the plugin was initialized  
See [Date formatting](#date-formatting)

#### `%start_date:'format'%`
The time the server started  
See [Date formatting](#date-formatting)

#### `%now_date:'format'%`
The time now  
See [Date formatting](#date-formatting)

### Memory & Disk

#### `%memory_free%`
Free memory, this only includes memory that has been allocated by the JVM
#### `%memory_total%`
Total memory available on the system
#### `%memory_max%`
The maximum memory the server can use
#### `%memory_used%`
The amount of memory the server is currently using
#### `%memory_available%`
The amount of memory the server has available to use excluding the already used memory

#### `%disk_usable%`
The amount of disk that the server can use (where the DiscordSRV data folder is)
#### `%disk_total%`
The total size of the disk (where the DiscordSRV data folder is)
#### `%disk_unallocated%`
Unallocated space on the disk (where the DiscordSRV data folder is)
#### `%disk_allocated%`
Allocated space on the disk (where the DiscordSRV data folder is)

You can get memory and disk usage in a specific numeric unit by adding a suffix to the placeholder:
```
_bytes
_kilobytes
_megabytes
_gigabytes
_terabytes
_petabytes
_exabytes
_zettabytes
_yottabytes
_ronnabytes
_quettabytes
```
Unless a specific unit is specified, the amount of bytes will be summarized in the highest factor there is at least one of, with one decimal place of accuracy

## Formatting

<!-- TODO: once these have their own docs pages, link to those instead -->
:::info General Formatting Help
Information on formatting Minecraft messages can be found [here](https://github.com/Vankka/EnhancedLegacyText/wiki/Format).

Information on Discord Markdown can be found [here](https://support.discord.com/hc/en-us/articles/210298617)
:::

### Boolean formatting
Placeholders which return a boolean, can have values specified via a parameter. Otherwise `true`/`false` will be returned.

```
%boolean:'value when true'%
%boolean:'value when true;value when false'%
```

For example:
```
%user_isboosting:'Boosting'%
%user_isboosting:'Boosting;Not Boosting'%
```

### String formatting
Placeholders which return a string can be formatted using Java's string formatting.

`%string:'format'%`

The format follows this structure: `\%[flags][width][.precision]conversion`

:::info
Every `%` in the format must be escaped with a backslash (`\%`), otherwise it is read as the end of the placeholder. For example: `%player_primary_group:'\%S'%`

The parts must be in this order: flags, width, then precision (for example `\%-8.3s`). An invalid format makes the placeholder output `Error`.
:::

If the placeholder returns an empty value, nothing is output and the format is not applied. Use the `text` placeholder to show a fallback instead, for example `%player_prefix:'\%S'|text:'No Prefix'%`.

#### (Useful) Formatting characters

| Symbol | Meaning                      | Example format | Input → Output    |
|--------|------------------------------|----------------|-------------------|
| s      | String as-is                 | `\%s`          | `Steve` → `Steve` |
| S      | String in UPPERCASE          | `\%S`          | `Steve` → `STEVE` |
| %      | Literal percent sign         | `\%\%`         | → `%`             |
| n      | Platform-specific line break | `\%n`          | → (new line)      |

#### Width, precision and flags

| Option            | Meaning                                      | Example format | Input → Output         |
|-------------------|----------------------------------------------|----------------|------------------------|
| width             | Minimum length, pads with spaces on the left | `\%10s`        | `Steve` → `     Steve` |
| `-` flag          | Left-justify (use together with a width)     | `\%-10s`       | `Steve` → `Steve     ` |
| .precision        | Maximum length, longer text is cut off       | `\%.3s`        | `Steve` → `Ste`        |
| width + precision | Pad to a minimum and cut at a maximum        | `\%-8.3s`      | `Steve` → `Ste     `   |

#### Examples

| Format    | Input     | Output           |
|-----------|-----------|------------------|
| `\%S`     | `hello`   | `HELLO`          |
| `\%12s`   | `hello`   | `       hello`   |
| `\%-12s`  | `hello`   | `hello       `   |
| `\%.4s`   | `welcome` | `welc`           |

```
%player_primary_group:'\%S'%
%player_name:'\%-12s'%
%player_name:'\%.3s'%
```

[Source](https://docs.oracle.com/javase/8/docs/api/java/util/Formatter.html)

### Number formatting
Placeholders which return a number can be formatted using a [DecimalFormat](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html) pattern.

`%number:'pattern'%`

:::info
Both `%` and `'` must be escaped with a backslash inside the pattern (`\%` and `\'`), otherwise they end the placeholder early.
:::

#### (Useful) Pattern characters

| Symbol | Meaning                                              | Example pattern    | Input → Output          |
|--------|------------------------------------------------------|--------------------|-------------------------|
| 0      | Digit, always shown (padded with zeros)              | `000000`           | `291` → `000291`        |
| #      | Digit, hidden if it would be a leading/trailing zero | `0.#`              | `291` → `291`           |
| .      | Decimal separator                                    | `0.00`             | `291` → `291.00`        |
| ,      | Grouping separator (thousands)                       | `#,##0\%`          | `291` → `29,100%`       |
| E      | Scientific notation                                  | `0.00E0`           | `291` → `2.91E2`        |
| \%     | Percent, multiplies the value by 100                 | `0\%`              | `291` → `29100%`        |
| \'     | Quotes text that should be shown as-is               | `0\' members\'`    | `291` → `291 members`   |

The decimal and grouping separators are replaced by the ones used by the server's locale (for example `1.234.567,89` in some locales).

Numbers are rounded half-even by default, so `0.125` formatted with `0.00` gives `0.12`.

#### Examples

```
%[server:'1234567890']server_member_count:'000000'%
%[server:'1234567890']server_member_count:'#,##0.00'%
%[server:'1234567890']server_member_count:'0.00E0'%
%[server:'1234567890']server_member_count:'0\' members\''%
```

[Source](https://docs.oracle.com/javase/8/docs/api/java/text/DecimalFormat.html)

### Date formatting
Placeholders that return a date such as `now_date` can be formatted using a datetime formatting string, for example: `ccc HH:mm:ss zzz` in `%now_date:'ccc HH:mm:ss zzz'%`

#### `%date_at_zone:'timezone'%`
Converts the date to the specified timezone, useful when you wish to display a timezone different than the server's.

Example usage: `%now_date_at_zone:'Asia/Tokyo'%`

The timezone is a [tz database](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) ID (`Region/City`). IDs are case-sensitive.

:::caution
An unknown or misspelled timezone does not cause an error, the date is converted to `GMT` instead. If the time looks wrong, check the ID first.
:::

Common timezones:

| Timezone ID           | Region                | Standard offset | Daylight saving |
|-----------------------|-----------------------|-----------------|-----------------|
| `UTC`                 | Coordinated Universal Time | UTC+0      | No              |
| `Europe/London`       | United Kingdom        | UTC+0           | UTC+1           |
| `Europe/Paris`        | Central Europe (also `Europe/Berlin`, `Europe/Madrid`, `Europe/Rome`) | UTC+1 | UTC+2 |
| `Europe/Athens`       | Eastern Europe (also `Europe/Helsinki`) | UTC+2 | UTC+3 |
| `Europe/Moscow`       | Russia (Moscow)       | UTC+3           | No              |
| `Asia/Riyadh`         | Saudi Arabia          | UTC+3           | No              |
| `Asia/Dubai`          | United Arab Emirates  | UTC+4           | No              |
| `Asia/Kolkata`        | India                 | UTC+5:30        | No              |
| `Asia/Dhaka`          | Bangladesh            | UTC+6           | No              |
| `Asia/Bangkok`        | Thailand              | UTC+7           | No              |
| `Asia/Shanghai`       | China                 | UTC+8           | No              |
| `Asia/Tokyo`          | Japan                 | UTC+9           | No              |
| `Australia/Sydney`    | Eastern Australia     | UTC+10          | UTC+11          |
| `Pacific/Auckland`    | New Zealand           | UTC+12          | UTC+13          |
| `America/Sao_Paulo`   | Brazil (Brasília)     | UTC-3           | No              |
| `America/New_York`    | US/Canada Eastern     | UTC-5           | UTC-4           |
| `America/Chicago`     | US/Canada Central     | UTC-6           | UTC-5           |
| `America/Denver`      | US/Canada Mountain    | UTC-7           | UTC-6           |
| `America/Los_Angeles` | US/Canada Pacific     | UTC-8           | UTC-7           |
| `America/Anchorage`   | Alaska                | UTC-9           | UTC-8           |
| `Pacific/Honolulu`    | Hawaii                | UTC-10          | No              |

A fixed offset can also be used with the `GMT` prefix, for example `GMT+3` or `GMT-08:00`. Offsets written without the prefix (`+03:00`, `UTC+3`) are not recognized and result in `GMT`.

The full list of IDs can be found [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

#### `%date_to_epoch_seconds%`
Gets the time since January 1st 1970 ([Epoch time](https://en.wikipedia.org/wiki/Epoch_(computing))) in seconds

#### `%date_to_epoch_milliseconds%`
Gets the time since January 1st 1970 ([Epoch time](https://en.wikipedia.org/wiki/Epoch_(computing))) in milliseconds

#### (Useful) Formatting characters
Use multiple of the same character back-to-back for a longer output, for example `uu` -> `04`, `uuuu` -> `2004`

| Symbol | Meaning                  | Examples                                       |
|--------|--------------------------|------------------------------------------------|
| y      | year-of-era              | 2004; 04                                       |
| D      | day-of-year              | 189                                            |
| M/L    | month-of-year            | 7; 07; Jul; July; J                            |
| d      | day-of-month             | 10                                             |
| Q/q    | quarter-of-year          | 3; 03; Q3; 3rd quarter                         |
| W      | week-of-month            | 4                                              |
| E      | day-of-week              | Tue; Tuesday; T                                |
| e/c    | localized day-of-week    | 2; 02; Tue; Tuesday; T                         |
| F      | week-of-month            | 3                                              |
| a      | am-pm-of-day             | PM                                             |
| K      | hour-of-am-pm (0-11)     | 0                                              |
| H      | hour-of-day              | 0                                              |
| m      | minute-of-hour           | 30                                             |
| s      | second-of-minute         | 55                                             |
| S      | fraction-of-second       | 978                                            |
| V      | time-zone ID             | America/Los_Angeles; Z; -08:30                 |
| z      | time-zone name           | Pacific Standard Time; PST                     |
| O      | localized zone-offset    | GMT+8; GMT+08:00; UTC-08:00;                   |
| X      | zone-offset 'Z' for zero | Z; -08; -0830; -08:30; -083015; -08:30:15;     |
| x      | zone-offset              | +0000; -08; -0830; -08:30; -083015; -08:30:15; |
| Z      | zone-offset              | +0000; -0800; -08:00;                          |

[Source](https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html)

#### Examples

```
%start_date:'yyyy-MM-dd HH:mm:ss'%
%start_date:'yyyy-MM-dd KK:mm:ss aa'%
```

### Discord timestamp formatting
<!-- TODO: link to Discord message documentation once written -->

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

#### Examples

```
%start_date:'timestamp'%
%start_date:'timestamp:R'%
%log_time:'timestamp'%
%log_time:'timestamp:t'%
```

### Duration formatting

You can use the `%date_relative_to_now%` placeholder to get the relative duration of a date to the current time.

#### Formatting characters
| Character | Meaning        | Example   |
|-----------|----------------|-----------|
| y         | Year           | 2021      |
| M         | Months         | 4         |
| d         | Days           | 20        |
| H         | Hours          | 16        |
| m         | Minutes        | 20        |
| s         | Seconds        | 30        |
| S         | Milliseconds   | 0         | 
| 'text'    | Arbitrary text | 'seconds' | 

[Source](https://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/time/DurationFormatUtils.html)

Square brackets (`[]`) can be used to hide formatting that is unused (has a 0 for the value).
Use multiple of the same character back-to-back adds 0 padding, for example `M` -> `4`, `MM` -> `04`

#### Examples
```
%start_date_relative_to_now:'s 'seconds''%
%start_date_relative_to_now:'H 'hours' M 'minutes' s 'seconds''%
%start_date_relative_to_now:'[H 'hours' ][M 'minutes' ]s 'seconds''% 
```

---
## Integrations

### Bukkit: PlaceholderAPI

#### Using DiscordSRV placeholders in other plugins

You can use DiscordSRV's global and Player related placeholders (when a Player is provided) by prefixing the placeholder with `discordsrv_`, for example `%discordsrv_discord_invite%`.

You may refer to [Additional context](#additional-context) to add more context to allow for more advanced placeholders.

#### Using placeholders in DiscordSRV

List of [PlaceholderAPI placeholders], please note many of these require the respective [expansion to be installed before they can be used](https://wiki.placeholderapi.com/users/using-placeholders/#downloadget-expansion).

You can use PlaceholderAPI placeholders directly in DiscordSRV or by explicitly prefixing the placeholder with `placeholderapi_`, for example:
```
%server_online%
%placeholderapi_server_online%
```

### Fabric: Text Placeholder API

#### Using DiscordSRV placeholders in other mods

You can use DiscordSRV's global and Player related placeholders (when a Player is provided) by prefixing the placeholder with `discordsrv:`, for example `%discordsrv:discord_invite%`.

You may refer to [Additional context](#additional-context) to add more context to allow for more advanced placeholders.

#### Using placeholders in DiscordSRV

You can use Text Placeholder API placeholders directly in DiscordSRV or by explicitly prefixing the placeholder with `textplaceholders_`

[LuckPerms meta]: https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta#meta/
[PlaceholderAPI placeholders]: https://wiki.placeholderapi.com/users/placeholder-list/