import{r as c,b as F,j as e,y as d}from"./app-3b84976d.js";import{H as L}from"./main-63ac034b.js";import N from"./declined-reason-section-96546fc0.js";import H from"./hiring-search-section-03a34abc.js";import{T as E,P as I,S as z,I as O,a as w}from"./Table-56064b43.js";import{T as U}from"./index-7b7caa61.js";import{a as y}from"./index-d19d1f57.js";import{S as B}from"./index-74ec0d27.js";import{B as p}from"./button-e56b0dd6.js";import{F as $,L as Q}from"./LineOutlined-088cbc92.js";import"./new-job-offer-section-c4254c78.js";import"./applicant-thunk-1c67badd.js";import"./applicant-record-service-756024aa.js";import"./hiring-thunk-2a101b62.js";import"./job-offer-service-2bbfb348.js";import"./BriefcaseIcon-6e3393b8.js";import"./index-6c08e43b.js";import"./index-fb46f770.js";import"./presets-848e2fba.js";import"./render-1396a843.js";import"./AntdIcon-71e46007.js";import"./asyncToGenerator-c437901c.js";import"./CheckCircleFilled-029da670.js";import"./CloseCircleFilled-8c07b52b.js";import"./InfoCircleFilled-31ffd59f.js";import"./useZIndex-37b4d1e8.js";import"./useId-3d30b7d5.js";import"./CloseOutlined-010645d0.js";import"./index-4b482e21.js";import"./KeyCode-01d15957.js";import"./pickAttrs-63d008c5.js";import"./fade-8ae6ceed.js";import"./ContextIsolator-7b71f2c7.js";import"./useSize-57d8ee82.js";import"./Compact-1ade6323.js";import"./useClosable-6e22efdd.js";import"./useLocale-e9fef4a7.js";import"./PurePanel-46f1ca19.js";import"./index-a2c57624.js";import"./DislikeOutlined-161d872d.js";import"./addEventListener-9dcfea1a.js";import"./DownOutlined-d51533fd.js";import"./useBreakpoint-b4080518.js";import"./useForceUpdate-db28fbf7.js";import"./LeftOutlined-335d1b00.js";import"./index-b75547cf.js";import"./collapse-97de76d4.js";import"./CheckOutlined-4fadd5da.js";import"./index-34003c4d.js";import"./FileOutlined-8d9d2782.js";import"./FolderOpenOutlined-7caeef89.js";import"./HolderOutlined-94cb03dc.js";import"./EyeOutlined-abf0e275.js";function Wt(){const[v,m]=c.useState(""),[P,u]=c.useState(""),h=c.useRef(null),{joboffers:g}=F(a=>a.joboffers);c.useState(!1);const x=(a,t,i)=>{t(),m(a[0]),u(i)},C=a=>{a(),m("")},o=a=>({filterDropdown:({setSelectedKeys:t,selectedKeys:i,confirm:n,clearFilters:s,close:r})=>e.jsxs("div",{style:{padding:8},onKeyDown:l=>l.stopPropagation(),children:[e.jsx(O,{ref:h,placeholder:`Search ${a}`,value:i[0],onChange:l=>t(l.target.value?[l.target.value]:[]),onPressEnter:()=>x(i,n,a),style:{marginBottom:8,display:"block"}}),e.jsxs(B,{children:[e.jsx(p,{type:"primary",onClick:()=>x(i,n,a),icon:e.jsx(w,{}),size:"small",style:{width:90},children:"Search"}),e.jsx(p,{onClick:()=>s&&C(s),size:"small",style:{width:90},children:"Reset"}),e.jsx(p,{type:"link",size:"small",onClick:()=>{n({closeDropdown:!1}),m(i[0]),u(a)},children:"Filter"}),e.jsx(p,{type:"link",size:"small",onClick:()=>{r()},children:"close"})]})]}),filterIcon:t=>e.jsx(w,{style:{color:t?"#1677ff":void 0}}),onFilter:(t,i)=>i[a].toString().toLowerCase().includes(t.toLowerCase()),onFilterDropdownOpenChange:t=>{t&&setTimeout(()=>{var i;return(i=h.current)==null?void 0:i.select()},100)},render:t=>P===a?e.jsx(L,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[v],autoEscape:!0,textToHighlight:t?t.toString():""}):t}),b=new URL(window.location.href),f=new URLSearchParams(b.search),k=f.get("page"),j=f.get("status");function D(a){d.visit("?page="+k+"&status="+(a||"null"))}const _=[{title:"Applicant #",dataIndex:"app_id",key:"app_id",...o("app_id")},{title:"Applicant Name",dataIndex:"app_name",key:"app_name",...o("app_name"),render:(a,t,i)=>{var n,s,r;return console.log("record",t),e.jsxs("div",{children:[(n=t==null?void 0:t.applicant)==null?void 0:n.fname," ",(s=t==null?void 0:t.applicant)==null?void 0:s.mname," ",(r=t==null?void 0:t.applicant)==null?void 0:r.lname]},i)}},{title:"Position",dataIndex:"jobPos",key:"position",...o("position")},{title:"Salary",dataIndex:"salary",key:"salary",...o("salary")},{title:e.jsx("div",{children:e.jsx(z,{allowClear:!0,className:"w-28",showSearch:!0,placeholder:"Status",optionFilterProp:"label",value:j=="null"?null:j,onChange:D,options:[{text:"Contract Signing",value:"Contract Signing"},{text:"Accepted",value:"Accepted"},{text:"Declined",value:"Declined"},{text:"Pending",value:"Pending"},{text:"Hired",value:"Hired"}]})}),dataIndex:"status",key:"status",render:(a,t,i)=>{console.log("record",t);let n="";switch(t.status){case"Contract Signing":n="#52D017";break;case"Accepted":n="#43BFC7";break;case"Declined":n="#E55451";break;case"Pending":n="#E1AD01";break;case"Hired":n="#008000";break}return e.jsx(U,{color:n,children:t.status},t.key)}},{title:"Action",dataIndex:"action",render:(a,t)=>e.jsxs("div",{className:"flex gap-1",children:[t.status!=="Pending"&&t.status!=="Declined"&&e.jsx(y,{title:"201 File",children:e.jsx("div",{children:e.jsx("button",{type:"button",onClick:()=>d.visit(`/admin/file_201/${t.app_id}?status=${t.status}`),className:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 shadow-lg shadow-cyan-500/50 font-medium rounded-lg text-lg px-3.5 py-2 text-center",children:e.jsx($,{})})})}),t.status==="Declined"&&e.jsx(y,{title:"Reason of Declination",children:e.jsx("div",{children:e.jsx(N,{data:t})})}),t.status==="Pending"&&e.jsx("div",{className:"ml-4",children:e.jsx(Q,{})})]})}],R=window.location.pathname+window.location.search,S=((a,t)=>new URLSearchParams(a.split("?")[1]).get(t))(R,"page"),T=S?parseInt(S,10):1,A=a=>{const t=new URLSearchParams(window.location.search);t.set("page",a);const i=window.location.pathname+"?"+t.toString();d.visit(i)};return e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("div",{className:"flex items-center gap-x-3 mb-4",children:e.jsx("h2",{className:"text-lg font-medium text-gray-800",children:e.jsx("b",{children:"Onboarding Section"})})})}),e.jsx(H,{}),e.jsx(E,{pagination:!1,columns:_,dataSource:g.data}),e.jsx("div",{className:"flex w-full items-center justify-end mt-2",children:e.jsx(I,{onChange:A,defaultCurrent:T,total:g.total,showSizeChanger:!1})})]})}export{Wt as default};