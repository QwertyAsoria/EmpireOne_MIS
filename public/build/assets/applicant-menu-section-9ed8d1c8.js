import{j as t}from"./app-62b5ebaa.js";import r from"./applicant-proceed-inital-phase-component-c2217c63.js";import p from"./applicant-initial-rating-scale-33560dff.js";import l from"./applicant-final-rating-scale-component-69c8cd07.js";import c from"./applicant-check-schedule-component-82be5923.js";import a from"./applicant-results-component-7377d602.js";import u from"./applicant-job-offer-component-2f45e8c7.js";import f from"./applicant-detaills-component-29a79ba6.js";import o from"./applicant-set-schedule-component-2fd45bee.js";import{B as x}from"./BriefcaseIcon-a2e16c89.js";import{D as j,S as h}from"./index-38316397.js";import{M as P}from"./index-c27c4d05.js";import{B as S}from"./button-4ffb358a.js";import{A,R as y,D as e,I as n,C,S as b}from"./ScheduleOutlined-7338f7dc.js";import{D as k}from"./DownOutlined-97885799.js";import"./presets-463863c6.js";import"./index-408febe5.js";import"./index-a8bad4b0.js";import"./useId-8a7e6d05.js";import"./useZIndex-23e93c6a.js";import"./useSize-35d6e2ee.js";import"./AntdIcon-d5231a29.js";import"./Compact-914b018d.js";import"./ContextIsolator-af1fcc42.js";import"./asyncToGenerator-b4664d6d.js";import"./LeftOutlined-cbb65ec1.js";import"./collapse-97de76d4.js";import"./hiring-thunk-cb59c41a.js";import"./job-offer-service-e36a0fac.js";import"./applicant-thunk-8838bb69.js";import"./applicant-record-service-b92bdd46.js";import"./index-055ee658.js";import"./render-c5e68dcb.js";import"./CheckCircleFilled-bd23b91f.js";import"./CloseCircleFilled-15fc6c63.js";import"./InfoCircleFilled-fb1cc4b6.js";import"./CloseOutlined-69cfb2a4.js";import"./index-0b644e77.js";import"./pickAttrs-c39b57d6.js";import"./useClosable-19de31a3.js";import"./useLocale-a93b4d95.js";import"./PurePanel-7c150b65.js";import"./index-5562dec6.js";import"./LoadingOutlined-6e2cb589.js";import"./applicant-choose-interview-component-2ef1e64c.js";import"./applicant-virtual-schedule-component-676c05c4.js";import"./applicant-f2f-schedule-component-a0418af6.js";function Ai({data:i,interviewer:R}){const s=[{component:t.jsx(f,{item:{label:"Application Details",key:"1",icon:t.jsx(A,{})},data:i})},...i.status=="Pending"?[{component:t.jsx(o,{status:"Initial Phase",item:{label:"Proceed to Initial Phase",key:"2",icon:t.jsx(y,{})},data:i})}]:[],...i.status=="Initial Phase"?[{component:t.jsx(p,{item:{label:"Initial Rating Scale",key:"3",icon:t.jsx(e,{})},data:i})}]:[],...i.status=="Final Phase"?[{component:t.jsx(r,{item:{label:"Initial Phase Result",key:"4",icon:t.jsx(n,{})},data:i})}]:[],...i.status=="Final Phase"&&i.final?[{component:t.jsx(l,{item:{label:"Final Rating Scale",key:"5",icon:t.jsx(e,{})},data:i})}]:[],...i.status=="Final Phase"&&!i.final?[{component:t.jsx(o,{status:"Final Phase",item:{label:"Set Schedule Final Phase",key:"6",icon:t.jsx(C,{})},data:i})}]:[],...i.status=="Final Phase"&&!i.final?[{component:t.jsx(c,{data:i,item:{label:"Check Schedule of Interviewer",key:"7",icon:t.jsx(b,{})}})}]:[],...i.status=="Passed"||i.status=="Pooling"||i.status=="Failed"||i.status=="Dismissal"||i.status=="Resignation"||i.status=="EOPE"||i.status=="AWOL"||i.status=="Probationary"||i.status=="Regular"?[{component:t.jsx(a,{data:i,item:{label:"Application Results",key:"8",icon:t.jsx(n,{})}})}]:[],...i.status=="Passed"?[{component:t.jsx(u,{item:{label:"Job Offer",key:"9",icon:t.jsx(x,{className:"h-4 mr-0.5"})},data:i})}]:[]];return t.jsx("div",{children:t.jsx(j,{overlay:t.jsx(P,{children:s.map((m,I)=>m.component)}),trigger:["click"],children:t.jsx(S,{type:"primary",children:t.jsxs(h,{children:["Menu",t.jsx(k,{})]})})})})}export{Ai as default};