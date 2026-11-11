import ConfigLink from '@site/src/components/ConfigLink';

# Required linking

Required linking only lets players play when they have [linked their accounts](/ascension/account-linking). Players who haven't are kicked, frozen or put in spectator mode, depending on the [action](#action) you choose.

It is configured in the <ConfigLink file="config" path="required-linking">`required-linking`</ConfigLink> section, and is turned on with <ConfigLink file="config" path="required-linking.enabled">`enabled`</ConfigLink>.

:::warning
Required linking is still not implemented on proxies (BungeeCord and Velocity), it only works on servers.
:::

## Action

<ConfigLink file="config" path="required-linking.action">`action`</ConfigLink> decides what happens to a player who doesn't meet the requirements:

| Action      | What happens                                                                              |
|-------------|-------------------------------------------------------------------------------------------|
| `KICK`      | The player is kicked, with a message that says why.                                       |
| `FREEZE`    | The player can join, but is [frozen](#freeze) until they meet the requirements.           |
| `SPECTATOR` | The player is put in [spectator mode](#spectator) and frozen until they meet the requirements. |

The player is told why they were blocked, so they know what to do. Players who are waiting for DiscordSRV to connect when they join are held back until it has, so nobody gets in before the requirements can be checked.

### Kick

The player is kicked when they join. If they don't meet the requirements later on, for example after being unlinked, they are kicked then too.

On Bukkit (Spigot and Paper) you can choose when the kick happens, see [Bukkit options](#bukkit-options).

### Freeze

A frozen player:

- **Can't move.** They are put back in the middle of the block they are standing on. They can still fall.
- **Can't chat**, and frozen players don't receive chat from others either.
- **Can't run commands**, other than `/discord link` and `/link`.

`/discord link` and `/link` don't link anything while frozen. They check again whether the player meets the requirements, and let the player go if they do. This is rate limited, and the player gets a message that their link status is being checked. This is meant for players who have just linked their accounts on [minecraftauth.me](https://minecraftauth.me) or Discord and want to continue playing.

Players are also checked again automatically when their account is linked, and when DiscordSRV has finished starting.

### Spectator

Spectator mode is [freeze](#freeze) with the game mode changed to spectator. Movement is allowed, so the player can look around, but chat and commands stay blocked like when frozen.

When the player meets the requirements, they are put in the server's **default game mode**. The game mode they had before is not restored.

### Server platform options (Bukkit, Modded)

| Option                                                   | Default                    | Description                                                      |
|----------------------------------------------------------|----------------------------|------------------------------------------------------------------|
| <ConfigLink file="config" path="required-linking.whitelisted-players-can-bypass">`whitelisted-players-can-bypass`</ConfigLink> | | Whether players on the server whitelist bypass required linking. |


### Bukkit options

These only exist on Bukkit (Spigot and Paper):

| Option                                                   | Default                    | Description                                                                                                                                                  |
|----------------------------------------------------------|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="required-linking.kick.event">`kick.event`</ConfigLink>    | `AsyncPlayerPreLoginEvent` | The event to kick the player in: `AsyncPlayerPreLoginEvent`, `PlayerLoginEvent` or `PlayerJoinEvent`. Only used by the `KICK` action.                        |
| <ConfigLink file="config" path="required-linking.kick.priority">`kick.priority`</ConfigLink> | `HIGHEST`                  | The Bukkit event priority the kick listener runs at. Invalid values are logged.                                                                                |

## Bypassing

Some players can be allowed to play without meeting the requirements:

- **In the configuration:** <ConfigLink file="config" path="required-linking.requirements.bypass-uuids">`bypass-uuids`</ConfigLink> is a list of player UUIDs that always bypass required linking.
- **With a command:** [`bypass`](/ascension/commands#bypass) adds and removes players while the server is running. The player is checked again right after, so they are kicked or frozen straight away when they are removed. The command is only available when required linking is enabled. Players who bypass because of the configuration can't be removed with the command.

## Additional requirements

On top of linking their accounts, players can be asked to meet other requirements, with <ConfigLink file="config" path="required-linking.requirements.additional-requirements">`requirements.additional-requirements`</ConfigLink>. It is a list, and **only one entry in it has to pass**. For example, this lets Twitch subscribers and people with the Discord role play:

```yaml
required-linking:
    requirements:
        additional-requirements:
        - "TwitchSubscriber()"
        - "DiscordRole(123456789012345678)"
```

To ask for several things at once, put them in the same entry, joined with operators. This only lets Twitch subscribers who also have the role play:

```yaml
required-linking:
    requirements:
        additional-requirements:
        - "TwitchSubscriber() && DiscordRole(123456789012345678)"
```

### Requirements

These work with any linked account provider:

| Requirement                | Passes when the player...                           |
|----------------------------|-----------------------------------------------------|
| `DiscordServer(Server ID)` | is a member of the Discord server.                  |
| `DiscordBoosting(Server ID)` | is boosting the Discord server.                   |
| `DiscordRole(Role ID)`     | has the Discord role.                               |

These are only available when you use [minecraftauth.me](https://minecraftauth.me) for [linked accounts](/ascension/account-linking#providers) and have set a minecraftauth.me token in `connections.yaml`:

| Requirement                                     | Passes when the player...                                             |
|-------------------------------------------------|-----------------------------------------------------------------------|
| `PatreonSubscriber()`                           | is a Patreon subscriber.                                              |
| `PatreonSubscriber(Tier Title)`                 | is a Patreon subscriber of the tier with that title.                  |
| `GlimpseSubscriber()`                           | is a Glimpse subscriber.                                              |
| `GlimpseSubscriber(Level Name)`                 | is a Glimpse subscriber of the level with that name.                  |
| `TwitchFollower()`                              | follows on Twitch.                                                    |
| `TwitchSubscriber()`                            | is a Twitch subscriber.                                               |
| `TwitchSubscriber(Tier)`                        | is a Twitch subscriber of that tier.                                  |
| `YouTubeSubscriber()`                           | is a YouTube subscriber.                                              |
| `YouTubeMember()`                               | is a YouTube member.                                                  |
| `YouTubeMember(Tier)`                           | is a YouTube member of that tier.                                     |

### Operators

Inside one entry, requirements can be combined with:

- `&&` means **and**, for example `"DiscordServer(...) && TwitchFollower()"`.
- `||` means **or**, for example `"DiscordBoosting(...) || YouTubeMember()"`.
- Brackets `()` clear up which parts belong together, for example `"DiscordServer(...) && (TwitchSubscriber() || PatreonSubscriber())"`. This allows a member of the Discord server who is also a Twitch or Patreon subscriber.

Replace `...` with a real ID.
