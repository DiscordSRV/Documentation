***
**Note: 🏗 This page is under construction.**
***  

A permissions plugin (preferably [LuckPerms](https://luckperms.net)) is highly recommended to use these permissions effectively. If this is your first time setting up permissions and you're planning on using LuckPerms, [read this section of LuckPerms' wiki](https://luckperms.net/wiki/Usage).

## Parent Permissions
These are super permissions that grant a bunch of standard permissions for your use case. Generally, these two parent permissions are the ones you should use.  

<table>
    <tr>
        <td><b>Parent Permission</b></td>
        <td><b>Default</b></td>
        <td><b>Description</b></td>
        <td><b>Child Permissions</b></td>
    </tr>
    <tr>
        <td><h4>discordsrv.player</h4></td>
        <td>true</td>
        <td>parent permission of player-related functions of DiscordSRV</td>
        <td>
            <div>discordsrv.chat</div>
            <div>discordsrv.help</div>
            <div>discordsrv.link</div>
            <div>discordsrv.linked</div>
            <div>discordsrv.discord</div>
        </td>
    </tr>
    <tr>
        <td><h4>discordsrv.admin</h4></td>
        <td>op</td>
        <td>parent permission of admin-related functions of DiscordSRV</td>
        <td>
            <div>discordsrv.player</div>
            <div>discordsrv.updatenotification</div>
            <div>discordsrv.bcast</div>
            <div>discordsrv.reload</div>
            <div>discordsrv.resync</div>
            <div>discordsrv.debug</div>
            <div>discordsrv.link.others</div>
            <div>discordsrv.linked.others</div>
            <div>discordsrv.unlink</div>
            <div>discordsrv.unlink.others</div>
            <div>discordsrv.groupsyncwithcommands</div>
            <div>discordsrv.resync</div>
        </td>
    </tr>
</table>

## Permissions
These are individual permissions that can be given or taken away to fine tune what players are able to do.  

<table>
    <tr>
        <td><b>Permission</b></td>
        <td><b>Default</b></td>
        <td><b>Description</b></td>
    </tr>
    <tr>
        <td><h4>discordsrv.discord</h4></td>
        <td>true</td>
        <td>allows access to the <code>/discord|/discordsrv</code> command</td>
    </tr>
    <tr>
        <td><h4>discordsrv.chat</h4></td>
        <td>true</td>
        <td>whether or not the user is able to have their chat forwarded to Discord</td>
    </tr>
    <tr>
        <td><h4>discordsrv.silentjoin</h4></td>
        <td>false</td>
        <td>whether or not to have join messages silenced for players with this permission</td>
    </tr>
    <tr>
        <td><h4>discordsrv.silentquit</h4></td>
        <td>false</td>
        <td>whether or not to have quit messages silenced for players with this permission</td>
    </tr>
    <tr>
        <td><h4>discordsrv.help</h4></td>
        <td>true</td>
        <td>whether or not the player is able to run DiscordSRV's help command</td>
    </tr>
    <tr>
        <td><h4>discordsrv.updatenotification</h4></td>
        <td>op</td>
        <td>whether or not the player should be told if there's an update to DiscordSRV upon joining</td>
    </tr>
    <tr>
        <td><h4>discordsrv.bcast</h4></td>
        <td>op</td>
        <td>whether or not the player is able to run DiscordSRV's broadcast command</td>
    </tr>
    <tr>
        <td><h4>discordsrv.reload</h4></td>
        <td>op</td>
        <td>whether or not the player is able to reload DiscordSRV's configuration</td>
    </tr>
    <tr>
        <td><h4>discordsrv.resync</h4></td>
        <td>op</td>
        <td>whether or not the player is able to manually resynchronize all groups & roles</td>
    </tr>
    <tr>
        <td><h4>discordsrv.debug</h4></td>
        <td>op</td>
        <td>whether or not the player is able to run a debug report</td>
    </tr>
    <tr>
        <td><h4>discordsrv.link</h4></td>
        <td>true</td>
        <td>whether or not the player is able to link their Minecraft account to their Discord account</td>
    </tr>
    <tr>
        <td><h4>discordsrv.link.others</h4></td>
        <td>op</td>
        <td>whether or not the player is able to link other people's Minecraft accounts to Discord accounts</td>
    </tr>
    <tr>
        <td><h4>discordsrv.unlink</h4></td>
        <td>op</td>
        <td>whether or not the player is able to unlink their Minecraft account from their Discord account</td>
    </tr>
    <tr>
        <td><h4>discordsrv.unlink.others</h4></td>
        <td>op</td>
        <td>whether or not the player is able to unlink other people's Minecraft accounts from their Discord accounts</td>
    </tr>
    <tr>
        <td><h4>discordsrv.linked</h4></td>
        <td>true</td>
        <td>whether or not the player is able to check what Discord account their Minecraft account is linked to</td>
    </tr>
    <tr>
        <td><h4>discordsrv.linked.others</h4></td>
        <td>op</td>
        <td>whether or not the player is able to check what Discord account other Minecraft accounts are linked to</td>
    </tr>
    <tr>
        <td><h4>discordsrv.groupsyncwithcommands</h4></td>
        <td>op</td>
        <td>whether or not the player can run a permission plugin command to force group sync to occur</td>
    </tr>
    <tr>
        <td><h4>discordsrv.resync</h4></td>
        <td>op</td>
        <td>whether or not the player can run /discord resync to force a resync of all groups/roles</td>
    </tr>
    <tr>
        <td><h4>discordsrv.sync.&lt;group&gt;</h4></td>
        <td>true</td>
        <td>Groups that should be added to the player if their discord account is linked.<br>Each group must be added to the <a href="https://config.discordsrv.com/synchronization/GroupRoleSynchronizationGroupsAndRolesToSync">GroupRoleSynchronizationGroupsAndRolesToSync</a> option in <code>synchronization.yml</code> first</td>
    </tr>
    <tr>
        <td><h4>discordsrv.sync.deny.&lt;group&gt;</h4></td>
        <td>true</td>
        <td>Groups that should be removed from the player if their discord account is linked.<br>Permissions need to be enabled through the <a href="https://config.discordsrv.com/synchronization/GroupRoleSynchronizationEnableDenyPermission">GroupRoleSynchronizationEnableDenyPermission</a> option in <code>synchronization.yml</code> </td>
    </tr>
</table>



## Deprecated Permissions

<table>
    <tr>
        <td><b>Permission</b></td>
        <td><b>Default</b></td>
        <td><b>Description</b></td>
        <td><b>Notice</b></td>
    </tr>
    <tr>
        <td><h4>discordsrv.subscribe</h4></td>
        <td>true</td>
        <td>whether or not the player is able to subscribe to Discord messages being sent to them</td>
        <td rowspan=3>The subscription system was removed in version 15.3 due to low usage and unrecoverable problems with use of chat channel supporting plugins.</td>
    </tr>
    <tr>
        <td><h4>discordsrv.unsubscribe</h4></td>
        <td>true</td>
        <td>whether or not the player is able to unsubscribe from Discord messages being sent to them</td>
    </tr>
    <tr>
        <td><h4>discordsrv.toggle</h4></td>
        <td>true</td>
        <td>whether or not the player is able to toggle their subscription status to Discord messages</td>
    </tr>
</table>