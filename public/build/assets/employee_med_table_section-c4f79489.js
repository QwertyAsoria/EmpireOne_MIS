import{r as s,j as e}from"./app-3b84976d.js";import{H as k}from"./main-63ac034b.js";import S from"./add-employee-health-data-form-section-eb074ef8.js";import{T as v,I as C,a as x}from"./Table-56064b43.js";import{S as b}from"./index-74ec0d27.js";import{B as a}from"./button-e56b0dd6.js";import"./index-6c08e43b.js";import"./index-fb46f770.js";import"./presets-848e2fba.js";import"./render-1396a843.js";import"./AntdIcon-71e46007.js";import"./asyncToGenerator-c437901c.js";import"./CheckCircleFilled-029da670.js";import"./CloseCircleFilled-8c07b52b.js";import"./InfoCircleFilled-31ffd59f.js";import"./useZIndex-37b4d1e8.js";import"./useId-3d30b7d5.js";import"./CloseOutlined-010645d0.js";import"./index-4b482e21.js";import"./KeyCode-01d15957.js";import"./pickAttrs-63d008c5.js";import"./fade-8ae6ceed.js";import"./ContextIsolator-7b71f2c7.js";import"./useSize-57d8ee82.js";import"./Compact-1ade6323.js";import"./useClosable-6e22efdd.js";import"./useLocale-e9fef4a7.js";import"./PurePanel-46f1ca19.js";import"./PlusSquareTwoTone-92716760.js";import"./MedicineBoxOutlined-598ee313.js";import"./index-d19d1f57.js";import"./addEventListener-9dcfea1a.js";import"./DownOutlined-d51533fd.js";import"./useBreakpoint-b4080518.js";import"./useForceUpdate-db28fbf7.js";import"./LeftOutlined-335d1b00.js";import"./index-b75547cf.js";import"./collapse-97de76d4.js";import"./CheckOutlined-4fadd5da.js";import"./index-34003c4d.js";import"./FileOutlined-8d9d2782.js";import"./FolderOpenOutlined-7caeef89.js";import"./HolderOutlined-94cb03dc.js";import"./EyeOutlined-abf0e275.js";function ue(){const[u,n]=s.useState(""),[g,p]=s.useState(""),d=s.useRef(null),c=(r,t,o)=>{t(),n(r[0]),p(o)},y=r=>{r(),n("")},i=r=>({filterDropdown:({setSelectedKeys:t,selectedKeys:o,confirm:l,clearFilters:h,close:f})=>e.jsxs("div",{style:{padding:8},onKeyDown:m=>m.stopPropagation(),children:[e.jsx(C,{ref:d,placeholder:`Search ${r}`,value:o[0],onChange:m=>t(m.target.value?[m.target.value]:[]),onPressEnter:()=>c(o,l,r),style:{marginBottom:8,display:"block"}}),e.jsxs(b,{children:[e.jsx(a,{type:"primary",onClick:()=>c(o,l,r),icon:e.jsx(x,{}),size:"small",style:{width:90},children:"Search"}),e.jsx(a,{onClick:()=>h&&y(h),size:"small",style:{width:90},children:"Reset"}),e.jsx(a,{type:"link",size:"small",onClick:()=>{l({closeDropdown:!1}),n(o[0]),p(r)},children:"Filter"}),e.jsx(a,{type:"link",size:"small",onClick:()=>{f()},children:"close"})]})]}),filterIcon:t=>e.jsx(x,{style:{color:t?"#1677ff":void 0}}),onFilter:(t,o)=>o[r].toString().toLowerCase().includes(t.toLowerCase()),onFilterDropdownOpenChange:t=>{t&&setTimeout(()=>{var o;return(o=d.current)==null?void 0:o.select()},100)},render:t=>g===r?e.jsx(k,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[u],autoEscape:!0,textToHighlight:t?t.toString():""}):t}),j=[{title:"Complaint",dataIndex:"complaint",key:"complaint",...i("complaint")},{title:"Temperature",dataIndex:"temp",key:"temp",...i("temp")},{title:"Blood Pressure",dataIndex:"bp",key:"bp",...i("bp")},{title:"Sugar Level",dataIndex:"sugar",key:"sugar",...i("sugar")},{title:"Oxygen Level",dataIndex:"oxygen",key:"oxygen",...i("oxygen")},{title:"Injuries",dataIndex:"injury",key:"injury",...i("injury")},{title:"Recommendation",dataIndex:"recommend",key:"recommend",...i("recommend")},{title:"Medication Given",dataIndex:"med_give",key:"med_give",...i("med_give")},{title:"Date of Examine",dataIndex:"examdate",key:"examdate",...i("examdate")}];return e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("div",{className:"flex items-center gap-x-3 mb-4",children:e.jsx("h2",{className:"text-lg font-medium text-gray-800",children:e.jsx("b",{children:" Employee Medical Records"})})})}),e.jsx(S,{}),e.jsx(v,{columns:j}),";"]})}export{ue as default};