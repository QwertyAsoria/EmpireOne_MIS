import{r as d,b as u,j as e}from"./app-f9aa361b.js";import w from"./physical-contract-signing-0cce8856.js";import N from"./virtual-contract-signing-e6efdad7.js";import k from"./onboarding-acknowledge-section-a5371ce8.js";import{C as x}from"./CheckSquareOutlined-cb08d3e3.js";import{M as p}from"./index-fe4f1a95.js";import{F as S}from"./FormOutlined-78803766.js";import"./applicant-thunk-eb883471.js";import"./applicant-record-service-006b5269.js";import"./index-5ed4515c.js";import"./index-b82e7869.js";import"./presets-6f6b4eb7.js";import"./render-e6e7990e.js";import"./AntdIcon-d6d7446e.js";import"./asyncToGenerator-0799126c.js";import"./CheckCircleFilled-72bd3b60.js";import"./CloseCircleFilled-1707e5bc.js";import"./InfoCircleFilled-f3937f4a.js";import"./KeyCode-26a40ef5.js";import"./pickAttrs-434e6788.js";import"./useZIndex-65999aba.js";import"./CloseOutlined-2e98e761.js";import"./send-upload-contract-section-6a684d64.js";import"./XMarkIcon-80890639.js";import"./FilePdfOutlined-e4e87309.js";import"./onboarding-ack-service-01d84adf.js";import"./SendOutlined-3afbb14b.js";import"./useId-834090a0.js";import"./button-5ee08c6c.js";import"./Compact-acd8c433.js";import"./useSize-8621aa04.js";import"./index-73d627ed.js";import"./fade-4e867359.js";import"./ContextIsolator-a4220250.js";import"./useClosable-fbcbecf0.js";import"./useLocale-672a9b31.js";import"./PurePanel-219447d5.js";function ce({data:m}){var a;const[f,o]=d.useState(!1),[h,i]=d.useState(!1),{checklists:g}=u(s=>s.checklists),{applicant:t}=u(s=>s.final_rate),c=(a=t==null?void 0:t.requirements)==null?void 0:a.filter(s=>s.status==="Approved");console.log("applicant",t);async function j(){i(!0),o(!1)}const b=window.location.pathname+window.location.search;function C(s,r){const l=s.split("?")[1];return l?new URLSearchParams(l).get(r):null}const n=C(b,"status");return console.log("status",n),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"inline-flex rounded-md shadow-sm",role:"group",children:e.jsxs("button",{type:"button",onClick:()=>o(!0),className:"inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 bg-transparent border border-blue-500 rounded-s-lg hover:bg-blue-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:bg-blue-500 focus:text-white gap-1",children:[e.jsx(x,{className:"text-xl"}),"Pre Employment Checklist"]})}),e.jsxs(p,{title:e.jsxs("span",{className:"text-xl",children:[e.jsx(x,{})," Pre Employment Checklist of"," ",e.jsxs("b",{children:[(t==null?void 0:t.fname)??""," ",(t==null?void 0:t.lname)??""]})]}),centered:!0,open:f,onCancel:()=>o(!1),width:700,footer:null,children:[e.jsxs("form",{className:"w-full h-full",children:[e.jsx("div",{className:"flex items-center justify-center p-3",children:e.jsx("img",{className:"w-48",src:"/images/newlogo.png",alt:"logo"})}),e.jsx("div",{className:"flex flex-col -mx-3 mb-2 px-2",children:e.jsx("div",{children:g.filter(s=>s.site==="San Carlos").map((s,r)=>e.jsxs("div",{className:"flex items-center mb-4",children:[e.jsx("input",{id:`checkbox-${r}`,type:"checkbox",value:s.reqs,checked:c==null?void 0:c.some(l=>l.reqs==s.reqs),className:"w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"}),e.jsxs("label",{htmlFor:`checkbox-${r}`,className:"ms-2 text-lg font-medium ",children:[s.reqs," ",s.remarks==="Yes"&&e.jsx("span",{className:"text-red-500 text-xl",children:"*"})]})]},r))})})]}),e.jsxs("div",{className:"w-full",children:[n=="Accepted"&&e.jsx(k,{data:m,setOpen:o}),n=="Contract Signing"&&e.jsxs("button",{onClick:j,className:"flex items-center justify-center gap-1 bg-blue-500 w-full p-2 text-white rounded-md",children:[e.jsx(S,{}),e.jsx("div",{children:"Contract Signing"})]}),n=="Signed"&&e.jsx("div",{className:" text-slate-500 text-md",children:e.jsx("i",{children:"Contract signing completed."})})]})]}),e.jsx(p,{title:`Contract Signing for ${(t==null?void 0:t.fname)??""} ${(t==null?void 0:t.lname)??""}`,centered:!0,open:h,width:650,onCancel:()=>i(!1),footer:null,children:e.jsxs("div",{className:"flex flex-1 gap-4 w-full mt-4",children:[e.jsx(w,{setOpen:i,data:m}),e.jsx(N,{setOpen:i,data:m})]})})]})}export{ce as default};