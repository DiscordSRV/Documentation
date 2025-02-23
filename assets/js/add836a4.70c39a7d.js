"use strict";(self.webpackChunkdiscordsrv_documentation=self.webpackChunkdiscordsrv_documentation||[]).push([[284],{7804:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>n,default:()=>t,frontMatter:()=>i,metadata:()=>c,toc:()=>h});var l=s(4848),d=s(8453);const i={},n="Placeholders",c={id:"ascension/placeholders",title:"placeholders",description:"This is documentation for a future version of DiscordSRV and information on this page does not apply to DiscordSRV version 1 and may be inaccurate in general",source:"@site/docs/ascension/placeholders.md",sourceDirName:"ascension",slug:"/ascension/placeholders",permalink:"/ascension/placeholders",draft:!1,unlisted:!1,editUrl:"https://github.com/DiscordSRV/Documentation/edit/master/docs/ascension/placeholders.md",tags:[],version:"current",lastUpdatedBy:"Vankka",lastUpdatedAt:174031302e4,frontMatter:{},sidebar:"ascensionSidebar",previous:{title:"security",permalink:"/ascension/security"}},o={},h=[{value:"Formatting",id:"formatting",level:2},{value:"Checking for empty placeholders",id:"checking-for-empty-placeholders",level:3},{value:"Placeholder Suffixes",id:"placeholder-suffixes",level:3},{value:"Recursive Placeholders",id:"recursive-placeholders",level:3},{value:"Discord",id:"discord",level:2},{value:"User",id:"user",level:3},{value:"<code>%user_id%</code>",id:"user_id",level:4},{value:"<code>%user_name%</code>",id:"user_name",level:4},{value:"<code>%user_tag%</code>",id:"user_tag",level:4},{value:"<code>%user_effective_name%</code>",id:"user_effective_name",level:4},{value:"<code>%user_discriminator%</code>",id:"user_discriminator",level:4},{value:"<code>%user_avatar_url%</code>",id:"user_avatar_url",level:4},{value:"<code>%user_effective_avatar_url%</code>",id:"user_effective_avatar_url",level:4},{value:"User (Server Member)",id:"user-server-member",level:3},{value:"<code>%user_effective_server_name%</code>",id:"user_effective_server_name",level:4},{value:"<code>%user_effective_server_avatar_url%</code>",id:"user_effective_server_avatar_url",level:4},{value:"<code>%user_color%</code>",id:"user_color",level:4},{value:"<code>%user_isboosting%</code>",id:"user_isboosting",level:4},{value:"<code>%user_time_boosted%</code>",id:"user_time_boosted",level:4},{value:"<code>%user_time_joined%</code>",id:"user_time_joined",level:4},{value:"<code>%user_highest_role_&lt;subplaceholder&gt;%</code>",id:"user_highest_role_subplaceholder",level:4},{value:"<code>%user_hoisted_role_&lt;subplaceholder&gt;%</code>",id:"user_hoisted_role_subplaceholder",level:4},{value:"<code>%user_roles%</code>",id:"user_roles",level:4},{value:"<code>%user_server%</code>",id:"user_server",level:4},{value:"Message",id:"message",level:3},{value:"<code>%message_id%</code>",id:"message_id",level:4},{value:"<code>%message_content%</code>",id:"message_content",level:4},{value:"<code>%message_jump_url%</code>",id:"message_jump_url",level:4},{value:"<code>%message_reply%</code>",id:"message_reply",level:4},{value:"<code>%message_attachments%</code>",id:"message_attachments",level:4},{value:"<code>%message_server%</code>",id:"message_server",level:4},{value:"<code>%message_user%</code>",id:"message_user",level:4},{value:"<code>%message_channel%</code>",id:"message_channel",level:4},{value:"Role",id:"role",level:3},{value:"<code>%role_id%</code>",id:"role_id",level:4},{value:"<code>%role_name%</code>",id:"role_name",level:4},{value:"<code>%role_color%</code>",id:"role_color",level:4},{value:"<code>%role_server%</code>",id:"role_server",level:4},{value:"Channel",id:"channel",level:3},{value:"<code>%channel_id%</code>",id:"channel_id",level:4},{value:"<code>%channel_name%</code>",id:"channel_name",level:4},{value:"<code>%channel_jump_url%</code>",id:"channel_jump_url",level:4},{value:"Server",id:"server",level:3},{value:"<code>%server_id%</code>",id:"server_id",level:4},{value:"<code>%server_name%</code>",id:"server_name",level:4},{value:"<code>%server_member_count%</code>",id:"server_member_count",level:4},{value:"Minecraft",id:"minecraft",level:2},{value:"Player",id:"player",level:3},{value:"<code>%player_name%</code>",id:"player_name",level:4},{value:"<code>%player_uuid%</code>",id:"player_uuid",level:4},{value:"<code>%player_skin%</code>",id:"player_skin",level:4},{value:"<code>%player_avatar_url%</code>",id:"player_avatar_url",level:4},{value:"<code>%player_prefix%</code>",id:"player_prefix",level:4},{value:"<code>%player_suffix%</code>",id:"player_suffix",level:4},{value:"<code>%player_meta_prefix%</code>",id:"player_meta_prefix",level:4},{value:"<code>%player_meta_suffix%</code>",id:"player_meta_suffix",level:4},{value:"<code>%player_permission_prefix%</code>",id:"player_permission_prefix",level:4},{value:"<code>%player_permission_suffix%</code>",id:"player_permission_suffix",level:4},{value:"Skin",id:"skin",level:3},{value:"<code>%skin_texture_id%</code>",id:"skin_texture_id",level:4},{value:"<code>%skin_model%</code>",id:"skin_model",level:4},{value:"Color",id:"color",level:2},{value:"<code>%color_rgb%</code>",id:"color_rgb",level:4},{value:"<code>%color_hex%</code>",id:"color_hex",level:4},{value:"<code>%color_red%</code>",id:"color_red",level:4},{value:"<code>%color_green%</code>",id:"color_green",level:4},{value:"<code>%color_blue%</code>",id:"color_blue",level:4},{value:"UUID",id:"uuid",level:2},{value:"<code>%uuid_short%</code>",id:"uuid_short",level:4},{value:"<code>%uuid_version%</code>",id:"uuid_version",level:4},{value:"<code>%uuid_isgeyser%</code>",id:"uuid_isgeyser",level:4},{value:"<code>%uuid_isoffline%</code>",id:"uuid_isoffline",level:4},{value:"Global placeholders",id:"global-placeholders",level:2},{value:"<code>%discord_invite%</code>",id:"discord_invite",level:4},{value:"<code>%text:&#39;&lt;text&gt;&#39;&quot;</code>",id:"texttext",level:4},{value:"Date formatting",id:"date-formatting",level:2},{value:"(Useful) Formatting characters",id:"useful-formatting-characters",level:4},{value:"Discord timestamp formatting",id:"discord-timestamp-formatting",level:3},{value:"Styles",id:"styles",level:4},{value:"Integrations",id:"integrations",level:2},{value:"Bukkit: PlaceholderAPI",id:"bukkit-placeholderapi",level:3},{value:"Using DiscordSRV placeholders in other plugins",id:"using-discordsrv-placeholders-in-other-plugins",level:4},{value:"Using placeholders in DiscordSRV",id:"using-placeholders-in-discordsrv",level:4},{value:"Fabric: Text Placeholder API",id:"fabric-text-placeholder-api",level:3},{value:"Using placeholders in DiscordSRV",id:"using-placeholders-in-discordsrv-1",level:4}];function a(e){const r={a:"a",admonition:"admonition",br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.admonition,{type:"danger",children:(0,l.jsxs)(r.p,{children:["This is documentation for ",(0,l.jsx)(r.strong,{children:"a future version of DiscordSRV"})," and information on this page does not apply to DiscordSRV version 1 and may be ",(0,l.jsx)(r.strong,{children:"inaccurate"})," in general"]})}),"\n",(0,l.jsx)(r.h1,{id:"placeholders",children:"Placeholders"}),"\n",(0,l.jsx)(r.p,{children:"DiscordSRV contains many placeholders which allows you to customise messages entirely to your liking."}),"\n",(0,l.jsx)(r.p,{children:"Information about which placeholders can be used where can be found in the config."}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsx)(r.h2,{id:"formatting",children:"Formatting"}),"\n",(0,l.jsxs)(r.admonition,{title:"General Formatting Help",type:"info",children:[(0,l.jsxs)(r.p,{children:["Information on formatting Minecraft messages can be found ",(0,l.jsx)(r.a,{href:"https://github.com/Vankka/EnhancedLegacyText/wiki/Format",children:"here"}),"."]}),(0,l.jsxs)(r.p,{children:["Information on Discord markdown can be found ",(0,l.jsx)(r.a,{href:"https://support.discord.com/hc/en-us/articles/210298617",children:"here"})]})]}),"\n",(0,l.jsx)(r.h3,{id:"checking-for-empty-placeholders",children:"Checking for empty placeholders"}),"\n",(0,l.jsx)(r.p,{children:"You can take empty placeholders into account and use an alternate placeholder instead."}),"\n",(0,l.jsxs)(r.p,{children:["For example ",(0,l.jsx)(r.code,{children:"%player_meta_prefix|player_prefix%"}),". This first looks for ",(0,l.jsx)(r.code,{children:"%player_meta_prefix%"})," if that is empty, than ",(0,l.jsx)(r.code,{children:"%player_prefix%"})," is used instead."]}),"\n",(0,l.jsx)(r.h3,{id:"placeholder-suffixes",children:"Placeholder Suffixes"}),"\n",(0,l.jsx)(r.p,{children:"Placeholders which provide a list of items can have a suffix set between each item to separate them."}),"\n",(0,l.jsxs)(r.p,{children:["For example ",(0,l.jsx)(r.code,{children:"%user_roles:', '%"}),", lists the users roles seperated by a comma and a space (",(0,l.jsx)(r.code,{children:"', '"}),")."]}),"\n",(0,l.jsx)(r.h3,{id:"recursive-placeholders",children:"Recursive Placeholders"}),"\n",(0,l.jsx)(r.p,{children:"Recursive placeholders are a special type of placeholder which allow you to specify what information you want from it."}),"\n",(0,l.jsxs)(r.p,{children:["In this example we will be using ",(0,l.jsx)(r.code,{children:"%user_highest_role_<role>%"}),". The ",(0,l.jsx)(r.code,{children:"%user_highest_role_"})," part returns the highest role of the user and turns it into a ",(0,l.jsx)(r.a,{href:"#role",children:"role placeholder"}),"."]}),"\n",(0,l.jsxs)(r.p,{children:["You can then use any ",(0,l.jsx)(r.a,{href:"#role",children:"role"})," related placeholders. For example ",(0,l.jsx)(r.code,{children:"%user_highest_role_name%"})," will return the highest roles name, or ",(0,l.jsx)(r.code,{children:"%user_highest_role_color%"})," returns the color of the highest role."]}),"\n",(0,l.jsx)(r.p,{children:"This same premise is used for all the re lookup placeholders."}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsx)(r.h2,{id:"discord",children:"Discord"}),"\n",(0,l.jsx)(r.h3,{id:"user",children:"User"}),"\n",(0,l.jsx)(r.h4,{id:"user_id",children:(0,l.jsx)(r.code,{children:"%user_id%"})}),"\n",(0,l.jsxs)(r.p,{children:["The ID for the Discord user",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"185828288466255874"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_name",children:(0,l.jsx)(r.code,{children:"%user_name%"})}),"\n",(0,l.jsxs)(r.p,{children:["The username of the Discord user",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"myusername1"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_tag",children:(0,l.jsx)(r.code,{children:"%user_tag%"})}),"\n",(0,l.jsxs)(r.p,{children:["The Discord user's username, including discriminator if they have one",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"myusername1#1234"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_effective_name",children:(0,l.jsx)(r.code,{children:"%user_effective_name%"})}),"\n",(0,l.jsxs)(r.p,{children:["The effective display name of the Discord user",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"My Display Name"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_discriminator",children:(0,l.jsx)(r.code,{children:"%user_discriminator%"})}),"\n",(0,l.jsxs)(r.p,{children:["The user's discriminator (This is being phased out and is only truly useful for bots)",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"0000"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_avatar_url",children:(0,l.jsx)(r.code,{children:"%user_avatar_url%"})}),"\n",(0,l.jsxs)(r.p,{children:["The Discord user's avatar (if they do not have one set, this will be empty)",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"https://cdn.discordapp.com/avatars/827880927199494164/bdde9008a644ecc62d97c6f9153462c7.webp?size=64"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_effective_avatar_url",children:(0,l.jsx)(r.code,{children:"%user_effective_avatar_url%"})}),"\n",(0,l.jsxs)(r.p,{children:["The Discord user's avatar that is currently active (if they do not have one set, this will provide the default Discord avatar)",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"https://cdn.discordapp.com/avatars/827880927199494164/bdde9008a644ecc62d97c6f9153462c7.webp?size=64"})]}),"\n",(0,l.jsx)(r.h3,{id:"user-server-member",children:"User (Server Member)"}),"\n",(0,l.jsx)(r.h4,{id:"user_effective_server_name",children:(0,l.jsx)(r.code,{children:"%user_effective_server_name%"})}),"\n",(0,l.jsxs)(r.p,{children:["The nickname name of this Discord server member",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"My cool nickname"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_effective_server_avatar_url",children:(0,l.jsx)(r.code,{children:"%user_effective_server_avatar_url%"})}),"\n",(0,l.jsxs)(r.p,{children:["The avatar url that that is active for this server member",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"https://cdn.discordapp.com/avatars/827880927199494164/bdde9008a644ecc62d97c6f9153462c7.webp?size=64"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_color",children:(0,l.jsx)(r.code,{children:"%user_color%"})}),"\n",(0,l.jsxs)(r.p,{children:["The color of the user's highest role that has a color. May be used with ",(0,l.jsx)(r.a,{href:"#color",children:"color"})," subplaceholders.",(0,l.jsx)(r.br,{}),"\n","Example usages: ",(0,l.jsx)(r.code,{children:"%user_color%"}),", ",(0,l.jsx)(r.code,{children:"%user_color_hex%"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_isboosting",children:(0,l.jsx)(r.code,{children:"%user_isboosting%"})}),"\n",(0,l.jsxs)(r.p,{children:["Whether this member is currently boosting the server",(0,l.jsx)(r.br,{}),"\n","Example values: ",(0,l.jsx)(r.code,{children:"false"}),", ",(0,l.jsx)(r.code,{children:"true"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_time_boosted",children:(0,l.jsx)(r.code,{children:"%user_time_boosted%"})}),"\n",(0,l.jsxs)(r.p,{children:["The time the user started boosting, use with ",(0,l.jsx)(r.a,{href:"#date-formatting",children:"date formatting"}),(0,l.jsx)(r.br,{}),"\n","Example usage: ",(0,l.jsx)(r.code,{children:"%user_time_boosted:'dd-MM-yyyy'%"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_time_joined",children:(0,l.jsx)(r.code,{children:"%user_time_joined%"})}),"\n",(0,l.jsxs)(r.p,{children:["The time the user started joined, use with ",(0,l.jsx)(r.a,{href:"#date-formatting",children:"date formatting"}),(0,l.jsx)(r.br,{}),"\n","Example usage: ",(0,l.jsx)(r.code,{children:"%user_time_joined:'dd-MM-yyyy%"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_highest_role_subplaceholder",children:(0,l.jsx)(r.code,{children:"%user_highest_role_<subplaceholder>%"})}),"\n",(0,l.jsxs)(r.p,{children:["The highest role of the member. Replace ",(0,l.jsx)(r.code,{children:"<subplaceholder>"})," with any of the ",(0,l.jsx)(r.a,{href:"#role",children:"role"})," placeholders. More information about recursive placeholders ",(0,l.jsx)(r.a,{href:"#recursive-placeholders",children:"here"}),(0,l.jsx)(r.br,{}),"\n","Example usages: ",(0,l.jsx)(r.code,{children:"%user_highest_role_name%"}),", ",(0,l.jsx)(r.code,{children:"%user_highest_role_color%"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_hoisted_role_subplaceholder",children:(0,l.jsx)(r.code,{children:"%user_hoisted_role_<subplaceholder>%"})}),"\n",(0,l.jsxs)(r.p,{children:["The highest hoisted role of the member. Replace ",(0,l.jsx)(r.code,{children:"<subplaceholder>"})," with any of the ",(0,l.jsx)(r.a,{href:"#role",children:"role"}),". More information about recursive placeholders ",(0,l.jsx)(r.a,{href:"#recursive-placeholders",children:"here"}),(0,l.jsx)(r.br,{}),"\n","Example usages: ",(0,l.jsx)(r.code,{children:"%user_hoisted_role_name%"}),", ",(0,l.jsx)(r.code,{children:"%user_hoisted_role_color%"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_roles",children:(0,l.jsx)(r.code,{children:"%user_roles%"})}),"\n",(0,l.jsxs)(r.p,{children:["The roles of the member. You can specify the separator for multiple roles as a suffix, more information can be found ",(0,l.jsx)(r.a,{href:"#placeholder-suffixes",children:"here"}),(0,l.jsx)(r.br,{}),"\n","Example usages: ",(0,l.jsx)(r.code,{children:"%user_roles%"}),", ",(0,l.jsx)(r.code,{children:"%user_roles:', '%"})]}),"\n",(0,l.jsx)(r.h4,{id:"user_server",children:(0,l.jsx)(r.code,{children:"%user_server%"})}),"\n",(0,l.jsxs)(r.p,{children:["The server for user membership, for using ",(0,l.jsx)(r.a,{href:"#server",children:"Server"})," placeholders",(0,l.jsx)(r.br,{}),"\n","Example usage: ",(0,l.jsx)(r.code,{children:"%user_server_name%"})]}),"\n",(0,l.jsx)(r.h3,{id:"message",children:"Message"}),"\n",(0,l.jsx)(r.h4,{id:"message_id",children:(0,l.jsx)(r.code,{children:"%message_id%"})}),"\n",(0,l.jsxs)(r.p,{children:["The id of message",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"135796844314886144"})]}),"\n",(0,l.jsx)(r.h4,{id:"message_content",children:(0,l.jsx)(r.code,{children:"%message_content%"})}),"\n",(0,l.jsxs)(r.p,{children:["The content of the message",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"Hello"})]}),"\n",(0,l.jsx)(r.h4,{id:"message_jump_url",children:(0,l.jsx)(r.code,{children:"%message_jump_url%"})}),"\n",(0,l.jsxs)(r.p,{children:["The URL to jump to this message",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"https://discord.com/channels/135634590575493120/137421286501646336/1228806460172140616"})]}),"\n",(0,l.jsx)(r.h4,{id:"message_reply",children:(0,l.jsx)(r.code,{children:"%message_reply%"})}),"\n",(0,l.jsxs)(r.p,{children:["The format for messages which contain a reply. The format for the content of this placeholder can be edited in the config (",(0,l.jsx)(r.code,{children:"channels.*.discord-to-minecraft.reply-format"}),")"]}),"\n",(0,l.jsx)(r.h4,{id:"message_attachments",children:(0,l.jsx)(r.code,{children:"%message_attachments%"})}),"\n",(0,l.jsxs)(r.p,{children:["The attachments in the message sent. The format for the content of this placeholder can be edited in the config (",(0,l.jsx)(r.code,{children:"channels.*.discord-to-minecraft.attachment-format"}),"). You can specify the separator for multiple attachments as a suffix, more information can be found ",(0,l.jsx)(r.a,{href:"#placeholder-suffixes",children:"here"}),(0,l.jsx)(r.br,{}),"\n","Example usages: ",(0,l.jsx)(r.code,{children:"%message_attachments%"}),", ",(0,l.jsx)(r.code,{children:"%message_attachments:', '%"})]}),"\n",(0,l.jsx)(r.h4,{id:"message_server",children:(0,l.jsx)(r.code,{children:"%message_server%"})}),"\n",(0,l.jsxs)(r.p,{children:["The server this message was sent in, if any, for using ",(0,l.jsx)(r.a,{href:"#server",children:"Server"})," placeholders",(0,l.jsx)(r.br,{}),"\n","Example usage: ",(0,l.jsx)(r.code,{children:"%message_server_name%"})]}),"\n",(0,l.jsx)(r.h4,{id:"message_user",children:(0,l.jsx)(r.code,{children:"%message_user%"})}),"\n",(0,l.jsxs)(r.p,{children:["The user that sent this message, for using ",(0,l.jsx)(r.a,{href:"#user",children:"User"})," placeholders",(0,l.jsx)(r.br,{}),"\n","Example usage: ",(0,l.jsx)(r.code,{children:"%message_user_name%"})]}),"\n",(0,l.jsx)(r.h4,{id:"message_channel",children:(0,l.jsx)(r.code,{children:"%message_channel%"})}),"\n",(0,l.jsxs)(r.p,{children:["The channel this message was sent in, for using ",(0,l.jsx)(r.a,{href:"#channel",children:"Channel"})," placeholders",(0,l.jsx)(r.br,{}),"\n","Example usage: ",(0,l.jsx)(r.code,{children:"%message_channel_name%"})]}),"\n",(0,l.jsx)(r.h3,{id:"role",children:"Role"}),"\n",(0,l.jsx)(r.h4,{id:"role_id",children:(0,l.jsx)(r.code,{children:"%role_id%"})}),"\n",(0,l.jsxs)(r.p,{children:["The id of the role",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"135634730535092224"})]}),"\n",(0,l.jsx)(r.h4,{id:"role_name",children:(0,l.jsx)(r.code,{children:"%role_name%"})}),"\n",(0,l.jsxs)(r.p,{children:["The name of the Discord role",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"Moderator"})]}),"\n",(0,l.jsx)(r.h4,{id:"role_color",children:(0,l.jsx)(r.code,{children:"%role_color%"})}),"\n",(0,l.jsxs)(r.p,{children:["The color of the Discord role. May be used with ",(0,l.jsx)(r.a,{href:"#color",children:"color"})," subplaceholders.",(0,l.jsx)(r.br,{}),"\n","Example usages: ",(0,l.jsx)(r.code,{children:"%role_color%"}),", ",(0,l.jsx)(r.code,{children:"%role_color_hex%"})]}),"\n",(0,l.jsx)(r.h4,{id:"role_server",children:(0,l.jsx)(r.code,{children:"%role_server%"})}),"\n",(0,l.jsxs)(r.p,{children:["The server of the role, for using ",(0,l.jsx)(r.a,{href:"#server",children:"Server"})," placeholders",(0,l.jsx)(r.br,{}),"\n","Example usage: ",(0,l.jsx)(r.code,{children:"%role_server_name%"})]}),"\n",(0,l.jsx)(r.h3,{id:"channel",children:"Channel"}),"\n",(0,l.jsx)(r.h4,{id:"channel_id",children:(0,l.jsx)(r.code,{children:"%channel_id%"})}),"\n",(0,l.jsxs)(r.p,{children:["The id of the channel",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"137421286501646336"})]}),"\n",(0,l.jsx)(r.h4,{id:"channel_name",children:(0,l.jsx)(r.code,{children:"%channel_name%"})}),"\n",(0,l.jsxs)(r.p,{children:["The name of the channel",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"discordsrv-test-chat"})]}),"\n",(0,l.jsx)(r.h4,{id:"channel_jump_url",children:(0,l.jsx)(r.code,{children:"%channel_jump_url%"})}),"\n",(0,l.jsxs)(r.p,{children:["The jump url of the channel",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"https://discord.com/channels/135634590575493120/137421286501646336"})]}),"\n",(0,l.jsx)(r.h3,{id:"server",children:"Server"}),"\n",(0,l.jsx)(r.h4,{id:"server_id",children:(0,l.jsx)(r.code,{children:"%server_id%"})}),"\n",(0,l.jsxs)(r.p,{children:["The id of the Discord server",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"135634590575493120"})]}),"\n",(0,l.jsx)(r.h4,{id:"server_name",children:(0,l.jsx)(r.code,{children:"%server_name%"})}),"\n",(0,l.jsxs)(r.p,{children:["The name of the Discord server",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"My Awesome Server"})]}),"\n",(0,l.jsx)(r.h4,{id:"server_member_count",children:(0,l.jsx)(r.code,{children:"%server_member_count%"})}),"\n",(0,l.jsxs)(r.p,{children:["The member count of the Discord server",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"107"})]}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsx)(r.h2,{id:"minecraft",children:"Minecraft"}),"\n",(0,l.jsx)(r.h3,{id:"player",children:"Player"}),"\n",(0,l.jsx)(r.h4,{id:"player_name",children:(0,l.jsx)(r.code,{children:"%player_name%"})}),"\n",(0,l.jsxs)(r.p,{children:["The username of the Minecraft player",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"Notch"})]}),"\n",(0,l.jsx)(r.h4,{id:"player_uuid",children:(0,l.jsx)(r.code,{children:"%player_uuid%"})}),"\n",(0,l.jsxs)(r.p,{children:["The UUID of the Minecraft player, may also use ",(0,l.jsx)(r.a,{href:"#uuid",children:"UUID"})," placeholders",(0,l.jsx)(r.br,{}),"\n","Example usages: ",(0,l.jsx)(r.code,{children:"%player_uuid%"}),", ",(0,l.jsx)(r.code,{children:"%player_uuid_short%"}),"\nExample value: ",(0,l.jsx)(r.code,{children:"069a79f4-44e9-4726-a5be-fca90e38aaf5"})]}),"\n",(0,l.jsx)(r.h4,{id:"player_skin",children:(0,l.jsx)(r.code,{children:"%player_skin%"})}),"\n",(0,l.jsxs)(r.p,{children:["The skin information of the Minecraft player for use with ",(0,l.jsx)(r.a,{href:"#skin",children:"Skin"}),(0,l.jsx)(r.br,{}),"\n","Example usages: ",(0,l.jsx)(r.code,{children:"%player_skin_texture_id%"}),", ",(0,l.jsx)(r.code,{children:"%player_skin_model%"})]}),"\n",(0,l.jsx)(r.h4,{id:"player_avatar_url",children:(0,l.jsx)(r.code,{children:"%player_avatar_url%"})}),"\n",(0,l.jsxs)(r.p,{children:["The avatar url of the Minecraft player (the API used for this can be changed in the config (",(0,l.jsx)(r.code,{children:"avatar-provider.avatar-url-template"}),"))"]}),"\n",(0,l.jsx)(r.h4,{id:"player_prefix",children:(0,l.jsx)(r.code,{children:"%player_prefix%"})}),"\n",(0,l.jsxs)(r.p,{children:["Equivalent of ",(0,l.jsx)(r.code,{children:"%player_meta_prefix|player_permission_prefix%"})]}),"\n",(0,l.jsx)(r.h4,{id:"player_suffix",children:(0,l.jsx)(r.code,{children:"%player_suffix%"})}),"\n",(0,l.jsxs)(r.p,{children:["Equivalent of ",(0,l.jsx)(r.code,{children:"%player_meta_suffix|player_permission_suffix%"})]}),"\n",(0,l.jsx)(r.h4,{id:"player_meta_prefix",children:(0,l.jsx)(r.code,{children:"%player_meta_prefix%"})}),"\n",(0,l.jsxs)(r.p,{children:["The meta prefix of the Minecraft player (set using the ",(0,l.jsx)(r.a,{href:"https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta#meta/",children:"LuckPerms meta"})," key ",(0,l.jsx)(r.code,{children:"discordsrv_prefix"}),")",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"Mod "})]}),"\n",(0,l.jsx)(r.h4,{id:"player_meta_suffix",children:(0,l.jsx)(r.code,{children:"%player_meta_suffix%"})}),"\n",(0,l.jsxs)(r.p,{children:["The meta suffix of the Minecraft player (set using the ",(0,l.jsx)(r.a,{href:"https://luckperms.net/wiki/Prefixes,-Suffixes-&-Meta#meta/",children:"LuckPerms meta"})," key ",(0,l.jsx)(r.code,{children:"discordsrv_suffix"}),")",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:" Staff Member"})]}),"\n",(0,l.jsx)(r.h4,{id:"player_permission_prefix",children:(0,l.jsx)(r.code,{children:"%player_permission_prefix%"})}),"\n",(0,l.jsxs)(r.p,{children:["The prefix of the Minecraft player",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"[Mod] "})]}),"\n",(0,l.jsx)(r.h4,{id:"player_permission_suffix",children:(0,l.jsx)(r.code,{children:"%player_permission_suffix%"})}),"\n",(0,l.jsxs)(r.p,{children:["The suffix of the Minecraft player",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:" (Staff Member)"})]}),"\n",(0,l.jsx)(r.h3,{id:"skin",children:"Skin"}),"\n",(0,l.jsx)(r.h4,{id:"skin_texture_id",children:(0,l.jsx)(r.code,{children:"%skin_texture_id%"})}),"\n",(0,l.jsxs)(r.p,{children:["The texture id for the skin",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"5183d47698a28e20b6c3c6d9b8a8a33449c866cff50d725a53260bd6a5ae0b64"})]}),"\n",(0,l.jsx)(r.h4,{id:"skin_model",children:(0,l.jsx)(r.code,{children:"%skin_model%"})}),"\n",(0,l.jsxs)(r.p,{children:["The model of the skin",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"slim"})]}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsx)(r.h2,{id:"color",children:"Color"}),"\n",(0,l.jsx)(r.h4,{id:"color_rgb",children:(0,l.jsx)(r.code,{children:"%color_rgb%"})}),"\n",(0,l.jsxs)(r.p,{children:["The rgb decimal value for the color",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"16738740"})]}),"\n",(0,l.jsx)(r.h4,{id:"color_hex",children:(0,l.jsx)(r.code,{children:"%color_hex%"})}),"\n",(0,l.jsxs)(r.p,{children:["The hex value for the color",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"ff69b4"})]}),"\n",(0,l.jsx)(r.h4,{id:"color_red",children:(0,l.jsx)(r.code,{children:"%color_red%"})}),"\n",(0,l.jsxs)(r.p,{children:["The red value for the color",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"255"})]}),"\n",(0,l.jsx)(r.h4,{id:"color_green",children:(0,l.jsx)(r.code,{children:"%color_green%"})}),"\n",(0,l.jsxs)(r.p,{children:["The green value for the color",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"105"})]}),"\n",(0,l.jsx)(r.h4,{id:"color_blue",children:(0,l.jsx)(r.code,{children:"%color_blue%"})}),"\n",(0,l.jsxs)(r.p,{children:["The blue value for the color",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"180"})]}),"\n",(0,l.jsx)(r.h2,{id:"uuid",children:"UUID"}),"\n",(0,l.jsx)(r.h4,{id:"uuid_short",children:(0,l.jsx)(r.code,{children:"%uuid_short%"})}),"\n",(0,l.jsxs)(r.p,{children:["The UUID without any dashes",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"069a79f444e94726a5befca90e38aaf5"})]}),"\n",(0,l.jsx)(r.h4,{id:"uuid_version",children:(0,l.jsx)(r.code,{children:"%uuid_version%"})}),"\n",(0,l.jsxs)(r.p,{children:["The version of the UUID",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"4"})]}),"\n",(0,l.jsx)(r.h4,{id:"uuid_isgeyser",children:(0,l.jsx)(r.code,{children:"%uuid_isgeyser%"})}),"\n",(0,l.jsxs)(r.p,{children:["If the UUID is from a ",(0,l.jsx)(r.a,{href:"https://geysermc.org/wiki/geyser/",children:"Geyser"})," player using ",(0,l.jsx)(r.a,{href:"https://geysermc.org/wiki/floodgate/setup/",children:"Floodgate authentication"}),(0,l.jsx)(r.br,{}),"\n","Values: ",(0,l.jsx)(r.code,{children:"true"}),", ",(0,l.jsx)(r.code,{children:"false"})]}),"\n",(0,l.jsx)(r.h4,{id:"uuid_isoffline",children:(0,l.jsx)(r.code,{children:"%uuid_isoffline%"})}),"\n",(0,l.jsxs)(r.p,{children:["If this UUID is for a cracked Minecraft player based on its version",(0,l.jsx)(r.br,{}),"\n","Values: ",(0,l.jsx)(r.code,{children:"true"}),", ",(0,l.jsx)(r.code,{children:"false"})]}),"\n",(0,l.jsx)(r.hr,{}),"\n",(0,l.jsx)(r.h2,{id:"global-placeholders",children:"Global placeholders"}),"\n",(0,l.jsx)(r.h4,{id:"discord_invite",children:(0,l.jsx)(r.code,{children:"%discord_invite%"})}),"\n",(0,l.jsxs)(r.p,{children:["The invite of your Discord server (this is either provided by you in the config, or DiscordSRV auto generates it for you)",(0,l.jsx)(r.br,{}),"\n","Example value: ",(0,l.jsx)(r.code,{children:"https://discord.gg/HGAdJEumxC"})]}),"\n",(0,l.jsx)(r.h4,{id:"texttext",children:(0,l.jsx)(r.code,{children:"%text:'<text>'\""})}),"\n",(0,l.jsxs)(r.p,{children:["Returns arbitrary text. An example of a use case would be changing the placeholder to custom text if it is empty.",(0,l.jsx)(r.br,{}),"\n","Example usage: ",(0,l.jsx)(r.code,{children:"%player_prefix|text:'No Prefix'%"})]}),"\n",(0,l.jsx)(r.h2,{id:"date-formatting",children:"Date formatting"}),"\n",(0,l.jsxs)(r.p,{children:["Some placeholders such as ",(0,l.jsx)(r.code,{children:"log_time"})," for console lines take a time formatting string, for example: ",(0,l.jsx)(r.code,{children:"ccc HH:mm:ss zzz"})," in ",(0,l.jsx)(r.code,{children:"%log_time:'ccc HH:mm:ss zzz'%"})]}),"\n",(0,l.jsx)(r.h4,{id:"useful-formatting-characters",children:"(Useful) Formatting characters"}),"\n",(0,l.jsxs)(r.p,{children:["Use multiple of the same character back-to-back for a longer output, for example ",(0,l.jsx)(r.code,{children:"uu"})," -> ",(0,l.jsx)(r.code,{children:"04"}),", ",(0,l.jsx)(r.code,{children:"uuuu"})," -> ",(0,l.jsx)(r.code,{children:"2004"})]}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Symbol"}),(0,l.jsx)(r.th,{children:"Meaning"}),(0,l.jsx)(r.th,{children:"Examples"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"u"}),(0,l.jsx)(r.td,{children:"year"}),(0,l.jsx)(r.td,{children:"2004; 04"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"D"}),(0,l.jsx)(r.td,{children:"day-of-year"}),(0,l.jsx)(r.td,{children:"189"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"M/L"}),(0,l.jsx)(r.td,{children:"month-of-year"}),(0,l.jsx)(r.td,{children:"7; 07; Jul; July; J"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"d"}),(0,l.jsx)(r.td,{children:"day-of-month"}),(0,l.jsx)(r.td,{children:"10"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"Q/q"}),(0,l.jsx)(r.td,{children:"quarter-of-year"}),(0,l.jsx)(r.td,{children:"3; 03; Q3; 3rd quarter"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"Y"}),(0,l.jsx)(r.td,{children:"week-based-year"}),(0,l.jsx)(r.td,{children:"1996; 96"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"w"}),(0,l.jsx)(r.td,{children:"week-of-week-based-year"}),(0,l.jsx)(r.td,{children:"27"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"W"}),(0,l.jsx)(r.td,{children:"week-of-month"}),(0,l.jsx)(r.td,{children:"4"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"E"}),(0,l.jsx)(r.td,{children:"day-of-week"}),(0,l.jsx)(r.td,{children:"Tue; Tuesday; T"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"e/c"}),(0,l.jsx)(r.td,{children:"localized day-of-week"}),(0,l.jsx)(r.td,{children:"2; 02; Tue; Tuesday; T"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"F"}),(0,l.jsx)(r.td,{children:"week-of-month"}),(0,l.jsx)(r.td,{children:"3"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"a"}),(0,l.jsx)(r.td,{children:"am-pm-of-day"}),(0,l.jsx)(r.td,{children:"PM"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"K"}),(0,l.jsx)(r.td,{children:"hour-of-am-pm (0-11)"}),(0,l.jsx)(r.td,{children:"0"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"H"}),(0,l.jsx)(r.td,{children:"hour-of-day"}),(0,l.jsx)(r.td,{children:"0"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"m"}),(0,l.jsx)(r.td,{children:"minute-of-hour"}),(0,l.jsx)(r.td,{children:"30"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"s"}),(0,l.jsx)(r.td,{children:"second-of-minute"}),(0,l.jsx)(r.td,{children:"55"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"S"}),(0,l.jsx)(r.td,{children:"fraction-of-second"}),(0,l.jsx)(r.td,{children:"978"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"V"}),(0,l.jsx)(r.td,{children:"time-zone ID"}),(0,l.jsx)(r.td,{children:"America/Los_Angeles; Z; -08:30"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"z"}),(0,l.jsx)(r.td,{children:"time-zone name"}),(0,l.jsx)(r.td,{children:"Pacific Standard Time; PST"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"O"}),(0,l.jsx)(r.td,{children:"localized zone-offset"}),(0,l.jsx)(r.td,{children:"GMT+8; GMT+08:00; UTC-08:00;"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"X"}),(0,l.jsx)(r.td,{children:"zone-offset 'Z' for zero"}),(0,l.jsx)(r.td,{children:"Z; -08; -0830; -08:30; -083015; -08:30:15;"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"x"}),(0,l.jsx)(r.td,{children:"zone-offset"}),(0,l.jsx)(r.td,{children:"+0000; -08; -0830; -08:30; -083015; -08:30:15;"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"Z"}),(0,l.jsx)(r.td,{children:"zone-offset"}),(0,l.jsx)(r.td,{children:"+0000; -0800; -08:00;"})]})]})]}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://docs.oracle.com/javase/8/docs/api/java/time/format/DateTimeFormatter.html",children:"Source"})}),"\n",(0,l.jsx)(r.h3,{id:"discord-timestamp-formatting",children:"Discord timestamp formatting"}),"\n",(0,l.jsxs)(r.p,{children:["Example usages: ",(0,l.jsx)(r.code,{children:"%log_time:'timestamp'%"})," or ",(0,l.jsx)(r.code,{children:"%log_time:'timestamp:t'%"})]}),"\n",(0,l.jsx)(r.h4,{id:"styles",children:"Styles"}),"\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Style"}),(0,l.jsx)(r.th,{children:"Meaning"}),(0,l.jsx)(r.th,{children:"Example"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"t"}),(0,l.jsx)(r.td,{children:"Short Time"}),(0,l.jsx)(r.td,{children:"16:20"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"T"}),(0,l.jsx)(r.td,{children:"Long Time"}),(0,l.jsx)(r.td,{children:"16:20:30"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"d"}),(0,l.jsx)(r.td,{children:"Short Date"}),(0,l.jsx)(r.td,{children:"20/04/2021"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"D"}),(0,l.jsx)(r.td,{children:"Long Date"}),(0,l.jsx)(r.td,{children:"20 April 2021"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"f (default)"}),(0,l.jsx)(r.td,{children:"Short Date/Time"}),(0,l.jsx)(r.td,{children:"20 April 2021 16:20"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"F"}),(0,l.jsx)(r.td,{children:"Long Date/Time"}),(0,l.jsx)(r.td,{children:"Tuesday, 20 April 2021 16:20"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"R"}),(0,l.jsx)(r.td,{children:"Relative Time"}),(0,l.jsx)(r.td,{children:"2 months ago"})]})]})]}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.a,{href:"https://discord.com/developers/docs/reference#message-formatting-timestamp-styles",children:"Source"})}),"\n",(0,l.jsx)(r.h2,{id:"integrations",children:"Integrations"}),"\n",(0,l.jsx)(r.h3,{id:"bukkit-placeholderapi",children:"Bukkit: PlaceholderAPI"}),"\n",(0,l.jsx)(r.h4,{id:"using-discordsrv-placeholders-in-other-plugins",children:"Using DiscordSRV placeholders in other plugins"}),"\n",(0,l.jsxs)(r.p,{children:["You can use DiscordSRV's global and Player related placeholders (when a Player is provided) by prefixing the placeholder with ",(0,l.jsx)(r.code,{children:"discordsrv_"}),", for example ",(0,l.jsx)(r.code,{children:"%discordsrv_discord_invite%"})]}),"\n",(0,l.jsx)(r.h4,{id:"using-placeholders-in-discordsrv",children:"Using placeholders in DiscordSRV"}),"\n",(0,l.jsxs)(r.p,{children:["List of ",(0,l.jsx)(r.a,{href:"https://wiki.placeholderapi.com/users/placeholder-list/",children:"PlaceholderAPI placeholders"}),", please note many of these require the respective ",(0,l.jsx)(r.a,{href:"https://wiki.placeholderapi.com/users/using-placeholders/#downloadget-expansion",children:"expansion to be installed before they can be used"}),"."]}),"\n",(0,l.jsxs)(r.p,{children:["You can use PlaceholderAPI placeholders directly in DiscordSRV or by explicitly prefixing the placeholder with ",(0,l.jsx)(r.code,{children:"placeholderapi_"}),", for example:"]}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:"%server_online%\n%placeholderapi_server_online%\n"})}),"\n",(0,l.jsx)(r.h3,{id:"fabric-text-placeholder-api",children:"Fabric: Text Placeholder API"}),"\n",(0,l.jsx)(r.h4,{id:"using-placeholders-in-discordsrv-1",children:"Using placeholders in DiscordSRV"}),"\n",(0,l.jsxs)(r.p,{children:["You can use Text Placeholder API placeholders directly in DiscordSRV or by explicitly prefixing the placeholder with ",(0,l.jsx)(r.code,{children:"textplaceholders_"})]})]})}function t(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},8453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>c});var l=s(6540);const d={},i=l.createContext(d);function n(e){const r=l.useContext(i);return l.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:n(e.components),l.createElement(i.Provider,{value:r},e.children)}}}]);