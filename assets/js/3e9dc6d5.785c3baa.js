"use strict";(self.webpackChunkdiscordsrv_documentation=self.webpackChunkdiscordsrv_documentation||[]).push([[806],{8712:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>b,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var s=r(4848),i=r(8453),l=r(9489),t=r(7227);const o={title:"linking.yml"},c="linking.yml",a={id:"linking",title:"linking.yml",description:"Require players to link their account to Discord before letting them play and optionally require a subscriber role.",source:"@site/docs/linking.mdx",sourceDirName:".",slug:"/linking",permalink:"/linking",draft:!1,unlisted:!1,editUrl:"https://github.com/DiscordSRV/Documentation/edit/master/docs/linking.mdx",tags:[],version:"current",lastUpdatedBy:"granny",lastUpdatedAt:1711083324e3,frontMatter:{title:"linking.yml"},sidebar:"mainSidebar",previous:{title:"config.yml",permalink:"/config"},next:{title:"messages.yml",permalink:"/messages"}},d={},h=[{value:"Screenshots",id:"screenshots",level:2},{value:"<code>Enabled</code>",id:"enabled",level:2},{value:"<code>Listener priority</code>",id:"listener-priority",level:2},{value:"<code>Listener event</code>",id:"listener-event",level:2},{value:"<code>Bypass names</code>",id:"bypass-names",level:2},{value:"<code>Whitelisted players bypass check</code>",id:"whitelisted-players-bypass-check",level:2},{value:"<code>Check banned players</code>",id:"check-banned-players",level:2},{value:"<code>Only check banned players</code>",id:"only-check-banned-players",level:2},{value:"<code>Not linked message</code>",id:"not-linked-message",level:2},{value:"<code>Must be in Discord server</code>",id:"must-be-in-discord-server",level:2},{value:"Subscriber role:",id:"subscriber-role",level:2},{value:"<code>Require subscriber role to join</code>",id:"require-subscriber-role-to-join",level:3},{value:"<code>Subscriber roles</code>",id:"subscriber-roles",level:3},{value:"<code>Require all of the listed roles</code>",id:"require-all-of-the-listed-roles",level:3},{value:"<code>Kick message</code>",id:"kick-message",level:3},{value:"Messages:",id:"messages",level:2},{value:"<code>DiscordSRV still starting</code>",id:"discordsrv-still-starting",level:3},{value:"<code>Failed to find subscriber role</code>",id:"failed-to-find-subscriber-role",level:3},{value:"<code>Failed for unknown reason</code>",id:"failed-for-unknown-reason",level:3},{value:"<code>Kicked for unlinking</code>",id:"kicked-for-unlinking",level:3}];function u(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"linkingyml",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/_",children:"linking.yml"})}),"\n",(0,s.jsx)(n.p,{children:"Require players to link their account to Discord before letting them play and optionally require a subscriber role."}),"\n",(0,s.jsx)(n.h2,{id:"screenshots",children:"Screenshots"}),"\n",(0,s.jsxs)(l.A,{children:[(0,s.jsx)(t.A,{value:"kick-message",label:"\ud83d\udcf7 Kick Message",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Must link account to play",src:r(7134).A+"",width:"856",height:"512"})})}),(0,s.jsx)(t.A,{value:"failed-role-message",label:"\ud83d\udcf7 Failed to find subscriber role Message",children:(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"Must be subscribed to play",src:r(4469).A+"",width:"856",height:"512"})})})]}),"\n",(0,s.jsx)(n.h2,{id:"enabled",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Enabled",children:(0,s.jsx)(n.code,{children:"Enabled"})})}),"\n",(0,s.jsxs)(n.p,{children:["Enable/Disable the ",(0,s.jsx)(n.code,{children:"RequireLink4Gameplay"})," module."]}),"\n",(0,s.jsx)(n.h2,{id:"listener-priority",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Listener%20priority",children:(0,s.jsx)(n.code,{children:"Listener priority"})})}),"\n",(0,s.jsxs)(n.p,{children:["Control the priority ",(0,s.jsx)(n.code,{children:"RequireLink4Gameplay"}),"'s join listener is on.\nIf\nAvailable values are [",(0,s.jsx)(n.code,{children:"LOWEST"}),", ",(0,s.jsx)(n.code,{children:"LOW"}),", ",(0,s.jsx)(n.code,{children:"NORMAL"}),", ",(0,s.jsx)(n.code,{children:"HIGH"}),", ",(0,s.jsx)(n.code,{children:"HIGHEST"}),"]"]}),"\n",(0,s.jsx)(n.h2,{id:"listener-event",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Listener%20event",children:(0,s.jsx)(n.code,{children:"Listener event"})})}),"\n",(0,s.jsxs)(n.p,{children:["The event that the link module should listen and disallow logins on.\nIf your whitelist plugin doesn't seem to work with the default, change it to the other available value.\nAvailable values are [",(0,s.jsx)(n.code,{children:"AsyncPlayerPreLoginEvent"}),",",(0,s.jsx)(n.code,{children:"PlayerLoginEvent"}),"]"]}),"\n",(0,s.jsx)(n.h2,{id:"bypass-names",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Bypass%20names",children:(0,s.jsx)(n.code,{children:"Bypass names"})})}),"\n",(0,s.jsx)(n.p,{children:"Minecraft IGNs to always allow (overrides)"}),"\n",(0,s.jsx)(n.h2,{id:"whitelisted-players-bypass-check",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Whitelisted%20players%20bypass%20check",children:(0,s.jsx)(n.code,{children:"Whitelisted players bypass check"})})}),"\n",(0,s.jsx)(n.p,{children:"Whether to bypass players listed in the vanilla whitelist or not."}),"\n",(0,s.jsx)(n.h2,{id:"check-banned-players",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Check%20banned%20players",children:(0,s.jsx)(n.code,{children:"Check banned players"})})}),"\n",(0,s.jsx)(n.p,{children:"Whether or not to let players in the VANILLA banlist be able to link their accounts"}),"\n",(0,s.jsx)(n.h2,{id:"only-check-banned-players",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Only%20check%20banned%20players",children:(0,s.jsx)(n.code,{children:"Only check banned players"})})}),"\n",(0,s.jsx)(n.p,{children:"Whether or not players not in the VANILLA banlist will bypass the need to link their accounts/have a sub role"}),"\n",(0,s.jsx)(n.h2,{id:"not-linked-message",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Not%20linked%20message",children:(0,s.jsx)(n.code,{children:"Not linked message"})})}),"\n",(0,s.jsx)(n.p,{children:"The kick message that gets displayed if the user's account isn't linked\nPlaceholders:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{BOT}"})," The Bot's name. [DiscordSRVBot#1234]"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"{CODE}"})," The verification code required for DMing the bot. [4321]"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"must-be-in-discord-server",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Must%20be%20in%20Discord%20server",children:(0,s.jsx)(n.code,{children:"Must be in Discord server"})})}),"\n",(0,s.jsx)(n.p,{children:"If enabled, players will not only need to have their accounts linked but will also be required to be a member of a Discord server that the bot is also in.\nAcceptable formats:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"true"}),"/",(0,s.jsx)(n.code,{children:"false"}),": linked account must be in at least one Discord server that the bot is also in\nexample: ",(0,s.jsx)(n.code,{children:"true"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"<server id>"}),": linked account must be in the given Discord server\nexample: ",(0,s.jsx)(n.code,{children:"135634590575493120"})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"[<server id>, <server id>, ...]"}),": linked account must be in ALL of the given Discord servers\nexample: ",(0,s.jsx)(n.code,{children:"[135634590575493120, 690411863766466590]"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"This option's value is superseded when you have subscriber roles enforced below."}),"\n",(0,s.jsx)(n.h2,{id:"subscriber-role",children:"Subscriber role:"}),"\n",(0,s.jsx)(n.p,{children:"Optionally require people to not only be linked but to have one/all specified role[s]."}),"\n",(0,s.jsx)(n.h3,{id:"require-subscriber-role-to-join",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Require%20subscriber%20role%20to%20join",children:(0,s.jsx)(n.code,{children:"Require subscriber role to join"})})}),"\n",(0,s.jsx)(n.p,{children:"Enable/Disable requiring a discord role to join Minecraft server."}),"\n",(0,s.jsx)(n.h3,{id:"subscriber-roles",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Subscriber%20roles",children:(0,s.jsx)(n.code,{children:"Subscriber roles"})})}),"\n",(0,s.jsx)(n.p,{children:"The roles required to join the server."}),"\n",(0,s.jsx)(n.h3,{id:"require-all-of-the-listed-roles",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Require%20all%20of%20the%20listed%20roles",children:(0,s.jsx)(n.code,{children:"Require all of the listed roles"})})}),"\n",(0,s.jsxs)(n.p,{children:["Enable/Disable requiring all listed roles. When false, only one of the roles listed in ",(0,s.jsx)(n.code,{children:"Subscriber roles"})," is required."]}),"\n",(0,s.jsx)(n.h3,{id:"kick-message",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Kick%20message",children:(0,s.jsx)(n.code,{children:"Kick message"})})}),"\n",(0,s.jsx)(n.p,{children:"The message that gets displayed when a user gets kicked for not having a/all role/s."}),"\n",(0,s.jsx)(n.h2,{id:"messages",children:"Messages:"}),"\n",(0,s.jsx)(n.h3,{id:"discordsrv-still-starting",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/DiscordSRV%20still%20starting",children:(0,s.jsx)(n.code,{children:"DiscordSRV still starting"})})}),"\n",(0,s.jsx)(n.p,{children:"What gets displayed as the kick reason if someone attempts to join before DiscordSRV loads up."}),"\n",(0,s.jsx)(n.h3,{id:"failed-to-find-subscriber-role",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Failed%20to%20find%20subscriber%20role",children:(0,s.jsx)(n.code,{children:"Failed to find subscriber role"})})}),"\n",(0,s.jsx)(n.p,{children:"What gets displayed as the kick reason if the required role[s] were not found on the server."}),"\n",(0,s.jsx)(n.h3,{id:"failed-for-unknown-reason",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Failed%20for%20unknown%20reason",children:(0,s.jsx)(n.code,{children:"Failed for unknown reason"})})}),"\n",(0,s.jsx)(n.p,{children:"What gets displayed as the kick reason if an error occurs."}),"\n",(0,s.jsx)(n.h3,{id:"kicked-for-unlinking",children:(0,s.jsx)(n.a,{href:"https://config.discordsrv.com/linking/Kicked%20for%20unlinking",children:(0,s.jsx)(n.code,{children:"Kicked for unlinking"})})}),"\n",(0,s.jsx)(n.p,{children:"What gets displayed as the kick reason if the player unlinks in-game."})]})}function b(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},7227:(e,n,r)=>{r.d(n,{A:()=>t});r(6540);var s=r(8215);const i={tabItem:"tabItem_Ymn6"};var l=r(4848);function t(e){let{children:n,hidden:r,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,s.A)(i.tabItem,t),hidden:r,children:n})}},9489:(e,n,r)=>{r.d(n,{A:()=>y});var s=r(6540),i=r(8215),l=r(4245),t=r(6347),o=r(6494),c=r(2814),a=r(5167),d=r(9900);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:r}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:r,attributes:s,default:i}}=e;return{value:n,label:r,attributes:s,default:i}}))}(r);return function(e){const n=(0,a.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function b(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:r}=e;const i=(0,t.W6)(),l=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,c.aZ)(l),(0,s.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(i.location.search);n.set(l,e),i.replace({...i.location,search:n.toString()})}),[l,i])]}function f(e){const{defaultValue:n,queryString:r=!1,groupId:i}=e,l=u(e),[t,c]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!b({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:l}))),[a,h]=p({queryString:r,groupId:i}),[f,v]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[i,l]=(0,d.Dv)(r);return[i,(0,s.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:i}),g=(()=>{const e=a??f;return b({value:e,tabValues:l})?e:null})();(0,o.A)((()=>{g&&c(g)}),[g]);return{selectedValue:t,selectValue:(0,s.useCallback)((e=>{if(!b({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);c(e),h(e),v(e)}),[h,v,l]),tabValues:l}}var v=r(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=r(4848);function x(e){let{className:n,block:r,selectedValue:s,selectValue:t,tabValues:o}=e;const c=[],{blockElementScrollPositionUntilNextRender:a}=(0,l.a_)(),d=e=>{const n=e.currentTarget,r=c.indexOf(n),i=o[r].value;i!==s&&(a(n),t(i))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=c.indexOf(e.currentTarget)+1;n=c[r]??c[0];break}case"ArrowLeft":{const r=c.indexOf(e.currentTarget)-1;n=c[r]??c[c.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":r},n),children:o.map((e=>{let{value:n,label:r,attributes:l}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...l,className:(0,i.A)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":s===n}),children:r??n},n)}))})}function j(e){let{lazy:n,children:r,selectedValue:i}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===i));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==i})))})}function k(e){const n=f(e);return(0,m.jsxs)("div",{className:(0,i.A)("tabs-container",g.tabList),children:[(0,m.jsx)(x,{...n,...e}),(0,m.jsx)(j,{...n,...e})]})}function y(e){const n=(0,v.A)();return(0,m.jsx)(k,{...e,children:h(e.children)},String(n))}},7134:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/javaw_12rAo3Y4RJ-d47c9bbc3cea6f49214a5cab5d6d7130.png"},4469:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/javaw_uJSdOF2OAa-4017a0a034730329513b08f6cb436ad6.png"},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var s=r(6540);const i={},l=s.createContext(i);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);