import{r as c,b as C,j as e}from"./app-9f33efc9.js";import{H as k}from"./main-1bc2ad6c.js";import w from"./add-medicine-section-6e4e1c1f.js";import _ from"./medicine-button-dropdown-section-f213a828.js";import{T as v,I as T,a as u}from"./Table-22fde7aa.js";import{S as b}from"./index-2de49e1a.js";import{B as s}from"./button-02023954.js";import"./medicine-record-thunk-aa8e5f04.js";import"./index-7e3e9310.js";import"./index-f209aef9.js";import"./presets-9016d8c1.js";import"./render-df19e14a.js";import"./AntdIcon-df3d5d9a.js";import"./asyncToGenerator-58dc0849.js";import"./CheckCircleFilled-6ff47d43.js";import"./CloseCircleFilled-3cc945f7.js";import"./InfoCircleFilled-1d84c44c.js";import"./useZIndex-842edc34.js";import"./useId-4c8264f6.js";import"./CloseOutlined-883ad826.js";import"./index-80874a1a.js";import"./KeyCode-ab35bf0c.js";import"./pickAttrs-c9513ad0.js";import"./fade-ec6a1f02.js";import"./ContextIsolator-806fd2ef.js";import"./useSize-131cb1e1.js";import"./Compact-59bba936.js";import"./useClosable-d4fd10ba.js";import"./useLocale-996ea218.js";import"./PurePanel-b854e6ca.js";import"./PlusSquareTwoTone-8f95d965.js";import"./MedicineBoxOutlined-7dbedfa3.js";import"./edit-medicine-section-efbb72d8.js";import"./index-fcd12960.js";import"./index-265b3ce3.js";import"./index-5c4735b9.js";import"./LeftOutlined-8ea79cc2.js";import"./collapse-97de76d4.js";import"./delete-medicine-section-410cd435.js";import"./DownOutlined-19f243a4.js";import"./EditOutlined-d1d98f42.js";import"./DeleteOutlined-38d68c78.js";import"./addEventListener-fe1d22c9.js";import"./useBreakpoint-95547406.js";import"./useForceUpdate-4b585886.js";import"./CheckOutlined-45370998.js";import"./index-851cd320.js";import"./FileOutlined-57005106.js";import"./FolderOpenOutlined-f3658b1c.js";import"./HolderOutlined-e217c8a7.js";import"./EyeOutlined-e147c9b4.js";function ve(){const[x,m]=c.useState(""),[g,l]=c.useState(""),a=c.useRef(null),{medicine_records:j}=C(i=>i.medicine_records),d=(i,t,o)=>{t(),m(i[0]),l(o)},f=i=>{i(),m("")},n=i=>({filterDropdown:({setSelectedKeys:t,selectedKeys:o,confirm:p,clearFilters:h,close:y})=>e.jsxs("div",{style:{padding:8},onKeyDown:r=>r.stopPropagation(),children:[e.jsx(T,{ref:a,placeholder:`Search ${i}`,value:o[0],onChange:r=>t(r.target.value?[r.target.value]:[]),onPressEnter:()=>d(o,p,i),style:{marginBottom:8,display:"block"}}),e.jsxs(b,{children:[e.jsx(s,{type:"primary",onClick:()=>d(o,p,i),icon:e.jsx(u,{}),size:"small",style:{width:90},children:"Search"}),e.jsx(s,{onClick:()=>h&&f(h),size:"small",style:{width:90},children:"Reset"}),e.jsx(s,{type:"link",size:"small",onClick:()=>{p({closeDropdown:!1}),m(o[0]),l(i)},children:"Filter"}),e.jsx(s,{type:"link",size:"small",onClick:()=>{y()},children:"close"})]})]}),filterIcon:t=>e.jsx(u,{style:{color:t?"#1677ff":void 0}}),onFilter:(t,o)=>o[i].toString().toLowerCase().includes(t.toLowerCase()),onFilterDropdownOpenChange:t=>{t&&setTimeout(()=>{var o;return(o=a.current)==null?void 0:o.select()},100)},render:t=>g===i?e.jsx(k,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[x],autoEscape:!0,textToHighlight:t?t.toString():""}):t}),S=[{title:"Medicine",dataIndex:"medicine",key:"medicine",...n("medicine")},{title:"Medicine Type",dataIndex:"med_type",key:"med_type",...n("med_type")},{title:"Medicine Description",dataIndex:"med_desc",key:"med_desc",...n("med_desc")},{title:"Action",dataIndex:"action",render:(i,t)=>e.jsx(_,{data:t})}];return e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("div",{className:"flex items-center gap-x-3 mb-4",children:e.jsx("h2",{className:"text-lg font-medium text-gray-800",children:e.jsx("b",{children:"Medicine Records"})})})}),e.jsx(w,{}),e.jsx(v,{columns:S,dataSource:j}),";"]})}export{ve as default};