import ConfigLink from '@site/src/components/ConfigLink';

# Presence updater

The presence updater changes the bot's Discord presence: its status (online, idle and so on) and the activity shown under its name, like "Playing Minecraft". It can rotate through several presences and show a different one while the server is starting or stopping.

It is configured in the <ConfigLink file="config" path="presence-updater">`presence-updater`</ConfigLink> section.

## How it works

- The bot goes through the `presences` list in order, one every <ConfigLink file="config" path="presence-updater.updater-rate-in-seconds">`presence-updater.updater-rate-in-seconds`</ConfigLink>, and starts over after the last one. The first presence is set right away.
- While the server is starting, the starting presence is used instead of the rotation. When the server has started, the rotation begins.
- While the server is stopping, the stopping presence is used.
- The starting and stopping presences are only used when <ConfigLink file="config" path="presence-updater.enabled">`presence-updater.enabled`</ConfigLink> is `true`.

:::note
The starting and stopping presences aren't available on proxies (BungeeCord and Velocity). Proxies start almost instantly, so there is no starting or stopping state to show.
:::

## Options

| Option                                                                       | Default | Description                                                                                  |
|------------------------------------------------------------------------------|---------|----------------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="presence-updater.enabled">`enabled`</ConfigLink>                 | `true`  | Whether the bot's presence is updated.                                                       |
| <ConfigLink file="config" path="presence-updater.updater-rate-in-seconds">`updater-rate-in-seconds`</ConfigLink> | `90`    | The number of seconds between presence updates. The minimum is 30, lower values are treated as 30. |
| <ConfigLink file="config" path="presence-updater.presences">`presences`</ConfigLink>               |         | The presences to rotate through, see [Presences](#presences).                                |
| <ConfigLink file="config" path="presence-updater.use-starting-presence">`use-starting-presence`</ConfigLink>   | `true`  | Whether to use `starting-presence` while the server is starting.                             |
| <ConfigLink file="config" path="presence-updater.starting-presence">`starting-presence`</ConfigLink>       |         | The presence to use while the server is starting.                                            |
| <ConfigLink file="config" path="presence-updater.use-stopping-presence">`use-stopping-presence`</ConfigLink>   | `true`  | Whether to use `stopping-presence` while the server is stopping.                             |
| <ConfigLink file="config" path="presence-updater.stopping-presence">`stopping-presence`</ConfigLink>       |         | The presence to use while the server is stopping.                                            |

## Presences

`presences`, `starting-presence` and `stopping-presence` all use the same two options:

| Option     | Description                                                                         |
|------------|-------------------------------------------------------------------------------------|
| `status`   | `online`, `idle`, `do_not_disturb` or `invisible`.                                  |
| `activity` | The text shown under the bot's name, optionally starting with the type of activity. |

### Activity

`activity` can start with one of these, followed by a space, to set the type of activity:

| Start of `activity`  | Shown as                    |
|----------------------|-----------------------------|
| `playing`            | Playing ...                 |
| `listening to`       | Listening to ...            |
| `watching`           | Watching ...                |
| `competing in`       | Competing in ...            |

To show the bot as streaming, write `streaming`, a YouTube or Twitch link and the text, all separated by spaces:

```yaml
activity: "streaming https://www.twitch.tv/yourchannel Live now"
```

### Placeholders

Placeholders can be used in `activity`. Only global placeholders are available by default.

You can inject more context entities using [Additional context](/ascension/placeholders#additional-context)

| Placeholder                                           | Value                         |
|-------------------------------------------------------|-------------------------------|
| [`%playerlist_count%`](placeholders#playerlist_count) | The number of players online. |

More placeholders can be found in [Placeholders](/ascension/placeholders).

## Examples

A bot that switches between two presences every minute:

```yaml
presence-updater:
    updater-rate-in-seconds: 60
    presences:
    -   status: online
        activity: "playing Minecraft"
    -   status: online
        activity: "watching %playerlist_count% players"
```

Different presences while the server starts and stops:

```yaml
presence-updater:
    use-starting-presence: true
    starting-presence:
        status: do_not_disturb
        activity: "Starting..."
    use-stopping-presence: true
    stopping-presence:
        status: idle
        activity: "Stopping..."
```
