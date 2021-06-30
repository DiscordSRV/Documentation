This is the configuration file for the Voice module. You gain the ability to connect your Discord Voice channels directly to Minecraft, and updates communicative access in real time.

!!! note "Video of it in action"
		<iframe width="640" height="360" src="https://www.youtube-nocookie.com/embed/R3GRFPUIqGE?mute=1" title="YouTube video player" frameborder="1" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

### [`Voice enabled`](https://config.discordsrv.com/voice/Voice%20enabled)[^1]
Enables/disables the voice module.
### [`Tick speed`](https://config.discordsrv.com/voice/Tick%20speed)
The tick delay between network updates.
### [`Voice category`](https://config.discordsrv.com/voice/Voice%20category)
The category that the plugin will handle voice channels in
### [`Lobby channel`](https://config.discordsrv.com/voice/Lobby%20channel)
The voice channel (inside the voice category) that people will join to connect to the voice system
### [`Mute users who bypass speak permissions in the lobby`](https://config.discordsrv.com/voice/Mute%20users%20who%20bypass%20speak%20permissions%20in%20the%20lobby)
If the plugin should server mute people who bypass speaking permission overrides in the lobby channel (the server owner, for example)

---

### [`Network`](https://config.discordsrv.com/voice/Network)
#### [`Vertical Strength`](https://config.discordsrv.com/voice/Vertical%20Strength)
Maximum vertical distance between players in order to be connected.
#### [`Horizontal Strength`](https://config.discordsrv.com/voice/Horizontal%20Strength)
Maximum horizontal distance between players in order to be connected.
#### [`Strength`](https://config.discordsrv.com/voice/Strength)
Maximum distance between players in order to be connected.
#### [`Falloff`](https://config.discordsrv.com/voice/Falloff)
Once a player has joined a network, they can be `Strength` + `Falloff` blocks away from the other players before being disconnected.
#### [`Allow voice activation detection`](https://config.discordsrv.com/voice/Allow%20voice%20activation%20detection)
Whether or not to allow VAD in voice channels.  

[^1]: Requires a server restart for changes to take effect.