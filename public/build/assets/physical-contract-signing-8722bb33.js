import{r as n,j as e,e as x}from"./app-6512ec23.js";import{s as b}from"./applicant-thunk-ddb072b1.js";import{M as h}from"./index-bbbaebee.js";import{m as f}from"./index-28af47ed.js";import{L as y}from"./render-d91bf3e3.js";import{C as j}from"./CheckCircleFilled-cecc34f1.js";import"./applicant-record-service-582e1730.js";import"./index-ab1db3cc.js";import"./presets-b664276e.js";import"./CloseCircleFilled-72f8e8e1.js";import"./AntdIcon-8b448a9a.js";import"./InfoCircleFilled-aa5f0cc1.js";import"./useZIndex-718f9d90.js";import"./useId-d9c65968.js";import"./button-395f1567.js";import"./Compact-251a5749.js";import"./useSize-492d1886.js";import"./CloseOutlined-d9ba04d4.js";import"./index-b20623ab.js";import"./KeyCode-40507553.js";import"./pickAttrs-47097f77.js";import"./fade-c25870e0.js";import"./ContextIsolator-f8c4eff9.js";import"./asyncToGenerator-ae65c638.js";import"./useClosable-41a93046.js";import"./useLocale-5ef37f61.js";import"./PurePanel-9fb38da3.js";function V({data:r,setOpen:c}){var p;const[m,i]=n.useState(!1),[s,a]=n.useState(!1),[o,d]=n.useState({ifftime:"",iffdate:""});r.joboffer.find(l=>l.status=="Accepted");const t=(p=r==null?void 0:r.joboffer)==null?void 0:p.find(l=>l.status=="Contract Signing");async function u(l){l.preventDefault(),a(!0);try{await x.dispatch(b({...r,...t,ifftime:o.ifftime,iffdate:o.iffdate,phase_status:"physical_contract_signing"})),await f.success("Email sent successfully"),a(!1),c(!1),i(!1)}catch(g){console.log("error",g),f.error("There was an error sending the email!"),a(!1)}}return e.jsxs("div",{className:"flex w-full items-center justify-center",children:[e.jsx("button",{onClick:()=>{i(!0),c(!1)},className:"bg-blue-500 w-full rounded-md text-white hover:bg-blue-600 p-1.5",children:"Physical Contract Signing"}),e.jsxs(h,{title:"Contract Signing (Physical Contract Signing)",centered:!0,visible:m,width:900,onOk:()=>{i(!1)},onCancel:()=>i(!1),footer:null,children:[e.jsx("li",{className:"bg-gray-300 h-0.5 mb-3"}),e.jsxs("form",{onSubmit:u,className:"w-full h-full",children:[e.jsxs("div",{className:"flex flex-col -mx-3 mb-3",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1",for:"grid-text",children:"Application No."}),e.jsx("input",{value:r==null?void 0:r.app_id,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"number",placeholder:"",readOnly:!0})]}),e.jsx("div",{className:"flex flex-1",children:e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Applicant's Name"}),e.jsx("input",{value:`${r.fname} ${r.mname} ${r.lname}`,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]})}),e.jsxs("div",{className:"flex flex-1 ",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Email Address"}),e.jsx("input",{value:r==null?void 0:r.email,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"email",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Job Position"}),e.jsx("input",{value:t==null?void 0:t.jobPos,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Salary"}),e.jsx("input",{value:t==null?void 0:t.salary,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]})]}),e.jsxs("div",{className:" flex",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Schedule date for Contract Signing"}),e.jsx("input",{onChange:l=>d({...o,iffdate:l.target.value}),className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"date",placeholder:"",required:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Schedule time for Contract Signing"}),e.jsx("input",{onChange:l=>d({...o,ifftime:l.target.value}),className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"time",placeholder:"",required:!0})]})]})]}),e.jsxs("button",{type:"submit",className:`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full ${s?"cursor-not-allowed opacity-75":""}`,onClick:u,disabled:s,children:[s?e.jsx(y,{spin:!0}):e.jsx(j,{}),s?" SENDING...":" CONFIRM"]})]})]})]})}export{V as default};