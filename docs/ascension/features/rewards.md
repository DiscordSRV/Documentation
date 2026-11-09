import ConfigLink from '@site/src/components/ConfigLink';

# Rewards

Rewards run console commands when a player links their account or boosts your Discord server. They are configured in the <ConfigLink file="config" path="rewards">`rewards`</ConfigLink> section.

There are two kinds of rewards:

- **Linking rewards** are for players with a linked Discord and Minecraft account.
- **Boosting rewards** are for players with a linked Discord account who are also boosting a specific Discord server.

Both need [linked accounts](/ascension/account-linking). Rewards are remembered in DiscordSRV's storage, so use a different `reward-id` for every reward, and don't use the same ids on several servers that share the storage.

## Options

Both kinds have these options:

| Option                    | Description                                                                                                                                         |
|---------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------|
| `type`                    | When the reward is triggered, see [Linking rewards](#linking-rewards) and [Boosting rewards](#boosting-rewards).                                    |
| `reward-id`               | Decides whether the player and/or the Discord user has already been given the reward. It should be unique for each reward.                          |
| `grant-type`              | When the reward can be given again, see [Grant types](#grant-types).                                                                                |
| `needs-online`            | If `true`, the reward is only given while the player is online. Otherwise it waits until they next join. See [Waiting for the player](#waiting-for-the-player). |
| `console-commands-to-run` | The commands to run, see [Commands](#commands).                                                                                                     |


A reward with no commands does nothing.

## Linking rewards

<ConfigLink file="config" path="rewards.linking-rewards">`linking-rewards`</ConfigLink> is a list of linking rewards. Their `type` can be:

| Type        | The reward is given...                                                                         |
|-------------|------------------------------------------------------------------------------------------------|
| `is_linked` | to any linked player at any time. It is checked when the player joins, and when they link.     |
| `linked`    | when the player and the Discord user become linked. It also gives `is_linked` rewards.         |
| `unlinked`  | when the player and the Discord user become unlinked.                                          |

## Boosting rewards

<ConfigLink file="config" path="rewards.boosting-rewards">`boosting-rewards`</ConfigLink> is a list of boosting rewards. They can only be given to linked players. Besides the options above they have:

| Option                                                                                       | Description                                          |
|----------------------------------------------------------------------------------------------|------------------------------------------------------|
| <ConfigLink file="config" path="rewards.boosting-rewards.server-id">`server-id`</ConfigLink> | The ID of the Discord server that has to be boosted. |

Their `type` can be:

| Type          | The reward is given...                                                                                        |
|---------------|---------------------------------------------------------------------------------------------------------------|
| `is_boosting` | to any player whose Discord user is boosting the server, at any time. It is checked when the player joins.    |
| `boosted`     | when a user starts boosting. It also gives `is_boosting` rewards.                                             |
| `unboosted`   | when a user stops boosting.                                                                                   |

:::note
`boosted` and `unboosted` don't work if the user isn't cached.
:::

## Grant types

`grant-type` decides when a reward can be given again, using `reward-id` to remember what has been given:

| Grant type        | Description                                                                                                        |
|-------------------|--------------------------------------------------------------------------------------------------------------------|
| `once_per_player` | Each Minecraft account can get the reward once, whichever Discord account it is linked to.                         |
| `once_per_user`   | Each Discord account can get the reward once, whichever Minecraft account it is linked to.                         |
| `once_per_both`   | Each Minecraft account **and** each Discord account can get the reward once. It isn't given again if either has already had it. |
| `always`          | The reward is given every time it is triggered.                                                                    |

:::caution
`is_linked` and `is_boosting` rewards are checked every time the player joins. With `always` they run their commands on every join.
:::

## Waiting for the player

With `needs-online` set to `true`, a reward that is triggered while the player is offline isn't given right away. It is saved, and given the next time the player joins. The commands are only run once the player is online, so use this for commands that need the player online, such as `give`.

## Commands

`console-commands-to-run` is a list of commands that are run as the console when the reward is given. Placeholders are replaced first:

| Placeholder                                                                 | Value                                |
|-----------------------------------------------------------------------------|--------------------------------------|
| [`%profile_player_uuid%`](placeholders#profile_player_uuid)                 | The Minecraft player's UUID.         |
| [`%profile_offline_player_name%`](placeholders#profile_offline_player_name) | The Minecraft player's name.         |
| [`%profile_user_id%`](placeholders#profile_user_id)                         | The Discord user's ID.               |
| [`%profile_user_name%`](placeholders#profile_user_name)                     | The Discord user's username.         |
| [`%profile_user_effective_name%`](placeholders#profile_user_effective_name) | The Discord user's display name.     |

More placeholders can be found in [Placeholders](/ascension/placeholders) (Profile).

## Examples

Give a player 5 diamonds the first time they link their accounts:

```yaml
rewards:
    linking-rewards:
    -   type: linked
        reward-id: "first-link"
        grant-type: once_per_both
        needs-online: true
        console-commands-to-run:
        - "give %profile_offline_player_name% diamond 5"
```

Give a player a netherite ingot when they start boosting your Discord server:

```yaml
rewards:
    boosting-rewards:
    -   type: boosted
        server-id: 123456789012345678
        reward-id: "first-boost"
        grant-type: once_per_both
        needs-online: true
        console-commands-to-run:
        - "give %profile_offline_player_name% netherite_ingot 1"
```
