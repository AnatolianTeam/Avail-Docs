"use strict";(self.webpackChunkavail_doc=self.webpackChunkavail_doc||[]).push([[9510],{4601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>u});var r=t(5893),s=t(1151),i=t(4866),a=t(5162);t(4996);const o={id:"system-requirements",title:"Sistem Gereksinimleri",sidebar_label:"Sistem Gereksinimleri",sidebar_position:1,description:"Docker kullanarak bir Avail do\u011frulay\u0131c\u0131 \xe7al\u0131\u015ft\u0131rma hakk\u0131nda bilgi edinin.",keywords:["docs","avail","node","docker","validator","data availability"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},l=void 0,d={id:"operate-a-node/run-a-full-node/system-requirements",title:"Sistem Gereksinimleri",description:"Docker kullanarak bir Avail do\u011frulay\u0131c\u0131 \xe7al\u0131\u015ft\u0131rma hakk\u0131nda bilgi edinin.",source:"@site/docs/operate-a-node/run-a-full-node/requirements.md",sourceDirName:"operate-a-node/run-a-full-node",slug:"/operate-a-node/run-a-full-node/system-requirements",permalink:"/operate-a-node/run-a-full-node/system-requirements",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"system-requirements",title:"Sistem Gereksinimleri",sidebar_label:"Sistem Gereksinimleri",sidebar_position:1,description:"Docker kullanarak bir Avail do\u011frulay\u0131c\u0131 \xe7al\u0131\u015ft\u0131rma hakk\u0131nda bilgi edinin.",keywords:["docs","avail","node","docker","validator","data availability"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"tutorialSidebar",previous:{title:"Ful Node \xc7al\u0131\u015ft\u0131r\u0131n",permalink:"/category/ful-node-\xe7al\u0131\u015ft\u0131r\u0131n"},next:{title:"Full Node",permalink:"/category/full-node"}},c={},u=[{value:"What You Need",id:"what-you-need",level:2},{value:"Hardware",id:"hardware",level:2},{value:"Methods to Run an Avail Node",id:"methods-to-run-an-avail-node",level:2},{value:"Setting Up Your Environment",id:"setting-up-your-environment",level:2},{value:"Installation",id:"installation",level:3},{value:"Common Dependencies",id:"common-dependencies",level:4},{value:"Notable Configurations",id:"notable-configurations",level:3},{value:"Ports",id:"ports",level:4},{value:"Disk Setup",id:"disk-setup",level:4}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"what-you-need",children:"What You Need"}),"\n",(0,r.jsx)(n.p,{children:"To ensure a smooth experience, considering the following:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.a,{href:"#hardware",children:(0,r.jsx)("ins",{children:"Hardware Configuration"})}),":"]})," Verify that your hardware meets the Avail node's requirements."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.a,{href:"#methods-to-run-an-avail-node",children:(0,r.jsx)("ins",{children:"Methods to Run a Node"})}),":"]})," Familiarize yourself with the different Avail node types and the methods to run them."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.a,{href:"#installation",children:(0,r.jsx)("ins",{children:"Prerequisites & Installation"})}),":"]})," Ensure you have the necessary prerequisites and packages installed on your machine."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.a,{href:"#notable-configurations",children:(0,r.jsx)("ins",{children:"Notable System Configuration"})}),":"]})," Pay attention to system configuration details, including port settings and disk setup."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"hardware",children:"Hardware"}),"\n",(0,r.jsx)(n.p,{children:"This is the hardware configuration required to set up an Avail node:"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Component"}),(0,r.jsx)(n.th,{children:"Minimum"}),(0,r.jsx)(n.th,{children:"Recommended"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"RAM"}),(0,r.jsx)(n.td,{children:"4GB"}),(0,r.jsx)(n.td,{children:"8GB"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"CPU (amd64/x86 architecture)"}),(0,r.jsx)(n.td,{children:"2 core"}),(0,r.jsx)(n.td,{children:"4 core"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Storage (SSD)"}),(0,r.jsx)(n.td,{children:"20-40 GB"}),(0,r.jsx)(n.td,{children:"200-300 GB"})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"While we do not favor any operating system, more secure and stable Linux server distributions (like CentOS) should be preferred over desktop operating systems (like Mac OS and Windows). Also, the minimum storage requirements will change over time as the network grows.\nIt is recommended to use more than the minimum requirements to run a robust full node."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"methods-to-run-an-avail-node",children:"Methods to Run an Avail Node"}),"\n",(0,r.jsx)(n.p,{children:"There are two primary methods to run an Avail node, each with its own set of instructions:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.a,{href:"/operate-a-node/run-a-full-node/full-node/binaries",children:(0,r.jsx)("ins",{children:"Using Binaries"})}),":"]})," You can follow the instructions provided here for setting up an Avail node using binary releases. This method is suitable for users who prefer manual installation and configuration. For reference, you can also explore the ",(0,r.jsx)(n.a,{href:"https://github.com/availproject/avail/releases",children:"GitHub Releases"})," page for binary releases."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsxs)(n.strong,{children:[(0,r.jsx)(n.a,{href:"/operate-a-node/run-a-full-node/full-node/docker",children:(0,r.jsx)("ins",{children:"Using Docker"})}),":"]})," Alternatively, if you're comfortable with Docker, you can pull Avail node images from the ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/availj/avail/tags",children:"DockerHub Repository"}),". Docker provides a convenient way to containerize and deploy Avail nodes."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"The Avail team offers official Docker images specifically designed for running nodes on the Goldberg testnet."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"setting-up-your-environment",children:"Setting Up Your Environment"}),"\n",(0,r.jsxs)(n.p,{children:["The node deployment guides provide specific instructions tailored for Linux distributions with apt support, such as ",(0,r.jsx)(n.strong,{children:"Debian"}),".\nAdditionally, it's common practice to run nodes on cloud servers."]}),"\n",(0,r.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,r.jsxs)(i.Z,{groupId:"pre-built-release",defaultValue:"pre-built-release",children:[(0,r.jsxs)(a.Z,{value:"pre-built-release",label:"Pre-Built Release",children:[(0,r.jsx)(n.p,{children:"Download the client binary and config file for the node you want to run:"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Node Type"}),(0,r.jsx)(n.th,{children:"Repository Name"}),(0,r.jsx)(n.th,{children:"Latest Release"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Full Node"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/availproject/avail",children:(0,r.jsx)("ins",{children:"avail"})})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/availproject/avail/releases/tag/v1.8.0.4",children:(0,r.jsx)("ins",{children:"v1.8.0.4"})})})]})})]})]}),(0,r.jsxs)(a.Z,{value:"source",label:"Build from Source",children:[(0,r.jsx)(n.h4,{id:"common-dependencies",children:"Common Dependencies"}),(0,r.jsx)(n.p,{children:"Before proceeding, install the required dependencies:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo apt update\nsudo apt install make clang pkg-config libssl-dev build-essential\ncurl https://sh.rustup.rs -sSf | sh\nsource $HOME/.cargo/env\nrustup update nightly\nrustup target add wasm32-unknown-unknown --toolchain nightly\nrustc --version # Verify Rust installation by displaying the version\n"})}),(0,r.jsx)(n.p,{children:"Clone the node repository you would like to run:"}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Node Type"}),(0,r.jsx)(n.th,{children:"Build Steps"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/availproject/avail",children:(0,r.jsx)("ins",{children:(0,r.jsx)(n.strong,{children:"Full Node"})})})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cargo build --release -p data-avail"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/availproject/avail-light-relay",children:(0,r.jsx)("ins",{children:(0,r.jsx)(n.strong,{children:"Relay Node"})})})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cd avail-light-relay && cargo build --release"})})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://github.com/availproject/avail-light-bootstrap",children:(0,r.jsx)("ins",{children:(0,r.jsx)(n.strong,{children:"Bootstrap Node"})})})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"cd avail-light-bootstrap && cargo build --release"})})]})]})]})]}),(0,r.jsxs)(a.Z,{value:"docker",label:"Docker",children:[(0,r.jsxs)(n.p,{children:["The available Docker images are compatible exclusively with ",(0,r.jsx)(n.strong,{children:"Linux/amd64"})," or ",(0,r.jsx)(n.strong,{children:"x86_64"})," based CPUs."]}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Install Docker"}),(0,r.jsxs)(n.p,{children:["If Docker is not already installed on your system, please follow the installation instructions provided ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/",children:"here"}),". In this guide, we will use the ",(0,r.jsx)(n.strong,{children:"Ubuntu-specific"})," installation instructions, but it's advisable to refer to the official guidelines for the most up-to-date information."]}),(0,r.jsx)(n.p,{children:"To install Docker, execute the following commands:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'sudo apt-get update\nsudo apt-get install ca-certificates curl gnupg lsb-release\nsudo mkdir -p /etc/apt/keyrings\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg\necho \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\nsudo apt-get update\nsudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin\n'})}),(0,r.jsxs)(n.p,{children:["At this point, you should have Docker installed. To ensure a more convenient user experience and avoid running Docker as the root user (which can be inconvenient), follow the post-installation steps ",(0,r.jsx)(n.a,{href:"https://docs.docker.com/engine/install/linux-postinstall/",children:"here"}),". These steps enable you to interact with Docker without requiring root privileges:"]}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo groupadd docker\nsudo usermod -aG docker $USER\n"})})]}),(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Node Type"}),(0,r.jsx)(n.th,{children:"Docker Repository Name"}),(0,r.jsx)(n.th,{children:"Latest Version"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Full Node"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://hub.docker.com/r/availj/avail/tags",children:(0,r.jsx)("ins",{children:"availj/avail"})})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"https://hub.docker.com/layers/availj/avail/v1.8.0.4/images/sha256-f721dd15c77389a3c94002e22a6abb06bf75dd93812328f09c4871621dc138ad?context=explore",children:(0,r.jsx)("ins",{children:"v1.8.0.4"})})})]})})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"notable-configurations",children:"Notable Configurations"}),"\n",(0,r.jsx)(n.h4,{id:"ports",children:"Ports"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Port 30333"})," is typically required for peer exchange. Ensure that this port, along with any others needed for machine access, is open when configuring your firewall or your cloud provider's security groups."]}),"\n",(0,r.jsx)(n.h4,{id:"disk-setup",children:"Disk Setup"}),"\n",(0,r.jsxs)(n.p,{children:["You'll typically have a root partition for the operating system on one device, and one or more separate devices for storing blockchain data. In these guides, we'll assume the additional storage device is mounted at ",(0,r.jsx)(n.code,{children:"/mnt/avail"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Before mounting the additional disk, it's advisable to format it and create a filesystem. For guidance, you can ",(0,r.jsx)(n.a,{href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ebs-using-volumes.html",children:(0,r.jsx)("ins",{children:"follow these instructions"})}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Here's an example of working with a 300 GB device located at ",(0,r.jsx)(n.code,{children:"/dev/nvme1n1"}),". Mount the device with these steps:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo mkdir /mnt/avail\nsudo mount -a /dev/nvme1n1 /mnt/avail\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Use ",(0,r.jsx)(n.code,{children:"df -h"})," to verify the successful configuration."]}),"\n",(0,r.jsx)(n.p,{children:"If everything looks good, create sub-directories for data and configuration files:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"sudo mkdir /mnt/avail/config\nsudo mkdir /mnt/avail/state\nsudo mkdir /mnt/avail/keystore\n"})}),"\n",(0,r.jsxs)(n.p,{children:["Depending on your use case and operating system, you may need to add an entry to ",(0,r.jsx)(n.code,{children:"/etc/fstab"})," to ensure the device remains mounted after system reboots.\nIn our scenario, we'll proceed as follows:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Use blkid to get the UUID for the device that we're mounting\n\nblkid\n\n# Edit the fstab file  and add a line to mount your device\n# UUID={your uuid}      /mnt/data   {your filesystem}   defaults    0   1\nsudo emacs /etc/fstab\n\n# you can use any test editor based on your preference to edit the file here we have used emacs.\n\n# use this to verify the fstab actually works\nsudo findmnt --verify --verbose\n"})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var r=t(512);const s={tabItem:"tabItem_Ymn6"};var i=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>k});var r=t(7294),s=t(512),i=t(2466),a=t(6550),o=t(469),l=t(1980),d=t(7392),c=t(12);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:s}}=e;return{value:n,label:t,attributes:r,default:s}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(s.location.search);n.set(i,e),s.replace({...s.location,search:n.toString()})}),[i,s])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,i=h(e),[a,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[d,u]=m({queryString:t,groupId:s}),[x,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,i]=(0,c.Nk)(t);return[s,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:s}),j=(()=>{const e=d??x;return p({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:a,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,i]),tabValues:i}}var f=t(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(5893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:a,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),s=o[t].value;s!==r&&(d(n),a(s))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...i,className:(0,s.Z)("tabs__item",j.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function b(e){let{lazy:n,children:t,selectedValue:s}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function y(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(v,{...e,...n}),(0,g.jsx)(b,{...e,...n})]})}function k(e){const n=(0,f.Z)();return(0,g.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var r=t(7294);const s={},i=r.createContext(s);function a(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);