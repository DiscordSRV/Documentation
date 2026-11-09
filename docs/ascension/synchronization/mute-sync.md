import ConfigLink from '@site/src/components/ConfigLink';

# Mute Sync

Mute Sync keeps **Minecraft mutes** and **Discord timeouts** (or a **muted role**) the same, so a muted player can't talk in either place.

See [Synchronization](/ascension/synchronization) for how direction, tie-breakers, the timer and unlink behaviour work.

## Requirements

- A supported punishment plugin on the server: [AdvancedBan](/ascension/compatibility), [LibertyBans](/ascension/compatibility) or [EssentialsX](/ascension/compatibility) (see [Compatibility](/ascension/compatibility)). Without one, mute sync reports that no punishment integration is available. EssentialsX mutes have no punisher, so `%punishment_punisher%` is empty for them.
- The player must be [linked](/ascension/commands#link).
- The bot needs the **Guild Moderation** and **Guild Members** gateway intents, plus **Timeout Members** (for timeouts) or **Manage Roles** (for the muted role). Its highest role must be above the users being muted, and the server owner can't be synchronized.

## Defaults

`unlink-behaviour` defaults to `do_nothing`, so unlinking can't be used to escape a mute.

## Timeouts and the 28 day limit

Discord timeouts can last at most **28 days**. A longer or permanent mute can't be a timeout, so:

- With `fallback-to-role-if-timeout-too-long: true` (default) and a `muted-role-id`, the muted role is given instead.
- Otherwise nothing is done on Discord for that mute.

## Configuration
Configured in <ConfigLink file="config" path="mute-sync" />.

| Option          | Default | Description                                                                                  |
|-----------------|---------|----------------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="mute-sync.server-id">`server-id`</ConfigLink>     | `0`     | The Discord server mutes are synchronized with. Used for timeouts. `0` disables the feature. |
| <ConfigLink file="config" path="mute-sync.muted-role-id">`muted-role-id`</ConfigLink> | `0`     | The role used for the role action and for the fallback, see [Using a role](#using-a-role)    |

### Minecraft → Discord

| Option                                 | Default   | Description                                                                          |
|----------------------------------------|-----------|--------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="mute-sync.minecraft-to-discord.action">`action`</ConfigLink> | `timeout` | `timeout`: time the user out (28 days or less, needs **Timeout Members**). `role`: give them the muted role. |
| <ConfigLink file="config" path="mute-sync.minecraft-to-discord.fallback-to-role-if-timeout-too-long">`fallback-to-role-if-timeout-too-long`</ConfigLink> | `true` | Give the muted role when the mute is longer than 28 days |
| <ConfigLink file="config" path="mute-sync.minecraft-to-discord.mute-reason-format">`mute-reason-format`</ConfigLink> | see above | The audit log reason. Can use [punishment placeholders](#placeholders). |
| <ConfigLink file="config" path="mute-sync.minecraft-to-discord.unmute-reason-format">`unmute-reason-format`</ConfigLink> | `Unmuted in Minecraft` | The audit log reason when the mute is removed |

### Discord → Minecraft

| Option                       | Default   | Description                                                                                 |
|------------------------------|-----------|---------------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="mute-sync.discord-to-minecraft.trigger">`trigger`</ConfigLink> | `timeout` | `timeout` (a Discord timeout), `role` (the muted role) or `either` |
| <ConfigLink file="config" path="mute-sync.discord-to-minecraft.mute-reason-format">`mute-reason-format`</ConfigLink> | `Muted on Discord: %punishment_reason%` | The reason stored for the Minecraft mute                           |
| <ConfigLink file="config" path="mute-sync.discord-to-minecraft.punisher-format">`punisher-format`</ConfigLink> | `%user_color%@%user_name%` | The punisher stored, using the Discord moderator's placeholders          |
| <ConfigLink file="config" path="mute-sync.discord-to-minecraft.notify-player-on-mute">`notify-player-on-mute`</ConfigLink> | `true`    | Tell an online player they were muted. Turn off if your punishment plugin already does.     |
| <ConfigLink file="config" path="mute-sync.discord-to-minecraft.mute-notification-message">`mute-notification-message`</ConfigLink> | see above | The message sent when muted                                                                 |
| <ConfigLink file="config" path="mute-sync.discord-to-minecraft.notify-player-on-unmute">`notify-player-on-unmute`</ConfigLink> | `true`    | Tell an online player they were unmuted                                                     |
| <ConfigLink file="config" path="mute-sync.discord-to-minecraft.unmute-notification-message">`unmute-notification-message`</ConfigLink> | `&aYou have been unmuted on Discord.` | The message sent when unmuted                                   |

A Discord timeout becomes a Minecraft mute that ends when the timeout does.

:::danger
Setting `trigger` to `role` or `either` while `tie-breakers.*` is `discord` can be exploited: anyone who can remove the muted role can unmute a player. Only use it if you trust everyone who can manage that role.
:::

## Using a role

The muted role **doesn't block anything by itself**. You must deny the role these permissions in your Discord server (on categories or channels):

- Send Messages
- Create Threads
- Join Voice
- Speak
- Add Reactions

Role changes are watched when <ConfigLink file="config" path="mute-sync.minecraft-to-discord.action">`minecraft-to-discord.action`</ConfigLink> is `role`, or when the fallback is enabled. In Minecraft, they only cause a mute if <ConfigLink file="config" path="mute-sync.discord-to-minecraft.trigger">`discord-to-minecraft.trigger`</ConfigLink> is `role` or `either`; with the trigger on `timeout` they are only used for the fallback.

## Placeholders

Reasons and notification messages can use the [Punishment placeholders](/ascension/placeholders#punishment):

| Placeholder             | Description                              |
|-------------------------|------------------------------------------|
| `%punishment_reason%`   | The mute reason (can be empty, see [Coalesce](/ascension/placeholders#checking-for-empty-placeholders-coalesce)) |
| `%punishment_punisher%` | Who muted the player                     |
| `%punishment_until%`    | When the mute ends (empty for permanent). Use with [date formatting](/ascension/placeholders#date-formatting) |

## Resyncing

[`/discordsrv resync mute`](/ascension/commands#resync) resynchronizes online players. Details are written to the `mutesync` log file.
