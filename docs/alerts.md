This is an *advanced* feature of DiscordSRV that allows you to send messages to Discord when a game event happens or when a command is run. You will need a working knowledge of how Bukkit events work and their properties. If you aren't sure about what you're doing here, maybe ask a developer or join our support server @ https://discordsrv.com/discord/  

Refer to the Bukkit API javadoc to find events & properties to use:
* https://hub.spigotmc.org/javadocs/bukkit  

Helpful resources for learning how to use SpEL:
* https://docs.spring.io/spring/docs/4.2.x/spring-framework-reference/html/expressions.html
* https://dzone.com/articles/learn-spring-expression-language-with-examples

## Available Placeholders
* `{tps}` - server TPS
* `{time}` - formatted time
* `{date}` - formatted date
* `{name}` - if alert is for a player event, the name of the player
* `{ping}` - if alert is for a player event, the ping of the player
* `{username}` - if alert is for a player event, the username of the player
* `{displayname}` - if alert is for a player event, the display name of the player
*  `{usernamenoescapes}` - if alert is for a player event, the username of the player without escaping discord format (for use in inline code & code block markdown)
*  `{displaynamenoescapes}` - if alert is for a player event, the display name of the player without escaping discord format (for use in inline code & code block markdown)
* `{world}` - if alert is for a player event, the world the player is in
* `{embedavatarurl}` - if alert is for a player event, the avatar url for the player's head, otherwise, the bot's avatar url
* `{botavatarurl}` - the bot's avatar url
* `{botname}` - the bot's name
* `%placeholder%` - any PlaceholderAPI placeholders, can only use player ones when alert is for a player event

## SpEL expression examples
- Getting a player's IP: `${#player.address.address.hostAddress}`
- Getting a player's game mode: `${#player.gameMode.name()}`
- Getting a player's linked Discord account ID: `${#discordsrv.accountLinkManager.getDiscordId(player.uniqueId)}`
- Getting the online player count: `${#server.onlinePlayers.size()}`
- Getting the status of DiscordSRV's connection to Discord: `${#jda.status.name()}`
- Checking if a player is in a specific world: `${#player.world.name == 'world_the_end'}`
- Checking if it's day in the world that the player is in: `${#player.world.time > 0 && player.world.time < 13000}`

## Available SpEL expression placeholders
* `#plugins.<plugin>` - the specified plugin instance, <ins>null if doesn't exist</ins>
* `#event` - the event that's triggering the alert <ins>if this alert is an event alert</ins>
* `#server` - the Bukkit API server instance, equivalent to Bukkit#getServer
* `#discordsrv` - the DiscordSRV plugin instance
* `#player` - the player that the event is for, <ins>if this is a player event or command</ins>
* `#sender` - the command sender, <ins>if this is a command alert</ins>
* `#command` - the full command, with no leading slash, <ins>if this is a command alert</ins>
* `#args` - the command arguments, <ins>if this is a command alert</ins>
* `#allArgs` - the command arguments as one string, <ins>if this is a command alert</ins>
* `#channel` - the destination channel for this alert
* `#jda` - DiscordSRV's JDA instance that it uses to communicate with Discord

## Usage examples

### AdvancedBan

#### PunishmentEvent
Reference: https://github.com/DevLeoko/AdvancedBan/blob/master/src/main/java/me/leoko/advancedban/bukkit/event/PunishmentEvent.java
```yaml
  - Trigger: PunishmentEvent
    Channel: punishments
    Embed:
      Color: "#4287f5"
      Author:
        ImageUrl: "https://www.spigotmc.org/data/resource_icons/8/8695.jpg"
        Name: "${punishment.getName()} was punished with reason: ${punishment.getReason()}"
```

### Matrix

#### PlayerViolationEvent
Reference: https://github.com/jiangdashao/matrix-api-repo/blob/master/matrix-api/src/main/java/me/rerere/matrix/api/events/PlayerViolationEvent.java
```yaml
- Trigger: PlayerViolationEvent
  Channel: matrix
  Conditions:
    - violations >= 5 # don't send events for players with < 5 violations
  Embed:
    Color: "#ff0000"
    Author:
      ImageUrl: "{embedavatarurl}"
      Name: "{username} failed ${hackType.name().toLowerCase()} check | ${component} | vl:${violations} ping:${player.handle.ping} tps:{tps}"
```

### MythicMobs

#### MythicMobSpawnEvent
Reference: https://mythicmobs.net/javadocs/io/lumine/xikage/mythicmobs/api/bukkit/events/MythicMobSpawnEvent.html
```yaml
  # Example alert to send a message when a MythicMobs ender dragon spawns
  - Trigger: MythicMobSpawnEvent
    Channel: mobs
    Conditions:
      - 'entity.type.name() == "ENDER_DRAGON"'
    Embed:
      Color: "#4b064c"
      Author:
        ImageUrl: "https://vignette.wikia.nocookie.net/minecraft/images/0/0a/Ender_Dragon.gif/revision/latest?cb=20200819042230"
        Name: "An ender dragon has spawned!"
```

### Spartan

#### PlayerViolationEvent
Reference: https://pastebin.com/raw/a8cLdjGS
```yaml
- Trigger: PlayerViolationEvent
  Channel: spartan
  Conditions:
    - violation >= 5 # don't send events for players with < 5 violations
  Embed:
    Color: "#ff0000"
    Author:
      ImageUrl: "{embedavatarurl}"
      Name: "{username} failed ${hackType.name().toLowerCase()} check | ${message} | vl:${violation} ping:${player.handle.ping} tps:{tps}"
```

### Essentials

#### AfkStatusChangeEvent
Reference: https://github.com/EssentialsX/Essentials/blob/2.x/Essentials/src/net/ess3/api/events/AfkStatusChangeEvent.java
```yaml
  # Send an AFK alert when someone is AFK / is no longer AFK
  - Trigger: AfkStatusChangeEvent
    Channel: afk
    Embed:
      Color: "#869600"
      Author:
        ImageUrl: "https://crafatar.com/avatars/${#event.getAffected().getBase().getUniqueId()}?overlay"
        Name: '${#event.getAffected().getName() + " is " + (#event.value ? "now" : "no longer") + " AFK"}'
```

### Command Triggers

#### /gamemode

```yaml
- Trigger: /gamemode
  Channel: gamemode
  Conditions:
    - '#player.hasPermission("minecraft.command.gamemode")'
  Embed:
    Color: "#ff0000"
    Author:
      ImageUrl: "{embedavatarurl}"
      Name: "{username} changed game mode to ${#args.get(0)}"
```

#### /me

```yaml
  - Trigger: /me
    Channel: me
    Conditions:
      - '#player.hasPermission("minecraft.command.me") || #player.hasPermission("essentials.me")'
    Embed:
      Color: "#ff0000"
      Author:
        ImageUrl: "{embedavatarurl}"
        Name: "* {username} ${#allArgs}"
```

### Social Spy

#### Private messages

```yaml
  - Trigger: [/msg, /w, /m, /pm, /emsg, /epm, /tell, /etell, /whisper, /ewhisper]
    Channel: SocialSpy
    Embed:
      Color: "#000001"
      Author:
        ImageUrl: "{embedavatarurl}"
        Name: "[{username}> ${#allArgs}]"
```

#### Commands

```yaml
  - Trigger: PlayerCommandPreprocessEvent 
    Channel: SocialSpy
    Conditions:
      - "!(#command.split(\"\\s+|$\")[0].equals(\"msg\"))"      #ignores the /msg command
      - "!(#command.split(\"\\s+|$\")[0].equals(\"w\"))"        #ignores the /w command
      - "!(#command.split(\"\\s+|$\")[0].equals(\"m\"))"        #ignores the /m command
      - "!(#command.split(\"\\s+|$\")[0].equals(\"pm\"))"       #ignores the /pm command
      - "!(#command.split(\"\\s+|$\")[0].equals(\"emsg\"))"     #ignores the /emsg command
      - "!(#command.split(\"\\s+|$\")[0].equals(\"epm\"))"      #ignores the /epm command
      - "!(#command.split(\"\\s+|$\")[0].equals(\"tell\"))"     #ignores the /tell command
      - "!(#command.split(\"\\s+|$\")[0].equals(\"etell\"))"    #ignores the /etell command
      - "!(#command.split(\"\\s+|$\")[0].equals(\"whisper\"))"  #ignores the /whisper command
      - "!(#command.split(\"\\s+|$\")[0].equals(\"ewhisper\"))" #ignores the /ewhisper command
      - "!(#command.split(\"\\s+|$\")[0].equals(\"r\"))"        #ignores the /r command
      - "!(#command.split(\"\\s+|$\")[0].equals(\"er\"))"       #ignores the /er command
      - "!(#command.split(\"\\s+|$\")[0].equals(\"reply\"))"    #ignores the /reply command
      - "!(#command.split(\"\\s+|$\")[0].equals(\"ereply\"))"   #ignores the /ereply command
#      - "!(#command.split(\"\\s+|$\")[0].equals(\"example\"))"   #ignores the /example command
    Embed:
      Color: "#000001"
      Author:
        ImageUrl: "{embedavatarurl}"
        Name: '{username} issued command: /${#command}'
```

#### Sign placement

```yaml
  - Trigger: SignChangeEvent
    Channel: SocialSpy
    Conditions:
      - 'getLine(0) + getLine(1) + getLine(2) + getLine(3) != ""'
    Embed:
      Color: "#000001"
      Author:
        ImageUrl: "https://crafatar.com/avatars/${#event.getPlayer().getUniqueId()}?overlay"
        Name: '${#event.getPlayer().getName()}'
      Description: "Coord: `[${#event.getBlock().getLocation().getBlockX() + \", \" + #event.getBlock().getLocation().getBlockY() + \", \" + #event.getBlock().getLocation().getBlockZ()}]`\n```\n${#event.getLine(0)}\n${#event.getLine(1)}\n${#event.getLine(2)}\n${#event.getLine(3)}```"
```