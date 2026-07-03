:::danger
This is documentation for **a future version of DiscordSRV** and information on this page does not apply to DiscordSRV version 1 and may be **inaccurate** in general
:::

# Discord message formatting

```yaml
format:
    webhook:
        username: "Webhook username"
        avatar-url: "https://docs.discordsrv.com/assets/images/letters/w.png"
    content: "Message content"
    embeds:
    - color: "#ffffff"
      author:
          name: "Author name"
          url: "https://example.com/author"
          image-url: "https://docs.discordsrv.com/assets/images/letters/a.png"
      title:
          text: "Title text"
          url: "https://example.com/title"
      description: "Description text"
      fields:
      - title: "Non-inline field title"
        value: "Non-inline field value"
        inline: false
      - title: "1. Inline field title"
        value: "1. Inline field value"
        inline: true
      - title: "2. Inline field title"
        value: "2. Inline field value"
        inline: true
      thumbnail-url: "https://docs.discordsrv.com/assets/images/letters/t.png"
      image-url: "https://docs.discordsrv.com/assets/images/letters/i.png"
      timestamp: "2026-01-01T00:00:00+02:00"
      footer:
          text: "Footer text"
          image-url: "https://docs.discordsrv.com/assets/images/letters/f.png"
    allowed-mentions:
        everyone: true
        users: true
        roles: true
```