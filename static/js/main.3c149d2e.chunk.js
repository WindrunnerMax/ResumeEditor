(this["webpackJsonpresume-editor"]=this["webpackJsonpresume-editor"]||[]).push([[0],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s}));var c=n(35),a=n(52),i=n(20),r=n(62),o="cld",s=function(e,t){switch(t.type){case i.a.INIT_STATE:e.cld=t.payload;break;case i.a.REPLACE_STATE:e.cld=t.payload,e.selectedNode.id&&(e.selectedNode={id:"",name:""});break;case i.a.ADD_SECTION:var n=(o=t.payload).config,o=o.index;Object(c.a)(o)?e.cld.children.push(n):e.cld.children.splice(o+1,0,n),r.a.collect(e.cld);break;case i.a.ADD_CHILD_SECTION:n=(s=t.payload).uuid;var s=s.config;(n=Object(a.c)(e.cld.children,n))&&n.children.push(s),r.a.collect(e.cld);break;case i.a.DELETE_SECTION:s=t.payload,e.cld.children.splice(s,1),r.a.collect(e.cld);break;case i.a.DELETE_ONE_BY_UUID:var l=t.payload;Object(a.a)(e.cld.children,l),r.a.collect(e.cld);break;case i.a.UPDATE_ONE:l=(j=t.payload).id;var u=j.key,d=j.data,j=void 0===(j=j.merge)||j;Object(a.d)(e.cld.children,l,u,d,j),r.a.collect(e.cld);break;case i.a.UPDATE_ONE_NO_UNDO:u=(b=t.payload).id,d=b.key,j=b.data;var b=void 0===(b=b.merge)||b;Object(a.d)(e.cld.children,u,d,j,b);break;case i.a.UPDATE_ALL:b=t.payload.data,e.cld.children=b,r.a.collect(e.cld);break;case i.a.SELECT_NODE:if(e.selectedNode.id===t.payload.id)break;e.selectedNode=t.payload}}},124:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return a}));var c=[];window.store=window.store||{};var a=function(){c.push.apply(c,arguments),i.apply(void 0,arguments)},i=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach((function(e){e.name,window.store[e.name]=e}))}},163:function(e,t,n){},165:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){"use strict";function c(e,t,n,c,a,i,r){if(void 0===e)return new Date;if(e instanceof Date||"number"==typeof e&&void 0===t)return new Date(e);if("number"==typeof e&&"number"==typeof t)return new Date(e,t,n||1,c||0,a||0,i||0,r||0);if("string"==typeof e)return new Date(e.replace(/-/g,"/"));throw new Error("No suitable parameters")}function a(e){return String(e).replace(/-storage$/g,"")+"-storage"}t.a=function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"local",t="local"===e||"l"===e?window.localStorage:window.sessionStorage;return{has:function(e){return e=a(e),!!t.getItem(e)},get:function(e){var n=a(e);return null===(e=t.getItem(n))?null:(e=function(e){try{var t=JSON.parse(e);return Number.isNaN(t.expire)||t.expire&&c().getTime()>t.expire?null:t.origin}catch(e){return null}}(e),null===e&&this.remove(n),e)},set:function(e,n){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;e=a(e),c=function(e,t){return e={origin:e,expire:null},t&&(e.expire=t.getTime()),JSON.stringify(e)}(n,c);return t.setItem(e,c)},remove:function(e){return e=a(e),t.removeItem(e)},clear:function(){return t.clear()}}}},178:function(e,t,n){"use strict";function c(e){var t=Object(l.useState)(0),n=Object(s.a)(t,2),c=(t=n[0],n[1]),a=Object(l.useRef)(null),i=Object(p.a)((function(){var t;a.current&&(t=a.current.getBoundingClientRect().width-2,c(t/e.cols))}));return Object(l.useEffect)((function(){return i(),window.addEventListener("resize",i),function(){window.removeEventListener("resize",i)}}),[i,e.cols]),Object(m.jsx)("div",{className:Object(h.a)("pedestal-main-reference-line",e.className,e.display&&"enable"),style:Object(o.a)({backgroundSize:"".concat(t,"px ").concat(e.rows,"px"),backgroundPositionX:t/2,backgroundPositionY:-e.rows/2},e.style),ref:a,children:e.children})}n.d(t,"a",(function(){return R}));var a=n(135),i=n(231),r=n.n(i),o=n(27),s=n(3),l=(n(379),n(0)),u=n(46),d=n(54),j={x:0,y:0,w:10,h:30,isDraggable:!0,isResizable:!0,minW:1,minH:1},b=n(170),f=n.n(b),O=(n(36),n(20)),p=(n(392),n(251)),h=n(50),m=n(2);function v(e){var t=e.selectedId,n=e.dispatch,c=e.config,a=e.cols,i=Object(m.jsxs)("div",{className:"pedestal-main-item-toolbar",children:[Object(m.jsx)(D.a,{icon:Object(m.jsx)(_.a,{}),onClick:function(){var e=Object(T.a)(),t={config:Object(o.a)(Object(o.a)({},k()(c)),{},{id:e})};Object(C.c)(t.config.config.layout)&&(t.config.config.layout.i=e),n({type:O.a.ADD_SECTION,payload:t})},type:"text"}),Object(m.jsx)(D.a,{icon:Object(m.jsx)(w.a,{}),onClick:function(){c.config.layout&&n({type:O.a.UPDATE_ONE,payload:{id:c.id,key:"config.layout.w",data:a}})},type:"text"}),Object(m.jsx)(D.a,{icon:Object(m.jsx)(S.a,{}),onClick:function(){var e;c.config.layout&&(e=c.config.layout,n({type:O.a.UPDATE_ONE,payload:{id:c.id,key:"config.layout.x",data:a/2-e.w/2}}))},type:"text"}),Object(m.jsx)(D.a,{icon:Object(m.jsx)(N.a,{}),onClick:function(){n({type:O.a.DELETE_ONE_BY_UUID,payload:c.id}),n({type:O.a.SELECT_NODE,payload:{id:"",name:""}})},type:"text"})]});return Object(m.jsx)(E.b,{popupVisible:e.display&&t===c.id,popup:function(){return i},position:"top",trigger:"contextMenu",popupAlign:{top:5},children:e.children})}function y(e){var t=Object(l.useMemo)((function(){return Object(A.withSize)({monitorHeight:!0,monitorWidth:!1,refreshRate:50})(e.component)}),[e.component]);return Object(m.jsx)(t,{onSize:function(t){var n;t.height&&e.instance.config.layout&&(n=e.instance.config.layout,t=Math.ceil(t.height/e.rowHeight),n.h!==t&&e.dispatch({type:O.a.UPDATE_ONE,payload:{id:e.instance.id,key:"config.layout.h",data:t}}))},dispatch:e.dispatch,instance:e.instance,isRender:e.isRender})}function g(){return Object(m.jsx)("div",{className:L.a.fullPage,children:Object(m.jsx)(P.a,{description:"\u7a7a\u7a7a\u5982\u4e5f"})})}c.defaultProps={className:""};var x=c,E=(n(99),n(56)),N=n(88),S=n(233),w=n(134),D=(n(97),n(33)),_=n(232),k=(i=n(83),n.n(i)),T=(n(394),n(177)),C=n(35),A=n(234),P=(n(217),n(138)),L=(i=n(235),n.n(i)),I=Object(b.WidthProvider)(f.a),R=function(e){function t(e,t){N||(t?(t.id!==b.selectedNode.id&&p({type:O.a.SELECT_NODE,payload:{id:t.id,name:t.name}}),e.stopPropagation()):p({type:O.a.SELECT_NODE,payload:{id:"",name:""}}))}function n(){T(!1)}var c,i,b=(_=Object(l.useContext)(u.a)).state,f=_.mode,p=_.dispatch,E=b.cld,N="render"===f,S=e.rowHeight,w=e.cols,D=e.minHeight,_=e.allowOverlap,k=(f=Object(l.useState)(!1),(f=Object(s.a)(f,2))[0]),T=f[1];f=E.children,c=w,i=N,f=f.map((function(e){var t=Object(o.a)(Object(o.a)({},j),{},{i:e.id});if(e.config.layout){var n=e.config.layout,a=Object(o.a)(Object(o.a)(Object(o.a)({},t),n),{},{i:e.id});a.isDraggable=!i,a.isResizable=!i;var r=a.x;return 0<(e=r+(n=a.w)-c)&&(e<=r?a.x=r-e:0<n-c&&(a.x=0,a.w=c)),a}return t}));return Object(m.jsx)("div",{className:e.className,onClick:function(e){return t(e)},children:Object(m.jsx)("div",{className:Object(h.b)("pedestal-main-container",N&&"render-mode"),children:E.children.length?Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(x,{style:{minHeight:D},display:!N&&k,rows:S,cols:w,children:Object(m.jsx)(I,{className:"pedestal-responsive-grid-layout",style:{minHeight:D},layout:f,autoSize:!0,draggableHandle:".pedestal-drag-dot",margin:[0,0],onLayoutChange:function(e){var t,n,c=(t=E.children,"id",n={},t.forEach((function(e){var t=e.id;"string"==typeof t&&(n[t]=e)})),n);e=e.map((function(e){var t=c[e.i];return Object(o.a)(Object(o.a)({},t),{},{config:Object(o.a)(Object(o.a)({},t.config),{},{layout:Object(o.a)({},e)})})}));r()(b.cld.children,e)||p({type:O.a.UPDATE_ALL,payload:{data:e}})},cols:w,rowHeight:S,measureBeforeMount:!0,onDragStart:function(){T(!0)},onDragStop:n,onResizeStart:function(){T(!0)},onResizeStop:function(){T(!1)},allowOverlap:_,compactType:null,preventCollision:!0,useCSSTransforms:!1,children:E.children.map((function(e){var c=Object(d.a)(e.name);return c?(c=c.main,Object(m.jsxs)("div",{id:e.id,className:Object(h.b)("pedestal-item",!N&&b.selectedNode.id===e.id&&"pedestal-item-focus"),onClick:function(n){return t(n,e)},children:[Object(m.jsx)(v,{selectedId:b.selectedNode.id,dispatch:p,config:e,cols:w,display:!N&&!k,children:e.config.observeResize?Object(m.jsx)(y,{dispatch:p,instance:e,isRender:N,component:c,rowHeight:S}):Object(m.jsx)(c,{dispatch:p,instance:e,isRender:N})}),Object(m.jsx)("div",{className:"pedestal-drag-dot",onMouseUp:n,children:Object(m.jsx)(a.a,{})})]},e.id)):null}))})})}):Object(m.jsx)(g,{})})})};t.b=R},180:function(e,t,n){},20:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c={INIT_STATE:"INIT_STATE",REPLACE_STATE:"REPLACE_STATE",ADD_SECTION:"ADD_SECTION",ADD_CHILD_SECTION:"ADD_CHILD_SECTION",SWAP_SECTION:"SWAP_SECTION",DELETE_SECTION:"DELETE_SECTION",DELETE_ONE_BY_UUID:"DELETE_ONE_BY_UUID",UPDATE_ONE:"UPDATE_ONE",UPDATE_ONE_NO_UNDO:"UPDATE_ONE_NO_UNDO",SELECT_NODE:"SELECT_NODE",UPDATE_ALL:"UPDATE_ALL"}},219:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var c=n(223),a=(t=n(26),n.n(t)),i=(n(253),n(119)),r=n(222),o=(n(326),n(247)),s=n(3),l=(n(329),n(0)),u=n(20),d=n(46),j=n(124),b=n(52),f=n(35),O=n(251),p=[{label:(t="./templates/")+"social-simple.jpg",name:"\u7b80\u6d01\u6a21\u7248",template:t+"social-simple.json"},{label:t+"social.jpg",name:"\u5355\u5217\u6a21\u7248",template:t+"social.json"},{label:t+"campus.jpg",name:"\u53cc\u5217\u6a21\u7248",template:t+"campus.json"}],h=n(2),m=function(e){var t=Object(l.useState)(!1),n=(N=Object(s.a)(t,2))[0],m=N[1],v=(t=Object(l.useContext)(d.a)).state,y=t.dispatch,g=j.a.map((function(e){return e.module.control})),x=Object(O.a)((function(e){var t;v.selectedNode.id?(t=Object(b.b)(v.cld.children,v.selectedNode.id),Object(f.a)(t)||y({type:u.a.ADD_SECTION,payload:{config:e,index:t}})):y({type:u.a.ADD_SECTION,payload:{config:e}}),y({type:u.a.SELECT_NODE,payload:{id:e.id,name:e.name}})})),E=Object(O.a)((function(e){var t;o.a.confirm({title:"\u8b66\u544a",content:"\u786e\u5b9a\u8981\u52a0\u8f7d\u6a21\u7248\u5417\uff0c\u5f53\u524d\u7684\u6570\u636e\u5c06\u4f1a\u88ab\u8986\u76d6\u3002",confirmLoading:n,onConfirm:(t=Object(r.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return m(!0),t.next=3,window.fetch(e).then((function(e){return e.json()})).catch((function(){return null}));case 3:if(n=t.sent,m(!1),n){t.next=7;break}return t.abrupt("return",i.a.error("\u6a21\u7248\u52a0\u8f7d\u5931\u8d25"));case 7:n.user="Czy",n.date=new Date,y({type:u.a.INIT_STATE,payload:n});case 10:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})})})),N=Object(l.useMemo)((function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"view-container-title a-y-center",children:[Object(h.jsx)(c.a,{style:{fontSize:18}}),Object(h.jsx)("span",{className:"a-ml",children:"\u9884\u8bbe"})]}),Object(h.jsx)("div",{className:"sub-title",children:"\u7ec4\u4ef6"}),Object(h.jsx)("div",{className:"view-container-body pedestal-control-container",children:g.map((function(e,t){return Object(h.jsx)("div",{className:"control-button-container",children:Object(h.jsxs)("div",{className:"a-x-center a-y-center a-flex-column a-pointer control-button",onClick:function(){return x(e.getConfig())},children:[e.icon,Object(h.jsx)("div",{children:e.name})]})},t)}))})]})}),[x,g]);t=Object(l.useMemo)((function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("div",{className:"sub-title",children:"\u6a21\u7248"}),Object(h.jsx)("div",{className:"template-container",children:p.map((function(e,t){return Object(h.jsxs)("div",{onClick:function(){return E(e.template)},className:"template-item",children:[Object(h.jsx)("div",{className:"img-container",children:Object(h.jsx)("img",{src:e.label})}),Object(h.jsx)("div",{children:e.name})]},t)}))})]})}),[E]);return Object(h.jsx)("div",{className:e.className,children:Object(h.jsxs)("div",{className:"view-control-panel",children:[N,t]})})}},235:function(e,t,n){e.exports={fullPage:"empty_fullPage__pYRH7"}},262:function(e,t,n){},329:function(e,t,n){},332:function(e,t,n){},35:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return o})),n.d(t,"b",(function(){return s}));var c=Object.prototype.toString,a=function(e){return null==e};function i(e){return"[object Object]"===c.call(e)}function r(e){return/^(-|\+)?\d+(\.\d+)?$/.test(String(e))}function o(e){return"[object String]"===c.call(e)}function s(){return!!navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)||document.body.clientWidth<800}},378:function(e,t,n){},379:function(e,t,n){},392:function(e,t,n){},394:function(e,t,n){},423:function(e,t,n){"use strict";function c(e,t){var n=Object(b.useRef)(!1);Object(b.useEffect)((function(){return n.current?e():void(n.current=!0)}),t)}function a(){var e=Object(b.useContext)(p.a),t=e.state,n=e.dispatch;return Object(b.useEffect)((function(){var e=Object(m.a)("l").get(h.a);e&&n({type:O.a.INIT_STATE,payload:e})}),[n]),c((function(){y((function(){Object(m.a)("l").set(h.a,t.cld)}))}),[t.cld]),Object(b.useEffect)((function(){}),[t.selectedNode]),Object(v.jsx)(v.Fragment,{})}function i(e){var t=(c=Object(b.useContext)(p.a)).state,n=c.dispatch,c=Object(b.useMemo)((function(){var e=t.selectedNode.name.split(".");return(e=Object(u.a)(e,1)[0])&&(e=Object(E.a)(e))&&e.main?(e=e.editor,Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(e,{state:t,dispatch:n}),Object(v.jsx)(T,{state:t,dispatch:n})]})):null}),[t.selectedNode.id]);return Object(v.jsx)("div",{className:e.className,children:Object(v.jsxs)("div",{className:"view-editor-panel",children:[Object(v.jsx)("div",{className:"view-container-title",children:Object(v.jsxs)("div",{children:[Object(v.jsx)(x.a,{style:{fontSize:18}}),Object(v.jsx)("span",{className:"a-ml",children:"\u7f16\u8f91"})]})}),Object(v.jsx)("div",{className:"view-container-body",children:c||Object(v.jsx)(I,{exportPDF:e.exportPDF})})]})})}function r(e){return Object(v.jsx)(b.Suspense,{fallback:Object(v.jsx)(v.Fragment,{}),children:e.component})}function o(e){return Object(v.jsx)("div",{className:Object(G.a)("pedestal-image",e.className),children:Object(v.jsx)(Y.a,Object(V.a)(Object(V.a)({className:"pedestal-image"},e.instance.props),{},{style:e.instance.style}))})}n.r(t);var s=n(17),l=n.n(s),u=n(3),d=(n(180),n(262),n(41)),j=n.n(d),b=n(0),f=n.n(b),O=n(20),p=n(46),h=n(100),m=n(167),v=n(2),y=j()((function(e){return e()}),500),g=n(219),x=n(230),E=(n(332),n(54)),N=(n(168),n(92)),S=(n(120),n(91)),w=n(52),D=n(251),_=n(224),k=n.n(_),T=function(e){var t=Object(b.useRef)(null),n=e.state,c=e.dispatch,a=n.selectedNode.id,i=Object(w.c)(n.cld.children,a).style;n=Object(D.a)(j()((function(e,t){if(t.style){var n={};try{if(!(n=k()(t.style)[""]))return;n=Object.keys(n).map((function(e){return[e.replace(/-(\w)/g,(function(e,t){return t.toUpperCase()})),n[e]]})).reduce((function(e,t){t=(n=Object(u.a)(t,2))[0];var n=n[1];return e[t]=n,e}),{})}catch(e){}0<Object.keys.length&&c({type:O.a.UPDATE_ONE,payload:{id:a,key:"style",data:n,merge:!1}})}}),300));return Object(b.useEffect)((function(){var e=Object.entries(i).map((function(e){e=(t=Object(u.a)(e,2))[0];var t=t[1];return"    ".concat(e,": ").concat(t,";")}));t.current&&t.current.resetFields(),t.current&&t.current.setFieldsValue({style:"{\n".concat(e.join("\n"),"\n}")})}),[i]),Object(v.jsx)(N.a,{ref:t,layout:"vertical",size:"mini",onChange:n,children:Object(v.jsx)(N.a.Item,{label:"\u6837\u5f0f",field:"style",children:Object(v.jsx)(S.a.TextArea,{autoSize:!0})})})},C=n(229),A=n(228),P=(n(376),n(64)),L=(n(378),n(62)),I=function(e){var t=Object(L.b)(),n=t.history,c=t.undoable,a=t.redoable,i=Object(b.useContext)(p.a).dispatch;return Object(v.jsxs)(f.a.Fragment,{children:[Object(v.jsx)("div",{className:"op-nav-label",children:"\u94fe\u63a5"}),Object(v.jsxs)("div",{className:"op-nav-body",children:[Object(v.jsx)(P.a,{target:"_blank",href:"https://github.com/WindrunnerMax/ResumeEditor",children:"Github"}),Object(v.jsx)(P.a,{target:"_blank",href:"https://github.com/WindrunnerMax/ResumeEditor#%E5%AF%BC%E5%87%BApdf",children:"\u4f7f\u7528\u5fc5\u8bfb"}),Object(v.jsx)(P.a,{target:"_blank",href:"https://github.com/WindrunnerMax/ResumeEditor/issues/2",children:"\u5e38\u89c1\u95ee\u9898"})]}),Object(v.jsx)("div",{className:"op-nav-label",children:"\u64cd\u4f5c"}),Object(v.jsxs)("div",{className:"op-nav-body",children:[Object(v.jsxs)(P.a,{disabled:!c,onClick:function(){var e=c&&n.undo();e&&i({type:"REPLACE_STATE",payload:e})},children:[Object(v.jsx)(A.a,{style:{marginRight:3}}),Object(v.jsx)("span",{children:"\u540e\u9000"})]}),Object(v.jsxs)(P.a,{disabled:!a,onClick:function(){var e=a&&n.redo();e&&i({type:"REPLACE_STATE",payload:e})},children:[Object(v.jsx)("span",{children:"\u524d\u8fdb"}),Object(v.jsx)(C.a,{style:{marginLeft:3}})]})]}),Object(v.jsxs)("div",{className:"op-nav-body",children:[Object(v.jsx)(P.a,{href:"?preview",target:"_blank",children:"\u5b9e\u65f6\u9884\u89c8"}),Object(v.jsx)(P.a,{href:"?json",target:"_blank",children:"JSON\u7f16\u8f91"}),Object(v.jsx)(P.a,{onClick:e.exportPDF,children:"\u5bfc\u51faPDF"})]})]})},R=n(178),U=n(35),z=Object(b.lazy)((function(){return Promise.all([n.e(3),n.e(4)]).then(n.bind(null,444))})),F=Object(b.lazy)((function(){return n.e(6).then(n.bind(null,446))})),H=Object(b.lazy)((function(){return n.e(5).then(n.bind(null,445))})),M=null!==($=new URL(location.href).searchParams).get("preview"),B=null!==$.get("json"),W=(t=n(124),s=n(236),d=(n(163),{icon:Object(v.jsx)(s.a,{}),name:"\u56fe\u7247",getConfig:function(){return Object(E.b)(Q)}}),n(425),n(248)),J=n(237),V=n(27),Y=(n(218),n(249)),G=n(50);function K(e){var t=Object(b.useMemo)((function(){return Object(ee.a)(ve,Object(X.b)(Object(q.f)(Object(Z.j)())))}),[]),n=e.instance.props.text||[{children:[{text:""}]}],c=Object(D.a)(j()((function(t){e.dispatch({type:O.a.UPDATE_ONE_NO_UNDO,payload:{id:e.instance.id,key:"props",data:{text:t}}})}),500)),a=Object(b.useMemo)((function(){var n=new te.a(Object(ne.a)(),Object(ce.b)(t),Object(ae.b)(),Object(ie.b)(t),Object(re.b)(t,e.isRender),Object(oe.b)(),Object(se.b)(),Object(le.b)(),Object(ue.b)(),Object(de.b)(t),Object(je.b)(t),Object(be.b)(),Object(fe.b)(),Object(Oe.b)(),Object(pe.b)()),c=n.getCommands();return n.add(Object(he.a)(t,c)),n.apply()}),[t,e.isRender]),i=a.renderElement,r=a.renderLeaf,o=a.onKeyDown,s=a.commands,l=a.onCopy;return Object(v.jsx)("div",{className:Object(G.a)("pedestal-text",e.className),style:e.instance.style,children:Object(v.jsxs)(q.c,{editor:t,value:n,onChange:c,children:[Object(v.jsx)("div",{onClick:function(e){return e.stopPropagation()},children:Object(v.jsx)(me.a,{readonly:e.isRender,commands:s,editor:t})}),Object(v.jsx)(q.a,{renderElement:i,renderLeaf:r,readOnly:e.isRender,placeholder:"Enter text ...",onKeyDown:o,onCopy:function(e){return l(e,t)}})]})})}o.defaultProps={className:""};var Q={type:"local",name:"image",props:{src:"./favicon.ico"},config:{layout:{i:"",x:0,y:0,w:20,h:20,isDraggable:!0,isResizable:!0,minW:2,minH:2}},module:{control:d,main:o,editor:function(e){var t=Object(b.useRef)(null),n=e.state,c=e.dispatch,a=n.selectedNode.id,i=Object(w.c)(n.cld.children,a).props,r=Object(D.a)(j()((function(e){c({type:O.a.UPDATE_ONE,payload:{id:a,key:"props",data:e}})}),300));return Object(b.useEffect)((function(){t.current&&t.current.resetFields(),t.current&&t.current.setFieldsValue(i)}),[i]),Object(v.jsx)("div",{children:Object(v.jsx)(N.a,{ref:t,layout:"vertical",size:"mini",onChange:function(e,t){r(t)},children:Object(v.jsx)(N.a.Item,{label:"src",field:"src",children:Object(v.jsx)(S.a,{addAfter:Object(v.jsx)(W.a,{className:"image-editor-upload",accept:"image/*",action:"xxx/url",beforeUpload:function(e){return new Promise((function(n){var c=new FileReader;c.readAsDataURL(e),n(!(c.onload=function(){r({src:c.result}),t.current&&t.current.setFieldsValue({src:c.result})}))}))},onChange:function(){},showUploadList:!1,withCredentials:!0,children:Object(v.jsx)(J.a,{})})})})})})}}},$=(_=n(137),n(165),{icon:Object(v.jsx)(_.a,{}),name:"\u6587\u5b57",getConfig:function(){return Object(E.b)(ye)}}),X=(n(424),n(106)),q=n(23),Z=n(1),ee=n(433),te=n(438),ne=n(434),ce=n(141),ae=n(239),ie=n(240),re=n(176),oe=n(241),se=n(242),le=n(243),ue=n(244),de=n(245),je=n(173),be=n(238),fe=n(93),Oe=n(174),pe=n(175),he=n(435),me=n(436),ve=(s=n(32),d=n(437),_={},Object(s.a)(_,d.a,{isVoid:!0}),Object(s.a)(_,be.a,{isVoid:!0}),_);K.defaultProps={className:""};var ye={type:"local",name:"rich-text",config:{layout:{i:"",x:0,y:0,w:20,h:3,isDraggable:!0,isResizable:!0,minW:4,minH:2},observeResize:!0},module:{control:$,main:K,editor:function(){return Object(v.jsx)(v.Fragment,{})}}},ge=($=n(246),n(166),{type:"local",name:"blank",config:{layout:{i:"",x:0,y:0,w:10,h:3,isDraggable:!0,isResizable:!0,minW:1,minH:1}},module:{control:{icon:Object(v.jsx)($.a,{}),name:"\u7a7a\u767d",getConfig:function(){return Object(E.b)(ge)}},main:function(e){return Object(v.jsx)("div",{className:Object(G.a)("pedestal-main-image",e.className),style:e.instance.style})},editor:function(){return Object(v.jsx)(v.Fragment,{})}}});Object(t.b)(Q,ye,ge),l.a.render(Object(v.jsx)((function(){var e=Object(b.useState)(!1),t=(e=Object(u.a)(e,2))[0],n=e[1];return c((function(){t&&(window.print(),n(!1))}),[t]),Object(U.b)()?Object(v.jsx)(r,{component:Object(v.jsx)(H,{})}):M?Object(v.jsx)(r,{component:Object(v.jsx)(F,{})}):B?Object(v.jsx)(r,{component:Object(v.jsx)(z,{})}):Object(v.jsx)("div",{className:"resume-editor",children:Object(v.jsxs)(p.b,{mode:t?"render":"editor",children:[Object(v.jsx)(a,{}),Object(v.jsx)(g.a,{className:"control-panel"}),Object(v.jsx)(R.a,{className:"main-panel",rowHeight:8,cols:60,minHeight:"296mm",allowOverlap:!1}),Object(v.jsx)(i,{className:"editor-panel",exportPDF:function(){n(!0)}})]})})}),{}),document.getElementById("root"))},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return u}));var c=n(3),a=(t=n(0),n(100)),i=n(221),r=n(2),o="editor",s={state:{cld:{user:"",date:new Date,children:[]},selectedNode:{id:"",name:""}},mode:o,dispatch:function(){}},l=Object(t.createContext)(s),u=function(e){var t=void 0===(u=e.mode)?o:u,n=e.children,u=Object(i.a)(a.b,s.state);u=(e=Object(c.a)(u,2))[0],e=e[1];return Object(r.jsx)(l.Provider,{value:{state:u,mode:t,dispatch:e},children:n})}},50:function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return i}));var c=n(35),a=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return Object(c.e)(e)})).join(" ")},i=a},52:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"d",(function(){return l}));var c=n(27),a=n(15),i=n(35),r=function(e,t){if(!t)return null;for(var n=0,c=e.length;n<c;++n)if(e[n].id===t)return n;return null},o=function(e,t){if(!t)return null;var n=[];for(n.push(e);n.length;){var c,i=n.pop(),r=Object(a.a)(i);try{for(r.s();!(c=r.n()).done;){var o=c.value;if(o.id===t)return o;n.push(o.children)}}catch(e){r.e(e)}finally{r.f()}}return null},s=function(e,t){if(!t)return!1;var n=[];for(n.push(e);n.length;)for(var c=n.pop(),a=c.length,i=0;i<a;++i){var r=c[i];if(r.id===t)return c.splice(i,1),!0;n.push(r.children)}return!1},l=function(e,t,n,a,r){if(!(t=o(e,t)))return!1;for(var s=t,l=n.split("."),u=(t=l[l.length-1],0),d=l.length-1;u<d;++u){if(!Object(i.c)(s))return!1;s=s[l[u]]}return!!Object(i.c)(s)&&(n=s[t],Object(i.c)(n)&&Object(i.c)(a)?s[t]=r?Object(c.a)(Object(c.a)({},n),a):Object(c.a)({},a):s[t]=a,!0)}},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return l}));var c=n(27),a=n(250),i=(t=n(83),n.n(t)),r=n(177),o=["module"],s=function(e,t){return e.module,e=Object(a.a)(e,o),i()(Object(c.a)(Object(c.a)({id:Object(r.a)(),config:{},style:{},props:{},children:[]},e),t))};function l(e){if(window.store[e])return window.store[e].module}},62:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));var c=n(3),a=(t=n(83),n.n(t)),i=n(102),r=n(220),o=n(0),s=new(function(){function e(){Object(i.a)(this,e),this.current=void 0,this.undoStack=void 0,this.redoStack=void 0,this.max=void 0,this.events=void 0,this.undoStack=[],this.redoStack=[],this.max=10,this.events=[],this.current=null}return Object(r.a)(e,[{key:"collect",value:function(e){this.current&&(this.undoStack.push(this.current),this.redoStack=[],this.undoStack.length>this.max&&this.undoStack.shift()),this.current=a()(e),this.call("collect")}},{key:"undo",value:function(){var e=this.undoStack.pop();return e?(this.current&&this.redoStack.push(this.current),this.current=e,this.call("undo"),e):null}},{key:"redo",value:function(){var e=this.redoStack.pop();return e?(this.current&&this.undoStack.push(this.current),this.current=e,this.call("redo"),e):null}},{key:"undoable",value:function(){return 0<this.undoStack.length}},{key:"redoable",value:function(){return 0<this.redoStack.length}},{key:"clear",value:function(){this.redoStack=[],this.undoStack=[],this.call("clear")}},{key:"on",value:function(e){this.events.push(e)}},{key:"off",value:function(e){-1<(e=this.events.indexOf(e))&&this.events.splice(e,1)}},{key:"call",value:function(e){var t=this;this.events.forEach((function(n){n({type:e,undoLength:t.undoStack.length,redoLength:t.redoStack.length})}))}}]),e}()),l=function(){var e,t=Object(o.useState)(s.undoable()),n=(e=Object(c.a)(t,2))[0],a=e[1],i=(t=Object(o.useState)(s.redoable()),t=(e=Object(c.a)(t,2))[0],e[1]),r=Object(o.useCallback)((function(e){a(0<e.undoLength),i(0<e.redoLength)}),[]);return Object(o.useEffect)((function(){return s.on(r),function(){s.off(r)}}),[r]),{history:s,undoable:n,redoable:t}}}},[[423,1,2]]]);