"use strict";(self.webpackChunkavail_doc=self.webpackChunkavail_doc||[]).push([[4162],{9777:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var n=o(5893),a=o(1151);o(4996);const r={id:"bootstrap",title:"Bootstrap Node Nas\u0131l \xc7al\u0131\u015ft\u0131r\u0131l\u0131r",sidebar_label:"Bootstrap Node",sidebar_position:4,description:"Bir Avail Bootstrap Node'un nas\u0131l \xe7al\u0131\u015ft\u0131r\u0131laca\u011f\u0131n\u0131 \xf6\u011frenin.",keywords:["docs","avail","node","data availability","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},i=void 0,l={id:"operate-a-node/run-a-full-node/bootstrap",title:"Bootstrap Node Nas\u0131l \xc7al\u0131\u015ft\u0131r\u0131l\u0131r",description:"Bir Avail Bootstrap Node'un nas\u0131l \xe7al\u0131\u015ft\u0131r\u0131laca\u011f\u0131n\u0131 \xf6\u011frenin.",source:"@site/docs/operate-a-node/run-a-full-node/0050-bootstrap-node.md",sourceDirName:"operate-a-node/run-a-full-node",slug:"/operate-a-node/run-a-full-node/bootstrap",permalink:"/operate-a-node/run-a-full-node/bootstrap",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"bootstrap",title:"Bootstrap Node Nas\u0131l \xc7al\u0131\u015ft\u0131r\u0131l\u0131r",sidebar_label:"Bootstrap Node",sidebar_position:4,description:"Bir Avail Bootstrap Node'un nas\u0131l \xe7al\u0131\u015ft\u0131r\u0131laca\u011f\u0131n\u0131 \xf6\u011frenin.",keywords:["docs","avail","node","data availability","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"tutorialSidebar",previous:{title:"RPC Node",permalink:"/operate-a-node/run-a-full-node/rpc"},next:{title:"Relay Node",permalink:"/operate-a-node/run-a-full-node/relay"}},s={},d=[{value:"Step 1: Compile the Binary",id:"step-1-compile-the-binary",level:2},{value:"Step 2: Deploy the Binary",id:"step-2-deploy-the-binary",level:2},{value:"Step 3: Create and Edit the Configuration File",id:"step-3-create-and-edit-the-configuration-file",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"This guide provides a step-by-step walkthrough for setting up a bootstrap node, which serves as an entry point for light clients in your network."}),"\n",(0,n.jsxs)(t.admonition,{title:"Before you start",type:"note",children:[(0,n.jsxs)(t.p,{children:[(0,n.jsxs)(t.strong,{children:["Ensure that you meet the ",(0,n.jsx)(t.a,{href:"/operate-a-node/run-a-full-node/system-requirements",children:(0,n.jsx)("ins",{children:"system requirements"})}),"."]}),"\nWe recommend downloading the pre-compiled binary for speed and convenience."]}),(0,n.jsx)(t.p,{children:"It's advisable to deploy multiple bootstrap nodes. A good rule of thumb is to have at least three to five bootstrap nodes to kickstart a new network."})]}),"\n",(0,n.jsx)(t.h2,{id:"step-1-compile-the-binary",children:"Step 1: Compile the Binary"}),"\n",(0,n.jsx)(t.p,{children:"Navigate to the cloned project directory and compile the source code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"cd avail-light-bootstrap\ncargo build --release                 # Compile the project in release mode\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Upon successful compilation, you'll find the binary at ",(0,n.jsx)(t.code,{children:"target/release/avail-light-bootstrap"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"step-2-deploy-the-binary",children:"Step 2: Deploy the Binary"}),"\n",(0,n.jsxs)(t.p,{children:["If you've compiled the binary on a local machine, transfer it to your server using ",(0,n.jsx)(t.code,{children:"scp"})," or any other secure method."]}),"\n",(0,n.jsx)(t.h2,{id:"step-3-create-and-edit-the-configuration-file",children:"Step 3: Create and Edit the Configuration File"}),"\n",(0,n.jsxs)(t.p,{children:["On your server, navigate to the directory where you've placed the binary. Create and edit a ",(0,n.jsx)(t.code,{children:"config.yaml"})," file:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"touch config.yaml                     # Create a new config.yaml file\nnano config.yaml                      # Open the file in a text editor\n"})}),"\n",(0,n.jsx)(t.p,{children:"Populate the file with the following example configuration:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:"log_level: 'INFO' # Logging level\nlog_format_json: false # Log format\nsecret_key: { seed: 'unique_seed' } # Secret key setting\nlibp2p_port: 39000 # libp2p port\nlibp2p_identify_protocol: '/avail_kad/id/1.0.0' # libp2p protocol\n"})}),"\n",(0,n.jsxs)(t.p,{children:["For more advanced configurations, consult the ",(0,n.jsx)(t.a,{href:"https://github.com/availproject/avail-light-bootstrap#config-reference",children:(0,n.jsx)("ins",{children:"Configuration Reference"})}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>l,a:()=>i});var n=o(7294);const a={},r=n.createContext(a);function i(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);