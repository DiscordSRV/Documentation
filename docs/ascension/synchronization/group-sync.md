import ConfigLink from '@site/src/components/ConfigLink';

# Group Sync

Group Sync keeps a player's **permission groups** and their **Discord roles** the same. For example, a player in the `vip` group on the server gets the VIP role on Discord, and the other way around.

See [Synchronization](/ascension/synchronization) for how direction, tie-breakers, the timer and unlink behaviour work. They apply here per [set](#sets-and-pairs).

Configured in <ConfigLink file="config" path="group-sync" />.

## Requirements

- A supported permission plugin: [LuckPerms](https://luckperms.net) (recommended) or Vault-compatible permissions plugins on Bukkit (see [Compatibility](/ascension/compatibility)). LuckPerms is needed for [contexts](#contexts) and [inherited groups](#inherited-groups), Vault ignores both. Without a permission provider, `/discordsrv resync group` replies "No permission provider available." and nothing is synchronized.
- The player's accounts must be [linked](/ascension/commands#link).
- The bot needs **Manage Roles** and the roles must be below the bot's highest role.

## Sets and pairs

Configuration is split into **sets**. A set is a group of **pairs** that share the same options. A pair connects one permission group to one Discord role.

Use several sets when different groups need different options, for example one set for donor ranks that goes both ways, and one for staff ranks that only goes from Minecraft to Discord.

### Set options

| Option             | Default | Description                                                                                         |
|--------------------|---------|-----------------------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="group-sync.sets.direction">`direction`</ConfigLink> | `bidirectional` | see [Synchronization](/ascension/synchronization#common-options) |
| <ConfigLink file="config" path="group-sync.sets.timer">`timer`</ConfigLink> | `side: minecraft cycle-timer:5 ` | see [Synchronization](/ascension/synchronization#common-options) |
| <ConfigLink file="config" path="group-sync.sets.tie-breakers">`tie-breakers`</ConfigLink> | `minecraft` | see [Synchronization](/ascension/synchronization#common-options) |
| <ConfigLink file="config" path="group-sync.sets.unlink-behaviour">`unlink-behaviour`</ConfigLink> | `remove_discord` | see [Synchronization](/ascension/synchronization#common-options) |
| <ConfigLink file="config" path="group-sync.sets.contexts">`contexts`</ConfigLink> | none    | LuckPerms contexts, see [Contexts](#contexts)                                                       |
| <ConfigLink file="config" path="group-sync.sets.include-inherited">`include-inherited`</ConfigLink> | `false` | Also count inherited groups, see [Inherited groups](#inherited-groups)                              |
| <ConfigLink file="config" path="group-sync.sets.pairs">`pairs`</ConfigLink> | one empty pair | The group and role pairs                                                                  |

### Pair options

| Option       | Description                                                        |
|--------------|--------------------------------------------------------------------|
| <ConfigLink file="config" path="group-sync.sets.pairs.group-name">`group-name`</ConfigLink> | The group name from your permission plugin. **Case-sensitive.**    |
| <ConfigLink file="config" path="group-sync.sets.pairs.role-id">`role-id`</ConfigLink>    | The ID of the Discord role                                         |

A pair needs both a group name and a role ID, otherwise it is ignored.

## Contexts

<ConfigLink file="config" path="group-sync.sets.contexts">Contexts</ConfigLink> limit a group to certain situations in LuckPerms (for example a world or server). When set, groups are checked, added and removed only with those contexts.

```yaml
contexts:
  server: ["survival"]
```

The format is `context: [values]`. The same group with different contexts is treated as a different pair.

## Inherited groups

When <ConfigLink file="config" path="group-sync.sets.include-inherited">`include-inherited`</ConfigLink> is `true`, a player counts as having the group if they inherit it from another group, not just when it is assigned directly. This only works with LuckPerms.

Because inherited groups can change without DiscordSRV seeing an event for the group itself, DiscordSRV re-checks affected pairs whenever the related groups change, with Minecraft taking priority. Pairs with `include-inherited: true` are also left out of proactive synchronization.

## How changes are applied

- Adding or removing a group in your permission plugin adds or removes the role.
- Adding or removing the role on Discord adds or removes the group.
- Changes DiscordSRV makes are remembered for 30 seconds so they don't cause a second synchronization.

## Troubleshooting

- Run [`/discordsrv debug`](/ascension/commands#debug) and open `group-sync.txt` to see the active pairs and the groups DiscordSRV can see.
- Check the `groupsync` log file for failures, such as a permission backend error or a role the bot can't manage.
- Make sure the group name matches exactly, including case.
