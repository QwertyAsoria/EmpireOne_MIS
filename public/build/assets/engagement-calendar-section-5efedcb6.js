import{r as a,j as r}from"./app-6512ec23.js";import l from"./calendar-tab-section-cce517dd.js";import n from"./both-site-tab-section-b86f32e6.js";import s from"./table-tab-section-91bdc39d.js";import"./calendar-component-068237fc.js";import"./ChevronDownIcon-c6095fd4.js";import"./portal-d0785c10.js";import"./use-server-handoff-complete-d5bdfbc6.js";import"./floating-ui.dom-fef0eb7a.js";import"./main-e3510e50.js";import"./moment-a9aaa855.js";import"./Table-e6f9c951.js";import"./presets-b664276e.js";import"./index-ab1db3cc.js";import"./index-0f357e78.js";import"./useId-d9c65968.js";import"./useZIndex-718f9d90.js";import"./useSize-492d1886.js";import"./AntdIcon-8b448a9a.js";import"./Compact-251a5749.js";import"./ContextIsolator-f8c4eff9.js";import"./asyncToGenerator-ae65c638.js";import"./pickAttrs-47097f77.js";import"./addEventListener-34876ce8.js";import"./DownOutlined-b7cf4e31.js";import"./button-395f1567.js";import"./render-d91bf3e3.js";import"./KeyCode-40507553.js";import"./index-81d320c7.js";import"./LeftOutlined-7268377a.js";import"./PurePanel-9fb38da3.js";import"./index-dd22c974.js";import"./collapse-97de76d4.js";import"./useLocale-5ef37f61.js";import"./useBreakpoint-bdb72798.js";import"./useForceUpdate-65e74534.js";import"./CheckOutlined-a611d420.js";import"./CloseCircleFilled-72f8e8e1.js";import"./CloseOutlined-d9ba04d4.js";import"./index-eba1cb69.js";import"./FileOutlined-b3fc0b14.js";import"./FolderOpenOutlined-e8c4d4b8.js";import"./HolderOutlined-5417a89e.js";import"./EyeOutlined-3b6c33c6.js";function m(){return r.jsx("div",{class:"lg:flex lg:h-full lg:flex-col",children:r.jsx(l,{})})}function p(){return r.jsx("div",{class:"mx-auto ",children:r.jsx(s,{})})}function d(){return r.jsx("div",{class:"mx-auto ",children:r.jsx(n,{})})}function er(){const[t,o]=a.useState("Calendar"),e=i=>{o(i)};return r.jsxs("div",{children:[r.jsx("div",{class:"text-sm font-medium text-center text-gray-500 border-b border-gray-200  ",children:r.jsxs("ul",{class:"flex flex-wrap -mb-px",children:[r.jsx("li",{class:"me-2",children:r.jsx("a",{href:"#",className:`inline-block p-4 ${t==="Calendar"?"text-blue-600 border-b-2 border-blue-600 rounded-t-lg":"border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"}`,onClick:()=>e("Calendar"),children:"Calendar View"})}),r.jsx("li",{class:"me-2",children:r.jsx("a",{href:"#",className:`inline-block p-4 ${t==="Table"?"text-blue-600 border-b-2 border-blue-600 rounded-t-lg":"border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"}`,onClick:()=>e("Table"),children:"Table View"})}),r.jsx("li",{class:"me-2",children:r.jsx("a",{href:"#",className:`inline-block p-4 ${t==="Both"?"text-blue-600 border-b-2 border-blue-600 rounded-t-lg":"border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300"}`,onClick:()=>e("Both"),children:"Both Site Calendar"})})]})}),r.jsx("div",{className:`transition-opacity duration-500 ease-in-out ${t==="Calendar"?"opacity-100":"opacity-0"}`,children:t==="Calendar"&&r.jsx(m,{})}),r.jsx("div",{className:`transition-opacity duration-500 ease-in-out ${t==="Table"?"opacity-100":"opacity-0"}`,children:t==="Table"&&r.jsx(p,{})}),r.jsx("div",{className:`transition-opacity duration-500 ease-in-out ${t==="Both"?"opacity-100":"opacity-0"}`,children:t==="Both"&&r.jsx(d,{})})]})}export{er as default};