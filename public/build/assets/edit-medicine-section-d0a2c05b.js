import{r as i,j as e,e as u}from"./app-58700b96.js";import{u as f}from"./medicine-record-thunk-7b23df72.js";import{m as x}from"./index-9ee14c5c.js";import{M as b}from"./index-2bdec1aa.js";import{M as g}from"./index-501db1c8.js";import"./index-e6b3180d.js";import"./presets-0d785a93.js";import"./render-b01b6924.js";import"./AntdIcon-298d23d8.js";import"./asyncToGenerator-839484c7.js";import"./CheckCircleFilled-ba887285.js";import"./CloseCircleFilled-76972dcf.js";import"./InfoCircleFilled-af2d424c.js";import"./KeyCode-e41eed22.js";import"./pickAttrs-298605a0.js";import"./useZIndex-f08aedd6.js";import"./CloseOutlined-ec12a53b.js";import"./index-51b0d406.js";import"./useId-f1b9e5ca.js";import"./useSize-eb33bb25.js";import"./Compact-b2e8288a.js";import"./ContextIsolator-5fd2a4a7.js";import"./LeftOutlined-4318f3d8.js";import"./collapse-97de76d4.js";import"./button-758b5be1.js";import"./index-2163b856.js";import"./fade-9ef907af.js";import"./useClosable-1b1e0b3b.js";import"./useLocale-fa9fa40e.js";import"./PurePanel-2160b7da.js";function X({data:n,label:l,icon:a}){const[t,s]=i.useState({}),[c,p]=x.useMessage(),[m,o]=i.useState(!1);i.useEffect(()=>{s(n)},[]);function d(r){r.preventDefault();try{u.dispatch(f(t)),c.success("Updated Successfully"),o(!1)}catch{c.error("error")}}return e.jsxs("div",{children:[p,e.jsxs(b.Item,{icon:a,children:[e.jsx("button",{onClick:()=>o(!0),children:l}),e.jsx(g,{title:l,centered:!0,open:m,onOk:()=>o(!1),onCancel:()=>o(!1),width:1e3,footer:null,children:e.jsxs("form",{class:"w-full",onSubmit:d,children:[e.jsxs("div",{class:"flex flex-wrap -mx-3 mb-6",children:[e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Medicine"}),e.jsx("input",{defaultValue:t==null?void 0:t.medicine,onChange:r=>s({...t,medicine:r.target.value}),name:"medicine",class:"appearance-none block w-full  border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text"})]}),e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Medicine Type"}),e.jsx("input",{defaultValue:t==null?void 0:t.med_type,onChange:r=>s({...t,med_type:r.target.value}),name:"med_type",class:"appearance-none block w-full  border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text"})]}),e.jsxs("div",{class:"w-full px-3",children:[e.jsx("label",{class:"block uppercase tracking-wide text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Medicine Description"}),e.jsx("textarea",{defaultValue:t==null?void 0:t.med_desc,onChange:r=>s({...t,med_desc:r.target.value}),name:"med_desc",class:"appearance-none block w-full  border border-gray-400 rounded py-6 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",type:"text"})]})]}),e.jsxs("div",{className:"flex flex-1 gap-1.5 justify-end mt-1",children:[e.jsx("button",{className:"flex justify-end px-2 py-1.5 rounded-md hover:bg-gray-300",onClick:()=>o(!1),type:"button",children:"Cancel"}),e.jsx("button",{className:"flex justify-end bg-blue-600 px-2 py-1.5 rounded-md text-white hover:bg-blue-500",onClick:d,type:"submit",children:"Save Changes"})]})]})})]},n.key)]})}export{X as default};