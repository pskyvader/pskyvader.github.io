(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[13,22],{140:function(t,e,n){"use strict";var i=n(0),a=i.createContext({});e.a=a},141:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return a}));var i=function(t){return t.scrollTop};function a(t,e){var n=t.timeout,i=t.style,a=void 0===i?{}:i;return{duration:a.transitionDuration||"number"===typeof n?n:n[e.mode]||0,delay:a.transitionDelay}}},165:function(t,e,n){"use strict";var i=n(22),a=n(27),o=(n(3),n(0)),r=n.n(o),s=n(64),c=n.n(s),u=!1,l=n(55),p="unmounted",f="exited",d="entering",E="entered",m="exiting",h=function(t){function e(e,n){var i;i=t.call(this,e,n)||this;var a,o=n&&!n.isMounting?e.enter:e.appear;return i.appearStatus=null,e.in?o?(a=f,i.appearStatus=d):a=E:a=e.unmountOnExit||e.mountOnEnter?p:f,i.state={status:a},i.nextCallback=null,i}Object(a.a)(e,t),e.getDerivedStateFromProps=function(t,e){return t.in&&e.status===p?{status:f}:null};var n=e.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(t){var e=null;if(t!==this.props){var n=this.state.status;this.props.in?n!==d&&n!==E&&(e=d):n!==d&&n!==E||(e=m)}this.updateStatus(!1,e)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var t,e,n,i=this.props.timeout;return t=e=n=i,null!=i&&"number"!==typeof i&&(t=i.exit,e=i.enter,n=void 0!==i.appear?i.appear:e),{exit:t,enter:e,appear:n}},n.updateStatus=function(t,e){void 0===t&&(t=!1),null!==e?(this.cancelNextCallback(),e===d?this.performEnter(t):this.performExit()):this.props.unmountOnExit&&this.state.status===f&&this.setState({status:p})},n.performEnter=function(t){var e=this,n=this.props.enter,i=this.context?this.context.isMounting:t,a=this.props.nodeRef?[i]:[c.a.findDOMNode(this),i],o=a[0],r=a[1],s=this.getTimeouts(),l=i?s.appear:s.enter;!t&&!n||u?this.safeSetState({status:E},(function(){e.props.onEntered(o)})):(this.props.onEnter(o,r),this.safeSetState({status:d},(function(){e.props.onEntering(o,r),e.onTransitionEnd(l,(function(){e.safeSetState({status:E},(function(){e.props.onEntered(o,r)}))}))})))},n.performExit=function(){var t=this,e=this.props.exit,n=this.getTimeouts(),i=this.props.nodeRef?void 0:c.a.findDOMNode(this);e&&!u?(this.props.onExit(i),this.safeSetState({status:m},(function(){t.props.onExiting(i),t.onTransitionEnd(n.exit,(function(){t.safeSetState({status:f},(function(){t.props.onExited(i)}))}))}))):this.safeSetState({status:f},(function(){t.props.onExited(i)}))},n.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(t,e){e=this.setNextCallback(e),this.setState(t,e)},n.setNextCallback=function(t){var e=this,n=!0;return this.nextCallback=function(i){n&&(n=!1,e.nextCallback=null,t(i))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},n.onTransitionEnd=function(t,e){this.setNextCallback(e);var n=this.props.nodeRef?this.props.nodeRef.current:c.a.findDOMNode(this),i=null==t&&!this.props.addEndListener;if(n&&!i){if(this.props.addEndListener){var a=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],o=a[0],r=a[1];this.props.addEndListener(o,r)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},n.render=function(){var t=this.state.status;if(t===p)return null;var e=this.props,n=e.children,a=(e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef,Object(i.a)(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.a.createElement(l.a.Provider,{value:null},"function"===typeof n?n(t,a):r.a.cloneElement(r.a.Children.only(n),a))},e}(r.a.Component);function x(){}h.contextType=l.a,h.propTypes={},h.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:x,onEntering:x,onEntered:x,onExit:x,onExiting:x,onExited:x},h.UNMOUNTED=p,h.EXITED=f,h.ENTERING=d,h.ENTERED=E,h.EXITING=m;e.a=h},173:function(t,e,n){"use strict";n.r(e);var i=n(9),a=n(0),o=n.n(a),r=n(150),s=n(136),c=n(198),u=n(258),l=n(253),p=n(175),f=n.n(p),d=n(200),E=n(201),m=n(202),h=n(132),x=n(176),b=n.n(x),v=n(177),g=n.n(v),k=n(54),O=n(77),y=Object(h.a)((function(t){return{update:{backgroundColor:t.palette.info.main,color:t.palette.info.contrastText,"&:hover":{backgroundColor:t.palette.info.light}},install:{backgroundColor:t.palette.success.main,color:t.palette.success.contrastText,"&:hover":{backgroundColor:t.palette.success.light}}}})),C=function(t){var e=t.setMessage,n=t.waitingServiceWorker;n&&n.postMessage({type:"SKIP_WAITING"}),e("")},T=function(){var t=o.a.useContext(O.a),e=t.Message,n=o.a.useState(!0),a=Object(i.a)(n,2),p=a[0],d=a[1];if(""===e||"INSTALL"===e)return null;var E=function(t,e){"clickaway"!==e&&d(!1)},m={};"UPDATE"===e?m={severity:"info",action:function(){return C(t)},button:Object(k.c)("update"),text:Object(k.c)("update-available")}:"OFFLINE"===e&&(m={severity:"success",action:null,button:null,text:Object(k.c)("offline-available")});return o.a.createElement(u.a,{open:p,onClose:E,anchorOrigin:{vertical:"top",horizontal:"center"},TransitionComponent:function(t){return o.a.createElement(c.a,Object.assign({},t,{direction:"up"}))}},o.a.createElement(l.a,{elevation:6,variant:"filled",severity:m.severity,action:null!==m.action&&o.a.createElement(o.a.Fragment,null,o.a.createElement(r.a,{color:"inherit",size:"small",onClick:m.action},"  ",m.button," "),o.a.createElement(s.a,{color:"inherit",size:"small",onClick:E},o.a.createElement(f.a,{fontSize:"small"})))},m.text))},S=function(){var t=y(),e=o.a.useContext(O.a),n=e.Message,i={};return"INSTALL"===n?i={action:function(){return function(t){var e=t.setMessage,n=t.installPrompt;n&&(n.prompt(),n.userChoice.then((function(t){"accepted"===t.outcome?console.log("User accepted the install prompt"):console.log("User dismissed the install prompt")}))),e("")}(e)},text:Object(k.c)("install"),icon:b.a,color:t.install}:"UPDATE"===n&&(i={action:function(){return C(e)},text:Object(k.c)("update"),icon:g.a,color:t.update}),"OFFLINE"!==n&&""!==n?o.a.createElement(d.a,{button:!0,key:i.text,onClick:i.action,className:i.color},o.a.createElement(E.a,null," ",o.a.createElement(i.icon,null)," "),o.a.createElement(m.a,{primary:i.text})):null};e.default=function(t){var e=t.mode;return"snackbar"===(void 0===e?"snackbar":e)?o.a.createElement(T,null):o.a.createElement(S,null)}},198:function(t,e,n){"use strict";var i=n(1),a=n(2),o=n(0),r=(n(3),n(165)),s=n(67),c=n(21),u=n(19),l=n(26),p=n(141),f=n(71);function d(t,e){var n=function(t,e){var n,i=e.getBoundingClientRect(),a=Object(f.a)(e);if(e.fakeTransform)n=e.fakeTransform;else{var o=a.getComputedStyle(e);n=o.getPropertyValue("-webkit-transform")||o.getPropertyValue("transform")}var r=0,s=0;if(n&&"none"!==n&&"string"===typeof n){var c=n.split("(")[1].split(")")[0].split(",");r=parseInt(c[4],10),s=parseInt(c[5],10)}return"left"===t?"translateX(".concat(a.innerWidth,"px) translateX(").concat(r-i.left,"px)"):"right"===t?"translateX(-".concat(i.left+i.width-r,"px)"):"up"===t?"translateY(".concat(a.innerHeight,"px) translateY(").concat(s-i.top,"px)"):"translateY(-".concat(i.top+i.height-s,"px)")}(t,e);n&&(e.style.webkitTransform=n,e.style.transform=n)}var E={enter:l.b.enteringScreen,exit:l.b.leavingScreen},m=o.forwardRef((function(t,e){var n=t.children,l=t.direction,m=void 0===l?"down":l,h=t.in,x=t.onEnter,b=t.onEntered,v=t.onEntering,g=t.onExit,k=t.onExited,O=t.onExiting,y=t.style,C=t.timeout,T=void 0===C?E:C,S=t.TransitionComponent,j=void 0===S?r.a:S,N=Object(a.a)(t,["children","direction","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"]),w=Object(u.a)(),D=o.useRef(null),I=Object(c.a)(n.ref,D),L=Object(c.a)(I,e),R=function(t){return function(e){t&&(void 0===e?t(D.current):t(D.current,e))}},M=R((function(t,e){d(m,t),Object(p.b)(t),x&&x(t,e)})),P=R((function(t,e){var n=Object(p.a)({timeout:T,style:y},{mode:"enter"});t.style.webkitTransition=w.transitions.create("-webkit-transform",Object(i.a)({},n,{easing:w.transitions.easing.easeOut})),t.style.transition=w.transitions.create("transform",Object(i.a)({},n,{easing:w.transitions.easing.easeOut})),t.style.webkitTransform="none",t.style.transform="none",v&&v(t,e)})),U=R(b),z=R(O),F=R((function(t){var e=Object(p.a)({timeout:T,style:y},{mode:"exit"});t.style.webkitTransition=w.transitions.create("-webkit-transform",Object(i.a)({},e,{easing:w.transitions.easing.sharp})),t.style.transition=w.transitions.create("transform",Object(i.a)({},e,{easing:w.transitions.easing.sharp})),d(m,t),g&&g(t)})),A=R((function(t){t.style.webkitTransition="",t.style.transition="",k&&k(t)})),X=o.useCallback((function(){D.current&&d(m,D.current)}),[m]);return o.useEffect((function(){if(!h&&"down"!==m&&"right"!==m){var t=Object(s.a)((function(){D.current&&d(m,D.current)})),e=Object(f.a)(D.current);return e.addEventListener("resize",t),function(){t.clear(),e.removeEventListener("resize",t)}}}),[m,h]),o.useEffect((function(){h||X()}),[h,X]),o.createElement(j,Object(i.a)({nodeRef:D,onEnter:M,onEntered:U,onEntering:P,onExit:F,onExited:A,onExiting:z,appear:!0,in:h,timeout:T},N),(function(t,e){return o.cloneElement(n,Object(i.a)({ref:L,style:Object(i.a)({visibility:"exited"!==t||h?void 0:"hidden"},y,n.props.style)},e))}))}));e.a=m}}]);
//# sourceMappingURL=13.db2dc3aa.chunk.js.map