import{r as n,j as e,e as x}from"./app-3b84976d.js";import{s as b}from"./applicant-thunk-1c67badd.js";import{M as h}from"./index-6c08e43b.js";import{m as f}from"./index-a2c57624.js";import{L as y}from"./render-1396a843.js";import{C as j}from"./CheckCircleFilled-029da670.js";import"./applicant-record-service-756024aa.js";import"./index-fb46f770.js";import"./presets-848e2fba.js";import"./CloseCircleFilled-8c07b52b.js";import"./AntdIcon-71e46007.js";import"./InfoCircleFilled-31ffd59f.js";import"./useZIndex-37b4d1e8.js";import"./useId-3d30b7d5.js";import"./button-e56b0dd6.js";import"./Compact-1ade6323.js";import"./useSize-57d8ee82.js";import"./CloseOutlined-010645d0.js";import"./index-4b482e21.js";import"./KeyCode-01d15957.js";import"./pickAttrs-63d008c5.js";import"./fade-8ae6ceed.js";import"./ContextIsolator-7b71f2c7.js";import"./asyncToGenerator-c437901c.js";import"./useClosable-6e22efdd.js";import"./useLocale-e9fef4a7.js";import"./PurePanel-46f1ca19.js";function V({data:r,setOpen:c}){var p;const[m,i]=n.useState(!1),[s,a]=n.useState(!1),[o,d]=n.useState({ifftime:"",iffdate:""});r.joboffer.find(l=>l.status=="Accepted");const t=(p=r==null?void 0:r.joboffer)==null?void 0:p.find(l=>l.status=="Contract Signing");async function u(l){l.preventDefault(),a(!0);try{await x.dispatch(b({...r,...t,ifftime:o.ifftime,iffdate:o.iffdate,phase_status:"physical_contract_signing"})),await f.success("Email sent successfully"),a(!1),c(!1),i(!1)}catch(g){console.log("error",g),f.error("There was an error sending the email!"),a(!1)}}return e.jsxs("div",{className:"flex w-full items-center justify-center",children:[e.jsx("button",{onClick:()=>{i(!0),c(!1)},className:"bg-blue-500 w-full rounded-md text-white hover:bg-blue-600 p-1.5",children:"Physical Contract Signing"}),e.jsxs(h,{title:"Contract Signing (Physical Contract Signing)",centered:!0,visible:m,width:900,onOk:()=>{i(!1)},onCancel:()=>i(!1),footer:null,children:[e.jsx("li",{className:"bg-gray-300 h-0.5 mb-3"}),e.jsxs("form",{onSubmit:u,className:"w-full h-full",children:[e.jsxs("div",{className:"flex flex-col -mx-3 mb-3",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1",for:"grid-text",children:"Application No."}),e.jsx("input",{value:r==null?void 0:r.app_id,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"number",placeholder:"",readOnly:!0})]}),e.jsx("div",{className:"flex flex-1",children:e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Applicant's Name"}),e.jsx("input",{value:`${r.fname} ${r.mname} ${r.lname}`,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]})}),e.jsxs("div",{className:"flex flex-1 ",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Email Address"}),e.jsx("input",{value:r==null?void 0:r.email,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"email",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Job Position"}),e.jsx("input",{value:t==null?void 0:t.jobPos,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Salary"}),e.jsx("input",{value:t==null?void 0:t.salary,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]})]}),e.jsxs("div",{className:" flex",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Schedule date for Contract Signing"}),e.jsx("input",{onChange:l=>d({...o,iffdate:l.target.value}),className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"date",placeholder:"",required:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Schedule time for Contract Signing"}),e.jsx("input",{onChange:l=>d({...o,ifftime:l.target.value}),className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"time",placeholder:"",required:!0})]})]})]}),e.jsxs("button",{type:"submit",className:`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full ${s?"cursor-not-allowed opacity-75":""}`,onClick:u,disabled:s,children:[s?e.jsx(y,{spin:!0}):e.jsx(j,{}),s?" SENDING...":" CONFIRM"]})]})]})]})}export{V as default};