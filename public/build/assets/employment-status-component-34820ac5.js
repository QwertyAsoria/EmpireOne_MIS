import{r as n,j as e,e as d}from"./app-58700b96.js";import{u as y,g as j}from"./employee-section-thunk-8cc6d239.js";import{M as w}from"./index-2bdec1aa.js";import{M as v}from"./index-501db1c8.js";import{m as x}from"./index-9ee14c5c.js";import"./employee-service-f800e925.js";import"./applicant-final-service-912b1e89.js";import"./presets-0d785a93.js";import"./index-e6b3180d.js";import"./index-51b0d406.js";import"./useId-f1b9e5ca.js";import"./useZIndex-f08aedd6.js";import"./useSize-eb33bb25.js";import"./AntdIcon-298d23d8.js";import"./Compact-b2e8288a.js";import"./ContextIsolator-5fd2a4a7.js";import"./asyncToGenerator-839484c7.js";import"./KeyCode-e41eed22.js";import"./LeftOutlined-4318f3d8.js";import"./collapse-97de76d4.js";import"./render-b01b6924.js";import"./CheckCircleFilled-ba887285.js";import"./CloseCircleFilled-76972dcf.js";import"./InfoCircleFilled-af2d424c.js";import"./button-758b5be1.js";import"./CloseOutlined-ec12a53b.js";import"./index-2163b856.js";import"./pickAttrs-298605a0.js";import"./fade-9ef907af.js";import"./useClosable-1b1e0b3b.js";import"./useLocale-fa9fa40e.js";import"./PurePanel-2160b7da.js";function le({data:l,item:i}){var p,u,a;const[b,o]=n.useState(!1),[r,m]=n.useState({id:l==null?void 0:l.id,status:l==null?void 0:l.status}),[f,t]=n.useState(!1);function g(s){o(!0)}async function c(s){s.preventDefault(),t(!0);try{await d.dispatch(y(r)),await d.dispatch(j()),x.success("Updated Successfully"),o(!1)}catch(h){x.error(h.message||"Error updating changes")}finally{t(!1)}}return e.jsxs(e.Fragment,{children:[e.jsx(w.Item,{onClick:()=>g(),icon:i.icon,children:i.label}),e.jsx(v,{title:"Employee Status",centered:!0,visible:b,onOk:c,onCancel:()=>o(!1),confirmLoading:f,width:1e3,okText:"Update",cancelText:"Cancel",children:e.jsx("form",{class:"w-full h-full",onSubmit:c,children:e.jsxs("div",{class:"flex flex-col -mx-3 mb-6",children:[e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Employee's Name"}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",value:`${(p=l==null?void 0:l.applicant)==null?void 0:p.fname} ${(u=l==null?void 0:l.applicant)==null?void 0:u.mname} ${(a=l==null?void 0:l.applicant)==null?void 0:a.lname}`,readOnly:!0})]}),e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Employee No."}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",value:l==null?void 0:l.emp_id,readOnly:!0})]}),e.jsxs("div",{className:"flex flex-1 ",children:[e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"job Position"}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",value:l==null?void 0:l.position,readOnly:!0})]}),e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Department"}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",value:l==null?void 0:l.dept,readOnly:!0})]}),e.jsxs("div",{class:"w-full px-3",children:[e.jsxs("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:["Account ",e.jsx("i",{children:"(If Applicable)"})]}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",value:l==null?void 0:l.account,readOnly:!0})]})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Supervisor"}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",value:l==null?void 0:l.sup_id,readOnly:!0})]}),e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"EOGS Email"}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"email",value:l==null?void 0:l.eogs,readOnly:!0})]}),e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Status"}),e.jsxs("select",{className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",value:r==null?void 0:r.status,name:"employmentStatus",onChange:s=>m({...r,status:s.target.value}),children:[e.jsx("option",{value:"",disabled:!0,children:"Select status"}),e.jsx("option",{value:"Probationary",children:"Probationary"}),e.jsx("option",{value:"Extended Probationary",children:"Extended Probationary"}),e.jsx("option",{value:"EOPE",children:"End of Probationary Employment"}),e.jsx("option",{value:"Regular",children:"Regular"}),e.jsx("option",{value:"Terminated",children:"Terminated"}),e.jsx("option",{value:"Dismissed",children:"Dismissed"}),e.jsx("option",{value:"AWOL",children:"AWOL"}),e.jsx("option",{value:"Resigned",children:"Resigned"})]})]})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Hired Date"}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",value:l==null?void 0:l.hired,readOnly:!0})]}),e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Date of Regularization"}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",value:(l==null?void 0:l.due)??"",readOnly:!0})]})]})]})})})]})}export{le as default};