import{r as n,b as f,j as e,c}from"./app-f9aa361b.js";import x from"./summernote-12d8fd67.js";import{c as b,a as g}from"./onboarding-docu-thunk-95ee5b46.js";import{M as h}from"./index-fe4f1a95.js";import{m as w}from"./index-5ed4515c.js";import{F as j}from"./FileAddOutlined-feaa8326.js";import"./UnorderedListOutlined-9d7c00ef.js";import"./presets-6f6b4eb7.js";import"./AntdIcon-d6d7446e.js";import"./onboading-doc-service-6c4e5a8a.js";import"./index-b82e7869.js";import"./render-e6e7990e.js";import"./asyncToGenerator-0799126c.js";import"./CheckCircleFilled-72bd3b60.js";import"./CloseCircleFilled-1707e5bc.js";import"./InfoCircleFilled-f3937f4a.js";import"./useZIndex-65999aba.js";import"./useId-834090a0.js";import"./button-5ee08c6c.js";import"./Compact-acd8c433.js";import"./useSize-8621aa04.js";import"./CloseOutlined-2e98e761.js";import"./index-73d627ed.js";import"./KeyCode-26a40ef5.js";import"./pickAttrs-434e6788.js";import"./fade-4e867359.js";import"./ContextIsolator-a4220250.js";import"./useClosable-fbcbecf0.js";import"./useLocale-672a9b31.js";import"./PurePanel-219447d5.js";function Y(){const[l,o]=n.useState(!1),{user:r}=f(t=>t.app),[d,a]=n.useState(!1),[i,p]=n.useState({site:(r==null?void 0:r.site)??""}),[s,u]=n.useState({doc_content:""}),m=async()=>{a(!0);try{await c.dispatch(b({...i,...s,...r})),await c.dispatch(g()),w.success("Successfully Added!"),a(!1),o(!1)}catch(t){console.error("Error submitting ERF:",t),a(!1),o(!1)}};return console.log("formform",s),e.jsxs("div",{className:"my-2",children:[e.jsx("div",{className:"inline-flex rounded-md shadow-sm",role:"group",children:e.jsxs("button",{type:"button",onClick:()=>o(!0),className:"inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 bg-transparent border border-blue-500 rounded-lg hover:bg-blue-500 hover:text-white focus:z-10 focus:ring-2 focus:ring-blue-500 focus:bg-blue-500 focus:text-white gap-1",children:[e.jsx(j,{className:"text-xl"}),"Add Onboarding Documents"]})}),e.jsx(h,{title:"New Onboarding Documents",open:l,onOk:m,onCancel:()=>o(!1),width:1e3,okText:"Save",cancelText:"Cancel",confirmLoading:d,children:e.jsx("form",{className:"w-full",onSubmit:m,children:e.jsxs("div",{className:"flex flex-wrap -mx-3 mb-6",children:[e.jsxs("div",{className:"w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",children:"Document's Name"}),e.jsx("input",{value:s.doc_name,onChange:t=>p({...i,doc_name:t.target.value}),className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",name:"doc_name",type:"text"})]}),e.jsxs("div",{className:"mb-8 w-full px-3",children:[e.jsx("label",{htmlFor:"doc_content",className:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",children:"Document's Content"}),e.jsx(x,{form:s,setForm:u})]})]})})})]})}export{Y as default};