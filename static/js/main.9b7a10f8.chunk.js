(this["webpackJsonpresume-editor"]=this["webpackJsonpresume-editor"]||[]).push([[0],{106:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return o}));var c=n(34),a=n(56),i=n(18),r=n(69);const s="cld",o=(e,t)=>{switch(t.type){case i.a.INIT_STATE:e.cld=t.payload;break;case i.a.REPLACE_STATE:e.cld=t.payload,e.selectedNode.id&&(e.selectedNode={id:"",name:""});break;case i.a.ADD_SECTION:var{config:n,index:s}=t.payload;Object(c.a)(s)?e.cld.children.push(n):e.cld.children.splice(s+1,0,n),r.a.collect(e.cld);break;case i.a.ADD_CHILD_SECTION:var s,{uuid:s,config:n}=t.payload;(s=Object(a.c)(e.cld.children,s))&&s.children.push(n),r.a.collect(e.cld);break;case i.a.DELETE_SECTION:s=t.payload,e.cld.children.splice(s,1),r.a.collect(e.cld);break;case i.a.DELETE_ONE_BY_UUID:n=t.payload,Object(a.a)(e.cld.children,n),r.a.collect(e.cld);break;case i.a.UPDATE_ONE:var{id:s,key:n,data:o,merge:l=!0}=t.payload;Object(a.d)(e.cld.children,s,n,o,l),r.a.collect(e.cld);break;case i.a.UPDATE_ONE_NO_UNDO:var{id:s,key:n,data:o,merge:l=!0}=t.payload;Object(a.d)(e.cld.children,s,n,o,l);break;case i.a.UPDATE_ALL:s=t.payload.data,e.cld.children=s,r.a.collect(e.cld);break;case i.a.SELECT_NODE:e.selectedNode.id!==t.payload.id&&(e.selectedNode=t.payload)}}},173:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){"use strict";const c=e=>String(e).replace(/-storage$/g,"")+"-storage";t.a=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"local";const t="local"===e||"l"===e?window.localStorage:window.sessionStorage;return{has:function(e){return e=c(e),!!t.getItem(e)},get:function(e){e=c(e);var n=t.getItem(e);return null===n?null:(null===(n=(e=>{try{var t=JSON.parse(e);return Number.isNaN(t.expire)||t.expire&&function(e,t,n,c,a,i,r){if(void 0===e)return new Date;if(e instanceof Date||"number"==typeof e&&void 0===t)return new Date(e);if("number"==typeof e&&"number"==typeof t)return new Date(e,t,n||1,c||0,a||0,i||0,r||0);if("string"==typeof e)return new Date(e.replace(/-/g,"/"));throw new Error("No suitable parameters")}().getTime()>t.expire?null:t.origin}catch(e){return null}})(n))&&this.remove(e),n)},set:function(e,n){var a=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;e=c(e),n=((e,t)=>(e={origin:e,expire:null},t&&(e.expire=t.getTime()),JSON.stringify(e)))(n,a);return t.setItem(e,n)},remove:function(e){return e=c(e),t.removeItem(e)},clear:function(){return t.clear()}}}},18:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c={INIT_STATE:"INIT_STATE",REPLACE_STATE:"REPLACE_STATE",ADD_SECTION:"ADD_SECTION",ADD_CHILD_SECTION:"ADD_CHILD_SECTION",SWAP_SECTION:"SWAP_SECTION",DELETE_SECTION:"DELETE_SECTION",DELETE_ONE_BY_UUID:"DELETE_ONE_BY_UUID",UPDATE_ONE:"UPDATE_ONE",UPDATE_ONE_NO_UNDO:"UPDATE_ONE_NO_UNDO",SELECT_NODE:"SELECT_NODE",UPDATE_ALL:"UPDATE_ALL"}},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return I}));var c=n(131),a=n(234),i=n.n(a),r=(n(384),n(0)),s=n(43),o=n(60);const l={x:0,y:0,w:10,h:30,isDraggable:!0,isResizable:!0,minW:1,minH:1};a=n(180);var d=n.n(a),j=n(18),u=(n(397),n(255)),b=n(26),p=n(3),h=e=>{const[t,n]=Object(r.useState)(0),c=Object(r.useRef)(null),a=Object(u.a)((()=>{var t;c.current&&(t=c.current.getBoundingClientRect().width-2,n(t/e.cols))}));return Object(r.useEffect)((()=>(a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)})),[a,e.cols]),Object(p.jsx)("div",{className:Object(b.a)("pedestal-main-reference-line",e.className,e.display&&"enable"),style:{backgroundSize:"".concat(t,"px ").concat(e.rows,"px"),backgroundPositionX:t/2,backgroundPositionY:-e.rows/2,...e.style},ref:c,children:e.children})},O=(h.defaultProps={className:""},h),m=(n(104),n(64)),x=n(95),g=n(236),f=n(140),y=(n(86),n(28)),v=n(235),_=(h=n(88),n.n(h)),E=(n(398),n(187)),N=n(34);const w=e=>{const[t,n]=Object(r.useState)(!1),{selectedId:c,dispatch:a,config:i,cols:s}=e;Object(r.useEffect)((()=>{n(e.display&&c===i.id)}),[i.id,e.display,e.selectedId,c]);const o=Object(p.jsxs)("div",{className:"pedestal-main-item-toolbar",children:[Object(p.jsx)(y.a,{icon:Object(p.jsx)(v.a,{}),onClick:()=>{var e=Object(E.a)(),t={config:{..._()(i),id:e}};Object(N.c)(t.config.config.layout)&&(t.config.config.layout.i=e),t.config.config.layout.y=t.config.config.layout.y+10,a({type:j.a.ADD_SECTION,payload:t})},type:"text"}),Object(p.jsx)(y.a,{icon:Object(p.jsx)(f.a,{}),onClick:()=>{i.config.layout&&a({type:j.a.UPDATE_ONE,payload:{id:i.id,key:"config.layout.w",data:s}})},type:"text"}),Object(p.jsx)(y.a,{icon:Object(p.jsx)(g.a,{}),onClick:()=>{var e;i.config.layout&&(e=i.config.layout,a({type:j.a.UPDATE_ONE,payload:{id:i.id,key:"config.layout.x",data:s/2-e.w/2}}))},type:"text"}),Object(p.jsx)(y.a,{icon:Object(p.jsx)(x.a,{}),onClick:()=>{a({type:j.a.DELETE_ONE_BY_UUID,payload:i.id}),a({type:j.a.SELECT_NODE,payload:{id:"",name:""}})},type:"text"})]});return Object(p.jsx)(m.b,{popupVisible:t,popup:()=>o,position:"top",trigger:"contextMenu",popupAlign:{top:5},children:e.children})};var D=n(237);const C=e=>{var t=Object(r.useMemo)((()=>Object(D.withSize)({monitorHeight:!0,monitorWidth:!1,refreshRate:50})(e.component)),[e.component]);return Object(p.jsx)(t,{onSize:t=>{var n;t.height&&e.instance.config.layout&&(n=e.instance.config.layout,t=Math.ceil(t.height/e.rowHeight),n.h!==t)&&e.dispatch({type:j.a.UPDATE_ONE,payload:{id:e.instance.id,key:"config.layout.h",data:t}})},dispatch:e.dispatch,instance:e.instance,isRender:e.isRender})};n(228);var S=n(145),T=(h=n(238),n.n(h));const k=()=>Object(p.jsx)("div",{className:T.a.fullPage,children:Object(p.jsx)(S.a,{description:"\u7a7a\u7a7a\u5982\u4e5f"})}),A=Object(a.WidthProvider)(d.a),I=e=>{const{state:t,mode:n,dispatch:a}=Object(r.useContext)(s.a),d=t.cld,u="render"===n,{rowHeight:h,cols:m,minHeight:x,allowOverlap:g}=e,[f,y]=Object(r.useState)(!1);E=d.children,v=m,_=u;var v,_,E=E.map((e=>{var t,n,c,a={...l,i:e.id};return e.config.layout?(t=e.config.layout,(t={...a,...t,i:e.id}).isDraggable=!_,t.isResizable=!_,0<(c=(e=t.x)+(n=t.w)-v)&&(c<=e?t.x=e-c:0<n-v&&(t.x=0,t.w=v)),t):a}));const N=e=>{const n=((e,t)=>{const n={};return e.forEach((e=>{var t=e.id;"string"==typeof t&&(n[t]=e)})),n})(d.children);e=e.map((e=>{var t=n[e.i];return{...t,config:{...t.config,layout:{...e}}}})),i()(t.cld.children,e)||a({type:j.a.UPDATE_ALL,payload:{data:e}})},D=(e,n)=>{u||(n?(n.id!==t.selectedNode.id&&a({type:j.a.SELECT_NODE,payload:{id:n.id,name:n.name}}),e.stopPropagation()):a({type:j.a.SELECT_NODE,payload:{id:"",name:""}}))};return Object(p.jsx)("div",{className:e.className,onClick:e=>D(e),children:Object(p.jsx)("div",{className:Object(b.b)("pedestal-main-container",u&&"render-mode"),children:d.children.length?Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(O,{style:{minHeight:x},display:!u&&f,rows:h,cols:m,children:Object(p.jsx)(A,{className:"pedestal-responsive-grid-layout",style:{minHeight:x},layout:E,autoSize:!0,draggableHandle:".pedestal-drag-dot",margin:[0,0],cols:m,rowHeight:h,measureBeforeMount:!0,onDragStart:()=>{y(!0)},onDragStop:e=>{y(!1),N(e)},onResizeStart:()=>{y(!0)},onResizeStop:e=>{y(!1),N(e)},allowOverlap:g,compactType:null,preventCollision:!0,useCSSTransforms:!1,children:d.children.map((e=>{var n=Object(o.a)(e.name);return n?(n=n.main,Object(p.jsxs)("div",{id:e.id,className:Object(b.b)("pedestal-item",!u&&t.selectedNode.id===e.id&&"pedestal-item-focus"),onClick:t=>D(t,e),children:[Object(p.jsx)(w,{selectedId:t.selectedNode.id,dispatch:a,config:e,cols:m,display:!u&&!f,children:e.config.observeResize?Object(p.jsx)(C,{dispatch:a,instance:e,isRender:u,component:n,rowHeight:h}):Object(p.jsx)(n,{dispatch:a,instance:e,isRender:u})}),Object(p.jsx)("div",{className:"pedestal-drag-dot",onMouseUp:()=>y(!1),children:Object(p.jsx)(c.a,{})})]},e.id)):null}))})})}):Object(p.jsx)(k,{})})})};t.b=I},189:function(e,t,n){},229:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var c=n(39),a=(n(256),n(127)),i=(n(327),n(251)),r=(n(330),n(185)),s=(t=n(37),n.n(t)),o=n(0),l=n.n(o),d=n(18),j=n(43),u=n(255);const b=[{name:"\u7b80\u6d01\u6a21\u7248",image:(t="./templates/")+"social-simple/index.jpg",template:t+"social-simple/index.json"},{name:"\u5355\u5217\u6a21\u7248",image:t+"social/index.jpg",template:t+"social/index.json"},{name:"\u53cc\u5217\u6a21\u7248",image:t+"campus/index.jpg",template:t+"campus/index.json"},{name:"FE-Czy",image:t+"czy/index.jpeg",template:t+"czy/index.json"},{name:"FE-Hty",image:t+"hty/index.jpeg",template:t+"hty/index.json"},{name:"FE-Lbz",image:t+"lbz/index.jpeg",template:t+"lbz/index.json"},{name:"BE-Lmz",image:t+"lmz/index.jpeg",template:t+"lmz/index.json"},{name:"FE-Wxy",image:t+"wxy/index.jpeg",template:t+"wxy/index.json"}];var p=n(26),h=n(3);const O=r.a.TabPane,m=e=>{const[t,n]=Object(o.useState)(!1),{state:m,dispatch:x}=Object(o.useContext)(j.a),g=Object(u.a)((e=>{i.a.confirm({title:"\u8b66\u544a",content:Object(h.jsx)("div",{className:"a-text-center",children:"\u786e\u5b9a\u8981\u52a0\u8f7d\u6a21\u7248\u5417\uff0c\u5f53\u524d\u7684\u6570\u636e\u5c06\u4f1a\u88ab\u8986\u76d6\u3002"}),confirmLoading:t,onConfirm:async()=>{n(!0),t=e.template;var t=await window.fetch(t).then((e=>e.json())).catch((()=>null));if(n(!1),!t)return a.a.error("\u6a21\u7248\u52a0\u8f7d\u5931\u8d25");t.user="Czy",t.date=new Date,x({type:d.a.INIT_STATE,payload:t})}})})),f=Object(o.useMemo)((()=>{const e=[];return b.forEach(((t,n)=>{n%2==0?e.push([t]):e[Math.floor(n/2)].push(t)})),e}),[]),y=e=>{if(e)return Object(h.jsxs)("div",{className:s.a.preview,children:[Object(h.jsx)("div",{className:s.a.imgContainer,children:Object(h.jsx)("img",{src:e.image})}),Object(h.jsx)("div",{className:s.a.name,children:e.name})]})};var v=Object(o.useMemo)((()=>Object(h.jsx)(l.a.Fragment,{children:Object(h.jsx)("div",{className:s.a.template,children:f.map(((e,t)=>Object(h.jsxs)("div",{className:s.a.row,children:[Object(h.jsx)("div",{className:s.a.item,onClick:()=>e[0]&&g(e[0]),children:y(e[0])}),Object(h.jsx)("div",{className:Object(p.b)(s.a.item,!e[1]&&s.a.hidden),onClick:()=>e[1]&&g(e[1]),children:y(e[1])})]},t)))})})),[f,g]);const _=Object(u.a)((e=>{e.id,m.selectedNode.id,x({type:d.a.SELECT_NODE,payload:{id:e.id,name:e.name}})})),E=Object(u.a)((e=>{x({type:d.a.DELETE_ONE_BY_UUID,payload:e.id}),x({type:d.a.SELECT_NODE,payload:{id:"",name:""}})}));var N=Object(o.useMemo)((()=>Object(h.jsx)("div",{className:s.a.structure,children:m.cld.children.map((e=>Object(h.jsxs)("div",{className:Object(p.b)(s.a.item,m.selectedNode.id===e.id&&s.a.active),children:[Object(h.jsx)("div",{className:Object(p.b)(s.a.title,"a-text-ellipsis"),onClick:()=>_(e),children:Object(h.jsx)("div",{className:"a-text-ellipsis",children:e.id})}),Object(h.jsx)("div",{className:s.a.op,onClick:()=>E(e),children:Object(h.jsx)(c.a,{})})]},e.id)))})),[E,_,m.cld.children,m.selectedNode.id]);return e.mobile?Object(h.jsx)("div",{className:Object(p.b)(e.className,s.a.container),children:v}):Object(h.jsx)("div",{className:Object(p.b)(e.className,s.a.container),children:Object(h.jsxs)(r.a,{destroyOnHide:!0,children:[Object(h.jsx)(O,{title:"\u6a21\u7248",children:v},"template"),Object(h.jsx)(O,{title:"\u7ed3\u6784",children:N},"structure")]})})}},238:function(e,t,n){e.exports={fullPage:"empty_fullPage__pYRH7"}},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var c=n(34);const a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((e=>Object(c.e)(e))).join(" ")},i=a},264:function(e,t,n){},34:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return o}));const c=Object.prototype.toString,a=e=>null==e;function i(e){return"[object Object]"===c.call(e)}function r(e){return/^(-|\+)?\d+(\.\d+)?$/.test(String(e))}function s(e){return"[object String]"===c.call(e)}function o(){return!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||document.body.clientWidth<800}},356:function(e,t,n){},37:function(e,t,n){e.exports={container:"control-panel_container__1WB3z",template:"control-panel_template__2dY0x",row:"control-panel_row__3JAXi",item:"control-panel_item__2g6jx",hidden:"control-panel_hidden__2o5W8",preview:"control-panel_preview__2KuJz",imgContainer:"control-panel_imgContainer__2ZRwe",name:"control-panel_name__2UvJz",structure:"control-panel_structure__3nNek",active:"control-panel_active__3_F2g",icon:"control-panel_icon__2zbTn",title:"control-panel_title__198IC",op:"control-panel_op__3cbCj"}},384:function(e,t,n){},397:function(e,t,n){},398:function(e,t,n){},424:function(e,t,n){"use strict";n.r(t);t=n(19),t=n.n(t);var c=(n(189),n(264),n(44)),a=n.n(c),i=n(0),r=n.n(i);const s=(e,t)=>{const n=Object(i.useRef)(!1);Object(i.useEffect)((()=>{if(n.current)return e();n.current=!0}),t)};var o=n(18),l=n(43),d=n(106),j=n(177),u=n(3);const b=a()((e=>e()),500);var p=()=>{const{state:e,dispatch:t}=Object(i.useContext)(l.a);return Object(i.useEffect)((()=>{var e=Object(j.a)("l").get(d.a);e&&t({type:o.a.INIT_STATE,payload:e})}),[t]),s((()=>{b((()=>{Object(j.a)("l").set(d.a,e.cld)}))}),[e.cld]),Object(i.useEffect)((()=>{}),[e.selectedNode]),Object(u.jsx)(u.Fragment,{})},h=n(229),O=(n(356),n(60)),m=(n(178),n(99)),x=(n(124),n(98)),g=n(56),f=n(255),y=(c=n(231),n.n(c));const v=e=>{const t=Object(i.useRef)(null),{state:n,dispatch:c}=e,r=n.selectedNode.id,s=Object(g.c)(n.cld.children,r).style;return e=Object(f.a)(a()(((e,t)=>{if(t.style){let n={};try{if(!(n=y()(t.style)[""]))return;n=Object.keys(n).map((e=>[e.replace(/-(\w)/g,((e,t)=>t.toUpperCase())),n[e]])).reduce(((e,t)=>{var[t,n]=t;return e[t]=n,e}),{})}catch(e){}0<Object.keys.length&&c({type:o.a.UPDATE_ONE,payload:{id:r,key:"style",data:n,merge:!1}})}}),300)),Object(i.useEffect)((()=>{var e=Object.entries(s).map((e=>{var[e,t]=e;return"    ".concat(e,": ").concat(t,";")}));t.current&&t.current.resetFields(),t.current&&t.current.setFieldsValue({style:"{\n".concat(e.join("\n"),"\n}")})}),[s]),Object(u.jsx)(m.a,{ref:t,layout:"vertical",size:"mini",onChange:e,children:Object(u.jsx)(m.a.Item,{label:"\u6837\u5f0f",field:"style",children:Object(u.jsx)(x.a.TextArea,{autoSize:!0})})})},_=e=>{const{state:t,dispatch:n}=Object(i.useContext)(l.a);var c=Object(i.useMemo)((()=>{var[e]=t.selectedNode.name.split(".");return(e=e&&Object(O.a)(e))&&e.main?(e=e.editor,Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)(e,{state:t,dispatch:n}),Object(u.jsx)(v,{state:t,dispatch:n})]})):null}),[t.selectedNode.id]);return Object(u.jsx)("div",{className:e.className,children:Object(u.jsx)("div",{className:"view-editor-panel",children:Object(u.jsx)("div",{className:"view-container-body",children:c||Object(u.jsx)("div",{className:"a-fontsize-13 a-color-grey",children:"\u9009\u62e9\u7ec4\u4ef6\u4ee5\u7f16\u8f91"})})})})};var E=n(188),N=n(34);const w=e=>Object(u.jsx)(i.Suspense,{fallback:Object(u.jsx)(u.Fragment,{}),children:e.component});var D=n(26),C=(c=n(51),n.n(c));const S=[];window.store=window.store||{};const T=()=>{const{state:e,dispatch:t}=Object(i.useContext)(l.a);var n=Object(i.useMemo)((()=>S.map((e=>e.module.control))),[]);const c=Object(f.a)((n=>{var c;e.selectedNode.id?(c=Object(g.b)(e.cld.children,e.selectedNode.id),Object(N.a)(c)||t({type:o.a.ADD_SECTION,payload:{config:n,index:c}})):t({type:o.a.ADD_SECTION,payload:{config:n}}),t({type:o.a.SELECT_NODE,payload:{id:n.id,name:n.name}})}));return Object(u.jsx)("div",{className:C.a.opGroup,children:n.map(((e,t)=>Object(u.jsx)(r.a.Fragment,{children:Object(u.jsx)("div",{className:Object(D.b)(C.a.op),onClick:()=>c(e.getConfig()),onMouseDown:e=>e.stopPropagation(),children:e.icon})},t)))})};var k=n(241),A=(n(205),n(72)),I=n(46),L=(n(168),n(52)),z=n(240),P=(n(86),n(28)),R=n(239),U=n(69);const M=e=>{const t=Object(i.useContext)(l.a).dispatch,{history:n,undoable:c,redoable:a}=Object(U.b)();return Object(u.jsxs)("div",{className:Object(D.b)(C.a.externalGroup),children:[Object(u.jsxs)("div",{className:C.a.history,children:[Object(u.jsx)(P.a,{onClick:()=>{var e=c&&n.undo();e&&t({type:"REPLACE_STATE",payload:e})},disabled:!c,iconOnly:!0,icon:Object(u.jsx)(R.a,{}),type:"text",size:"small"}),Object(u.jsx)(P.a,{onClick:()=>{var e=a&&n.redo();e&&t({type:"REPLACE_STATE",payload:e})},disabled:!a,iconOnly:!0,icon:Object(u.jsx)(z.a,{}),type:"text",size:"small"})]}),Object(u.jsx)(A.a,{droplist:Object(u.jsxs)(L.a,{className:C.a.menu,children:[Object(u.jsx)(L.a.Item,{children:Object(u.jsx)("a",{target:"_blank",href:"https://github.com/WindrunnerMax/ResumeEditor",children:"GitHub"})},"-1"),Object(u.jsx)(L.a.Item,{children:Object(u.jsx)("a",{target:"_blank",href:"https://github.com/WindrunnerMax/ResumeEditor#%E5%AF%BC%E5%87%BApdf",children:"\u5bfc\u51fa\u529f\u80fd"})},"0"),Object(u.jsx)(L.a.Item,{children:Object(u.jsx)("a",{target:"_blank",href:"https://github.com/WindrunnerMax/ResumeEditor/issues/2",children:"\u5e38\u89c1\u95ee\u9898"})},"1")]}),trigger:"click",position:"br",children:Object(u.jsxs)(P.a,{size:"mini",type:"text",children:["\u4f7f\u7528\u5fc5\u8bfb",Object(u.jsx)(I.a,{})]})}),Object(u.jsx)(A.a,{droplist:Object(u.jsx)(L.a,{className:C.a.menu,children:Object(u.jsx)(L.a.Item,{children:Object(u.jsx)("a",{href:"?preview",target:"_blank",children:"\u5b9e\u65f6\u9884\u89c8"})},"1")}),trigger:"click",position:"br",children:Object(u.jsxs)(P.a,{size:"mini",type:"text",children:["\u64cd\u4f5c",Object(u.jsx)(I.a,{})]})}),Object(u.jsx)(A.a,{droplist:Object(u.jsxs)(L.a,{className:C.a.menu,children:[Object(u.jsx)(L.a.Item,{children:Object(u.jsx)("div",{className:C.a.export,onClick:()=>e.exportPDF(),children:"PDF"})},"0"),Object(u.jsx)(L.a.Item,{children:Object(u.jsx)("a",{href:"?json",target:"_blank",children:"JSON"})},"1")]}),trigger:"click",position:"br",children:Object(u.jsxs)(P.a,{size:"mini",type:"text",children:["\u5bfc\u51fa",Object(u.jsx)(I.a,{})]})}),Object(u.jsx)("a",{className:C.a.github,target:"_blank",href:"https://github.com/WindrunnerMax/ResumeEditor",children:Object(u.jsx)(k.a,{})})]})},F=e=>Object(u.jsxs)("div",{className:Object(D.b)(C.a.container,"header-container"),children:[Object(u.jsx)(T,{}),Object(u.jsx)(M,{exportPDF:e.exportPDF})]}),H=Object(i.lazy)((()=>Promise.all([n.e(3),n.e(4)]).then(n.bind(null,445)))),B=Object(i.lazy)((()=>n.e(6).then(n.bind(null,447)))),W=Object(i.lazy)((()=>n.e(5).then(n.bind(null,446)))),V=null!==(c=new URL(location.href).searchParams).get("preview"),J=null!==c.get("json");c=()=>{const[e,t]=Object(i.useState)(!1);return s((()=>{e&&(window.print(),t(!1))}),[e]),Object(N.b)()?Object(u.jsx)(w,{component:Object(u.jsx)(W,{})}):V?Object(u.jsx)(w,{component:Object(u.jsx)(B,{})}):J?Object(u.jsx)(w,{component:Object(u.jsx)(H,{})}):Object(u.jsx)("div",{className:"resume-editor",spellCheck:!1,children:Object(u.jsxs)(l.b,{mode:e?"render":"editor",children:[Object(u.jsx)(p,{}),Object(u.jsx)(F,{exportPDF:()=>{t(!0)}}),Object(u.jsxs)("div",{className:"editor-body",children:[Object(u.jsx)(h.a,{className:"control-panel"}),Object(u.jsx)(E.a,{className:"main-panel",rowHeight:8,cols:60,minHeight:"296mm",allowOverlap:!0}),Object(u.jsx)(_,{className:"editor-panel"})]})]})})};var G=(n(173),{icon:Object(u.jsxs)("svg",{viewBox:"0 0 1024 1024",className:"arco-icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",children:[Object(u.jsx)("path",{d:"M704 358.5m-64 0a64 64 0 1 0 128 0 64 64 0 1 0-128 0Z"}),Object(u.jsx)("path",{d:"M919.5 136.5h-815c-22.1 0-40 17.9-40 40v671c0 22.1 17.9 40 40 40h815c22.1 0 40-17.9 40-40v-671c0-22.1-17.9-40-40-40z m-807 703V640.8l15.4-12.9c0.4-0.4 42.9-35.5 108.3-59 85.8-30.8 169-28 247.1 8.4 63.2 29.4 114.4 74.1 152.3 132.7 30.4 47.2 45.8 95 50.1 124l0.8 5.5h-574z m799 0H735.1l-1.8-12.5c-2.4-16.1-13.2-72.7-54.2-138.1 3.6-8 11.2-22.5 23.6-37.7 20.9-25.5 46-42.2 74.7-49.4 66.2-16.7 133.4 15.2 134 15.5v-51.8c-29.5-10.5-86.6-25.3-145.8-10.3-50.8 12.9-84.6 45.4-103.9 70.4-5.4 7-10 13.8-13.7 19.9-12.6-15.4-26.3-29.9-40.9-43.2-30.5-27.8-65.3-50.9-103.4-68.6-49.8-23.2-102.4-34.6-156-33.9-42.8 0.6-86.3 8.8-129.3 24.5-49.2 17.9-86.2 41.3-105.8 55.1V184.5h799v655z"})]}),name:"\u56fe\u7247",getConfig:()=>Object(O.b)(q)}),Y=(n(426),n(252)),K=n(242),Q=(n(174),n(253)),X=e=>Object(u.jsx)("div",{className:Object(D.a)("pedestal-image",e.className),children:Object(u.jsx)(Q.a,{className:"pedestal-image",...e.instance.props,style:e.instance.style})});X.defaultProps={className:""};const q={type:"local",name:"image",props:{src:"./favicon.ico"},config:{layout:{i:"",x:0,y:0,w:20,h:20,isDraggable:!0,isResizable:!0,minW:2,minH:2}},module:{control:G,main:X,editor:e=>{const t=Object(i.useRef)(null),{state:n,dispatch:c}=e,r=n.selectedNode.id,s=Object(g.c)(n.cld.children,r).props,l=Object(f.a)(a()((e=>{c({type:o.a.UPDATE_ONE,payload:{id:r,key:"props",data:e}})}),300));return Object(i.useEffect)((()=>{t.current&&t.current.resetFields(),t.current&&t.current.setFieldsValue(s)}),[s]),Object(u.jsx)("div",{children:Object(u.jsx)(m.a,{ref:t,layout:"vertical",size:"mini",onChange:(e,t)=>{l(t)},children:Object(u.jsx)(m.a.Item,{label:"src",field:"src",children:Object(u.jsx)(x.a,{addAfter:Object(u.jsx)(Y.a,{className:"image-editor-upload",accept:"image/*",action:"xxx/url",beforeUpload:e=>new Promise((n=>{const c=new FileReader;c.readAsDataURL(e),n(!(c.onload=()=>{l({src:c.result}),t.current&&t.current.setFieldsValue({src:c.result})}))})),onChange:()=>{},showUploadList:!1,withCredentials:!0,children:Object(u.jsx)(K.a,{})})})})})})}}};n(175);G={icon:Object(u.jsx)("svg",{viewBox:"0 0 1024 1024",className:"arco-icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",children:Object(u.jsx)("path",{d:"M885.005342 152.185075c0 16.95823-13.750165 30.707372-30.709419 30.707372L169.703053 182.892447c-16.95823 0-30.708396-13.749142-30.708396-30.707372l0 0c0-16.959254 13.750165-30.708396 30.708396-30.708396l684.59287 0C871.255177 121.475656 885.005342 135.224798 885.005342 152.185075L885.005342 152.185075 885.005342 152.185075zM512.002047 902.523321c-16.963347 0-30.708396-13.745049-30.708396-30.707372L481.293651 153.189961c0-16.959254 13.746072-30.708396 30.708396-30.708396l0 0c16.95823 0 30.704302 13.749142 30.704302 30.708396l0 718.630081C542.706349 888.778272 528.960277 902.523321 512.002047 902.523321L512.002047 902.523321 512.002047 902.523321z"})}),name:"\u6587\u5b57",getConfig:()=>Object(O.b)(ye)};var Z=(n(425),n(109)),$=n(22),ee=n(1),te=n(432),ne=n(439),ce=n(433),ae=n(149),ie=n(244),re=n(245),se=n(186),oe=n(246),le=n(247),de=n(248),je=n(249),ue=n(250),be=n(182),pe=n(243),he=n(100),Oe=n(183),me=n(184),xe=n(434),ge=n(435);const fe={[n(436).a]:{isVoid:!0},[pe.a]:{isVoid:!0}};X=e=>{const t=Object(i.useMemo)((()=>Object(te.a)(fe,Object(Z.b)(Object($.f)(Object(ee.j)())))),[]);var n=e.instance.props.text||[{children:[{text:""}]}],c=Object(f.a)(a()((t=>{e.dispatch({type:o.a.UPDATE_ONE_NO_UNDO,payload:{id:e.instance.id,key:"props",data:{text:t}}})}),500));const{renderElement:r,renderLeaf:s,onKeyDown:l,commands:d,onCopy:j}=Object(i.useMemo)((()=>{var n=new ne.a(Object(ce.a)(),Object(ae.b)(t),Object(ie.b)(),Object(re.b)(t),Object(se.b)(t,e.isRender),Object(oe.b)(),Object(le.b)(),Object(de.b)(),Object(je.b)(),Object(ue.b)(t),Object(be.b)(t),Object(pe.b)(),Object(he.b)(),Object(Oe.b)(),Object(me.b)()),c=n.getCommands();return n.add(Object(xe.a)(t,c)),n.apply()}),[t,e.isRender]);return Object(u.jsx)("div",{className:Object(D.a)("pedestal-text",e.className),style:e.instance.style,children:Object(u.jsxs)($.c,{editor:t,value:n,onChange:c,children:[Object(u.jsx)("div",{onClick:e=>e.stopPropagation(),children:Object(u.jsx)(ge.a,{readonly:e.isRender,commands:d,editor:t})}),Object(u.jsx)($.a,{renderElement:r,renderLeaf:s,readOnly:e.isRender,placeholder:"Enter text ...",onKeyDown:l,onCopy:e=>j(e,t)})]})})},X.defaultProps={className:""};const ye={type:"local",name:"rich-text",config:{layout:{i:"",x:0,y:0,w:20,h:3,isDraggable:!0,isResizable:!0,minW:4,minH:2},observeResize:!0},module:{control:G,main:X,editor:()=>Object(u.jsx)(u.Fragment,{})}};n(176);const ve={type:"local",name:"blank",config:{layout:{i:"",x:0,y:0,w:10,h:3,isDraggable:!0,isResizable:!0,minW:1,minH:1}},module:{control:{icon:Object(u.jsx)("svg",{viewBox:"0 0 1024 1024",className:"arco-icon",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:"1em",height:"1em",fill:"currentColor",children:Object(u.jsx)("path",{d:"M915.2 870.4H108.8a57.664 57.664 0 0 1-57.6-57.6V211.2a57.664 57.664 0 0 1 57.6-57.6h806.4a57.664 57.664 0 0 1 57.6 57.6v601.6a57.664 57.664 0 0 1-57.6 57.6zM108.8 204.8a6.4 6.4 0 0 0-6.4 6.4v601.6a6.4 6.4 0 0 0 6.4 6.4h806.4a6.4 6.4 0 0 0 6.4-6.4V211.2a6.4 6.4 0 0 0-6.4-6.4z"})}),name:"\u7a7a\u767d",getConfig:()=>Object(O.b)(ve)},main:e=>Object(u.jsx)("div",{className:Object(D.a)("pedestal-main-image",e.className),style:e.instance.style}),editor:()=>Object(u.jsx)(u.Fragment,{})}};!function(){S.push(...arguments),function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach((e=>{e.name in S&&console.warn("".concat(e.name," is duplicate")),window.store[e.name]=e}))}(...arguments)}(q,ve,ye),t.a.render(Object(u.jsx)(c,{}),document.getElementById("root"))},43:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return l}));t=n(0);var c=n(106),a=n(230),i=n(3);const r={EDITOR:"editor",RENDER:"render"},s={state:{cld:{user:"",date:new Date,children:[]},selectedNode:{id:"",name:""}},mode:r.EDITOR,dispatch:()=>{}},o=Object(t.createContext)(s),l=e=>{var{mode:e=r.EDITOR,children:t}=e,[n,l]=Object(a.a)(c.b,s.state);return Object(i.jsx)(o.Provider,{value:{state:n,mode:e,dispatch:l},children:t})}},51:function(e,t,n){e.exports={container:"header_container__1wdME",opGroup:"header_opGroup__10sQJ",op:"header_op__3arri",active:"header_active__29UpW",externalGroup:"header_externalGroup__gAO-e",history:"header_history__PLIbq",github:"header_github__27qrt",menu:"header_menu__thVw3",resizeModal:"header_resizeModal__1xwbB",modalContent:"header_modalContent__CL-Mn",input:"header_input__1XatW"}},56:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return s}));var c=n(34);const a=(e,t)=>{if(t)for(let n=0,c=e.length;n<c;++n)if(e[n].id===t)return n;return null},i=(e,t)=>{if(t){var n=[];for(n.push(e);n.length;)for(const e of n.pop()){if(e.id===t)return e;n.push(e.children)}}return null},r=(e,t)=>{if(t){var n=[];for(n.push(e);n.length;){var c=n.pop(),a=c.length;for(let e=0;e<a;++e){var i=c[e];if(i.id===t)return c.splice(e,1),!0;n.push(i.children)}}}return!1},s=(e,t,n,a,r)=>{if(!(e=i(e,t)))return!1;let s=e;var o=n.split(".");t=o[o.length-1];for(let i=0,l=o.length-1;i<l;++i){if(!Object(c.c)(s))return!1;s=s[o[i]]}return!!Object(c.c)(s)&&(e=s[t],Object(c.c)(e)&&Object(c.c)(a)?s[t]=r?{...e,...a}:{...a}:s[t]=a,!0)}},60:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));t=n(88);var c=n.n(t),a=n(187);const i=(e,t)=>{const{module:n,...i}=e;return c()({id:Object(a.a)(),config:{},style:{},props:{},children:[],...i,...t})};function r(e){if(window.store[e])return window.store[e].module}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));t=n(88);var c=n.n(t),a=n(0);const i=new class{constructor(){this.current=void 0,this.undoStack=void 0,this.redoStack=void 0,this.max=void 0,this.events=void 0,this.undoStack=[],this.redoStack=[],this.max=10,this.events=[],this.current=null}collect(e){this.current&&(this.undoStack.push(this.current),this.redoStack=[],this.undoStack.length>this.max)&&this.undoStack.shift(),this.current=c()(e),this.call("collect")}undo(){var e=this.undoStack.pop();return e?(this.current&&this.redoStack.push(this.current),this.current=e,this.call("undo"),e):null}redo(){var e=this.redoStack.pop();return e?(this.current&&this.undoStack.push(this.current),this.current=e,this.call("redo"),e):null}undoable(){return 0<this.undoStack.length}redoable(){return 0<this.redoStack.length}clear(){this.redoStack=[],this.undoStack=[],this.call("clear")}on(e){this.events.push(e)}off(e){-1<(e=this.events.indexOf(e))&&this.events.splice(e,1)}call(e){this.events.forEach((t=>{t({type:e,undoLength:this.undoStack.length,redoLength:this.redoStack.length})}))}},r=()=>{const e=Object(a.useRef)(!1),[,t]=Object(a.useState)({});var n=i.undoable(),c=i.redoable();const r=()=>{e.current&&t({})};return Object(a.useEffect)((()=>(i.on(r),e.current=!0,()=>{i.off(r),e.current=!1})),[]),{history:i,undoable:n,redoable:c}}}},[[424,1,2]]]);