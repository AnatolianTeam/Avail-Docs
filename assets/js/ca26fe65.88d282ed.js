"use strict";(self.webpackChunkavail_doc=self.webpackChunkavail_doc||[]).push([[6840],{646:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var t=s(5893),r=s(1151),l=s(4866),i=s(5162);s(4996);const c={id:"embedding-the-light-client",title:"Light Client Nas\u0131l Yerle\u015ftirilir?",sidebar_label:"Light Client Yerle\u015ftirme",sidebar_position:2,description:"Hafif istemcinin bir dust uygulamas\u0131na nas\u0131l yerle\u015ftirilece\u011fi",keywords:["docs","avail","data","availability","how-to","light client","embedding","rust"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},a=void 0,o={id:"operate-a-node/run-a-light-client/reference/embedding-the-light-client",title:"Light Client Nas\u0131l Yerle\u015ftirilir?",description:"Hafif istemcinin bir dust uygulamas\u0131na nas\u0131l yerle\u015ftirilece\u011fi",source:"@site/docs/operate-a-node/run-a-light-client/reference/light-client-embedding.md",sourceDirName:"operate-a-node/run-a-light-client/reference",slug:"/operate-a-node/run-a-light-client/reference/embedding-the-light-client",permalink:"/operate-a-node/run-a-light-client/reference/embedding-the-light-client",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{id:"embedding-the-light-client",title:"Light Client Nas\u0131l Yerle\u015ftirilir?",sidebar_label:"Light Client Yerle\u015ftirme",sidebar_position:2,description:"Hafif istemcinin bir dust uygulamas\u0131na nas\u0131l yerle\u015ftirilece\u011fi",keywords:["docs","avail","data","availability","how-to","light client","embedding","rust"],image:"https://docs.availproject.org/img/avail/AvailDocs.png"},sidebar:"tutorialSidebar",previous:{title:"Light Client Yap\u0131land\u0131rma",permalink:"/operate-a-node/run-a-light-client/reference/avail-light-client-overview"},next:{title:"Sistem Gereksinimleri",permalink:"/operate-a-node/system-requirements"}},d={},u=[{value:"Fetching the number of the latest block processed by light client",id:"fetching-the-number-of-the-latest-block-processed-by-light-client",level:2},{value:"Fetching the confidence for given block",id:"fetching-the-confidence-for-given-block",level:2},{value:"Fetching decoded application data for given block",id:"fetching-decoded-application-data-for-given-block",level:2},{value:"JSON response",id:"json-response",level:3},{value:"Decoded extrinsic",id:"decoded-extrinsic",level:3},{value:"Waiting for application data to be verified",id:"waiting-for-application-data-to-be-verified",level:2},{value:"API reference",id:"api-reference",level:2},{value:"<strong>GET</strong> <code>/v1/mode</code>",id:"get-v1mode",level:3},{value:"Responses",id:"responses",level:4},{value:"<strong>GET</strong> <code>/v1/latest_block</code>",id:"get-v1latest_block",level:3},{value:"Responses",id:"responses-1",level:4},{value:"<strong>GET</strong> <code>/v1/confidence/{block_number}</code>",id:"get-v1confidenceblock_number",level:3},{value:"Responses",id:"responses-2",level:4},{value:"<strong>GET</strong> <code>/v1/appdata/{block_number}</code>",id:"get-v1appdatablock_number",level:3},{value:"Responses",id:"responses-3",level:4},{value:"<strong>GET</strong> <code>/v1/status/{block_number}</code>",id:"get-v1statusblock_number",level:3},{value:"Responses",id:"responses-4",level:4}];function h(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"fetching-the-number-of-the-latest-block-processed-by-light-client",children:"Fetching the number of the latest block processed by light client"}),"\n",(0,t.jsxs)(n.p,{children:["To fetch the number of the latest block processed by light client, we can perform ",(0,t.jsx)(n.code,{children:"GET"})," request on ",(0,t.jsx)(n.code,{children:"/v1/latest_block"})," endpoint."]}),"\n",(0,t.jsxs)(l.Z,{groupId:"examples",defaultValue:"rust",children:[(0,t.jsxs)(i.Z,{value:"curl",label:"CURL",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'curl "http://localhost:7000/v1/latest_block"\n'})}),(0,t.jsx)(n.p,{children:"Response:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "latest_block": 10\n}\n'})})]}),(0,t.jsx)(i.Z,{value:"rust",label:"Rust",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use reqwest::StatusCode;\nuse serde::{Deserialize, Serialize};\n\n#[derive(Serialize, Deserialize, Debug, Clone)]\npub struct LatestBlock {\n    pub latest_block: u32,\n}\n\nconst LIGHT_CLIENT_URL: &str = "http://localhost:7000";\n\nlet latest_block_url = format!("{LIGHT_CLIENT_URL}/v1/latest_block");\nlet response = reqwest::get(latest_block_url).await.unwrap();\n\nif response.status() == StatusCode::OK {\n    let latest_block: LatestBlock =\n        serde_json::from_str(&response.text().await.unwrap()).unwrap();\n    println!("{latest_block:?}");\n}\n// ...error handling...\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"fetching-the-confidence-for-given-block",children:"Fetching the confidence for given block"}),"\n",(0,t.jsxs)(n.p,{children:["To fetch the confidence for specific block, which is already processed by application client, we can perform ",(0,t.jsx)(n.code,{children:"GET"})," request on ",(0,t.jsx)(n.code,{children:"/v1/confidence/{block_number}"})," endpoint."]}),"\n",(0,t.jsxs)(l.Z,{groupId:"examples",children:[(0,t.jsxs)(i.Z,{value:"curl",label:"CURL",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'curl "http://localhost:7000/v1/confidence/1"\n'})}),(0,t.jsx)(n.p,{children:"Response:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "block": 1,\n  "confidence": 93.75,\n  "serialised_confidence": "5232467296"\n}\n'})})]}),(0,t.jsx)(i.Z,{value:"rust",label:"Rust",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use reqwest::StatusCode;\nuse serde::{Deserialize, Serialize};\n\n#[derive(Serialize, Deserialize, Debug, Clone)]\npub struct Confidence {\n    pub block: u32,\n    pub confidence: f64,\n    pub serialised_confidence: Option<String>,\n}\n\nconst LIGHT_CLIENT_URL: &str = "http://localhost:7000";\n\nlet block_number = 1;\nlet confidence_url = format!("{LIGHT_CLIENT_URL}/v1/confidence/{block_number}");\nlet response = reqwest::get(confidence_url).await.unwrap();\n\nif response.status() == StatusCode::OK {\n    let confidence: Confidence =\n        serde_json::from_str(&response.text().await.unwrap()).unwrap();\n    println!("{confidence:?}");\n}\n// ...error handling...\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"fetching-decoded-application-data-for-given-block",children:"Fetching decoded application data for given block"}),"\n",(0,t.jsxs)(n.p,{children:["After data is verified, it can be fetched with ",(0,t.jsx)(n.code,{children:"GET"})," request on ",(0,t.jsx)(n.code,{children:"/v1/appdata/{block_number}"})," endpoint, by specifying ",(0,t.jsx)(n.code,{children:"decode=true"})," query parameter."]}),"\n",(0,t.jsxs)(l.Z,{groupId:"examples",children:[(0,t.jsxs)(i.Z,{value:"curl",label:"CURL",children:[(0,t.jsx)(n.h3,{id:"json-response",children:"JSON response"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'curl "http://localhost:7000/v1/appdata/1?decode=true"\n'})}),(0,t.jsx)(n.p,{children:"Response:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "block": 46,\n  "extrinsics": ["ZXhhbXBsZQ=="]\n}\n'})}),(0,t.jsx)(n.h3,{id:"decoded-extrinsic",children:"Decoded extrinsic"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"curl -s \"http://127.0.0.1:7000/v1/appdata/1?decode=true\" | jq -r '.extrinsics[-1]' | base64 -d\n"})}),(0,t.jsx)(n.p,{children:"Response:"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"example"\n'})})]}),(0,t.jsx)(i.Z,{value:"rust",label:"Rust",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'\nuse base64::Engine as _;\nuse reqwest::StatusCode;\nuse serde::{Deserialize, Serialize};\n\n#[derive(Serialize, Deserialize, Debug, Clone)]\npub struct ExtrinsicsData {\n    pub block: u32,\n    pub extrinsics: Vec<String>,\n}\n\nconst LIGHT_CLIENT_URL: &str = "http://localhost:7000";\n\nlet block_number = 2;\nlet confidence_url = format!("{LIGHT_CLIENT_URL}/v1/appdata/{block_number}?decode=true");\nlet response = reqwest::get(confidence_url).await.unwrap();\n\nif response.status() == StatusCode::OK {\n    let data: ExtrinsicsData =\n        serde_json::from_str(&response.text().await.unwrap()).unwrap();\n\n    let decoded_bytes = engine::general_purpose::STANDARD\n        .decode(&data.extrinsics[0])\n        .unwrap();\n    let decoded_string = String::from_utf8(decoded_bytes).unwrap();\n    println!("{decoded_string:?}");\n}\n\n// ...error handling...\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"waiting-for-application-data-to-be-verified",children:"Waiting for application data to be verified"}),"\n",(0,t.jsxs)(n.p,{children:["If light client is still processing specific block, we can poll light client with ",(0,t.jsx)(n.code,{children:"GET"})," request on ",(0,t.jsx)(n.code,{children:"/v1/appdata/{block_number}"})," endpoint, and wait for data to become available."]}),"\n",(0,t.jsxs)(l.Z,{groupId:"examples",children:[(0,t.jsxs)(i.Z,{value:"curl",label:"CURL",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:'curl "http://localhost:7000/v1/appdata/2"\n'})}),(0,t.jsxs)(n.p,{children:["If response status code is ",(0,t.jsx)(n.code,{children:"401"})," and body is:"]}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"Processing block"\n'})}),(0,t.jsx)(n.p,{children:"we need to poll endpoint until data becomes available."})]}),(0,t.jsxs)(i.Z,{value:"rust",label:"Rust",children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use avail_subxt::primitives::AppUncheckedExtrinsic;\nuse serde::{Deserialize, Serialize};\nuse anyhow::anyhow;\nuse reqwest::StatusCode;\n\n#[derive(Serialize, Deserialize, Debug, Clone)]\npub struct ExtrinsicsData {\n    pub block: u32,\n    pub extrinsics: Vec<AppUncheckedExtrinsic>,\n}\n\nconst POLLING_TIMEOUT: Duration = Duration::from_secs(120);\nconst POLLING_INTERVAL: Duration = Duration::from_secs(1);\nconst LIGHT_CLIENT_URL: &str = "http://localhost:7000";\n\nasync fn wait_for_appdata(appdata_url: &str, block: u32) -> anyhow::Result<ExtrinsicsData> {\n    let appdata_url = format!("{LIGHT_CLIENT_URL}/v1/appdata/{block}");\n\n    let start_time = std::time::Instant::now();\n\n    loop {\n        if start_time.elapsed() >= POLLING_TIMEOUT {\n            return Err(anyhow!("Poll timeout exceeded"));\n        }\n\n        let response = reqwest::get(&appdata_url).await?;\n\n        match response.status() {\n            // If status is OK. response continues json representation of submitted data\n            StatusCode::OK => {\n                let text = &response.text().await?;\n                return Ok(serde_json::from_str(text)?);\n            }\n            // If it is not found, there is no data for given block and application\n            StatusCode::NOT_FOUND => {\n                return Ok(ExtrinsicsData {\n                    block,\n                    extrinsics: vec![],\n                })\n            }\n            // Wait for data to become available otherwise\n            _ => {\n                tokio::time::sleep(POLLING_INTERVAL).await;\n                continue;\n            }\n        }\n    }\n}\n\n'})}),(0,t.jsxs)(n.p,{children:["Function ",(0,t.jsx)(n.code,{children:"wait_for_appdata"})," will block until data is available or timeout is reached."]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"api-reference",children:"API reference"}),"\n",(0,t.jsxs)(n.p,{children:["In case of error, endpoints will return response with ",(0,t.jsx)(n.code,{children:"500 Internal Server Error"})," status code, and descriptive error message."]}),"\n",(0,t.jsxs)(n.h3,{id:"get-v1mode",children:[(0,t.jsx)(n.strong,{children:"GET"})," ",(0,t.jsx)(n.code,{children:"/v1/mode"})]}),"\n",(0,t.jsxs)(n.p,{children:["Retrieves the operating mode of the light client. Light client can operate in two different modes, ",(0,t.jsx)(n.code,{children:"LightClient"})," or ",(0,t.jsx)(n.code,{children:"AppClient"}),", depending on configuration of application ID."]}),"\n",(0,t.jsx)(n.h4,{id:"responses",children:"Responses"}),"\n",(0,t.jsxs)(n.p,{children:["If operating mode is ",(0,t.jsx)(n.code,{children:"LightClient"})," response is:"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Status code: ",(0,t.jsx)(n.code,{children:"200 OK"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"LightClient"\n'})}),"\n",(0,t.jsxs)(n.p,{children:["In case of ",(0,t.jsx)(n.code,{children:"AppClient"})," mode, response is:"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Status code: ",(0,t.jsx)(n.code,{children:"200 OK"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{"AppClient": {app_id}}\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"get-v1latest_block",children:[(0,t.jsx)(n.strong,{children:"GET"})," ",(0,t.jsx)(n.code,{children:"/v1/latest_block"})]}),"\n",(0,t.jsx)(n.p,{children:"Retrieves the latest block processed by the light client."}),"\n",(0,t.jsx)(n.h4,{id:"responses-1",children:"Responses"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Status code: ",(0,t.jsx)(n.code,{children:"200 OK"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{"latest_block":{block_number}}\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"get-v1confidenceblock_number",children:[(0,t.jsx)(n.strong,{children:"GET"})," ",(0,t.jsx)(n.code,{children:"/v1/confidence/{block_number}"})]}),"\n",(0,t.jsx)(n.p,{children:"Given a block number, it returns the confidence computed by the light client for that specific block."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Path parameters:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"block_number"})," - block number (required)"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"responses-2",children:"Responses"}),"\n",(0,t.jsx)(n.p,{children:"In case when confidence is computed:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Status code: ",(0,t.jsx)(n.code,{children:"200 OK"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{ "block": 1, "confidence": 93.75, "serialised_confidence": "5232467296" }\n'})}),"\n",(0,t.jsx)(n.p,{children:"If confidence is not computed, and specified block is before the latest processed block:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Status code: ",(0,t.jsx)(n.code,{children:"400 Bad Request"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"Not synced"\n'})}),"\n",(0,t.jsx)(n.p,{children:"If confidence is not computed, and specified block is after the latest processed block:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Status code: ",(0,t.jsx)(n.code,{children:"404 Not Found"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"Not found"\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"get-v1appdatablock_number",children:[(0,t.jsx)(n.strong,{children:"GET"})," ",(0,t.jsx)(n.code,{children:"/v1/appdata/{block_number}"})]}),"\n",(0,t.jsx)(n.p,{children:"Given a block number, it retrieves the hex-encoded extrinsics for the specified block, if available. Alternatively, if specified by a query parameter, the retrieved extrinsic is decoded and returned as a base64-encoded string."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Path parameters:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"block_number"})," - block number (required)"]}),"\n"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Query parameters:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"decode"})," - ",(0,t.jsx)(n.code,{children:"true"})," if decoded extrinsics are requested (boolean, optional, default is ",(0,t.jsx)(n.code,{children:"false"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"responses-3",children:"Responses"}),"\n",(0,t.jsxs)(n.p,{children:["If application data is available, and decode is ",(0,t.jsx)(n.code,{children:"false"})," or unspecified:"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Status code: ",(0,t.jsx)(n.code,{children:"200 OK"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n  "block": 1,\n  "extrinsics": [\n    "0xc5018400d43593c715fdd31c61141abd04a99fd6822c8558854ccde39a5684e7a56da27d01308e88ca257b65514b7b44fc1913a6a9af6abc34c3d22761b0e425674d68df7de26be1c8533a7bbd01fdb3a8daa5af77df6d3fb0a67cde8241f461f4fe16f188000000041d011c6578616d706c65"\n  ]\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["If application data is available, and decode is ",(0,t.jsx)(n.code,{children:"true"}),":"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Status code: ",(0,t.jsx)(n.code,{children:"200 OK"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{ "block": 1, "extrinsics": ["ZXhhbXBsZQ=="] }\n'})}),"\n",(0,t.jsx)(n.p,{children:"If application data is not available, and specified block is the latest block:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Status code: ",(0,t.jsx)(n.code,{children:"401 Unauthorized"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"Processing block"\n'})}),"\n",(0,t.jsx)(n.p,{children:"If application data is not available, and specified block is not the latest block:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Status code: ",(0,t.jsx)(n.code,{children:"404 Not Found"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"Not found"\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"get-v1statusblock_number",children:[(0,t.jsx)(n.strong,{children:"GET"})," ",(0,t.jsx)(n.code,{children:"/v1/status/{block_number}"})]}),"\n",(0,t.jsx)(n.p,{children:"Retrieves the status of the latest block processed by the light client."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Path parameters:"}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"block_number"})," - block number (required)"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"responses-4",children:"Responses"}),"\n",(0,t.jsxs)(n.p,{children:["If latest processed block exists, and ",(0,t.jsx)(n.code,{children:"app_id"})," is configured (otherwise, ",(0,t.jsx)(n.code,{children:"app_id"})," is not set):"]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Status code: ",(0,t.jsx)(n.code,{children:"200 OK"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{ "block_num": 89, "confidence": 93.75, "app_id": 1 }\n'})}),"\n",(0,t.jsx)(n.p,{children:"If there are no processed blocks:"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Status code: ",(0,t.jsx)(n.code,{children:"404 Not Found"})]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'"Not found"\n'})})]})}function p(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},5162:(e,n,s)=>{s.d(n,{Z:()=>i});s(7294);var t=s(512);const r={tabItem:"tabItem_Ymn6"};var l=s(5893);function i(e){let{children:n,hidden:s,className:i}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,i),hidden:s,children:n})}},4866:(e,n,s)=>{s.d(n,{Z:()=>_});var t=s(7294),r=s(512),l=s(2466),i=s(6550),c=s(469),a=s(1980),o=s(7392),d=s(12);function u(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:t,default:r}}=e;return{value:n,label:s,attributes:t,default:r}}))}(s);return function(e){const n=(0,o.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:s}=e;const r=(0,i.k6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,a._X)(l),(0,t.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,l=h(e),[i,a]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=s.find((e=>e.default))??s[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[o,u]=b({queryString:s,groupId:r}),[x,f]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,d.Nk)(s);return[r,(0,t.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:r}),j=(()=>{const e=o??x;return p({value:e,tabValues:l})?e:null})();(0,c.Z)((()=>{j&&a(j)}),[j]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);a(e),u(e),f(e)}),[u,f,l]),tabValues:l}}var f=s(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=s(5893);function m(e){let{className:n,block:s,selectedValue:t,selectValue:i,tabValues:c}=e;const a=[],{blockElementScrollPositionUntilNextRender:o}=(0,l.o5)(),d=e=>{const n=e.currentTarget,s=a.indexOf(n),r=c[s].value;r!==t&&(o(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=a.indexOf(e.currentTarget)+1;n=a[s]??a[0];break}case"ArrowLeft":{const s=a.indexOf(e.currentTarget)-1;n=a[s]??a[a.length-1];break}}n?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},n),children:c.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>a.push(e),onKeyDown:u,onClick:d,...l,className:(0,r.Z)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":t===n}),children:s??n},n)}))})}function v(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function k(e){const n=x(e);return(0,g.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,g.jsx)(m,{...e,...n}),(0,g.jsx)(v,{...e,...n})]})}function _(e){const n=(0,f.Z)();return(0,g.jsx)(k,{...e,children:u(e.children)},String(n))}},1151:(e,n,s)=>{s.d(n,{Z:()=>c,a:()=>i});var t=s(7294);const r={},l=t.createContext(r);function i(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);