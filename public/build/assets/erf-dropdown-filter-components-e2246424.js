import{r as i,j as e}from"./app-c82c5dc1.js";import{D as g}from"./index-6c6ba076.js";import{B as x}from"./button-5b4b1283.js";import"./LeftOutlined-97e0b13f.js";import"./presets-befb9724.js";import"./AntdIcon-f967147a.js";import"./index-b989725f.js";import"./useId-5f6fd7dc.js";import"./index-da0094f8.js";import"./useZIndex-4993f9da.js";import"./useSize-7ab02e97.js";import"./Compact-7c697923.js";import"./ContextIsolator-43757ab5.js";import"./asyncToGenerator-5e869aae.js";import"./KeyCode-067fecd0.js";import"./PurePanel-31296d74.js";import"./index-a7b3c0c0.js";import"./collapse-97de76d4.js";import"./render-3653778a.js";function z({filterData:c}){const[s,l]=i.useState(!1),[r,n]=i.useState([]),a=()=>{l(!s)},t=p=>{const{value:o,checked:m}=p.target;n(m?[...r,o]:r.filter(u=>u!==o))},d=[{key:"1",label:e.jsxs("div",{class:"flex items-center",children:[e.jsx("input",{id:"Pending",type:"checkbox",value:"Pending",checked:r.includes("Pending"),onChange:t,class:"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"}),e.jsx("label",{for:"Pending",class:"ml-2 text-sm font-medium text-gray-900",children:"Pending ERF"})]})},{key:"2",label:e.jsxs("div",{class:"flex items-center",children:[e.jsx("input",{id:"In Review",type:"checkbox",value:"In Review",checked:r.includes("In Review"),onChange:t,class:"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"}),e.jsx("label",{for:"In Review",class:"ml-2 text-sm font-medium text-gray-900",children:"In Review ERF"})]})},{key:"3",label:e.jsxs("div",{class:"flex items-center",children:[e.jsx("input",{id:"Approved",type:"checkbox",value:"Approved",checked:r.includes("Approved"),onChange:t,class:"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"}),e.jsx("label",{for:"Approved",class:"ml-2 text-sm font-medium text-gray-900",children:"Approved ERF"})]})},{key:"4",label:e.jsxs("div",{class:"flex items-center",children:[e.jsx("input",{id:"Declined",type:"checkbox",value:"Declined",checked:r.includes("Declined"),onChange:t,class:"w-4 h-4 bg-gray-100 border-gray-300 rounded text-primary-600 focus:ring-primary-500 focus:ring-2"}),e.jsx("label",{for:"Declined",class:"ml-2 text-sm font-medium text-gray-900",children:"Declined ERF"})]})}];return i.useEffect(()=>{c(r)},[r]),e.jsx("div",{children:e.jsx(g,{menu:{items:d},autoFocus:!0,open:s,onOpenChange:a,placement:"bottomLeft",arrow:!0,trigger:["click"],children:e.jsx(x,{type:"primary",size:"large",children:"Filter by category"})})})}export{z as default};