import{r as m,j as i}from"./app-6512ec23.js";import l from"./applicant-proceed-inital-phase-component-4c304296.js";import a from"./applicant-initial-rating-scale-51717e01.js";import c from"./applicant-final-rating-scale-component-1f3ef128.js";import u from"./applicant-results-component-3f253801.js";import f from"./applicant-job-offer-component-3ec48b6f.js";import x from"./applicant-detaills-component-deb3cfea.js";import n from"./applicant-set-schedule-component-da43406a.js";import j from"./applicant-pooling-component-fc49948e.js";import{e as h}from"./presets-b664276e.js";import{A as P}from"./AntdIcon-8b448a9a.js";import{B as A}from"./BriefcaseIcon-29958af0.js";import{D as g,S as O}from"./index-81d320c7.js";import{M as C}from"./index-dd22c974.js";import{B as R}from"./button-395f1567.js";import{A as b,R as y,D as s,I as r,C as I}from"./RiseOutlined-33412887.js";import{D as S}from"./DownOutlined-b7cf4e31.js";import"./index-ab1db3cc.js";import"./index-0f357e78.js";import"./useId-d9c65968.js";import"./useZIndex-718f9d90.js";import"./useSize-492d1886.js";import"./Compact-251a5749.js";import"./ContextIsolator-f8c4eff9.js";import"./asyncToGenerator-ae65c638.js";import"./KeyCode-40507553.js";import"./LeftOutlined-7268377a.js";import"./collapse-97de76d4.js";import"./hiring-thunk-34201f26.js";import"./job-offer-service-4bd56969.js";import"./applicant-thunk-ddb072b1.js";import"./applicant-record-service-582e1730.js";import"./index-bbbaebee.js";import"./render-d91bf3e3.js";import"./CheckCircleFilled-cecc34f1.js";import"./CloseCircleFilled-72f8e8e1.js";import"./InfoCircleFilled-aa5f0cc1.js";import"./CloseOutlined-d9ba04d4.js";import"./index-b20623ab.js";import"./pickAttrs-47097f77.js";import"./fade-c25870e0.js";import"./useClosable-41a93046.js";import"./useLocale-5ef37f61.js";import"./PurePanel-9fb38da3.js";import"./index-28af47ed.js";import"./applicant-choose-interview-component-cf8a2177.js";import"./applicant-virtual-schedule-component-2a2e217b.js";import"./applicant-f2f-schedule-component-b065e4bb.js";var k={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M824.2 699.9a301.55 301.55 0 00-86.4-60.4C783.1 602.8 812 546.8 812 484c0-110.8-92.4-201.7-203.2-200-109.1 1.7-197 90.6-197 200 0 62.8 29 118.8 74.2 155.5a300.95 300.95 0 00-86.4 60.4C345 754.6 314 826.8 312 903.8a8 8 0 008 8.2h56c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5A226.62 226.62 0 01612 684c60.9 0 118.2 23.7 161.3 66.8C814.5 792 838 846.3 840 904.3c.1 4.3 3.7 7.7 8 7.7h56a8 8 0 008-8.2c-2-77-33-149.2-87.8-203.9zM612 612c-34.2 0-66.4-13.3-90.5-37.5a126.86 126.86 0 01-37.5-91.8c.3-32.8 13.4-64.5 36.3-88 24-24.6 56.1-38.3 90.4-38.7 33.9-.3 66.8 12.9 91 36.6 24.8 24.3 38.4 56.8 38.4 91.4 0 34.2-13.3 66.3-37.5 90.5A127.3 127.3 0 01612 612zM361.5 510.4c-.9-8.7-1.4-17.5-1.4-26.4 0-15.9 1.5-31.4 4.3-46.5.7-3.6-1.2-7.3-4.5-8.8-13.6-6.1-26.1-14.5-36.9-25.1a127.54 127.54 0 01-38.7-95.4c.9-32.1 13.8-62.6 36.3-85.6 24.7-25.3 57.9-39.1 93.2-38.7 31.9.3 62.7 12.6 86 34.4 7.9 7.4 14.7 15.6 20.4 24.4 2 3.1 5.9 4.4 9.3 3.2 17.6-6.1 36.2-10.4 55.3-12.4 5.6-.6 8.8-6.6 6.3-11.6-32.5-64.3-98.9-108.7-175.7-109.9-110.9-1.7-203.3 89.2-203.3 199.9 0 62.8 28.9 118.8 74.2 155.5-31.8 14.7-61.1 35-86.5 60.4-54.8 54.7-85.8 126.9-87.8 204a8 8 0 008 8.2h56.1c4.3 0 7.9-3.4 8-7.7 1.9-58 25.4-112.3 66.7-153.5 29.4-29.4 65.4-49.8 104.7-59.7 3.9-1 6.5-4.7 6-8.7z"}}]},name:"team",theme:"outlined"};const d=k;var v=function(e,o){return m.createElement(P,h({},e,{ref:o,icon:d}))},D=m.forwardRef(v);const F=D;function kt({data:t,interviewer:e}){const o=[{component:i.jsx(x,{item:{label:"Application Details",key:"1",icon:i.jsx(b,{})},data:t})},...t.status=="Pending"?[{component:i.jsx(n,{status:"Initial Phase",item:{label:"Proceed to Initial Phase",key:"2",icon:i.jsx(y,{})},data:t})}]:[],...t.status=="Initial Phase"?[{component:i.jsx(a,{item:{label:"Initial Rating Scale",key:"3",icon:i.jsx(s,{})},data:t})}]:[],...t.status=="Final Phase"?[{component:i.jsx(l,{item:{label:"Initial Phase Result",key:"4",icon:i.jsx(r,{})},data:t})}]:[],...t.status=="Final Phase"&&t.final?[{component:i.jsx(c,{item:{label:"Final Rating Scale",key:"5",icon:i.jsx(s,{})},data:t})}]:[],...t.status=="Final Phase"&&!t.final?[{component:i.jsx(n,{status:"Final Phase",item:{label:"Set Schedule Final Phase",key:"6",icon:i.jsx(I,{})},data:t})}]:[],...t.status=="Passed"||t.status=="Pooling"||t.status=="Failed"||t.status=="Dismissal"||t.status=="Resignation"||t.status=="EOPE"||t.status=="AWOL"||t.status=="Probationary"||t.status=="Regular"?[{component:i.jsx(u,{data:t,item:{label:"Application Results",key:"8",icon:i.jsx(r,{})}})}]:[],...t.status=="Passed"?[{component:i.jsx(j,{item:{label:"Proceed for Pooling",key:"9",icon:i.jsx(F,{})},data:t})}]:[],...t.status=="Passed"||t.status=="Pooling"?[{component:i.jsx(f,{item:{label:"Make a Job Offer",key:"10",icon:i.jsx(A,{className:"h-4 mr-0.5"})},data:t})}]:[]];return i.jsx("div",{children:i.jsx(g,{overlay:i.jsx(C,{children:o.map((p,M)=>p.component)}),trigger:["click"],children:i.jsx(R,{type:"primary",children:i.jsxs(O,{children:["Menu",i.jsx(S,{})]})})})})}export{kt as default};