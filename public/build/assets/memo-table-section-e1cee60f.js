import{r as a,b as C,j as t}from"./app-680b3cf1.js";import{H as k}from"./main-77c534dd.js";import{h as v}from"./moment-a9aaa855.js";import T from"./button-components-8443808b.js";import{T as b,I as w,a as x}from"./Table-47c87b93.js";import{S as _}from"./index-8ef62fab.js";import{B as s}from"./button-3efb0b60.js";import"./index-e26d934d.js";import"./index-e310f7c1.js";import"./presets-ed2e109f.js";import"./render-68a8a42d.js";import"./AntdIcon-82f6858c.js";import"./asyncToGenerator-e39c1c83.js";import"./CheckCircleFilled-1c240dcd.js";import"./CloseCircleFilled-4912ec92.js";import"./InfoCircleFilled-564a7549.js";import"./KeyCode-806b1ce7.js";import"./pickAttrs-b0c359e3.js";import"./useZIndex-121f599d.js";import"./CloseOutlined-84cd7bc6.js";import"./EyeOutlined-29200e7b.js";import"./TrashIcon-6a7ebc07.js";import"./DownOutlined-3bccb6e0.js";import"./EditOutlined-174ceae6.js";import"./LeftOutlined-e9c31311.js";import"./index-eda4b3ae.js";import"./useId-ba5db0c7.js";import"./useSize-cca0febe.js";import"./Compact-8eb1181f.js";import"./ContextIsolator-6c32e20e.js";import"./PurePanel-5f19b0d3.js";import"./index-be069234.js";import"./collapse-97de76d4.js";import"./addEventListener-5347db05.js";import"./useLocale-bd96af51.js";import"./useBreakpoint-08f0cced.js";import"./useForceUpdate-25998752.js";import"./CheckOutlined-f7fad712.js";import"./index-6374539c.js";import"./FileOutlined-98917a48.js";import"./FolderOpenOutlined-3fa52aa0.js";import"./HolderOutlined-57622d33.js";function gt(){const[g,m]=a.useState(""),[f,p]=a.useState(""),c=a.useRef(null),{emp_memos:d}=C(o=>o.emp_memos);console.log("emp_memos",d);const h=(o,e,r)=>{e(),m(o[0]),p(r)},j=o=>{o(),m("")},l=o=>({filterDropdown:({setSelectedKeys:e,selectedKeys:r,confirm:n,clearFilters:u,close:y})=>t.jsxs("div",{style:{padding:8},onKeyDown:i=>i.stopPropagation(),children:[t.jsx(w,{ref:c,placeholder:`Search ${o}`,value:r[0],onChange:i=>e(i.target.value?[i.target.value]:[]),onPressEnter:()=>h(r,n,o),style:{marginBottom:8,display:"block"}}),t.jsxs(_,{children:[t.jsx(s,{type:"primary",onClick:()=>h(r,n,o),icon:t.jsx(x,{}),size:"small",style:{width:90},children:"Search"}),t.jsx(s,{onClick:()=>u&&j(u),size:"small",style:{width:90},children:"Reset"}),t.jsx(s,{type:"link",size:"small",onClick:()=>{n({closeDropdown:!1}),m(r[0]),p(o)},children:"Filter"}),t.jsx(s,{type:"link",size:"small",onClick:()=>{y()},children:"close"})]})]}),filterIcon:e=>t.jsx(x,{style:{color:e?"#1677ff":void 0}}),onFilter:(e,r)=>r[o].toString().toLowerCase().includes(e.toLowerCase()),onFilterDropdownOpenChange:e=>{e&&setTimeout(()=>{var r;return(r=c.current)==null?void 0:r.select()},100)},render:e=>f===o?t.jsx(k,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[g],autoEscape:!0,textToHighlight:e?e.toString():""}):e}),S=[{title:"Site",dataIndex:"site",key:"site",...l("site")},{title:"Memo Title",dataIndex:"memo_title",key:"memo_title",...l("memo_title")},{title:"Date",dataIndex:"created",key:"created",...l("created"),render:(o,e)=>t.jsx("div",{className:"gap-1.5 flex",children:v(e.created).format("LLL")})},{title:"Action",dataIndex:"action",render:(o,e)=>t.jsx(T,{})}];return t.jsxs("div",{children:[t.jsx("div",{children:t.jsx("div",{className:"flex items-center gap-x-3 mb-4",children:t.jsx("h2",{className:"text-lg font-medium text-gray-800",children:t.jsx("b",{children:"Memo Lists Table"})})})}),t.jsx(b,{columns:S,dataSource:d}),";"]})}export{gt as default};