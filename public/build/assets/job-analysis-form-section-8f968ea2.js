import{b as a,r as n,j as e,y as m,c as u}from"./app-62b5ebaa.js";import b from"./summernote-editor-8808ffd5.js";import"./quill.snow-8cb94a3b.js";import"./purify.es-3e986492.js";import{b as x}from"./department-thunk-277354b8.js";import{m as l}from"./index-5562dec6.js";import"./ja-blank-91ea8d28.js";import"./UnorderedListOutlined-0c7effb6.js";import"./presets-463863c6.js";import"./AntdIcon-d5231a29.js";import"./erf-record-service-b70c8511.js";import"./index-408febe5.js";import"./render-c5e68dcb.js";import"./asyncToGenerator-b4664d6d.js";import"./CheckCircleFilled-bd23b91f.js";import"./CloseCircleFilled-15fc6c63.js";import"./InfoCircleFilled-fb1cc4b6.js";import"./LoadingOutlined-6e2cb589.js";import"./useZIndex-23e93c6a.js";import"./pickAttrs-c39b57d6.js";import"./CloseOutlined-69cfb2a4.js";function q(){var i;a(o=>o.job_positions);const{erf:t}=a(o=>o.departments),[s,c]=n.useState({}),[p,r]=n.useState(!1);async function d(){r(!0);try{await u.dispatch(x({form:s,...t})),l.success("Updated Successfully!"),m.visit(`/admin/sourcing/job_title_section/job_analysis/${t==null?void 0:t.ref_id}`)}catch(o){l.error("Failed to update. Please try again."),console.error(o)}finally{r(!1)}}return console.log("erf",t),e.jsxs("div",{children:[e.jsxs("div",{className:"mb-12",children:[e.jsx("label",{htmlFor:"content",className:"block text-xl font-medium text-gray-800 text-center",children:"Job Analysis"}),e.jsx(b,{data:((i=t==null?void 0:t.ja)==null?void 0:i.content)??"",form:s,setForm:c})]}),e.jsxs("div",{className:"flex flex-1 gap-2 justify-end items-center",children:[e.jsx("button",{className:"rounded-md hover:bg-blue-100  w-32 h-10 mt-2",type:"button",onClick:()=>m.visit("/admin/sourcing/job_title_section"),children:"Cancel"}),e.jsx("button",{onClick:d,loading:p,className:"bg-blue-600 rounded-md hover:bg-blue-700 text-white w-32 h-10 mt-2",children:"Save Changes"})]})]})}export{q as default};