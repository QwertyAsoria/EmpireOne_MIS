import{r as i,j as t}from"./app-62b5ebaa.js";import{u as b}from"./pre-employment-file-service-80f3f2a2.js";import{M as h}from"./index-055ee658.js";import{U as l,a as g}from"./index-08f8a2e5.js";import{B as j}from"./button-4ffb358a.js";import"./index-408febe5.js";import"./presets-463863c6.js";import"./render-c5e68dcb.js";import"./asyncToGenerator-b4664d6d.js";import"./CheckCircleFilled-bd23b91f.js";import"./AntdIcon-d5231a29.js";import"./CloseCircleFilled-15fc6c63.js";import"./InfoCircleFilled-fb1cc4b6.js";import"./useZIndex-23e93c6a.js";import"./useId-8a7e6d05.js";import"./CloseOutlined-69cfb2a4.js";import"./index-0b644e77.js";import"./pickAttrs-c39b57d6.js";import"./ContextIsolator-af1fcc42.js";import"./useSize-35d6e2ee.js";import"./Compact-914b018d.js";import"./useClosable-19de31a3.js";import"./useLocale-a93b4d95.js";import"./PurePanel-7c150b65.js";import"./collapse-97de76d4.js";import"./LoadingOutlined-6e2cb589.js";import"./useForceUpdate-3cb26160.js";import"./DeleteOutlined-b6458a0d.js";import"./EyeOutlined-ad223f6d.js";import"./CheckOutlined-d4271da3.js";import"./index-a8bad4b0.js";function Y({data:e}){const[m,r]=i.useState(!1),[p,n]=i.useState(""),[s,a]=i.useState([]);i.useEffect(()=>{e!=null&&e.reqs&&n(e==null?void 0:e.reqs)},[e]);const c=()=>{r(!0)},u=async()=>{r(!1);const o=new FormData;if(o.append("file",s.originFileObj),o.append("status","Uploaded"),o.append("reqs",p),o.append("id",e==null?void 0:e.id),o.append("app_id",window.location.pathname.split("/")[2]),s.status=="done"){const x=await b(o);console.log("result",x)}},d=()=>{r(!1)};async function f({file:o}){a(o)}return console.log("data",e),t.jsxs("div",{children:[t.jsx("button",{type:"button",onClick:c,className:"text-2xl ml-2.5 text-red-500",children:t.jsx(l,{})}),t.jsxs(h,{title:"REUPLOAD REQUIREMENTS",open:m,onOk:u,okText:"Submit",onCancel:d,children:[t.jsxs("div",{className:"w-full",children:[t.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Name of Requirement"}),t.jsx("input",{onChange:o=>n(o.target.value),value:p,type:"text",name:"reqs",className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",readOnly:!0})]}),t.jsx(g,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",method:"GET",maxCount:1,onChange:f,multiple:!1,defaultFileList:s,children:t.jsx(j,{type:"primary",icon:t.jsx(l,{}),children:"Upload Scanned Image"})})]})]})}export{Y as default};