import{r as o,j as e,c as u}from"./app-62b5ebaa.js";import{d as f}from"./medicine-record-thunk-fcd4f751.js";import{m as x}from"./index-5562dec6.js";import{M as h}from"./index-c27c4d05.js";import{M as j}from"./index-055ee658.js";import"./index-408febe5.js";import"./presets-463863c6.js";import"./render-c5e68dcb.js";import"./asyncToGenerator-b4664d6d.js";import"./CheckCircleFilled-bd23b91f.js";import"./AntdIcon-d5231a29.js";import"./CloseCircleFilled-15fc6c63.js";import"./InfoCircleFilled-fb1cc4b6.js";import"./LoadingOutlined-6e2cb589.js";import"./useZIndex-23e93c6a.js";import"./pickAttrs-c39b57d6.js";import"./CloseOutlined-69cfb2a4.js";import"./index-a8bad4b0.js";import"./useId-8a7e6d05.js";import"./useSize-35d6e2ee.js";import"./Compact-914b018d.js";import"./ContextIsolator-af1fcc42.js";import"./LeftOutlined-cbb65ec1.js";import"./collapse-97de76d4.js";import"./button-4ffb358a.js";import"./index-0b644e77.js";import"./useClosable-19de31a3.js";import"./useLocale-a93b4d95.js";import"./PurePanel-7c150b65.js";function U({data:r,label:i,icon:m}){const[n,l]=o.useState({}),[s,p]=x.useMessage(),[c,t]=o.useState(!1);o.useEffect(()=>{l(r)},[]);function d(a){a.preventDefault();try{u.dispatch(f(n.id)),s.success("Deleted Successfully"),t(!1)}catch{s.error("error")}}return e.jsxs("div",{children:[p,e.jsxs(h.Item,{icon:m,children:[e.jsx("button",{onClick:()=>t(!0),children:i}),e.jsx(j,{title:i,centered:!0,visible:c,onOk:()=>t(!1),onCancel:()=>t(!1),footer:null,children:e.jsx("form",{onSubmit:d,children:e.jsxs("div",{children:[e.jsxs("p",{children:["Are you sure you want to delete ",e.jsx("b",{children:r.medicine})," ?"]}),e.jsxs("div",{className:"flex flex-1 gap-1.5 justify-end mt-1",children:[e.jsx("button",{className:"flex justify-end px-2 py-1.5 rounded-md hover:bg-gray-300",onClick:()=>t(!1),type:"button",children:"Cancel"}),e.jsx("button",{className:"flex justify-end bg-blue-600 px-2 py-1.5 rounded-md text-white hover:bg-blue-500",type:"submit",children:"Delete"})]})]})})})]},r.key)]})}export{U as default};