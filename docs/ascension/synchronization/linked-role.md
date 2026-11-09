import ConfigLink from '@site/src/components/ConfigLink';

# Linked Role

Linked Role gives Discord users a role **when they have linked their account** to a Minecraft account. Use it to mark verified players, or to unlock channels only for linked members.

This is a one-way synchronization (linking status → Discord role). See [Synchronization](/ascension/synchronization) for background.


## Configuration
Configured in <ConfigLink file="config" path="linked-role" />.

| Option     | Description                                                           |
|------------|-----------------------------------------------------------------------|
| <ConfigLink file="config" path="linked-role.role-ids">`role-ids`</ConfigLink> | A list of Discord role IDs. Every role is given to linked users. |

Roles are in the list's order and are handled independently, so you can give a user more than one role.

## Fixed behaviour

These can't be changed:

| Setting              | Value                  |
|----------------------|------------------------|
| Direction            | Minecraft → Discord    |
| Timer                | Disabled               |
| Tie-breakers         | `minecraft`            |
| Unlink behaviour     | `remove_discord`       |

In practice: linking adds the role, and unlinking removes it. Removing the role by hand on Discord doesn't unlink anyone, and the role is added again the next time a synchronization runs.

## Requirements

The bot needs **Manage Roles**, and the roles must be below the bot's highest role.

:::tip Only cache linked users
<ConfigLink file="config" path="member-caching.role-ids" /> limits which Discord members DiscordSRV keeps cached. Set it to your linked role IDs to cache only linked users.
:::

## Resyncing

[`/discordsrv resync linkedrole`](/ascension/commands#resync) resynchronizes online players. This feature doesn't write its own log file.
