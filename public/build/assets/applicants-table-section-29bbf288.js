import{r as s,b as y,y as c,j as t}from"./app-6512ec23.js";import"./main-e3510e50.js";import{h as k}from"./moment-a9aaa855.js";import I from"./add-applicants-section-1e12596b.js";import C from"./applicant-menu-section-f10c1e67.js";import N from"./applicant-search-section-3a27f811.js";import{T as A,S as h}from"./Table-e6f9c951.js";import{T as F}from"./index-c31b9267.js";import"./working-experience-section-d7dbf479.js";import"./input-54f3d820.js";import"./CloseOutlined-d9ba04d4.js";import"./presets-b664276e.js";import"./AntdIcon-8b448a9a.js";import"./PlusOutlined-9be6238d.js";import"./applicant-thunk-ddb072b1.js";import"./applicant-record-service-582e1730.js";import"./select-8a74f7da.js";import"./barangay-94589600.js";import"./upload-resume-section-e17d3798.js";import"./FilePdfOutlined-33042aaa.js";import"./XMarkIcon-17ef5637.js";import"./UserPlusIcon-58073604.js";import"./index-bbbaebee.js";import"./index-ab1db3cc.js";import"./render-d91bf3e3.js";import"./asyncToGenerator-ae65c638.js";import"./CheckCircleFilled-cecc34f1.js";import"./CloseCircleFilled-72f8e8e1.js";import"./InfoCircleFilled-aa5f0cc1.js";import"./useZIndex-718f9d90.js";import"./useId-d9c65968.js";import"./button-395f1567.js";import"./Compact-251a5749.js";import"./useSize-492d1886.js";import"./index-b20623ab.js";import"./KeyCode-40507553.js";import"./pickAttrs-47097f77.js";import"./fade-c25870e0.js";import"./ContextIsolator-f8c4eff9.js";import"./useClosable-41a93046.js";import"./useLocale-5ef37f61.js";import"./PurePanel-9fb38da3.js";import"./index-28af47ed.js";import"./applicant-proceed-inital-phase-component-4c304296.js";import"./index-dd22c974.js";import"./index-0f357e78.js";import"./LeftOutlined-7268377a.js";import"./collapse-97de76d4.js";import"./applicant-initial-rating-scale-51717e01.js";import"./applicant-final-rating-scale-component-1f3ef128.js";import"./applicant-results-component-3f253801.js";import"./applicant-job-offer-component-3ec48b6f.js";import"./hiring-thunk-34201f26.js";import"./job-offer-service-4bd56969.js";import"./BriefcaseIcon-29958af0.js";import"./applicant-detaills-component-deb3cfea.js";import"./applicant-set-schedule-component-da43406a.js";import"./applicant-choose-interview-component-cf8a2177.js";import"./applicant-virtual-schedule-component-2a2e217b.js";import"./applicant-f2f-schedule-component-b065e4bb.js";import"./applicant-pooling-component-fc49948e.js";import"./index-81d320c7.js";import"./RiseOutlined-33412887.js";import"./DownOutlined-b7cf4e31.js";import"./addEventListener-34876ce8.js";import"./useBreakpoint-bdb72798.js";import"./useForceUpdate-65e74534.js";import"./CheckOutlined-a611d420.js";import"./index-eba1cb69.js";import"./FileOutlined-b3fc0b14.js";import"./FolderOpenOutlined-e8c4d4b8.js";import"./HolderOutlined-5417a89e.js";import"./EyeOutlined-3b6c33c6.js";function Xt(){s.useState(""),s.useState("");const[R,g]=s.useState(1),[o,f]=s.useState(10),{applicants:r,interviewer:v}=y(a=>a.applicants),j=new URL(window.location.href),m=new URLSearchParams(j.search);m.get("page");const n=m.get("status"),l=m.get("site"),d=r.data;console.log("filteredDatas",d),s.useRef(null);function P(a){c.visit("?page=1&status="+(a||"null")+"&site="+l)}function b(a){c.visit("?page=1&status="+n+"&site="+(a||"null"))}const S=[{title:"Application #",dataIndex:"app_id",key:"emp_id"},{title:"Fullname",dataIndex:"fullname",key:"fullname",render:(a,e,i)=>(console.log("record",e),t.jsxs("div",{children:[e.lname,", ",e.fname]},i))},{title:"Date of Birth",dataIndex:"dob",key:"dob",render:(a,e)=>t.jsx("div",{className:"gap-1.5 flex",children:k(e.dob).format("LL")})},{title:"Gender",dataIndex:"gender",key:"gender"},{title:"Marital Status",dataIndex:"marital",key:"mstatus"},{title:"Email Address",dataIndex:"email",key:"eogs"},{title:"Contact",dataIndex:"phone",key:"contact"},{title:"Date Submitted",dataIndex:"submitted",key:"submitted"},{title:t.jsx("div",{children:t.jsx(h,{allowClear:!0,className:"w-28",showSearch:!0,placeholder:"Status",optionFilterProp:"label",value:n=="null"?null:n,onChange:P,options:[{text:"Pending",value:"Pending"},{text:"Initial Phase",value:"Initial Phase"},{text:"Final Phase",value:"Final Phase"},{text:"Passed",value:"Passed"},{text:"Pooling",value:"Pooling"},{text:"Failed",value:"Failed"},{text:"Hired",value:"Hired"},{text:"Regular",value:"Regular"},{text:"Probationary",value:"Probationary"}]})}),dataIndex:"status",key:"status",render:(a,e)=>{let i="";switch(e.status){case"Failed":case"Dismissal":case"Resignation":case"EOPE":case"AWOL":i="red";break;case"Passed":case"Hired":case"Probationary":i="green";break;case"Final Phase":case"Regular":i="blue";break;case"Pending":i="yellow";break;case"Initial Phase":i="orange";break;case"Pooling":i="purple";break}return t.jsx(F,{color:i,children:e.status},e.key)}},{title:t.jsx("div",{className:"flex gap-3 items-center justify-center",children:t.jsx(h,{allowClear:!0,className:"w-28",showSearch:!0,placeholder:"Site",optionFilterProp:"label",value:l=="null"?null:l,onChange:b,options:[{text:"San Carlos",value:"San Carlos"},{text:"Carcar",value:"Carcar"}]})}),dataIndex:"site",key:"site",render:(a,e,i)=>(console.log("record",e),t.jsx("div",{children:e==null?void 0:e.site},i))},{title:"Action",dataIndex:"action",render:(a,e)=>t.jsx(t.Fragment,{children:t.jsx(C,{interviewer:v,data:e})})}],u=window.location.pathname+window.location.search,x=(a,e)=>new URLSearchParams(a.split("?")[1]).get(e),p=x(u,"page");x(u,"categories");const w={current:p,pageSize:o,total:r.last_page*o,onChange:(a,e)=>{c.visit(window.location.pathname+`?page=${a}&status=${n}&site=${l}`),g(a),f(e)}};return t.jsxs("div",{children:[t.jsx("div",{className:"flex justify-between items-center ",children:t.jsx("div",{className:"flex items-center gap-x-3 mb-3",children:t.jsx("h2",{className:"text-lg font-medium text-gray-800",children:t.jsx("b",{children:"Applicant(s) Records"})})})}),t.jsxs("div",{className:"flex flex-1 justify-between w-full items-start",children:[t.jsx("div",{children:t.jsx(N,{})}),t.jsx("div",{className:"flex justify-end items-center mr-5",children:t.jsx(I,{})})]}),t.jsx(A,{pagination:w,columns:S,dataSource:d,className:"mt-1"}),t.jsx("div",{className:"w-full",children:r.total>0?`Showing ${(p-1)*o+1} to ${Math.min(p*o,r.total)} of ${r.total} entries`:"No entries available"})]})}export{Xt as default};