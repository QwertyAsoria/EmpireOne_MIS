import{r as o,j as t,e as r}from"./app-9f33efc9.js";import{d,g as l}from"./department-thunk-794d296d.js";import{T as c}from"./TrashIcon-7c10611b.js";import{M as u}from"./index-7e3e9310.js";import{m as f}from"./index-fcd12960.js";import"./erf-record-service-a3a3b2cc.js";import"./index-f209aef9.js";import"./presets-9016d8c1.js";import"./render-df19e14a.js";import"./AntdIcon-df3d5d9a.js";import"./asyncToGenerator-58dc0849.js";import"./CheckCircleFilled-6ff47d43.js";import"./CloseCircleFilled-3cc945f7.js";import"./InfoCircleFilled-1d84c44c.js";import"./useZIndex-842edc34.js";import"./useId-4c8264f6.js";import"./button-02023954.js";import"./Compact-59bba936.js";import"./useSize-131cb1e1.js";import"./CloseOutlined-883ad826.js";import"./index-80874a1a.js";import"./KeyCode-ab35bf0c.js";import"./pickAttrs-c9513ad0.js";import"./fade-ec6a1f02.js";import"./ContextIsolator-806fd2ef.js";import"./useClosable-d4fd10ba.js";import"./useLocale-996ea218.js";import"./PurePanel-b854e6ca.js";function K({data:i}){const[s,e]=o.useState(!1),[m,h]=o.useState(!1),n=()=>{e(!0)};function a(){r.dispatch(d(i.id)),r.dispatch(l()),f.success("Deleted Successfully!")}const p=()=>{e(!1)};return t.jsxs("div",{children:[t.jsx("button",{type:"button",onClick:n,className:"text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 shadow-lg shadow-red-500/50 font-medium rounded-lg text-sm px-2 py-2 text-center",children:t.jsx(c,{className:"h-6"})}),t.jsx(u,{title:"Remove Department",open:s,onOk:a,onCancel:p,confirmLoading:m,children:t.jsx("div",{className:"flex flex-col gap-4",children:t.jsx("h1",{children:"Are you sure you want to delete Department?"})})})]})}export{K as default};