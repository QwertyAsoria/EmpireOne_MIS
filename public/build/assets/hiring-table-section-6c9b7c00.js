import{r as c,b as D,j as e,y as f}from"./app-62b5ebaa.js";import{H as _}from"./main-9d5726a8.js";import T from"./declined-reason-section-abf1fbe0.js";import{T as R,P as F,I as N,S as j}from"./Table-4040e2fb.js";import{T as E}from"./index-d63d5f89.js";import{a as y}from"./index-a8bad4b0.js";import{F as H,L as I}from"./LineOutlined-c8c0153e.js";import{S as L}from"./index-38316397.js";import{B as p}from"./button-4ffb358a.js";import"./new-job-offer-section-483cc8f7.js";import"./applicant-thunk-8838bb69.js";import"./applicant-record-service-b92bdd46.js";import"./hiring-thunk-cb59c41a.js";import"./job-offer-service-e36a0fac.js";import"./BriefcaseIcon-a2e16c89.js";import"./index-055ee658.js";import"./index-408febe5.js";import"./presets-463863c6.js";import"./render-c5e68dcb.js";import"./asyncToGenerator-b4664d6d.js";import"./CheckCircleFilled-bd23b91f.js";import"./AntdIcon-d5231a29.js";import"./CloseCircleFilled-15fc6c63.js";import"./InfoCircleFilled-fb1cc4b6.js";import"./useZIndex-23e93c6a.js";import"./useId-8a7e6d05.js";import"./CloseOutlined-69cfb2a4.js";import"./index-0b644e77.js";import"./pickAttrs-c39b57d6.js";import"./ContextIsolator-af1fcc42.js";import"./useSize-35d6e2ee.js";import"./Compact-914b018d.js";import"./useClosable-19de31a3.js";import"./useLocale-a93b4d95.js";import"./PurePanel-7c150b65.js";import"./index-5562dec6.js";import"./LoadingOutlined-6e2cb589.js";import"./DislikeOutlined-88b476f1.js";import"./addEventListener-346d85bc.js";import"./DownOutlined-97885799.js";import"./useBreakpoint-07286cf4.js";import"./useForceUpdate-3cb26160.js";import"./LeftOutlined-cbb65ec1.js";import"./index-c27c4d05.js";import"./collapse-97de76d4.js";import"./CheckOutlined-d4271da3.js";import"./index-bd9773ae.js";import"./FileOutlined-e0b597f1.js";import"./FolderOpenOutlined-5ea30f50.js";import"./HolderOutlined-c3311687.js";import"./EyeOutlined-ad223f6d.js";function It(){const[S,m]=c.useState(""),[w,d]=c.useState(""),h=c.useRef(null),{joboffers:u}=D(i=>i.joboffers),g=(i,t,a)=>{t(),m(i[0]),d(a)},b=i=>{i(),m("")},o=i=>({filterDropdown:({setSelectedKeys:t,selectedKeys:a,confirm:n,clearFilters:s,close:r})=>e.jsxs("div",{style:{padding:8},onKeyDown:l=>l.stopPropagation(),children:[e.jsx(N,{ref:h,placeholder:`Search ${i}`,value:a[0],onChange:l=>t(l.target.value?[l.target.value]:[]),onPressEnter:()=>g(a,n,i),style:{marginBottom:8,display:"block"}}),e.jsxs(L,{children:[e.jsx(p,{type:"primary",onClick:()=>g(a,n,i),icon:e.jsx(j,{}),size:"small",style:{width:90},children:"Search"}),e.jsx(p,{onClick:()=>s&&b(s),size:"small",style:{width:90},children:"Reset"}),e.jsx(p,{type:"link",size:"small",onClick:()=>{n({closeDropdown:!1}),m(a[0]),d(i)},children:"Filter"}),e.jsx(p,{type:"link",size:"small",onClick:()=>{r()},children:"close"})]})]}),filterIcon:t=>e.jsx(j,{style:{color:t?"#1677ff":void 0}}),onFilter:(t,a)=>a[i].toString().toLowerCase().includes(t.toLowerCase()),onFilterDropdownOpenChange:t=>{t&&setTimeout(()=>{var a;return(a=h.current)==null?void 0:a.select()},100)},render:t=>w===i?e.jsx(_,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[S],autoEscape:!0,textToHighlight:t?t.toString():""}):t}),k=[{title:"Applicant #",dataIndex:"app_id",key:"app_id",...o("app_id")},{title:"Applicant Name",dataIndex:"app_name",key:"app_name",...o("app_name"),render:(i,t,a)=>{var n,s,r;return console.log("record",t),e.jsxs("div",{children:[(n=t==null?void 0:t.applicant)==null?void 0:n.fname," ",(s=t==null?void 0:t.applicant)==null?void 0:s.mname," ",(r=t==null?void 0:t.applicant)==null?void 0:r.lname]},a)}},{title:"Position",dataIndex:"jobPos",key:"position",...o("position")},{title:"Salary",dataIndex:"salary",key:"salary",...o("salary")},{title:"Status",dataIndex:"status",key:"status",render:(i,t,a)=>{console.log("record",t);let n="";switch(t.status){case"Contract Signing":n="#52D017";break;case"Accepted":n="#43BFC7";break;case"Declined":n="#E55451";break;case"Pending":n="#E1AD01";break;case"Hired":n="#008000";break}return e.jsx(E,{color:n,children:t.status},t.key)}},{title:"Action",dataIndex:"action",render:(i,t)=>e.jsxs("div",{className:"flex gap-1",children:[t.status!=="Pending"&&t.status!=="Declined"&&e.jsx(y,{title:"201 File",children:e.jsx("div",{children:e.jsx("button",{type:"button",onClick:()=>f.visit(`/admin/file_201/${t.app_id}?status=${t.status}`),className:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 shadow-lg shadow-cyan-500/50 font-medium rounded-lg text-lg px-3.5 py-2 text-center",children:e.jsx(H,{})})})}),t.status==="Declined"&&e.jsx(y,{title:"Reason of Declination",children:e.jsx("div",{children:e.jsx(T,{data:t})})}),t.status==="Pending"&&e.jsx("div",{className:"ml-4",children:e.jsx(I,{})})]})}],C=window.location.pathname+window.location.search,x=((i,t)=>new URLSearchParams(i.split("?")[1]).get(t))(C,"page"),P=x?parseInt(x,10):1,v=i=>{const t=new URLSearchParams(window.location.search);t.set("page",i);const a=window.location.pathname+"?"+t.toString();f.visit(a)};return e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("div",{className:"flex items-center gap-x-3 mb-4",children:e.jsx("h2",{className:"text-lg font-medium text-gray-800",children:e.jsx("b",{children:"Hiring Section"})})})}),e.jsx(R,{pagination:!1,columns:k,dataSource:u.data}),e.jsx("div",{className:"flex w-full items-center justify-end mt-2",children:e.jsx(F,{onChange:v,defaultCurrent:P,total:u.total,showSizeChanger:!1})})]})}export{It as default};