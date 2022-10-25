***
**Please make sure to go through the [Basic Setup](basic-setup.md) before going through with this setup.**
***

This allows you to require the player have their discord account linked to their minecraft account before they can play on the server. When a player attempts to join, they get automatically kicked with a message saying that they need to message your DiscordSRV bot a code for them to be able to join.

Once the player is linked, more restrictions can be added, such as:

- The linked player must be in the discord server
- The linked player must have certain role[s] (this can be used to whitelist Twitch subscribers through the subscriber role if the user's twitch is linked to their discord account)

Make sure `Enabled` is set to `true` in the [`linking.yml`](../linking) config to enable this feature, then restart your server.
```yaml
# linking.yml Line 2
Enabled: true
```

Each option inside [`linking.yml`](../linking) is explained using comments, so read through them to get a better understanding of what you can do.
