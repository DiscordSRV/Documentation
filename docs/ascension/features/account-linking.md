import ConfigLink from '@site/src/components/ConfigLink';

# Account linking

Account linking connects a player's Minecraft account to their Discord account. Some features only work for players who have linked their accounts, such as [rewards](/ascension/rewards) and [required linking](/ascension/required-linking).

## Providers

Linked accounts are kept by a *provider*, which is chosen in `connections.yaml`. There are two:

| Provider           | Where the links are kept                                          | Notes                                                                                                                     |
|--------------------|-------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------|
| <ConfigLink file="connections" path="minecraft-auth">`minecraft-auth`</ConfigLink> | [minecraftauth.me](https://minecraftauth.me), an external service | Links are made on minecraftauth.me. Also allows requirements based on Patreon, Twitch and more, see [required linking](/ascension/required-linking#additional-requirements). |
| <ConfigLink file="connections" path="storage">`storage`</ConfigLink>          | DiscordSRV's own storage                                          | Local linking: DiscordSRV creates and removes the links itself, with the [link commands](#commands).                      |

:::note
With `minecraftauth.me`, only players themselves can link and unlink their accounts, on minecraftauth.me. Admins can't manage links for them, they can only check who is linked to whom with [`linked`](/ascension/commands#linked).
:::

## Link pestering

Players who haven't linked their accounts can be reminded to do so. This is configured in the <ConfigLink file="config" path="linked-accounts.pestering-config">`pestering-config`</ConfigLink> section, and is turned on with <ConfigLink file="config" path="linked-accounts.pestering-config.enabled">`pestering-config.enabled`</ConfigLink>. Linked accounts as a whole can be turned off with <ConfigLink file="config" path="linked-accounts.enabled">`enabled`</ConfigLink>.

The reminder is a message, which you can change in <ConfigLink file="messages" path="player-link-pestering.minecraft">`player-link-pestering.minecraft`</ConfigLink>.

| Option                                                                                           | Default | Description                                                                                            |
|--------------------------------------------------------------------------------------------------|---------|--------------------------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="linked-accounts.enabled">`enabled`</ConfigLink>                   | `true`  | Whether linked accounts are used.                                                                      |
| <ConfigLink file="config" path="linked-accounts.pestering-config.enabled">`pestering-config.enabled`</ConfigLink> | `true`  | Whether unlinked players are reminded to link.                                                         |
| <ConfigLink file="config" path="linked-accounts.pestering-config.mode">`pestering-config.mode`</ConfigLink>    | `join`  | When the reminder is sent: `join`, `timer` or `both`.                                                  |
| <ConfigLink file="config" path="linked-accounts.pestering-config.timer">`pestering-config.timer`</ConfigLink>   | `1`     | How often, in minutes, the reminder is sent when `mode` is `timer` or `both`. The minimum is 1 minute. |

The modes:

| Mode    | When the reminder is sent                                        |
|---------|------------------------------------------------------------------|
| `join`  | When an unlinked player connects to the server.                  |
| `timer` | Repeatedly, on the timer, to every unlinked player.              |
| `both`  | When an unlinked player connects, and then repeatedly on the timer. |

## Commands

| Command                                 | Description                                                                                |
|-----------------------------------------|--------------------------------------------------------------------------------------------|
| [`linked`](/ascension/commands#linked)  | Shows which account a Minecraft player or Discord user is linked to.                       |
| [`link`](/ascension/commands#link)      | Links a Minecraft account to a Discord account (local linking).                            |
| [`unlink`](/ascension/commands#unlink)  | Removes the link between a Minecraft account and a Discord account (local linking).        |
| [`link-message`](/ascension/commands#link-message) | Sends a message in a Discord channel with a button that starts linking.         |

## What linking is used for

- [Rewards](/ascension/rewards) for linking accounts, and for boosting a Discord server.
- [Required linking](/ascension/required-linking), which only lets linked players play.
- Synchronization between Minecraft and Discord, which can be run for online players with [`resync`](/ascension/commands#resync).
