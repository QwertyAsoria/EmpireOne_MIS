import{r as i,b as l,j as a,e as m}from"./app-58700b96.js";import g from"./input-d87aba46.js";import{c as b,g as v}from"./department-thunk-f86cfda6.js";import{M as y}from"./index-501db1c8.js";import{m as d}from"./index-9ee14c5c.js";import{P as j}from"./PlusSquareTwoTone-5f4b6bf9.js";import"./erf-record-service-e78a23a7.js";import"./index-e6b3180d.js";import"./presets-0d785a93.js";import"./render-b01b6924.js";import"./AntdIcon-298d23d8.js";import"./asyncToGenerator-839484c7.js";import"./CheckCircleFilled-ba887285.js";import"./CloseCircleFilled-76972dcf.js";import"./InfoCircleFilled-af2d424c.js";import"./useZIndex-f08aedd6.js";import"./useId-f1b9e5ca.js";import"./button-758b5be1.js";import"./Compact-b2e8288a.js";import"./useSize-eb33bb25.js";import"./CloseOutlined-ec12a53b.js";import"./index-2163b856.js";import"./KeyCode-e41eed22.js";import"./pickAttrs-298605a0.js";import"./fade-9ef907af.js";import"./ContextIsolator-5fd2a4a7.js";import"./useClosable-1b1e0b3b.js";import"./useLocale-fa9fa40e.js";import"./PurePanel-2160b7da.js";const C=()=>{const[c,s]=i.useState(!1),{user:t}=l(e=>e.app),{users:n}=l(e=>e.app),[u,p]=i.useState(!1),[o,r]=i.useState({dept:"",depthead:"",site:(t==null?void 0:t.site)||""});console.log("site",t==null?void 0:t.site);const f=()=>{r(e=>({...e,site:(t==null?void 0:t.site)||""})),s(!0)};console.log("users",n);const h=async()=>{p(!0);try{await m.dispatch(b({...o})),await m.dispatch(v()),d.success("Successfully Added!"),s(!1)}catch{d.error("Failed to add department. Please try again.")}finally{p(!1)}},x=()=>{s(!1)};return a.jsxs(a.Fragment,{children:[a.jsxs("button",{type:"button",onClick:f,class:"inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 bg-transparent border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white gap-1",children:[a.jsx(j,{className:"text-xl"}),"Create Department"]}),a.jsx(y,{title:"Create Department",open:c,onOk:h,onCancel:x,confirmLoading:u,okText:"Save",children:a.jsxs("div",{className:"flex flex-col gap-4",children:[a.jsx("input",{onChange:e=>r({...o,site:e.target.value}),value:(t==null?void 0:t.site)??"",type:"hidden",className:"border p-2 rounded w-full"}),a.jsx(g,{onChange:e=>r({...o,dept:e.target.value}),required:!1,name:"dept",label:"Department Name",type:"text",value:o.dept}),a.jsxs("select",{className:"border p-2 rounded-md w-full",onChange:e=>r({...o,depthead:e.target.value}),value:o.depthead,children:[a.jsx("option",{value:"",children:"Select Department Head"}),Array.isArray(n)&&n.filter(e=>["Manager","Account Manager","Supervisor","Operations Manager","Director","CEO"].includes(e.position)).map(e=>a.jsx("option",{value:e.id,children:`${e.employee_fname} ${e.employee_lname}`},e.id))]})]})})]})},Y=C;export{Y as default};