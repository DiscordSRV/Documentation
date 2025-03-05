"use strict";(self.webpackChunkdiscordsrv_documentation=self.webpackChunkdiscordsrv_documentation||[]).push([[4365],{2299:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/copy_voice_channel_id-02b3a80799f4d64e148fe6cb1c079caf.png"},7133:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/copy_category_id-85e9c2491b8330606623e3a8e795ad07.png"},8292:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"installation/voice-setup","title":"Voice Setup","description":"Please make sure to go through the Initial Setup before going through with this setup.","source":"@site/docs/installation/voice-setup.md","sourceDirName":"installation","slug":"/installation/voice-setup","permalink":"/installation/voice-setup","draft":false,"unlisted":false,"editUrl":"https://github.com/DiscordSRV/Documentation/edit/master/docs/installation/voice-setup.md","tags":[],"version":"current","lastUpdatedBy":"granny","lastUpdatedAt":1711083324000,"frontMatter":{},"sidebar":"mainSidebar","previous":{"title":"Sync Setup","permalink":"/installation/sync-setup"},"next":{"title":"Link to Join Setup","permalink":"/installation/link-to-join-setup"}}');var o=t(4848),c=t(8453);const s={},a="Voice Setup",r={},d=[];function l(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,c.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"voice-setup",children:"Voice Setup"})}),"\n",(0,o.jsx)(n.admonition,{type:"warning",children:(0,o.jsxs)(n.p,{children:[(0,o.jsxs)(n.strong,{children:["Please make sure to go through the ",(0,o.jsx)(n.a,{href:"/installation/initial-setup",children:"Initial Setup"})," before going through with this setup."]}),"\n",(0,o.jsx)(n.strong,{children:"You need to link your Discord and Minecraft accounts so that DiscordSRV knows which accounts belong to which player."})]})}),"\n",(0,o.jsxs)(n.p,{children:["Make sure ",(0,o.jsx)(n.code,{children:"Voice enabled"})," is set to ",(0,o.jsx)(n.code,{children:"true"})," in the ",(0,o.jsx)(n.code,{children:"voice.yml"})," config"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# voice.yml Line 8\nVoice enabled: true\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Create a category (name doesn't matter) where the voice module will create/delete/move voice channels\n",(0,o.jsx)(n.img,{alt:"create a voice category",src:t(9909).A+"",width:"1350",height:"960"})]})}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Right click on the Category and select ",(0,o.jsx)(n.code,{children:"Copy ID"}),"\n",(0,o.jsx)(n.img,{alt:"copy category id",src:t(7133).A+"",width:"574",height:"701"})]})}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"voice.yml"})," config search for the ",(0,o.jsx)(n.code,{children:"Voice category"})," option and replace ",(0,o.jsx)(n.code,{children:"000000000000000000"})," with the copied Category ID."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# voice.yml Line 13\nVoice category: 000000000000000000\n"})}),"\n",(0,o.jsx)(n.p,{children:'Create a channel (name doesn\'t matter) underneath the voice category you just made; This will be your "Lobby" voice channel.'}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Right click on the Channel after moving it and select ",(0,o.jsx)(n.code,{children:"Copy ID"}),"\n",(0,o.jsx)(n.img,{alt:"copy voice channel id",src:t(2299).A+"",width:"574",height:"781"})]})}),"\n",(0,o.jsxs)(n.p,{children:["In the ",(0,o.jsx)(n.code,{children:"voice.yml"})," config search for the ",(0,o.jsx)(n.code,{children:"Lobby channel"})," option and replace ",(0,o.jsx)(n.code,{children:"000000000000000000"})," with the copied Channel ID."]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-yaml",children:"# voice.yml Line 17\nLobby channel: 000000000000000000\n"})}),"\n",(0,o.jsx)(n.p,{children:"(Re)start your server and you're done with configuring the voice module in DiscordSRV!"})]})}function h(e={}){const{wrapper:n}={...(0,c.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>a});var i=t(6540);const o={},c=i.createContext(o);function s(e){const n=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(c.Provider,{value:n},e.children)}},9909:(e,n,t)=>{t.d(n,{A:()=>i});const i=t.p+"assets/images/create_voice_category-3d8c35ee09347f4e327aa7c024fefa7e.png"}}]);