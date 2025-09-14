:::danger
This is documentation for **a future version of DiscordSRV** and information on this page does not apply to DiscordSRV version 1 and may be **inaccurate** in general
:::

# Security

## The Bot Token

This is essentially the Discord bots password, if somebody gets it they can do whatever the bot can.
Meaning if you grant your bot permission to ban members, the bot token can be used to ban members from your Discord server.

The token is in the `connections.yaml`, meaning whoever can read that file can also see your token, other plugins on your server can also programmatically access the token.

If you suspect somebody you don't trust has gotten access to your token, reset it immediately:
- Go to [Discord's developer portal](https://discord.com/developers/applications)
- Select your bot (the bot is only visible to the user that created it, or members of the team the bot is in)
- Click on the "Bot" tab
- Click "Reset Token" and put the new token in the `connections.yaml`

## `connections.yaml`

This is a file for containing all connection credentials used by DiscordSRV, so the config.yaml can be freely shared without worry of leaking credentials.  
This however means that the connections.yaml shouldn't be shared with anybody you don't trust with all the credentials inside.

If somebody you don't trust has gotten this file, reset all the credentials inside this file immediately.

## Update security check

DiscordSRV includes a feature to disable DiscordSRV if the used version is reported insecure by our downloads api.
Basically this means if we discover a security vulnerability in DiscordSRV we can flag the affected versions as vulnerable preventing those versions from being used.

This can be disabled in the `connections.yaml` but doing so is not recommended.

## Discord Role Hierarchy

Any user that has the `Manage Roles` permission can add/remove any role below their highest role to/from any user.  
This is important to note in cases where roles are used to grant access to certain features (such as running certain console commands)

For example: given the following roles (in order):

```
Owner
Admin
Moderator
Console Access
Bot
```

If a user has `Moderator` and that role has the `Manage Roles` permission, they can, in this example scenario add and remove `Console Access` and `Bot` to/from **any** user.
