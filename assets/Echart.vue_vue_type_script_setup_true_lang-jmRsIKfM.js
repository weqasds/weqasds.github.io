import{e as g,i as O}from"./index-e5-rcZiG.js";import{y as S,A as j,B as w,C,u as y,D as E,d as v,i as A,x as T,o as _,a as x,z}from"./index-DMF2P_Fr.js";function W(t){return w()?(C(t),!0):!1}function m(t){return typeof t=="function"?t():y(t)}const D=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const F=Object.prototype.toString,R=t=>F.call(t)==="[object Object]",h=()=>{};function L(t,e){function n(...r){return new Promise((s,o)=>{Promise.resolve(t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})).then(s).catch(o)})}return n}function P(t,e={}){let n,r,s=h;const o=i=>{clearTimeout(i),s(),s=h};return i=>{const f=m(t),l=m(e.maxWait);return n&&o(n),f<=0||l!==void 0&&l<=0?(r&&(o(r),r=null),Promise.resolve(i())):new Promise((c,a)=>{s=e.rejectOnCancel?a:c,l&&!r&&(r=setTimeout(()=>{n&&o(n),r=null,c(i())},l)),n=setTimeout(()=>{r&&o(r),r=null,c(i())},f)})}}function k(t){return t||j()}function B(t,e=200,n={}){return L(P(e,n),t)}function U(t,e){k(e)&&S(t,e)}function G(t){var e;const n=m(t);return(e=n==null?void 0:n.$el)!=null?e:n}const M=D?window:void 0;function q(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=M):[e,n,r,s]=t,!e)return h;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const o=[],u=()=>{o.forEach(c=>c()),o.length=0},i=(c,a,p,d)=>(c.addEventListener(a,p,d),()=>c.removeEventListener(a,p,d)),f=E(()=>[G(e),m(s)],([c,a])=>{if(u(),!c)return;const p=R(a)?{...a}:a;o.push(...n.flatMap(d=>r.map(b=>i(c,d,b,p))))},{immediate:!0,flush:"post"}),l=()=>{f(),u()};return W(l),l}function I(t){let e=null,n=u,r=()=>{};n=B(u,200);function s(){const i=y(t);i&&(e=O(i),r=q(i,"echartsResize",n))}function o(i){s(),e.setOption(i)}function u(){e==null||e.resize({animation:{duration:300,easing:"quadraticIn"}})}return U(()=>{e&&(r(),e.dispose(),e=null)}),{setOptions:o,echartsResize:u,echarts:g,removeFn:r}}const H=v({name:"Echart",__name:"Echart",props:{option:{type:Object},fileUrl:{type:String,default:""},chartType:{type:String,default:"line"},styleObj:{type:Object,default:{height:"100%",width:"100%"}},gridStyle:{type:Object,default:()=>({left:"10%",right:"10%",top:"60",bottom:"60",width:"auto",height:"auto"})}},setup(t){const e=t,n=A(null),{setOptions:r}=I(n);return T(()=>{r(e.option)}),(s,o)=>(_(),x("div",{id:"chart",ref_key:"chartRef",ref:n,style:z(t.styleObj)},null,4))}});export{H as _};
