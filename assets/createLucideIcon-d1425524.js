import{h as s,i as f,k,r as u}from"./index-9a38b99e.js";function i(e=s){const t=e===s?f:k(e);return function(){const{store:r}=t();return r}}const w=i();function C(e=s){const t=e===s?w:i(e);return function(){return t().dispatch}}const b=C();/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.294.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),v=(e,t)=>{const o=u.forwardRef(({color:r="currentColor",size:n=24,strokeWidth:c=2,absoluteStrokeWidth:d,className:p="",children:a,...h},l)=>u.createElement("svg",{ref:l,...g,width:n,height:n,stroke:r,strokeWidth:d?Number(c)*24/Number(n):c,className:["lucide",`lucide-${R(e)}`,p].join(" "),...h},[...t.map(([m,x])=>u.createElement(m,x)),...Array.isArray(a)?a:[a]]));return o.displayName=`${e}`,o};export{v as c,b as u};
