import{r as p,b as m,u,j as e,A as d,e as x}from"./app-58700b96.js";import{s as f}from"./medicine-record-thunk-7b23df72.js";import{M as b}from"./index-501db1c8.js";import{P as g}from"./PlusSquareTwoTone-5f4b6bf9.js";import{M as h}from"./MedicineBoxOutlined-105e89d1.js";import"./index-e6b3180d.js";import"./presets-0d785a93.js";import"./render-b01b6924.js";import"./AntdIcon-298d23d8.js";import"./asyncToGenerator-839484c7.js";import"./CheckCircleFilled-ba887285.js";import"./CloseCircleFilled-76972dcf.js";import"./InfoCircleFilled-af2d424c.js";import"./useZIndex-f08aedd6.js";import"./useId-f1b9e5ca.js";import"./button-758b5be1.js";import"./Compact-b2e8288a.js";import"./useSize-eb33bb25.js";import"./CloseOutlined-ec12a53b.js";import"./index-2163b856.js";import"./KeyCode-e41eed22.js";import"./pickAttrs-298605a0.js";import"./fade-9ef907af.js";import"./ContextIsolator-5fd2a4a7.js";import"./useClosable-1b1e0b3b.js";import"./useLocale-fa9fa40e.js";import"./PurePanel-2160b7da.js";function Q(){const[l,t]=p.useState(!1),{medicine_recordForm:r}=m(o=>o.medicine_records);console.log("medicine_record",r);const n=u(),a=()=>{t(!1)};function i(o){const s=o.target.name;s=="image"?n(d({...r,[s]:o.target.files})):n(d({...r,[s]:o.target.value}))}function c(o){o.preventDefault(),x.dispatch(f(r)),t(!1),a()}return e.jsxs("div",{className:"my-2",children:[e.jsx("div",{class:"inline-flex rounded-md shadow-sm",role:"group",children:e.jsxs("button",{type:"button",onClick:()=>t(!0),class:"inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 bg-transparent border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:bg-blue-500 focus:text-white      gap-1",children:[e.jsx(g,{className:"text-xl"}),"Add New Medicine"]})}),e.jsx(b,{title:e.jsxs(e.Fragment,{children:[e.jsx(h,{})," New Medicine"]}),centered:!0,open:l,onOk:o=>c(o),onCancel:()=>t(!1),width:1e3,okText:"Save",cancelText:"Cancel",children:e.jsx("form",{class:"w-full",onSubmit:c,children:e.jsxs("div",{class:"flex flex-wrap -mx-3 mb-6",children:[e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",for:"meds",children:"Medicine"}),e.jsx("input",{name:"medicine",class:"appearance-none block w-full  border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"meds",type:"text",placeholder:"Name of Medicine",onChange:i})]}),e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",for:"med_type",children:"Medicine Type"}),e.jsx("input",{name:"med_type",class:"appearance-none block w-full  border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"med_type",type:"text",placeholder:"Type of Medicine",onChange:i})]}),e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",for:"med_desc",children:"Medicine Description"}),e.jsx("textarea",{name:"med_desc",class:"appearance-none block w-full  border border-gray-400 rounded py-6 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"med_desc",type:"text",placeholder:"Add Description",onChange:i})]})]})})})]})}export{Q as default};