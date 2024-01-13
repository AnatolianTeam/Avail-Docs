"use strict";(self.webpackChunkavail_doc=self.webpackChunkavail_doc||[]).push([[3211],{2080:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>r,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(5893),n=t(1151);const o={id:"faqs",title:"S\u0131k\xe7a Sorulan Sorular",sidebar_label:"S.S.S.",sidebar_position:8,description:"Avail ve Avail ekosistemi hakk\u0131nda S.S.S.",keywords:["docs","avail","node","faqs","question"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},s=void 0,l={id:"faqs",title:"S\u0131k\xe7a Sorulan Sorular",description:"Avail ve Avail ekosistemi hakk\u0131nda S.S.S.",source:"@site/docs/faqs.md",sourceDirName:".",slug:"/faqs",permalink:"/faqs",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"faqs",title:"S\u0131k\xe7a Sorulan Sorular",sidebar_label:"S.S.S.",sidebar_position:8,description:"Avail ve Avail ekosistemi hakk\u0131nda S.S.S.",keywords:["docs","avail","node","faqs","question"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"tutorialSidebar",previous:{title:"S\xf6zl\xfck",permalink:"/glossary"},next:{title:"App IDs",permalink:"/appid"}},r={},c=[{value:"What is a popular use case of a light client?",id:"what-is-a-popular-use-case-of-a-light-client",level:2},{value:"What is data availability sampling?",id:"what-is-data-availability-sampling",level:2},{value:"How is erasure coding used to increase data availability guarantees?",id:"how-is-erasure-coding-used-to-increase-data-availability-guarantees",level:2},{value:"What are KZG commitments?",id:"what-are-kzg-commitments",level:2},{value:"Since Avail is used by multiple applications, does that mean chains have to download transactions from other chains?",id:"since-avail-is-used-by-multiple-applications-does-that-mean-chains-have-to-download-transactions-from-other-chains",level:2}];function d(e){const a={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.admonition,{title:"Clash of Nodes FAQs",type:"note",children:(0,i.jsxs)(a.p,{children:["For all questions and queries related to the Clash of Nodes campaign,\nplease visit ",(0,i.jsx)(a.strong,{children:(0,i.jsx)(a.a,{href:"/clash-of-nodes/faqs",children:(0,i.jsx)("ins",{children:"this page"})})}),"."]})}),"\n",(0,i.jsx)(a.h2,{id:"what-is-a-popular-use-case-of-a-light-client",children:"What is a popular use case of a light client?"}),"\n",(0,i.jsx)(a.p,{children:"There are many use-cases which today rely on an intermediary to maintain a full node, such that end users of a blockchain do not communicate directly with the blockchain but instead through the intermediary. Light clients have until now not been a suitable replacement for this architecture because they lacked data availability guarantees. Avail solves this issue, thus enabling more applications to directly participate on the blockchain network without intermediaries. Although Avail does support full nodes, we expect most applications will not need to run one, or will need to run fewer."}),"\n",(0,i.jsx)(a.h2,{id:"what-is-data-availability-sampling",children:"What is data availability sampling?"}),"\n",(0,i.jsx)(a.p,{children:"Avail light clients, like other light clients, only download the headers of the blockchain. However, they additionally perform data availability sampling: a technique that randomly samples small sections of the block data and verifies they are correct. When combined with erasure coding and KZG polynomial commitments, Avail clients are able to provide strong (nearly 100%) guarantees of availability without relying on fraud proofs, and with only a small constant number of queries."}),"\n",(0,i.jsx)(a.h2,{id:"how-is-erasure-coding-used-to-increase-data-availability-guarantees",children:"How is erasure coding used to increase data availability guarantees?"}),"\n",(0,i.jsx)(a.p,{children:"Erasure coding is a technique that encodes data in a way that spreads out the information over multiple 'shards', such that the loss of some number of those shards can be tolerated. That is, the information can be reconstructed from the other shards. Applied to the blockchain, this means that we effectively increase the size of each block, but we prevent a malicious actor from being able to hide any part of a block up to the redundant shard size. Since a malicious actor needs to hide a large part of the block in order to attempt to hide even a single transaction, it makes it much more likely that random sampling would catch the large gaps in the data. Effectively, erasure coding makes the data availability sampling technique much more powerful."}),"\n",(0,i.jsx)(a.h2,{id:"what-are-kzg-commitments",children:"What are KZG commitments?"}),"\n",(0,i.jsx)(a.p,{children:"KZG commitments, introduced by Aniket Kate, Gregory M. Zaverucha, and Ian Goldberg in 2010, provide a way to commit to polynomials in a succinct manner. Recently, polynomial commitments came to the forefront, being primarily used as commitments in PLONK-like zero knowledge constructions."}),"\n",(0,i.jsx)(a.p,{children:"In our construction, we use KZG commitments for the following reasons:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"It allows us to commit to values in a succinct manner to be kept inside the block header."}),"\n",(0,i.jsx)(a.li,{children:"Short openings are possible which helps a light client verify availability."}),"\n",(0,i.jsx)(a.li,{children:"The cryptographic binding property helps us avoid fraud proofs by making it computationally infeasible to produce incorrect commitments."}),"\n"]}),"\n",(0,i.jsx)(a.p,{children:"In the future, we might use other polynomial commitment schemes, if that gives us better bounds or guarantees."}),"\n",(0,i.jsx)(a.h2,{id:"since-avail-is-used-by-multiple-applications-does-that-mean-chains-have-to-download-transactions-from-other-chains",children:"Since Avail is used by multiple applications, does that mean chains have to download transactions from other chains?"}),"\n",(0,i.jsx)(a.p,{children:"No. Avail headers contain an index that allows a given application to determine and download only the sections of a block that have data for that application. Thus, they are largely unaffected by other chains using Avail at the same time or by block sizes."}),"\n",(0,i.jsx)(a.p,{children:"The only exception is data availability sampling. In order to verify that data is available (and due to the nature of erasure coding), clients sample small parts of the block at random, including possibly sections that contain data for other applications."})]})}function h(e={}){const{wrapper:a}={...(0,n.a)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,a,t)=>{t.d(a,{Z:()=>l,a:()=>s});var i=t(7294);const n={},o=i.createContext(n);function s(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function l(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);