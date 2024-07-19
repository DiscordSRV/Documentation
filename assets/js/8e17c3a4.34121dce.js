"use strict";(self.webpackChunkdiscordsrv_documentation=self.webpackChunkdiscordsrv_documentation||[]).push([[355],{9315:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>d,toc:()=>h});var r=t(4848),a=t(8453),s=t(9489),l=t(7227);const i={title:"alerts.yml"},o="alerts.yml",d={id:"alerts",title:"alerts.yml",description:"This is an advanced feature of DiscordSRV that allows you to send messages to Discord when a game event happens or when a command is run.",source:"@site/docs/alerts.mdx",sourceDirName:".",slug:"/alerts",permalink:"/alerts",draft:!1,unlisted:!1,editUrl:"https://github.com/DiscordSRV/Documentation/edit/master/docs/alerts.mdx",tags:[],version:"current",lastUpdatedBy:"Lncvrt",lastUpdatedAt:1721347317e3,frontMatter:{title:"alerts.yml"},sidebar:"mainSidebar",previous:{title:"Link to Join Setup",permalink:"/installation/link-to-join-setup"},next:{title:"config.yml",permalink:"/config"}},c={},h=[{value:"Available Placeholders",id:"available-placeholders",level:2},{value:"Usage examples",id:"usage-examples",level:2},{value:"AdvancedBan",id:"advancedban",level:3},{value:"LuckPerms",id:"luckperms",level:3},{value:"Content Management Interface (CMI)",id:"content-management-interface-cmi",level:3},{value:"Discord",id:"discord",level:3},{value:"DiscordSRV",id:"discordsrv",level:3},{value:"Essentials",id:"essentials",level:3},{value:"Matrix",id:"matrix",level:3},{value:"MythicMobs",id:"mythicmobs",level:3},{value:"NuVotifier (Votifier)",id:"nuvotifier-votifier",level:3},{value:"PlayerAuctions",id:"playerauctions",level:3},{value:"Purpur",id:"purpur",level:3},{value:"Spartan",id:"spartan",level:3},{value:"Command Triggers",id:"command-triggers",level:3},{value:"Social Spy",id:"social-spy",level:3}];function m(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"alertsyml",children:(0,r.jsx)(n.a,{href:"https://config.discordsrv.com/alerts/_",children:"alerts.yml"})}),"\n",(0,r.jsxs)(n.p,{children:["This is an ",(0,r.jsx)(n.em,{children:"advanced"})," feature of DiscordSRV that allows you to send messages to Discord when a game event happens or when a command is run."]}),"\n",(0,r.jsx)(n.p,{children:"You will need a working knowledge of how Bukkit events work and their properties."}),"\n",(0,r.jsxs)(n.p,{children:["If you aren't sure about what you're doing here, maybe ask a developer or ",(0,r.jsx)(n.a,{href:"https://discordsrv.com/discord/",children:"join our discord support server"})]}),"\n",(0,r.jsx)(n.p,{children:"Refer to the Bukkit API javadoc to find events & properties to use:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://hub.spigotmc.org/javadocs/bukkit",children:"https://hub.spigotmc.org/javadocs/bukkit"})}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Helpful resources for learning how to use SpEL:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://docs.spring.io/spring/docs/4.2.x/spring-framework-reference/html/expressions.html",children:"https://docs.spring.io/"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://dzone.com/articles/learn-spring-expression-language-with-examples",children:"https://dzone.com/"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"available-placeholders",children:"Available Placeholders"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Placeholders"}),(0,r.jsx)(n.th,{children:"Explanation"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{tps}"})}),(0,r.jsx)(n.td,{children:"server TPS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{time}"})}),(0,r.jsx)(n.td,{children:"formatted time"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{date}"})}),(0,r.jsx)(n.td,{children:"formatted date"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{name}"})}),(0,r.jsx)(n.td,{children:"if alert is for a player event, the name of the player"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{ping}"})}),(0,r.jsx)(n.td,{children:"if alert is for a player event, the ping of the player"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{username}"})}),(0,r.jsx)(n.td,{children:"if alert is for a player event, the username of the player"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{displayname}"})}),(0,r.jsx)(n.td,{children:"if alert is for a player event, the display name of the player"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{usernamenoescapes}"})}),(0,r.jsx)(n.td,{children:"if alert is for a player event, the username of the player without escaping discord format (for use in inline code & code block markdown)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{displaynamenoescapes}"})}),(0,r.jsx)(n.td,{children:"if alert is for a player event, the display name of the player without escaping discord format (for use in inline code & code block markdown)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{world}"})}),(0,r.jsx)(n.td,{children:"if alert is for a player event, the world the player is in"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{embedavatarurl}"})}),(0,r.jsx)(n.td,{children:"if alert is for a player event, the avatar url for the player's head, otherwise, the bot's avatar url"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{botavatarurl}"})}),(0,r.jsx)(n.td,{children:"the bot's avatar url"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"{botname}"})}),(0,r.jsx)(n.td,{children:"the bot's name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"%placeholder%"})}),(0,r.jsx)(n.td,{children:"any PlaceholderAPI placeholders, can only use player ones when alert is for a player event"})]})]})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"spel-examples",label:"SpEL Examples",default:!0,children:[(0,r.jsx)(n.p,{children:"Getting a player's IP"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"${#player.address.address.hostAddress}"})}),"\n"]}),(0,r.jsx)(n.p,{children:"Getting a player's game mode"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"${#player.gameMode.name()}"})}),"\n"]}),(0,r.jsx)(n.p,{children:"Getting a player's linked Discord account ID"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"${#discordsrv.accountLinkManager.getDiscordId(player.uniqueId)}"})}),"\n"]}),(0,r.jsx)(n.p,{children:"Getting the online player count"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"${#server.onlinePlayers.size()}"})}),"\n"]}),(0,r.jsx)(n.p,{children:"Getting the status of DiscordSRV's connection to Discord"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"${#jda.status.name()}"})}),"\n"]}),(0,r.jsx)(n.p,{children:"Checking if a player is in a specific world"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"${#player.world.name == 'world_the_end'}"})}),"\n"]}),(0,r.jsx)(n.p,{children:"Checking if it's day in the world that the player is in"}),(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"${#player.world.time > 0 && player.world.time < 13000}"})}),"\n"]})]}),(0,r.jsx)(l.A,{value:"spel-placeholders",label:"SpEL Placeholders",children:(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"SpEL Placeholders"}),(0,r.jsx)(n.th,{children:"Explanation"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"#plugins.<plugin>"})}),(0,r.jsxs)(n.td,{children:["the specified plugin instance, ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"null if doesn't exist"})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"#event"})}),(0,r.jsxs)(n.td,{children:["the event that's triggering the alert ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"if this alert is an event alert"})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"#server"})}),(0,r.jsxs)(n.td,{children:["the Bukkit API server instance, equivalent to ",(0,r.jsx)(n.a,{href:"https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Bukkit.html#getServer()",children:"Bukkit#getServer"})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"#discordsrv"})}),(0,r.jsx)(n.td,{children:"the DiscordSRV plugin instance"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"#player"})}),(0,r.jsxs)(n.td,{children:["the player that the event is for, ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"if this is a player event or command"})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"#sender"})}),(0,r.jsxs)(n.td,{children:["the command sender, ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"if this is a command alert"})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"#command"})}),(0,r.jsxs)(n.td,{children:["the full command, with no leading slash, ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"if this is a command alert"})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"#args"})}),(0,r.jsxs)(n.td,{children:["the command arguments, ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"if this is a command alert"})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"#allArgs"})}),(0,r.jsxs)(n.td,{children:["the command arguments as one string, ",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.code,{children:"if this is a command alert"})})]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"#channel"})}),(0,r.jsx)(n.td,{children:"the destination channel for this alert"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"#jda"})}),(0,r.jsx)(n.td,{children:"DiscordSRV's JDA instance that it uses to communicate with Discord"})]})]})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"usage-examples",children:"Usage examples"}),"\n",(0,r.jsx)(n.h3,{id:"advancedban",children:"AdvancedBan"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsxs)(l.A,{value:"advancedban-punishmentevent",label:"PunishmentEvent",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/DevLeoko/AdvancedBan/blob/master/bukkit/src/main/java/me/leoko/advancedban/bukkit/event/PunishmentEvent.java",children:"PunishmentEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  - Trigger: PunishmentEvent\n    Channel: punishments\n    Embed:\n      Color: "#4287f5"\n      Author:\n        ImageUrl: "https://www.spigotmc.org/data/resource_icons/8/8695.jpg"\n        Name: "${punishment.name} was punished with reason: ${punishment.reason}"\n'})})]})}),"\n",(0,r.jsx)(n.h3,{id:"luckperms",children:"LuckPerms"}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Requires the ",(0,r.jsx)(n.a,{href:"https://github.com/ANutley/LuckPermsAlerts",children:"LuckPermsAlerts"})," plugin"]})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"luckperms-nodeaddevent",label:"NodeAddEvent (Permission)",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LuckPerms/LuckPerms/blob/master/api/src/main/java/net/luckperms/api/event/node/NodeAddEvent.java",children:"NodeAddEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# Example alert to send a message when a permission has been added or removed from a player\n  - Trigger: LPNodeAddEvent\n    Channel: global\n    Conditions:\n    - "#event.getEvent().getNode().getType() == \'PERMISSION\'"\n    - "#event.getEvent().isUser()"\n    Embed:\n      Title: "Player\'s permissions changed"\n      Color: "#00ff00"\n      Description: "`${#event.getEvent().getTarget().getFriendlyName()}` has had the permission `${#event.getEvent().getNode().getPermission()}` set to `${#event.getEvent().getNode().getValue()}`"\n'})})]}),(0,r.jsxs)(l.A,{value:"luckperms-nodeaddevent-1",label:"NodeAddEvent (Group)",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/LuckPerms/LuckPerms/blob/master/api/src/main/java/net/luckperms/api/event/node/NodeAddEvent.java",children:"NodeAddEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# Example alert to send a message when a rank has been added or removed from a player\n  - Trigger: LPNodeAddEvent\n    Channel: global\n    Conditions:\n    - "#event.getEvent().getNode().getType() == \'INHERITANCE\'"\n    - "#event.getEvent().isUser()"\n    Embed:\n      Title: "Player\'s groups changed"\n      Color: "#00ff00"\n      Description: "`${#event.getEvent().getTarget().getFriendlyName()}` has had the group `${#event.getEvent().getNode().getGroupName()}` set to `${#event.getEvent().getNode().getValue()}`"\n'})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"content-management-interface-cmi",children:"Content Management Interface (CMI)"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"cmi-cmiafkenterevent",label:"CMIAfkEnterEvent",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/Zrips/CMI-API/blob/master/src/com/Zrips/CMI/events/CMIAfkEnterEvent.java",children:"CMIAfkEnterEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# Send an AFK alert when someone is AFK\n  - Trigger: CMIAfkEnterEvent\n    Channel: afk\n    Embed:\n      Color: "#869600"\n      Author:\n        ImageUrl: "https://crafthead.net/helm/${player.getUniqueId()}"\n        Name: \'${player.displayName + " is now AFK"}\'\n'})})]}),(0,r.jsxs)(l.A,{value:"cmi-cmiafkleaveevent",label:"CMIAfkLeaveEvent",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/Zrips/CMI-API/blob/master/src/com/Zrips/CMI/events/CMIAfkLeaveEvent.java",children:"CMIAfkLeaveEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# Send an AFK alert when someone is no longer AFK\n  - Trigger: CMIAfkLeaveEvent\n    Channel: afk\n    Embed:\n      Color: "#869600"\n      Author:\n        ImageUrl: "https://crafthead.net/helm/${player.getUniqueId()}"\n        Name: \'${player.displayName + " is no longer AFK"}\'\n'})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"discord",children:"Discord"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"discord-guildmemberupdateboosttimeevent-1",label:"GuildMemberUpdateBoostTimeEvent (Boosting)",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://ci.dv8tion.net/job/JDA/javadoc/net/dv8tion/jda/api/events/guild/member/update/GuildMemberUpdateBoostTimeEvent.html",children:"GuildMemberUpdateBoostTimeEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  - Trigger: GuildMemberUpdateBoostTimeEvent\n    Channel: boosters\n    Conditions:\n    - \'#event.getOldTimeBoosted() == null\'\n    - \'#event.getNewTimeBoosted() != null\'\n    Embed:\n      Color: "#00ff00"\n      Author:\n        ImageUrl: "{embedavatarurl}"\n        Name: "${member.getEffectiveName()} started boosting the server :)"\n'})})]}),(0,r.jsxs)(l.A,{value:"discord-guildmemberupdateboosttimeevent-2",label:"GuildMemberUpdateBoostTimeEvent (Not Boosting)",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://ci.dv8tion.net/job/JDA/javadoc/net/dv8tion/jda/api/events/guild/member/update/GuildMemberUpdateBoostTimeEvent.html",children:"GuildMemberUpdateBoostTimeEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  - Trigger: GuildMemberUpdateBoostTimeEvent\n    Channel: boosters\n    Conditions:\n    - \'#event.getOldTimeBoosted() != null\'\n    - \'#event.getNewTimeBoosted() == null\'\n    Embed:\n      Color: "#00ff00"\n      Author:\n        ImageUrl: "{embedavatarurl}"\n        Name: "${member.getEffectiveName()} is no longer boosting the server :("\n'})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"discordsrv",children:"DiscordSRV"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"discordsrv-accountlinkedevent",label:"AccountLinkedEvent",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/DiscordSRV/DiscordSRV/blob/master/src/main/java/github/scarsz/discordsrv/api/events/AccountLinkedEvent.java",children:"AccountLinkedEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  - Trigger: AccountLinkedEvent\n    Channel: linked\n    Embed:\n      Enabled: true\n      Color: "#ffffff"\n      Author:\n        ImageUrl: "{embedavatarurl}"\n        Name: "User \'${#event.getPlayer().getName()}\' linked their account with the discord user \'${#event.getUser().getAsTag()}\'" # This message will show the users ingame name, not their nickname (for clarification) and the username from discord as well as their #Tag number.\n      Timestamp: true\n'})})]}),(0,r.jsxs)(l.A,{value:"discordsrv-accountunlinkedevent",label:"AccountUnlinkedEvent",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/DiscordSRV/DiscordSRV/blob/master/src/main/java/github/scarsz/discordsrv/api/events/AccountUnlinkedEvent.java",children:"AccountLinkedEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  - Trigger: AccountUnlinkedEvent\n    Channel: linked\n    Embed:\n      Enabled: true\n      Color: "#ffffff"\n      Author:\n        ImageUrl: "{embedavatarurl}"\n        Name: "User \'${#event.getPlayer().getName()}\' unlinked their account from the discord user \'${#event.getDiscordUser().getAsTag()}\'"\n      Timestamp: true\n'})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"essentials",children:"Essentials"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsxs)(l.A,{value:"essentials-afkstatuschangeevent",label:"AfkStatusChangeEvent",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/EssentialsX/Essentials/blob/master/Essentials/src/main/java/net/ess3/api/events/AfkStatusChangeEvent.java",children:"AfkStatusChangeEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# Send an AFK alert when someone is AFK / is no longer AFK\n  - Trigger: AfkStatusChangeEvent\n    Channel: afk\n    Embed:\n      Color: "#869600"\n      Author:\n        ImageUrl: "https://crafthead.net/helm/${#event.getAffected().getUUID()}"\n        Name: \'${#event.getAffected().getName() + " is " + (#event.value ? "now" : "no longer") + " AFK"}\'\n'})})]})}),"\n",(0,r.jsx)(n.h3,{id:"matrix",children:"Matrix"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsxs)(l.A,{value:"matrix-playerviolationevent",label:"PlayerViolationEvent",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/jiangdashao/matrix-api-repo/blob/master/matrix-api/src/main/java/me/rerere/matrix/api/events/PlayerViolationEvent.java",children:"PlayerViolationEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  - Trigger: PlayerViolationEvent\n    Channel: matrix\n    Conditions:\n    - violations >= 5 # don\'t send events for players with < 5 violations\n    Embed:\n      Color: "#ff0000"\n      Author:\n        ImageUrl: "{embedavatarurl}"\n        Name: "{username} failed ${hackType.name().toLowerCase()} check | ${component} | vl:${violations} ping:${player.ping} tps:{tps}"\n'})})]})}),"\n",(0,r.jsx)(n.h3,{id:"mythicmobs",children:"MythicMobs"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsxs)(l.A,{value:"mythicmobs-mythicmobspawnevent",label:"MythicMobSpawnEvent",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://mythicmobs.net/javadocs/io/lumine/xikage/mythicmobs/api/bukkit/events/MythicMobSpawnEvent.html",children:"MythicMobSpawnEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# Example alert to send a message when a MythicMobs ender dragon spawns\n  - Trigger: MythicMobSpawnEvent\n    Channel: mobs\n    Conditions:\n    - \'entity.type.name() == "ENDER_DRAGON"\'\n    Embed:\n      Color: "#4b064c"\n      Author:\n        ImageUrl: "https://vignette.wikia.nocookie.net/minecraft/assets/0/0a/Ender_Dragon.gif/revision/latest?cb=20200819042230"\n        Name: "An ender dragon has spawned!"\n'})})]})}),"\n",(0,r.jsx)(n.h3,{id:"nuvotifier-votifier",children:"NuVotifier (Votifier)"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsxs)(l.A,{value:"nuvotifier-votifierevent",label:"VotifierEvent",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"http://vexsoftware.github.io/votifier/docs/com/vexsoftware/votifier/model/VotifierEvent.html",children:"VotifierEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# Example alert to send a message when a player has voted\n  - Trigger: VotifierEvent\n    Channel: votes\n    Embed:\n      Color: "#00ff00"\n      Author:\n        ImageUrl: "{embedavatarurl}"\n        Name: "${vote.username} voted on ${vote.serviceName}!"\n'})})]})}),"\n",(0,r.jsx)(n.h3,{id:"playerauctions",children:"PlayerAuctions"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsxs)(l.A,{value:"playerauctions-playerauctionbuyevent",label:"PlayerAuctionBuyEvent",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://javadocs.olziedev.com/playerauctions/com/olziedev/playerauctions/api/events/PlayerAuctionBuyEvent.html",children:"PlayerAuctionBuyEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# Example alert to send a message when a player buys something from the auction\n  - Trigger: PlayerAuctionBuyEvent\n    Async: false\n    Channel: auctions\n    Embed:\n      Color: "#48f542" #Green\n      Author:\n        ImageUrl: "https://crafthead.net/helm/${buyer.getUniqueId()}"\n        Name: "${buyer.getName()} bought ${playerAuction.getItem().getType()} for $${price}"\n      Title:\n        Text: "Auction Information:"\n        Url: ""\n      Fields:\n        - "Buyer;${buyer.getName()};true"\n        - "Seller;${playerAuction.getAuctionPlayer().getName()};true"\n        - "Item;${itemStack.getType()};true"\n        - "Amount;${playerAuction.getItem().getAmount()};true"\n        - "Price;$${price};true"\n      Footer:\n        Text: "Auction ID: ${playerAuction.getID()}"\n'})})]}),(0,r.jsxs)(l.A,{value:"playerauctions-playerauctionsellevent",label:"PlayerAuctionSellEvent",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://javadocs.olziedev.com/playerauctions/com/olziedev/playerauctions/api/events/PlayerAuctionSellEvent.html",children:"PlayerAuctionSellEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# Example alert to send a message when a player starts selling something from the auction\n  - Trigger: PlayerAuctionSellEvent\n    Channel: auctions\n    Embed:\n      Color: "#4287f5" #Blue\n      Author:\n        ImageUrl: "https://crafthead.net/helm/${getSeller().getUniqueId()}"\n        Name: "${seller.getName()} is selling ${playerAuction.getItem().getType()} for $${playerAuction.getPrice()}"\n      Title:\n        Text: "Auction Information:"\n        Url: ""\n      Fields:\n        - "Seller;${seller.getName()};true"\n        - "Item;${playerAuction.getItem().getType()};true"\n        - "Amount;${playerAuction.getItem().getAmount()};true"\n        - "Price;$${playerAuction.getPrice()};true"\n      Footer:\n        Text: "Auction ID: ${playerAuction.getID()}"\n'})})]}),(0,r.jsxs)(l.A,{value:"playerauctions-playerauctionexpireevent",label:"PlayerAuctionExpireEvent",children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://javadocs.olziedev.com/playerauctions/com/olziedev/playerauctions/api/events/PlayerAuctionExpireEvent.html",children:"PlayerAuctionExpireEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'# Example alert to send a message when a player\'s item gets removed from the auction\n  - Trigger: PlayerAuctionExpireEvent\n    Channel: auctions\n    Conditions:\n    - \'playerAuction.getExpireTime() == null\'\n    Embed:\n      Color: "#bf2a2a" #Red\n      Author:\n        ImageUrl: "https://crafthead.net/helm/${getPlayerAuction().getAuctionPlayer().getUUID()}"\n        Name: "${playerAuction.getAuctionPlayer().getName()} removed ${getPlayerAuction().getItem().getType()} from the Auction House."\n      Title:\n        Text: "Auction Information:"\n        Url: ""\n      Fields:\n        - "Owner;${playerAuction.getAuctionPlayer().getName()};true"\n        - "Item;${playerAuction.getItem().getType()};true"\n        - "Amount;${playerAuction.getItem().getAmount()};true"\n        - "Price;$${playerAuction.getPrice()};true"\n      Footer:\n        Text: "Auction ID: ${playerAuction.getID()}"\n'})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"purpur",children:"Purpur"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsxs)(l.A,{value:"purpur-playerafkevent",label:"PlayerAFKEvent",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://purpurmc.org/javadoc/org/purpurmc/purpur/event/PlayerAFKEvent.html",children:"PlayerAFKEvent"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  - Trigger: PlayerAFKEvent\n    Channel: afk\n    Embed:\n      Color: "#fbfb54"\n      Author:\n        ImageUrl: "{embedavatarurl}"\n        Name: \'{username} is ${#event.isGoingAfk() ? "now" : "no longer"} AFK\'\n'})})]})}),"\n",(0,r.jsx)(n.h3,{id:"spartan",children:"Spartan"}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsxs)(l.A,{value:"spartan-playerviolationevent",label:"PlayerViolationEvent",default:!0,children:[(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://docs.google.com/document/d/e/2PACX-1vTzeCDiD2goCFO3oWIs3ANwmOvOqI2TLYVkjHO4Z-2q3yTDZPyYZ9bFX4OCwlBamWA_SOP7Ib5uARc8/pub",children:"PlayerViolationEvent.java"})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  - Trigger: PlayerViolationEvent\n    Channel: spartan\n    Conditions:\n      - violation >= 5 # don\'t send events for players with < 5 violations\n    Embed:\n      Color: "#ff0000"\n      Author:\n        ImageUrl: "{embedavatarurl}"\n        Name: "{username} failed ${hackType.name().toLowerCase()} check | ${message} | vl:${violation} ping:${player.ping} tps:{tps}"\n'})})]})}),"\n",(0,r.jsx)(n.h3,{id:"command-triggers",children:"Command Triggers"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"commands-gamemode",label:"/gamemode",default:!0,children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  - Trigger: /gamemode\n    Channel: gamemode\n    Conditions:\n      - \'#player.hasPermission("minecraft.command.gamemode")\'\n    Embed:\n      Color: "#ff0000"\n      Author:\n        ImageUrl: "{embedavatarurl}"\n        Name: "{username} changed game mode to ${#args.get(0)}"\n'})})}),(0,r.jsx)(l.A,{value:"commands-me",label:"/me",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  - Trigger: /me\n    Channel: me\n    Conditions:\n      - \'#player.hasPermission("minecraft.command.me") || #player.hasPermission("essentials.me")\'\n    Embed:\n      Color: "#ff0000"\n      Author:\n        ImageUrl: "{embedavatarurl}"\n        Name: "* {username} ${#allArgs}"\n'})})})]}),"\n",(0,r.jsx)(n.h3,{id:"social-spy",children:"Social Spy"}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(l.A,{value:"commands-pms",label:"Private messages",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  - Trigger: [/msg, /w, /m, /pm, /emsg, /epm, /tell, /etell, /whisper, /ewhisper]\n    Channel: SocialSpy\n    Embed:\n      Color: "#000001"\n      Author:\n        ImageUrl: "{embedavatarurl}"\n        Name: "[{username}> ${#allArgs}]"\n'})})}),(0,r.jsx)(l.A,{value:"commands-socialspy",label:"Commands",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  - Trigger: PlayerCommandPreprocessEvent\n    Channel: SocialSpy\n    Conditions:\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"msg\\"))"      #ignores the /msg command\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"w\\"))"        #ignores the /w command\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"m\\"))"        #ignores the /m command\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"pm\\"))"       #ignores the /pm command\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"emsg\\"))"     #ignores the /emsg command\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"epm\\"))"      #ignores the /epm command\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"tell\\"))"     #ignores the /tell command\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"etell\\"))"    #ignores the /etell command\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"whisper\\"))"  #ignores the /whisper command\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"ewhisper\\"))" #ignores the /ewhisper command\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"r\\"))"        #ignores the /r command\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"er\\"))"       #ignores the /er command\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"reply\\"))"    #ignores the /reply command\n      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"ereply\\"))"   #ignores the /ereply command\n#      - "!(#command.split(\\"\\\\s+|$\\")[0].equals(\\"example\\"))"   #ignores the /example command\n    Embed:\n      Color: "#000001"\n      Author:\n        ImageUrl: "{embedavatarurl}"\n        Name: \'{username} issued command: /${#command}\'\n'})})}),(0,r.jsx)(l.A,{value:"commands-sign",label:"Sign placement",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",children:'  - Trigger: SignChangeEvent\n    Channel: SocialSpy\n    Conditions:\n      - \'getLine(0) + getLine(1) + getLine(2) + getLine(3) != ""\'\n    Embed:\n      Color: "#000001"\n      Author:\n        ImageUrl: "https://crafthead.net/helm/${#event.getPlayer().getUniqueId()}"\n        Name: \'${#event.getPlayer().getName()}\'\n      Description: |-\n        Coords: `[${block.getLocation().getBlockX() + ", " + block.getLocation().getBlockY() + ", " + block.getLocation().getBlockZ()}]`\n        ```\n        ${getLine(0)}\n        ${getLine(1)}\n        ${getLine(2)}\n        ${getLine(3)}\n        ```\n'})})})]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},7227:(e,n,t)=>{t.d(n,{A:()=>l});t(6540);var r=t(8215);const a={tabItem:"tabItem_Ymn6"};var s=t(4848);function l(e){let{children:n,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,l),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>A});var r=t(6540),a=t(8215),s=t(4245),l=t(6347),i=t(6494),o=t(2814),d=t(5167),c=t(9900);function h(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function u(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,s=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[d,h]=p({queryString:t,groupId:a}),[g,v]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,c.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),x=(()=>{const e=d??g;return u({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!u({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),v(e)}),[h,v,s]),tabValues:s}}var v=t(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function f(e){let{className:n,block:t,selectedValue:r,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==r&&(d(n),l(a))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>o.push(e),onKeyDown:h,onClick:c,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=g(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,j.jsx)(f,{...n,...e}),(0,j.jsx)(b,{...n,...e})]})}function A(e){const n=(0,v.A)();return(0,j.jsx)(y,{...e,children:h(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>i});var r=t(6540);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);