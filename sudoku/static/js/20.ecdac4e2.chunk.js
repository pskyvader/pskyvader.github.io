(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[20],{225:function(e,t,n){"use strict";var c=n(81),a=n(82);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=a(n(0)),i=(0,c(n(83)).default)(s.createElement("path",{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z"}),"Language");t.default=i},232:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return S}));var c=n(6),a=n(2),s=n(0),i=n.n(s),o=n(139),r=n(159),u=n(233),d=n(12),l=n(3),b=n(1),j=(n(4),n(7)),m=n(8),O=n(222),p=s.forwardRef((function(e,t){var n,c=e.classes,a=e.className,i=e.component,o=void 0===i?"li":i,r=e.disableGutters,u=void 0!==r&&r,d=e.ListItemClasses,m=e.role,p=void 0===m?"menuitem":m,h=e.selected,g=e.tabIndex,x=Object(l.a)(e,["classes","className","component","disableGutters","ListItemClasses","role","selected","tabIndex"]);return e.disabled||(n=void 0!==g?g:-1),s.createElement(O.a,Object(b.a)({button:!0,role:p,tabIndex:n,component:o,selected:h,disableGutters:u,classes:Object(b.a)({dense:c.dense},d),className:Object(j.a)(c.root,a,h&&c.selected,!u&&c.gutters),ref:t},x))})),h=Object(m.a)((function(e){return{root:Object(b.a)({},e.typography.body1,Object(d.a)({minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",width:"auto",whiteSpace:"nowrap"},e.breakpoints.up("sm"),{minHeight:"auto"})),gutters:{},selected:{},dense:Object(b.a)({},e.typography.body2,{minHeight:"auto"})}}),{name:"MuiMenuItem"})(p),g=n(146),x=n(259),f=n(195),v=n(223),C=n(224),z=n(264),y=n(197),k=n.n(y),M=n(198),w=n.n(M),H=n(225),I=n.n(H),L=n(44),N=Object(o.a)((function(e){return{select:{color:e.palette.primary.contrastText,padding:e.spacing(1,0)},icon:{margin:e.spacing(1)},nested:{paddingLeft:e.spacing(4)}}}));function S(e){var t=e.mode,n=void 0===t?"button":t,o=N(),d=Object(s.useContext)(L.a),l=d.userLanguage,b=d.userLanguageChange,j=Object(s.useState)(null),m=Object(c.a)(j,2),p=m[0],y=m[1],M=function(e,t){b(t),y(null),G(!1)},H=i.a.useState(!1),S=Object(c.a)(H,2),E=S[0],G=S[1];return"button"===n?Object(a.jsxs)("div",{children:[Object(a.jsx)(x.a,{title:Object(L.c)("language"),children:Object(a.jsxs)(r.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){y(e.currentTarget)},className:o.select,children:[Object(a.jsx)(I.a,{className:o.icon}),Object(a.jsx)(g.a,{smDown:!0,children:L.d[l]}),Object(a.jsx)(g.a,{mdUp:!0,children:l})]})}),Object(a.jsx)(u.a,{id:"simple-menu",anchorEl:p,open:Boolean(p),onClose:function(){y(null)},children:Object.entries(L.d).map((function(e){var t=Object(c.a)(e,2),n=t[0],s=t[1];return Object(a.jsx)(h,{selected:n===l,onClick:function(e){return M(0,n)},children:s},n)}))})]}):Object(a.jsxs)(i.a.Fragment,{children:[Object(a.jsxs)(O.a,{button:!0,onClick:function(){G(!E)},children:[Object(a.jsx)(v.a,{children:Object(a.jsx)(I.a,{})}),Object(a.jsx)(C.a,{primary:Object(L.c)("language")}),E?Object(a.jsx)(k.a,{}):Object(a.jsx)(w.a,{})]}),Object(a.jsx)(z.a,{in:E,timeout:"auto",unmountOnExit:!0,children:Object(a.jsx)(f.a,{component:"div",disablePadding:!0,children:Object.entries(L.d).map((function(e){var t=Object(c.a)(e,2),n=t[0],s=t[1];return Object(a.jsxs)(O.a,{selected:n===l,button:!0,className:o.nested,onClick:function(e){return M(0,n)},children:[Object(a.jsx)(v.a,{children:n}),Object(a.jsx)(C.a,{primary:s})]},n)}))})})]})}}}]);
//# sourceMappingURL=20.ecdac4e2.chunk.js.map