"use strict";(self.webpackChunkavail_doc=self.webpackChunkavail_doc||[]).push([[6091],{6256:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var s=i(5893),r=i(1151);const l={id:"op-stack",title:"How to Use the OP Stack with Avail",sidebar_label:"Avail-Powered OP Stack Optimium",sidebar_position:2,description:"Discover how to utilize Avail as a data availability layer.",keywords:["documentation","avail","develop","build","data availability","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},t=void 0,c={id:"build-with-avail/optimium/op-stack/op-stack",title:"How to Use the OP Stack with Avail",description:"Discover how to utilize Avail as a data availability layer.",source:"@site/docs/build-with-avail/optimium/op-stack/op-stack.md",sourceDirName:"build-with-avail/optimium/op-stack",slug:"/build-with-avail/optimium/op-stack/",permalink:"/build-with-avail/optimium/op-stack/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"op-stack",title:"How to Use the OP Stack with Avail",sidebar_label:"Avail-Powered OP Stack Optimium",sidebar_position:2,description:"Discover how to utilize Avail as a data availability layer.",keywords:["documentation","avail","develop","build","data availability","da"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/build-with-avail/optimium/op-stack/overview"},next:{title:"Validium",permalink:"/category/validium"}},o={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Compile the Core Codebase",id:"compile-the-core-codebase",level:2},{value:"Build the Adapter Source",id:"build-the-adapter-source",level:3},{value:"Build the Optimism Geth Source",id:"build-the-optimism-geth-source",level:3},{value:"Get Access to a Goerli Node",id:"get-access-to-a-goerli-node",level:3},{value:"Generate and Secure Keys",id:"generate-and-secure-keys",level:2},{value:"Network Configuration and Setup",id:"network-configuration-and-setup",level:2},{value:"Core Contract Deployment",id:"core-contract-deployment",level:2},{value:"Setting Up L2 Configuration",id:"setting-up-l2-configuration",level:2},{value:"Initialize and Configure Geth",id:"initialize-and-configure-geth",level:2},{value:"Launch and Monitor Nodes",id:"launch-and-monitor-nodes",level:2},{value:"Running op-geth",id:"running-op-geth",level:3},{value:"Why Archive Mode?",id:"why-archive-mode",level:4},{value:"Reinitializing op-geth",id:"reinitializing-op-geth",level:4},{value:"Running op-node",id:"running-op-node",level:3},{value:"P2P Synchronization",id:"p2p-synchronization",level:4},{value:"Running op-batcher",id:"running-op-batcher",level:3},{value:"Controlling Batcher Costs",id:"controlling-batcher-costs",level:4},{value:"Running op-proposer",id:"running-op-proposer",level:3},{value:"Acquire Goerli ETH for Layer 2",id:"acquire-goerli-eth-for-layer-2",level:2},{value:"Conduct Test Transactions",id:"conduct-test-transactions",level:2}];function a(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsxs)(n.p,{children:["Embark on setting up your own Avail-Optimism chain. This guide targets Ethereum's Goerli testnet and Avail Goldberg testnet. For a detailed understanding, review the ",(0,s.jsx)(n.a,{href:"https://stack.optimism.io/docs/build/getting-started/#know-before-you-go",children:(0,s.jsx)("ins",{children:"Optimism Documentation"})}),"."]}),"\n",(0,s.jsx)(n.p,{children:"In this guide, you will conduct the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#introduction",children:"Introduction"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#compile-the-core-codebase",children:"Compile the Core Codebase"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#build-the-adapter-source",children:"Build the Adapter Source"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#build-the-optimism-geth-source",children:"Build the Optimism Geth Source"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#get-access-to-a-goerli-node",children:"Get Access to a Goerli Node"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#generate-and-secure-keys",children:"Generate and Secure Keys"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#network-configuration-and-setup",children:"Network Configuration and Setup"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#core-contract-deployment",children:"Core Contract Deployment"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#setting-up-l2-configuration",children:"Setting Up L2 Configuration"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#initialize-and-configure-geth",children:"Initialize and Configure Geth"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#launch-and-monitor-nodes",children:"Launch and Monitor Nodes"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#running-op-geth",children:"Running op-geth"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#why-archive-mode",children:"Why Archive Mode?"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#reinitializing-op-geth",children:"Reinitializing op-geth"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#running-op-node",children:"Running op-node"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#p2p-synchronization",children:"P2P Synchronization"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#running-op-batcher",children:"Running op-batcher"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#controlling-batcher-costs",children:"Controlling Batcher Costs"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#running-op-proposer",children:"Running op-proposer"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#acquire-goerli-eth-for-layer-2",children:"Acquire Goerli ETH for Layer 2"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#conduct-test-transactions",children:"Conduct Test Transactions"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:"Ensure you have installed the following software."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Installation commands are based on Ubuntu 20.04 LTS:"}),"\n"]}),"\n",(0,s.jsx)("table",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{valign:"top",children:(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Software"}),(0,s.jsx)(n.th,{children:"Version"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://git-scm.com/",children:(0,s.jsx)("ins",{children:"Git"})})}),(0,s.jsx)(n.td,{children:"OS default"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://go.dev/",children:(0,s.jsx)("ins",{children:"Go"})})}),(0,s.jsx)(n.td,{children:"1.20"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://nodejs.org/en/",children:(0,s.jsx)("ins",{children:"Node"})})}),(0,s.jsx)(n.td,{children:"16.19.0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://pnpm.io/installation",children:(0,s.jsx)("ins",{children:"Pnpm"})})}),(0,s.jsx)(n.td,{children:"8.5.6"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://linux.die.net/man/1/make",children:(0,s.jsx)("ins",{children:"Make"})})}),(0,s.jsx)(n.td,{children:"OS default"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/jqlang/jq",children:(0,s.jsx)("ins",{children:"jq"})})}),(0,s.jsx)(n.td,{children:"OS default"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://direnv.net/",children:(0,s.jsx)("ins",{children:"direnv"})})}),(0,s.jsx)(n.td,{children:"Latest"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"https://github.com/foundry-rs/foundry#installation",children:(0,s.jsx)("ins",{children:"Foundry"})})}),(0,s.jsxs)(n.td,{children:["Foundry will be installed locally within the project's environment, via ",(0,s.jsx)(n.code,{children:"package.json"})]})]})]})]})}),(0,s.jsx)("td",{valign:"top",children:(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Install Git\nsudo apt install -y git curl make jq\n\n# Install Go\nwget https://go.dev/dl/go1.20.linux-amd64.tar.gz\ntar xvzf go1.20.linux-amd64.tar.gz\nsudo cp go/bin/go /usr/bin/go\nsudo mv go /usr/lib\necho export GOROOT=/usr/lib/go >> ~/.bashrc\n\n# Install Node.js\ncurl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -\nsudo apt-get install -y nodejs npm\n\n# Install Pnpm\nsudo npm install -g pnpm\n\n# Install Make\nsudo apt install -y make\n\n# Install jq\nsudo apt install -y jq\n\n# Install direnv\nsudo apt install -y direnv\n"})})})]})}),"\n",(0,s.jsx)(n.h2,{id:"compile-the-core-codebase",children:"Compile the Core Codebase"}),"\n",(0,s.jsxs)(n.p,{children:["Setting up the EVM Rollup requires compiling code from two critical repositories: the ",(0,s.jsx)(n.a,{href:"https://github.com/availproject/avail-op-stack-adapter",children:(0,s.jsx)("ins",{children:"avail-op-stack-adapter monorepo"})})," and the ",(0,s.jsx)(n.a,{href:"https://github.com/ethereum-optimism/op-geth",children:(0,s.jsx)("ins",{children:"op-geth repository"})}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"build-the-adapter-source",children:"Build the Adapter Source"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clone and navigate to the Avail adapter:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/availproject/avail-op-stack-adapter.git\ncd avail-op-stack-adapter\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Install modules (simultaneously, you may start ",(0,s.jsx)(n.a,{href:"#building-op-geth",children:(0,s.jsxs)("ins",{children:["building ",(0,s.jsx)(n.code,{children:"op-geth"})]})}),"):"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"pnpm install\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Compile the necessary packages:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make op-node op-batcher op-proposer\npnpm build\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"build-the-optimism-geth-source",children:"Build the Optimism Geth Source"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Clone and navigate to ",(0,s.jsx)(n.code,{children:"op-geth"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/ethereum-optimism/op-geth.git\ncd op-geth\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Compile ",(0,s.jsx)(n.code,{children:"op-geth"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"make geth\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"get-access-to-a-goerli-node",children:"Get Access to a Goerli Node"}),"\n",(0,s.jsxs)(n.p,{children:["For deploying to Goerli, access an L1 node using a provider like ",(0,s.jsx)(n.a,{href:"https://www.alchemy.com/",children:(0,s.jsx)("ins",{children:"Alchemy"})})," or ",(0,s.jsx)(n.a,{href:"https://notes.ethereum.org/@launchpad/goerli",children:(0,s.jsx)("ins",{children:"run your own Goerli node"})}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"generate-and-secure-keys",children:"Generate and Secure Keys"}),"\n",(0,s.jsx)(n.p,{children:"Create four essential accounts with private keys:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Admin"})," (contract upgrade authority)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Batcher"})," (publishes Sequencer data to L1)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Proposer"})," (publishes L2 results to L1)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Sequencer"})," (signs blocks on the p2p network)"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["You can use ",(0,s.jsx)(n.code,{children:"cast wallet"})," in the ",(0,s.jsx)(n.code,{children:"contracts-bedrock"})," package for key generation:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to ",(0,s.jsx)(n.code,{children:"contracts-bedrock"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd avail-op-stack-adapter/packages/contracts-bedrock\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Generate accounts:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'echo "Admin:"\ncast wallet new\necho "Proposer:"\ncast wallet new\necho "Batcher:"\ncast wallet new\necho "Sequencer:"\ncast wallet new\n'})}),"\n",(0,s.jsx)(n.p,{children:"You should see an output similar to:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"Admin:\nSuccessfully created new keypair.\nAddress:     0xc4A01194958DE0D90A876e8A5fc9D7B530072148\nPrivate key: 0xb8e39bd94a210e410c4024e1cc91014de45a5eb1e42f3aa99a368b5a5ac19b45\nProposer:\nSuccessfully created new keypair.\nAddress:     0xFC0374Ae658e46cA4022acA179d3cb6D8e1A4934\nPrivate key: 0xa9bc1b3f5deb1e00251df68bf86e3493b25bc5430665433546f2f9aacc748d1a\nBatcher:\nSuccessfully created new keypair.\nAddress:     0xD6857B5BE9468Be67d64ABaB48459378d5329b96\nPrivate key: 0xe9cd8960fc7984a301d567b819e0c62871eb2c7239c2e66b8f319eaa45c3cbd5\nSequencer:\nSuccessfully created new keypair.\nAddress:     0x33348817E4B1192D576C4f157e9a5EC93dc5392D\nPrivate key: 0xd98b49e11e4e0be9931017831395e6644a50c36285d08e14d1a479af5ee08675\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Record and securely store these key details. You'll need to fund ",(0,s.jsx)(n.code,{children:"Admin"}),", ",(0,s.jsx)(n.code,{children:"Proposer"}),", and ",(0,s.jsx)(n.code,{children:"Batcher"})," with Goerli ETH (2 ETH for ",(0,s.jsx)(n.code,{children:"Admin"}),", 5 ETH for ",(0,s.jsx)(n.code,{children:"Proposer"}),", 10 ETH for ",(0,s.jsx)(n.code,{children:"Batcher"}),")."]}),"\n",(0,s.jsx)(n.admonition,{title:"Note for Production",type:"tip",children:(0,s.jsxs)(n.p,{children:["Use secure hardware for key management in production environments.\n",(0,s.jsx)(n.code,{children:"cast wallet"})," is not designed for production deployments."]})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"network-configuration-and-setup",children:"Network Configuration and Setup"}),"\n",(0,s.jsxs)(n.p,{children:["After building the repositories, configure your chain settings in the ",(0,s.jsx)(n.a,{href:"https://github.com/availproject/avail-optimism/tree/129032f15b76b0d2a940443a39433de931a97a44/packages/contracts-bedrock",children:(0,s.jsx)("ins",{children:"contracts-bedrock package"})}),"."]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to ",(0,s.jsx)(n.code,{children:"contracts-bedrock"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/avail-op-stack-adapter/packages/contracts-bedrock\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Copy the environment file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp .envrc.example .envrc\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Edit ",(0,s.jsx)(n.code,{children:".envrc"})," with necessary values:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ETH_RPC_URL"}),": URL for your L1 node."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"PRIVATE_KEY"}),": Private key of the Admin account."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"DEPLOYMENT_CONTEXT"}),': Name of the network; should be "avail-optimism"']}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Activate the environment with ",(0,s.jsx)(n.code,{children:"direnv"}),":"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["If you need to install ",(0,s.jsx)(n.code,{children:"direnv"}),", ensure you also ",(0,s.jsx)(n.a,{href:"https://direnv.net/docs/hook.html",children:(0,s.jsx)("ins",{children:"modify the shell configuration"})}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"direnv allow .\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Choose an L1 block as a starting point using ",(0,s.jsx)(n.code,{children:"cast"})," command:"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Using a finalized L1 block as our starting block is best."}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cast block finalized --rpc-url $ETH_RPC_URL | grep -E "(timestamp|hash|number)"\n'})}),"\n",(0,s.jsx)(n.p,{children:"You should get a response that looks like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"hash                 0x784d8e7f0e90969e375c7d12dac7a3df6879450d41b4cb04d4f8f209ff0c4cd9\nnumber               8482289\ntimestamp            1676253324\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Next, create and modify ",(0,s.jsx)(n.code,{children:"deploy-config/avail-optimism.json"})," based on ",(0,s.jsx)(n.code,{children:"deploy-config/getting-started.json"}),". Retain the default settings provided in the configuration and apply the following modifications:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Replace ",(0,s.jsx)(n.code,{children:"ADMIN"})," with the address of the Admin account you generated earlier."]}),"\n",(0,s.jsxs)(n.li,{children:["Replace ",(0,s.jsx)(n.code,{children:"PROPOSER"})," with the address of the Proposer account you generated earlier."]}),"\n",(0,s.jsxs)(n.li,{children:["Replace ",(0,s.jsx)(n.code,{children:"BATCHER"})," with the address of the Batcher account you generated earlier."]}),"\n",(0,s.jsxs)(n.li,{children:["Replace ",(0,s.jsx)(n.code,{children:"SEQUENCER"})," with the address of the Sequencer account you generated earlier."]}),"\n",(0,s.jsxs)(n.li,{children:["Replace ",(0,s.jsx)(n.code,{children:"BLOCKHASH"})," with the blockhash you got from the cast command."]}),"\n",(0,s.jsxs)(n.li,{children:["Replace ",(0,s.jsx)(n.code,{children:"TIMESTAMP"})," with the timestamp you got from the cast command. Note that although all the other fields are strings, this field is a number! Don\u2019t include the quotation marks."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Configure ",(0,s.jsx)(n.code,{children:"enableDA"})," in ",(0,s.jsx)(n.code,{children:"avail-optimism.json"})," (",(0,s.jsx)(n.code,{children:"true"})," for Avail chain as DA, ",(0,s.jsx)(n.code,{children:"false"})," for Ethereum)."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Enter ",(0,s.jsx)(n.code,{children:"op-avail"})," module:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/avail-op-stack-adapter/op-avail\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Create ",(0,s.jsx)(n.code,{children:"config.json"})," with necessary variables (",(0,s.jsx)(n.code,{children:"seed"}),", ",(0,s.jsx)(n.code,{children:"api_url"}),", ",(0,s.jsx)(n.code,{children:"app_id"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'{\n  "seed": "test test test test test test test test test test test test",\n  "api_url": "wss://goldberg.avail.tools:443/ws",\n  "app_id": 1\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"core-contract-deployment",children:"Core Contract Deployment"}),"\n",(0,s.jsx)(n.p,{children:"Deploy essential L1 contracts for the chain\u2019s functionality:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.code,{children:"/avail-op-stack-adapter/packages/contracts-bedrock/deployments"}),", and create ",(0,s.jsx)(n.code,{children:"avail-optimism"})," directory:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/avail-op-stack-adapter/packages/contracts-bedrock/deployments\nmkdir avail-optimism\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:["Navigate to ",(0,s.jsx)(n.code,{children:"/avail-op-stack-adapter/packages/contracts-bedrock/"})," and the deploy contracts (this can take up to 15 minutes):","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"forge script scripts/Deploy.s.sol:Deploy --private-key $PRIVATE_KEY --broadcast --rpc-url $ETH_RPC_URL\nforge script scripts/Deploy.s.sol:Deploy --sig 'sync()' --private-key $PRIVATE_KEY --broadcast --rpc-url $ETH_RPC_URL\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"setting-up-l2-configuration",children:"Setting Up L2 Configuration"}),"\n",(0,s.jsx)(n.p,{children:"After configuring the L1 layer, focus shifts to establishing the L2 infrastructure. This involves generating three key files:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"genesis.json"})," for the genesis block"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"rollup.json"})," for rollup configurations"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"jwt.txt"})," for secure communication between ",(0,s.jsx)(n.code,{children:"op-node"})," and ",(0,s.jsx)(n.code,{children:"op-geth"})]}),"\n"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to the ",(0,s.jsx)(n.code,{children:"op-node"})," directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/avail-op-stack-adapter/op-node\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run the following command, ensuring you replace ",(0,s.jsx)(n.code,{children:"<RPC>"})," with your specific L1 RPC URL. This generates the ",(0,s.jsx)(n.code,{children:"genesis.json"})," and ",(0,s.jsx)(n.code,{children:"rollup.json"})," files:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"go run cmd/main.go genesis l2 \\\n    --deploy-config ../packages/contracts-bedrock/deploy-config/avail-optimism.json \\\n    --deployment-dir ../packages/contracts-bedrock/deployments/avail-optimism/ \\\n    --outfile.l2 genesis.json \\\n    --outfile.rollup rollup.json \\\n    --l1-rpc=$L1_RPC\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You'll find the newly created ",(0,s.jsx)(n.code,{children:"genesis.json"})," and ",(0,s.jsx)(n.code,{children:"rollup.json"})," in the ",(0,s.jsx)(n.code,{children:"op-node"})," package."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Generate a ",(0,s.jsx)(n.code,{children:"jwt.txt"})," file, which is crucial for the secure interaction between nodes:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"openssl rand -hex 32 > jwt.txt\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["To get ",(0,s.jsx)(n.code,{children:"op-geth"})," ready, move the ",(0,s.jsx)(n.code,{children:"genesis.json"})," and ",(0,s.jsx)(n.code,{children:"jwt.txt"})," files into its directory:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cp genesis.json ~/op-geth\ncp jwt.txt ~/op-geth\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"These steps ensure the L2 layer is correctly configured and ready for integration with the L1 components, paving the way for a fully functional EVM Rollup on the Avail-OP Stack."}),"\n",(0,s.jsx)(n.h2,{id:"initialize-and-configure-geth",children:"Initialize and Configure Geth"}),"\n",(0,s.jsxs)(n.p,{children:["Prepare ",(0,s.jsx)(n.code,{children:"op-geth"})," for running the chain:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Navigate to ",(0,s.jsx)(n.code,{children:"op-geth"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/op-geth\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Create a data directory:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"mkdir datadir\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Initialize with the genesis file:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"build/bin/geth init --datadir=datadir genesis.json\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"launch-and-monitor-nodes",children:"Launch and Monitor Nodes"}),"\n",(0,s.jsxs)(n.p,{children:["Running ",(0,s.jsx)(n.code,{children:"op-geth"})," and ",(0,s.jsx)(n.code,{children:"op-node"})," is essential for every node. ",(0,s.jsx)(n.code,{children:"op-batcher"})," and ",(0,s.jsx)(n.code,{children:"op-proposer"})," are exclusive to the sequencer."]}),"\n",(0,s.jsx)(n.p,{children:"Set the following environment variables:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"SEQ_KEY"})}),(0,s.jsx)(n.td,{children:"Sequencer private key"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"BATCHER_KEY"})}),(0,s.jsx)(n.td,{children:"Batcher private key (minimum 1 ETH)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"PROPOSER_KEY"})}),(0,s.jsx)(n.td,{children:"Proposer private key"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"L1_RPC"})}),(0,s.jsx)(n.td,{children:"L1 node URL"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RPC_KIND"})}),(0,s.jsx)(n.td,{children:"L1 server type (e.g., alchemy, quicknode)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"L2OO_ADDR"})}),(0,s.jsx)(n.td,{children:"L2OutputOracleProxy address"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"running-op-geth",children:"Running op-geth"}),"\n",(0,s.jsxs)(n.p,{children:["To initiate ",(0,s.jsx)(n.code,{children:"op-geth"}),", navigate to its directory and execute the following commands:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'cd ~/op-geth\n./build/bin/geth \\\n  --datadir ./datadir \\\n  --http \\\n  --http.corsdomain="*" \\\n  --http.vhosts="*" \\\n  --http.addr=0.0.0.0 \\\n  --http.port=9545 \\\n  --http.api=web3,debug,eth,txpool,net,engine \\\n  --ws \\\n  --ws.addr=0.0.0.0 \\\n  --ws.port=9546 \\\n  --ws.origins="*" \\\n  --ws.api=debug,eth,txpool,net,engine \\\n  --syncmode=full \\\n  --gcmode=archive \\\n  --nodiscover \\\n  --maxpeers=0 \\\n  --networkid=42069 \\\n  --authrpc.vhosts="*" \\\n  --authrpc.addr=0.0.0.0 \\\n  --authrpc.port=9551 \\\n  --authrpc.jwtsecret=./jwt.txt \\\n  --rollup.disabletxpoolgossip=true\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"op-geth"})," is now active, but block creation will begin once ",(0,s.jsx)(n.code,{children:"op-node"})," is operational."]}),"\n",(0,s.jsx)(n.h4,{id:"why-archive-mode",children:"Why Archive Mode?"}),"\n",(0,s.jsx)(n.p,{children:"Archive mode, requiring more disk space than full mode, is essential for:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"op-proposer"})," to access the full state history."]}),"\n",(0,s.jsx)(n.li,{children:"The explorer's functionality."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"reinitializing-op-geth",children:"Reinitializing op-geth"}),"\n",(0,s.jsxs)(n.p,{children:["In cases of database corruption indicated by ",(0,s.jsx)(n.code,{children:"op-node"})," errors or failure to find L2 heads, follow these steps:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Stop ",(0,s.jsx)(n.code,{children:"op-geth"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Remove the existing data:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/op-geth\nrm -rf datadir/geth\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Reinitialize:","\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"build/bin/geth init --datadir=datadir genesis.json\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Restart ",(0,s.jsx)(n.code,{children:"op-geth"})," and then ",(0,s.jsx)(n.code,{children:"op-node"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"running-op-node",children:"Running op-node"}),"\n",(0,s.jsxs)(n.p,{children:["To launch ",(0,s.jsx)(n.code,{children:"op-node"}),", which acts as a consensus client, run:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/avail-op-stack-adapter/op-node\n./bin/op-node \\\n  --l2=http://localhost:9551 \\\n  --l2.jwt-secret=./jwt.txt \\\n  --sequencer.enabled \\\n  --sequencer.l1-confs=3 \\\n  --verifier.l1-confs=3 \\\n  --rollup.config=./rollup.json \\\n  --rpc.addr=0.0.0.0 \\\n  --rpc.port=9547 \\\n  --p2p.disable \\\n  --rpc.enable-admin \\\n  --p2p.sequencer.key=$SEQ_KEY \\\n  --l1=$L1_RPC \\\n  --l1.rpckind=$RPC_KIND\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Block creation will commence once ",(0,s.jsx)(n.code,{children:"op-node"})," starts processing L1 information and interfaces with ",(0,s.jsx)(n.code,{children:"op-geth"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"p2p-synchronization",children:"P2P Synchronization"}),"\n",(0,s.jsx)(n.p,{children:"To optimize synchronization and avoid network resource waste:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Disable p2p sync (",(0,s.jsx)(n.code,{children:"--p2p.disable"}),") by default."]}),"\n",(0,s.jsx)(n.li,{children:"Use specific command line parameters for synchronization among multiple nodes."}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"running-op-batcher",children:"Running op-batcher"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"op-batcher"})," is crucial in publishing transactions from the Sequencer to L1. Ensure it has at least 1 Goerli ETH for operational continuity."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/avail-op-stack-adapter/op-batcher\n./bin/op-batcher \\\n  --l2-eth-rpc=http://localhost:9545 \\\n  --rollup-rpc=http://localhost:9547 \\\n  --poll-interval=10s \\\n  --sub-safety-margin=6 \\\n  --num-confirmations=1 \\\n  --safe-abort-nonce-too-low-count=3 \\\n  --resubmission-timeout=30s \\\n  --rpc.addr=0.0.0.0 \\\n  --rpc.port=9548 \\\n  --rpc.enable-admin \\\n  --max-channel-duration=1 \\\n  --l1-eth-rpc=$L1_RPC \\\n  --private-key=$BATCHER_KEY\n"})}),"\n",(0,s.jsx)(n.h4,{id:"controlling-batcher-costs",children:"Controlling Batcher Costs"}),"\n",(0,s.jsxs)(n.p,{children:["Adjust the ",(0,s.jsx)(n.code,{children:"--max-channel-duration=n"})," setting to balance transaction frequency on L1 and the operational costs of the batcher."]}),"\n",(0,s.jsx)(n.h3,{id:"running-op-proposer",children:"Running op-proposer"}),"\n",(0,s.jsxs)(n.p,{children:["Finally, start ",(0,s.jsx)(n.code,{children:"op-proposer"})," to propose new state roots:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/avail-op-stack-adapter/op-proposer\n./bin/op-proposer \\\n  --poll-interval=12s \\\n  --rpc.port=9560 \\\n  --rollup-rpc=http://localhost:9547 \\\n  --l2oo-address=$L2OO_ADDR \\\n  --private-key=$PROPOSER_KEY \\\n  --l1-eth-rpc=$L1_RPC\n"})}),"\n",(0,s.jsx)(n.h2,{id:"acquire-goerli-eth-for-layer-2",children:"Acquire Goerli ETH for Layer 2"}),"\n",(0,s.jsx)(n.p,{children:"To obtain ETH on your Rollup:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.code,{children:"contracts-bedrock"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd ~/avail-op-stack-adapter/packages/contracts-bedrock\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Find the L1 standard bridge contract address:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cat deployments/avail-optimism/L1StandardBridgeProxy.json | jq -r .address\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Send Goerli ETH to the bridge contract address."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"conduct-test-transactions",children:"Conduct Test Transactions"}),"\n",(0,s.jsx)(n.p,{children:"You now have a fully operational Avail-Powered Optimism-based EVM Rollup. Experiment with it as you would with any other test blockchain."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Congratulations on setting up your chain!"})})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>c,a:()=>t});var s=i(7294);const r={},l=s.createContext(r);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);