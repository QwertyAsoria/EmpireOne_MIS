import{r as d,b as x,j as e,e as p}from"./app-680b3cf1.js";import{s as b,g}from"./applicant-thunk-a3bd1dd7.js";import{M as h}from"./index-b7b9fa3f.js";import{m}from"./index-e26d934d.js";import{L as y}from"./render-68a8a42d.js";import{C as j}from"./CheckCircleFilled-1c240dcd.js";import"./applicant-record-service-ce1e1172.js";import"./index-e310f7c1.js";import"./presets-ed2e109f.js";import"./CloseCircleFilled-4912ec92.js";import"./AntdIcon-82f6858c.js";import"./InfoCircleFilled-564a7549.js";import"./useZIndex-121f599d.js";import"./useId-ba5db0c7.js";import"./button-3efb0b60.js";import"./Compact-8eb1181f.js";import"./useSize-cca0febe.js";import"./CloseOutlined-84cd7bc6.js";import"./index-91ca52e4.js";import"./KeyCode-806b1ce7.js";import"./pickAttrs-b0c359e3.js";import"./fade-80271a03.js";import"./ContextIsolator-6c32e20e.js";import"./asyncToGenerator-e39c1c83.js";import"./useClosable-33fbd275.js";import"./useLocale-bd96af51.js";import"./PurePanel-5f19b0d3.js";function V({open:u,setOpen:o,data:r,status:t,setOpenDialog:f}){const[i,a]=d.useState(!1),[s,n]=d.useState({ifftime:"",iffdate:""});x(l=>l.applicants);async function c(l){l.preventDefault(),a(!0);try{await p.dispatch(b({...r,ifftime:s.ifftime,iffdate:s.iffdate,phase_status:t})),p.dispatch(g()),a(!1),o(!1),f(!1),m.success("Email sent successfully")}catch{m.error("There was an error sending the email!"),a(!1)}}return e.jsx("div",{children:e.jsxs(h,{title:`Schedule for ${t} Interview (Face to face Interview)`,centered:!0,visible:u,width:900,onOk:()=>{o(!1)},onCancel:()=>o(!1),footer:null,children:[e.jsx("li",{className:"bg-gray-300 h-0.5"}),e.jsx("div",{className:"flex justify-end mt-1.5",children:e.jsxs("h1",{children:[e.jsx("b",{children:"Status:"})," (",t,")"]})}),e.jsxs("form",{onSubmit:c,className:"w-full h-full",children:[e.jsxs("div",{className:"flex flex-col -mx-3 mb-3",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1",for:"grid-text",children:"Application No."}),e.jsx("input",{value:r==null?void 0:r.app_id,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"number",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Applicant's Name"}),e.jsx("input",{value:`${r.fname} ${r.mname} ${r.lname}`,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Email Address"}),e.jsx("input",{value:r==null?void 0:r.email,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"email",placeholder:"",readOnly:!0})]})]}),e.jsxs("div",{className:"flex flex-1 ",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Contact No."}),e.jsx("input",{value:r==null?void 0:r.phone,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsxs("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:["Schedule date for ",t]}),e.jsx("input",{onChange:l=>n({...s,iffdate:l.target.value}),className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"date",placeholder:"",required:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsxs("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:["Schedule time for ",t]}),e.jsx("input",{onChange:l=>n({...s,ifftime:l.target.value}),className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"time",placeholder:"",required:!0})]})]})]}),e.jsxs("button",{type:"submit",className:`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full ${i?"cursor-not-allowed opacity-75":""}`,onClick:c,disabled:i,children:[i?e.jsx(y,{spin:!0}):e.jsx(j,{}),i?" SENDING...":" CONFIRM"]})]})]})})}export{V as default};