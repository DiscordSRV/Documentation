import ConfigLink from '@site/src/components/ConfigLink';

# Messages internationalization and localization

Internationalization and localization (i18n/l10n) lets messages be shown in other languages. There are two parts:

- [DiscordSRV's messages](#discordsrv-messages), which are DiscordSRV's own messages in `messages.yaml`.
- [Game translations](#game-translations), which translate text that comes from the game, such as messages added by plugins, mods and datapacks.

## DiscordSRV messages

These options are in the <ConfigLink file="config" path="messages">`messages`</ConfigLink> section:

| Option                                                              | Default | Description                                                                                                                                  |
|---------------------------------------------------------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------|
| <ConfigLink file="config" path="messages.default-language">`default-language`</ConfigLink>       | `en`    | The default language. If left blank, the system default is used. See [Language codes](#language-codes).                                       |
| <ConfigLink file="config" path="messages.multiple">`multiple`</ConfigLink>               | `false` | Whether there is a messages file for each language, chosen by the language of the player or Discord user. Otherwise the default is always used. |
| <ConfigLink file="config" path="messages.load-all-defaults">`load-all-defaults`</ConfigLink>      | `true`  | Whether every language that comes with DiscordSRV is loaded into the messages directory. Only works when `multiple` is `true`.                |

### Language codes

Use the ISO 639-1 code of the language, for example `en`. To pick a dialect, add the ISO 3166-1 country code after an underscore or a dash, for example `pt_BR` or `pt-BR`. Capitalization doesn't matter, so `pt_br` works too.

## Game translations

Game text is made of *translation keys*, such as `death.attack.generic`, which the game turns into text in the player's language. Plugins, mods and datapacks add their own keys. With game translations, DiscordSRV can show that text in a language of your choice when it is sent to Discord. It can also be used to show all game messages in a language other than English.

DiscordSRV uses Adventure translators and renders every translation key the game provides with them. You provide the translations yourself.

### Adding translations

1. Create a folder named `game_languages` in DiscordSRV's folder.
2. Add one file per language to it, named after the language, for example `de_de.json` or `pt-BR.lang`.
3. Run `/discordsrv reload translation`, or restart the server.

The language is read from the file name, so `de_de.json`, `de-DE.json` and `de_DE.json` all work. Files have to end in `.json` or `.lang`. Anything else is skipped and a warning is logged. A file that can't be read is skipped as well, and the others are still loaded.

You can use Minecraft's own language files as they are. They can be downloaded from [mcasset.cloud](https://mcasset.cloud/latest/assets/minecraft/lang), where you pick the language for the version of Minecraft you run. Keys added by plugins, mods and datapacks aren't in these files, so add them to your own file.

Your translations are used before any other translations.

### File formats

`.json` files are one object, with a translation key as the name and the text as the value:

```json
{
  "death.attack.generic": "%1$s died",
  "my_plugin.welcome": "Welcome, %s!"
}
```

`.lang` files have one `key=value` pair per line:

```
death.attack.generic=%1$s died
my_plugin.welcome=Welcome, %s!
```

Values can use the same placeholders as Minecraft's language files: `%s` for the next value, `%1$s` for a specific one (counting from 1), and `%%` for a `%` sign.
