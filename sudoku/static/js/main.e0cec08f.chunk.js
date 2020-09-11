(this.webpackJsonpsudoku=this.webpackJsonpsudoku||[]).push([[2],{12:function(e,t,n){"use strict";var r=n(10),a=n(40),o=function(){function e(){Object(r.a)(this,e)}return Object(a.a)(e,null,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=JSON.parse(localStorage.getItem(e));if(null==r)this.set(e,t,n);else{if(!(r.expiration_time<Date.now()))return r.data;this.set(e,t,n)}return t}},{key:"set",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;null!=t&&(n=Date.now()+24*n*60*60*1e3,localStorage.setItem(e,JSON.stringify({data:t,expiration_time:n})))}}]),e}();t.a=o},34:function(e,t,n){"use strict";var r=n(6),a=n(10),o=n(3),i=n(46),l=n(45),c=function e(t,n,r,o,i){var l=this;Object(a.a)(this,e),this.SetNumber=function(e){l.SetValue(e),l.callback.Duplicates()},this.SetValue=function(e){void 0!==l.SetFinalNumber&&l.SetFinalNumber(e),l.number=e},this.SetValueError=function(e){void 0!==l.SetError&&l.SetError(e),l.error=e},this.SetValueOptions=function(e){void 0!==l.SetOptions&&l.SetOptions(e),l.options=e},this.number="",this.options=new Set([1,2,3,4,5,6,7,8,9]),this.x=t,this.y=n,this.i=r,this.j=o,this.locked=!1,this.callback=i,this.error=!1},s=function e(t,n,r){var o=this;Object(a.a)(this,e),this.Duplicates=function(){o.callback.CleanDuplicated(),o.callback.CheckDuplicates(),o.callback.CheckSuccess()},this.x=t,this.y=n,this.callback=r,this.submatrix=[],this.checklist=[];for(var i=0;i<3;i++){for(var l=[],s=0;s<3;s++)l[s]=new c(t,n,i,s,this),this.checklist.push(l[s]),this.callback.verticallines[t][i].push(l[s]),this.callback.horizontallines[n][s].push(l[s]),this.callback.list.push(l[s]);this.submatrix[i]=l}},u=function(e){Object(i.a)(n,e);var t=Object(l.a)(n);function n(e){var i,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Object(a.a)(this,n),(i=t.call(this)).RandomNumbers=function(e){var t=Object(o.a)(i);if(e>81||e<1)throw Error("number out of range");for(var n=Object(r.a)(t.emptyspaces),a=0;a<e;a++){var l=Math.floor(Math.random()*(n.length-1)),c=n[l],s=t.matrix[c[0]][c[1]].submatrix[c[2]][c[3]];s.SetValue(Math.floor(1+8*Math.random())),t.CleanDuplicated(),t.CheckDuplicates()>0?(s.number="",a--):(s.options.clear(),n.splice(l,1))}},i.CreateBoard=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=Object(o.a)(i);if(e>81||e<1)throw Error("number out of range");n.RandomNumbers(27);try{n.Resolve()}catch(r){n.errorcount+=1,n.CreateEmptyBoard(),n.CreateBoard(e,t+1)}0===t&&n.CleanBoard(e)},i.CleanBoard=function(e){var t=Object(o.a)(i);if(e>81||e<1)throw Error("number out of range");for(var n=Object(r.a)(t.emptyspaces),a=0;a<81-e&&n.length>0;){var l=Math.floor(Math.random()*(n.length-1)),c=n[l],s=t.matrix[c[0]][c[1]].submatrix[c[2]][c[3]],u=s.number;s.number="";var h=t.CloneBoard(),f=t.ResolveUnique();t.RestoreBoard(h),0===f&&console.log(f,"solutions"),1===f?a++:s.number=u,n.splice(l,1)}for(var m=0;m<t.emptyspaces.length;m++){var v=t.emptyspaces[m],d=t.matrix[v[0]][v[1]].submatrix[v[2]][v[3]];""!==d.number&&(d.locked=!0)}},i.ResolveUnique=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(t>1)return t;for(var n=Object(o.a)(i),a=1;a>0;)a=0,0===(a+=n.FillSingleOption())&&(a+=n.FillByLine());if(n.CheckCompleteBoard())return++t;var l=n.CloneBoard(),c=n.Random(),s=Object(r.a)(c.options);c.number=s[0];for(var u=0,h=0;c.number!==u&&void 0!==c.number;){u=c.number,n.RestoreBoard(l),c.number=u;try{var f=t;(t=n.ResolveUnique(e+1,t))>f&&t++}catch(m){}finally{n.arrayEquals(s,Object(r.a)(c.options))?h++:(s=Object(r.a)(c.options),h=0),c.number=s[h]}}return c.number="",t>1?t:n.CheckCompleteBoard()?++t:n.ResolveUnique(e+1,t)},i.Resolve=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=Object(o.a)(i),n=1;n>0;)n=0,0===(n+=t.FillSingleOption())&&(n+=t.FillByLine());if(!t.CheckCompleteBoard()){var a=t.CloneBoard(),l=t.Random(),c=Object(r.a)(l.options);l.number=c[0];for(var s=0,u=0;!t.CheckCompleteBoard()&&l.number!==s&&void 0!==l.number;){s=l.number,t.RestoreBoard(a),l.number=s;try{t.Resolve(e+1)}catch(h){}finally{t.arrayEquals(c,Object(r.a)(l.options))?u++:(c=Object(r.a)(l.options),u=0),l.number=c[u]}}l.number="",t.CheckCompleteBoard()?(l.SetValue(l.number),l.options.clear()):t.Resolve()}},i.CloneBoard=function(){for(var e=Object(o.a)(i),t=[],n=0;n<e.list.length;n++){var a=e.list[n];t.push({x:a.x,y:a.y,i:a.i,j:a.j,number:a.number,options:Object(r.a)(a.options),locked:a.locked,error:a.error})}return t},i.RestoreBoard=function(e){for(var t=Object(o.a)(i),n=0;n<e.length;n++){var r=e[n],a=t.matrix[r.x][r.y].submatrix[r.i][r.j];a.SetValue(r.number),a.SetValueOptions(new Set(r.options)),a.locked=r.locked,a.SetValueError(r.error)}i.CheckSuccess()},i.CheckCompleteBoard=function(){for(var e=Object(o.a)(i),t=0;t<e.list.length;t++){if(""===e.list[t].number)return!1}return!0},i.Random=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=Object(o.a)(i),n=0;n<t.list.length;n++){var r=t.list[n];if(""===r.number&&(t.CheckOptions(r),r.options.size<e))return r}return t.Random(e+1)},i.FillSingleOption=function(){for(var e=Object(o.a)(i),t=0,n=0;n<e.list.length;n++){var r=e.list[n];""===r.number&&(e.CheckOptions(r),1===r.options.size&&(r.SetValue(r.options.values().next().value),r.options.clear(),t++))}return t},i.FillByLine=function(){for(var e=Object(o.a)(i),t=0,n=0;n<e.list.length;n++){var r=e.list[n];""===r.number&&e.CheckUnique(r)&&(r.options.clear(),t++)}return t},i.CheckUnique=function(e){var t=Object(o.a)(i),n=0,r=e.x,a=e.y,l=e.i,c=e.j;return(0!==(n=t.UniqueList(t.matrix[r][a].checklist,e))||0!==(n=t.UniqueList(t.verticallines[r][l],e))||0!==(n=t.UniqueList(t.horizontallines[a][c],e)))&&(e.SetValue(n),!0)},i.UniqueList=function(e,t){for(var n=Object(o.a)(i),a=new Set,l=0;l<e.length;l++){var c=e[l];""===c.number&&c!==t&&(n.CheckOptions(c),a=new Set([].concat(Object(r.a)(a),Object(r.a)(c.options))))}n.CheckOptions(t);var s=new Set(Object(r.a)(t.options).filter((function(e){return!a.has(e)})));return 1===s.size?s.values().next().value:0},i.CheckOptions=function(e){var t=Object(o.a)(i),n=new Set([1,2,3,4,5,6,7,8,9]),r=e.x,a=e.y,l=e.i,c=e.j;t.DuplicatesList(t.matrix[r][a].checklist,n),t.DuplicatesList(t.verticallines[r][l],n),t.DuplicatesList(t.horizontallines[a][c],n),e.options=n},i.DuplicatesList=function(e,t){for(var n=0;n<e.length;n++){var r=e[n];""!==r.number&&t.delete(r.number)}if(0===t.size)throw Error("Empty options")},i.arrayEquals=function(e,t){return Array.isArray(e)&&Array.isArray(t)&&e.length===t.length&&e.every((function(e,n){return e===t[n]}))},i.errorcount=0,null===l){var c=performance.now();i.CreateBoard(e);var s=performance.now();console.log("CreateSudoku took "+(s-c)+" milliseconds.")}else i.RestoreBoard(l);return i}return n}((function e(){var t=this;Object(a.a)(this,e),this.CreateEmptyBoard=function(){t.success=!1,t.matrix=[],t.emptyspaces=[],t.verticallines=[[[],[],[]],[[],[],[]],[[],[],[]]],t.horizontallines=[[[],[],[]],[[],[],[]],[[],[],[]]],t.list=[];for(var e=0;e<3;e++){for(var n=[],r=0;r<3;r++)n[r]=new s(e,r,t),t.EmptySpaces(e,r);t.matrix[e]=n}},this.SetSuccessValue=function(e){void 0!==t.setSuccess&&t.setSuccess(e),t.success=e},this.CheckSuccess=function(){for(var e=0;e<t.list.length;e++){var n=t.list[e];if(""===n.number||n.error)return void t.SetSuccessValue(!1)}t.SetSuccessValue(!0)},this.CleanDuplicated=function(){for(var e=0;e<t.list.length;e++){t.list[e].SetValueError(!1)}},this.CheckDuplicates=function(){for(var e=0,n=0;n<3;n++)for(var r=0;r<3;r++){var a=t.matrix[n][r].checklist;e+=t.MarkDuplicates(a);var o=t.verticallines[n][r];e+=t.MarkDuplicates(o);var i=t.horizontallines[n][r];e+=t.MarkDuplicates(i)}return e},this.MarkDuplicates=function(e){for(var n=0,r=0;r<e.length;r++){var a=e[r];t.duplicated(e,a.number)&&(a.SetValueError(!0),n++)}return n},this.duplicated=function(e,t){return e.reduce((function(e,n){return e+(""!==t&&n.number===t)}),0)>1},this.EmptySpaces=function(e,n){for(var r=0;r<3;r++)for(var a=0;a<3;a++)t.emptyspaces.push([e,n,r,a])},this.CreateEmptyBoard()}));t.a=u},50:function(e,t,n){e.exports=n(58)},58:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(33),i=n.n(o),l=n(27),c=n(83),s=n(85),u=n(82),h=n(84),f=n(65),m=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(1),n.e(9)]).then(n.bind(null,123))})),v=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,138))})),d=Object(u.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function b(e){var t=d();return a.a.createElement("div",{className:t.root},a.a.createElement(c.a,{position:"static"},a.a.createElement(h.a,null,a.a.createElement(f.a,{variant:"h6",className:t.title}," Sudoku "),a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(v,e)),a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(m,e)))),a.a.createElement(s.a,null,e.children))}var p=n(34),k=n(12),g=n(44),S=n(87),y=n(88),O=n(86),j=n(42),w=n.n(j),C=n(41),E=n.n(C),x=n(43),B=n.n(x),D=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7),n.e(13)]).then(n.bind(null,147))})),R=k.a.get("sudoku_board",null),V=new p.a(45,R);var L=function(){var e=a.a.useState(k.a.get("difficulty",45)),t=Object(l.a)(e,2),n=t[0],o=t[1],i=a.a.useState(k.a.get("dark_mode",Object(O.a)("(prefers-color-scheme: dark)"))),c=Object(l.a)(i,2),s=c[0],u=c[1],h=a.a.useMemo((function(){return Object(g.a)({palette:{primary:{main:s?E.a[800]:w.a[800]},secondary:{main:B.a[500]},type:s?"dark":"light"}})}),[s]),f=function(){k.a.set("difficulty",n),k.a.set("dark_mode",s)};return a.a.useEffect((function(){return window.addEventListener("beforeunload",f),function(){return window.removeEventListener("beforeunload",f)}})),a.a.createElement(S.a,{theme:h},a.a.createElement(y.a,null),a.a.createElement(b,{board:V,Difficulty:n,setDifficulty:o,DarkMode:s,SetDarkMode:u},a.a.createElement(r.Suspense,{fallback:null},a.a.createElement(D,{board:V,Difficulty:n,setDifficulty:o}))))},M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(L,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL(".",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat(".","/service-worker.js");M?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):q(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):q(t,e)}))}}()}},[[50,3,4]]]);
//# sourceMappingURL=main.e0cec08f.chunk.js.map