import ConfigLink from '@site/src/components/ConfigLink';

# Generated Invites

DiscordSRV can work out an invite link to your Discord server by itself. The invite is available in messages and other places that use [placeholders](/ascension/placeholders), so players always get a working link, for example in the [link pestering](/ascension/account-linking#link-pestering) message or when they are kicked by [required linking](/ascension/required-linking).

It is configured in the <ConfigLink file="config" path="invite">`invite`</ConfigLink> section.

## Placeholders

| Placeholder                                                     | Value                                                                              |
|-----------------------------------------------------------------|------------------------------------------------------------------------------------|
| [`%discord_invite%`](placeholders#discord_invite)               | The invite, for example `https://discord.gg/example`.                              |
| [`%discord_invite_simple%`](placeholders#discord_invite_simple) | The invite without `https://`, for example `discord.gg/example`.                   |

When no invite could be determined, both placeholders show a page on the DiscordSRV website that explains that the server has no invite.

## Options

| Option                                                                                                     | Default | Description                                                                                                  |
|------------------------------------------------------------------------------------------------------------|---------|--------------------------------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="invite.invite-url">`invite-url`</ConfigLink>                               | blank   | An invite you provide. When this is set, nothing is determined automatically.                                |
| <ConfigLink file="config" path="invite.server-id">`server-id`</ConfigLink>                                 | `0`     | The ID of the Discord server to determine the invite for. See [Which server is used](#which-server-is-used). |
| <ConfigLink file="config" path="invite.attempt-to-use-vanity-url">`attempt-to-use-vanity-url`</ConfigLink> | `true`  | Whether to use the server's vanity URL, if it has one.                                                       |
| <ConfigLink file="config" path="invite.auto-create-invite">`auto-create-invite`</ConfigLink>               | `false` | Whether to create an invite when there is no vanity URL to use.                                              |

## How the invite is determined

1. **Your own invite.** If <ConfigLink file="config" path="invite.invite-url">`invite-url`</ConfigLink> is set, it is used and nothing else happens. This also means DiscordSRV doesn't ask Discord for the `GUILD_INVITES` intent, which is only needed for the automatic part.
2. **The vanity URL.** If <ConfigLink file="config" path="invite.attempt-to-use-vanity-url">`attempt-to-use-vanity-url`</ConfigLink> is `true` and the server has a vanity URL, it is used.
3. **An automatically created invite.** If <ConfigLink file="config" path="invite.auto-create-invite">`auto-create-invite`</ConfigLink> is `true`, DiscordSRV looks for an invite it created before and reuses it. If there is none, it creates one that never expires.

If none of these produce an invite, the placeholders shows an invalid invite on the DiscordSRV website.

### Which server is used

- If <ConfigLink file="config" path="invite.server-id">`invite.server-id`</ConfigLink> is the ID of a server the bot is in, that server is used.
- Otherwise, if the bot is **private** and in **exactly one** server, that server is used.
- Otherwise, nothing is determined automatically. This includes bots that are in more than one server, and bots that are public. Set <ConfigLink file="config" path="invite.server-id">`server-id`</ConfigLink> or <ConfigLink file="config" path="invite.invite-url">`invite-url`</ConfigLink> for these.

:::info
Your bot is private when "Public Bot" is turned off in the Discord Developer Portal.
:::

### Automatically created invites

Invites are created in the server's rules channel, or the default channel if there is no rules channel or the bot can't use it. In that channel the bot needs these permissions:

- View Channel
- Create Instant Invite
- Manage Channel

DiscordSRV checks the invites in the channel for one created by the bot before it creates a new one, so reloading doesn't create more and more invites. The invite it creates doesn't expire.

If the permissions are missing, an error is logged saying which ones. Errors from Discord while getting or creating the invite are logged as well.

## Examples

Use your own invite:

```yaml
invite:
    invite-url: "https://discord.gg/example"
```

Use the vanity URL, and create an invite if there isn't one:

```yaml
invite:
    server-id: 123456789012345678
    attempt-to-use-vanity-url: true
    auto-create-invite: true
```
