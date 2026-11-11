# Synchronization

Synchronization keeps something on Minecraft and something on Discord in the same state, for players who have [linked their accounts](/ascension/commands#link). DiscordSRV currently has these synchronization features:

| Feature                                                   | Syncs                                                      |
|-----------------------------------------------------------|------------------------------------------------------------|
| [Group Sync](/ascension/synchronization/group-sync)       | Permission groups ⇄ Discord roles                          |
| [Linked Role](/ascension/synchronization/linked-role)     | Being linked → a Discord role                              |
| [Online Role](/ascension/synchronization/online-role)     | Being online on the server → a Discord role                |
| [Nickname Sync](/ascension/synchronization/nickname-sync) | Minecraft nickname ⇄ Discord server nickname               |
| [Ban Sync](/ascension/synchronization/ban-sync)           | Minecraft bans ⇄ Discord bans or a banned role             |
| [Mute Sync](/ascension/synchronization/mute-sync)         | Minecraft mutes ⇄ Discord timeouts or a muted role         |

:::info
Synchronization only works for **linked** players. An unlinked player or user is skipped. See [account linking](/ascension/commands#link).
:::

## Concepts

Every feature talks about two sides:

- **Minecraft** (the "game" side): a group, a nickname, a ban, whether the player is online...
- **Discord**: a role, a server nickname, a ban, a timeout...

A synchronization compares the state of the two sides for one linked player and, when they differ, changes one side to match the other. The side selected by a direction, tie-breaker or timer setting is treated as the source of truth.

### Triggers

A synchronization runs when:

- **Something changes** on one side (a role is added, a player is banned, a nickname is changed...). The other side is updated to match. This is the normal way things stay in sync.
- **A player joins** the server (`join`).
- **A player links** their accounts (`link`).
- **The timer** fires (see [Timer](#timer)).
- **An admin runs [`/discordsrv resync <type>`](/ascension/commands#resync)** (`resync-command`).

Changes DiscordSRV makes itself are recognized, so a change it made on one side doesn't bounce back and trigger a second synchronization.

### Direction

`direction` decides which way changes are allowed to go:

| Value                  | Meaning                                                    |
|------------------------|------------------------------------------------------------|
| `bidirectional`        | Changes on either side are copied to the other (default)   |
| `minecraft_to_discord` | Only changes on Minecraft are applied on Discord           |
| `discord_to_minecraft` | Only changes on Discord are applied on Minecraft           |

A change in the disallowed direction is ignored. If you restrict the direction, tie-breakers and the timer side should favour the same side. DiscordSRV logs a warning at startup when they contradict the direction, for example `direction: minecraft_to_discord` with a tie-breaker of `discord`.

### Tie-breakers

If synchronization is done retroactively and there are differences between the two sides, tie-breakers are used to choose which side should be preferred when deciding which state should take priority over the other.

```yaml
tie-breakers:
  join: minecraft
  link: minecraft
  resync-command: minecraft
```

| Option           | Used when                                                      |
|------------------|----------------------------------------------------------------|
| `join`           | The player joins the server                                    |
| `link`           | The player links their accounts                                |
| `resync-command` | An admin runs [`/discordsrv resync`](/ascension/commands#resync) |

Each can be `minecraft`, `discord` or `disabled`. `disabled` turns off synchronization for that event: nothing happens.

### Timer

The timer repeats the comparison for all online players, as a precaution against changes that triggers no events.
Such as if changes were made while the bot wasn't connected to Discord or when a Vault group is changed.

```yaml
timer:
  side: minecraft
  cycle-time: 5
```

| Option       | Description                                                                                                                         |
|--------------|-------------------------------------------------------------------------------------------------------------------------------------|
| `side`       | Which side shall be treated as the source of truth if they both differ: `minecraft`, `discord`, or `disabled` to turn the timer off |
| `cycle-time` | Minutes between cycles                                                                                                             |

### Unlink behaviour

`unlink-behaviour` decides what happens to the synchronized state when a player unlinks their accounts:

| Value            | Effect                                                         |
|------------------|----------------------------------------------------------------|
| `do_nothing`     | Leave both sides as they are                                   |
| `remove_discord` | Remove the state from the Discord side (e.g. take the role away) |
| `remove_game`    | Remove the state from the Minecraft side (e.g. remove the group) |
| `remove_both`    | Remove it from both sides                                      |

Punishment synchronizations ([bans](/ascension/synchronization/ban-sync) and [mutes](/ascension/synchronization/mute-sync)) default to `do_nothing` so that unlinking can't be used to escape a punishment.

## Common options

All features except [Linked Role](/ascension/synchronization/linked-role) and [Online Role](/ascension/synchronization/online-role) (which have fixed values) accept these options:

| Option            | Default                          | Description                                  |
|-------------------|----------------------------------|----------------------------------------------|
| `direction`       | `bidirectional`                  | See [Direction](#direction)                  |
| `timer.side`      | `minecraft`                      | See [Timer](#timer)                          |
| `timer.cycle-time`| `5`                              | See [Timer](#timer)                          |
| `tie-breakers.*`  | `minecraft`                      | See [Tie-breakers](#tie-breakers)            |
| `unlink-behaviour`| `remove_discord`                 | See [Unlink behaviour](#unlink-behaviour)    |

Where a feature changes a default, it is noted on its page. If a value is invalid, DiscordSRV logs an error naming the feature and the allowed values, and that synchronization is not used.

## Discord requirements

The bot must be able to make the change on Discord:

- **Roles** (Group Sync, Linked Role, Online Role, role-based Ban/Mute Sync): the bot needs **Manage Roles**, and the roles being synchronized must be **below the bot's highest role** in the server's role list.
- **Nicknames**: **Manage Nicknames**, and the server member's highest role must be **below the bot's highest role** except for the server owner whose nickname can't be managed from anyone else.
- **Bans**: **Ban Members**, and the server member's highest role must be **below the bot's highest role** (not required when using a banned role).
- **Timeouts**: **Moderate Members**, and the server member's highest role must be **below the bot's highest role** (not required when using a muted role).

If a permission is missing, the result of the synchronization says so, which you can see by hovering the result of [`/discordsrv resync`](/ascension/commands#resync).

## Resyncing and debugging

- Run [`/discordsrv resync <type>`](/ascension/commands#resync) to resynchronize all online players for one feature. The types are `group`, `linkedrole`, `onlinerole`, `nickname`, `ban` and `mute`.
- [`/discordsrv debug`](/ascension/commands#debug) includes details about active synchronizations. Group Sync adds a `group-sync.txt` file listing the active pairs and the groups your permission plugin reports.
- Most features write their own log file (`groupsync`, `nicknamesync`, `bansync`, `mutesync`). Linked Role and Online Role don't.
