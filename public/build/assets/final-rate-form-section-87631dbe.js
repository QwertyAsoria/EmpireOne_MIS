import{b as c,u,r as d,F as m,j as e,c as h,y as f}from"./app-66c2d29a.js";import j from"./customer-service-final-rate-section-146e0963.js";import b from"./work-effectiveness-final-rate-section-ead3b347.js";import{s as g}from"./final-rate-thunk-39f4eb63.js";import{m as v}from"./index-55c73ddc.js";import{L as N}from"./LoadingOutlined-a6c3ae95.js";import{C as y}from"./CheckCircleFilled-ff72a340.js";import"./final-rate-mark-component-5addf1f7.js";import"./UserCircleIcon-31e7d334.js";import"./BriefcaseIcon-41396ea0.js";import"./applicant-final-service-912b1e89.js";import"./applicant-record-service-219c874a.js";import"./index-ae953238.js";import"./presets-149415d9.js";import"./render-32dada9c.js";import"./asyncToGenerator-89f53324.js";import"./CloseCircleFilled-a8140992.js";import"./AntdIcon-8728ec96.js";import"./InfoCircleFilled-eee5654e.js";import"./useZIndex-5312b8ae.js";import"./pickAttrs-5acfc901.js";import"./CloseOutlined-26c88e73.js";function z(){const{finalRate:l,applicant:a}=c(t=>t.final_rate),p=window.location.pathname.split("/")[3],{user:s}=c(t=>t.app),i=u(),[r,n]=d.useState(!1);d.useEffect(()=>{i(m({...l,interviewer:(s==null?void 0:s.employee_fname)+" "+(s==null?void 0:s.employee_lname),int_id:s.id,app_id:p,oavg:(parseInt(l.cscore??0)+parseInt(l.wscore??0))/2}))},[l==null?void 0:l.cscore,l==null?void 0:l.wscore,s==null?void 0:s.employee_fname]);function x(t){i(m({...l,[t.target.name]:t.target.value}))}async function o(t){t.preventDefault(),n(!0),await h.dispatch(g(l)),v.success("Successfully Rated!"),n(!1),setTimeout(()=>{f.visit("/admin/recruitment/applicants/applicant_records?page=1")},2e3)}return console.log(l,"finalRate"),e.jsxs("div",{className:"font-sans",children:[e.jsx("div",{className:"flex text-xl items-center justify-center mb-1",children:e.jsx("h1",{children:e.jsx("b",{children:"Final Rating Scale"})})}),e.jsxs("div",{className:"flex flex-1 justify-end pr-4",children:[e.jsx("h1",{className:"text-lg mb-2 bg-ge",children:e.jsx("b",{children:"Status:"})})," ",e.jsx("h1",{className:"bg-green-500 text-lg rounded-md p-1 text-white ml-1",children:a.status})]}),e.jsxs("form",{className:"border rounded-lg p-3.5",onSubmit:o,children:[e.jsxs("div",{className:"flex flex-1 gap-3.5",children:[e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Application No."})}),e.jsx("input",{type:"number",value:a.app_id??"",placeholder:"",className:"border p-2 rounded w-full",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Applicant's Name"})}),e.jsx("input",{type:"text",value:a.fname+" "+a.lname,placeholder:"",className:"border p-2 rounded w-full",readOnly:!0})]})]}),e.jsx(j,{}),e.jsx(b,{}),e.jsxs("div",{className:"flex items-center mb-5 mt-3 gap-1",children:[e.jsx("input",{id:"default-checkbox",type:"checkbox",value:"",class:"w-4 h-4 text-blue-600 bg-gray-100 border-black rounded focus:ring-blue-500 focus:ring-2"}),e.jsx("h1",{children:e.jsx("b",{children:"Mark as Tier Shark"})})]}),e.jsxs("div",{className:"flex flex-col w-full mt-3",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"OVERALL RESULT"})}),e.jsx("input",{type:"number",value:l.oavg??0,name:"final_overall_r",placeholder:"",className:"border p-2 rounded w-full mt-1",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col w-full mt-5",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"FINAL PHASE INTERVIEWER"})}),e.jsx("input",{type:"text",value:(l==null?void 0:l.interviewer)??"",placeholder:"",className:"border p-2 rounded w-full mt-1",readOnly:!0})]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("label",{children:e.jsx("b",{children:"OVERALL COMMENT"})}),e.jsx("textarea",{placeholder:"",name:"ocomment",onChange:x,className:"border p-2 rounded w-full mt-1 h-40"})]}),e.jsx("div",{className:"flex justify-end mt-3.5",children:e.jsxs("button",{type:"submit",className:`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full ${r?"cursor-not-allowed opacity-75":""}`,onClick:o,disabled:r,children:[r?e.jsx(N,{spin:!0}):e.jsx(y,{}),r?" Loading...":" CONFIRM"]})})]})]})}export{z as default};