import{r,j as e,s as h}from"./app-bafafda5.js";import{s as F,g as C}from"./applicant-thunk-4317dfa3.js";import{A as K,R as Q,I as S,C as X,S as Z}from"./ScheduleOutlined-b78d70e4.js";import{D as M,M as n}from"./index-11430430.js";import{B as P}from"./BriefcaseIcon-bff9db52.js";import{S as E,D as ee}from"./index-85cae578.js";import{M as R}from"./index-b1d9ec21.js";import{B as t}from"./button-53cc1c49.js";import{m as g}from"./index-76a104f8.js";import{D as le}from"./DownOutlined-6d772d00.js";import{L as _}from"./LoadingOutlined-89f0f2bf.js";import{C as j}from"./CheckCircleFilled-9a27eb54.js";import"./applicant-record-service-964f751b.js";import"./warning-3045d72d.js";import"./AntdIcon-a6021e08.js";import"./index-3489f972.js";import"./render-e2ad3102.js";import"./asyncToGenerator-b5e9f51a.js";import"./pickAttrs-738cc4b0.js";import"./ExclamationCircleFilled-7d4c17ea.js";import"./InfoCircleFilled-93d6a5ad.js";import"./useZIndex-2c590492.js";import"./zoom-6001308e.js";import"./useSize-f4859fa4.js";import"./Compact-053f96f5.js";import"./CloseOutlined-82d8888b.js";import"./useClosable-e8a84018.js";import"./useLocale-2928605e.js";import"./PurePanel-e7c2c981.js";import"./index-473fd553.js";function se({title:l,titleId:f,...y},d){return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:d,"aria-labelledby":f},y),l?r.createElement("title",{id:f},l):null,r.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"}))}const re=r.forwardRef(se),ae=re,_e=({data:l,interviewer:f})=>{const[y,d]=r.useState(!1),[D,c]=r.useState(!1),[T,m]=r.useState(!1),[$,b]=r.useState(!1),[B,u]=r.useState(!1),[L,N]=r.useState(!1),[G,w]=r.useState(!1),[q,v]=r.useState(!1),[V,k]=r.useState(!1),[i,o]=r.useState(!1),[a,x]=r.useState({ifftime:"",iffdate:"",ivtime:"",ivdate:"",meet_link:""}),A=s=>{s.preventDefault(),o(!0);try{h.dispatch(F({...l,ifftime:a.ifftime,iffdate:a.iffdate})),h.dispatch(C()),o(!1),m(!1),g.success("Email sent successfully")}catch{g.error("There was an error sending the email!"),o(!1)}},I=s=>{s.preventDefault(),o(!0);try{h.dispatch(F({...l,ivtime:a.ivtime,ivdate:a.ivdate,meet_link:a.meet_link})),h.dispatch(C()),o(!1),b(!1),g.success("Email sent successfully")}catch{g.error("There was an error sending the email!"),o(!1)}},J=()=>{console.log("click left button"),c(!1),m(!0)},H=()=>{console.log("click left button"),c(!1),b(!0)},W=()=>{console.log("click left button"),u(!1),N(!0)},Y=()=>{console.log("click left button"),u(!1),w(!0)},p=()=>{console.log("click left button"),window.open("/admin/interviewer_sched","_blank")},U=s=>{s.onClick&&s.onClick(),s.key==="1"&&d(!0),s.key==="2"&&c(!0),s.key==="3"&&window.open(`/admin/initial_rate/${l.app_id}`,"_blank"),s.key==="4"&&window.open("/admin/initial_result","_blank"),s.key==="5"&&window.open("/admin/final_rate","_blank"),s.key==="6"&&u(!0),s.key==="7"&&v(!0),s.key==="8"&&window.open("/admin/overall_result","_blank"),s.key==="9"&&k(!0)},z=[{label:"Application Details",key:"1",icon:e.jsx(K,{})},...l.status=="Pending"?[{label:"Proceed to Initial Phase",key:"2",icon:e.jsx(Q,{})}]:[],...l.status=="Initial Phase"?[{label:"Initial Rating Scale",key:"3",icon:e.jsx(M,{})}]:[],...l.status=="Final Phase"?[{label:"Initial Phase Result",key:"4",icon:e.jsx(S,{})}]:[],...l.status=="Final Phase"&&l.final?[{label:"Final Rating Scale",key:"5",icon:e.jsx(M,{})}]:[],...l.status=="Final Phase"&&!l.final?[{label:"Set Schedule Final Phase",key:"6",icon:e.jsx(X,{})}]:[],...l.status=="Final Phase"&&!l.final?[{label:"Check Schedule of Interviewer",key:"7",icon:e.jsx(Z,{})}]:[],...l.status=="Passed"||l.status=="Pooling"||l.status=="Failed"||l.status=="Dismissal"||l.status=="Resignation"||l.status=="EOPE"||l.status=="AWOL"||l.status=="Probationary"||l.status=="Regular"?[{label:"Application Results",key:"8",icon:e.jsx(S,{})}]:[],...l.status=="Passed"?[{label:"Job Offer",key:"9",icon:e.jsx(P,{className:"h-4 mr-0.5"})}]:[]];return e.jsxs(E,{wrap:!0,children:[e.jsx(ee,{overlay:e.jsx(R,{onClick:U,children:z.map(s=>e.jsx(R.Item,{icon:s.icon,children:s.label},s.key))}),trigger:["click"],children:e.jsx(t,{type:"primary",children:e.jsxs(E,{children:["Menu",e.jsx(le,{})]})})}),e.jsxs(n,{title:"Application Details",centered:!0,visible:y,onOk:()=>d(!1),onCancel:()=>d(!1),width:1200,footer:null,children:[e.jsx("div",{className:"flex text-2xl items-center justify-center",children:e.jsx("h1",{children:e.jsx("b",{children:"Personal Information"})})}),e.jsx("div",{className:"flex justify-end",children:e.jsxs("h1",{className:"text-lg mb-2",children:[e.jsx("b",{children:"Status:"})," ",l.status]})}),e.jsxs("form",{className:"border rounded-lg p-3.5",children:[e.jsx("h1",{className:"text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 text-center"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Application No."})}),e.jsx("input",{type:"number",value:l.app_id,placeholder:"N/A",className:"border p-2 rounded w-full",readOnly:!0})]}),e.jsx("div",{className:"flex flex-1 gap-4",children:e.jsxs("div",{className:"flex flex-col w-full mb-4",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Full Name"})}),e.jsxs("div",{className:"flex flex-1 gap-3",children:[e.jsx("input",{type:"text",value:l.fname,placeholder:"N/A",className:"border p-2 rounded w-full",readOnly:!0}),e.jsx("input",{type:"text",value:l.mname,placeholder:"N/A",className:"border p-2 rounded w-full",readOnly:!0}),e.jsx("input",{type:"text",value:l.lname,placeholder:"N/A",className:"border p-2 rounded w-full",readOnly:!0}),e.jsx("input",{type:"text",value:l.suffix,placeholder:"(Suffix)",className:"border p-2 rounded w-1/5",readOnly:!0})]})]})}),e.jsxs("div",{className:"flex flex-1 gap-4",children:[e.jsx("div",{className:"flex w-full",children:e.jsxs("div",{className:"flex flex-col gap-4 mb-4 w-full",children:[e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Gender"})}),e.jsx("input",{type:"text",value:l.gender,placeholder:"N/A",className:"border p-2 rounded w-full",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Date of Birth"})}),e.jsx("input",{type:"date",value:l.dob,placeholder:"N/A",className:"border p-2 rounded w-full",readOnly:!0})]}),e.jsxs("div",{className:" w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Email"})}),e.jsx("input",{type:"email",value:l.email,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Phone Number"})}),e.jsx("input",{type:"number",value:l.phone,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]})]})}),e.jsx("div",{className:"flex w-full",children:e.jsxs("div",{className:"flex flex-col gap-4 mb-4 w-full",children:[e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Marital Status"})}),e.jsx("input",{type:"text",value:l.marital,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Religion"})}),e.jsx("input",{type:"text",value:l.religion,placeholder:"N/A",className:"border p-2 rounded w-full",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-col w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Nationality"})}),e.jsx("input",{type:"text",value:l.nationality,placeholder:"N/A",className:"border p-2 rounded w-full",readOnly:!0})]})]})})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Mother's Maiden Name"})}),e.jsx("input",{type:"text",value:l.mmname,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Father's Full Name"})}),e.jsx("input",{type:"text",value:l.ffname,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-1 gap-4 mb-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Highest Educational Attainment"})}),e.jsx("input",{type:"text",value:l.educ,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Course Taken (Only if Applicable)"})}),e.jsx("input",{type:"text",value:l.courset,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]})]}),e.jsx("h1",{className:"text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 mt-9",children:"Address Information"}),e.jsxs("div",{className:"mb-4",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"House/Lot No. , Street , Purok/Sitio , Barangay , City/Municipality , Province"})}),e.jsx("input",{type:"text",value:l.caddress,placeholder:"N/A",className:"border p-2 rounded w-full",readOnly:!0})]}),e.jsx("h1",{className:"text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 mt-9",children:"Government ID Information"}),e.jsxs("div",{className:"flex flex-1 gap-4 mb-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"SSS No."})}),e.jsx("input",{type:"text",value:l.sss,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Pag-IBIG No."})}),e.jsx("input",{type:"text",value:l.pagibig,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]})]}),e.jsxs("div",{className:"flex flex-1 gap-4 mb-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Tin No."})}),e.jsx("input",{type:"text",value:l.tin,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Philhealth No."})}),e.jsx("input",{type:"text",value:l.philh,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]})]}),e.jsx("h1",{className:"text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100 mt-9",children:"Emergency Contact Information"}),e.jsxs("div",{className:"mb-4 w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Emergency Contact Fullname"})}),e.jsx("input",{type:"text",value:l.ename,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]}),e.jsxs("div",{className:"mb-4 w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Address"})}),e.jsx("input",{type:"text",value:l.eaddress,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-1 gap-4 mb-4",children:[e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Relationship"})}),e.jsx("input",{type:"text",value:l.relationship,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]}),e.jsxs("div",{className:"w-full",children:[e.jsx("label",{htmlFor:"",children:e.jsx("b",{children:"Contact No."})}),e.jsx("input",{type:"number",value:l.ephone,placeholder:"N/A",className:"border p-2 rounded w-full ",readOnly:!0})]})]})]})]}),e.jsx(n,{title:"Initial Phase Interview",centered:!0,visible:D,onOk:()=>{c(!1)},onCancel:()=>c(!1),footer:null,children:e.jsxs("div",{className:"flex flex-1 gap-2 w-full",children:[e.jsx(t,{type:"primary",className:"w-full",onClick:J,children:"Face to face Interview"}),e.jsx(t,{type:"primary",className:"w-full",onClick:H,children:"Virtual Interview"})]})}),e.jsxs(n,{title:"Schedule for Initial Phase Interview (Face to face Interview)",centered:!0,visible:T,width:900,onOk:()=>{m(!1)},onCancel:()=>m(!1),footer:null,children:[e.jsx("li",{className:"bg-gray-300 h-0.5"}),e.jsx("div",{className:"flex justify-end mt-1.5",children:e.jsxs("h1",{children:[e.jsx("b",{children:"Status:"})," ",l.status]})}),e.jsxs("form",{onSubmit:A,className:"w-full h-full",children:[e.jsxs("div",{className:"flex flex-col -mx-3 mb-3",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1",for:"grid-text",children:"Application No."}),e.jsx("input",{value:l.app_id,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"number",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Applicant's Name"}),e.jsx("input",{value:`${l.fname} ${l.mname} ${l.lname}`,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Email Address"}),e.jsx("input",{value:l.email,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"email",placeholder:"",readOnly:!0})]})]}),e.jsxs("div",{className:"flex flex-1 ",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Contact No."}),e.jsx("input",{value:l.phone,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Schedule date for Initial Interview"}),e.jsx("input",{onChange:s=>x({...a,iffdate:s.target.value}),className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"date",placeholder:"",required:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Schedule time for Initial Interview"}),e.jsx("input",{onChange:s=>x({...a,ifftime:s.target.value}),className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"time",placeholder:"",required:!0})]})]})]}),e.jsxs("button",{type:"submit",className:`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full ${i?"cursor-not-allowed opacity-75":""}`,onClick:A,disabled:i,children:[i?e.jsx(_,{spin:!0}):e.jsx(j,{}),i?" SENDING...":" CONFIRM"]})]})]}),e.jsxs(n,{title:"Schedule for Initial Phase Interview (Virtual Interview)",centered:!0,visible:$,width:900,onOk:()=>{b(!1)},onCancel:()=>b(!1),footer:null,children:[e.jsx("li",{className:"bg-gray-300 h-0.5"}),e.jsx("div",{className:"flex justify-end mt-1.5",children:e.jsxs("h1",{children:[e.jsx("b",{children:"Status:"})," ",l.status]})}),e.jsxs("form",{className:"w-full h-full",onSubmit:I,children:[e.jsxs("div",{className:"flex flex-col -mx-3 mb-3",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1",for:"grid-text",children:"Application No."}),e.jsx("input",{value:l.app_id,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"number",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Applicant's Name"}),e.jsx("input",{value:`${l.fname} ${l.mname} ${l.lname}`,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Email Address"}),e.jsx("input",{value:l.email,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"email",placeholder:"",readOnly:!0})]})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-3/5 px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Contact No."}),e.jsx("input",{value:l.phone,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Meeting Link"}),e.jsx("input",{onChange:s=>x({...a,meet_link:s.target.value}),className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:""})]})]}),e.jsxs("div",{className:"flex flex-1 ",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Schedule date for Initial Interview"}),e.jsx("input",{onChange:s=>x({...a,ivdate:s.target.value}),className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"date",placeholder:"",required:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Schedule time for Initial Interview"}),e.jsx("input",{onChange:s=>x({...a,ivtime:s.target.value}),className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"time",placeholder:"",required:!0})]})]})]}),e.jsxs("button",{type:"submit",className:`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full ${i?"cursor-not-allowed opacity-75":""}`,onClick:I,disabled:i,children:[i?e.jsx(_,{spin:!0}):e.jsx(j,{}),i?" SENDING...":" CONFIRM"]})]})]}),e.jsx(n,{title:"Final Phase Interview",centered:!0,visible:B,onOk:()=>{u(!1)},onCancel:()=>u(!1),footer:null,children:e.jsxs("div",{className:"flex flex-1 gap-2 w-full",children:[e.jsx(t,{type:"primary",className:"w-full",onClick:W,children:"Face to face Interview"}),e.jsx(t,{type:"primary",className:"w-full",onClick:Y,children:"Virtual Interview"})]})}),e.jsxs(n,{title:"Schedule for Final Phase Interview (Face to face Interview)",centered:!0,visible:L,width:900,onOk:()=>{N(!1)},onCancel:()=>N(!1),footer:null,children:[e.jsx("li",{className:"bg-gray-300 h-0.5"}),e.jsx("div",{className:"flex justify-end mt-1.5",children:e.jsxs("h1",{children:[e.jsx("b",{children:"Status:"})," (Final Phase)"]})}),e.jsxs("form",{className:"w-full h-full",children:[e.jsxs("div",{className:"flex flex-col -mx-3 mb-3",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1",for:"grid-text",children:"Application No."}),e.jsx("input",{value:l.app_id,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"number",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Applicant's Name"}),e.jsx("input",{value:`${l.fname} ${l.mname} ${l.lname}`,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Email Address"}),e.jsx("input",{value:l.email,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"email",placeholder:"",readOnly:!0})]})]}),e.jsxs("div",{className:"flex flex-1 ",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Contact No."}),e.jsx("input",{value:l.phone,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Schedule date for Final Interview"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"date",placeholder:"",required:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Schedule time for Final Interview"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"time",placeholder:"",required:!0})]})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Final Phase Interviewer"}),e.jsx("select",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",name:"",id:"",children:f.map((s,O)=>e.jsxs("option",{value:s.employee_id,children:[s.employee_fname," ",s.employee_lname]},O))})]})]}),e.jsxs("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full",children:[e.jsx(j,{})," CONFIRM"]})]})]}),e.jsxs(n,{title:"Schedule for Final Phase Interview (Virtual Interview)",centered:!0,visible:G,width:900,onOk:()=>{w(!1)},onCancel:()=>w(!1),footer:null,children:[e.jsx("li",{className:"bg-gray-300 h-0.5"}),e.jsx("div",{className:"flex justify-end mt-1.5",children:e.jsxs("h1",{children:[e.jsx("b",{children:"Status:"})," (Final Phase)"]})}),e.jsxs("form",{className:"w-full h-full",children:[e.jsxs("div",{className:"flex flex-col -mx-3 mb-3",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1",for:"grid-text",children:"Application No."}),e.jsx("input",{value:l.app_id,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"number",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Applicant's Name"}),e.jsx("input",{value:`${l.fname} ${l.mname} ${l.lname}`,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Email Address"}),e.jsx("input",{value:l.email,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"email",placeholder:"",readOnly:!0})]})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-3/5 px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Contact No."}),e.jsx("input",{value:l.phone,className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Meeting Link"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:""})]})]}),e.jsxs("div",{className:"flex flex-1 ",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Schedule date for Initial Interview"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"date",placeholder:"",required:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Schedule time for Initial Interview"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"time",placeholder:"",required:!0})]})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Final Phase Interviewer"}),e.jsx("select",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",name:"",id:"",children:e.jsx("option",{value:""})})]})]}),e.jsxs("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full",children:[e.jsx(j,{})," CONFIRM"]})]})]}),e.jsxs(n,{title:"Final Phase Interviewers",centered:!0,visible:q,width:600,onOk:()=>{v(!1)},onCancel:()=>v(!1),footer:null,children:[e.jsxs("div",{className:"flex flex-1 mb-3",children:[e.jsx(ae,{className:"h-6"}),e.jsx("h1",{children:"Check Interviewers Schedule"})]}),e.jsxs("div",{className:"flex flex-col gap-2.5",children:[e.jsx(t,{type:"primary",className:"w-full",onClick:p,children:"CUPTA, CIELO - DIRECTOR"}),e.jsx(t,{type:"primary",className:"w-full",onClick:p,children:"ADMINISTRATOR, SYSTEM - MANAGER"}),e.jsx(t,{type:"primary",className:"w-full",onClick:p,children:"DETALLA, MARIA TERESA - MANAGER"}),e.jsx(t,{type:"primary",className:"w-full",onClick:p,children:"GAY, MARICAR - MANAGER"}),e.jsx(t,{type:"primary",className:"w-full",onClick:p,children:"SORIANO, ALEJANDRO II - MANAGER"})]})]}),e.jsxs(n,{title:"Job Offer",centered:!0,visible:V,width:900,onOk:()=>{k(!1)},onCancel:()=>k(!1),footer:null,children:[e.jsx("li",{className:"bg-gray-300 h-0.5"}),e.jsxs("form",{className:"w-full h-full mt-3.5",children:[e.jsxs("div",{className:"flex flex-col -mx-3 mb-3",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1",for:"grid-text",children:"Application No."}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"number",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Firstname"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Middlename"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Lastname"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]})]}),e.jsxs("div",{className:"flex flex-1",children:[e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Job Position"}),e.jsx("select",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",name:"",id:"",children:e.jsx("option",{value:""})})]}),e.jsxs("div",{className:"w-3/5 px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Salary Offer"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:"",readOnly:!0})]}),e.jsxs("div",{className:"w-3/5 px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Allowance"}),e.jsx("input",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",id:"grid-text",type:"text",placeholder:""})]}),e.jsxs("div",{className:"w-full px-2.5",children:[e.jsx("label",{className:"block uppercase tracking-wide  text-xs font-bold mb-1 mt-2",for:"grid-text",children:"Type of Allowance"}),e.jsx("select",{className:"appearance-none block w-full   border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500",name:"",id:"",children:e.jsx("option",{value:""})})]})]})]}),e.jsx("button",{className:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full",children:e.jsxs("div",{className:"flex flex-1 items-center justify-center",children:[e.jsx(P,{className:"h-6 mr-1"}),"SEND JOB OFFER"]})})]})]})]})};export{_e as default};