import{R as h,r as m}from"./app-bafafda5.js";import{k as l,m as f}from"./index-3489f972.js";import{u as x}from"./useForceUpdate-d12d4a04.js";import"./warning-3045d72d.js";const u=["xxl","xl","lg","md","sm","xs"],$=n=>({xs:`(max-width: ${n.screenXSMax}px)`,sm:`(min-width: ${n.screenSM}px)`,md:`(min-width: ${n.screenMD}px)`,lg:`(min-width: ${n.screenLG}px)`,xl:`(min-width: ${n.screenXL}px)`,xxl:`(min-width: ${n.screenXXL}px)`}),b=n=>{const e=n,r=[].concat(u).reverse();return r.forEach((i,a)=>{const s=i.toUpperCase(),c=`screen${s}Min`,t=`screen${s}`;if(!(e[c]<=e[t]))throw new Error(`${c}<=${t} fails : !(${e[c]}<=${e[t]})`);if(a<r.length-1){const o=`screen${s}Max`;if(!(e[t]<=e[o]))throw new Error(`${t}<=${o} fails : !(${e[t]}<=${e[o]})`);const p=`screen${r[a+1].toUpperCase()}Min`;if(!(e[o]<=e[p]))throw new Error(`${o}<=${p} fails : !(${e[o]}<=${e[p]})`)}}),n};function M(){const[,n]=l(),e=$(b(n));return h.useMemo(()=>{const r=new Map;let i=-1,a={};return{matchHandlers:{},dispatch(s){return a=s,r.forEach(c=>c(a)),r.size>=1},subscribe(s){return r.size||this.register(),i+=1,r.set(i,s),s(a),i},unsubscribe(s){r.delete(s),r.size||this.unregister()},unregister(){Object.keys(e).forEach(s=>{const c=e[s],t=this.matchHandlers[c];t==null||t.mql.removeListener(t==null?void 0:t.listener)}),r.clear()},register(){Object.keys(e).forEach(s=>{const c=e[s],t=d=>{let{matches:p}=d;this.dispatch(Object.assign(Object.assign({},a),{[s]:p}))},o=window.matchMedia(c);o.addListener(t),this.matchHandlers[c]={mql:o,listener:t},t(o)})},responsiveMap:e}},[n])}const k=(n,e)=>{if(e&&typeof e=="object")for(let r=0;r<u.length;r++){const i=u[r];if(n[i]&&e[i]!==void 0)return e[i]}};function U(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;const e=m.useRef({}),r=x(),i=M();return f(()=>{const a=i.subscribe(s=>{e.current=s,n&&r()});return()=>i.unsubscribe(a)},[]),e.current}export{k as m,U as u};