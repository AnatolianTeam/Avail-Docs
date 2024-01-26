"use strict";(self.webpackChunkavail_doc=self.webpackChunkavail_doc||[]).push([[6370],{9113:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=o(5893),i=o(1151);o(4996);const r={id:"docker",title:"Docker ile Full Node \xc7al\u0131\u015ft\u0131rma",sidebar_label:"Docker Kullanma",sidebar_position:2,description:"Bu ad\u0131m ad\u0131m k\u0131lavuz, Docker kullanarak bir Avail Full Node kurma ve \xe7al\u0131\u015ft\u0131rma s\xfcrecinde size yol g\xf6sterecektir.",keywords:["docs","avail","node","full node","data availability","da","docker"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},a=void 0,s={id:"operate-a-node/run-a-full-node/full-node/docker",title:"Docker ile Full Node \xc7al\u0131\u015ft\u0131rma",description:"Bu ad\u0131m ad\u0131m k\u0131lavuz, Docker kullanarak bir Avail Full Node kurma ve \xe7al\u0131\u015ft\u0131rma s\xfcrecinde size yol g\xf6sterecektir.",source:"@site/docs/operate-a-node/run-a-full-node/full-node/0030-full-node-docker.md",sourceDirName:"operate-a-node/run-a-full-node/full-node",slug:"/operate-a-node/run-a-full-node/full-node/docker",permalink:"/operate-a-node/run-a-full-node/full-node/docker",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"docker",title:"Docker ile Full Node \xc7al\u0131\u015ft\u0131rma",sidebar_label:"Docker Kullanma",sidebar_position:2,description:"Bu ad\u0131m ad\u0131m k\u0131lavuz, Docker kullanarak bir Avail Full Node kurma ve \xe7al\u0131\u015ft\u0131rma s\xfcrecinde size yol g\xf6sterecektir.",keywords:["docs","avail","node","full node","data availability","da","docker"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"tutorialSidebar",previous:{title:"Binary Kullanma",permalink:"/operate-a-node/run-a-full-node/full-node/binaries"},next:{title:"RPC Node",permalink:"/operate-a-node/run-a-full-node/rpc"}},l={},d=[{value:"Step 1: Launch Your Avail Node",id:"step-1-launch-your-avail-node",level:2},{value:"Step 2: Verify Node Functionality",id:"step-2-verify-node-functionality",level:2},{value:"Inspect Node Logs",id:"inspect-node-logs",level:3},{value:"Monitor Your Node",id:"monitor-your-node",level:3}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:o}=n;return o||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"This guide provides step-by-step instructions for setting up and running a full node on the Avail network using Docker. Whether you're new to node operation or have prior experience, this guide is designed to make the setup process straightforward."}),"\n",(0,t.jsx)(n.admonition,{title:"Before you start",type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsxs)(n.strong,{children:["Ensure that you meet the ",(0,t.jsx)(n.a,{href:"/operate-a-node/run-a-full-node/system-requirements",children:(0,t.jsx)("ins",{children:"system requirements"})}),"."]})," We recommend downloading the pre-compiled binary for speed and convenience."]})}),"\n",(0,t.jsx)(n.h2,{id:"step-1-launch-your-avail-node",children:"Step 1: Launch Your Avail Node"}),"\n",(0,t.jsxs)(n.p,{children:["To launch your Avail node, navigate to the ",(0,t.jsx)(n.code,{children:"/mnt/avail"})," directory and execute the following Docker command:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'cd /mnt/avail\nsudo docker run -v $(pwd)/state:/da/state:rw -p 30333:30333 -p 9615:9615 -p 9944:9944 -d --restart unless-stopped availj/avail:v1.8.0.4 --chain goldberg --name "MyAweasomeInContainerAvailAnode" -d /da/state\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"The Docker command performs several important steps:"}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Map the state directory, providing read-write permissions for data persistence."}),"\n",(0,t.jsx)(n.li,{children:"Opens various ports for different functionalities, including P2P connections, metrics, and HTTP RPC."}),"\n",(0,t.jsx)(n.li,{children:"Utilizes the Avail image from Docker Hub and sets it to restart unless manually stopped."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(o,{children:[(0,t.jsx)("summary",{children:"Sample output"}),(0,t.jsx)(n.p,{children:"You should see an output similar to the following:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:'2023-11-07 17:35:19 Avail Node\n2023-11-07 17:35:19 \u270c\ufe0f  version 1.8.0-9c5f37b9230\n2023-11-07 17:35:19 \u2764\ufe0f  by Anonymous, 2017-2023\n2023-11-07 17:35:19 \ud83d\udccb Chain specification: Avail Goldberg Testnet\n2023-11-07 17:35:19 \ud83c\udff7  Node name: fresh-fan-5502\n2023-11-07 17:35:19 \ud83d\udc64 Role: FULL\n2023-11-07 17:35:19 \ud83d\udcbe Database: RocksDb at /tmp/substrateCTFPb5/chains/avail_goldberg_testnet/db/full\n2023-11-07 17:35:20 \ud83d\udd28 Initializing Genesis block/state (state: 0x6bc7\u2026ec83, header-hash: 0x6f09\u2026a7ae)\n2023-11-07 17:35:20 \ud83d\udc74 Loading GRANDPA authority set from genesis on what appears to be first startup.\n2023-11-07 17:35:21 \ud83d\udc76 Creating empty BABE epoch changes on what appears to be first startup.\n2023-11-07 17:35:21 \ud83c\udff7  Local node identity is: 12D3KooWEEa9iNANi6PUeXGaDqTgTR9T5YcP3A69nwbT4VXnG5R1\n2023-11-07 17:35:21 Prometheus metrics extended with avail metrics\n2023-11-07 17:35:21 \ud83d\udcbb Operating system: linux\n2023-11-07 17:35:21 \ud83d\udcbb CPU architecture: x86_64\n2023-11-07 17:35:21 \ud83d\udcbb Target environment: gnu\n2023-11-07 17:35:21 \ud83d\udcbb CPU: 13th Gen Intel(R) Core(TM) i7-13700K\n2023-11-07 17:35:21 \ud83d\udcbb CPU cores: 16\n2023-11-07 17:35:21 \ud83d\udcbb Memory: 31863MB\n2023-11-07 17:35:21 \ud83d\udcbb Kernel: 6.5.8-100.fc37.x86_64\n2023-11-07 17:35:21 \ud83d\udcbb Linux distribution: Fedora Linux 37 (Workstation Edition)\n2023-11-07 17:35:21 \ud83d\udcbb Virtual machine: no\n2023-11-07 17:35:21 \ud83d\udce6 Highest known block at #0\n2023-11-07 17:35:21 \u303d\ufe0f Prometheus exporter started at 127.0.0.1:9615\n2023-11-07 17:35:21 Running JSON-RPC server: addr=127.0.0.1:9944, allowed origins=["http://localhost:*", "http://127.0.0.1:*", "https://localhost:*", "https://127.0.0.1:*", "https://polkadot.js.org"]\n2023-11-07 17:35:21 \ud83c\udfc1 CPU score: 1.62 GiBs\n2023-11-07 17:35:21 \ud83c\udfc1 Memory score: 22.99 GiBs\n2023-11-07 17:35:21 \ud83c\udfc1 Disk score (seq. writes): 6.78 GiBs\n2023-11-07 17:35:21 \ud83c\udfc1 Disk score (rand. writes): 2.67 GiBs\n2023-11-07 17:35:21 \ud83d\udd0d Discovered new external address for our node: /ip4/176.61.156.176/tcp/30333/ws/p2p/12D3KooWEEa9iNANi6PUeXGaDqTgTR9T5YcP3A69nwbT4VXnG5R1\n'})})]}),"\n",(0,t.jsx)(n.h2,{id:"step-2-verify-node-functionality",children:"Step 2: Verify Node Functionality"}),"\n",(0,t.jsx)(n.h3,{id:"inspect-node-logs",children:"Inspect Node Logs"}),"\n",(0,t.jsx)(n.p,{children:"To confirm that your node is operating as expected, inspect the Docker logs by running the following:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"ubuntu:/mnt/avail# docker ps\nubuntu:/mnt/avail# docker logs 5b3978de8f35  # 5b3978de8f35 is the container id\n"})}),"\n",(0,t.jsx)(n.h3,{id:"monitor-your-node",children:"Monitor Your Node"}),"\n",(0,t.jsxs)(n.p,{children:["You can monitor the status of your node on the ",(0,t.jsx)(n.a,{href:"http://telemetry.avail.tools/",children:(0,t.jsx)("ins",{children:"Avail Telemetry"})})," website."]})]})}function u(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>s,a:()=>a});var t=o(7294);const i={},r=t.createContext(i);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);