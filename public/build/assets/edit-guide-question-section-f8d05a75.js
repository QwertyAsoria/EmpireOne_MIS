import{r as o,j as e,c as d}from"./app-62b5ebaa.js";import{u as f}from"./guide-question-thunk-09278aa8.js";import{m as x}from"./index-5562dec6.js";import{M as h}from"./index-c27c4d05.js";import{M as b}from"./index-055ee658.js";import"./index-408febe5.js";import"./presets-463863c6.js";import"./render-c5e68dcb.js";import"./asyncToGenerator-b4664d6d.js";import"./CheckCircleFilled-bd23b91f.js";import"./AntdIcon-d5231a29.js";import"./CloseCircleFilled-15fc6c63.js";import"./InfoCircleFilled-fb1cc4b6.js";import"./LoadingOutlined-6e2cb589.js";import"./useZIndex-23e93c6a.js";import"./pickAttrs-c39b57d6.js";import"./CloseOutlined-69cfb2a4.js";import"./index-a8bad4b0.js";import"./useId-8a7e6d05.js";import"./useSize-35d6e2ee.js";import"./Compact-914b018d.js";import"./ContextIsolator-af1fcc42.js";import"./LeftOutlined-cbb65ec1.js";import"./collapse-97de76d4.js";import"./button-4ffb358a.js";import"./index-0b644e77.js";import"./useClosable-19de31a3.js";import"./useLocale-a93b4d95.js";import"./PurePanel-7c150b65.js";function T({data:i,label:l,icon:p}){const[t,a]=o.useState({}),[n,u]=x.useMessage(),[c,s]=o.useState(!1);o.useEffect(()=>{a(i)},[]);function m(r){r.preventDefault();try{d.dispatch(f(t)),n.success("Updated Successfully"),s(!1)}catch{n.error("error")}}return e.jsxs("div",{children:[u,e.jsxs(h.Item,{icon:p,children:[e.jsx("button",{onClick:()=>s(!0),children:l}),e.jsx(b,{title:l,centered:!0,open:c,footer:null,onOk:()=>s(!1),onCancel:()=>s(!1),width:520,children:e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"flex flex-wrap -mx-3",children:e.jsx("div",{className:"w-full px-3",children:e.jsxs("form",{onSubmit:m,className:"w-full",children:[e.jsx("div",{className:"flex flex-wrap -mx-3 mt-2",children:e.jsxs("div",{className:"w-full px-3",children:[e.jsx("label",{className:"block uppercase tracking-wide text-xs font-bold mb-2",children:"Guide Questionss"}),e.jsx("input",{defaultValue:t==null?void 0:t.guideqs,onChange:r=>a({...t,guideqs:r.target.value}),name:"guideqs",className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text",placeholder:""})]})}),e.jsxs("div",{className:"flex flex-1 gap-1.5 justify-end mt-1",children:[e.jsx("button",{className:"flex justify-end px-2 py-1.5 rounded-md hover:bg-gray-300",onClick:()=>s(!1),type:"button",children:"Cancel"}),e.jsx("button",{className:"flex justify-end bg-blue-600 px-2 py-1.5 rounded-md text-white hover:bg-blue-500",onClick:m,type:"submit",children:"Save Changes"})]})]})})})})})]},i.key)]})}export{T as default};