import{r as s,b as a,j as e}from"./app-bafafda5.js";import{s as b}from"./pre-employment-file-service-db1bf299.js";import{h as j}from"./moment-a9aaa855.js";import{U as n,a as g}from"./index-6d0744a7.js";import{M as N}from"./index-11430430.js";import{B as v}from"./button-53cc1c49.js";import"./warning-3045d72d.js";import"./AntdIcon-a6021e08.js";import"./index-3489f972.js";import"./asyncToGenerator-b5e9f51a.js";import"./pickAttrs-738cc4b0.js";import"./zoom-6001308e.js";import"./useSize-f4859fa4.js";import"./Compact-053f96f5.js";import"./useZIndex-2c590492.js";import"./index-473fd553.js";import"./LoadingOutlined-89f0f2bf.js";import"./useForceUpdate-d12d4a04.js";import"./DeleteOutlined-9079078f.js";import"./EyeOutlined-f4ae2e02.js";import"./CheckCircleFilled-9a27eb54.js";import"./CheckOutlined-1ee2010f.js";import"./CloseOutlined-82d8888b.js";import"./useLocale-2928605e.js";import"./render-e2ad3102.js";import"./ExclamationCircleFilled-7d4c17ea.js";import"./InfoCircleFilled-93d6a5ad.js";import"./useClosable-e8a84018.js";import"./PurePanel-e7c2c981.js";function X(){const[m,i]=s.useState(!1);s.useState(!1),s.useState(!1);const{applicant:r}=a(t=>t.final_rate),{checklists:p}=a(t=>t.checklists),[o,d]=s.useState([]),[c,u]=s.useState(""),x=async()=>{i(!1);const t=new FormData;if(console.log("fileList",o),t.append("file",o.originFileObj),t.append("status","Uploaded"),t.append("reqs",c),t.append("created",j().format("YYYY-MM-DD HH:mm:ss")),t.append("app_id",window.location.pathname.split("/")[3]),o.status=="done"){const l=await b(t);console.log("result",l)}},f=()=>{i(!1)};async function h({file:t}){d(t)}return e.jsxs("div",{className:"my-2",children:[e.jsx("div",{class:"inline-flex rounded-md shadow-sm",role:"group",children:e.jsxs("button",{type:"button",onClick:()=>i(!0),class:"inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 bg-transparent border border-blue-500 rounded-e-lg hover:bg-blue-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:bg-blue-500 focus:text-white      gap-1",children:[e.jsx(n,{className:"text-xl"}),"Upload New Requirements"]})}),e.jsx(N,{title:"Add Requirements",centered:!0,open:m,onOk:x,onCancel:f,width:800,okText:"Upload",cancelText:"Cancel",children:e.jsxs("form",{className:"rounded-lg p-2",children:[e.jsx("h1",{className:"text-lg font-medium leading-6 mb-3 ",children:"UPLOAD REQUIREMENTS"}),e.jsx("div",{className:"mt-3 text-center sm:mt-0  sm:text-left",children:e.jsxs("div",{className:"mt-2",children:[e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Application ID"})}),e.jsx("input",{name:"",type:"text",value:(r==null?void 0:r.app_id)??"",className:"border p-2 rounded  w-full",readOnly:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Requirement's Name"})}),e.jsxs("select",{className:"border p-2 rounded  w-full",onChange:t=>u(t.target.value),children:[e.jsx("option",{children:" "}),p.filter(t=>t.site==="San Carlos").map((t,l)=>e.jsx("option",{value:t.reqs,children:t.reqs},l))]})]}),e.jsx(g,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",method:"GET",maxCount:1,onChange:h,multiple:!1,defaultFileList:o,children:e.jsx(v,{type:"primary",icon:e.jsx(n,{}),children:"Upload Scanned Image"})})]})})]})})]})}export{X as default};