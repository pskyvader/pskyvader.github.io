(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[4],{171:function(e,t,n){"use strict";var r=n(58),i=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=(0,r(n(60)).default)(o.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}),"Language");t.default=a},172:function(e,t,n){"use strict";var r=n(58),i=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=(0,r(n(60)).default)(o.createElement("path",{d:"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=a},173:function(e,t,n){"use strict";var r=n(58),i=n(59);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n(0)),a=(0,r(n(60)).default)(o.createElement("path",{d:"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=a},198:function(e,t,n){"use strict";var r=n(2),i=n(7),o=n(1),a=n(0),c=(n(3),n(4)),s=n(6),l=n(195),u=a.forwardRef((function(e,t){var n,i=e.classes,s=e.className,u=e.component,d=void 0===u?"li":u,f=e.disableGutters,p=void 0!==f&&f,h=e.ListItemClasses,v=e.role,m=void 0===v?"menuitem":v,b=e.selected,g=e.tabIndex,O=Object(r.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==g?g:-1),a.createElement(l.a,Object(o.a)({button:!0,role:m,tabIndex:n,component:d,selected:b,disableGutters:p,classes:Object(o.a)({dense:i.dense},h),className:Object(c.a)(i.root,s,b&&i.selected,!p&&i.gutters),ref:t},O))}));t.a=Object(s.a)((function(e){return{root:Object(o.a)({},e.typography.body1,Object(i.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(o.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(u)},199:function(e,t,n){"use strict";var r=n(7),i=n(1),o=n(2),a=n(0),c=n(4),s=(n(3),n(83)),l=n(6),u=n(17),d=n(26),f=n(15),p=n(11),h=a.forwardRef((function(e,t){var n=e.children,l=e.classes,h=e.className,v=e.collapsedSize,m=void 0===v?"0px":v,b=e.component,g=void 0===b?"div":b,O=e.in,E=e.onEnter,y=e.onEntered,j=e.onEntering,w=e.onExit,x=e.onExited,z=e.onExiting,C=e.orientation,M=void 0===C?"vertical":C,P=e.style,D=e.timeout,T=void 0===D?u.b.standard:D,k=e.TransitionComponent,H=void 0===k?s.a:k,I=Object(o.a)(e,["children","classes","className","collapsedSize","component","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","orientation","style","timeout","TransitionComponent"]),R=Object(f.a)(),N=a.useRef(),L=a.useRef(null),S=a.useRef(),F="number"===typeof m?"".concat(m,"px"):m,A="vertical"!==M,K=A?"width":"height";a.useEffect((function(){return function(){clearTimeout(N.current)}}),[]);var W=a.useRef(null),_=Object(p.a)(t,W),$=function(e){return function(t){if(e){var n=W.current;void 0===t?e(n):e(n,t)}}},B=function(){return L.current?L.current[A?"clientWidth":"clientHeight"]:0},G=$((function(e,t){L.current&&A&&(L.current.style.position="absolute"),e.style[K]=F,E&&E(e,t)})),J=$((function(e,t){var n=B();L.current&&A&&(L.current.style.position="");var r=Object(d.a)({style:P,timeout:T},{mode:"enter"}).duration;if("auto"===T){var i=R.transitions.getAutoHeightDuration(n);e.style.transitionDuration="".concat(i,"ms"),S.current=i}else e.style.transitionDuration="string"===typeof r?r:"".concat(r,"ms");e.style[K]="".concat(n,"px"),j&&j(e,t)})),V=$((function(e,t){e.style[K]="auto",y&&y(e,t)})),U=$((function(e){e.style[K]="".concat(B(),"px"),w&&w(e)})),X=$(x),Y=$((function(e){var t=B(),n=Object(d.a)({style:P,timeout:T},{mode:"exit"}).duration;if("auto"===T){var r=R.transitions.getAutoHeightDuration(t);e.style.transitionDuration="".concat(r,"ms"),S.current=r}else e.style.transitionDuration="string"===typeof n?n:"".concat(n,"ms");e.style[K]=F,z&&z(e)}));return a.createElement(H,Object(i.a)({in:O,onEnter:G,onEntered:V,onEntering:J,onExit:U,onExited:X,onExiting:Y,addEndListener:function(e){"auto"===T&&(N.current=setTimeout(e,S.current||0))},nodeRef:W,timeout:"auto"===T?null:T},I),(function(e,t){return a.createElement(g,Object(i.a)({className:Object(c.a)(l.root,h,A&&l.horizontal,{entered:l.entered,exited:!O&&"0px"===F&&l.hidden}[e]),style:Object(i.a)(Object(r.a)({},A?"minWidth":"minHeight",F),P),ref:_},t),a.createElement("div",{className:Object(c.a)(l.wrapper,A&&l.horizontal),ref:L},a.createElement("div",{className:Object(c.a)(l.wrapperInner,A&&l.horizontal)},n)))}))}));h.muiSupportAuto=!0,t.a=Object(l.a)((function(e){return{root:{height:0,overflow:"hidden",transition:e.transitions.create("height"),"&$horizontal":{height:"auto",width:0,transition:e.transitions.create("width")}},horizontal:{},entered:{height:"auto",overflow:"visible","&$horizontal":{width:"auto"}},hidden:{visibility:"hidden"},wrapper:{display:"flex",width:"100%","&$horizontal":{width:"auto",height:"100%"}},wrapperInner:{width:"100%","&$horizontal":{width:"auto",height:"100%"}}}}),{name:"MuiCollapse"})(h)},205:function(e,t,n){"use strict";var r=n(1),i=n(2),o=n(0),a=(n(84),n(3),n(4)),c=n(6),s=n(41),l=n(23),u=n(42),d=n(203),f=n(141),p=n(102);function h(e,t){var n=0;return"number"===typeof t?n=t:"center"===t?n=e.height/2:"bottom"===t&&(n=e.height),n}function v(e,t){var n=0;return"number"===typeof t?n=t:"center"===t?n=e.width/2:"right"===t&&(n=e.width),n}function m(e){return[e.horizontal,e.vertical].map((function(e){return"number"===typeof e?"".concat(e,"px"):e})).join(" ")}function b(e){return"function"===typeof e?e():e}var g=o.forwardRef((function(e,t){var n=e.action,c=e.anchorEl,g=e.anchorOrigin,O=void 0===g?{vertical:"top",horizontal:"left"}:g,E=e.anchorPosition,y=e.anchorReference,j=void 0===y?"anchorEl":y,w=e.children,x=e.classes,z=e.className,C=e.container,M=e.elevation,P=void 0===M?8:M,D=e.getContentAnchorEl,T=e.marginThreshold,k=void 0===T?16:T,H=e.open,I=e.PaperProps,R=void 0===I?{}:I,N=e.transformOrigin,L=void 0===N?{vertical:"top",horizontal:"left"}:N,S=e.TransitionComponent,F=void 0===S?f.a:S,A=e.transitionDuration,K=void 0===A?"auto":A,W=e.TransitionProps,_=(W=void 0===W?{}:W).onEntering,$=Object(i.a)(W,["onEntering"]),B=Object(i.a)(e,["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","classes","className","container","elevation","getContentAnchorEl","marginThreshold","open","PaperProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps"]),G=o.useRef(),J=o.useCallback((function(e){if("anchorPosition"===j)return E;var t=b(c),n=(t&&1===t.nodeType?t:Object(l.a)(G.current).body).getBoundingClientRect(),r=0===e?O.vertical:"center";return{top:n.top+h(n,r),left:n.left+v(n,O.horizontal)}}),[c,O.horizontal,O.vertical,E,j]),V=o.useCallback((function(e){var t=0;if(D&&"anchorEl"===j){var n=D(e);if(n&&e.contains(n)){var r=function(e,t){for(var n=t,r=0;n&&n!==e;)r+=(n=n.parentElement).scrollTop;return r}(e,n);t=n.offsetTop+n.clientHeight/2-r||0}0}return t}),[O.vertical,j,D]),U=o.useCallback((function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return{vertical:h(e,L.vertical)+t,horizontal:v(e,L.horizontal)}}),[L.horizontal,L.vertical]),X=o.useCallback((function(e){var t=V(e),n={width:e.offsetWidth,height:e.offsetHeight},r=U(n,t);if("none"===j)return{top:null,left:null,transformOrigin:m(r)};var i=J(t),o=i.top-r.vertical,a=i.left-r.horizontal,s=o+n.height,l=a+n.width,d=Object(u.a)(b(c)),f=d.innerHeight-k,p=d.innerWidth-k;if(o<k){var h=o-k;o-=h,r.vertical+=h}else if(s>f){var v=s-f;o-=v,r.vertical+=v}if(a<k){var g=a-k;a-=g,r.horizontal+=g}else if(l>p){var O=l-p;a-=O,r.horizontal+=O}return{top:"".concat(Math.round(o),"px"),left:"".concat(Math.round(a),"px"),transformOrigin:m(r)}}),[c,j,J,V,U,k]),Y=o.useCallback((function(){var e=G.current;if(e){var t=X(e);null!==t.top&&(e.style.top=t.top),null!==t.left&&(e.style.left=t.left),e.style.transformOrigin=t.transformOrigin}}),[X]);o.useEffect((function(){H&&Y()})),o.useImperativeHandle(n,(function(){return H?{updatePosition:function(){Y()}}:null}),[H,Y]),o.useEffect((function(){if(H){var e=Object(s.a)((function(){Y()})),t=Object(u.a)(c);return t.addEventListener("resize",e),function(){e.clear(),t.removeEventListener("resize",e)}}}),[c,H,Y]);var q=K;"auto"!==K||F.muiSupportAuto||(q=void 0);var Q=C||(c?Object(l.a)(b(c)).body:void 0);return o.createElement(d.a,Object(r.a)({container:Q,open:H,ref:t,BackdropProps:{invisible:!0},className:Object(a.a)(x.root,z)},B),o.createElement(F,Object(r.a)({appear:!0,in:H,timeout:q,onEntering:function(e,t){_&&_(e,t),Y()}},$),o.createElement(p.a,Object(r.a)({elevation:P,ref:G},R,{className:Object(a.a)(x.paper,R.className)}),w)))})),O=Object(c.a)({root:{},paper:{position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}},{name:"MuiPopover"})(g),E=n(162),y=n(169),j=n(11),w=n(22);function x(e,t,n){return e===t?e.firstChild:t&&t.nextElementSibling?t.nextElementSibling:n?null:e.firstChild}function z(e,t,n){return e===t?n?e.firstChild:e.lastChild:t&&t.previousElementSibling?t.previousElementSibling:n?null:e.lastChild}function C(e,t){if(void 0===t)return!0;var n=e.innerText;return void 0===n&&(n=e.textContent),0!==(n=n.trim().toLowerCase()).length&&(t.repeating?n[0]===t.keys[0]:0===n.indexOf(t.keys.join("")))}function M(e,t,n,r,i,o){for(var a=!1,c=i(e,t,!!t&&n);c;){if(c===e.firstChild){if(a)return;a=!0}var s=!r&&(c.disabled||"true"===c.getAttribute("aria-disabled"));if(c.hasAttribute("tabindex")&&C(c,o)&&!s)return void c.focus();c=i(e,c,n)}}var P=o.forwardRef((function(e,t){var n=e.actions,a=e.autoFocus,c=void 0!==a&&a,s=e.autoFocusItem,u=void 0!==s&&s,d=e.children,f=e.className,p=e.disabledItemsFocusable,h=void 0!==p&&p,v=e.disableListWrap,m=void 0!==v&&v,b=e.onKeyDown,g=e.variant,O=void 0===g?"selectedMenu":g,P=Object(i.a)(e,["actions","autoFocus","autoFocusItem","children","className","disabledItemsFocusable","disableListWrap","onKeyDown","variant"]),D=o.useRef(null),T=o.useRef({keys:[],repeating:!0,previousKeyMatched:!0,lastTime:null});Object(w.a)((function(){c&&D.current.focus()}),[c]),o.useImperativeHandle(n,(function(){return{adjustStyleForScrollbar:function(e,t){var n=!D.current.style.width;if(e.clientHeight<D.current.clientHeight&&n){var r="".concat(Object(y.a)(Object(l.a)(e)),"px");D.current.style["rtl"===t.direction?"paddingLeft":"paddingRight"]=r,D.current.style.width="calc(100% + ".concat(r,")")}return D.current}}}),[]);var k=Object(j.a)(D,t),H=-1;o.Children.forEach(d,(function(e,t){o.isValidElement(e)&&(e.props.disabled||("selectedMenu"===O&&e.props.selected||-1===H)&&(H=t))}));var I=o.Children.map(d,(function(e,t){if(t===H){var n={};return u&&(n.autoFocus=!0),void 0===e.props.tabIndex&&"selectedMenu"===O&&(n.tabIndex=0),o.cloneElement(e,n)}return e}));return o.createElement(E.a,Object(r.a)({role:"menu",ref:k,className:f,onKeyDown:function(e){var t=D.current,n=e.key,r=Object(l.a)(t).activeElement;if("ArrowDown"===n)e.preventDefault(),M(t,r,m,h,x);else if("ArrowUp"===n)e.preventDefault(),M(t,r,m,h,z);else if("Home"===n)e.preventDefault(),M(t,null,m,h,x);else if("End"===n)e.preventDefault(),M(t,null,m,h,z);else if(1===n.length){var i=T.current,o=n.toLowerCase(),a=performance.now();i.keys.length>0&&(a-i.lastTime>500?(i.keys=[],i.repeating=!0,i.previousKeyMatched=!0):i.repeating&&o!==i.keys[0]&&(i.repeating=!1)),i.lastTime=a,i.keys.push(o);var c=r&&!i.repeating&&C(r,i);i.previousKeyMatched&&(c||M(t,r,!1,h,x,i))?e.preventDefault():i.previousKeyMatched=!1}b&&b(e)},tabIndex:c?0:-1},P),I)})),D=n(33),T=n(15),k={vertical:"top",horizontal:"right"},H={vertical:"top",horizontal:"left"},I=o.forwardRef((function(e,t){var n=e.autoFocus,c=void 0===n||n,s=e.children,l=e.classes,u=e.disableAutoFocusItem,d=void 0!==u&&u,f=e.MenuListProps,p=void 0===f?{}:f,h=e.onClose,v=e.open,m=e.PaperProps,b=void 0===m?{}:m,g=e.PopoverClasses,E=e.transitionDuration,y=void 0===E?"auto":E,j=e.variant,w=void 0===j?"selectedMenu":j,x=e.TransitionProps,z=(x=void 0===x?{}:x).onEntering,C=Object(i.a)(x,["onEntering"]),M=Object(i.a)(e,["autoFocus","children","classes","disableAutoFocusItem","MenuListProps","onClose","open","PaperProps","PopoverClasses","transitionDuration","variant","TransitionProps"]),I=Object(T.a)(),R=c&&!d&&v,N=o.useRef(null),L=o.useRef(null),S=-1;o.Children.map(s,(function(e,t){o.isValidElement(e)&&(e.props.disabled||("menu"!==w&&e.props.selected||-1===S)&&(S=t))}));var F=o.Children.map(s,(function(e,t){return t===S?o.cloneElement(e,{ref:function(t){L.current=t,Object(D.a)(e.ref,t)}}):e}));return o.createElement(O,Object(r.a)({getContentAnchorEl:function(){return L.current},classes:g,onClose:h,anchorOrigin:"rtl"===I.direction?k:H,transformOrigin:"rtl"===I.direction?k:H,PaperProps:Object(r.a)({},b,{classes:Object(r.a)({},b.classes,{root:l.paper})}),open:v,ref:t,transitionDuration:y,TransitionProps:Object(r.a)({onEntering:function(e,t){N.current&&N.current.adjustStyleForScrollbar(e,I),z&&z(e,t)}},C)},M),o.createElement(P,Object(r.a)({onKeyDown:function(e){"Tab"===e.key&&(e.preventDefault(),h&&h(e,"tabKeyDown"))},actions:N,autoFocus:c&&(-1===S||d),autoFocusItem:R,variant:w},p,{className:Object(a.a)(l.list,p.className)}),F))}));t.a=Object(c.a)({paper:{maxHeight:"calc(100% - 96px)",WebkitOverflowScrolling:"touch"},list:{outline:0}},{name:"MuiMenu"})(I)}}]);
//# sourceMappingURL=4.6671573e.chunk.js.map