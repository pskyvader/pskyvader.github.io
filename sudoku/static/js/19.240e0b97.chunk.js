(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[19],{202:function(e,t,n){"use strict";n.r(t);var a=n(9),o=n(36),r=n(0),i=n.n(r),c=n(4),l=n(142),s=n(196),u=n(203),p=n(125),m=n(96),d=n(176),b=n(162),g=n(47),h=Object(p.a)((function(e){var t,n=e.palette,a=n.primary,r=n.secondary,i=n.getContrastText,c=n.background,l="light"===e.palette.type;return{button:(t={height:"100%",width:"100%",fontSize:"1em",fontWeight:"normal",minWidth:0,borderRadius:0,padding:e.spacing(1)},Object(o.a)(t,e.breakpoints.up("md"),{padding:e.spacing(1.5)}),Object(o.a)(t,"&:hover",{backgroundColor:l?a.main:a.light,color:a.contrastText}),Object(o.a)(t,"color",l?a.main:i(c.paper)),t),options:{height:"100%",width:"100%",fontWeight:"normal",margin:0,borderRadius:0,color:l?a.main:i(c.paper),"&:hover":{backgroundColor:l?a.main:a.light,color:a.contrastText}},label:{width:0},optioncolor:{color:i(a.light),"&:hover":{backgroundColor:a.light}},optionbackground:{backgroundColor:a.main},OptionsActiveoption:{backgroundColor:r.main,"&:hover":{backgroundColor:r.light}}}})),k=function(e){var t=e.handleClose,n=e.field,o=e.OptionsActive,r=e.setOptionsActive,p=e.parentOptions,m=i.a.useState(!1),d=Object(a.a)(m,2),b=d[0],k=d[1],f=function(){r(!o)},v=h(),E=o?v.optioncolor:"",O=function(){n.options.clear(),n.SetNumber(""),t()},C=function(e){n.options.clear(),n.SetNumber(e),t()},j=function(e){n.options.has(e)?n.options.delete(e):n.options.add(e),p(!b),k(!b)},y=function(e){if("Backspace"===e.key||"Delete"===e.key)O();else{var t=parseInt(e.key);isNaN(t)||(o?j(t):C(t))}};return i.a.useEffect((function(){return document.addEventListener("keydown",y,!1),function(){document.removeEventListener("keydown",y,!1)}})),i.a.createElement(s.a,{container:!0,justify:"center",className:Object(c.a)(o?v.optionbackground:"",b)},[[1,4,7],[2,5,8],[3,6,9]].map((function(e,t){var a="popover-"+t;return i.a.createElement(s.a,{key:a,item:!0,xs:4},e.map((function(e,t){var r=a+","+t,u=Object(c.a)(v.button,E,o&&n.options.has(e)?v.OptionsActiveoption:"");return i.a.createElement(s.a,{key:r},i.a.createElement(l.a,{className:u,onClick:function(){return o?j(e):C(e)}},e))})))})),i.a.createElement(s.a,{item:!0,xs:12},i.a.createElement(s.a,{item:!0,xs:12},i.a.createElement(l.a,{classes:{label:v.label},className:Object(c.a)(v.options,E),onClick:f},i.a.createElement(u.a,{edge:"start",size:"small",disableRipple:!0,onChange:f,checked:o}),Object(g.c)("options"))),i.a.createElement(s.a,{item:!0,xs:12},i.a.createElement(l.a,{className:Object(c.a)(v.options,E),onClick:function(){return O()}},Object(g.c)("clear")))))};t.default=function(e){var t=e.TransitionProps,n=e.placement,a=e.handleClose;return i.a.createElement(b.a,Object.assign({},t,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),i.a.createElement("div",null,i.a.createElement(m.a,null,i.a.createElement(d.a,{onClickAway:a},i.a.createElement("div",null,i.a.createElement(k,e))))))}}}]);
//# sourceMappingURL=19.240e0b97.chunk.js.map