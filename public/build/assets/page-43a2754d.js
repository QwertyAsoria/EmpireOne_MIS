import{c as m,r as p,s as f,j as i}from"./app-cbabef96.js";import s from"./admin-layout-6174e211.js";import a from"./acknowledgement-table-section-8f57b5db.js";import{g as n}from"./job-offer-service-958c2a48.js";import"./admin-footer-components-a5af7e94.js";import"./warning-81272f54.js";import"./AntdIcon-d783d7a4.js";import"./useSize-e1afdcd9.js";import"./button-34753591.js";import"./index-fce4089b.js";import"./PurePanel-8e6559d6.js";import"./index-5988df73.js";import"./CheckCircleFilled-ea076c21.js";import"./pickAttrs-ac86a368.js";import"./ExclamationCircleFilled-a625f2c8.js";import"./InfoCircleFilled-e8f2092a.js";import"./CloseOutlined-b384916a.js";import"./useClosable-b00e50cd.js";import"./useLocale-1c19f6a1.js";import"./HolderOutlined-918e5ee1.js";import"./UsergroupAddOutlined-6460e5fe.js";import"./FileSearchOutlined-3d96923c.js";import"./MedicineBoxOutlined-ef3740f7.js";import"./main-1fe3586a.js";import"./DownOutlined-707e9def.js";import"./index-3e7a4945.js";import"./useBreakpoint-c403aa47.js";import"./FileOutlined-c9fe2434.js";import"./FolderOpenOutlined-d5431798.js";import"./EyeOutlined-4dd6df62.js";import"./index-e8611b09.js";import"./FolderOpenFilled-856ba237.js";const t=m({name:"joboffer",initialState:{joboffers:[],jobofferForm:{}},reducers:{setJobOffers:(o,r)=>{o.joboffers=r.payload},setJobOfferForm:(o,r)=>{o.jobofferForm=r.payload},resetJobOffer:(o,r)=>{o.joboffers=r.payload}}});t.actions;t.reducer;function c(){return async function(o,r){const e=(await n()).data;console.log("result",e),o(t.actions.setJobOffers(e))}}function M(){return p.useEffect(()=>{f.dispatch(c())},[]),i.jsx(s,{children:i.jsx(a,{})})}export{M as default};