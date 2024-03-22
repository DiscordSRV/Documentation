# Security

We take security seriously, and so should you.

## The Bot Token

This is essentially the Discord bots password, if somebody gets it they can do whatever the bot can.
Meaning if you grant your bot permission to ban members, the bot token can be used to ban members from your Discord server.

The token is in the `connections.yaml`, meaning whoever can read that file can also see your token, other plugins on your server can also programmatically access the token.

If you suspect somebody you don't trust has gotten access to your token, reset it immediately:
- Go to [Discord's developer portal](https://discord.com/developers/applications)
- Select your bot (the bot is only visible to the user that created it, or members of the team the bot is in)
- Click on the "Bot" tab
- Click "Reset Token" and put the new token in the `connections.yaml`

## Update security check

DiscordSRV includes a feature to disable DiscordSRV if the used version is reported insecure by our downloads api.
Basically this means if we discover a security vulnerability in DiscordSRV we can flag the affected versions as vulnerable preventing those versions from being used.

This can be disabled in the `connections.yaml` but doing so is not recommended.

