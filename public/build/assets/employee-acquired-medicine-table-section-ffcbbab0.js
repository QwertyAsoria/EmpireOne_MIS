import{r as n,j as t}from"./app-3b84976d.js";import{H as S}from"./main-63ac034b.js";import C from"./add-employee-acquired-medicine-section-7a6135d2.js";import{T as k,I as q,a as u}from"./Table-56064b43.js";import{S as v}from"./index-74ec0d27.js";import{B as s}from"./button-e56b0dd6.js";import"./PlusSquareTwoTone-92716760.js";import"./presets-848e2fba.js";import"./AntdIcon-71e46007.js";import"./index-6c08e43b.js";import"./index-fb46f770.js";import"./render-1396a843.js";import"./asyncToGenerator-c437901c.js";import"./CheckCircleFilled-029da670.js";import"./CloseCircleFilled-8c07b52b.js";import"./InfoCircleFilled-31ffd59f.js";import"./useZIndex-37b4d1e8.js";import"./useId-3d30b7d5.js";import"./CloseOutlined-010645d0.js";import"./index-4b482e21.js";import"./KeyCode-01d15957.js";import"./pickAttrs-63d008c5.js";import"./fade-8ae6ceed.js";import"./ContextIsolator-7b71f2c7.js";import"./useSize-57d8ee82.js";import"./Compact-1ade6323.js";import"./useClosable-6e22efdd.js";import"./useLocale-e9fef4a7.js";import"./PurePanel-46f1ca19.js";import"./MedicineBoxOutlined-598ee313.js";import"./index-d19d1f57.js";import"./addEventListener-9dcfea1a.js";import"./DownOutlined-d51533fd.js";import"./useBreakpoint-b4080518.js";import"./useForceUpdate-db28fbf7.js";import"./LeftOutlined-335d1b00.js";import"./index-b75547cf.js";import"./collapse-97de76d4.js";import"./CheckOutlined-4fadd5da.js";import"./index-34003c4d.js";import"./FileOutlined-8d9d2782.js";import"./FolderOpenOutlined-7caeef89.js";import"./HolderOutlined-94cb03dc.js";import"./EyeOutlined-abf0e275.js";function xt(){const[x,m]=n.useState(""),[g,a]=n.useState(""),c=n.useRef(null),d=(o,e,i)=>{e(),m(o[0]),a(i)},y=o=>{o(),m("")},l=o=>({filterDropdown:({setSelectedKeys:e,selectedKeys:i,confirm:p,clearFilters:h,close:f})=>t.jsxs("div",{style:{padding:8},onKeyDown:r=>r.stopPropagation(),children:[t.jsx(q,{ref:c,placeholder:`Search ${o}`,value:i[0],onChange:r=>e(r.target.value?[r.target.value]:[]),onPressEnter:()=>d(i,p,o),style:{marginBottom:8,display:"block"}}),t.jsxs(v,{children:[t.jsx(s,{type:"primary",onClick:()=>d(i,p,o),icon:t.jsx(u,{}),size:"small",style:{width:90},children:"Search"}),t.jsx(s,{onClick:()=>h&&y(h),size:"small",style:{width:90},children:"Reset"}),t.jsx(s,{type:"link",size:"small",onClick:()=>{p({closeDropdown:!1}),m(i[0]),a(o)},children:"Filter"}),t.jsx(s,{type:"link",size:"small",onClick:()=>{f()},children:"close"})]})]}),filterIcon:e=>t.jsx(u,{style:{color:e?"#1677ff":void 0}}),onFilter:(e,i)=>i[o].toString().toLowerCase().includes(e.toLowerCase()),onFilterDropdownOpenChange:e=>{e&&setTimeout(()=>{var i;return(i=c.current)==null?void 0:i.select()},100)},render:e=>g===o?t.jsx(S,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[x],autoEscape:!0,textToHighlight:e?e.toString():""}):e}),j=[{title:"Medicine",dataIndex:"med",key:"med",...l("med")},{title:"Quantity",dataIndex:"qty",key:"qty",...l("qty")},{title:"Acquired Date",dataIndex:"acq_date",key:"acq_date",...l("acq_date")}];return t.jsxs("div",{children:[t.jsx("div",{children:t.jsx("div",{className:"flex items-center gap-x-3 mb-4",children:t.jsx("h2",{className:"text-lg font-medium text-gray-800",children:t.jsx("b",{children:" Employee Acquired Medicine Records"})})})}),t.jsx(C,{}),t.jsx(k,{columns:j}),";"]})}export{xt as default};