(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[17],{147:function(e,t,n){"use strict";var o=n(0),a=o.createContext({});t.a=a},165:function(e,t,n){"use strict";n.r(t);var o=n(2),a=n(0),r=n(159),c=n(258),s=n(139),i=n(259),u=n(195),d=n(222),b=n(223),l=n(224),m=n(267),j=n(166),p=n.n(j),f=n(167),x=n.n(f),h=n(168),O=n.n(h),g=n(169),v=n.n(g),k=n(170),C=n.n(k),y=n(44),w=n(65),N=function(e,t){return{backgroundColor:e.main,color:t(e.main),border:"none","&:hover":{backgroundColor:e.dark,color:t(e.dark),border:"none"}}},R=Object(s.a)((function(e){var t=e.palette,n=t.info,o=t.success,a=t.warning,r=t.error,c=t.getContrastText;return{buttonstar:{position:"absolute",bottom:e.spacing(.25),right:e.spacing(.25),fontSize:"0.75rem",borderRadius:"100%",backgroundColor:"white",color:a.light},button1:N(n,c),button2:N(o,c),button3:N(a,c),button4:N(r,c)}}));t.default=function(e){var t=e.mode,n=void 0===t?"button":t,s=Object(a.useContext)(w.a),j=s.Difficulty,f=s.ResetBoard,h=s.setDifficulty,g=function(e){h(0),f(e)},k=R(),N=[{number:1,text:Object(y.c)("veryeasymode"),class:k.button1,icon:p.a},{number:2,text:Object(y.c)("easymode"),class:k.button2,icon:x.a},{number:3,text:Object(y.c)("mediummode"),class:k.button3,icon:O.a},{number:4,text:Object(y.c)("hardmode"),class:k.button4,icon:v.a}];return"button"===n?Object(o.jsx)(c.a,{size:"small",children:N.map((function(e){return Object(o.jsx)(i.a,{title:e.text,children:Object(o.jsxs)(r.a,{className:e.class,onClick:function(){return g(e.number)},children:[Object(o.jsx)(e.icon,{}),j===e.number?Object(o.jsx)(C.a,{className:k.buttonstar}):""]})},e.text)}))}):Object(o.jsx)(u.a,{children:N.map((function(e){return Object(o.jsxs)(d.a,{button:!0,onClick:function(){return g(e.number)},selected:j===e.number,children:[Object(o.jsxs)(b.a,{children:[" ",Object(o.jsx)(e.icon,{})]}),Object(o.jsx)(l.a,{primary:e.text}),Object(o.jsx)(m.a,{edge:"end",size:"small",disableRipple:!0,checked:j===e.number})]},e.text)}))})}},195:function(e,t,n){"use strict";var o=n(1),a=n(3),r=n(0),c=(n(4),n(7)),s=n(8),i=n(147),u=r.forwardRef((function(e,t){var n=e.children,s=e.classes,u=e.className,d=e.component,b=void 0===d?"ul":d,l=e.dense,m=void 0!==l&&l,j=e.disablePadding,p=void 0!==j&&j,f=e.subheader,x=Object(a.a)(e,["children","classes","className","component","dense","disablePadding","subheader"]),h=r.useMemo((function(){return{dense:m}}),[m]);return r.createElement(i.a.Provider,{value:h},r.createElement(b,Object(o.a)({className:Object(c.a)(s.root,u,m&&s.dense,!p&&s.padding,f&&s.subheader),ref:t},x),f,n))}));t.a=Object(s.a)({root:{listStyle:"none",margin:0,padding:0,position:"relative"},padding:{paddingTop:8,paddingBottom:8},dense:{},subheader:{paddingTop:0}},{name:"MuiList"})(u)}}]);
//# sourceMappingURL=17.4d1872cb.chunk.js.map