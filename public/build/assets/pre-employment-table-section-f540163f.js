import{r as a,b as f,j as e}from"./app-6512ec23.js";import{H as v}from"./main-e3510e50.js";import"./moment-a9aaa855.js";import y from"./re-upload-requirements-section-abd5f249.js";import{T as w,I as R,a as C}from"./Table-e6f9c951.js";import{T}from"./index-c31b9267.js";import{e as b}from"./presets-b664276e.js";import{A as D}from"./AntdIcon-8b448a9a.js";import{S as O}from"./index-81d320c7.js";import{B as p}from"./button-395f1567.js";import{C as q}from"./CheckSquareOutlined-cd8b0701.js";import"./pre-employment-file-service-7964528d.js";import"./final-rate-thunk-c9d7f89a.js";import"./applicant-final-service-912b1e89.js";import"./applicant-record-service-582e1730.js";import"./index-bbbaebee.js";import"./index-ab1db3cc.js";import"./render-d91bf3e3.js";import"./asyncToGenerator-ae65c638.js";import"./CheckCircleFilled-cecc34f1.js";import"./CloseCircleFilled-72f8e8e1.js";import"./InfoCircleFilled-aa5f0cc1.js";import"./useZIndex-718f9d90.js";import"./useId-d9c65968.js";import"./CloseOutlined-d9ba04d4.js";import"./index-b20623ab.js";import"./KeyCode-40507553.js";import"./pickAttrs-47097f77.js";import"./fade-c25870e0.js";import"./ContextIsolator-f8c4eff9.js";import"./useSize-492d1886.js";import"./Compact-251a5749.js";import"./useClosable-41a93046.js";import"./useLocale-5ef37f61.js";import"./PurePanel-9fb38da3.js";import"./index-754d2a5e.js";import"./collapse-97de76d4.js";import"./useForceUpdate-65e74534.js";import"./DeleteOutlined-32e8bee8.js";import"./EyeOutlined-3b6c33c6.js";import"./CheckOutlined-a611d420.js";import"./index-0f357e78.js";import"./index-28af47ed.js";import"./addEventListener-34876ce8.js";import"./DownOutlined-b7cf4e31.js";import"./useBreakpoint-bdb72798.js";import"./LeftOutlined-7268377a.js";import"./index-dd22c974.js";import"./index-eba1cb69.js";import"./FileOutlined-b3fc0b14.js";import"./FolderOpenOutlined-e8c4d4b8.js";import"./HolderOutlined-5417a89e.js";var z={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M699 353h-46.9c-10.2 0-19.9 4.9-25.9 13.3L469 584.3l-71.2-98.8c-6-8.3-15.6-13.3-25.9-13.3H325c-6.5 0-10.3 7.4-6.5 12.7l124.6 172.8a31.8 31.8 0 0051.7 0l210.6-292c3.9-5.3.1-12.7-6.4-12.7z"}},{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}}]},name:"check-circle",theme:"outlined"};const I=z;var _=function(i,m){return a.createElement(D,b({},i,{ref:m,icon:I}))},A=a.forwardRef(_);const E=A;function At(){const[c,i]=a.useState(""),[m,u]=a.useState(""),d=a.useRef(null);f(r=>r.preemploymentfiles);const{applicant:l}=f(r=>r.final_rate),h=(r,t,o)=>{t(),i(r[0]),u(o)},S=r=>{r(),i("")},x=r=>({filterDropdown:({setSelectedKeys:t,selectedKeys:o,confirm:s,clearFilters:g,close:k})=>e.jsxs("div",{style:{padding:8},onKeyDown:n=>n.stopPropagation(),children:[e.jsx(R,{ref:d,placeholder:`Search ${r}`,value:o[0],onChange:n=>t(n.target.value?[n.target.value]:[]),onPressEnter:()=>h(o,s,r),style:{marginBottom:8,display:"block"}}),e.jsxs(O,{children:[e.jsx(p,{type:"primary",onClick:()=>h(o,s,r),icon:e.jsx(C,{}),size:"small",style:{width:90},children:"Search"}),e.jsx(p,{onClick:()=>g&&S(g),size:"small",style:{width:90},children:"Reset"}),e.jsx(p,{type:"link",size:"small",onClick:()=>{s({closeDropdown:!1}),i(o[0]),u(r)},children:"Filter"}),e.jsx(p,{type:"link",size:"small",onClick:()=>{k()},children:"close"})]})]}),filterIcon:t=>e.jsx(C,{style:{color:t?"#1677ff":void 0}}),onFilter:(t,o)=>o[r].toString().toLowerCase().includes(t.toLowerCase()),onFilterDropdownOpenChange:t=>{t&&setTimeout(()=>{var o;return(o=d.current)==null?void 0:o.select()},100)},render:t=>m===r?e.jsx(v,{highlightStyle:{backgroundColor:"#ffc069",padding:0},searchWords:[c],autoEscape:!0,textToHighlight:t?t.toString():""}):t}),j=[{title:"App ID",dataIndex:"app_id",key:"app_id",...x("app_id")},{title:"Requirements",dataIndex:"reqs",key:"reqs",...x("reqs")},{title:"Status",dataIndex:"status",key:"status",render:(r,t,o)=>{console.log("record",t);const s=t.status==="Declined"?`${t.status} - ${t.reas}`:t.status;return e.jsx(T,{color:t.status==="Approved"?"green":t.status==="Uploaded"?"orange":t.status==="Declined"?"red":(t.status==="In Review","blue"),children:s},o)}},{title:"Action",dataIndex:"action",render:(r,t)=>e.jsxs("div",{className:"flex gap-1",children:[t.status==="Approved"&&e.jsx("div",{className:"text-green-500",children:e.jsx(E,{className:"text-2xl ml-2.5"})}),t.status==="Declined"&&e.jsx(y,{data:t}),t.status==="Uploaded"&&e.jsx("div",{className:"ml-2.5 text-2xl text-orange-500",children:e.jsx(q,{})})]})}];return console.log("applicant",l),e.jsxs("div",{className:"mt-2",children:[e.jsx(w,{columns:j,dataSource:(l==null?void 0:l.requirements)??[]}),";"]})}export{At as default};