import{r as n,b as f,j as e,e as c}from"./app-6512ec23.js";import x from"./summernote-52c6947d.js";import{c as b,a as g}from"./onboarding-docu-thunk-f7d70d85.js";import{M as h}from"./index-bbbaebee.js";import{m as w}from"./index-28af47ed.js";import{F as j}from"./FileAddOutlined-d8149688.js";import"./UnorderedListOutlined-fd6e3abc.js";import"./presets-b664276e.js";import"./AntdIcon-8b448a9a.js";import"./onboading-doc-service-a630dc0d.js";import"./index-ab1db3cc.js";import"./render-d91bf3e3.js";import"./asyncToGenerator-ae65c638.js";import"./CheckCircleFilled-cecc34f1.js";import"./CloseCircleFilled-72f8e8e1.js";import"./InfoCircleFilled-aa5f0cc1.js";import"./useZIndex-718f9d90.js";import"./useId-d9c65968.js";import"./button-395f1567.js";import"./Compact-251a5749.js";import"./useSize-492d1886.js";import"./CloseOutlined-d9ba04d4.js";import"./index-b20623ab.js";import"./KeyCode-40507553.js";import"./pickAttrs-47097f77.js";import"./fade-c25870e0.js";import"./ContextIsolator-f8c4eff9.js";import"./useClosable-41a93046.js";import"./useLocale-5ef37f61.js";import"./PurePanel-9fb38da3.js";function Y(){const[l,o]=n.useState(!1),{user:r}=f(t=>t.app),[d,a]=n.useState(!1),[i,p]=n.useState({site:(r==null?void 0:r.site)??""}),[s,u]=n.useState({doc_content:""}),m=async()=>{a(!0);try{await c.dispatch(b({...i,...s,...r})),await c.dispatch(g()),w.success("Successfully Added!"),a(!1),o(!1)}catch(t){console.error("Error submitting ERF:",t),a(!1),o(!1)}};return console.log("formform",s),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"inline-flex rounded-md shadow-sm",role:"group",children:e.jsxs("button",{type:"button",onClick:()=>o(!0),className:"inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 bg-transparent border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:bg-blue-500 focus:text-white gap-1",children:[e.jsx(j,{className:"text-xl"}),"Add Onboarding Documents"]})}),e.jsx(h,{title:"New Onboarding Documents",open:l,onOk:m,onCancel:()=>o(!1),width:1e3,okText:"Save",cancelText:"Cancel",confirmLoading:d,children:e.jsx("form",{className:"w-full",onSubmit:m,children:e.jsxs("div",{className:"flex flex-wrap -mx-3 mb-6",children:[e.jsxs("div",{className:"w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",children:"Document's Name"}),e.jsx("input",{value:s.doc_name,onChange:t=>p({...i,doc_name:t.target.value}),className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",name:"doc_name",type:"text"})]}),e.jsxs("div",{className:"mb-8 w-full px-3",children:[e.jsx("label",{htmlFor:"doc_content",className:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",children:"Document's Content"}),e.jsx(x,{form:s,setForm:u})]})]})})})]})}export{Y as default};