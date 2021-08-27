### Minecraft chat to Discord chat doesn't work

??? info "DiscordSRV Minecraft -> Discord chat flowchart"
    ![!DiscordSRV Minecraft -> Discord chat flowchart](images/discordsrv_mc_to_discord_debugging_flowchart.png)

---

### I need help with Minecraft group <-> Discord Role synchronization {id="Minecraft-to-Discord-Role-synchronization"}

??? info "DiscordSRV Minecraft group <-> Discord Role synchronization flowchart"
    ![!DiscordSRV Minecraft group <-> Discord Role synchronization flowchart](images/DiscordSRV_Group_Synchronization_Debugging.png)

---

### How can I disable a feature/message? {id="disable-a-featuremessage"}

In most cases by clearing a value in the config. `option: ""`

<!-- TODO create a custom advanced diff highlighting plugin (git diff --word-diff) -->

For example:
```diff
- DiscordChatChannelServerStartupMessage: ":white_check_mark: **Server has started**"
+ DiscordChatChannelServerStartupMessage: ""
```

For format options with embeds, you just set `Enabled` to `false`:

```diff
MinecraftPlayerLeaveMessage:
-  Enabled: true
+  Enabled: false
  Webhook:
    Enable: false
    AvatarUrl: "%botavatarurl%"
    Name: "%botname%"
  Content: ""
  Embed:
    Enabled: true
    Color: "#ff0000"
    Author:
      ImageUrl: "%embedavatarurl%"
      Name: "%username% left the server"
      Url: ""
    . . .
```

---

### How can I change a notification message embed back to plain text? {id="embed-back-to-plain-text"}

By moving the value in `Embed.Author.Name` to `Content` and setting `Embed.Enabled` to `false`

```diff
MinecraftPlayerLeaveMessage:
  Enabled: true
  Webhook:
    Enable: false
    AvatarUrl: "%botavatarurl%"
    Name: "%botname%"
-  Content: ""
+  Content: "%username% left the server"
  Embed:
-    Enabled: true
+    Enabled: false
    Color: "#ff0000"
    Author:
      ImageUrl: "%embedavatarurl%"
-      Name: "%username% left the server"
+      Name: ""
      Url: ""
    ...
```

---

### Is DiscordSRV compatible with BungeeCord? {id="compatible-bungeecord"}

No, but you can install the plugin on every Bukkit server. (Do **not** use the same token for more than 1 server!)

If you would like to have linked accounts shared across servers, you can connect your DiscordSRV instances to a MySQL database ([`Experiment_Jdbc`](../config/#experiment_jdbc) options)

---

### Why won't messages send from Minecraft to Discord? I have TownyChat installed btw. {id="messages-wont-send-townychat"}

Towny's main channel's name is usually `general`, instead of DiscordSRV's default, `global`.

---

### I reloaded the plugin/server and now it won't work. {id="reloaded-the-pluginserver"}

Only reload the plugin using the plugin's specified reload command. (`/discordsrv reload`)

If that doesn't work, restart your server. Some changes need this for them to take effect.

!!! note "Note"
    Plugins made specifically for reloading/stopping/starting plugins (and the built-in server `/reload` command) can make those plugins stop working properly.

---

### When I join/quit my server, a message isn't sent in the chat channel for me. What gives? {id="when-i-joinquit-my-server-a-message-isnt-sent"}

You have one of DiscordSRV's permissions to join/quit silently. To disallow this, give yourself or a group one of the following permissions depending on what you want to deactivate.

```yaml
groups:
  Owner:
    permissions:
    - -discordsrv.silentjoin
    - -discordsrv.silentquit
    - '*' #<-- "positive" permissions like this one should be AFTER the negated permissions
```

### How do I fix the error "Unsupported major.minor version 52.0?" {id="unsupported-majorminor-version"}

Update the server's Java JRE version to `Java 8` or contact your server provider and request an upgrade.

---

### The plugin crashes at serverstart reporting "java.lang.NoClassDefFoundError: com/scarsz/discordsrv/jda/managers/AccountManager" {id="the-plugin-crashes-at-serverstart"}

One of the libraries that DiscordSRV uses ([Reflections](https://github.com/ronmamo/reflections)) requires ASM **Version 5** to work. You're supposedly running a server with an old ASM version (i.e. 4.x) such as kCauldron / Thermos. Sadly this is a server software dependent problem and we are unable to fix it within DiscordSRV without violating plugin guidelines.

####   Fix for Thermos, Cauldron and early KCauldron {id="thermos-cauldron-and-early-kcauldron"}

The SpecialSource library included with Thermos uses ASM4. Updating it to the latest version will fix the issue.
Instructions for updating to ASM5:

1. Navigate to the `libraries\net\md-5\SpecialSource\1.7-SNAPSHOT` folder of the server
2. Delete the SpecialSource-1.7-SNAPSHOT.jar file
3. Download SpecialSource v1.7.4 from https://repo1.maven.org/maven2/net/md-5/SpecialSource/1.7.4/SpecialSource-1.7.4.jar
4. Copy the jar file to the `libraries\net\md-5\SpecialSource\1.7-SNAPSHOT` folder
5. Rename the jar file you just copied to SpecialSource-1.7-SNAPSHOT.jar

#### Fix for KCauldron {id="kcauldron"}

The SpecialSource library included with KCauldron uses ASM4. Updating it to the latest version will fix the issue.
Instructions for updating to ASM5:

1. Navigate to the `bin\net\md-5\SpecialSource\1.7-SNAPSHOT` folder of the server
2. Delete the SpecialSource-1.7-SNAPSHOT.jar file
3. Download SpecialSource v1.7.4 from https://repo1.maven.org/maven2/net/md-5/SpecialSource/1.7.4/SpecialSource-1.7.4.jar
4. Copy the jar file to the `bin\net\md-5\SpecialSource\1.7-SNAPSHOT` folder
5. Rename the jar file you just copied to SpecialSource-1.7-SNAPSHOT.jar

---

### Only show errors in console-channel
If you want to use your console-channel to only inform you about problems, you can achieve that by modifying the [`DiscordConsoleChannelLevels`](../config/#DiscordConsoleChannelLevels) option:
```diff
- DiscordConsoleChannelLevels: [info, warn, error]
+ DiscordConsoleChannelLevels: [error]
```

---

### Block special console-output from appearing in console-channel {id="Block-special-console-output"}

DiscordSRV allows you to hide phrases from appearing in console-channel. This can be achieved by making use of [regular expressions](https://en.wikipedia.org/wiki/Regular_expression).

Some basic "placeholders" you have to know:

![!Regex Reference](https://courses.cs.washington.edu/courses/cse154/19su/lectures/lec15-regex/hidden/regex-reference.png)

*RegEx escaping must be done with `\\` instead of `\` in config files*

Here are some examples to visualize how it works:

#### Example 1: Block output of `/save-all`

```yaml
DiscordConsoleChannelFilters: {"^Saving\\.\\.\\.$|^Saved the game$": ""}
```

=== "Before"
    ```css
    >> save-all
    [Mon, 20. Apr 2020 04:20:69 CDT INFO] Saving the game (this may take a moment!)
    [Mon, 20. Apr 2020 04:20:69 CDT INFO] Saved the game
    ```
=== "After"
    ```css
    >> save-all
    ```


#### Example 2: Hide lines which contain the string `The updater found an update:`

```yaml
DiscordConsoleChannelFilters: {"^.*The updater found an update:.*$": ""}
```

#### Example 3: Replace the ip address of those that join the game:

```yaml
DiscordConsoleChannelFilters: {"\\[\\/[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+(?::[0-9]+)?\\]": ""}
```

=== "Before"
    ```css
    [Mon, 20. Apr 2020 04:20:69 CDT INFO] Scarsz[/192.168.1.2:58076] logged in with entity id 564875 at ([world]0.0, 0.0, 0.0)
    ```

=== "After"
    ```css
    [Mon, 20. Apr 2020 04:20:69 CDT INFO] Scarsz logged in with entity id 564875 at ([world]0.0, 0.0, 0.0)
    ```

### Can we op players from the discord console? {id="op-players-discord-console"}  

DiscordSRV by default blacklists the use of a handful of commands through the console channel through the [`DiscordConsoleChannelBlacklistedCommands`](../config/#DiscordConsoleChannelBlacklistedCommands) option.

Remove the `"op"` value to allow the command to be used.

```diff
- DiscordConsoleChannelBlacklistedCommands: ["?", "op", "deop", "execute"]
+ DiscordConsoleChannelBlacklistedCommands: ["?", "deop", "execute"]
```

---

### Why can't I control my music bot from Minecraft? {id="music-bot-from-minecraft"}

It's bad practice for a bot to listen to another bot's messages. That's why most if not all public music bots can't be controlled through another bot.

---

### Where is the bot hosted? {id="bot-hosted"}

On the server that DiscordSRV is used on. The bot is online when the server is online.

---

### Can I modify the bot using javascript? {id="modify-bot-javascript"}

No. It's programmed in Java, not Javascript.

---

### How can I show the player count in the game status? {id="player-count-game-status"}

This can be done by using [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/)'s  
`%playerlist_<type>,<subtype>,<include>,<output>,<subtype_value>%` placeholder  
in our [DiscordGameStatus](https://config.discordsrv.com/config/DiscordGameStatus) option.

1. Make sure you have [PlaceholderAPI](https://www.spigotmc.org/resources/placeholderapi.6245/) installed
2. Once the PlaceholderAPI plugin is loaded, run `/papi ecloud download PlayerList` to install the [PlayerList](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#playerlist) expansion
3. Run `/papi reload` to reload the PlaceholderAPI expansions
4. Read through the [PlayerList documentation](https://github.com/PlaceholderAPI/PlaceholderAPI/wiki/Placeholders#playerlist) on how to use the placeholder
5. You can test the output of the placeholder using the `/papi parse me <placeholder>` command


---

### Why is the plugin red in the `/plugins` output? {id="plugins-output-red"}

+----------------------------+---------------------------+
| if the plugin is **green** | if the plugin is **red**  |
+----------------------------+---------------------------+
| the plugin is working      | the plugin is not working |
+----------------------------+---------------------------+ 

First thing you should do is check your *server logs*. If you need further help understanding the errors then join [our discord server](https://discordsrv.com/discord) and create a ticket through the #support channel. Send a copy of what you find or the whole log file.

### Where can I find the server log? {id="find-log"}

Minecraft servers store their logs in `<server_directory>/logs/`. Search for a file explorer in your server's management interface and navigate to that directory. If you find a `logs` folder search for the `latest.log` file. Some providers have a separate page for logs and may hide the `logs` folder.

On Aternos:

- Go to https://aternos.org/log/

On Minehut and server.pro:

- Go to the "`files`" tab in the left menu
- Navigate to the root directory of your server
- From there navigate to `/logs/latest.log`

### What should I do with the server log? {id="do-with-log"}

- First of all, read it! I mean, that's what you do all the time when you run a server, isn't it? Try to locate any errors that have anything to do with DiscordSRV. If you're having trouble scrolling through the file you can use `Ctrl+F` to search the file for the phrase "DiscordSRV". This will highlight all occurrences of "DiscordSRV" which will make locating the error less difficult.
- If you got the `latest.log` file or created a `.txt` file with the necessary errors then join [our discord server](https://discordsrv.com/discord) and create a ticket through the #support channel and send it there.
- If you have trouble downloading the log file, copy/paste the text to a paste service (like [mclo.gs](https://mclo.gs/)). Copy the link that it gives you. Join [our discord server](https://discordsrv.com/discord) and create a ticket through the #support channel, then send that link in your ticket.

---

### Why do I get all the groups instead of just the one I want? {id="all-groups-instead-of-one"}

Check to make sure you don't have the `*` permission in any of the groups that you're a part of. DiscordSRV has a `discordsrv.sync.<group> permission`, and having the star perm ends up giving you the perm for every group you have synchronized. This is just one of many reasons why you shouldn't ever have the `*` perm, or `OP` for that matter.

---

### The bot can't modify my roles, and I'm the Discord server owner? {id="discord-server-owner-modify-roles"}

This is a Discord limitation. Although bots can remove / add one role, they cannot use the endpoint that allows adding & removing as many roles as you want, which is how group-synchronisation achieves this. If you are trying to test group-synchronisation, either use an alt, or test it on another player.

---

### What chat formatting codes can I use? {id="chat-formatting-codes"}

To format minecraft chat related options you can use:

* Legacy (Minecraft) `&r` and adventure `&#abc123`

OR

* [MiniMessage](https://docs.adventure.kyori.net/minimessage.html#format)

You **cannot** use both at the same time!

---

### Can I synchronize multiple discord roles to one Minecraft group? {id="multiple-discord-roles-one-mc-group"}

To synchronize multiple discord roles with one Minecraft group you will need to create a "fake" group in the [GroupRoleSynchronizationGroupsAndRolesToSync](https://config.discordsrv.com/synchronization/GroupRoleSynchronizationGroupsAndRolesToSync) option in synchronization.yml and make use of the `discordsrv.sync.<group name>` permission.

Example: if you want to synchronize both the `Staff` and `Admin` discord role when someone has the `Admin` group in-game, you would do the following.

```yml
GroupRoleSynchronizationGroupsAndRolesToSync: {"Admin": "384977475567878145", "staff": "135634730535092224"}

---

### How do I connect two discord channels to one Minecraft chat? {id="two-discord-channels-one-mc-chat"}

Sadly this feature is not yet possible. It will be a feature in V2 of DiscordSRV.

---

### What is the server room is on fire message? {id="server-room-on-fire"}
`%date% @Owner, the server room is on 🔥‼`

This means that your server has been lagging for several seconds.

The watchdog constantly monitors the last time your server performed a game tick. If the time since the last tick goes above the set interval in seconds, a message to Discord is triggered.

To disable these messages configure the following in config.yml: [`ServerWatchDogEnabled`](https://config.discordsrv.com/config/ServerWatchdogEnabled)

---