(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[12,14,18],{139:function(e,t,n){"use strict";var a=n(0),o=a.createContext({});t.a=o},140:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return o}));var a=function(e){return e.scrollTop};function o(e,t){var n=e.timeout,a=e.style,o=void 0===a?{}:a;return{duration:o.transitionDuration||"number"===typeof n?n:n[t.mode]||0,delay:o.transitionDelay}}},150:function(e,t,n){"use strict";var a=n(22),o=n(25),i=(n(3),n(0)),r=n.n(i),s=n(63),c=n.n(s),l=!1,d=n(55),u=function(e){function t(t,n){var a;a=e.call(this,t,n)||this;var o,i=n&&!n.isMounting?t.enter:t.appear;return a.appearStatus=null,t.in?i?(o="exited",a.appearStatus="entering"):o="entered":o=t.unmountOnExit||t.mountOnEnter?"unmounted":"exited",a.state={status:o},a.nextCallback=null,a}Object(o.a)(t,e),t.getDerivedStateFromProps=function(e,t){return e.in&&"unmounted"===t.status?{status:"exited"}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?"entering"!==n&&"entered"!==n&&(t="entering"):"entering"!==n&&"entered"!==n||(t="exiting")}this.updateStatus(!1,t)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var e,t,n,a=this.props.timeout;return e=t=n=a,null!=a&&"number"!==typeof a&&(e=a.exit,t=a.enter,n=void 0!==a.appear?a.appear:t),{exit:e,enter:t,appear:n}},n.updateStatus=function(e,t){void 0===e&&(e=!1),null!==t?(this.cancelNextCallback(),"entering"===t?this.performEnter(e):this.performExit()):this.props.unmountOnExit&&"exited"===this.state.status&&this.setState({status:"unmounted"})},n.performEnter=function(e){var t=this,n=this.props.enter,a=this.context?this.context.isMounting:e,o=this.props.nodeRef?[a]:[c.a.findDOMNode(this),a],i=o[0],r=o[1],s=this.getTimeouts(),d=a?s.appear:s.enter;!e&&!n||l?this.safeSetState({status:"entered"},(function(){t.props.onEntered(i)})):(this.props.onEnter(i,r),this.safeSetState({status:"entering"},(function(){t.props.onEntering(i,r),t.onTransitionEnd(d,(function(){t.safeSetState({status:"entered"},(function(){t.props.onEntered(i,r)}))}))})))},n.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),a=this.props.nodeRef?void 0:c.a.findDOMNode(this);t&&!l?(this.props.onExit(a),this.safeSetState({status:"exiting"},(function(){e.props.onExiting(a),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))}))}))):this.safeSetState({status:"exited"},(function(){e.props.onExited(a)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},n.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(a){n&&(n=!1,t.nextCallback=null,e(a))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:c.a.findDOMNode(this),a=null==e&&!this.props.addEndListener;if(n&&!a){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],i=o[0],r=o[1];this.props.addEndListener(i,r)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},n.render=function(){var e=this.state.status;if("unmounted"===e)return null;var t=this.props,n=t.children,o=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,Object(a.a)(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(d.a.Provider,{value:null},"function"===typeof n?n(e,o):r.a.cloneElement(r.a.Children.only(n),o))},t}(r.a.Component);function p(){}u.contextType=d.a,u.propTypes={},u.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:p,onEntering:p,onEntered:p,onExit:p,onExiting:p,onExited:p},u.UNMOUNTED="unmounted",u.EXITED="exited",u.ENTERING="entering",u.ENTERED="entered",u.EXITING="exiting";t.a=u},151:function(e,t,n){"use strict";var a=n(2),o=n(1),i=n(0),r=(n(3),n(4)),s=n(62),c=n(5),l=n(16),d=n(108),u=n(6),p=i.forwardRef((function(e,t){var n=e.children,c=e.classes,l=e.className,p=e.color,b=void 0===p?"primary":p,m=e.component,h=void 0===m?"button":m,f=e.disabled,x=void 0!==f&&f,g=e.disableElevation,v=void 0!==g&&g,E=e.disableFocusRipple,y=void 0!==E&&E,S=e.endIcon,k=e.focusVisibleClassName,O=e.fullWidth,C=void 0!==O&&O,j=e.size,z=void 0===j?"medium":j,R=e.startIcon,N=e.type,T=void 0===N?"button":N,w=e.variant,I=void 0===w?"text":w,L=Object(a.a)(e,["children","classes","className","color","component","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"]),D=Object(s.a)(Object(o.a)({},e,{color:b,component:h,disabled:x,disableElevation:v,disableFocusRipple:y,fullWidth:C,size:z,type:T,variant:I}),"MuiButton"),M=R&&i.createElement("span",{className:Object(r.a)(c.startIcon,c["iconSize".concat(Object(u.a)(z))])},R),P=S&&i.createElement("span",{className:Object(r.a)(c.endIcon,c["iconSize".concat(Object(u.a)(z))])},S);return i.createElement(d.a,Object(o.a)({className:Object(r.a)(c.root,c[I],D,l,"inherit"===b?c.colorInherit:c["".concat(I).concat(Object(u.a)(b))],"medium"!==z&&[c["".concat(I,"Size").concat(Object(u.a)(z))],c["size".concat(Object(u.a)(z))]],v&&c.disableElevation,x&&c.disabled,C&&c.fullWidth),component:h,disabled:x,focusRipple:!y,focusVisibleClassName:Object(r.a)(c.focusVisible,k),ref:t,type:T},L),i.createElement("span",{className:c.label},M,n,P))}));t.a=Object(c.a)((function(e){return{root:Object(o.a)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:e.shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border"],{duration:e.transitions.duration.short}),"&:hover":{textDecoration:"none",backgroundColor:Object(l.c)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{color:e.palette.action.disabled}}),label:{width:"100%",display:"inherit",alignItems:"inherit",justifyContent:"inherit"},text:{padding:"6px 8px"},textPrimary:{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},textSecondary:{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlined:{padding:"5px 15px",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"&$disabled":{border:"1px solid ".concat(e.palette.action.disabledBackground)}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(Object(l.c)(e.palette.primary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.primary.main),backgroundColor:Object(l.c)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(Object(l.c)(e.palette.secondary.main,.5)),"&:hover":{border:"1px solid ".concat(e.palette.secondary.main),backgroundColor:Object(l.c)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"&$disabled":{border:"1px solid ".concat(e.palette.action.disabled)}},contained:{color:e.palette.getContrastText(e.palette.grey[300]),backgroundColor:e.palette.grey[300],boxShadow:e.shadows[2],"&:hover":{backgroundColor:e.palette.grey.A100,boxShadow:e.shadows[4],"@media (hover: none)":{boxShadow:e.shadows[2],backgroundColor:e.palette.grey[300]}},"&$focusVisible":{boxShadow:e.shadows[6]},"&:active":{boxShadow:e.shadows[8]},"&$disabled":{color:e.palette.action.disabled,boxShadow:e.shadows[0],backgroundColor:e.palette.action.disabledBackground}},containedPrimary:{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.main,"&:hover":{backgroundColor:e.palette.primary.dark,"@media (hover: none)":{backgroundColor:e.palette.primary.main}}},containedSecondary:{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.main,"&:hover":{backgroundColor:e.palette.secondary.dark,"@media (hover: none)":{backgroundColor:e.palette.secondary.main}}},disableElevation:{boxShadow:"none","&:hover":{boxShadow:"none"},"&$focusVisible":{boxShadow:"none"},"&:active":{boxShadow:"none"},"&$disabled":{boxShadow:"none"}},focusVisible:{},disabled:{},colorInherit:{color:"inherit",borderColor:"currentColor"},textSizeSmall:{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},textSizeLarge:{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},outlinedSizeSmall:{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},outlinedSizeLarge:{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},containedSizeSmall:{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},containedSizeLarge:{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},sizeSmall:{},sizeLarge:{},fullWidth:{width:"100%"},startIcon:{display:"inherit",marginRight:8,marginLeft:-4,"&$iconSizeSmall":{marginLeft:-2}},endIcon:{display:"inherit",marginRight:-4,marginLeft:8,"&$iconSizeSmall":{marginRight:-2}},iconSizeSmall:{"& > *:first-child":{fontSize:18}},iconSizeMedium:{"& > *:first-child":{fontSize:20}},iconSizeLarge:{"& > *:first-child":{fontSize:22}}}}),{name:"MuiButton"})(p)},156:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(151),r=n(232),s=n(131),c=n(233),l=n(177),d=n(198),u=n(199),p=n(200),b=n(253),m=n(157),h=n.n(m),f=n(158),x=n.n(f),g=n(159),v=n.n(g),E=n(160),y=n.n(E),S=n(161),k=n.n(S),O=n(54),C=n(65),j=function(e,t){return{backgroundColor:e.main,color:t(e.main),border:"none","&:hover":{backgroundColor:e.dark,color:t(e.dark),border:"none"}}},z=Object(s.a)((function(e){var t=e.palette,n=t.info,a=t.success,o=t.warning,i=t.error,r=t.getContrastText;return{buttonstar:{position:"absolute",bottom:e.spacing(.25),right:e.spacing(.25),fontSize:"0.75rem",borderRadius:"100%",backgroundColor:"white",color:o.light},button1:j(n,r),button2:j(a,r),button3:j(o,r),button4:j(i,r)}}));t.default=function(e){var t=e.mode,n=void 0===t?"button":t,s=Object(a.useContext)(C.a),m=s.Difficulty,f=s.ResetBoard,g=z(),E=[{number:63,text:Object(O.c)("veryeasymode"),class:g.button1,icon:h.a},{number:45,text:Object(O.c)("easymode"),class:g.button2,icon:x.a},{number:36,text:Object(O.c)("mediummode"),class:g.button3,icon:v.a},{number:20,text:Object(O.c)("hardmode"),class:g.button4,icon:y.a}];return"button"===n?o.a.createElement(r.a,{size:"small"},E.map((function(e){return o.a.createElement(c.a,{key:e.text,title:e.text},o.a.createElement(i.a,{className:e.class,onClick:function(){return f(e.number)}},o.a.createElement(e.icon,null),m===e.number?o.a.createElement(k.a,{className:g.buttonstar}):""))}))):o.a.createElement(l.a,null,E.map((function(e){return o.a.createElement(d.a,{button:!0,key:e.text,onClick:function(){return f(e.number)},selected:m===e.number},o.a.createElement(u.a,null," ",o.a.createElement(e.icon,null)),o.a.createElement(p.a,{primary:e.text}),o.a.createElement(b.a,{edge:"end",size:"small",disableRipple:!0,checked:m===e.number}))})))}},170:function(e,t,n){"use strict";var a=n(0),o=n(63),i=(n(3),n(26)),r=n(21),s=n(17);var c=a.forwardRef((function(e,t){var n=e.children,c=e.container,l=e.disablePortal,d=void 0!==l&&l,u=a.useState(null),p=u[0],b=u[1],m=Object(r.a)(a.isValidElement(n)?n.ref:null,t);return Object(s.a)((function(){d||b(function(e){return"function"===typeof e?e():e}(c)||document.body)}),[c,d]),Object(s.a)((function(){if(p&&!d)return Object(i.a)(t,p),function(){Object(i.a)(t,null)}}),[t,p,d]),d?a.isValidElement(n)?a.cloneElement(n,{ref:m}):n:p?o.createPortal(n,p):p}));t.a=c},177:function(e,t,n){"use strict";var a=n(1),o=n(2),i=n(0),r=(n(3),n(4)),s=n(5),c=n(139),l=i.forwardRef((function(e,t){var n=e.children,s=e.classes,l=e.className,d=e.component,u=void 0===d?"ul":d,p=e.dense,b=void 0!==p&&p,m=e.disablePadding,h=void 0!==m&&m,f=e.subheader,x=Object(o.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),g=i.useMemo((function(){return{dense:b}}),[b]);return i.createElement(c.a.Provider,{value:g},i.createElement(u,Object(a.a)({className:Object(r.a)(s.root,l,b&&s.dense,!h&&s.padding,f&&s.subheader),ref:t},x),f,n))}));t.a=Object(s.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(l)}}]);
//# sourceMappingURL=12.31418265.chunk.js.map