"use strict";(self.webpackChunkavail_doc=self.webpackChunkavail_doc||[]).push([[1068],{538:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var n=a(5893),r=a(1151);a(4866),a(5162),a(4996);const i={id:"avail-light-client-overview",title:"Light Client Nas\u0131l Yap\u0131land\u0131r\u0131l\u0131r",sidebar_label:"Light Client Yap\u0131land\u0131rma",sidebar_position:1,description:"Hafif istemci kullan\u0131m\u0131n\u0131n k\u0131sa \xf6zeti",keywords:["docs","avail","data","availability","light client","DHT","Kademlia","data sampling"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},l=void 0,o={id:"operate-a-node/run-a-light-client/reference/avail-light-client-overview",title:"Light Client Nas\u0131l Yap\u0131land\u0131r\u0131l\u0131r",description:"Hafif istemci kullan\u0131m\u0131n\u0131n k\u0131sa \xf6zeti",source:"@site/docs/operate-a-node/run-a-light-client/reference/using-light-client.md",sourceDirName:"operate-a-node/run-a-light-client/reference",slug:"/operate-a-node/run-a-light-client/reference/avail-light-client-overview",permalink:"/operate-a-node/run-a-light-client/reference/avail-light-client-overview",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{id:"avail-light-client-overview",title:"Light Client Nas\u0131l Yap\u0131land\u0131r\u0131l\u0131r",sidebar_label:"Light Client Yap\u0131land\u0131rma",sidebar_position:1,description:"Hafif istemci kullan\u0131m\u0131n\u0131n k\u0131sa \xf6zeti",keywords:["docs","avail","data","availability","light client","DHT","Kademlia","data sampling"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"tutorialSidebar",previous:{title:"Referans",permalink:"/category/referans"},next:{title:"Light Client Yerle\u015ftirme",permalink:"/operate-a-node/run-a-light-client/reference/embedding-the-light-client"}},s={},c=[{value:"Application client",id:"application-client",level:3}];function u(e){const t={a:"a",code:"code",em:"em",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["The Avail light client is ",(0,n.jsx)(t.em,{children:"heavily"})," customizable with the most important parameters being exposed through its config file, the full config reference can be found ",(0,n.jsx)(t.a,{href:"https://github.com/availproject/avail-light#config-reference",children:"here"}),". The default config files for both light and fat client mode of operations can be found below."]}),"\n",(0,n.jsx)(t.p,{children:"Light client config example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-yaml",children:'log_level = "info"\nhttp_server_host = "127.0.0.1"\nhttp_server_port = "7000"\n\nlibp2p_port = "37000"\n\nfull_node_rpc = ["http://127.0.0.1:9933"]\nfull_node_ws = ["ws://127.0.0.1:9944"]\napp_id = 0\nconfidence = 92.0\navail_path = "avail_path"\nprometheus_port = 9520\n# Set to actual bootstrap peer ID and multiaddress\nbootstraps = [["12D3KooWStAKPADXqJ7cngPYXd2mSANpdgh1xQ34aouufHA2xShz", "/ip4/127.0.0.1/tcp/39000"]]\n'})}),"\n",(0,n.jsxs)(t.p,{children:["For monitoring purposes, ",(0,n.jsx)(t.strong,{children:"Prometheus"})," is used."]}),"\n",(0,n.jsx)(t.h3,{id:"application-client",children:"Application client"}),"\n",(0,n.jsx)(t.p,{children:"The app client mode is used by individual apps to download, reconstruct and locally store relevant app data.\nApplication data is primarily downloaded from the DHT, either by downloading individual block matrix rows or with per-cell approach, downloading relevant individual cells.\nRPC is (again) used as a fallback mechanisms, if DHT doesn't contain the data."}),"\n",(0,n.jsxs)(t.p,{children:["Downloaded and reconstructed data is exposed through a HTTP endpoint, with port configured by the ",(0,n.jsx)(t.code,{children:"http_server_port"})," parameter."]}),"\n",(0,n.jsxs)(t.p,{children:["App client mode is activated by setting the ",(0,n.jsx)(t.code,{children:"app_id"})," to a value greater than ",(0,n.jsx)(t.code,{children:"0"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},5162:(e,t,a)=>{a.d(t,{Z:()=>l});a(7294);var n=a(512);const r={tabItem:"tabItem_Ymn6"};var i=a(5893);function l(e){let{children:t,hidden:a,className:l}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,l),hidden:a,children:t})}},4866:(e,t,a)=>{a.d(t,{Z:()=>j});var n=a(7294),r=a(512),i=a(2466),l=a(6550),o=a(469),s=a(1980),c=a(7392),u=a(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function h(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(i),(0,n.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function m(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,i=p(e),[l,s]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:i}))),[c,d]=f({queryString:a,groupId:r}),[m,g]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,u.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:r}),v=(()=>{const e=c??m;return h({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{v&&s(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);s(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=a(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(5893);function x(e){let{className:t,block:a,selectedValue:n,selectValue:l,tabValues:o}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=s.indexOf(t),r=o[a].value;r!==n&&(c(t),l(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:o.map((e=>{let{value:t,label:a,attributes:i}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>s.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.Z)("tabs__item",v.tabItem,i?.className,{"tabs__item--active":n===t}),children:a??t},t)}))})}function w(e){let{lazy:t,children:a,selectedValue:r}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})))})}function y(e){const t=m(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",v.tabList),children:[(0,b.jsx)(x,{...e,...t}),(0,b.jsx)(w,{...e,...t})]})}function j(e){const t=(0,g.Z)();return(0,b.jsx)(y,{...e,children:d(e.children)},String(t))}},1151:(e,t,a)=>{a.d(t,{Z:()=>o,a:()=>l});var n=a(7294);const r={},i=n.createContext(r);function l(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);