import{b as o,r as d,c as n,j as e}from"./app-f9aa361b.js";import m from"./customer-service-initial-result-section-17997ed8.js";import c from"./guide-question-initial-section-11832444.js";import x from"./problem-solving-initial-result-section-41b6cf25.js";import u from"./teamwork-initial-result-section-bb7437b4.js";import{g as h}from"./final-rate-thunk-70c27030.js";import"./initial-rate-mark-component-b1ecaaed.js";import"./UserCircleIcon-940a7832.js";import"./initial-guide-question-component-0bcae82f.js";import"./LightBulbIcon-d23386ab.js";import"./UserGroupIcon-5c8fd980.js";import"./applicant-final-service-912b1e89.js";import"./applicant-record-service-006b5269.js";function _(){var r,s,t;const{applicant:l}=o(a=>a.final_rate),i=window.location.pathname.split("/")[3];return d.useEffect(()=>{n.dispatch(h(i))},[]),e.jsxs("div",{className:"font-sans",children:[e.jsx("div",{className:"flex text-xl items-center justify-center mb-1",children:e.jsx("h1",{children:e.jsx("b",{children:"Initial Phase Result"})})}),e.jsxs("form",{className:"border rounded-lg p-3.5",children:[e.jsxs("div",{className:"flex flex-1 gap-3.5",children:[e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Application No."})}),e.jsx("input",{type:"text",placeholder:"",value:l==null?void 0:l.app_id,className:"border p-2 rounded w-full",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Applicant's Name"})}),e.jsx("input",{type:"text",placeholder:"",value:`${l==null?void 0:l.fname} ${l==null?void 0:l.lname}`,className:"border p-2 rounded w-full",readOnly:!0})]})]}),e.jsx(u,{data:l}),e.jsx(x,{data:l}),e.jsx(m,{data:l}),e.jsx(c,{}),e.jsxs("div",{className:"flex flex-col w-full mt-3",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"OVERALL RESULT"})}),e.jsx("input",{type:"number",placeholder:"",value:(r=l==null?void 0:l.initial)==null?void 0:r.oavg,className:"border p-2 rounded w-full mt-1",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col w-full mt-5",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"INITIAL PHASE INTERVIEWER"})}),e.jsx("input",{type:"text",placeholder:"",value:(s=l==null?void 0:l.initial)==null?void 0:s.interviewer,className:"border p-2 rounded w-full mt-1",readOnly:!0})]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("label",{children:e.jsx("b",{children:"OVERALL COMMENT"})}),e.jsx("textarea",{placeholder:"",value:(t=l==null?void 0:l.initial)==null?void 0:t.ocomment,className:"border p-2 rounded w-full mt-1 h-40",readOnly:!0})]})]})]})}export{_ as default};