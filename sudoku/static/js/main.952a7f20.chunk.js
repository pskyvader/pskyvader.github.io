(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[0],{21:function(e,t,n){"use strict";var r=n(12),a=n(50),o=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=JSON.parse(localStorage.getItem(e));if(null==r)this.set(e,t,n);else{if(!(r.expiration_time<Date.now()))return r.data;this.set(e,t,n)}return t}},{key:"set",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;null!=t&&(n=Date.now()+24*n*60*60*1e3,localStorage.setItem(e,JSON.stringify({data:t,expiration_time:n})))}}]),e}();t.a=o},60:function(e,t,n){e.exports=n(69)},69:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(40),i=n.n(o),l=n(39),c=n(97),s=n(73),u=n(100),h=n(101),f=n(96),m=n(98),b=n(99),v=n(51),d=n.n(v),p=n(52),g=n.n(p),k=n(53),S=n.n(k),C=n(54),O=n.n(C),w=n(27),E=n.n(w),y=n(11),j=n(12),x=n(6),B=n(56),R=n(55),N=function e(t,n,r,a,o){var i=this;Object(j.a)(this,e),this.SetNumber=function(e){i.SetValue(e),i.callback.Duplicates()},this.SetValue=function(e){void 0!==i.SetFinalNumber&&i.SetFinalNumber(e),i.number=e},this.SetValueError=function(e){void 0!==i.SetError&&i.SetError(e),i.error=e},this.SetValueOptions=function(e){void 0!==i.SetOptions&&i.SetOptions(e),i.options=e},this.number="",this.options=new Set([1,2,3,4,5,6,7,8,9]),this.x=t,this.y=n,this.i=r,this.j=a,this.locked=!1,this.callback=o,this.error=!1},D=function e(t,n,r){var a=this;Object(j.a)(this,e),this.Duplicates=function(){a.callback.CleanDuplicated(),a.callback.CheckDuplicates(),a.callback.CheckSuccess()},this.x=t,this.y=n,this.callback=r,this.submatrix=[],this.checklist=[];for(var o=0;o<3;o++){for(var i=[],l=0;l<3;l++)i[l]=new N(t,n,o,l,this),this.checklist.push(i[l]),this.callback.verticallines[t][o].push(i[l]),this.callback.horizontallines[n][l].push(i[l]),this.callback.list.push(i[l]);this.submatrix[o]=i}},V=function(e){Object(B.a)(n,e);var t=Object(R.a)(n);function n(e){var r,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Object(j.a)(this,n),(r=t.call(this)).RandomNumbers=function(e){var t=Object(x.a)(r);if(e>81||e<1)throw Error("number out of range");for(var n=Object(y.a)(t.emptyspaces),a=0;a<e;a++){var o=Math.floor(Math.random()*(n.length-1)),i=n[o],l=t.matrix[i[0]][i[1]].submatrix[i[2]][i[3]];l.SetValue(Math.floor(1+8*Math.random())),t.CleanDuplicated(),t.CheckDuplicates()>0?(l.number="",a--):(l.options.clear(),n.splice(o,1))}},r.CreateBoard=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Object(x.a)(r);if(e>81||e<1)throw Error("number out of range");n.RandomNumbers(27);try{n.Resolve()}catch(a){n.errorcount+=1,n.CreateEmptyBoard(),n.CreateBoard(e,t+1)}0===t&&n.CleanBoard(e)},r.CleanBoard=function(e){var t=Object(x.a)(r);if(e>81||e<1)throw Error("number out of range");for(var n=Object(y.a)(t.emptyspaces),a=0;a<81-e&&n.length>0;){var o=Math.floor(Math.random()*(n.length-1)),i=n[o],l=t.matrix[i[0]][i[1]].submatrix[i[2]][i[3]],c=l.number;l.number="";var s=t.CloneBoard(),u=t.ResolveUnique();t.RestoreBoard(s),0===u&&console.log(u,"solutions"),1===u?a++:l.number=c,n.splice(o,1)}for(var h=0;h<t.emptyspaces.length;h++){var f=t.emptyspaces[h],m=t.matrix[f[0]][f[1]].submatrix[f[2]][f[3]];""!==m.number&&(m.locked=!0)}},r.ResolveUnique=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(t>1)return t;for(var n=Object(x.a)(r),a=1;a>0;)a=0,0===(a+=n.FillSingleOption())&&(a+=n.FillByLine());if(n.CheckCompleteBoard())return++t;var o=n.CloneBoard(),i=n.Random(),l=Object(y.a)(i.options);i.number=l[0];for(var c=0,s=0;i.number!==c&&void 0!==i.number;){c=i.number,n.RestoreBoard(o),i.number=c;try{var u=t;(t=n.ResolveUnique(e+1,t))>u&&t++}catch(h){}finally{n.arrayEquals(l,Object(y.a)(i.options))?s++:(l=Object(y.a)(i.options),s=0),i.number=l[s]}}return i.number="",t>1?t:n.CheckCompleteBoard()?++t:n.ResolveUnique(e+1,t)},r.Resolve=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(x.a)(r),n=1;n>0;)n=0,0===(n+=t.FillSingleOption())&&(n+=t.FillByLine());if(!t.CheckCompleteBoard()){var a=t.CloneBoard(),o=t.Random(),i=Object(y.a)(o.options);o.number=i[0];for(var l=0,c=0;!t.CheckCompleteBoard()&&o.number!==l&&void 0!==o.number;){l=o.number,t.RestoreBoard(a),o.number=l;try{t.Resolve(e+1)}catch(s){}finally{t.arrayEquals(i,Object(y.a)(o.options))?c++:(i=Object(y.a)(o.options),c=0),o.number=i[c]}}o.number="",t.CheckCompleteBoard()?(o.SetValue(o.number),o.options.clear()):t.Resolve()}},r.CloneBoard=function(){for(var e=Object(x.a)(r),t=[],n=0;n<e.list.length;n++){var a=e.list[n];t.push({x:a.x,y:a.y,i:a.i,j:a.j,number:a.number,options:Object(y.a)(a.options),locked:a.locked,error:a.error})}return t},r.RestoreBoard=function(e){for(var t=Object(x.a)(r),n=0;n<e.length;n++){var a=e[n],o=t.matrix[a.x][a.y].submatrix[a.i][a.j];o.SetValue(a.number),o.SetValueOptions(new Set(a.options)),o.locked=a.locked,o.SetValueError(a.error)}r.CheckSuccess()},r.CheckCompleteBoard=function(){for(var e=Object(x.a)(r),t=0;t<e.list.length;t++){if(""===e.list[t].number)return!1}return!0},r.Random=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=Object(x.a)(r),n=0;n<t.list.length;n++){var a=t.list[n];if(""===a.number&&(t.CheckOptions(a),a.options.size<e))return a}return t.Random(e+1)},r.FillSingleOption=function(){for(var e=Object(x.a)(r),t=0,n=0;n<e.list.length;n++){var a=e.list[n];""===a.number&&(e.CheckOptions(a),1===a.options.size&&(a.SetValue(a.options.values().next().value),a.options.clear(),t++))}return t},r.FillByLine=function(){for(var e=Object(x.a)(r),t=0,n=0;n<e.list.length;n++){var a=e.list[n];""===a.number&&e.CheckUnique(a)&&(a.options.clear(),t++)}return t},r.CheckUnique=function(e){var t=Object(x.a)(r),n=0,a=e.x,o=e.y,i=e.i,l=e.j;return(0!==(n=t.UniqueList(t.matrix[a][o].checklist,e))||0!==(n=t.UniqueList(t.verticallines[a][i],e))||0!==(n=t.UniqueList(t.horizontallines[o][l],e)))&&(e.SetValue(n),!0)},r.UniqueList=function(e,t){for(var n=Object(x.a)(r),a=new Set,o=0;o<e.length;o++){var i=e[o];""===i.number&&i!==t&&(n.CheckOptions(i),a=new Set([].concat(Object(y.a)(a),Object(y.a)(i.options))))}n.CheckOptions(t);var l=new Set(Object(y.a)(t.options).filter((function(e){return!a.has(e)})));return 1===l.size?l.values().next().value:0},r.CheckOptions=function(e){var t=Object(x.a)(r),n=new Set([1,2,3,4,5,6,7,8,9]),a=e.x,o=e.y,i=e.i,l=e.j;t.DuplicatesList(t.matrix[a][o].checklist,n),t.DuplicatesList(t.verticallines[a][i],n),t.DuplicatesList(t.horizontallines[o][l],n),e.options=n},r.DuplicatesList=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];""!==r.number&&t.delete(r.number)}if(0===t.size)throw Error("Empty options")},r.arrayEquals=function(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((function(e,n){return e===t[n]}))},r.errorcount=0,null===a){var o=performance.now();r.CreateBoard(e);var i=performance.now();console.log("CreateSudoku took "+(i-o)+" milliseconds.")}else r.RestoreBoard(a);return r}return n}((function e(){var t=this;Object(j.a)(this,e),this.CreateEmptyBoard=function(){t.success=!1,t.matrix=[],t.emptyspaces=[],t.verticallines=[[[],[],[]],[[],[],[]],[[],[],[]]],t.horizontallines=[[[],[],[]],[[],[],[]],[[],[],[]]],t.list=[];for(var e=0;e<3;e++){for(var n=[],r=0;r<3;r++)n[r]=new D(e,r,t),t.EmptySpaces(e,r);t.matrix[e]=n}},this.SetSuccessValue=function(e){void 0!==t.setSuccess&&t.setSuccess(e),t.success=e},this.CheckSuccess=function(){for(var e=0;e<t.list.length;e++){var n=t.list[e];if(""===n.number||n.error)return void t.SetSuccessValue(!1)}t.SetSuccessValue(!0)},this.CleanDuplicated=function(){for(var e=0;e<t.list.length;e++){t.list[e].SetValueError(!1)}},this.CheckDuplicates=function(){for(var e=0,n=0;n<3;n++)for(var r=0;r<3;r++){var a=t.matrix[n][r].checklist;e+=t.MarkDuplicates(a);var o=t.verticallines[n][r];e+=t.MarkDuplicates(o);var i=t.horizontallines[n][r];e+=t.MarkDuplicates(i)}return e},this.MarkDuplicates=function(e){for(var n=0,r=0;r<e.length;r++){var a=e[r];t.duplicated(e,a.number)&&(a.SetValueError(!0),n++)}return n},this.duplicated=function(e,t){return e.reduce((function(e,n){return e+(""!==t&&n.number===t)}),0)>1},this.EmptySpaces=function(e,n){for(var r=0;r<3;r++)for(var a=0;a<3;a++)t.emptyspaces.push([e,n,r,a])},this.CreateEmptyBoard()})),L=n(21),q=function(e,t){return{backgroundColor:e.main,color:t(e.main),border:"none","&:hover":{backgroundColor:e.dark,color:t(e.dark),border:"none"}}},U=Object(f.a)((function(e){var t=e.palette,n=t.info,r=t.success,a=t.warning,o=t.error,i=t.getContrastText;return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},buttonstar:{position:"absolute",bottom:e.spacing(.25),right:e.spacing(.25),fontSize:"0.75rem",borderRadius:"100%",backgroundColor:"white",color:a.light},button1:q(n,i),button2:q(r,i),button3:q(a,i),button4:q(o,i)}}));function z(e){var t=U(),n=a.a.useState(L.a.get("difficulty",45)),r=Object(l.a)(n,2),o=r[0],i=r[1],f=e.board;function v(e){var t=new V(e);i(e),f.RestoreBoard(t.CloneBoard())}var p=function(){L.a.set("difficulty",o)};return a.a.useEffect((function(){return window.addEventListener("beforeunload",p),function(){return window.removeEventListener("beforeunload",p)}})),a.a.createElement("div",{className:t.root},a.a.createElement(c.a,{position:"fixed"},a.a.createElement(m.a,null,a.a.createElement(b.a,{variant:"h6",className:t.title}," Sudoku "),a.a.createElement(u.a,{size:"small"},a.a.createElement(s.a,{className:t.button1,onClick:function(){return v(63)}},a.a.createElement(d.a,null),63===o?a.a.createElement(E.a,{className:t.buttonstar}):""),a.a.createElement(s.a,{className:t.button2,onClick:function(){return v(45)}},a.a.createElement(g.a,null),45===o?a.a.createElement(E.a,{className:t.buttonstar}):""),a.a.createElement(s.a,{className:t.button3,onClick:function(){return v(36)}},a.a.createElement(S.a,null),36===o?a.a.createElement(E.a,{className:t.buttonstar}):""),a.a.createElement(s.a,{className:t.button4,onClick:function(){return v(27)}},a.a.createElement(O.a,null),27===o?a.a.createElement(E.a,{className:t.buttonstar}):"")))),a.a.createElement(m.a,null),a.a.createElement(h.a,null,e.children))}var M=Object(r.lazy)((function(){return n.e(4).then(n.bind(null,113))})),A=L.a.get("sudoku_board",null),F=new V(45,A);var W=function(){return a.a.createElement(z,{board:F},a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(M,{board:F})))},J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(W,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");J?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):I(t,e)}))}}()}},[[60,1,2]]]);
//# sourceMappingURL=main.952a7f20.chunk.js.map