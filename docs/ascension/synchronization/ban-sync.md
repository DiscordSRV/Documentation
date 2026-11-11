import ConfigLink from '@site/src/components/ConfigLink';

# Ban Sync

Ban Sync keeps **Minecraft bans** and **Discord bans** (or a **banned role**) the same, so a player banned in one place is banned in the other.

See [Synchronization](/ascension/synchronization) for how direction, tie-breakers, the timer and unlink behaviour work.


## Requirements

- A supported [punishment plugin](/ascension/compatibility) on the server. Without one, ban sync reports that no punishment integration is available.
- The player must be [linked](/ascension/commands#link).
- The bot needs the **Ban Members** (for bans) or **Manage Roles** (for the banned role) permission. Its highest role must be above the users being banned, and the server owner can't be banned.

## Defaults

`unlink-behaviour` defaults to `do_nothing`, so unlinking can't be used to escape a ban.

## Configuration
Configured in <ConfigLink file="config" path="ban-sync">`ban-sync`</ConfigLink>.

| Option           | Default | Description                                                                                  |
|------------------|---------|----------------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="ban-sync.server-id">`server-id`</ConfigLink> | `0`     | The Discord server bans are synchronized with. `0` disables the feature.                     |
| <ConfigLink file="config" path="ban-sync.banned-role-id">`banned-role-id`</ConfigLink> | `0`     | The role used when a role is involved, see [Using a role](#using-a-role)                     |

### Minecraft → Discord

What happens on Discord when a player is banned in Minecraft.

| Option                    | Default | Description                                                                         |
|---------------------------|---------|-------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="ban-sync.minecraft-to-discord.action">`action`</ConfigLink> | `ban`   | `ban`: ban the user on Discord. `role`: give them the banned role. |
| <ConfigLink file="config" path="ban-sync.minecraft-to-discord.ban-reason-format">`ban-reason-format`</ConfigLink> | see above | The reason shown in the Discord audit log. Can use [punishment placeholders](#placeholders). |
| <ConfigLink file="config" path="ban-sync.minecraft-to-discord.unban-reason-format">`unban-reason-format`</ConfigLink> | `Unbanned in Minecraft` | The audit log reason when the ban is removed |
| <ConfigLink file="config" path="ban-sync.minecraft-to-discord.message-hours-to-delete">`message-hours-to-delete`</ConfigLink> | `0` | Hours of the user's Discord messages to delete when banning |

### Discord → Minecraft

What happens in Minecraft when someone is banned on Discord.

| Option             | Default | Description                                                                                       |
|--------------------|---------|---------------------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="ban-sync.discord-to-minecraft.trigger">`trigger`</ConfigLink> | `ban` | Which Discord actions count: `ban` (a Discord ban/unban), `role` (the banned role added/removed) or `either` |
| <ConfigLink file="config" path="ban-sync.discord-to-minecraft.ban-reason-format">`ban-reason-format`</ConfigLink> | `Banned on Discord: %punishment_reason%` | The reason stored for the Minecraft ban                      |
| <ConfigLink file="config" path="ban-sync.discord-to-minecraft.punisher-format">`punisher-format`</ConfigLink> | `%user_color%@%user_name%` | The punisher stored for the Minecraft ban, using the Discord moderator's placeholders |
| <ConfigLink file="config" path="ban-sync.discord-to-minecraft.kick-reason">`kick-reason`</ConfigLink> | see above | The message shown when an online player is kicked because of the ban                           |

Bans created from Discord are **permanent** in Minecraft. They are lifted when the Discord ban is removed.

:::danger
Anyone who can remove the banned role can unban a player in-game, and anyone who can unban in-game can remove the discord ban.
:::

## Using a role

If you'd rather not use real Discord bans, set `minecraft-to-discord.action: role` and set `banned-role-id`. Banned players then get the role, and you can configure the role to limit what the user can do, or just keep tabs on which Discord users are banned in Minecraft.

## Placeholders

Ban reasons and the punisher can use the [Punishment placeholders](/ascension/placeholders#punishment):

| Placeholder             | Description                              |
|-------------------------|------------------------------------------|
| `%punishment_reason%`   | The ban reason                           |
| `%punishment_punisher%` | Who banned the player                    |
| `%punishment_until%`    | When the ban ends (empty for permanent). Use with [date formatting](/ascension/placeholders#date-formatting) |

## Resyncing

[`/discordsrv resync ban`](/ascension/commands#resync) resynchronizes online players. Details are written to the `bansync` log file.
