import{r as o,b as f,j as t,e as w}from"./app-680b3cf1.js";import{s as q}from"./pre-employment-file-service-5cdc7615.js";import{h as S}from"./moment-a9aaa855.js";import{g as U}from"./final-rate-thunk-52cd81dc.js";import{F as v}from"./FileJpgOutlined-10743c2b.js";import{M as N}from"./index-b7b9fa3f.js";import{U as O,a as R}from"./index-bb8d261b.js";import{B as M}from"./button-3efb0b60.js";import{m as E}from"./index-e26d934d.js";import"./applicant-final-service-912b1e89.js";import"./applicant-record-service-ce1e1172.js";import"./presets-ed2e109f.js";import"./AntdIcon-82f6858c.js";import"./index-e310f7c1.js";import"./render-68a8a42d.js";import"./asyncToGenerator-e39c1c83.js";import"./CheckCircleFilled-1c240dcd.js";import"./CloseCircleFilled-4912ec92.js";import"./InfoCircleFilled-564a7549.js";import"./useZIndex-121f599d.js";import"./useId-ba5db0c7.js";import"./CloseOutlined-84cd7bc6.js";import"./index-91ca52e4.js";import"./KeyCode-806b1ce7.js";import"./pickAttrs-b0c359e3.js";import"./fade-80271a03.js";import"./ContextIsolator-6c32e20e.js";import"./useSize-cca0febe.js";import"./Compact-8eb1181f.js";import"./useClosable-33fbd275.js";import"./useLocale-bd96af51.js";import"./PurePanel-5f19b0d3.js";import"./collapse-97de76d4.js";import"./useForceUpdate-25998752.js";import"./DeleteOutlined-e17227d0.js";import"./EyeOutlined-29200e7b.js";import"./CheckOutlined-f7fad712.js";import"./index-eda4b3ae.js";function be(){var u;const[h,s]=o.useState(!1),[p,l]=o.useState(""),{checklists:x}=f(e=>e.checklists),[i,m]=o.useState([]),[b,c]=o.useState(!1),d=window.location.pathname.split("/")[2],{applicant:a}=f(e=>e.final_rate),g=()=>{s(!0)},j=((u=a==null?void 0:a.requirements)==null?void 0:u.map(e=>e.reqs))??[],r=x.filter(e=>!j.includes(e.reqs)),y=async()=>{c(!0);const e=new FormData;e.append("file",i[0].originFileObj),e.append("status","Uploaded"),e.append("reqs",p),e.append("created",S().format("YYYY-MM-DD HH:mm:ss")),e.append("app_id",d);try{i[0].status=="done"&&(await q(e),await w.dispatch(U(d)),E.success("Uploaded successfully!"),s(!1),m([]),l(""),setOpen(!1))}catch(n){console.error(n)}finally{c(!1)}},k=()=>{s(!1)};async function _({file:e}){m([e])}return t.jsxs("div",{children:[t.jsx("div",{className:"flex mt-2.5",children:t.jsxs("button",{type:"button",id:"theme-toggle",onClick:g,className:"px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 focus:outline-none transition-colors",children:[t.jsx(v,{})," UPLOAD REQUIREMENTS"]})}),t.jsxs(N,{confirmLoading:b,title:"UPLOAD REQUIREMENTS",open:h,onOk:y,okText:"Submit",onCancel:k,children:[t.jsxs("div",{className:"w-full",children:[t.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Name of Requirements"}),t.jsxs("select",{className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",name:"",id:"",onChange:e=>l(e.target.value),children:[!p&&t.jsx("option",{value:"",selected:!0,disabled:!0}),r==null?void 0:r.filter(e=>e.site==="San Carlos").map((e,n)=>t.jsxs("option",{value:e.reqs,children:[e.reqs," ",e.remarks==="Yes"?"*":""]},n))]})]}),t.jsx(O,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",method:"GET",maxCount:1,onChange:_,multiple:!1,fileList:i,children:t.jsx(M,{type:"primary",icon:t.jsx(R,{}),children:"Upload Scanned Image"})}),t.jsx("div",{className:"mt-3 text-zinc-400 text-sm",children:t.jsx("p",{children:t.jsx("i",{children:"Note: Requirements marked with an asterisk (*) are mandatory and must be submitted or uploaded to proceed to the next step of the application process."})})})]})]})}export{be as default};