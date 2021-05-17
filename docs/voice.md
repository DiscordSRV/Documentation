This is the configuration file for the Voice module. You gain the ability to connect your Discord Voice channels directly to Minecraft, and updates communicative access in real time.

Here's a video of it in action:
https://www.youtube.com/watch?v=R3GRFPUIqGE

### Table of Contents

* [`Voice enabled`](voice#Voice-enabled) | [`Tick speed`](voice#Tick-speed) | [`Voice category`](voice#Voice-category) | [`Lobby channel`](voice#Lobby-channel) | [`Mute users who bypass speak permissions in the lobby`](voice#Mute-users-who-bypass-speak-permissions-in-the-lobby)  
* [Network](voice#Network)  
	* `Vertical Strength`  
	* `Horizontal Strength`  
	* `Strength`  
	* `Falloff`  
	* `Allow voice activation detection`  

Clicking on ` :fontawesome-solid-external-link-alt:` will lead you to the exact line it's located at in the config

---

### `Voice enabled`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/voice/Voice%20enabled)
Enables/disables the voice module.
### `Tick speed`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/voice/Tick%20speed)
The tick delay between network updates.
### `Voice category`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/voice/Voice%20category)
The category that the plugin will handle voice channels in
### `Lobby channel`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/voice/Lobby%20channel)
The voice channel (inside the voice category) that people will join to connect to the voice system
### `Mute users who bypass speak permissions in the lobby`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/voice/Mute%20users%20who%20bypass%20speak%20permissions%20in%20the%20lobby)
If the plugin should server mute people who bypass speaking permission overrides in the lobby channel (the server owner, for example)

---

### `Network`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/voice/Network)
#### `Vertical Strength`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/voice/Vertical%20Strength)
Maximum vertical distance between players in order to be connected.
#### `Horizontal Strength`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/voice/Horizontal%20Strength)
Maximum horizontal distance between players in order to be connected.
#### `Strength`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/voice/Strength)
Maximum distance between players in order to be connected.
#### `Falloff`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/voice/Falloff)
Once a player has joined a network, they can be `Strength` + `Falloff` blocks away from the other players before being disconnected.
#### `Allow voice activation detection`[ :fontawesome-solid-external-link-alt:](https://config.discordsrv.com/voice/Allow%20voice%20activation%20detection)
Whether or not to allow VAD in voice channels.  

---

# References
1. Requires a server restart for changes to take effect.  

[⁽¹⁾]: voice#References