import{r as n,b as D,j as t}from"./app-cbabef96.js";import{T as v,I as T,S as j,H as I}from"./main-1fe3586a.js";import w from"./button-components-1aacdfbe.js";import _ from"./erf-dropdown-filter-components-48f6e831.js";import E from"./add-position-button-section-c3e43329.js";import{T as N}from"./index-e8611b09.js";import{S as R}from"./index-3e7a4945.js";import{B as d}from"./button-34753591.js";import"./warning-81272f54.js";import"./useSize-e1afdcd9.js";import"./index-fce4089b.js";import"./PurePanel-8e6559d6.js";import"./AntdIcon-d783d7a4.js";import"./pickAttrs-ac86a368.js";import"./DownOutlined-707e9def.js";import"./useLocale-1c19f6a1.js";import"./useBreakpoint-c403aa47.js";import"./CloseOutlined-b384916a.js";import"./FileOutlined-c9fe2434.js";import"./FolderOpenOutlined-d5431798.js";import"./HolderOutlined-918e5ee1.js";import"./EyeOutlined-4dd6df62.js";import"./index-5988df73.js";import"./CheckCircleFilled-ea076c21.js";import"./ExclamationCircleFilled-a625f2c8.js";import"./InfoCircleFilled-e8f2092a.js";import"./useClosable-b00e50cd.js";import"./EditOutlined-7cf165b0.js";import"./add-new-position-section-a46a46ea.js";import"./PlusSquareTwoTone-9bd04356.js";import"./add-existing-position-section-b183d311.js";function ce(){const[S,c]=n.useState(""),[y,f]=n.useState(""),[m,p]=n.useState([]),{erf_records:u}=D(o=>o.erf_records);console.log("erf_records",u);const g=o=>{if(o.length===0)p(u);else{const e=u.filter(s=>o.includes(s.status));p(e)}};n.useEffect(()=>{const o=localStorage.getItem("filteredData");o?p(JSON.parse(o)):g([])},[]),n.useEffect(()=>{localStorage.setItem("filteredData",JSON.stringify(m))},[m]);const h=n.useRef(null),x=(o,e,s)=>{e(),c(o[0]),f(s)},k=o=>{o(),c("")},r=o=>({filterDropdown:({setSelectedKeys:e,selectedKeys:s,confirm:i,clearFilters:a,close:C})=>t.jsxs("div",{style:{padding:8},onKeyDown:l=>l.stopPropagation(),children:[t.jsx(T,{ref:h,placeholder:`Search ${o}`,value:s[0],onChange:l=>e(l.target.value?[l.target.value]:[]),onPressEnter:()=>x(s,i,o),style:{marginBottom:8,display:"block"}}),t.jsxs(R,{children:[t.jsx(d,{type:"primary",onClick:()=>x(s,i,o),icon:t.jsx(j,{}),size:"small",style:{width:90},children:"Search"}),t.jsx(d,{onClick:()=>a&&k(a),size:"small",style:{width:90},children:"Reset"}),t.jsx(d,{type:"link",size:"small",onClick:()=>{i({closeDropdown:!1}),c(s[0]),f(o)},children:"Filter"}),t.jsx(d,{type:"link",size:"small",onClick:()=>{C()},children:"close"})]})]}),filterIcon:e=>t.jsx(j,{style:{color:e?"#1677ff":void 0}}),onFilter:(e,s)=>s[o].toString().toLowerCase().includes(e.toLowerCase()),onFilterDropdownOpenChange:e=>{e&&setTimeout(()=>{var s;return(s=h.current)==null?void 0:s.select()},100)},render:e=>y===o?t.jsx(I,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[S],autoEscape:!0,textToHighlight:e?e.toString():""}):e}),b=[{title:"Ref #",dataIndex:"id",key:"emp_id",...r("emp_id")},{title:"Requesting Manager",dataIndex:"fullname",key:"fullname",...r("fullname"),render:(o,e,s)=>{var i,a;return console.log("record",e),t.jsxs("div",{children:[(i=e.user)==null?void 0:i.employee_fname," ",(a=e.user)==null?void 0:a.employee_lname]},s)}},{title:"Job Title",dataIndex:"jobTitle",key:"position",...r("position")},{title:"Job Type",dataIndex:"jobType",key:"dept",...r("dept")},{title:"Position Status",dataIndex:"positionStatus",key:"eogs",...r("eogs")},{title:"Date Needed",dataIndex:"dateNeed",key:"contact",...r("contact")},{title:"Budget/Cost",dataIndex:"budgetCost",key:"eogs",...r("eogs")},{title:"Date Submitted",dataIndex:"submitted",key:"eogs",...r("eogs")},{title:"Status",dataIndex:"status",key:"status",render:(o,e,s)=>(console.log("record",e),t.jsx(N,{color:e.status=="Approved"?"green":e.status=="Pending"?"orange":e.status=="Declined"?"red":(e.status=="In Review","blue"),children:e.status},s))},{title:"Action",dataIndex:"action",render:(o,e)=>t.jsx(w,{})}];return t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx("div",{className:"flex items-center gap-x-3",children:t.jsx("h2",{className:"text-lg font-medium text-gray-800",children:t.jsx("b",{children:"Employee Section"})})}),t.jsxs("div",{className:"flex flex-1 justify-between",children:[t.jsx(E,{}),t.jsx("div",{className:"mr-8",children:t.jsx(_,{filterData:g})})]})]}),t.jsx(v,{columns:b,dataSource:m,className:"mt-1"})]})}export{ce as default};