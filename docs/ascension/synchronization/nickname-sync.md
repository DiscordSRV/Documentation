import ConfigLink from '@site/src/components/ConfigLink';

# Nickname Sync

Nickname Sync keeps a player's **Minecraft nickname** and their **Discord server nickname** the same.

See [Synchronization](/ascension/synchronization) for how direction, tie-breakers, the timer and unlink behaviour work.

## Defaults

Nickname Sync changes two defaults compared to the other features:

| Setting      | Default                | Why                                                   |
|--------------|------------------------|-------------------------------------------------------|
| <ConfigLink file="config" path="nickname-sync.direction">`direction`</ConfigLink> | `minecraft_to_discord` | Discord members usually shouldn't control in-game names |
| <ConfigLink file="config" path="nickname-sync.timer.side">`timer.side`</ConfigLink> | `disabled`             | Nicknames only change when someone changes them       |

## Requirements

- A supported nickname provider on the server. Currently this is [EssentialsX](/ascension/compatibility) (see [Compatibility](/ascension/compatibility)). Without one, nickname sync fails with "module not found".
- The player must be [linked](/ascension/commands#link) and be a member of the configured Discord server.
- The bot needs **Manage Nicknames**, and its highest role must be above the member's. Discord doesn't allow changing the server owner's nickname.

## Configuration
Configured in <ConfigLink file="config" path="nickname-sync" />.

| Option                   | Default      | Description                                                                         |
|--------------------------|--------------|-------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="nickname-sync.server-id">`server-id`</ConfigLink> | `0` | The Discord server whose nicknames are synchronized. `0` disables the feature. |
| <ConfigLink file="config" path="nickname-sync.format">`format`</ConfigLink> | `%nickname%` | How the nickname is written, see [Format](#format) |
| <ConfigLink file="config" path="nickname-sync.nickname-regex-filters">`nickname-regex-filters`</ConfigLink> | none | Regex replacements applied to nicknames, see [Filters](#filters)                    |
| `direction`, `timer` | | See [Defaults](#defaults) |
| <ConfigLink file="config" path="nickname-sync.tie-breakers">`tie-breakers`</ConfigLink> | `minecraft` | see [Synchronization](/ascension/synchronization#common-options) |
| <ConfigLink file="config" path="nickname-sync.unlink-behaviour">`unlink-behaviour`</ConfigLink> | `remove_discord` | see [Synchronization](/ascension/synchronization#common-options) |

## Format

<ConfigLink file="config" path="nickname-sync.format">`format`</ConfigLink> is a [placeholder](/ascension/placeholders) text. It is applied to the nickname before it is set on either side. Useful placeholders:

| Placeholder                     | Description                                          |
|---------------------------------|------------------------------------------------------|
| `%nickname%` | The nickname being synchronized, after filters       |
| [`%player_linked_user%`](#placeholders#player_linked_user) | The player's linked Discord user |
| [`%player_linked_server_member%`](#placeholders#player_linked_server_member) | The player's linked Discord server member |
| [`%user_tag%`](#placeholders#user_tag) | The Discord user's username                          |
| [`%user_color%`](#placeholders#user_color) | The Discord user's color in the server               |

:::caution
The format is applied in both directions, so placeholders that already depend on the nickname can give unexpected results. Avoid [`%player_name%`](#placeholders#player_name), [`%user_name%`](#placeholders#user_name) and [`%user_effective_name%`](#placeholders#user_effective_name).
:::

For example `"[VIP] %nickname%"` adds a prefix on the way to Discord and the prefix is removed again by a [filter](#filters) when going the other way, if you add one.

## Filters

<ConfigLink file="config" path="nickname-sync.nickname-regex-filters">`nickname-regex-filters`</ConfigLink> maps a regular expression (the key) to its replacement (the value). Each filter is applied in order using Java's [`String#replaceAll`](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Matcher.html#replaceAll(java.lang.String)), so the replacement can refer to capture groups with `$1`, `$2` and so on. A literal `$` or `\` in the replacement needs a backslash.

```yaml
nickname-regex-filters:
  '^\[VIP\] ': ''        # remove a "[VIP] " prefix
  '[^a-zA-Z0-9_ ]': ''   # remove all other special characters
  '^(\w+) \((\w+)\)$': '$2 $1'   # "Steve (Bob)" becomes "Bob Steve"
```

Filters are applied to the nickname read from either side **and** again to the result of [`format`](#format). Use single-quoted YAML strings so backslashes don't need escaping. The default configuration has no filters (`{}`).

## Resyncing

[`/discordsrv resync nickname`](/ascension/commands#resync) resynchronizes online players. Details are written to the `nicknamesync` log file.
