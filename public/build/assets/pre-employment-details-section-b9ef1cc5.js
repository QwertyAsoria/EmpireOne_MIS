import{r as o,b as m,j as e}from"./app-58700b96.js";import a from"./pre-employment-table-section-5ec89268.js";import d from"./upload-requirements-section-12ba5cea.js";import"./main-14923936.js";import"./moment-a9aaa855.js";import"./re-upload-requirements-section-fd887eb2.js";import"./pre-employment-file-service-b04593a9.js";import"./final-rate-thunk-f368b0db.js";import"./applicant-final-service-912b1e89.js";import"./applicant-record-service-cc37f206.js";import"./index-501db1c8.js";import"./index-e6b3180d.js";import"./presets-0d785a93.js";import"./render-b01b6924.js";import"./AntdIcon-298d23d8.js";import"./asyncToGenerator-839484c7.js";import"./CheckCircleFilled-ba887285.js";import"./CloseCircleFilled-76972dcf.js";import"./InfoCircleFilled-af2d424c.js";import"./useZIndex-f08aedd6.js";import"./useId-f1b9e5ca.js";import"./button-758b5be1.js";import"./Compact-b2e8288a.js";import"./useSize-eb33bb25.js";import"./CloseOutlined-ec12a53b.js";import"./index-2163b856.js";import"./KeyCode-e41eed22.js";import"./pickAttrs-298605a0.js";import"./fade-9ef907af.js";import"./ContextIsolator-5fd2a4a7.js";import"./useClosable-1b1e0b3b.js";import"./useLocale-fa9fa40e.js";import"./PurePanel-2160b7da.js";import"./index-11b6a421.js";import"./collapse-97de76d4.js";import"./useForceUpdate-4fd4d809.js";import"./DeleteOutlined-2aaff7f1.js";import"./EyeOutlined-1823161e.js";import"./CheckOutlined-090ffaa9.js";import"./index-51b0d406.js";import"./index-9ee14c5c.js";import"./Table-30d13d2b.js";import"./addEventListener-456a68b7.js";import"./DownOutlined-19634ad1.js";import"./index-fbb1685e.js";import"./LeftOutlined-4318f3d8.js";import"./index-2bdec1aa.js";import"./useBreakpoint-9d1af04e.js";import"./index-6530dc8e.js";import"./FileOutlined-cc9702a0.js";import"./FolderOpenOutlined-92baf029.js";import"./HolderOutlined-0df22627.js";import"./index-9aba0f1d.js";import"./CheckSquareOutlined-1a07b5d2.js";import"./FileJpgOutlined-14f55bdc.js";function ce(){var i;o.useState(!1);const{applicant:l}=m(s=>s.final_rate),t=window.location.search.split("=")[1];window.location.pathname.split("/")[2];const r=(i=l==null?void 0:l.joboffer)==null?void 0:i.find(s=>s.id==t);return console.log("jo",r),e.jsx("div",{children:e.jsx("div",{className:"h-screen overflow-hidden",children:e.jsx("div",{className:"bg-cover bg-[url('/images/SCemp.jpg')] transition-colors duration-300 h-full overflow-y-scroll",children:e.jsx("div",{className:"container mx-auto flex justify-center",children:e.jsxs("div",{className:"bg-white shadow-2xl shadow-black rounded-lg p-6 mt-12 w-full",children:[e.jsx("div",{className:"flex items-center justify-center p-3",children:e.jsx("img",{className:"w-60",src:"/images/newlogo.png",alt:"logo"})}),e.jsx("div",{className:"flex text-2xl items-center justify-center",children:e.jsx("h1",{children:e.jsx("b",{children:"APPLICATION DETAILS"})})}),e.jsxs("form",{className:"border rounded-lg p-3.5",children:[e.jsxs("div",{className:"flex flex-col w-full mb-4",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Application No."})}),e.jsx("div",{className:"flex flex-1 gap-3",children:e.jsx("input",{type:"text",className:"border p-2 rounded w-full",value:l==null?void 0:l.app_id,readOnly:!0})})]}),e.jsx("div",{className:"flex flex-1 gap-4",children:e.jsxs("div",{className:"flex flex-col w-full mb-4",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Full Name"})}),e.jsxs("div",{className:"flex flex-1 gap-3",children:[e.jsx("input",{type:"text",className:"border p-2 rounded w-full",value:l==null?void 0:l.fname,readOnly:!0}),e.jsx("input",{type:"text",className:"border p-2 rounded w-full",value:l==null?void 0:l.mname,readOnly:!0}),e.jsx("input",{type:"text",className:"border p-2 rounded w-full",value:l==null?void 0:l.lname,readOnly:!0}),e.jsx("input",{type:"text",className:"border p-2 rounded w-1/5",value:l==null?void 0:l.suffix,readOnly:!0})]})]})}),e.jsxs("div",{className:"flex flex-1 gap-4 mb-4 w-full",children:[e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Email"})}),e.jsx("input",{type:"email",className:"border p-2 rounded w-full",value:l==null?void 0:l.email,readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Job Position"})}),e.jsx("input",{type:"text",className:"border p-2 rounded w-full",value:r==null?void 0:r.jobPos,readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Salary"})}),e.jsxs("div",{className:"relative",children:[e.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:"₱"}),e.jsx("input",{type:"number",className:"border pl-5 p-2 rounded w-full",value:r==null?void 0:r.salary,readOnly:!0})]})]}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Allowance"})}),e.jsxs("div",{className:"relative",children:[e.jsx("span",{className:"absolute inset-y-0 left-0 flex items-center pl-2",children:"₱"}),e.jsx("input",{type:"number",className:"border pl-5 p-2 rounded w-full",value:r==null?void 0:r.allowance,readOnly:!0})]})]})]}),e.jsx(d,{})]}),e.jsx(a,{})]})})})})})}export{ce as default};