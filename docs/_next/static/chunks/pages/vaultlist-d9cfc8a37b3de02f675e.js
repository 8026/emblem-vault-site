_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[35],{"4WaP":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var r=n("1OyB"),a=n("vuIU"),o=n("JX7q"),c=n("Ji7U"),u=n("md7G"),i=n("foSv"),l=n("rePB"),s=n("q1tI");function f(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Object(i.a)(t);if(e){var a=Object(i.a)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(u.a)(this,n)}}var d=function(t){Object(c.a)(n,t);var e=f(n);function n(){var t;Object(r.a)(this,n);for(var a=arguments.length,c=new Array(a),u=0;u<a;u++)c[u]=arguments[u];return t=e.call.apply(e,[this].concat(c)),Object(l.a)(Object(o.a)(t),"state",{hasError:!1,error:null}),t}return Object(a.a)(n,[{key:"render",value:function(){return this.state.hasError?this.props.fallback:this.props.children}}],[{key:"getDerivedStateFromError",value:function(t){return{hasError:!0,error:t}}}]),n}(s.Component)},qH7s:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/vaultlist",function(){return n("tgvr")}])},tgvr:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return x}));var r=n("q1tI"),a=n.n(r),o=n("wx14"),c=n("o0o1"),u=n.n(c),i=n("HaE+"),l=n("Weur"),s=n("BMxC"),f=n("sK1y"),d=n("Yn+B"),p=n("pboS"),h=n("Y1ui"),v=n.n(h),b=n("Ute3"),m=n("nOHt"),O=n("Z6YE"),g=n("N39q"),j=n("PLxQ"),E=a.a.createElement;function w(){var t=Object(m.useRouter)().query,e=Object(O.b)(),n=e.account,c=e.chainId,h=Object(r.useState)([]),w=h[0],y=h[1],S=Object(r.useState)({loaded:!1}),x=S[0],k=S[1],_=Object(r.useState)(!1),N=_[0],C=_[1],I=Object(r.useState)(t.address),W=I[0],T=(I[1],Object(r.useState)(t.experimental)),P=T[0],R=(T[1],function(){var t=Object(i.a)(u.a.mark((function t(){var e,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return q(),t.prev=1,t.next=4,fetch(g.h+"/vaults/"+(W||n)+(P?"?experimental=true":""),{method:"GET",headers:{"Content-Type":"application/json",service:"evmetadata",chainId:c.toString()}});case 4:return e=t.sent,t.next=7,e.json();case 7:r=t.sent,k({loaded:!0}),y(r),A(r),C(!1),t.next=16;break;case 14:t.prev=14,t.t0=t.catch(1);case 16:case"end":return t.stop()}}),t,null,[[1,14]])})));return function(){return t.apply(this,arguments)}}()),q=function(){var t=JSON.parse(localStorage.getItem((W||n)+"_"+c+"_vaults"));t&&(k({loaded:!0}),y(t),C(!0))},A=function(t){localStorage.setItem((W||n)+"_"+c+"_vaults",JSON.stringify(t))},H=Object(r.useState)(""),J=H[0],D=H[1];Object(r.useEffect)((function(){n&&J!=n&&(D(n),k({loaded:!1}),R())}),[n,J]);var U=Object(r.useState)(c),Y=U[0],B=U[1];return Object(r.useEffect)((function(){c&&Y!=c&&(B(c),k({loaded:!1}),R())}),[c,Y]),Object(r.useEffect)((function(){n&&c?R():k({loaded:!0})}),[]),E(v.a,{loaded:x.loaded},N?E(b.a,null):"",E(l.a,{w:"100%",justify:"center",flexWrap:"wrap",mt:10},w.length?w.map((function(t,e){var n=location.pathname.split("/");n.pop();var r=location.origin+n.join("/")+"/nft?id="+t.tokenId,c={flex:"1",minW:"300px",maxW:"300px",borderWidth:"1px",color:"white",mx:"6",mb:"6",rounded:"lg",overflow:"hidden",borderColor:"claimed"==t.status?"green !important":"",cursor:"pointer"};return E(s.a,Object(o.a)({key:e},c,{onClick:function(){location.href=r}}),E(f.a,{fontWeight:"semibold",textAlign:"center",mt:2},t.name,t.private?null:": ~$"+t.totalValue),E(d.a,{align:"center"},E(j.b,{url:t.image})),E(s.a,{d:"flex",alignItems:"baseline"},E(s.a,{color:"gray.500",fontWeight:"semibold",letterSpacing:"wide",fontSize:"sm",ml:"2"},t.private?E(a.a.Fragment,null,E(f.a,null,"Contents hidden. Click to view the vault and unlock values.")):t.values.length?t.values.map((function(t,e){return e<4?E(f.a,{key:t.name,isTruncated:!0},t.name,": ",t.balance):4==e?E(f.a,{fontWeight:"bold",mt:2},"... Click to see the rest ..."):void 0})):E(f.a,null,"Nothing in here! ",E("br",null),"Click to fill 'er up!"))),E(d.a,{align:"center",mt:3},"claimed"==t.status?E(f.a,{color:"green.500"},"CLAIMED"):null))})):E(f.a,null,"YOU DON'T SEEM TO HAVE ANY VAULTS."," ",E(p.a,{color:"#638cd8",href:"../create"},"CREATE ONE HERE!"))))}var y=n("4WaP"),S=a.a.createElement;function x(){return S(r.Suspense,{fallback:S("h1",null,"Loading vaults...")},S(y.a,{fallback:S("h2",null,"Oops! Something went wrong.")},S(w,null)))}},wx14:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))}},[["qH7s",1,0,2,4,3,5,8,12]]]);