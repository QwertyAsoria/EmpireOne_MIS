import{r as s,j as e,e as d}from"./app-c82c5dc1.js";import{d as f}from"./guide-question-thunk-014996dd.js";import{m as x}from"./index-708c90de.js";import{M as h}from"./index-a7b3c0c0.js";import{M as j}from"./index-01feef27.js";import"./index-da0094f8.js";import"./presets-befb9724.js";import"./render-3653778a.js";import"./AntdIcon-f967147a.js";import"./asyncToGenerator-5e869aae.js";import"./CheckCircleFilled-b74385aa.js";import"./CloseCircleFilled-cb3eccda.js";import"./InfoCircleFilled-014fe9a2.js";import"./KeyCode-067fecd0.js";import"./pickAttrs-0d75bf72.js";import"./useZIndex-4993f9da.js";import"./CloseOutlined-76f93c12.js";import"./index-b989725f.js";import"./useId-5f6fd7dc.js";import"./useSize-7ab02e97.js";import"./Compact-7c697923.js";import"./ContextIsolator-43757ab5.js";import"./LeftOutlined-97e0b13f.js";import"./collapse-97de76d4.js";import"./button-5b4b1283.js";import"./index-5e55e425.js";import"./fade-b874523d.js";import"./useClosable-658f25ab.js";import"./useLocale-14fa46fd.js";import"./PurePanel-31296d74.js";function W({data:r,label:o,icon:l}){const[m,a]=s.useState({}),[i,n]=x.useMessage(),[p,t]=s.useState(!1);s.useEffect(()=>{a(r)},[]);function u(c){c.preventDefault();try{d.dispatch(f(m.id)),i.success("Deleted Successfully"),t(!1)}catch{i.error("error")}}return e.jsxs("div",{children:[n,e.jsxs(h.Item,{icon:l,children:[e.jsx("button",{onClick:()=>t(!0),children:o}),e.jsx(j,{title:o,centered:!0,visible:p,footer:null,onOk:()=>t(!1),onCancel:()=>t(!1),width:520,okText:"Save Changes",cancelText:"Cancel",children:e.jsx("div",{className:"w-full",children:e.jsx("div",{className:"flex flex-wrap -mx-3",children:e.jsx("div",{className:"w-full px-3",children:e.jsx("form",{onSubmit:u,className:"w-full",children:e.jsxs("div",{children:[e.jsx("p",{children:"Are you sure you want to delete this question?"}),e.jsxs("div",{className:"flex flex-1 gap-1.5 justify-end mt-1",children:[e.jsx("button",{className:"flex justify-end px-2 py-1.5 rounded-md hover:bg-gray-300",onClick:()=>t(!1),type:"button",children:"Cancel"}),e.jsx("button",{className:"flex justify-end bg-blue-600 px-2 py-1.5 rounded-md text-white hover:bg-blue-500",type:"submit",children:"Delete"})]})]})})})})})})]},r.key)]})}export{W as default};