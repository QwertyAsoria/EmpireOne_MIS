import{h as i,B as m,r as p,c as e,j as o}from"./app-66c2d29a.js";import n from"./admin-layout-6ed7563d.js";import a from"./engagement-calendar-section-d97801f0.js";import"./admin-footer-components-1a295d37.js";import"./presets-149415d9.js";import"./AntdIcon-8728ec96.js";import"./app-thunk-8c3e6b57.js";import"./user-service-7ee351d2.js";import"./update-profile-eb85aeee.js";import"./UserOutlined-955caef9.js";import"./index-8040b317.js";import"./index-ae953238.js";import"./render-32dada9c.js";import"./asyncToGenerator-89f53324.js";import"./CheckCircleFilled-ff72a340.js";import"./CloseCircleFilled-a8140992.js";import"./InfoCircleFilled-eee5654e.js";import"./useZIndex-5312b8ae.js";import"./useId-bec34e53.js";import"./button-62e43a7a.js";import"./Compact-0538fa3f.js";import"./useSize-fb9721f0.js";import"./LoadingOutlined-a6c3ae95.js";import"./CloseOutlined-26c88e73.js";import"./index-ef60696d.js";import"./pickAttrs-5acfc901.js";import"./ContextIsolator-613eac7c.js";import"./useClosable-fbe7873b.js";import"./useLocale-2accffec.js";import"./PurePanel-a6ca3c76.js";import"./index-55c73ddc.js";import"./KeyIcon-f7c3f2a6.js";import"./index-a62c3efc.js";import"./index-1d92ab84.js";import"./LeftOutlined-02f7458c.js";import"./collapse-97de76d4.js";import"./HolderOutlined-df69894b.js";import"./UsergroupAddOutlined-3579f612.js";import"./FileSearchOutlined-d99b6b73.js";import"./UserDeleteOutlined-c1e476d2.js";import"./calendar-tab-section-494461a6.js";import"./calendar-component-8c151bb3.js";import"./ChevronDownIcon-0eb0a266.js";import"./portal-244a777f.js";import"./use-server-handoff-complete-937a8cd3.js";import"./floating-ui.dom-fef0eb7a.js";import"./both-site-tab-section-944d40ec.js";import"./table-tab-section-328f488c.js";import"./main-b02b91d3.js";import"./moment-a9aaa855.js";import"./Table-7d83a205.js";import"./addEventListener-2856e37b.js";import"./DownOutlined-1d8d17a5.js";import"./index-0248bf32.js";import"./useBreakpoint-d503da7f.js";import"./useForceUpdate-4bb53ca1.js";import"./CheckOutlined-5a2d55e1.js";import"./index-cccf9ead.js";import"./FileOutlined-919383d5.js";import"./FolderOpenOutlined-d428ab16.js";import"./EyeOutlined-3dbb330f.js";async function s(){return(await i.get("/api/engagement")).data}function c(){return async function(t,g){const r=(await s()).data;console.log("result",r),t(m.actions.setEngagements(r))}}function ht(){return p.useEffect(()=>{e.dispatch(c())},[]),o.jsx(n,{children:o.jsx(a,{})})}export{ht as default};