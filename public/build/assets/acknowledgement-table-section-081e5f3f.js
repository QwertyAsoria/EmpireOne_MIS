import{r as c,b as F,j as e,y as d}from"./app-680b3cf1.js";import{H as L}from"./main-77c534dd.js";import N from"./declined-reason-section-8ffe48fd.js";import H from"./hiring-search-section-505a89e5.js";import{T as E,P as I,S as z,I as O,a as w}from"./Table-47c87b93.js";import{T as U}from"./index-bcebeb33.js";import{a as y}from"./index-eda4b3ae.js";import{S as B}from"./index-8ef62fab.js";import{B as p}from"./button-3efb0b60.js";import{F as $,L as Q}from"./LineOutlined-34cc93cd.js";import"./new-job-offer-section-8e90ed38.js";import"./applicant-thunk-a3bd1dd7.js";import"./applicant-record-service-ce1e1172.js";import"./hiring-thunk-2550da46.js";import"./job-offer-service-b14f304c.js";import"./BriefcaseIcon-3ac8b11e.js";import"./index-b7b9fa3f.js";import"./index-e310f7c1.js";import"./presets-ed2e109f.js";import"./render-68a8a42d.js";import"./AntdIcon-82f6858c.js";import"./asyncToGenerator-e39c1c83.js";import"./CheckCircleFilled-1c240dcd.js";import"./CloseCircleFilled-4912ec92.js";import"./InfoCircleFilled-564a7549.js";import"./useZIndex-121f599d.js";import"./useId-ba5db0c7.js";import"./CloseOutlined-84cd7bc6.js";import"./index-91ca52e4.js";import"./KeyCode-806b1ce7.js";import"./pickAttrs-b0c359e3.js";import"./fade-80271a03.js";import"./ContextIsolator-6c32e20e.js";import"./useSize-cca0febe.js";import"./Compact-8eb1181f.js";import"./useClosable-33fbd275.js";import"./useLocale-bd96af51.js";import"./PurePanel-5f19b0d3.js";import"./index-e26d934d.js";import"./DislikeOutlined-1d0113da.js";import"./addEventListener-5347db05.js";import"./DownOutlined-3bccb6e0.js";import"./useBreakpoint-08f0cced.js";import"./useForceUpdate-25998752.js";import"./LeftOutlined-e9c31311.js";import"./index-be069234.js";import"./collapse-97de76d4.js";import"./CheckOutlined-f7fad712.js";import"./index-6374539c.js";import"./FileOutlined-98917a48.js";import"./FolderOpenOutlined-3fa52aa0.js";import"./HolderOutlined-57622d33.js";import"./EyeOutlined-29200e7b.js";function Wt(){const[v,m]=c.useState(""),[P,u]=c.useState(""),h=c.useRef(null),{joboffers:g}=F(a=>a.joboffers);c.useState(!1);const x=(a,t,i)=>{t(),m(a[0]),u(i)},C=a=>{a(),m("")},o=a=>({filterDropdown:({setSelectedKeys:t,selectedKeys:i,confirm:n,clearFilters:s,close:r})=>e.jsxs("div",{style:{padding:8},onKeyDown:l=>l.stopPropagation(),children:[e.jsx(O,{ref:h,placeholder:`Search ${a}`,value:i[0],onChange:l=>t(l.target.value?[l.target.value]:[]),onPressEnter:()=>x(i,n,a),style:{marginBottom:8,display:"block"}}),e.jsxs(B,{children:[e.jsx(p,{type:"primary",onClick:()=>x(i,n,a),icon:e.jsx(w,{}),size:"small",style:{width:90},children:"Search"}),e.jsx(p,{onClick:()=>s&&C(s),size:"small",style:{width:90},children:"Reset"}),e.jsx(p,{type:"link",size:"small",onClick:()=>{n({closeDropdown:!1}),m(i[0]),u(a)},children:"Filter"}),e.jsx(p,{type:"link",size:"small",onClick:()=>{r()},children:"close"})]})]}),filterIcon:t=>e.jsx(w,{style:{color:t?"#1677ff":void 0}}),onFilter:(t,i)=>i[a].toString().toLowerCase().includes(t.toLowerCase()),onFilterDropdownOpenChange:t=>{t&&setTimeout(()=>{var i;return(i=h.current)==null?void 0:i.select()},100)},render:t=>P===a?e.jsx(L,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[v],autoEscape:!0,textToHighlight:t?t.toString():""}):t}),b=new URL(window.location.href),f=new URLSearchParams(b.search),k=f.get("page"),j=f.get("status");function D(a){d.visit("?page="+k+"&status="+(a||"null"))}const _=[{title:"Applicant #",dataIndex:"app_id",key:"app_id",...o("app_id")},{title:"Applicant Name",dataIndex:"app_name",key:"app_name",...o("app_name"),render:(a,t,i)=>{var n,s,r;return console.log("record",t),e.jsxs("div",{children:[(n=t==null?void 0:t.applicant)==null?void 0:n.fname," ",(s=t==null?void 0:t.applicant)==null?void 0:s.mname," ",(r=t==null?void 0:t.applicant)==null?void 0:r.lname]},i)}},{title:"Position",dataIndex:"jobPos",key:"position",...o("position")},{title:"Salary",dataIndex:"salary",key:"salary",...o("salary")},{title:e.jsx("div",{children:e.jsx(z,{allowClear:!0,className:"w-28",showSearch:!0,placeholder:"Status",optionFilterProp:"label",value:j=="null"?null:j,onChange:D,options:[{text:"Contract Signing",value:"Contract Signing"},{text:"Accepted",value:"Accepted"},{text:"Declined",value:"Declined"},{text:"Pending",value:"Pending"},{text:"Hired",value:"Hired"}]})}),dataIndex:"status",key:"status",render:(a,t,i)=>{console.log("record",t);let n="";switch(t.status){case"Contract Signing":n="#52D017";break;case"Accepted":n="#43BFC7";break;case"Declined":n="#E55451";break;case"Pending":n="#E1AD01";break;case"Hired":n="#008000";break}return e.jsx(U,{color:n,children:t.status},t.key)}},{title:"Action",dataIndex:"action",render:(a,t)=>e.jsxs("div",{className:"flex gap-1",children:[t.status!=="Pending"&&t.status!=="Declined"&&e.jsx(y,{title:"201 File",children:e.jsx("div",{children:e.jsx("button",{type:"button",onClick:()=>d.visit(`/admin/file_201/${t.app_id}?status=${t.status}`),className:"text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 shadow-lg shadow-cyan-500/50 font-medium rounded-lg text-lg px-3.5 py-2 text-center",children:e.jsx($,{})})})}),t.status==="Declined"&&e.jsx(y,{title:"Reason of Declination",children:e.jsx("div",{children:e.jsx(N,{data:t})})}),t.status==="Pending"&&e.jsx("div",{className:"ml-4",children:e.jsx(Q,{})})]})}],R=window.location.pathname+window.location.search,S=((a,t)=>new URLSearchParams(a.split("?")[1]).get(t))(R,"page"),T=S?parseInt(S,10):1,A=a=>{const t=new URLSearchParams(window.location.search);t.set("page",a);const i=window.location.pathname+"?"+t.toString();d.visit(i)};return e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("div",{className:"flex items-center gap-x-3 mb-4",children:e.jsx("h2",{className:"text-lg font-medium text-gray-800",children:e.jsx("b",{children:"Onboarding Section"})})})}),e.jsx(H,{}),e.jsx(E,{pagination:!1,columns:_,dataSource:g.data}),e.jsx("div",{className:"flex w-full items-center justify-end mt-2",children:e.jsx(I,{onChange:A,defaultCurrent:T,total:g.total,showSizeChanger:!1})})]})}export{Wt as default};