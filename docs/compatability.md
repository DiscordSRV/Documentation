# Compatability

DiscordSRV requires Java 8 or newer

## Server Software compatability

| Server software       | Supported versions                                   |
|-----------------------|------------------------------------------------------|
| Bukkit, Spigot, Paper | ✅ Minecraft 1.8.8 and up<br/>⚠️ Minecraft 1.7.10[^1] |
| BungeeCord, Waterfall | ✅ Minecraft 1.7.10 and up                            |
| Velocity              | ✅ 3.0.0 and up<br/>❌ 2.0.0 and below                 |
| Sponge                | ✅ API 9 and up<br/>❌ API 8 and below                 |

[^1]: Requires [updating ASM](faq#asm-update) <!-- TODO: fix anchor -->

## Plugin integrations and compatability

=== "Bukkit, Spigot, Paper"
    #### Plugin integrations
    | Plugin | Supported added by | Version |
    |---|---|---|
    | LuckPerms       | DiscordSRV | `5.0+` |
    | PlaceholderAPI  | DiscordSRV | `2.11.1+` |
    | Vault           | DiscordSRV | `1.7+` |
    | **Chat plugins** |
    | Chatty             | DiscordSRV | `2.19.13+` |
    | GriefPrevention    | DiscordSRV | `16.18.1+` |
    | LunaChat           | DiscordSRV | `3.0.16+` |
    | McMMO              | DiscordSRV | `2.1.220+` |
    | TownyChat          | DiscordSRV | `0.45+` |
    | VentureChat        | DiscordSRV | `3.5.0+` |
    
    #### Compatability notes  
    | Plugin | Status | Explanation |
    |---|---|---|
    | FactionsUUID | ✅ | `1.6.9.5-U0.3.0b133+` |
    | SARanks<br/>TModsServerAddons_Ranks | ❌ | Cancels all chat events |
    | EpicChatFormat<br/>EpicChatPrefix | ❌ | Cancels all chat events |
    | **Chat reporting plugins** |
    | FreedomChat | ✅ | Works at packet level |
    | NoChatReports | ❌ | Cancels all chat events |
=== "BungeeCord, Waterfall"
    #### Plugin integrations
    | Plugin| Supported added by | Version |
    |---|---|---|
    | LuckPerms | DiscordSRV | `5.0+` |
=== "Velocity"
    #### Plugin integrations
    | Plugin | Supported added by | Version |
    |---|---|---|
    | LuckPerms | DiscordSRV | `5.0+` |
=== "Sponge"
    #### Plugin integrations
    | Plugin | Supported added by | Version |
    |---|---|---|
    | LuckPerms | DiscordSRV | `5.0+` |