import{r as o,b as f,j as t,e as w}from"./app-c82c5dc1.js";import{s as q}from"./pre-employment-file-service-baac60d8.js";import{h as S}from"./moment-a9aaa855.js";import{g as U}from"./final-rate-thunk-7e0def48.js";import{F as v}from"./FileJpgOutlined-59b803d3.js";import{M as N}from"./index-01feef27.js";import{U as O,a as R}from"./index-4fc896a2.js";import{B as M}from"./button-5b4b1283.js";import{m as E}from"./index-708c90de.js";import"./applicant-final-service-912b1e89.js";import"./applicant-record-service-f924ad45.js";import"./presets-befb9724.js";import"./AntdIcon-f967147a.js";import"./index-da0094f8.js";import"./render-3653778a.js";import"./asyncToGenerator-5e869aae.js";import"./CheckCircleFilled-b74385aa.js";import"./CloseCircleFilled-cb3eccda.js";import"./InfoCircleFilled-014fe9a2.js";import"./useZIndex-4993f9da.js";import"./useId-5f6fd7dc.js";import"./CloseOutlined-76f93c12.js";import"./index-5e55e425.js";import"./KeyCode-067fecd0.js";import"./pickAttrs-0d75bf72.js";import"./fade-b874523d.js";import"./ContextIsolator-43757ab5.js";import"./useSize-7ab02e97.js";import"./Compact-7c697923.js";import"./useClosable-658f25ab.js";import"./useLocale-14fa46fd.js";import"./PurePanel-31296d74.js";import"./collapse-97de76d4.js";import"./useForceUpdate-7973e799.js";import"./DeleteOutlined-6e584aec.js";import"./EyeOutlined-e5a2fd5c.js";import"./CheckOutlined-63ce2da8.js";import"./index-b989725f.js";function be(){var u;const[h,s]=o.useState(!1),[p,l]=o.useState(""),{checklists:x}=f(e=>e.checklists),[i,m]=o.useState([]),[b,c]=o.useState(!1),d=window.location.pathname.split("/")[2],{applicant:a}=f(e=>e.final_rate),g=()=>{s(!0)},j=((u=a==null?void 0:a.requirements)==null?void 0:u.map(e=>e.reqs))??[],r=x.filter(e=>!j.includes(e.reqs)),y=async()=>{c(!0);const e=new FormData;e.append("file",i[0].originFileObj),e.append("status","Uploaded"),e.append("reqs",p),e.append("created",S().format("YYYY-MM-DD HH:mm:ss")),e.append("app_id",d);try{i[0].status=="done"&&(await q(e),await w.dispatch(U(d)),E.success("Uploaded successfully!"),s(!1),m([]),l(""),setOpen(!1))}catch(n){console.error(n)}finally{c(!1)}},k=()=>{s(!1)};async function _({file:e}){m([e])}return t.jsxs("div",{children:[t.jsx("div",{className:"flex mt-2.5",children:t.jsxs("button",{type:"button",id:"theme-toggle",onClick:g,className:"px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors",children:[t.jsx(v,{})," UPLOAD REQUIREMENTS"]})}),t.jsxs(N,{confirmLoading:b,title:"UPLOAD REQUIREMENTS",open:h,onOk:y,okText:"Submit",onCancel:k,children:[t.jsxs("div",{className:"w-full",children:[t.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Name of Requirements"}),t.jsxs("select",{className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",name:"",id:"",onChange:e=>l(e.target.value),children:[!p&&t.jsx("option",{value:"",selected:!0,disabled:!0}),r==null?void 0:r.filter(e=>e.site==="San Carlos").map((e,n)=>t.jsxs("option",{value:e.reqs,children:[e.reqs," ",e.remarks==="Yes"?"*":""]},n))]})]}),t.jsx(O,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",method:"GET",maxCount:1,onChange:_,multiple:!1,fileList:i,children:t.jsx(M,{type:"primary",icon:t.jsx(R,{}),children:"Upload Scanned Image"})}),t.jsx("div",{className:"mt-3 text-zinc-400 text-sm",children:t.jsx("p",{children:t.jsx("i",{children:"Note: Requirements marked with an asterisk (*) are mandatory and must be submitted or uploaded to proceed to the next step of the application process."})})})]})]})}export{be as default};