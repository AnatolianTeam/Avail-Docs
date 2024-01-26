"use strict";(self.webpackChunkavail_doc=self.webpackChunkavail_doc||[]).push([[9594],{7181:(i,e,n)=>{n.r(e),n.d(e,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var t=n(5893),a=n(1151);const l={id:"overview",title:"Building on the OP Stack with Avail",sidebar_label:"Overview",sidebar_position:1,description:"Discover how to utilize Avail as a data availability layer.",keywords:["documentation","avail","develop","build","data availability","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},o=void 0,s={id:"build-with-avail/optimium/op-stack/overview",title:"Building on the OP Stack with Avail",description:"Discover how to utilize Avail as a data availability layer.",source:"@site/docs/build-with-avail/optimium/op-stack/overview.md",sourceDirName:"build-with-avail/optimium/op-stack",slug:"/build-with-avail/optimium/op-stack/overview",permalink:"/build-with-avail/optimium/op-stack/overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"overview",title:"Building on the OP Stack with Avail",sidebar_label:"Overview",sidebar_position:1,description:"Discover how to utilize Avail as a data availability layer.",keywords:["documentation","avail","develop","build","data availability","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"tutorialSidebar",previous:{title:"OP Stack",permalink:"/category/op-stack"},next:{title:"Avail-Powered OP Stack Optimium",permalink:"/build-with-avail/optimium/op-stack/"}},r={},c=[{value:"Transaction Lifecycle",id:"transaction-lifecycle",level:2},{value:"Interoperability and Fault Proofing",id:"interoperability-and-fault-proofing",level:2},{value:"Developer Onboarding",id:"developer-onboarding",level:2}];function d(i){const e={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.a)(),...i.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["The OP Stack, instrumental for the development of L2 rollups and maintained by the ",(0,t.jsx)(e.a,{href:"https://www.optimism.io/",children:(0,t.jsx)("ins",{children:"Optimism Collective"})}),", is now extendable with Avail as an alternative data availability layer. Developers working with the OP Stack can utilize Avail to address data availability concerns, enhancing the stack's scalability while simultaneously cutting down data handling costs."]}),"\n",(0,t.jsx)(e.h2,{id:"transaction-lifecycle",children:"Transaction Lifecycle"}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Transaction Submission"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Process"}),": Users send transactions to the Sequencer."]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Role"}),": The Sequencer temporarily holds the transactions before they are batched."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Batch Processing"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Component"}),": ",(0,t.jsx)(e.code,{children:"op-batcher"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Function"}),": Collects transactions into batches for more efficient processing."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Data Availability with Avail"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Component"}),": ",(0,t.jsx)(e.code,{children:"op-avail"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Function"}),": Sends the transaction batches to Avail's blockchain, ensuring data availability."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Transaction Reference Creation"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Outcome"}),": Avail returns a unique transaction reference to ",(0,t.jsx)(e.code,{children:"op-avail"}),"."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Calldata Submission to Ethereum"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Component"}),": ",(0,t.jsx)(e.code,{children:"op-batcher"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Action"}),": Submits the transaction reference from Avail as ",(0,t.jsx)(e.code,{children:"calldata"})," to Ethereum."]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(e.li,{children:["\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.strong,{children:"Verifier and Rollup Node Integration"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Component"}),": ",(0,t.jsx)(e.code,{children:"op-node"})]}),"\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.strong,{children:"Function"}),": Queries data commitment from Ethereum and fetches L2 transaction data through ",(0,t.jsx)(e.code,{children:"op-avail"}),", completing the data availability cycle for OP Stack transactions."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"interoperability-and-fault-proofing",children:"Interoperability and Fault Proofing"}),"\n",(0,t.jsx)(e.p,{children:"The Avail OP Stack will evolve to integrate Optimism's fault proof system and the OP Stack sequencer's decentralization efforts. The Avail data root will be posted to Ethereum through the Vector data attestation bridge, allowing for seamless verification of data availability consensus."}),"\n",(0,t.jsx)(e.h2,{id:"developer-onboarding",children:"Developer Onboarding"}),"\n",(0,t.jsxs)(e.p,{children:["Developers can start experimenting with the Avail OP Stack today by following the guide in the ",(0,t.jsx)(e.a,{href:"https://github.com/availproject/op-evm",children:"Avail OP Stack"})," repo. For support and updates, join the Avail Forum or Discord."]})]})}function h(i={}){const{wrapper:e}={...(0,a.a)(),...i.components};return e?(0,t.jsx)(e,{...i,children:(0,t.jsx)(d,{...i})}):d(i)}},1151:(i,e,n)=>{n.d(e,{Z:()=>s,a:()=>o});var t=n(7294);const a={},l=t.createContext(a);function o(i){const e=t.useContext(l);return t.useMemo((function(){return"function"==typeof i?i(e):{...e,...i}}),[e,i])}function s(i){let e;return e=i.disableParentContext?"function"==typeof i.components?i.components(a):i.components||a:o(i.components),t.createElement(l.Provider,{value:e},i.children)}}}]);