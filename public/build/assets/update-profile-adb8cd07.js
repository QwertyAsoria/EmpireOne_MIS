import{r as t,j as e,e as g}from"./app-6512ec23.js";import{u as h}from"./app-thunk-e071dd61.js";import{U as u}from"./UserOutlined-cbbaed8a.js";import{M as y}from"./index-bbbaebee.js";import{C as j}from"./CheckCircleFilled-cecc34f1.js";import{m as c}from"./index-28af47ed.js";import"./user-service-48166d99.js";import"./presets-b664276e.js";import"./AntdIcon-8b448a9a.js";import"./index-ab1db3cc.js";import"./render-d91bf3e3.js";import"./asyncToGenerator-ae65c638.js";import"./CloseCircleFilled-72f8e8e1.js";import"./InfoCircleFilled-aa5f0cc1.js";import"./useZIndex-718f9d90.js";import"./useId-d9c65968.js";import"./button-395f1567.js";import"./Compact-251a5749.js";import"./useSize-492d1886.js";import"./CloseOutlined-d9ba04d4.js";import"./index-b20623ab.js";import"./KeyCode-40507553.js";import"./pickAttrs-47097f77.js";import"./fade-c25870e0.js";import"./ContextIsolator-f8c4eff9.js";import"./useClosable-41a93046.js";import"./useLocale-5ef37f61.js";import"./PurePanel-9fb38da3.js";function T({user:l}){const[r,i]=t.useState(!1),[p,m]=t.useState(!1),[o,n]=t.useState({employee_id:l==null?void 0:l.employee_id,id:l==null?void 0:l.id,employee_fname:"",employee_mname:"",employee_lname:"",employee_suffix:"",gender:""});console.log("formsssss",o);const x=()=>{m(!p)},[f,s]=t.useState(!1);t.useEffect(()=>{l&&n({id:l==null?void 0:l.id,employee_id:l==null?void 0:l.employee_id,employee_fname:(l==null?void 0:l.employee_fname)||"",employee_mname:(l==null?void 0:l.employee_mname)||"",employee_lname:(l==null?void 0:l.employee_lname)||"",employee_suffix:(l==null?void 0:l.employee_suffix)||"",gender:(l==null?void 0:l.gender)||""})},[l]);async function d(a){a.preventDefault(),s(!0);try{await g.dispatch(h({...o})),c.success("Updated Successfully!"),i(!1)}catch(b){c.error("Failed to update. Please try again."),console.error(b)}finally{s(!1)}}return e.jsxs("div",{children:[e.jsx("button",{onClick:()=>{i(!0),x()},children:e.jsxs("h6",{className:"text-lg",children:[e.jsx(u,{className:"text-lg mr-2"}),"Update Profile"]})}),e.jsxs(y,{title:"Update My Profile",centered:!0,visible:r,onOk:d,onCancel:()=>i(!1),width:1200,confirmLoading:f,footer:null,children:[e.jsx("li",{className:"bg-gray-300 h-0.5"}),e.jsx("div",{className:"flex flex-1 w-full mt-1",children:e.jsxs("form",{class:"w-full h-full",onSubmit:d,children:[e.jsx("h1",{className:"text-xl",children:e.jsx("b",{children:"My Personal Information"})}),e.jsxs("div",{class:"flex flex-col -mx-3 mb-3 mt-3",children:[e.jsxs("div",{class:"w-full px-2.5",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1",children:"Employee's ID"}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"number",value:(l==null?void 0:l.employee_id)??"",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{class:"w-full px-2.5",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Employee's Firstname"}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",value:(o==null?void 0:o.employee_fname)??"",onChange:a=>n({...o,employee_fname:a.target.value})})]}),e.jsxs("div",{class:"w-full px-2.5",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Employee's Middlename"}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",value:(o==null?void 0:o.employee_mname)??"",onChange:a=>n({...o,employee_mname:a.target.value})})]}),e.jsxs("div",{class:"w-full px-2.5",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Employee's Lastname"}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",value:(o==null?void 0:o.employee_lname)??"",onChange:a=>n({...o,employee_lname:a.target.value})})]}),e.jsxs("div",{class:"w-full px-2.5",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Employee's Suffix"}),e.jsxs("select",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",name:"",value:(o==null?void 0:o.employee_suffix)??"",onChange:a=>n({...o,employee_suffix:a.target.value}),children:[e.jsx("option",{disabled:!0,children:(l==null?void 0:l.suffix)??""}),e.jsx("option",{value:"",children:"---"}),e.jsx("option",{value:"Jr.",children:"Jr."}),e.jsx("option",{value:"Sr.",children:"Sr."}),e.jsx("option",{value:"II",children:"II"}),e.jsx("option",{value:"III",children:"III"}),e.jsx("option",{value:"IV",children:"IV"}),e.jsx("option",{value:"V",children:"V"}),e.jsx("option",{value:"VI",children:"VI"}),e.jsx("option",{value:"VII",children:"VII"}),e.jsx("option",{value:"VIII",children:"VIII"}),e.jsx("option",{value:"IX",children:"IX"}),e.jsx("option",{value:"X",children:"X"})]})]})]}),e.jsxs("div",{className:"flex flex-1 ",children:[e.jsxs("div",{class:"w-full px-2.5",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Employee's Gender"}),e.jsxs("select",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",name:"",value:(o==null?void 0:o.gender)??"",onChange:a=>n({...o,gender:a.target.value}),children:[e.jsx("option",{disabled:!0,children:(l==null?void 0:l.gender)??""}),e.jsx("option",{value:"Male",children:"Male"}),e.jsx("option",{value:"Female",children:"Female"})]})]}),e.jsxs("div",{class:"w-full px-2.5",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Department"}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",value:(l==null?void 0:l.department)??"",readOnly:!0})]}),e.jsxs("div",{class:"w-full px-2.5",children:[e.jsx("label",{class:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",children:"Position"}),e.jsx("input",{class:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",value:(l==null?void 0:l.position)??"",readOnly:!0})]})]})]}),e.jsxs("button",{class:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full",children:[e.jsx(j,{})," Save Changes"]})]})})]})]})}export{T as default};