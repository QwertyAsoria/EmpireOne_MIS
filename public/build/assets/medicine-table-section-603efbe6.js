import{r as c,b as C,j as e}from"./app-0df8c9ad.js";import{H as k}from"./main-a4a82427.js";import w from"./add-medicine-section-e3418b0f.js";import _ from"./medicine-button-dropdown-section-67f76066.js";import{T as v,I as T,S as u}from"./Table-3b80593d.js";import{S as b}from"./index-fe705e66.js";import{B as s}from"./button-e3556dc3.js";import"./medicine-record-thunk-eebf7afb.js";import"./index-4064e24c.js";import"./index-bbe26f5d.js";import"./presets-202283c5.js";import"./render-76e9977e.js";import"./asyncToGenerator-14626b52.js";import"./CheckCircleFilled-da7a6620.js";import"./AntdIcon-3caab9bf.js";import"./CloseCircleFilled-8f4259b9.js";import"./InfoCircleFilled-30ad0a9d.js";import"./useZIndex-09e90104.js";import"./useId-e875338e.js";import"./CloseOutlined-2aaac7f6.js";import"./index-6e69c1c8.js";import"./pickAttrs-13cf7b6a.js";import"./ContextIsolator-7afaf7d8.js";import"./useSize-b5e2027d.js";import"./Compact-7026a57c.js";import"./useClosable-7f0266ef.js";import"./useLocale-9c0b4cf8.js";import"./PurePanel-5247e641.js";import"./PlusSquareTwoTone-d87be52b.js";import"./MedicineBoxOutlined-9afc2be2.js";import"./edit-medicine-section-caa93e8c.js";import"./index-d9a9b981.js";import"./LoadingOutlined-db5d11d4.js";import"./index-35160034.js";import"./index-2ed711db.js";import"./LeftOutlined-84d82b7a.js";import"./collapse-97de76d4.js";import"./delete-medicine-section-80d76d99.js";import"./DownOutlined-62832e0e.js";import"./EditOutlined-3254f1c5.js";import"./DeleteOutlined-15e2be58.js";import"./addEventListener-955de951.js";import"./useBreakpoint-02feb1f7.js";import"./useForceUpdate-585fb531.js";import"./CheckOutlined-cc768e99.js";import"./index-784785de.js";import"./FileOutlined-647da28c.js";import"./FolderOpenOutlined-14b879b6.js";import"./HolderOutlined-38fa44f8.js";import"./EyeOutlined-551ed52a.js";function _e(){const[x,n]=c.useState(""),[g,l]=c.useState(""),a=c.useRef(null),{medicine_records:j}=C(i=>i.medicine_records),d=(i,t,o)=>{t(),n(i[0]),l(o)},S=i=>{i(),n("")},m=i=>({filterDropdown:({setSelectedKeys:t,selectedKeys:o,confirm:p,clearFilters:h,close:y})=>e.jsxs("div",{style:{padding:8},onKeyDown:r=>r.stopPropagation(),children:[e.jsx(T,{ref:a,placeholder:`Search ${i}`,value:o[0],onChange:r=>t(r.target.value?[r.target.value]:[]),onPressEnter:()=>d(o,p,i),style:{marginBottom:8,display:"block"}}),e.jsxs(b,{children:[e.jsx(s,{type:"primary",onClick:()=>d(o,p,i),icon:e.jsx(u,{}),size:"small",style:{width:90},children:"Search"}),e.jsx(s,{onClick:()=>h&&S(h),size:"small",style:{width:90},children:"Reset"}),e.jsx(s,{type:"link",size:"small",onClick:()=>{p({closeDropdown:!1}),n(o[0]),l(i)},children:"Filter"}),e.jsx(s,{type:"link",size:"small",onClick:()=>{y()},children:"close"})]})]}),filterIcon:t=>e.jsx(u,{style:{color:t?"#1677ff":void 0}}),onFilter:(t,o)=>o[i].toString().toLowerCase().includes(t.toLowerCase()),onFilterDropdownOpenChange:t=>{t&&setTimeout(()=>{var o;return(o=a.current)==null?void 0:o.select()},100)},render:t=>g===i?e.jsx(k,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[x],autoEscape:!0,textToHighlight:t?t.toString():""}):t}),f=[{title:"Medicine",dataIndex:"medicine",key:"medicine",...m("medicine")},{title:"Medicine Type",dataIndex:"med_type",key:"med_type",...m("med_type")},{title:"Medicine Description",dataIndex:"med_desc",key:"med_desc",...m("med_desc")},{title:"Action",dataIndex:"action",render:(i,t)=>e.jsx(_,{data:t})}];return e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("div",{className:"flex items-center gap-x-3 mb-4",children:e.jsx("h2",{className:"text-lg font-medium text-gray-800",children:e.jsx("b",{children:"Medicine Records"})})})}),e.jsx(w,{}),e.jsx(v,{columns:f,dataSource:j}),";"]})}export{_e as default};