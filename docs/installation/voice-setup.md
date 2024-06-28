# Voice Setup

:::warning
**Please make sure to go through the [Initial Setup](initial-setup.mdx) before going through with this setup.**
**You need to link your Discord and Minecraft accounts so that DiscordSRV knows which accounts belong to which player.**
:::

Make sure `Voice enabled` is set to `true` in the `voice.yml` config

```yaml
# voice.yml Line 8
Voice enabled: true
```

:::info
Create a category (name doesn't matter) where the voice module will create/delete/move voice channels
![create a voice category](/assets/create_voice_category.png)
:::

:::info
Right click on the Category and select `Copy ID`
![copy category id](/assets/copy_category_id.png)
:::

In the `voice.yml` config search for the `Voice category` option and replace `000000000000000000` with the copied Category ID.
```yaml
# voice.yml Line 14
Voice category: 000000000000000000
```

Create a channel (name doesn't matter) underneath the voice category you just made; This will be your "Lobby" voice channel.

:::info
Right click on the Channel after moving it and select `Copy ID`
![copy voice channel id](/assets/copy_voice_channel_id.png)
:::

In the `voice.yml` config search for the `Lobby channel` option and replace `000000000000000000` with the copied Channel ID.
```yaml
# voice.yml Line 18
Lobby channel: 000000000000000000
```

(Re)start your server and you're done with configuring the voice module in DiscordSRV!
