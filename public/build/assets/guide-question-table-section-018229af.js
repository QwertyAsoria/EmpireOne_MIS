import{r as m,b as C,j as t}from"./app-66c2d29a.js";import{H as y}from"./main-b02b91d3.js";import k from"./add-guide-question-section-875fcd45.js";import{h as v}from"./moment-a9aaa855.js";import w from"./guide-question-button-dropdown-section-fea7d741.js";import{T as b,I as T,S as h}from"./Table-7d83a205.js";import{S as D}from"./index-0248bf32.js";import{B as s}from"./button-62e43a7a.js";import"./guide-question-thunk-49457c58.js";import"./presets-149415d9.js";import"./AntdIcon-8728ec96.js";import"./index-8040b317.js";import"./index-ae953238.js";import"./render-32dada9c.js";import"./asyncToGenerator-89f53324.js";import"./CheckCircleFilled-ff72a340.js";import"./CloseCircleFilled-a8140992.js";import"./InfoCircleFilled-eee5654e.js";import"./useZIndex-5312b8ae.js";import"./useId-bec34e53.js";import"./CloseOutlined-26c88e73.js";import"./index-ef60696d.js";import"./pickAttrs-5acfc901.js";import"./ContextIsolator-613eac7c.js";import"./useSize-fb9721f0.js";import"./Compact-0538fa3f.js";import"./useClosable-fbe7873b.js";import"./useLocale-2accffec.js";import"./PurePanel-a6ca3c76.js";import"./edit-guide-question-section-4450c26c.js";import"./index-55c73ddc.js";import"./LoadingOutlined-a6c3ae95.js";import"./index-a62c3efc.js";import"./index-1d92ab84.js";import"./LeftOutlined-02f7458c.js";import"./collapse-97de76d4.js";import"./delete-guide-question-section-fe3f1f09.js";import"./DownOutlined-1d8d17a5.js";import"./EditOutlined-8ca3b2fe.js";import"./DeleteOutlined-128c538c.js";import"./addEventListener-2856e37b.js";import"./useBreakpoint-d503da7f.js";import"./useForceUpdate-4bb53ca1.js";import"./CheckOutlined-5a2d55e1.js";import"./index-cccf9ead.js";import"./FileOutlined-919383d5.js";import"./FolderOpenOutlined-d428ab16.js";import"./HolderOutlined-df69894b.js";import"./EyeOutlined-3dbb330f.js";function wt(){const[g,n]=m.useState(""),[x,p]=m.useState(""),{guideqs:a}=C(e=>e.guideqs);console.log("guideq",a);const c=m.useRef(null),d=(e,o,r)=>{o(),n(e[0]),p(r)},f=e=>{e(),n("")},j=[{title:"Guide Question",dataIndex:"guideqs",key:"guideq",...(e=>({filterDropdown:({setSelectedKeys:o,selectedKeys:r,confirm:l,clearFilters:u,close:S})=>t.jsxs("div",{style:{padding:8},onKeyDown:i=>i.stopPropagation(),children:[t.jsx(T,{ref:c,placeholder:`Search ${e}`,value:r[0],onChange:i=>o(i.target.value?[i.target.value]:[]),onPressEnter:()=>d(r,l,e),style:{marginBottom:8,display:"block"}}),t.jsxs(D,{children:[t.jsx(s,{type:"primary",onClick:()=>d(r,l,e),icon:t.jsx(h,{}),size:"small",style:{width:90},children:"Search"}),t.jsx(s,{onClick:()=>u&&f(u),size:"small",style:{width:90},children:"Reset"}),t.jsx(s,{type:"link",size:"small",onClick:()=>{l({closeDropdown:!1}),n(r[0]),p(e)},children:"Filter"}),t.jsx(s,{type:"link",size:"small",onClick:()=>{S()},children:"close"})]})]}),filterIcon:o=>t.jsx(h,{style:{color:o?"#1677ff":void 0}}),onFilter:(o,r)=>r[e].toString().toLowerCase().includes(o.toLowerCase()),onFilterDropdownOpenChange:o=>{o&&setTimeout(()=>{var r;return(r=c.current)==null?void 0:r.select()},100)},render:o=>x===e?t.jsx(y,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[g],autoEscape:!0,textToHighlight:o?o.toString():""}):o}))("guideq")},{title:"Date Created",dataIndex:"fullname",key:"fullname",render:(e,o)=>t.jsx("div",{className:"gap-1.5 flex",children:v(o.created).format("LLL")})},{title:"Action",dataIndex:"action",render:(e,o)=>t.jsx(w,{data:o})}];return t.jsxs("div",{children:[t.jsx("div",{children:t.jsx("div",{className:"flex items-center gap-x-3 mb-4",children:t.jsx("h2",{className:"text-lg font-medium text-gray-800",children:t.jsx("b",{children:"Interview Guide Questions"})})})}),t.jsx(k,{}),t.jsx(b,{columns:j,dataSource:a}),";"]})}export{wt as default};