***
**Please make sure to go through the [Basic Setup](basic-setup.md) before going through with this setup.**
***

Make sure `Voice enabled` is set to `true` in the `voice.yml` config

```yaml
# voice.yml Line 8
Voice enabled: true
```

!!! note "Create a category (name doesn't matter) where the voice module will create/delete/move voice channels"
    ![create a voice category](../images/create_voice_category.png){width=325}

!!! note "Right click on the Category and select `Copy ID`"
    ![copy category id](../images/copy_category_id.png){width=325}

In the `voice.yml` config search for the `Voice category` option and replace `000000000000000000` with the copied Category ID.
```yaml
# voice.yml Line 13
Voice category: 000000000000000000
```

Create a channel (name doesn't matter) underneath the voice category you just made; This will be your "Lobby" voice channel.

!!! note "Right click on the Channel after moving it and select `Copy ID`"
    ![copy voice channel id](../images/copy_voice_channel_id.png){width=325}

In the `voice.yml` config search for the `Lobby channel` option and replace `000000000000000000` with the copied Channel ID.
```yaml
# voice.yml Line 17
Lobby channel: 000000000000000000
```

(Re)start your server and you're done with configuring the voice module in DiscordSRV!
