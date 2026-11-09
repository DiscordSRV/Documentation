import ConfigLink from '@site/src/components/ConfigLink';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# LuckPerms Contexts

Allows permissions/groups/prefixes/etc to be assigned easily based on certain DiscordSRV states.

More information about contexts can be found here: https://luckperms.net/wiki/Context

Available contexts:

* `discordsrv:linked` - whether the player has linked a Discord account (true/false)
* `discordsrv:boosting` - whether the player is boosting the Discord guild (true/false)
* `discordsrv:role_id` - the role id the user has in Discord
* `discordsrv:server_id` - whether the user is a member of the server with the given id (which the bot is also a part of)
* `discordsrv:primary_server_id` - whether the user has a primary server (guild tag)

<details>
<summary>Is a user fulfilling the LP context in `/lp user <user> info` but not actually receiving the group?</summary>

If a user seems to be fulfilling the LuckPerms context in `/lp user <user> info` but they don't get their primary group set when adding a higher weighted parent with the relevant context then set `primary-group-calculation` to `all-parents-by-weight` in the LuckPerms config.
</details>

##### Examples

<Tabs>
    <TabItem value='discordsrv-linked' label='discordsrv:linked' default>
        | Command                                                                       | Explanation                                                                       |
        |------------------------------------------------------------------------------ |-----------------------------------------------------------------------------------|
        | `/lp group default permission set essentials.fly true discordsrv:linked=true` | will give all users access to `/fly` if they have their account linked to Discord |
    </TabItem>
    <TabItem value='discordsrv-boosting' label='discordsrv:boosting'>
        | Command                                                                           | Explanation                                                                                                  |
        |-----------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
        | `/lp group default meta addsuffix 100 &d[Boost] discordsrv:boosting=000000000000` | will give a pink `[Boost]` suffix to all users boosting the server that has the `000000000000` ID in Discord |
    </TabItem>
    <TabItem value='discordsrv-role_id' label='discordsrv:role_id'>
        | Command                                                                           | Explanation                                                                                              |
        |-----------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
        | `/lp group default permission set chat.use false discordsrv:role_id=000000000000` | will negate the `chat.use` permission for anyone with the role that has the `000000000000` ID in Discord |
    </TabItem>
    <TabItem value='discordsrv-server_id' label='discordsrv:server_id'>
        | Command                                                                                   | Explanation                                                                                              |
        |-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------|
        | `/lp group default permission set essentials.back true discordsrv:server_id=000000000000` | will give all users access to `/back` for anyone in the server that has the `000000000000` ID in Discord |
    </TabItem>
        <TabItem value='discordsrv-primary_server_id' label='discordsrv:primary_server_id'>
        | Command                                                                                   | Explanation                                                                                                                        |
        |-------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|
        | `/lp group default meta addsuffix 100 &d[Tag] discordsrv:primary_server_id=000000000000`  | will give a pink `[Tag]` suffix to all users that has the server that has the `000000000000` ID in Discord as their primary server |
    </TabItem>
</Tabs>

These can be disabled by adding `luckperms` to <ConfigLink file="config" path="integrations.disabled-integrations">`integrations.disabled-integrations`</ConfigLink>.

However that will also disable [Group Sync](synchronization/group-sync).
