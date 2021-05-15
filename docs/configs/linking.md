***
**Note: 🏗 This page is under construction.**
***  

Require players to link their account to Discord before letting them play and optionally require a subscriber role.

# Screenshots
<details>
<summary><code>📷 Kick Message</code></summary>

![](https://lol.scarsz.me/QYwTJC/javaw_12rAo3Y4RJ.png)

</details>
<details>
<summary><code>📷 Failed to find subscriber role Message</code></summary>

![](https://lol.scarsz.me/BvBWxm/javaw_uJSdOF2OAa.png)

</details>


### Table of Contents
[`Enabled`](linking#Enabled) | [`Listener priority`](linking#Listener-priority) | [`Listener event`](linking#Listener-event) | [`Bypass names`](linking#Bypass-names) | [`Whitelisted players bypass check`](linking#Whitelisted-players-bypass-check) | [`Check banned players`](linking#Check-banned-players) | [`Only check banned players`](linking#Only-check-banned-players) | [`Not linked message`](linking#Not-linked-message) | [`Must be in Discord server`](linking#Must-be-in-Discord-server)  
>* [Subscriber role](linking#Subscriber-role)  
>	* `Require subscriber role to join`  
>	* `Subscriber roles`  
>	* `Require all of the listed roles`  
>	* `Kick message`  
>* [Messages](linking#Messages)  
>	* `DiscordSRV still starting`  
>	* `Failed to find subscriber role`  
>	* `Failed for unknown reason`  
>	* `Kicked for unlinking`  

Clicking on `🔗` will lead you to the exact line it's located at in the config

---

### `Enabled`[🔗](https://config.discordsrv.com/linking/Enabled)
Enable/Disable the `RequireLink4Gameplay` module.
### `Listener priority`[🔗](https://config.discordsrv.com/linking/Listener%20priority)
Control the priority `RequireLink4Gameplay`'s join listener is on.
If 
Available values are [`LOWEST`, `LOW`, `NORMAL`, `HIGH`, `HIGHEST`]
### `Listener event`[🔗](https://config.discordsrv.com/linking/Listener%20event)
The event that the link module should listen and disallow logins on.
If your whitelist plugin doesn't seem to work with the default, change it to the other available value.
Available values are [`AsyncPlayerPreLoginEvent`,`PlayerLoginEvent`]
### `Bypass names`[🔗](https://config.discordsrv.com/linking/Bypass%20names)
Minecraft IGNs to always allow (overrides)
### `Whitelisted players bypass check`[🔗](https://config.discordsrv.com/linking/Whitelisted%20players%20bypass%20check)
Whether to bypass players listed in the vanilla whitelist or not.
### `Check banned players`[🔗](https://config.discordsrv.com/linking/Check%20banned%20players)
Whether or not to let players in the VANILLA banlist be able to link their accounts
### `Only check banned players`[🔗](https://config.discordsrv.com/linking/Only%20check%20banned%20players)
Whether or not players not in the VANILLA banlist will bypass the need to link their accounts/have a sub role
### `Not linked message`[🔗](https://config.discordsrv.com/linking/Not%20linked%20message)
The kick message that gets displayed if the user's account isn't linked
Placeholders:
* `{BOT}` The Bot's name. [DiscordSRVBot#1234]
* `{CODE}` The verification code required for DMing the bot. [4321]

### `Must be in Discord server`[🔗](https://config.discordsrv.com/linking/Must%20be%20in%20Discord%20server)
If enabled, players will not only need to have their accounts linked but will also be required to be a member of a Discord server that the bot is also in.
Acceptable formats:
```
  true/false: linked account must be in at least one Discord server that the bot is also in
    ex: true
  <server id>: linked account must be in the given Discord server
    ex: 135634590575493120
  [<server id>, <server id>, ...]: linked account must be in ALL of the given Discord servers
    ex: [135634590575493120, 690411863766466590]
```
This option's value is superseded when you have subscriber roles enforced below.

---

### Subscriber role:
Optionally require people to not only be linked but to have one/all specified role[s].
#### `Require subscriber role to join`[🔗](https://config.discordsrv.com/linking/Require%20subscriber%20role%20to%20join)
Enable/Disable requiring a discord role to join Minecraft server.
#### `Subscriber roles`[🔗](https://config.discordsrv.com/linking/Subscriber%20roles)
The roles required to join the server.
#### `Require all of the listed roles`[🔗](https://config.discordsrv.com/linking/Require%20all%20of%20the%20listed%20roles)
Enable/Disable requiring all listed roles. When false, only one of the roles listed in `Subscriber roles` is required.
#### `Kick message`[🔗](https://config.discordsrv.com/linking/Kick%20message)
The message that gets displayed when a user gets kicked for not having a/all role/s.

---

### Messages:
#### `DiscordSRV still starting`[🔗](https://config.discordsrv.com/linking/DiscordSRV%20still%20starting)
What gets displayed as the kick reason if someone attempts to join before DiscordSRV loads up.
#### `Failed to find subscriber role`[🔗](https://config.discordsrv.com/linking/Failed%20to%20find%20subscriber%20role)
What gets displayed as the kick reason if the required role[s] were not found on the server.
#### `Failed for unknown reason`[🔗](https://config.discordsrv.com/linking/Failed%20for%20unknown%20reason)
What gets displayed as the kick reason if an error occurs.
#### `Kicked for unlinking`[🔗](https://config.discordsrv.com/linking/Kicked%20for%20unlinking)
What gets displayed as the kick reason if the player unlinks in-game.  

---

# References
1. Requires a server restart for changes to take effect.  
2. Only available in the Development build.

[¹]: linking#References
[²]: linking#References