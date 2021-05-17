| Command | Permission | Description |
| ---- | ---- | ---- |
| `/discord`<br>`/discordsrv` | [`discordsrv.discord`](../Permissions#discordsrvdiscord) (true) | Shows whatever is defined for [DiscordCommandFormat](https://config.discordsrv.com/messages/DiscordCommandFormat) in the [`messages.yml`](https://config.discordsrv.com/messages/_) file

**The following tables are arguments to the above command.**

## Player Commands  

<table>
    <thead>
        <tr>
            <th>Command</th>
            <th>Permission</th>
            <th>Description</th>
        </tr>
    </thead>
    <tr>
        <td>
            <div><h4><code>help</code><hr><code>?</code></h4></div>
        </td>
        <td>
            <a href="../Permissions#discordsrvhelp"><code>discordsrv.help</code></a> (true)
        </td>
        <td>
            Shows a list of all the options you have permissions for.
        </td>
    </tr>
    <tr>
        <td>
            <div><h4><code>linked</code></h4></div>
        </td>
        <td>
            <a href="../Permissions#discordsrvlinked"><code>discordsrv.linked</code></a> (true)
        </td>
        <td>
            Shows if your Minecraft account is linked with a discord account.
        </td>
    </tr>
    <tr>
        <td>
            <div><h4><code>link</code></h4></div>
        </td>
        <td>
            <a href="../Permissions#discordsrvlink"><code>discordsrv.link</code></a> (true)
        </td>
        <td>
            Sends you instructions to link your Minecraft account with your Discord account.
        </td>
    </tr>
    <tr>
        <td>
            <div><h4><code>unlink</code><hr><code>clearlinked</code></h4></div>
        </td>
        <td>
            <a href="../Permissions#discordsrvunlink"><code>discordsrv.unlink</code></a> (op)
        </td>
        <td>
            Unlink your Discord account from your Minecraft account.
        </td>
    </tr>
</table>

## Staff Commands  

<table>
    <thead>
        <tr>
            <th>Command</th>
            <th>Target</th>
            <th>Permission</th>
            <th>Description</th>
        </tr>
    </thead>
    <tr>
        <td>
            <div><h4><code>broadcast</code><hr><code>bcast</code></h4></div>
        </td>
        <td>
            <code>&lt;#ChannelID/#ChannelName> &lt;Message></code>
        </td>
        <td>
            <a href="../Permissions#discordsrvbcast"><code>discordsrv.bcast</code></a> (op)
        </td>
        <td>
            Broadcasts a message to the &lt;#ChannelID/#ChannelName> Discord channel. (Main channel by default)
        </td>
    </tr>
    <tr>
        <td>
            <div><h4><code>linked</code></h4></div>
        </td>
        <td>
            <code>&lt;Name/UUID/DiscordID></code>
        </td>
        <td>
            <a href="../Permissions#discordsrvlinkedothers"><code>discordsrv.linked.others</code></a> (op)
        </td>
        <td>
            Shows if the players Minecraft account is linked with a Discord account.
        </td>
    </tr>
    <tr>
        <td>
            <div><h4><code>link</code></h4></div>
        </td>
        <td>
            <code>&lt;Name/UUID> &lt;DiscordID/DiscordTag></code>
        </td>
        <td>
            <a href="../Permissions#discordsrvlinkothers"><code>discordsrv.link.others</code></a> (op)
        </td>
        <td>
            Link a player's Minecraft account to a Discord account.
        </td>
    </tr>
    <tr>
        <td>
            <div><h4><code>unlink</code><hr><code>clearlinked</code></h4></div>
        </td>
        <td>
            <code>&lt;Name/UUID/DiscordID></code>
        </td>
        <td>
            <a href="../Permissions#discordsrvunlinkothers"><code>discordsrv.unlink.others</code></a> (op)
        </td>
        <td>
            Unlink a player's Minecraft account from their Discord account.
        </td>
    </tr>
    <tr>
        <td>
            <div><h4><code>debug</code></h4></div>
        </td>
        <td>
            <!-- comment -->
        </td>
        <td>
            <a href="../Permissions#discordsrvdebug"><code>discordsrv.debug</code></a> (op)
        </td>
        <td>
            Sends information used for debugging to <a href="https://bin.scarsz.me">Scarsz' encrypted bin</a> and returns a debug link. If you need help with DiscordSRV, visit our <a href="https://discordsrv.com/discord">Discord server</a> and send us the link in the <code>#support</code> channel with a description of your problem.
        </td>
    </tr>
    <tr>
        <td>
            <div><h4><code>resync</code></h4></div>
        </td>
        <td>
            <!-- comment -->
        </td>
        <td>
            <a href="../Permissions#discordsrvresync"><code>discordsrv.resync</code></a> (op)
        </td>
        <td>
            Resynchronizes all groups & roles. For test purposes only.
        </td>
    </tr>
    <tr>
        <td>
            <div><h4><code>reload</code></h4></div>
        </td>
        <td>
            <!-- comment -->
        </td>
        <td>
            <a href="../Permissions#discordsrvreload"><code>discordsrv.reload</code></a> (op)
        </td>
        <td>
            Reloads the plugin. (Some changes require a server restart.)
        </td>
    </tr>
    <tr>
        <td>
            <div><h4><code>resync</code></h4></div>
        </td>
        <td>
            <!-- comment -->
        </td>
        <td>
            <a href="../Permissions#discordsrvresync"><code>discordsrv.resync</code></a> (op)
        </td>
        <td>
            Triggers group synchronization (requires synchronization.yml)
        </td>
    </tr>
</table>

## Deprecated Commands  

<table>
    <thead>
        <tr>
            <th>Command</th>
            <th>Permission</th>
            <th>Description</th>
			<th>Notice</th>
        </tr>
    </thead>
    <tr>
        <td>
            <div><h4><code>subscribe</code></h4></div>
        </td>
        <td>
            <a href="../Permissions#discordsrvsubscribe"><code>discordsrv.subscribe</code></a> (true)
        </td>
        <td>
            Enables receiving messages from Discord for yourself. <b>(removed since v15.3)</b>
        </td>
		<td rowspan=3>The subscription system was removed in version 15.3 due to low usage and unrecoverable problems with use of chat channel supporting plugins.
		</td>
    </tr>
    <tr>
        <td>
            <div><h4><code>unsubscribe</code></h4></div>
        </td>
        <td>
            <a href="../Permissions#discordsrvunsubscribe"><code>discordsrv.unsubscribe</code></a> (true)
        </td>
        <td>
            Disables receiving messages from Discord for yourself. <b>(removed since v15.3)</b>
        </td>
    </tr>
    <tr>
        <td>
            <div><h4><code>toggle</code></h4></div>
        </td>
        <td>
            <a href="../Permissions#discordsrvtoggle"><code>discordsrv.toggle</code></a> (true)
        </td>
        <td>
            Toggles receiving messages from Discord for yourself. <b>(removed since v15.3)</b>
        </td>
    </tr>
</table>
