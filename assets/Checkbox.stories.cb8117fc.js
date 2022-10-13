import{r}from"./index.1cb7662b.js";import{$ as z,a as M}from"./index.module.53986286.js";import{r as W}from"./index.52367d79.js";import{j as p,F as C,a as q}from"./jsx-runtime.b7a37ef3.js";import{I as F,r as K}from"./IconBase.esm.13326f49.js";import{T as X}from"./Text.eafab330.js";import"./iframe.0b82afca.js";import"./clsx.m.256e9345.js";function g(){return g=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},g.apply(this,arguments)}function Y(e,t){const n=r.exports.createContext(t);function o(c){const{children:u,...d}=c,a=r.exports.useMemo(()=>d,Object.values(d));return r.exports.createElement(n.Provider,{value:a},u)}function s(c){const u=r.exports.useContext(n);if(u)return u;if(t!==void 0)return t;throw new Error(`\`${c}\` must be used within \`${e}\``)}return o.displayName=e+"Provider",[o,s]}function H(e,t=[]){let n=[];function o(c,u){const d=r.exports.createContext(u),a=n.length;n=[...n,u];function i(l){const{scope:f,children:h,...x}=l,P=(f==null?void 0:f[e][a])||d,S=r.exports.useMemo(()=>x,Object.values(x));return r.exports.createElement(P.Provider,{value:S},h)}function b(l,f){const h=(f==null?void 0:f[e][a])||d,x=r.exports.useContext(h);if(x)return x;if(u!==void 0)return u;throw new Error(`\`${l}\` must be used within \`${c}\``)}return i.displayName=c+"Provider",[i,b]}const s=()=>{const c=n.map(u=>r.exports.createContext(u));return function(d){const a=(d==null?void 0:d[e])||c;return r.exports.useMemo(()=>({[`__scope${e}`]:{...d,[e]:a}}),[d,a])}};return s.scopeName=e,[o,Z(s,...t)]}function Z(...e){const t=e[0];if(e.length===1)return t;const n=()=>{const o=e.map(s=>({useScope:s(),scopeName:s.scopeName}));return function(c){const u=o.reduce((d,{useScope:a,scopeName:i})=>{const l=a(c)[`__scope${i}`];return{...d,...l}},{});return r.exports.useMemo(()=>({[`__scope${t.scopeName}`]:u}),[u])}};return n.scopeName=t.scopeName,n}function w(e,t,{checkForDefaultPrevented:n=!0}={}){return function(s){if(e==null||e(s),n===!1||!s.defaultPrevented)return t==null?void 0:t(s)}}function L(e){const t=r.exports.useRef(e);return r.exports.useEffect(()=>{t.current=e}),r.exports.useMemo(()=>(...n)=>{var o;return(o=t.current)===null||o===void 0?void 0:o.call(t,...n)},[])}function G({prop:e,defaultProp:t,onChange:n=()=>{}}){const[o,s]=J({defaultProp:t,onChange:n}),c=e!==void 0,u=c?e:o,d=L(n),a=r.exports.useCallback(i=>{if(c){const l=typeof i=="function"?i(e):i;l!==e&&d(l)}else s(i)},[c,e,s,d]);return[u,a]}function J({defaultProp:e,onChange:t}){const n=r.exports.useState(e),[o]=n,s=r.exports.useRef(o),c=L(t);return r.exports.useEffect(()=>{s.current!==o&&(c(o),s.current=o)},[o,s,c]),n}function Q(e){const t=r.exports.useRef({value:e,previous:e});return r.exports.useMemo(()=>(t.current.value!==e&&(t.current.previous=t.current.value,t.current.value=e),t.current.previous),[e])}const _=Boolean(globalThis==null?void 0:globalThis.document)?r.exports.useLayoutEffect:()=>{};function V(e){const[t,n]=r.exports.useState(void 0);return _(()=>{if(e){n({width:e.offsetWidth,height:e.offsetHeight});const o=new ResizeObserver(s=>{if(!Array.isArray(s)||!s.length)return;const c=s[0];let u,d;if("borderBoxSize"in c){const a=c.borderBoxSize,i=Array.isArray(a)?a[0]:a;u=i.inlineSize,d=i.blockSize}else u=e.offsetWidth,d=e.offsetHeight;n({width:u,height:d})});return o.observe(e,{box:"border-box"}),()=>o.unobserve(e)}else n(void 0)},[e]),t}function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},O.apply(this,arguments)}const ee=["a","button","div","h2","h3","img","li","nav","ol","p","span","svg","ul"],T=ee.reduce((e,t)=>{const n=r.exports.forwardRef((o,s)=>{const{asChild:c,...u}=o,d=c?z:t;return r.exports.useEffect(()=>{window[Symbol.for("radix-ui")]=!0},[]),r.exports.createElement(d,O({},u,{ref:s}))});return n.displayName=`Primitive.${t}`,{...e,[t]:n}},{}),te="Label",[Pe,ne]=Y(te,{id:void 0,controlRef:{current:null}}),oe=e=>{const t=ne("LabelConsumer"),{controlRef:n}=t;return r.exports.useEffect(()=>{e&&(n.current=e)},[e,n]),t.id};function re(e,t){return r.exports.useReducer((n,o)=>{const s=t[n][o];return s!=null?s:n},e)}const I=e=>{const{present:t,children:n}=e,o=se(t),s=typeof n=="function"?n({present:o.isPresent}):r.exports.Children.only(n),c=M(o.ref,s.ref);return typeof n=="function"||o.isPresent?r.exports.cloneElement(s,{ref:c}):null};I.displayName="Presence";function se(e){const[t,n]=r.exports.useState(),o=r.exports.useRef({}),s=r.exports.useRef(e),c=r.exports.useRef("none"),u=e?"mounted":"unmounted",[d,a]=re(u,{mounted:{UNMOUNT:"unmounted",ANIMATION_OUT:"unmountSuspended"},unmountSuspended:{MOUNT:"mounted",ANIMATION_END:"unmounted"},unmounted:{MOUNT:"mounted"}});return r.exports.useEffect(()=>{const i=y(o.current);c.current=d==="mounted"?i:"none"},[d]),_(()=>{const i=o.current,b=s.current;if(b!==e){const f=c.current,h=y(i);e?a("MOUNT"):h==="none"||(i==null?void 0:i.display)==="none"?a("UNMOUNT"):a(b&&f!==h?"ANIMATION_OUT":"UNMOUNT"),s.current=e}},[e,a]),_(()=>{if(t){const i=l=>{const h=y(o.current).includes(l.animationName);l.target===t&&h&&W.exports.flushSync(()=>a("ANIMATION_END"))},b=l=>{l.target===t&&(c.current=y(o.current))};return t.addEventListener("animationstart",b),t.addEventListener("animationcancel",i),t.addEventListener("animationend",i),()=>{t.removeEventListener("animationstart",b),t.removeEventListener("animationcancel",i),t.removeEventListener("animationend",i)}}else a("ANIMATION_END")},[t,a]),{isPresent:["mounted","unmountSuspended"].includes(d),ref:r.exports.useCallback(i=>{i&&(o.current=getComputedStyle(i)),n(i)},[])}}function y(e){return(e==null?void 0:e.animationName)||"none"}const j="Checkbox",[ce,Se]=H(j),[ae,ie]=ce(j),ue=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,"aria-labelledby":o,name:s,checked:c,defaultChecked:u,required:d,disabled:a,value:i="on",onCheckedChange:b,...l}=e,[f,h]=r.exports.useState(null),x=M(t,m=>h(m)),P=oe(f),S=o||P,E=r.exports.useRef(!1),A=f?Boolean(f.closest("form")):!0,[k=!1,U]=G({prop:c,defaultProp:u,onChange:b});return r.exports.createElement(ae,{scope:n,state:k,disabled:a},r.exports.createElement(T.button,g({type:"button",role:"checkbox","aria-checked":$(k)?"mixed":k,"aria-labelledby":S,"aria-required":d,"data-state":B(k),"data-disabled":a?"":void 0,disabled:a,value:i},l,{ref:x,onKeyDown:w(e.onKeyDown,m=>{m.key==="Enter"&&m.preventDefault()}),onClick:w(e.onClick,m=>{U(R=>$(R)?!0:!R),A&&(E.current=m.isPropagationStopped(),E.current||m.stopPropagation())})})),A&&r.exports.createElement(fe,{control:f,bubbles:!E.current,name:s,value:i,checked:k,required:d,disabled:a,style:{transform:"translateX(-100%)"}}))}),de="CheckboxIndicator",le=r.exports.forwardRef((e,t)=>{const{__scopeCheckbox:n,forceMount:o,...s}=e,c=ie(de,n);return r.exports.createElement(I,{present:o||$(c.state)||c.state===!0},r.exports.createElement(T.span,g({"data-state":B(c.state),"data-disabled":c.disabled?"":void 0},s,{ref:t,style:{pointerEvents:"none",...e.style}})))}),fe=e=>{const{control:t,checked:n,bubbles:o=!0,...s}=e,c=r.exports.useRef(null),u=Q(n),d=V(t);return r.exports.useEffect(()=>{const a=c.current,i=window.HTMLInputElement.prototype,l=Object.getOwnPropertyDescriptor(i,"checked").set;if(u!==n&&l){const f=new Event("click",{bubbles:o});a.indeterminate=$(n),l.call(a,$(n)?!1:n),a.dispatchEvent(f)}},[u,n,o]),r.exports.createElement("input",g({type:"checkbox","aria-hidden":!0,defaultChecked:$(n)?!1:n},s,{tabIndex:-1,ref:c,style:{...e.style,...d,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function $(e){return e==="indeterminate"}function B(e){return $(e)?"indeterminate":e?"checked":"unchecked"}const pe=ue,be=le;var v=new Map;v.set("bold",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"24"})})});v.set("duotone",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});v.set("fill",function(){return p(C,{children:p("path",{d:"M104,192a8.5,8.5,0,0,1-5.7-2.3l-56-56a8.1,8.1,0,0,1,11.4-11.4L104,172.7,210.3,66.3a8.1,8.1,0,0,1,11.4,11.4l-112,112A8.5,8.5,0,0,1,104,192Z"})})});v.set("light",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"12"})})});v.set("thin",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"8"})})});v.set("regular",function(e){return p(C,{children:p("polyline",{points:"216 72 104 184 48 128",fill:"none",stroke:e,strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"16"})})});var he=function(t,n){return K(t,n,v)},D=r.exports.forwardRef(function(e,t){return p(F,{...Object.assign({ref:t},e,{renderPath:he})})});D.displayName="Check";const xe=D;function N(e){return p(pe,{className:"w-6 h-6 p-[2px] bg-grey-800 rounded",...e,children:p(be,{asChild:!0,children:p(xe,{weight:"bold",className:"h-5 w-5 text-cyan-500"})})})}try{N.displayName="Checkbox",N.__docgenInfo={description:"",displayName:"Checkbox",props:{asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/Checkbox.tsx#Checkbox"]={docgenInfo:N.__docgenInfo,name:"Checkbox",path:"src/components/Checkbox.tsx#Checkbox"})}catch{}const Ee={title:"Components/Checkbox",component:N,args:{},argTypes:{},decorators:[e=>q("div",{className:"flex items-center gap-2",children:[e(),p(X,{size:"sm",children:"Remember me for 30 days"})]})]},_e={},Oe=["Default"];export{_e as Default,Oe as __namedExportsOrder,Ee as default};
//# sourceMappingURL=Checkbox.stories.cb8117fc.js.map