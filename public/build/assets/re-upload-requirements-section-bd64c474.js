import{r as i,j as t}from"./app-66c2d29a.js";import{u as b}from"./pre-employment-file-service-58b25006.js";import{M as h}from"./index-8040b317.js";import{U as l,a as g}from"./index-e05c6c80.js";import{B as j}from"./button-62e43a7a.js";import"./index-ae953238.js";import"./presets-149415d9.js";import"./render-32dada9c.js";import"./asyncToGenerator-89f53324.js";import"./CheckCircleFilled-ff72a340.js";import"./AntdIcon-8728ec96.js";import"./CloseCircleFilled-a8140992.js";import"./InfoCircleFilled-eee5654e.js";import"./useZIndex-5312b8ae.js";import"./useId-bec34e53.js";import"./CloseOutlined-26c88e73.js";import"./index-ef60696d.js";import"./pickAttrs-5acfc901.js";import"./ContextIsolator-613eac7c.js";import"./useSize-fb9721f0.js";import"./Compact-0538fa3f.js";import"./useClosable-fbe7873b.js";import"./useLocale-2accffec.js";import"./PurePanel-a6ca3c76.js";import"./collapse-97de76d4.js";import"./LoadingOutlined-a6c3ae95.js";import"./useForceUpdate-4bb53ca1.js";import"./DeleteOutlined-128c538c.js";import"./EyeOutlined-3dbb330f.js";import"./CheckOutlined-5a2d55e1.js";import"./index-1d92ab84.js";function Y({data:e}){const[m,r]=i.useState(!1),[p,n]=i.useState(""),[s,a]=i.useState([]);i.useEffect(()=>{e!=null&&e.reqs&&n(e==null?void 0:e.reqs)},[e]);const c=()=>{r(!0)},u=async()=>{r(!1);const o=new FormData;if(o.append("file",s.originFileObj),o.append("status","Uploaded"),o.append("reqs",p),o.append("id",e==null?void 0:e.id),o.append("app_id",window.location.pathname.split("/")[2]),s.status=="done"){const x=await b(o);console.log("result",x)}},d=()=>{r(!1)};async function f({file:o}){a(o)}return console.log("data",e),t.jsxs("div",{children:[t.jsx("button",{type:"button",onClick:c,className:"text-2xl ml-2.5 text-red-500",children:t.jsx(l,{})}),t.jsxs(h,{title:"REUPLOAD REQUIREMENTS",open:m,onOk:u,okText:"Submit",onCancel:d,children:[t.jsxs("div",{className:"w-full",children:[t.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Name of Requirement"}),t.jsx("input",{onChange:o=>n(o.target.value),value:p,type:"text",name:"reqs",className:"appearance-none block w-full border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",readOnly:!0})]}),t.jsx(g,{action:"https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload",listType:"picture",method:"GET",maxCount:1,onChange:f,multiple:!1,defaultFileList:s,children:t.jsx(j,{type:"primary",icon:t.jsx(l,{}),children:"Upload Scanned Image"})})]})]})}export{Y as default};