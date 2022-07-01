var Je=Object.defineProperty,et=Object.defineProperties;var tt=Object.getOwnPropertyDescriptors;var we=Object.getOwnPropertySymbols;var ot=Object.prototype.hasOwnProperty,nt=Object.prototype.propertyIsEnumerable;var be=(e,t,o)=>t in e?Je(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,b=(e,t)=>{for(var o in t||(t={}))ot.call(t,o)&&be(e,o,t[o]);if(we)for(var o of we(t))nt.call(t,o)&&be(e,o,t[o]);return e},M=(e,t)=>et(e,tt(t));import{c as j,h as re,e as it}from"./render.3d38f399.js";import{c as w,h as E,r as k,j as se,u as ue,g as V,W as lt,m as ye,D as Q,k as xe,x as q,G as Ve,n as z,l as at,v as x,X as Te,R as rt,Y as st,Z as T,p as ut,T as ct,$ as qe,a0 as dt}from"./index.9d8ba1a3.js";import{u as Y,c as U,d as ke,e as ft,a as vt}from"./focus-manager.2ace230d.js";import{g as mt,h as Ee,i as ht,j as gt,v as pt,k as te,l as wt}from"./QBtn.3102aaf7.js";const bt=[null,document,document.body,document.scrollingElement,document.documentElement];function yt(e,t){let o=mt(t);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return bt.includes(o)?window:o}function xt(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function Tt(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let K;function qt(){if(K!==void 0)return K;const e=document.createElement("p"),t=document.createElement("div");Ee(e,{width:"100%",height:"200px"}),Ee(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const o=e.offsetWidth;t.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=t.clientWidth),t.remove(),K=o-n,K}function kt(e,t=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}var uo=j({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const o=w(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>E("div",{class:o.value},re(t.default))}}),co=j({name:"QItem",props:M(b(b({},Y),ht),{tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean}),emits:["click","keyup"],setup(e,{slots:t,emit:o}){const{proxy:{$q:n}}=V(),l=U(e,n),{hasRouterLink:u,hasLink:i,linkProps:c,linkClass:r,linkTag:d,navigateToRouterLink:s}=gt(),p=k(null),m=k(null),a=w(()=>e.clickable===!0||i.value===!0||e.tag==="label"),h=w(()=>e.disable!==!0&&a.value===!0),B=w(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(l.value===!0?" q-item--dark":"")+(i.value===!0?r.value:e.active===!0?`${e.activeClass!==void 0?` ${e.activeClass}`:""} q-item--active`:"")+(e.disable===!0?" disabled":"")+(h.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),S=w(()=>{if(e.insetLevel===void 0)return null;const g=n.lang.rtl===!0?"Right":"Left";return{["padding"+g]:16+e.insetLevel*56+"px"}});function L(g){h.value===!0&&(m.value!==null&&(g.qKeyEvent!==!0&&document.activeElement===p.value?m.value.focus():document.activeElement===m.value&&p.value.focus()),u.value===!0&&s(g),o("click",g))}function v(g){if(h.value===!0&&se(g,13)===!0){ue(g),g.qKeyEvent=!0;const O=new MouseEvent("click",g);O.qKeyEvent=!0,p.value.dispatchEvent(O)}o("keyup",g)}function y(){const g=it(t.default,[]);return h.value===!0&&g.unshift(E("div",{class:"q-focus-helper",tabindex:-1,ref:m})),g}return()=>{const g={ref:p,class:B.value,style:S.value,onClick:L,onKeyup:v};return h.value===!0?(g.tabindex=e.tabindex||"0",Object.assign(g,c.value)):a.value===!0&&(g["aria-disabled"]="true"),E(d.value,g,y())}}}),fo=j({name:"QList",props:M(b({},Y),{bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean}),setup(e,{slots:t}){const o=V(),n=U(e,o.proxy.$q),l=w(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(n.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>E("div",{class:l.value},re(t.default))}});function Et(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),lt.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const St={target:{default:!0},noParentEvent:Boolean,contextMenu:Boolean};function Lt({showing:e,avoidEmit:t,configureAnchorEl:o}){const{props:n,proxy:l,emit:u}=V(),i=k(null);let c;function r(a){return i.value===null?!1:a===void 0||a.touches===void 0||a.touches.length<=1}const d={};o===void 0&&(Object.assign(d,{hide(a){l.hide(a)},toggle(a){l.toggle(a),a.qAnchorHandled=!0},toggleKey(a){se(a,13)===!0&&d.toggle(a)},contextClick(a){l.hide(a),ye(a),Q(()=>{l.show(a),a.qAnchorHandled=!0})},prevent:ye,mobileTouch(a){if(d.mobileCleanup(a),r(a)!==!0)return;l.hide(a),i.value.classList.add("non-selectable");const h=a.target;xe(d,"anchor",[[h,"touchmove","mobileCleanup","passive"],[h,"touchend","mobileCleanup","passive"],[h,"touchcancel","mobileCleanup","passive"],[i.value,"contextmenu","prevent","notPassive"]]),c=setTimeout(()=>{l.show(a),a.qAnchorHandled=!0},300)},mobileCleanup(a){i.value.classList.remove("non-selectable"),clearTimeout(c),e.value===!0&&a!==void 0&&Et()}}),o=function(a=n.contextMenu){if(n.noParentEvent===!0||i.value===null)return;let h;a===!0?l.$q.platform.is.mobile===!0?h=[[i.value,"touchstart","mobileTouch","passive"]]:h=[[i.value,"mousedown","hide","passive"],[i.value,"contextmenu","contextClick","notPassive"]]:h=[[i.value,"click","toggle","passive"],[i.value,"keyup","toggleKey","passive"]],xe(d,"anchor",h)});function s(){at(d,"anchor")}function p(a){for(i.value=a;i.value.classList.contains("q-anchor--skip");)i.value=i.value.parentNode;o()}function m(){if(n.target===!1||n.target==="")i.value=null;else if(n.target===!0)p(l.$el.parentNode);else{let a=n.target;if(typeof n.target=="string")try{a=document.querySelector(n.target)}catch{a=void 0}a!=null?(i.value=a.$el||a,o()):(i.value=null,console.error(`Anchor: target "${n.target}" not found`))}}return q(()=>n.contextMenu,a=>{i.value!==null&&(s(),o(a))}),q(()=>n.target,()=>{i.value!==null&&s(),m()}),q(()=>n.noParentEvent,a=>{i.value!==null&&(a===!0?s():o())}),Ve(()=>{m(),t!==!0&&n.modelValue===!0&&i.value===null&&u("update:modelValue",!1)}),z(()=>{clearTimeout(c),s()}),{anchorEl:i,canShow:r,anchorEvents:d}}function Ct(e,t){const o=k(null);let n;function l(c,r){const d=`${r!==void 0?"add":"remove"}EventListener`,s=r!==void 0?r:n;c!==window&&c[d]("scroll",s,x.passive),window[d]("scroll",s,x.passive),n=r}function u(){o.value!==null&&(l(o.value),o.value=null)}const i=q(()=>e.noParentEvent,()=>{o.value!==null&&(u(),t())});return z(i),{localScrollTarget:o,unconfigureScrollTarget:u,changeScrollEvent:l}}const Ht={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},Pt=["before-show","show","before-hide","hide"];function Bt({showing:e,canShow:t,hideOnRouteChange:o,handleShow:n,handleHide:l,processOnMount:u}){const i=V(),{props:c,emit:r,proxy:d}=i;let s;function p(v){e.value===!0?h(v):m(v)}function m(v){if(c.disable===!0||v!==void 0&&v.qAnchorHandled===!0||t!==void 0&&t(v)!==!0)return;const y=c["onUpdate:modelValue"]!==void 0;y===!0&&(r("update:modelValue",!0),s=v,Q(()=>{s===v&&(s=void 0)})),(c.modelValue===null||y===!1)&&a(v)}function a(v){e.value!==!0&&(e.value=!0,r("before-show",v),n!==void 0?n(v):r("show",v))}function h(v){if(c.disable===!0)return;const y=c["onUpdate:modelValue"]!==void 0;y===!0&&(r("update:modelValue",!1),s=v,Q(()=>{s===v&&(s=void 0)})),(c.modelValue===null||y===!1)&&B(v)}function B(v){e.value!==!1&&(e.value=!1,r("before-hide",v),l!==void 0?l(v):r("hide",v))}function S(v){c.disable===!0&&v===!0?c["onUpdate:modelValue"]!==void 0&&r("update:modelValue",!1):v===!0!==e.value&&(v===!0?a:B)(s)}q(()=>c.modelValue,S),o!==void 0&&pt(i)===!0&&q(()=>d.$route.fullPath,()=>{o.value===!0&&e.value===!0&&h()}),u===!0&&Ve(()=>{S(c.modelValue)});const L={show:m,hide:h,toggle:p};return Object.assign(d,L),L}let Wt=document.body;function Mt(e){const t=document.createElement("div");if(e!==void 0&&(t.id=e),Te.globalNodes!==void 0){const o=Te.globalNodes.class;o!==void 0&&(t.className=o)}return Wt.appendChild(t),t}function $t(e){e.remove()}const D=[];function Rt(e,t){do{if(e.$options.name==="QMenu"){if(e.hide(t),e.$props.separateClosePopup===!0)return te(e)}else if(e.__qPortalInnerRef!==void 0){const o=te(e);return o!==void 0&&o.$options.name==="QPopupProxy"?(e.hide(t),o):e}e=te(e)}while(e!=null)}function Vt(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function zt(e,t,o,n){const l=k(!1),u=k(!1);let i=null;const c={},r=n===!0&&Vt(e);function d(p){if(p===!0){ke(c),u.value=!0;return}u.value=!1,l.value===!1&&(r===!1&&i===null&&(i=Mt()),l.value=!0,D.push(e.proxy),ft(c))}function s(p){if(u.value=!1,p!==!0)return;ke(c),l.value=!1;const m=D.indexOf(e.proxy);m>-1&&D.splice(m,1),i!==null&&($t(i),i=null)}return rt(()=>{s(!0)}),Object.assign(e.proxy,{__qPortalInnerRef:t}),{showPortal:d,hidePortal:s,portalIsActive:l,portalIsAccessible:u,renderPortal:()=>r===!0?o():l.value===!0?[E(st,{to:i},o())]:void 0}}const Ot={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function At(e,t){const o=k(t.value);return q(t,n=>{Q(()=>{o.value=n})}),{transition:w(()=>"q-transition--"+(o.value===!0?e.transitionHide:e.transitionShow)),transitionStyle:w(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Ft(){let e;return z(()=>{e=void 0}),{registerTick(t){e=t,Q(()=>{e===t&&(e(),e=void 0)})},removeTick(){e=void 0}}}function _t(){let e;return z(()=>{clearTimeout(e)}),{registerTimeout(t,o){clearTimeout(e),e=setTimeout(t,o)},removeTimeout(){clearTimeout(e)}}}const C=[];let R;function Dt(e){R=e.keyCode===27}function Qt(){R===!0&&(R=!1)}function jt(e){R===!0&&(R=!1,se(e,27)===!0&&C[C.length-1](e))}function ze(e){window[e]("keydown",Dt),window[e]("blur",Qt),window[e]("keyup",jt),R=!1}function Kt(e){T.is.desktop===!0&&(C.push(e),C.length===1&&ze("addEventListener"))}function Se(e){const t=C.indexOf(e);t>-1&&(C.splice(t,1),C.length===0&&ze("removeEventListener"))}const H=[];function Oe(e){H[H.length-1](e)}function Nt(e){T.is.desktop===!0&&(H.push(e),H.length===1&&document.body.addEventListener("focusin",Oe))}function It(e){const t=H.indexOf(e);t>-1&&(H.splice(t,1),H.length===0&&document.body.removeEventListener("focusin",Oe))}let Ae;const{notPassiveCapture:I}=x,P=[];function X(e){clearTimeout(Ae);const t=e.target;if(t===void 0||t.nodeType===8||t.classList.contains("no-pointer-events")===!0)return;let o=D.length-1;for(;o>=0;){const n=D[o].$;if(n.type.name!=="QDialog")break;if(n.props.seamless!==!0)return;o--}for(let n=P.length-1;n>=0;n--){const l=P[n];if((l.anchorEl.value===null||l.anchorEl.value.contains(t)===!1)&&(t===document.body||l.innerRef.value!==null&&l.innerRef.value.contains(t)===!1))e.qClickOutside=!0,l.onClickOutside(e);else return}}function Xt(e){P.push(e),P.length===1&&(document.addEventListener("mousedown",X,I),document.addEventListener("touchstart",X,I))}function Le(e){const t=P.findIndex(o=>o===e);t>-1&&(P.splice(t,1),P.length===0&&(clearTimeout(Ae),document.removeEventListener("mousedown",X,I),document.removeEventListener("touchstart",X,I)))}let Ce,He;function Pe(e){const t=e.split(" ");return t.length!==2?!1:["top","center","bottom"].includes(t[0])!==!0?(console.error("Anchor/Self position must start with one of top/center/bottom"),!1):["left","middle","right","start","end"].includes(t[1])!==!0?(console.error("Anchor/Self position must end with one of left/middle/right/start/end"),!1):!0}function Yt(e){return e?!(e.length!==2||typeof e[0]!="number"||typeof e[1]!="number"):!0}const ae={"start#ltr":"left","start#rtl":"right","end#ltr":"right","end#rtl":"left"};["left","middle","right"].forEach(e=>{ae[`${e}#ltr`]=e,ae[`${e}#rtl`]=e});function Be(e,t){const o=e.split(" ");return{vertical:o[0],horizontal:ae[`${o[1]}#${t===!0?"rtl":"ltr"}`]}}function Ut(e,t){let{top:o,left:n,right:l,bottom:u,width:i,height:c}=e.getBoundingClientRect();return t!==void 0&&(o-=t[1],n-=t[0],u+=t[1],l+=t[0],i+=t[0],c+=t[1]),{top:o,left:n,right:l,bottom:u,width:i,height:c,middle:n+(l-n)/2,center:o+(u-o)/2}}function Gt(e){return{top:0,center:e.offsetHeight/2,bottom:e.offsetHeight,left:0,middle:e.offsetWidth/2,right:e.offsetWidth}}function Zt(e){if(T.is.ios===!0&&window.visualViewport!==void 0){const c=document.body.style,{offsetLeft:r,offsetTop:d}=window.visualViewport;r!==Ce&&(c.setProperty("--q-pe-left",r+"px"),Ce=r),d!==He&&(c.setProperty("--q-pe-top",d+"px"),He=d)}let t;const{scrollLeft:o,scrollTop:n}=e.el;if(e.absoluteOffset===void 0)t=Ut(e.anchorEl,e.cover===!0?[0,0]:e.offset);else{const{top:c,left:r}=e.anchorEl.getBoundingClientRect(),d=c+e.absoluteOffset.top,s=r+e.absoluteOffset.left;t={top:d,left:s,width:1,height:1,right:s+1,center:d,middle:s,bottom:d+1}}let l={maxHeight:e.maxHeight,maxWidth:e.maxWidth,visibility:"visible"};(e.fit===!0||e.cover===!0)&&(l.minWidth=t.width+"px",e.cover===!0&&(l.minHeight=t.height+"px")),Object.assign(e.el.style,l);const u=Gt(e.el),i={top:t[e.anchorOrigin.vertical]-u[e.selfOrigin.vertical],left:t[e.anchorOrigin.horizontal]-u[e.selfOrigin.horizontal]};Jt(i,t,u,e.anchorOrigin,e.selfOrigin),l={top:i.top+"px",left:i.left+"px"},i.maxHeight!==void 0&&(l.maxHeight=i.maxHeight+"px",t.height>i.maxHeight&&(l.minHeight=l.maxHeight)),i.maxWidth!==void 0&&(l.maxWidth=i.maxWidth+"px",t.width>i.maxWidth&&(l.minWidth=l.maxWidth)),Object.assign(e.el.style,l),e.el.scrollTop!==n&&(e.el.scrollTop=n),e.el.scrollLeft!==o&&(e.el.scrollLeft=o)}function Jt(e,t,o,n,l){const u=o.bottom,i=o.right,c=qt(),r=window.innerHeight-c,d=document.body.clientWidth;if(e.top<0||e.top+u>r)if(l.vertical==="center")e.top=t[n.vertical]>r/2?Math.max(0,r-u):0,e.maxHeight=Math.min(u,r);else if(t[n.vertical]>r/2){const s=Math.min(r,n.vertical==="center"?t.center:n.vertical===l.vertical?t.bottom:t.top);e.maxHeight=Math.min(u,s),e.top=Math.max(0,s-u)}else e.top=Math.max(0,n.vertical==="center"?t.center:n.vertical===l.vertical?t.top:t.bottom),e.maxHeight=Math.min(u,r-e.top);if(e.left<0||e.left+i>d)if(e.maxWidth=Math.min(i,d),l.horizontal==="middle")e.left=t[n.horizontal]>d/2?Math.max(0,d-i):0;else if(t[n.horizontal]>d/2){const s=Math.min(d,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.right:t.left);e.maxWidth=Math.min(i,s),e.left=Math.max(0,s-e.maxWidth)}else e.left=Math.max(0,n.horizontal==="middle"?t.middle:n.horizontal===l.horizontal?t.left:t.right),e.maxWidth=Math.min(i,d-e.left)}var vo=j({name:"QMenu",inheritAttrs:!1,props:M(b(b(b(b({},St),Ht),Y),Ot),{persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:Pe},self:{type:String,validator:Pe},offset:{type:Array,validator:Yt},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}}),emits:[...Pt,"click","escape-key"],setup(e,{slots:t,emit:o,attrs:n}){let l=null,u,i,c;const r=V(),{proxy:d}=r,{$q:s}=d,p=k(null),m=k(!1),a=w(()=>e.persistent!==!0&&e.noRouteDismiss!==!0),h=U(e,s),{registerTick:B,removeTick:S}=Ft(),{registerTimeout:L,removeTimeout:v}=_t(),{transition:y,transitionStyle:g}=At(e,m),{localScrollTarget:O,changeScrollEvent:Fe,unconfigureScrollTarget:_e}=Ct(e,ge),{anchorEl:W,canShow:De}=Lt({showing:m}),{hide:ce}=Bt({showing:m,canShow:De,handleShow:Ie,handleHide:Xe,hideOnRouteChange:a,processOnMount:!0}),{showPortal:de,hidePortal:fe,renderPortal:Qe}=zt(r,p,Ue),G={anchorEl:W,innerRef:p,onClickOutside(f){if(e.persistent!==!0&&m.value===!0)return ce(f),(f.type==="touchstart"||f.target.classList.contains("q-dialog__backdrop"))&&ue(f),!0}},ve=w(()=>Be(e.anchor||(e.cover===!0?"center middle":"bottom start"),s.lang.rtl)),je=w(()=>e.cover===!0?ve.value:Be(e.self||"top start",s.lang.rtl)),Ke=w(()=>(e.square===!0?" q-menu--square":"")+(h.value===!0?" q-menu--dark q-dark":"")),Ne=w(()=>e.autoClose===!0?{onClick:Ye}:{}),me=w(()=>m.value===!0&&e.persistent!==!0);q(me,f=>{f===!0?(Kt(J),Xt(G)):(Se(J),Le(G))});function Z(){vt(()=>{let f=p.value;f&&f.contains(document.activeElement)!==!0&&(f=f.querySelector("[autofocus], [data-autofocus]")||f,f.focus({preventScroll:!0}))})}function Ie(f){if(S(),v(),l=e.noRefocus===!1?document.activeElement:null,Nt(pe),de(),ge(),u=void 0,f!==void 0&&(e.touchPosition||e.contextMenu)){const ee=ut(f);if(ee.left!==void 0){const{top:Ge,left:Ze}=W.value.getBoundingClientRect();u={left:ee.left-Ze,top:ee.top-Ge}}}i===void 0&&(i=q(()=>s.screen.width+"|"+s.screen.height+"|"+e.self+"|"+e.anchor+"|"+s.lang.rtl,A)),e.noFocus!==!0&&document.activeElement.blur(),B(()=>{A(),e.noFocus!==!0&&Z()}),L(()=>{s.platform.is.ios===!0&&(c=e.autoClose,p.value.click()),A(),de(!0),o("show",f)},e.transitionDuration)}function Xe(f){S(),v(),fe(),he(!0),l!==null&&(f===void 0||f.qClickOutside!==!0)&&(l.focus(),l=null),L(()=>{fe(!0),o("hide",f)},e.transitionDuration)}function he(f){u=void 0,i!==void 0&&(i(),i=void 0),(f===!0||m.value===!0)&&(It(pe),_e(),Le(G),Se(J)),f!==!0&&(l=null)}function ge(){(W.value!==null||e.scrollTarget!==void 0)&&(O.value=yt(W.value,e.scrollTarget),Fe(O.value,A))}function Ye(f){c!==!0?(Rt(d,f),o("click",f)):c=!1}function pe(f){me.value===!0&&e.noFocus!==!0&&wt(p.value,f.target)!==!0&&Z()}function J(f){o("escape-key"),ce(f)}function A(){const f=p.value;f===null||W.value===null||Zt({el:f,offset:e.offset,anchorEl:W.value,anchorOrigin:ve.value,selfOrigin:je.value,absoluteOffset:u,fit:e.fit,cover:e.cover,maxHeight:e.maxHeight,maxWidth:e.maxWidth})}function Ue(){return E(ct,{name:y.value,appear:!0},()=>m.value===!0?E("div",b(M(b({},n),{ref:p,tabindex:-1,class:["q-menu q-position-engine scroll"+Ke.value,n.class],style:[n.style,g.value]}),Ne.value),re(t.default)):null)}return z(he),Object.assign(d,{focus:Z,updatePosition:A}),Qe}});function mo(e,t,o){let n;function l(){n!==void 0&&(qe.remove(n),n=void 0)}return z(()=>{e.value===!0&&l()}),{removeFromHistory:l,addToHistory(){n={condition:()=>o.value===!0,handler:t},qe.add(n)}}}let F=0,oe,ne,_,ie=!1,We,Me,$;function eo(e){to(e)&&ue(e)}function to(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=dt(e),o=e.shiftKey&&!e.deltaX,n=!o&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),l=o||n?e.deltaY:e.deltaX;for(let u=0;u<t.length;u++){const i=t[u];if(kt(i,n))return n?l<0&&i.scrollTop===0?!0:l>0&&i.scrollTop+i.clientHeight===i.scrollHeight:l<0&&i.scrollLeft===0?!0:l>0&&i.scrollLeft+i.clientWidth===i.scrollWidth}return!0}function $e(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function N(e){ie!==!0&&(ie=!0,requestAnimationFrame(()=>{ie=!1;const{height:t}=e.target,{clientHeight:o,scrollTop:n}=document.scrollingElement;(_===void 0||t!==window.innerHeight)&&(_=o-t,document.scrollingElement.scrollTop=n),n>_&&(document.scrollingElement.scrollTop-=Math.ceil((n-_)/8))}))}function Re(e){const t=document.body,o=window.visualViewport!==void 0;if(e==="add"){const{overflowY:n,overflowX:l}=window.getComputedStyle(t);oe=Tt(window),ne=xt(window),We=t.style.left,Me=t.style.top,t.style.left=`-${oe}px`,t.style.top=`-${ne}px`,l!=="hidden"&&(l==="scroll"||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),n!=="hidden"&&(n==="scroll"||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,T.is.ios===!0&&(o===!0?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",N,x.passiveCapture),window.visualViewport.addEventListener("scroll",N,x.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",$e,x.passiveCapture))}T.is.desktop===!0&&T.is.mac===!0&&window[`${e}EventListener`]("wheel",eo,x.notPassive),e==="remove"&&(T.is.ios===!0&&(o===!0?(window.visualViewport.removeEventListener("resize",N,x.passiveCapture),window.visualViewport.removeEventListener("scroll",N,x.passiveCapture)):window.removeEventListener("scroll",$e,x.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=We,t.style.top=Me,window.scrollTo(oe,ne),_=void 0)}function oo(e){let t="add";if(e===!0){if(F++,$!==void 0){clearTimeout($),$=void 0;return}if(F>1)return}else{if(F===0||(F--,F>0))return;if(t="remove",T.is.ios===!0&&T.is.nativeMobile===!0){clearTimeout($),$=setTimeout(()=>{Re(t),$=void 0},100);return}}Re(t)}function ho(){let e;return{preventBodyScroll(t){t!==e&&(e!==void 0||t===!0)&&(e=t,oo(t))}}}const no={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},le={xs:2,sm:4,md:8,lg:16,xl:24};var go=j({name:"QSeparator",props:M(b({},Y),{spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String}),setup(e){const t=V(),o=U(e,t.proxy.$q),n=w(()=>e.vertical===!0?"vertical":"horizontal"),l=w(()=>` q-separator--${n.value}`),u=w(()=>e.inset!==!1?`${l.value}-${no[e.inset]}`:""),i=w(()=>`q-separator${l.value}${u.value}`+(e.color!==void 0?` bg-${e.color}`:"")+(o.value===!0?" q-separator--dark":"")),c=w(()=>{const r={};if(e.size!==void 0&&(r[e.vertical===!0?"width":"height"]=e.size),e.spaced!==!1){const d=e.spaced===!0?`${le.md}px`:e.spaced in le?`${le[e.spaced]}px`:e.spaced,s=e.vertical===!0?["Left","Right"]:["Top","Bottom"];r[`margin${s[0]}`]=r[`margin${s[1]}`]=d}return r});return()=>E("hr",{class:i.value,style:c.value,"aria-orientation":n.value})}});export{vo as Q,Pt as a,_t as b,Bt as c,mo as d,ho as e,xt as f,yt as g,Tt as h,qt as i,uo as j,co as k,fo as l,go as m,Et as n,Ft as o,Ot as p,zt as q,It as r,Se as s,Nt as t,Ht as u,Kt as v};
