"use strict";(self.webpackChunkavail_doc=self.webpackChunkavail_doc||[]).push([[1558],{4311:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var i=t(5893),s=t(1151);const r={id:"identity",title:"Zincir \xdczerinde Kimlik Nas\u0131l Ayarlan\u0131r?",sidebar_label:"Kimli\u011finizi Ayarlay\u0131n",sidebar_position:4,description:"Goldberg test a\u011f\u0131nda zincir \xfcst\xfc kimli\u011fin nas\u0131l ayarlanaca\u011f\u0131n\u0131 \xf6\u011frenin.",keywords:["docs","avail","explorer","identity"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},a=void 0,o={id:"get-started/new-user-guide/identity",title:"Zincir \xdczerinde Kimlik Nas\u0131l Ayarlan\u0131r?",description:"Goldberg test a\u011f\u0131nda zincir \xfcst\xfc kimli\u011fin nas\u0131l ayarlanaca\u011f\u0131n\u0131 \xf6\u011frenin.",source:"@site/docs/get-started/new-user-guide/identity.md",sourceDirName:"get-started/new-user-guide",slug:"/get-started/new-user-guide/identity",permalink:"/get-started/new-user-guide/identity",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"identity",title:"Zincir \xdczerinde Kimlik Nas\u0131l Ayarlan\u0131r?",sidebar_label:"Kimli\u011finizi Ayarlay\u0131n",sidebar_position:4,description:"Goldberg test a\u011f\u0131nda zincir \xfcst\xfc kimli\u011fin nas\u0131l ayarlanaca\u011f\u0131n\u0131 \xf6\u011frenin.",keywords:["docs","avail","explorer","identity"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"tutorialSidebar",previous:{title:"Testnet Tokeni Al\u0131n",permalink:"/get-started/new-user-guide/faucet"},next:{title:"Bakiye Transferi",permalink:"/get-started/new-user-guide/balance-transfers"}},d={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Reserve Funds for Identity Bonding",id:"reserve-funds-for-identity-bonding",level:2},{value:"Accessing Chain State Constants",id:"accessing-chain-state-constants",level:3},{value:"Set Your On-Chain Identity",id:"set-your-on-chain-identity",level:2}];function c(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(n.p,{children:"This guide will walk you through the process of setting an on-chain identity on the Goldberg testnet."}),"\n",(0,i.jsx)(n.h2,{id:"reserve-funds-for-identity-bonding",children:"Reserve Funds for Identity Bonding"}),"\n",(0,i.jsx)(n.p,{children:"To store personal information on-chain, users are required to lock a specific amount of funds as a bond. This bond is refundable upon the clearance of the identity."}),"\n",(0,i.jsxs)(n.p,{children:["Retrieve the necessary bond amounts by querying the ",(0,i.jsx)(n.a,{href:"https://goldberg.avail.tools/#/chainstate",children:(0,i.jsx)("ins",{children:"Chain state constants"})})," on the [",(0,i.jsx)("ins",{children:"Goldberg Explorer"}),"](/docs/get-started/Yeni Kullan\u0131c\u0131 Rehberi/explorer.md)."]}),"\n",(0,i.jsx)(n.h3,{id:"accessing-chain-state-constants",children:"Accessing Chain State Constants"}),"\n",(0,i.jsx)(n.p,{children:"Determine the bond amounts via the chain's interface by doing the following:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Navigate to the "Developer" menu on the navbar and select "Chain state."'}),"\n",(0,i.jsxs)(n.li,{children:['Under the "Constants" tab, choose ',(0,i.jsx)(n.code,{children:"identity"}),' from the "selected constant query" menu. The ',(0,i.jsx)(n.code,{children:"basicDeposit: u128"})," parameter will be the default."]}),"\n",(0,i.jsx)(n.li,{children:'To add constants to the view, click the "plus" ("+") icon.'}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Each information field is limited to 32 bytes. Use a ",(0,i.jsx)(n.a,{href:"https://onlinetools.com/utf8/convert-utf8-to-bytes",children:(0,i.jsx)("ins",{children:"UTF8 to bytes converter"})})," when manually entering data through the ",(0,i.jsx)(n.a,{href:"https://goldberg.avail.tools/#/extrinsics",children:(0,i.jsx)("ins",{children:"Extrinsics UI"})}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"set-your-on-chain-identity",children:"Set Your On-Chain Identity"}),"\n",(0,i.jsx)(n.p,{children:"Add personal details such as your legal name, display name, and website through the user interface:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Click the three vertical dots next to your account and select "Set on-chain identity."'}),"\n",(0,i.jsx)(n.li,{children:"In the popup, toggle and fill in the desired fields."}),"\n",(0,i.jsx)(n.li,{children:'Confirm by clicking "Set Identity" and submit the transaction to finalize your on-chain identity.'}),"\n",(0,i.jsx)(n.li,{children:'Confirm your details and click "Set Identity" to proceed.'}),"\n",(0,i.jsx)(n.li,{children:"Sign the transaction and submit it to complete the identity setting process."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(7294);const s={},r=i.createContext(s);function a(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);