import{r as o,j as e,c as h}from"./app-0df8c9ad.js";import y from"./send-upload-contract-section-23eecd24.js";import{a as w}from"./applicant-thunk-25aed4ee.js";import{M as N}from"./index-4064e24c.js";import{m}from"./index-d9a9b981.js";import{L as j}from"./LoadingOutlined-db5d11d4.js";import{C as v}from"./CheckCircleFilled-da7a6620.js";import"./XMarkIcon-75f8c105.js";import"./FilePdfOutlined-77024e3a.js";import"./presets-202283c5.js";import"./AntdIcon-3caab9bf.js";import"./applicant-record-service-adbaa099.js";import"./index-bbe26f5d.js";import"./render-76e9977e.js";import"./asyncToGenerator-14626b52.js";import"./CloseCircleFilled-8f4259b9.js";import"./InfoCircleFilled-30ad0a9d.js";import"./useZIndex-09e90104.js";import"./useId-e875338e.js";import"./button-e3556dc3.js";import"./Compact-7026a57c.js";import"./useSize-b5e2027d.js";import"./CloseOutlined-2aaac7f6.js";import"./index-6e69c1c8.js";import"./pickAttrs-13cf7b6a.js";import"./ContextIsolator-7afaf7d8.js";import"./useClosable-7f0266ef.js";import"./useLocale-9c0b4cf8.js";import"./PurePanel-5247e641.js";function ee({data:l,setOpen:c}){var u;const[d,t]=o.useState(!1),[s,n]=o.useState(!1),[f,x]=o.useState(null),[b,g]=o.useState(null),r=(u=l==null?void 0:l.joboffer)==null?void 0:u.find(a=>a.status=="Contract Signing");async function p(a){a.preventDefault(),n(!0);const i=new FormData;i.append("file",b),i.append("phase_status","virtual_contract_signing"),i.append("jobPos",r==null?void 0:r.jobPos),i.append("salary",r==null?void 0:r.salary),i.append("app_id",l==null?void 0:l.app_id),i.append("fname",l==null?void 0:l.fname),i.append("lname",l==null?void 0:l.lname),i.append("email",l==null?void 0:l.email);try{await h.dispatch(w(i)),n(!1),c(!1),m.success("Email sent successfully")}catch{m.error("There was an error sending the email!"),n(!1)}}return e.jsxs("div",{className:"flex w-full items-center justify-center",children:[e.jsx("button",{onClick:()=>{t(!0),c(!1)},className:"bg-blue-500 w-full rounded-md text-white hover:bg-blue-600 p-1.5",children:"Virtual Contract Signing"}),e.jsxs(N,{title:"Contract Signing (Virtual Contract Signing)",centered:!0,visible:d,width:900,onOk:()=>{t(!1)},onCancel:()=>t(!1),footer:null,children:[e.jsx("li",{className:"bg-gray-300 h-0.5 mb-3"}),e.jsxs("form",{onSubmit:p,className:"w-full h-full",children:[e.jsxs("div",{className:"flex flex-col -mx-3 mb-3",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1",for:"grid-text",children:"Application No."}),e.jsx("input",{value:l==null?void 0:l.app_id,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"number",placeholder:"",readOnly:!0})]}),e.jsx("div",{className:"flex flex-1",children:e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Applicant's Name"}),e.jsx("input",{value:`${l.fname} ${l.mname} ${l.lname}`,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]})}),e.jsxs("div",{className:"flex flex-1 ",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Email Address"}),e.jsx("input",{value:l==null?void 0:l.email,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"email",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Job Position"}),e.jsx("input",{value:r==null?void 0:r.jobPos,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Salary"}),e.jsx("input",{value:r==null?void 0:r.salary,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]})]})]}),e.jsx(y,{setFile:g,uploadedFile:f,setUploadedFile:x}),e.jsxs("button",{type:"submit",className:`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full ${s?"cursor-not-allowed opacity-75":""}`,onClick:p,disabled:s,children:[s?e.jsx(j,{spin:!0}):e.jsx(v,{}),s?" SENDING...":" CONFIRM"]})]})]})]})}export{ee as default};