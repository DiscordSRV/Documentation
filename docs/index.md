![DiscordSRV](https://lol.scarsz.me/AiKvTS/Logo-filled-stroke.png)  

<div markdown="1" id="center">

**The most powerful, configurable, open-source Discord bridge plugin out there.**  

[:simple-discord: Discord](https://discordsrv.com/discord){ .md-button }
[:fontawesome-solid-faucet: SpigotMC](https://www.spigotmc.org/resources/discordsrv.18494/){ .md-button }
[:material-bucket-outline: BukkitDev](https://dev.bukkit.org/projects/discordsrv){ .md-button }

[:material-cloud-upload: Latest Release](https://get.discordsrv.com/){ .md-button }
[:material-cloud-tags: Latest Snapshot](https://snapshot.discordsrv.com/){ .md-button }

**Supports All Minecraft Versions from {{ project.supported_version.min }} to {{ project.supported_version.max }}**  

_**We only give support for the latest release/dev builds; please update before asking for help**_

</div>

## Features
- Bridge between Minecraft and Discord chats
- Forward your Minecraft Console to a Discord text channel  
- Broadcast alerts based on certain events
- Voice Proximity through the Discord Voice Chat ([`voice.yml`](voice))  
- Require linking accounts (or certain role/s) to play ([`linking.yml`](linking))  
- Support for popular chat plugins (listed below)  
- Highly customizable

### Plugins we hook into:  
* #### Chat
    * [Herochat], [LegendChat], [LunaChat], [TownyChat], [VentureChat]
* #### Vanish
    * [Essentials], [PhantomAdmin], [SuperVanish], [VanishNoPacket]
* #### World
    * [Multiverse]
* [Vault]  
* [LuckPerms]
* [PlaceholderAPI]  - [DiscordSRV Expansion Placeholders](PAPI-Placeholders)

### Plugins that use our API:
* [DiscordSRV StaffChat]
* [ChatControlRed]
* [CMI]
* [Plan]
* [EmojiChat]
* [PurpleIRC]
* [ChatReplay]
* [AuctionHouse]
* [Staff Facilities]
* [Staff++]
* [LiteBansBridge]
* [MCSF (My Christian Swear Filter)]
* [MZP-VoteParty]
* [InteractiveChat DiscordSRV Addon] ^(Not^ ^associated^ ^with^ ^DiscordSRV)^
* [DiscordSRVUtils] ^(Not^ ^associated^ ^with^ ^DiscordSRV)^
* [ActivityRoles]
* [EconomyShopGUI]
* [DiscordSchematicUploader] ^(Not^ ^associated^ ^with^ ^DiscordSRV)^
* If you would like your plugin listed here, please bring it to `granny`'s attention in our [Discord](https://discordsrv.com/discord) server.
## Intended usage
By using this plugin, you are able to give players the ability to chat in-game with players on your Discord server, as well as having people on the Discord server be able to chat with people in the minecraft server - This can be useful for players that still want to communicate with players in-game, but can't access the Minecraft server for whatever reason.  

This plugin has a remote console feature. You can designate a text channel for the plugin to forward console messages, which also runs all messages sent into that channel as commands by the server console (You should restrict sending this channel to a developer or high ranking role only). Due to how Discord's permissions work, you can have some server roles have access to see the console, while also not allowing them to send messages in that channel, thus creating a read-only console for trusted staff members.  

Both chat and console are toggleable through the configuration file. Some options can be refreshed with `/discordsrv reload` by an OP or a player with the `discordsrv.reload` permission.  

## Bot Permissions

--8<-- "permissions.txt"

## Installation  
Visit the [Installation](Installation) page for clear and in-depth instructions on installing and setting up DiscordSRV.  

## Donations
First off, thank you from the bottom of my heart for the pizza. If you would like to donate, go to https://scarsz.me/donate. $10 is the suggested amount but you can donate however much you would like- anything is a massive thank you from me. In the note put your Discord username and if you're in DiscordSRV's server you'll be set as a donator and you'll receive some neat perks in the future. If you donated without the note, send me a PM on Discord and I'll manually check it.  
## Developers
If you want to interface DiscordSRV with your plugin, you can do so by adding the Maven dependency or adding the plugin jar (DiscordSRV version 1.18.0+) to your project. You also need to add the JDA repository. For an example of this, see [DiscordSRV-ApiTest](https://github.com/DiscordSRV/DiscordSRV-ApiTest). Be sure to add "DiscordSRV" to your plugin's `plugin.yml` depends/softdepends list.  

/// tab | Maven
```xml
<repository>
    <id>dv8tion</id>
    <name>m2-dv8tion</name>
    <url>https://m2.dv8tion.net/releases</url>
</repository>
...
<repository>
    <id>Scarsz-Nexus</id>
    <url>https://nexus.scarsz.me/content/groups/public/</url>
</repository>  
...  
<dependency>
    <groupId>com.discordsrv</groupId>
    <artifactId>discordsrv</artifactId>
    <version>{{ project.version }}</version>
    <scope>provided</scope>
</dependency>
```
///

/// tab | Gradle
```js
maven {
    name 'm2-dv8tion'
    url 'https://m2.dv8tion.net/releases'
}
repositories {
    maven { url 'https://nexus.scarsz.me/content/groups/public/' }
}  
dependencies {
    compileOnly 'com.discordsrv:discordsrv:{{ project.version }}'
}
```
///

## Data usage
### Data collection
Anything and everything shown at https://bstats.org/plugin/bukkit/DiscordSRV will be visible to the public with your server included in the statistics. This is only for statistics; no private information of your server is sent. If you don't want your server included in this, specify the config option `MetricsDisabled` and set it to `true` in the config.yml file.  

## Update checking
DiscordSRV checks for updates using GitHub's API, and makes sure the version is safe to use via a minimum version (security feature), you may disable update checking by setting `UpdateCheckDisabled` to `true` in the config.yml file; however this may leave your server at risk if there is a security issue/exploit and you're running a vulnerable version.   

[Herochat]: https://www.spigotmc.org/resources/34305/
[LegendChat]: https://www.spigotmc.org/resources/6268/
[LunaChat]: https://github.com/ucchyocean/LunaChat/
[TownyChat]: https://www.spigotmc.org/resources/towny-72694/
[VentureChat]: https://www.spigotmc.org/resources/771/
[Essentials]: https://www.spigotmc.org/resources/9089/
[PhantomAdmin]: https://www.spigotmc.org/resources/37845/
[SuperVanish]: https://www.spigotmc.org/resources/1331/
[VanishNoPacket]: https://dev.bukkit.org/projects/vanish/
[Multiverse]: https://dev.bukkit.org/projects/multiverse-core/
[Vault]: https://www.spigotmc.org/resources/34315/
[LuckPerms]: https://luckperms.net/
[PlaceholderAPI]: https://www.spigotmc.org/resources/6245/

[DiscordSRV StaffChat]: https://www.spigotmc.org/resources/44245/
[ChatControlRed]: https://mineacademy.org/chatcontrol/
[CMI]: https://www.spigotmc.org/resources/3742/
[Plan]: https://www.spigotmc.org/resources/32536/
[EmojiChat]: https://www.spigotmc.org/resources/50955/
[PurpleIRC]: https://www.spigotmc.org/resources/2836/
[ChatReplay]: https://www.spigotmc.org/resources/28982/
[AuctionHouse]: https://www.spigotmc.org/resources/61836/
[Staff Facilities]: https://www.spigotmc.org/resources/13097/
[Staff++]: https://www.spigotmc.org/resources/83562/
[LiteBansBridge]: https://www.spigotmc.org/resources/76326/
[MCSF (My Christian Swear Filter)]: https://www.spigotmc.org/resources/54115/
[MZP-VoteParty]: https://www.spigotmc.org/resources/89754/
[InteractiveChat DiscordSRV Addon]: https://www.spigotmc.org/resources/83917/
[DiscordSRVUtils]: https://www.spigotmc.org/resources/85958/
[ActivityRoles]: https://modrinth.com/plugin/activityroles/
[EconomyShopGUI]: https://www.spigotmc.org/resources/69927/
[DiscordSchematicUploader]: https://modrinth.com/plugin/discordschematicuploader/
