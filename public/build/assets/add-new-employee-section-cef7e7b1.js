import{r as p,b as r,j as e,e as u}from"./app-c82c5dc1.js";import{s as y,g as j}from"./employee-section-thunk-d19e0607.js";import{M as v}from"./index-01feef27.js";import{m}from"./index-708c90de.js";import{U as w}from"./UsergroupAddOutlined-f12f50a8.js";import"./employee-service-a8f241bf.js";import"./applicant-final-service-912b1e89.js";import"./index-da0094f8.js";import"./presets-befb9724.js";import"./render-3653778a.js";import"./AntdIcon-f967147a.js";import"./asyncToGenerator-5e869aae.js";import"./CheckCircleFilled-b74385aa.js";import"./CloseCircleFilled-cb3eccda.js";import"./InfoCircleFilled-014fe9a2.js";import"./useZIndex-4993f9da.js";import"./useId-5f6fd7dc.js";import"./button-5b4b1283.js";import"./Compact-7c697923.js";import"./useSize-7ab02e97.js";import"./CloseOutlined-76f93c12.js";import"./index-5e55e425.js";import"./KeyCode-067fecd0.js";import"./pickAttrs-0d75bf72.js";import"./fade-b874523d.js";import"./ContextIsolator-43757ab5.js";import"./useClosable-658f25ab.js";import"./useLocale-14fa46fd.js";import"./PurePanel-31296d74.js";function Z(){const[x,i]=p.useState(!1),[b,d]=p.useState(!1),{accounts:c}=r(a=>a.accounts),{users:g}=r(a=>a.app),{user:o}=r(a=>a.app),{hiredApplicants:n}=r(a=>a.employees),[l,s]=p.useState({site:(o==null?void 0:o.site)||""});console.log("hiredApplicants",n);async function f(){try{d(!0),await u.dispatch(y({...l})),await u.dispatch(j()),m.success("Successfully Added!"),i(!1)}catch{m.error("Failed to save Employee. Please try again.")}finally{d(!1)}}function h(a){if(a.target.value){const t=JSON.parse(a.target.value);s({...l,...t,fname:t.applicant.fname,mname:t.applicant.mname,lname:t.applicant.lname,suffix:t.applicant.suffix,gender:t.applicant.gender,site:(o==null?void 0:o.site)||""})}else s({})}return e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"inline-flex rounded-md shadow-sm",role:"group",children:e.jsxs("button",{type:"button",onClick:()=>i(!0),className:"inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 bg-transparent border border-blue-500 rounded-s-lg hover:bg-blue-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:bg-blue-500 focus:text-white gap-1",children:[e.jsx(w,{className:"text-xl"}),"Add New Employee"]})}),e.jsx(v,{title:"New Employee",centered:!0,open:x,onOk:f,onCancel:()=>i(!1),width:1e3,okText:"Save",cancelText:"Cancel",confirmLoading:b,children:e.jsx("div",{className:"w-full h-full",children:e.jsxs("div",{className:"flex flex-col -mx-3 mb-6",children:[e.jsxs("div",{className:"w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",children:"Employee's Name"}),e.jsxs("select",{onChange:h,className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",children:[e.jsx("option",{value:"",children:"Select Employee"}),n==null?void 0:n.map((a,t)=>e.jsxs("option",{value:JSON.stringify(a),children:[a.applicant.fname," ",a.applicant.mname," ",a.applicant.lname]},t))]})]}),e.jsxs("div",{className:"w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",children:"Employee No."}),e.jsx("input",{value:(l==null?void 0:l.app_id)||"",className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",children:"Job Position"}),e.jsx("input",{value:(l==null?void 0:l.jobPos)||"",className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",children:"Department"}),e.jsx("input",{value:(l==null?void 0:l.department)||"",className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-3",children:[e.jsxs("label",{className:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",children:["Account ",e.jsx("i",{children:"(If Applicable)"})]}),e.jsxs("select",{className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",value:(l==null?void 0:l.account)||"",onChange:a=>s({...l,account:a.target.value}),children:[e.jsx("option",{value:"",children:"Select an Account"}),c==null?void 0:c.map((a,t)=>e.jsx("option",{value:a.acc,children:a.acc},t))]})]})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",children:"Supervisor"}),e.jsxs("select",{className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",value:(l==null?void 0:l.sup_id)||"",onChange:a=>s({...l,sup_id:a.target.value}),children:[e.jsx("option",{value:"",children:"Select Supervisor"}),g.filter(a=>a.site==="San Carlos"&&["Manager","Supervisor","Team Leader","Director","CEO"].includes(a.position)).map(a=>e.jsxs("option",{value:a.id,children:[a.employee_fname," ",a.employee_lname]},a.id))]})]}),e.jsxs("div",{className:"w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",children:"EOGS Email"}),e.jsx("input",{className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",value:(l==null?void 0:l.eogs)||"",type:"email",placeholder:"Input email",onChange:a=>s({...l,eogs:a.target.value})})]})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",children:"Hired Date"}),e.jsx("input",{className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",value:(l==null?void 0:l.hired)||"",type:"date",onChange:a=>s({...l,hired:a.target.value}),placeholder:""})]}),e.jsxs("div",{className:"w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",children:"Status"}),e.jsxs("select",{className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",value:(l==null?void 0:l.emp_status)||"",onChange:a=>s({...l,emp_status:a.target.value}),children:[e.jsx("option",{selected:!0,children:"Select Employee Status"}),e.jsx("option",{value:"Probationary",children:"Probationary"}),e.jsx("option",{value:"Regular",children:"Regular"})]})]})]})]})})})]})}export{Z as default};