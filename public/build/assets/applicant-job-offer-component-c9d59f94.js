import{b as j,r as d,j as e,e as f}from"./app-680b3cf1.js";import{a as w}from"./hiring-thunk-2550da46.js";import{g as y}from"./applicant-thunk-a3bd1dd7.js";import{M as N}from"./index-be069234.js";import{M as v}from"./index-b7b9fa3f.js";import{B as k}from"./BriefcaseIcon-3ac8b11e.js";import{m as A}from"./index-e26d934d.js";import{L as O}from"./render-68a8a42d.js";import"./job-offer-service-b14f304c.js";import"./applicant-record-service-ce1e1172.js";import"./presets-ed2e109f.js";import"./index-e310f7c1.js";import"./index-eda4b3ae.js";import"./useId-ba5db0c7.js";import"./useZIndex-121f599d.js";import"./useSize-cca0febe.js";import"./AntdIcon-82f6858c.js";import"./Compact-8eb1181f.js";import"./ContextIsolator-6c32e20e.js";import"./asyncToGenerator-e39c1c83.js";import"./KeyCode-806b1ce7.js";import"./LeftOutlined-e9c31311.js";import"./collapse-97de76d4.js";import"./CheckCircleFilled-1c240dcd.js";import"./CloseCircleFilled-4912ec92.js";import"./InfoCircleFilled-564a7549.js";import"./button-3efb0b60.js";import"./CloseOutlined-84cd7bc6.js";import"./index-91ca52e4.js";import"./pickAttrs-b0c359e3.js";import"./fade-80271a03.js";import"./useClosable-33fbd275.js";import"./useLocale-bd96af51.js";import"./PurePanel-5f19b0d3.js";function se({data:a,item:p}){var m;const{job_positions:n}=j(o=>o.job_positions),[r,s]=d.useState({allowance:0}),[b,t]=d.useState(!1),[i,c]=d.useState(!1);function g(o){t(!0)}async function u(o){o.preventDefault(),c(!0);try{await f.dispatch(w({...r,...a,status:"Pending"})),await f.dispatch(y()),A.success("Job Offer already sent!"),t(!1),c(!1)}catch{c(!1)}}return console.log("job_positions",n),e.jsxs(e.Fragment,{children:[e.jsx(N.Item,{onClick:()=>g(),icon:p.icon,children:p.label}),e.jsxs(v,{title:"Job Offer",centered:!0,visible:b,width:900,onOk:()=>{t(!1)},onCancel:()=>t(!1),footer:null,children:[e.jsx("li",{className:"bg-gray-300 h-0.5"}),e.jsxs("form",{onSubmit:u,className:"w-full h-full mt-3.5",children:[e.jsxs("div",{className:"flex flex-col -mx-3 mb-3",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1",for:"grid-text",children:"Application No."}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"number",placeholder:"",value:a.app_id,readOnly:!0})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Firstname"}),e.jsx("input",{value:a.fname,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Middlename"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",value:a.mname,placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Lastname"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",value:a.lname,type:"text",placeholder:"",readOnly:!0})]})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Job Position"}),e.jsxs("select",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",name:"",id:"",onChange:o=>{var x;const l=n.find(h=>h.jPosition===o.target.value);s({...r,outsourcing_erf:{...r.outsourcing_erf,department:((x=l==null?void 0:l.outsourcing_erf)==null?void 0:x.department)||""},salary:(l==null?void 0:l.salary)||"",jobPos:(l==null?void 0:l.jPosition)||o.target.value})},children:[e.jsx("option",{selected:!0,disabled:!0}),n.map((o,l)=>e.jsx("option",{id:o.salary,value:o.jPosition,children:o.jPosition},l))]}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"hidden",placeholder:"",readOnly:!0,value:((m=r==null?void 0:r.outsourcing_erf)==null?void 0:m.department)??""})]}),e.jsxs("div",{className:"w-3/5 px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Salary Offer"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0,value:(r==null?void 0:r.salary)??""})]}),e.jsxs("div",{className:"w-3/5 px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Allowance"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",name:"allowance",onChange:o=>s({...r,[o.target.name]:o.target.value})})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Type of Allowance"}),e.jsxs("select",{onChange:o=>s({...r,[o.target.name]:o.target.value}),className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",name:"typea",id:"",children:[e.jsx("option",{}),e.jsx("option",{value:"Program Allowance",children:"Program Allowance"}),e.jsx("option",{value:"Rice and Meal Allowance",children:"Rice and Meal Allowance"}),e.jsx("option",{value:"Communication Allowance",children:"Communication Allowance"}),e.jsx("option",{value:"Skill Allowance",children:"Skill Allowance"}),e.jsx("option",{value:"Interim Allowance",children:"Interim Allowance"}),e.jsx("option",{value:"Transportation Allowance",children:"Transportation Allowance"}),e.jsx("option",{value:"Travel Allowance",children:"Travel Allowance"}),e.jsx("option",{value:"Clothing Allowance",children:"Clothing Allowance"})]})]})]})]}),e.jsx("button",{onClick:u,type:"submit",disabled:i,className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full",children:e.jsxs("div",{className:"flex flex-1 items-center justify-center",children:[i?e.jsx(O,{spin:!0}):e.jsx(k,{className:"h-6 mr-1"}),"  ",i?" SENDING...":" SEND JOB OFFER"]})})]})]})]})}export{se as default};