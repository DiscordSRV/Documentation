import ConfigLink from '@site/src/components/ConfigLink';

# Online Role

Online Role gives a Discord role to linked users **while their Minecraft player is online** on the server, and takes it away when they leave. Use it to show who is playing, or to open a channel only for people currently in game.

This is a one-way synchronization (online status → Discord role). See [Synchronization](/ascension/synchronization) for background.


## Configuration
Configured in <ConfigLink file="config" path="online-role" />.

| Option | Default | Description |
|---------------------------------|---------|------------------------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="online-role.role-id">`role-id`</ConfigLink> | `0` | The ID of the role. `0` disables the feature. |
| <ConfigLink file="config" path="online-role.role-ids">`delay-adding-role-by-ms`</ConfigLink> | `2000` | How long after joining the role is added. If the player leaves before then, nothing is changed. |
| <ConfigLink file="config" path="online-role.give-role-to-vanished-players">`give-role-to-vanished-players`</ConfigLink> | `false` | When `false`, vanished players don't have the role. It is removed when they vanish and added when they unvanish. |

## Fixed behaviour

| Setting              | Value                  |
|----------------------|------------------------|
| Direction            | Minecraft → Discord    |
| Timer                | Disabled               |
| Tie-breakers         | `minecraft`            |
| Unlink behaviour     | `remove_discord`       |

## When the role is added and removed

- **Join:** the role is added after <ConfigLink file="config" path="online-role.role-ids">`delay-adding-role-by-ms`</ConfigLink>.
- **Leave:** the role is removed.
- **Vanish / unvanish:** the role is removed or added (unless vanished players are given the role).
- **Server shutdown:** the role is removed from **every** member who has it, waiting up to 10 seconds per member.
- **Reload:** the role is removed from members whose player isn't online, which cleans up after a crash.

:::caution
Use a role that is **only** managed by DiscordSRV. Anyone holding the role without being online is removed from it on reload and shutdown.
:::

## Requirements

The bot needs **Manage Roles**, and the role must be below the bot's highest role. Players must be [linked](/ascension/commands#link).

## Resyncing

[`/discordsrv resync onlinerole`](/ascension/commands#resync) resynchronizes online players. This feature doesn't write its own log file.
