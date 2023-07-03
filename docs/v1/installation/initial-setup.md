### Prerequisites

- server software based on the Bukkit API (CraftBukkit/Spigot/Paper/etc)
- ability to read server logs
- ability to modify server files

---

### Install the plugin

1. Put `DiscordSRV-Build-VERSION_NUMBER.jar` in the server's `plugins` folder and restart your server (This will generate a folder labeled `DiscordSRV` with all the config files)
1. Open the `config.yml` file in the `plugins/DiscordSRV/` folder with your favorite text editor

---

### Setting up the bot

#### Create the Application
!!! note "Create a new application at https://discord.com/developers/applications/ by clicking `"New Application"`"
    ![create application](../images/create_application.png)  
#### Create the bot
!!! note "Choose a cool name for your bot and click `Create`"
    ![create the bot](../images/create_bot.png)
#### Confirm the bot application
!!! note "Under the `Settings` tab, click `Bot`, then click `Add Bot` and confirm with `Yes, do it!`"
    ![confirm action](../images/create_bot_confirm.png)
---

### Starting up the bot

#### Copy the bot token
!!! note "Copy the `Token` of the bot from the application page. Keep `PUBLIC BOT` unchecked so only you can invite the bot to the servers you designate."
    ![copy bot token](../images/copy_token.png)

---

#### Enable the Privileged Gateway Intents options
!!! note "Make sure to enable both the `SERVER MEMBERS INTENT` and `MESSAGE CONTENT INTENT` options shown in the video below to avoid running into issues with DiscordSRV later on."
    ![](../images/enable_all_intents.mp4)

---

#### Paste the token into `config.yml`
```yaml
# config.yml Line 8
BotToken: "MjE5NTE5OTk0MDUxMDM1MTQ3.CqTCYw.SFAbKtfK3ydTy1jx2-fTHUJqsPo"
```  

---

#### Invite the bot to your guild

!!! note "Copy the `Application ID` from the application's `General Information` page."
    ![copy client id](../images/copy_application_id.png)  

Go to the following URL and paste your `Application ID` to the page (`Ctrl + V`): https://scarsz.me/authorize

??? hint "How does https://scarsz.me/authorize work?"
    It loads a small client-side running script which checks for a valid application ID length and redirects back to discord.com for OAuth 2 authorization of your bot. Alternatively, you can manually append the application ID to the end of the following link and open it:  
    `https://discordapp.com/oauth2/authorize?scope=bot+applications.commands&client_id=`

!!! note "Select your guild, then click `Authorize`"
    ![authorize the bot](../images/authorize_bot.png){width=325} 

---

#### Enable Developer Mode

!!! note "Go to your Discord settings by clicking on the cog on the bottom left of Discord."
    ![open discord settings](../images/open_discord_settings.png)  

!!! note "Go to the `Advanced` tab and enable `Developer Mode` (Outdated image)"
    ![enable developer mode](../images/enable_developer_mode.png)  

---

#### Set up a basic channel relay

!!! note "Right click the Discord-channel you want to use for chat between Discord and Minecraft and click on `Copy ID`"
    ![copy channel id](../images/copy_channel_id.png)  

Open the config.yml file again.  
Search for the option `Channels` and replace `000000000000000000` with the copied channel ID.
```yaml
# config.yml Line 14
Channels: {"global": "219559668236681216"}
```
_If you use a chat plugin with channel support like HeroChat, LegendChat, LunaChat, TownyChat or VentureChat, you can set up more channels here with their linked Discord channels. For example, if you want to add an "admin" channel it would look like this:_
```yaml
# config.yml Line 14
Channels: {"global": "219559668236681216", "admin": "221419146028646401"}
```
_Keep in mind that "admin" indicates an ingame channel, not a Discord channel name!_  
***  
**Optionally:**
Copy the Channel ID of a second Discord-channel for use as console-channel and paste it into `config.yml`
```yaml
# config.yml Line 17
DiscordConsoleChannelId: "219559838890459137"
```  

---

#### Give the bot the discord permissions it needs to run

!!! note "Open your server settings by clicking on the arrow to the right of the server name and choose `Server Settings`"
    ![open server settings](../images/open_server_settings.png)  

!!! note "Go to the `Roles` tab and create a new role. We've named ours `Bot`. Add the `Administrator` permission (or permissions listed below) to the new role."
    ![create bot role](../images/create_bot_role.png)  

---

!!! note "Switch to the `Members` tab and add the new `Bot` role to your bot by clicking on the `+` next to the bot's name and choosing the role."
    ![Add Bot-rule to bot](../images/add_role.png)  

(Re)start your server

**You're done with installing DiscordSRV!**

Now run through all the config options in [`config.yml`](https://config.discordsrv.com/config/_). You'll be surprised with how many features this plugin has

---

### Advanced Information

#### Giving the bot the administrator permission

Usually it's not recommended to give the bot the Administrator permission, since it gives the bot complete control over your server. We recommend it because it makes the installation process easier on the server owner, and DiscordSRV doesn't do anything that would jeopardize the server. The only way this can be abused is by sharing the bot token with others. Therefore, you should keep the bot token private, and only use it in the context of setting up DiscordSRV. If others were to know your token, they can hijack your bot, so if you suspect the token has been leaked you should reset it immediately in the Discord Developers portal.

However, if you don't feel comfortable with giving the Administrator permission, you can define the following permissions that the bot requires for certain features. This list can/will change and new permissions will need to be added for any new features that require them.
 
---

--8<-- "permissions.txt"

---

#### Role Hierarchy

Make sure the new Bot role is above any roles you want to synchronize using our role/nickname synchronization system (eg. if you want Moderators names to synchronize, you need to have the Bot role above the Moderator role)
