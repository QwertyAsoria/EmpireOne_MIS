import{r as s,j as e}from"./app-58700b96.js";import{H as k}from"./main-14923936.js";import S from"./add-employee-health-data-form-section-48bc0f1d.js";import{T as v,I as C,a as x}from"./Table-30d13d2b.js";import{S as b}from"./index-fbb1685e.js";import{B as a}from"./button-758b5be1.js";import"./index-501db1c8.js";import"./index-e6b3180d.js";import"./presets-0d785a93.js";import"./render-b01b6924.js";import"./AntdIcon-298d23d8.js";import"./asyncToGenerator-839484c7.js";import"./CheckCircleFilled-ba887285.js";import"./CloseCircleFilled-76972dcf.js";import"./InfoCircleFilled-af2d424c.js";import"./useZIndex-f08aedd6.js";import"./useId-f1b9e5ca.js";import"./CloseOutlined-ec12a53b.js";import"./index-2163b856.js";import"./KeyCode-e41eed22.js";import"./pickAttrs-298605a0.js";import"./fade-9ef907af.js";import"./ContextIsolator-5fd2a4a7.js";import"./useSize-eb33bb25.js";import"./Compact-b2e8288a.js";import"./useClosable-1b1e0b3b.js";import"./useLocale-fa9fa40e.js";import"./PurePanel-2160b7da.js";import"./PlusSquareTwoTone-5f4b6bf9.js";import"./MedicineBoxOutlined-105e89d1.js";import"./index-51b0d406.js";import"./addEventListener-456a68b7.js";import"./DownOutlined-19634ad1.js";import"./useBreakpoint-9d1af04e.js";import"./useForceUpdate-4fd4d809.js";import"./LeftOutlined-4318f3d8.js";import"./index-2bdec1aa.js";import"./collapse-97de76d4.js";import"./CheckOutlined-090ffaa9.js";import"./index-6530dc8e.js";import"./FileOutlined-cc9702a0.js";import"./FolderOpenOutlined-92baf029.js";import"./HolderOutlined-0df22627.js";import"./EyeOutlined-1823161e.js";function ue(){const[u,n]=s.useState(""),[g,p]=s.useState(""),d=s.useRef(null),c=(r,t,o)=>{t(),n(r[0]),p(o)},y=r=>{r(),n("")},i=r=>({filterDropdown:({setSelectedKeys:t,selectedKeys:o,confirm:l,clearFilters:h,close:f})=>e.jsxs("div",{style:{padding:8},onKeyDown:m=>m.stopPropagation(),children:[e.jsx(C,{ref:d,placeholder:`Search ${r}`,value:o[0],onChange:m=>t(m.target.value?[m.target.value]:[]),onPressEnter:()=>c(o,l,r),style:{marginBottom:8,display:"block"}}),e.jsxs(b,{children:[e.jsx(a,{type:"primary",onClick:()=>c(o,l,r),icon:e.jsx(x,{}),size:"small",style:{width:90},children:"Search"}),e.jsx(a,{onClick:()=>h&&y(h),size:"small",style:{width:90},children:"Reset"}),e.jsx(a,{type:"link",size:"small",onClick:()=>{l({closeDropdown:!1}),n(o[0]),p(r)},children:"Filter"}),e.jsx(a,{type:"link",size:"small",onClick:()=>{f()},children:"close"})]})]}),filterIcon:t=>e.jsx(x,{style:{color:t?"#1677ff":void 0}}),onFilter:(t,o)=>o[r].toString().toLowerCase().includes(t.toLowerCase()),onFilterDropdownOpenChange:t=>{t&&setTimeout(()=>{var o;return(o=d.current)==null?void 0:o.select()},100)},render:t=>g===r?e.jsx(k,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[u],autoEscape:!0,textToHighlight:t?t.toString():""}):t}),j=[{title:"Complaint",dataIndex:"complaint",key:"complaint",...i("complaint")},{title:"Temperature",dataIndex:"temp",key:"temp",...i("temp")},{title:"Blood Pressure",dataIndex:"bp",key:"bp",...i("bp")},{title:"Sugar Level",dataIndex:"sugar",key:"sugar",...i("sugar")},{title:"Oxygen Level",dataIndex:"oxygen",key:"oxygen",...i("oxygen")},{title:"Injuries",dataIndex:"injury",key:"injury",...i("injury")},{title:"Recommendation",dataIndex:"recommend",key:"recommend",...i("recommend")},{title:"Medication Given",dataIndex:"med_give",key:"med_give",...i("med_give")},{title:"Date of Examine",dataIndex:"examdate",key:"examdate",...i("examdate")}];return e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("div",{className:"flex items-center gap-x-3 mb-4",children:e.jsx("h2",{className:"text-lg font-medium text-gray-800",children:e.jsx("b",{children:" Employee Medical Records"})})})}),e.jsx(S,{}),e.jsx(v,{columns:j}),";"]})}export{ue as default};