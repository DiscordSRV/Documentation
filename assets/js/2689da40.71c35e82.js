"use strict";(self.webpackChunkdiscordsrv_documentation=self.webpackChunkdiscordsrv_documentation||[]).push([[403],{5079:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>x,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var t=i(4848),s=i(8453),o=i(3554),d=i.n(o);const r={},a="Initial Setup",l={id:"installation/initial-setup",title:"Initial Setup",description:"Prerequisites",source:"@site/docs/installation/initial-setup.mdx",sourceDirName:"installation",slug:"/installation/initial-setup",permalink:"/installation/initial-setup",draft:!1,unlisted:!1,editUrl:"https://github.com/DiscordSRV/Documentation/edit/master/docs/installation/initial-setup.mdx",tags:[],version:"current",lastUpdatedBy:"Bermine",lastUpdatedAt:1723667022e3,frontMatter:{},sidebar:"mainSidebar",previous:{title:"Installation",permalink:"/installation/"},next:{title:"Sync Setup",permalink:"/installation/sync-setup"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Install the plugin",id:"install-the-plugin",level:3},{value:"Setting up the bot",id:"setting-up-the-bot",level:3},{value:"Create the Application",id:"create-the-application",level:4},{value:"Configure the Installation tab",id:"configure-the-installation-tab",level:4},{value:"Enable the Privileged Gateway Intents options",id:"enable-the-privileged-gateway-intents-options",level:4},{value:"Starting up the bot",id:"starting-up-the-bot",level:3},{value:"Copy the bot token",id:"copy-the-bot-token",level:4},{value:"Paste the token into <code>config.yml</code>",id:"paste-the-token-into-configyml",level:4},{value:"Invite the bot to your guild",id:"invite-the-bot-to-your-guild",level:4},{value:"Enable Developer Mode",id:"enable-developer-mode",level:4},{value:"Set up a basic channel relay",id:"set-up-a-basic-channel-relay",level:4},{value:"Give the bot the discord permissions it needs to run",id:"give-the-bot-the-discord-permissions-it-needs-to-run",level:4},{value:"Advanced Information",id:"advanced-information",level:3},{value:"Giving the bot the administrator permission",id:"giving-the-bot-the-administrator-permission",level:4},{value:"Server Permissions",id:"server-permissions",level:5},{value:"Channel Permissions",id:"channel-permissions",level:5},{value:"Role Hierarchy",id:"role-hierarchy",level:4}];function p(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h3:"h3",h4:"h4",h5:"h5",hr:"hr",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"initial-setup",children:"Initial Setup"}),"\n",(0,t.jsx)(n.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"server software based on the Bukkit API (CraftBukkit/Spigot/Paper/etc)"}),"\n",(0,t.jsx)(n.li,{children:"ability to read server logs"}),"\n",(0,t.jsx)(n.li,{children:"ability to modify server files"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"install-the-plugin",children:"Install the plugin"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Put ",(0,t.jsx)(n.code,{children:"DiscordSRV-Build-VERSION_NUMBER.jar"})," in the server's ",(0,t.jsx)(n.code,{children:"plugins"})," folder and restart your server (This will generate a folder labeled ",(0,t.jsx)(n.code,{children:"DiscordSRV"})," with all the config files)"]}),"\n",(0,t.jsxs)(n.li,{children:["Open the ",(0,t.jsx)(n.code,{children:"config.yml"})," file in the ",(0,t.jsx)(n.code,{children:"plugins/DiscordSRV/"})," folder with your favorite text editor"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"setting-up-the-bot",children:"Setting up the bot"}),"\n",(0,t.jsx)(n.h4,{id:"create-the-application",children:"Create the Application"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Create a new application at ",(0,t.jsx)(n.a,{href:"https://discord.com/developers/applications/",children:"https://discord.com/developers/applications/"})," by clicking ",(0,t.jsx)(n.code,{children:'"New Application"'})]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"create application",src:i(7564).A+"",width:"1855",height:"659"})})]}),"\n",(0,t.jsx)(n.h4,{id:"configure-the-installation-tab",children:"Configure the Installation tab"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Open the ",(0,t.jsx)(n.code,{children:"Installation"})," tab in the left menu, disable the ",(0,t.jsx)(n.code,{children:"User Install"})," option, and set ",(0,t.jsx)(n.code,{children:"Install Link"})," to ",(0,t.jsx)(n.code,{children:"None"}),"."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"installation tab",src:i(467).A+"",width:"1484",height:"550"})})]}),"\n",(0,t.jsx)(n.h4,{id:"enable-the-privileged-gateway-intents-options",children:"Enable the Privileged Gateway Intents options"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.p,{children:["Make sure to enable both the ",(0,t.jsx)(n.code,{children:"SERVER MEMBERS INTENT"})," and ",(0,t.jsx)(n.code,{children:"MESSAGE CONTENT INTENT"})," options shown in the video below to avoid running into issues with DiscordSRV later on."]}),(0,t.jsx)(d(),{loop:!0,muted:!0,controls:!0,playing:!0,url:"/assets/enable_all_intents.mp4",wrapper:"null"})]}),"\n",(0,t.jsx)(n.h3,{id:"starting-up-the-bot",children:"Starting up the bot"}),"\n",(0,t.jsx)(n.h4,{id:"copy-the-bot-token",children:"Copy the bot token"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["In order to copy the bot's token, you need to reset it first.\nClick the ",(0,t.jsx)(n.code,{children:"Reset Token"})," of the bot from the application page. Keep ",(0,t.jsx)(n.code,{children:"PUBLIC BOT"})," unchecked so players cannot invite your bot to their servers."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"copy bot token",src:i(2968).A+"",width:"1872",height:"853"})})]}),"\n",(0,t.jsxs)(n.h4,{id:"paste-the-token-into-configyml",children:["Paste the token into ",(0,t.jsx)(n.code,{children:"config.yml"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# config.yml Line 8\nBotToken: "MjE5NTE5OTk0MDUxMDM1MTQ3.CqTCYw.SFAbKtfK3ydTy1jx2-fTHUJqsPo"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"invite-the-bot-to-your-guild",children:"Invite the bot to your guild"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Copy the ",(0,t.jsx)(n.code,{children:"Application ID"})," from the application's ",(0,t.jsx)(n.code,{children:"General Information"})," page."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"copy client id",src:i(1491).A+"",width:"1850",height:"659"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Go to the following URL and paste your ",(0,t.jsx)(n.code,{children:"Application ID"})," to the page (",(0,t.jsx)(n.code,{children:"Ctrl + V"}),"): ",(0,t.jsx)(n.a,{href:"https://scarsz.me/authorize",children:"https://scarsz.me/authorize"})]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:['"How does ',(0,t.jsx)(n.a,{href:"https://scarsz.me/authorize",children:"https://scarsz.me/authorize"}),' work?"']}),(0,t.jsxs)(n.p,{children:["It loads a small client-side running script which checks for a valid application ID length and redirects back to discord.com for OAuth 2 authorization of your bot. Alternatively, you can manually append the application ID to the end of the following link and open it:",(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.code,{children:"https://discordapp.com/oauth2/authorize?scope=bot+applications.commands&client_id="})]})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Select your guild, then click ",(0,t.jsx)(n.code,{children:"Authorize"})]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"authorize the bot",src:i(6788).A+"",width:"453",height:"817"})})]}),"\n",(0,t.jsx)(n.h4,{id:"enable-developer-mode",children:"Enable Developer Mode"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Go to your Discord settings by clicking on the ",(0,t.jsx)(n.code,{children:"User Settings"})," cog on the bottom left of your Discord."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"open discord settings",src:i(5872).A+"",width:"349",height:"88"})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.code,{children:"Advanced"})," tab and enable ",(0,t.jsx)(n.code,{children:"Developer Mode"})]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"enable developer mode",src:i(3079).A+"",width:"1048",height:"547"})})]}),"\n",(0,t.jsx)(n.h4,{id:"set-up-a-basic-channel-relay",children:"Set up a basic channel relay"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Right click the Discord-channel you want to use for chat between Discord and Minecraft and click on ",(0,t.jsx)(n.code,{children:"Copy ID"})]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"copy channel id",src:i(2290).A+"",width:"308",height:"422"})})]}),"\n",(0,t.jsxs)(n.p,{children:["Open the config.yml file again.",(0,t.jsx)(n.br,{}),"\n","Search for the option ",(0,t.jsx)(n.code,{children:"Channels"})," and replace ",(0,t.jsx)(n.code,{children:"000000000000000000"})," with the copied channel ID."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# config.yml Line 14\nChannels: {"global": "219559668236681216"}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:'If you use a chat plugin with channel support like HeroChat, LegendChat, LunaChat, TownyChat or VentureChat, you can set up more channels here with their linked Discord channels. For example, if you want to add an "admin" channel it would look like this:'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# config.yml Line 14\nChannels: {"global": "219559668236681216", "admin": "221419146028646401"}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:'Keep in mind that "admin" indicates an ingame channel, not a Discord channel name!'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Optionally:"}),"\nCopy the Channel ID of a second Discord-channel for use as console-channel and paste it into ",(0,t.jsx)(n.code,{children:"config.yml"})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'# config.yml Line 17\nDiscordConsoleChannelId: "219559838890459137"\n'})}),"\n",(0,t.jsx)(n.h4,{id:"give-the-bot-the-discord-permissions-it-needs-to-run",children:"Give the bot the discord permissions it needs to run"}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Open your server settings by clicking on the name of your server and choose ",(0,t.jsx)(n.code,{children:"Server Settings"})]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"open server settings",src:i(7721).A+"",width:"239",height:"514"})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Go to the ",(0,t.jsx)(n.code,{children:"Roles"})," tab and create a new role. We've named ours ",(0,t.jsx)(n.code,{children:"Bot"}),". Add the ",(0,t.jsx)(n.code,{children:"Administrator"})," permission (or the ",(0,t.jsx)(n.a,{href:"#server-permissions",children:"permissions listed below"}),") to the new role."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"create bot role",src:i(1341).A+"",width:"1435",height:"886"})})]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.mdxAdmonitionTitle,{}),(0,t.jsxs)(n.p,{children:["Switch to the ",(0,t.jsx)(n.code,{children:"Members"})," tab and add the new ",(0,t.jsx)(n.code,{children:"Bot"})," role to your bot by clicking on the ",(0,t.jsx)(n.code,{children:"+"})," next to the bot's name and choosing the role."]}),(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"Add Bot-role to bot",src:i(6768).A+"",width:"1435",height:"886"})})]}),"\n",(0,t.jsx)(n.p,{children:"(Re)start your server"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"You're done with installing DiscordSRV!"})}),"\n",(0,t.jsxs)(n.p,{children:["Now run through all the config options in ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/config/_",children:(0,t.jsx)(n.code,{children:"config.yml"})}),". You'll be surprised with how many features this plugin has"]}),"\n",(0,t.jsx)(n.h3,{id:"advanced-information",children:"Advanced Information"}),"\n",(0,t.jsx)(n.h4,{id:"giving-the-bot-the-administrator-permission",children:"Giving the bot the administrator permission"}),"\n",(0,t.jsx)(n.p,{children:"Usually it's not recommended to give the bot the Administrator permission, since it gives the bot complete control over your server. We recommend it because it makes the installation process easier on the server owner, and DiscordSRV doesn't do anything that would jeopardize the server. The only way this can be abused is by sharing the bot token with others. Therefore, you should keep the bot token private, and only use it in the context of setting up DiscordSRV. If others were to know your token, they can hijack your bot, so if you suspect the token has been leaked you should reset it immediately in the Discord Developers portal."}),"\n",(0,t.jsx)(n.p,{children:"However, if you don't feel comfortable with giving the Administrator permission, you can define the following permissions that the bot requires for certain features. This list can/will change and new permissions will need to be added for any new features that require them."}),"\n",(0,t.jsx)(n.h5,{id:"server-permissions",children:"Server Permissions"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Permission"}),(0,t.jsx)(n.th,{children:"Features"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Manage Roles"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/synchronization/GroupRoleSynchronizationGroupsAndRolesToSync",children:"role synchronization"})," and ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/config/MinecraftDiscordAccountLinkedRoleNameToAddUserTo",children:"adding roles to linked players"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Manage Channels"})}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/messages/ChannelTopicUpdaterChatChannelTopicFormat",children:"channel topic updater"})," and the ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/voice/_",children:"voice module"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Ban Members"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/synchronization/BanSynchronizationDiscordToMinecraft",children:"ban synchronization"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Manage Nicknames"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/synchronization/NicknameSynchronizationEnabled",children:"nickname synchronization"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Manage Webhooks"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/config/Experiment_WebhookChatMessageDelivery",children:"experimental webhook usage"})})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsxs)(n.td,{children:["(Server-wide permission is ",(0,t.jsx)(n.em,{children:"recommended"}),", but can be applied on a per-channel basis)"]})]})]})]}),"\n",(0,t.jsx)(n.h5,{id:"channel-permissions",children:"Channel Permissions"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Permission"}),(0,t.jsx)(n.th,{children:"Features"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"View Channel"})," and ",(0,t.jsx)(n.code,{children:"Send Messages"})]}),(0,t.jsxs)(n.td,{children:["Required for DiscordSRV's channel options (including ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/config/DiscordConsoleChannelId",children:"console"})," and ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/voice/Lobby%20channel",children:"voice lobby"}),"), the ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/voice/Voice%20category",children:"voice module category"})," and any other channels you want for ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/config/DiscordCannedResponses",children:"canned responses"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Manage Messages"})}),(0,t.jsxs)(n.td,{children:["when messages are deleted by ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/config/DiscordChatChannelListCommandEnabled",children:"playerlist"})," & ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/config/DiscordChatChannelConsoleCommandEnabled",children:"chat channel commands"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Embed Links"})}),(0,t.jsxs)(n.td,{children:["optionally for embedding ingame-posted links and required when embed messages are used ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/messages/MinecraftPlayerDeathMessage",children:"death"}),", ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/messages/MinecraftPlayerJoinMessage",children:"join/Leave"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"Mention @everyone, @here and All Roles"})}),(0,t.jsxs)(n.td,{children:["for mentioning @everyone if added to ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/config/DiscordChatChannelAllowedMentions",children:"allowed mentions in config.yml"})," and ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/config/DiscordChatChannelTranslateMentions",children:"mentions enabled"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"Add Reactions"})," and ",(0,t.jsx)(n.code,{children:"Read Message History"})]}),(0,t.jsxs)(n.td,{children:['for when the bot reacts with "\ud83d\udcac" and "\u2757" to notify a ',(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/config/DiscordChatChannelTruncateLength",children:"truncated message"})," is being sent from Discord to Minecraft"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.code,{children:"Move Members"}),", ",(0,t.jsx)(n.code,{children:"Mute Members"})," and ",(0,t.jsx)(n.code,{children:"Manage Permissions"})]}),(0,t.jsxs)(n.td,{children:["required for the ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/voice/Lobby%20channel",children:"voice lobby"})," and ",(0,t.jsx)(n.a,{href:"https://config.discordsrv.com/voice/Voice%20category",children:"voice category"})]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"role-hierarchy",children:"Role Hierarchy"}),"\n",(0,t.jsx)(n.p,{children:"Make sure the new Bot role is above any roles you want to synchronize using our role/nickname synchronization system (eg. if you want Moderators names to synchronize, you need to have the Bot role above the Moderator role)"})]})}function x(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},6768:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/add_role-6abe3baaa7c64647d86d3750a2585325.gif"},6788:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/authorize_bot-7008505bd1f258279d5f88cc45b06a99.png"},1491:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/copy_application_id-12a67f827e2b6847e2fe9c9530be4879.png"},2290:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/copy_channel_id-167ee01e96f865126c1b36f226f0cfcd.png"},7564:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/create_application-aac753066bacce6b0eb4c5c3779fe202.png"},1341:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/create_bot_role-a7f278fa8dd572e53a6ceb1e623115ce.gif"},3079:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/enable_developer_mode-cecb75dab9770a7e941aea34f722cc79.png"},467:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/installation_tab-0afba60db507fde9e26f18001768d3a7.png"},5872:(e,n,i)=>{i.d(n,{A:()=>t});const t="data:image/png;base64,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"},7721:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/open_server_settings-4ecd3e1537f6d8575863caf52e9a25cd.png"},2968:(e,n,i)=>{i.d(n,{A:()=>t});const t=i.p+"assets/images/reset_token-d8fdbf4a9551b9cb207296f00d3319d1.png"}}]);