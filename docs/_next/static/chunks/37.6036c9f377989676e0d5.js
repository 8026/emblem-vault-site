(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[37],{"6tc4":function(e,t,n){"use strict";var r=n("lSNA"),a=n.n(r),o=n("5D9J"),i=n("OJSm"),c=n("BMxC"),l=n("QdyT");function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=Object(o.a)(c.a)((function(e){var t,n=e.type,r=void 0===n?"checkbox":n,o=e._hover,c=e._invalid,d=e._disabled,s=e._focus,b=e._checked,f=e._child,h=void 0===f?{opacity:0}:f,p=e._checkedAndChild,m=void 0===p?{opacity:1}:p,O=e._checkedAndDisabled,v=e._checkedAndFocus,y=e._checkedAndHover,j="input[type="+r+"]:checked:disabled + &, input[type="+r+"][aria-checked=mixed]:disabled + &",g="input[type="+r+"]:checked:hover:not(:disabled) + &, input[type="+r+"][aria-checked=mixed]:hover:not(:disabled) + &",k="input[type="+r+"]:checked:focus + &, input[type="+r+"][aria-checked=mixed]:focus + &",w="input[type="+r+"]:disabled + &",x="input[type="+r+"]:focus + &",D="input[type="+r+"]:hover:not(:disabled):not(:checked) + &",P="input[type="+r+"]:checked + &, input[type="+r+"][aria-checked=mixed] + &",C="input[type="+r+"][aria-invalid=true] + &";return Object(i.a)(((t={})[x]=Object(l.b)(s),t[D]=Object(l.b)(o),t[w]=Object(l.b)(d),t[C]=Object(l.b)(c),t[j]=Object(l.b)(O),t[k]=Object(l.b)(v),t[g]=Object(l.b)(y),t["& > *"]=Object(l.b)(h),t[P]=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(n,!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},Object(l.b)(b),{"& > *":Object(l.b)(m)}),t))}));d.displayName="ControlBox",d.defaultProps={display:"inline-flex",alignItems:"center",justifyContent:"center",transition:"all 120ms",flexShrink:"0","aria-hidden":"true"},t.a=d},ATmR:function(e,t,n){"use strict";var r=n("q1tI"),a=n("i8i4"),o=n("D7Da");var i=Object(r.forwardRef)((function(e,t){var n=e.children,i=e.container,c=e.isDisabled,l=void 0!==c&&c,u=e.onRendered,d=Object(r.useState)(null),s=d[0],b=d[1],f=Object(o.g)(n.ref,t);return Object(o.f)((function(){l||b(function(e){return e="function"===typeof e?e():e,Object(a.findDOMNode)(e)}(i)||document.body)}),[i,l]),Object(o.f)((function(){if(s&&!l)return Object(o.e)(t,s),function(){Object(o.e)(t,null)}}),[t,s,l]),Object(o.f)((function(){u&&(s||l)&&u()}),[u,s,l]),l?(r.Children.only(n),Object(r.cloneElement)(n,{ref:f})):s?Object(a.createPortal)(n,s):s}));i.displayName="Portal",t.a=i},KLAn:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return oe}));var r=n("rePB"),a=n("ODXe"),o=n("q1tI"),i=n.n(o),c=n("nOHt"),l=n("Z6YE"),u=n("QmWs"),d=n("mf32"),s=n("IDkF"),b=n("sK1y"),f=n("Yn+B"),h=n("pVnL"),p=n.n(h),m=n("8OQS"),O=n.n(m),v=n("qKvR"),y=n("BMxC"),j=n("6tc4"),g=n("+Z5E"),k={sm:{width:"1.375rem",height:"0.75rem"},md:{width:"1.875rem",height:"1rem"},lg:{width:"2.875rem",height:"1.5rem"}},w=Object(o.forwardRef)((function(e,t){var n=e.id,r=e.name,a=e.value,o=e["aria-label"],i=e["aria-labelledby"],c=e.color,l=e.defaultIsChecked,u=e.isChecked,s=e.size,b=e.isDisabled,f=e.isInvalid,h=e.onChange,m=e.onBlur,w=e.onFocus,x=(e.children,O()(e,["id","name","value","aria-label","aria-labelledby","color","defaultIsChecked","isChecked","size","isDisabled","isInvalid","onChange","onBlur","onFocus","children"])),D=Object(d.c)().colorMode,P=k[s]&&k[s].width,C=k[s]&&k[s].height,S={rounded:"full",justifyContent:"flex-start",width:P,height:C,bg:"dark"===D?"whiteAlpha.400":"gray.300",boxSizing:"content-box",p:"2px",_checked:{bg:c+".500"},_child:{transform:"translateX(0)"},_checkedAndChild:{transform:"translateX(calc("+P+" - "+C+"))"},_focus:{boxShadow:"outline"},_hover:{cursor:"pointer"},_checkedAndHover:{cursor:"pointer"},_disabled:{opacity:.4,cursor:"not-allowed"}};return Object(v.d)(y.a,p()({as:"label",display:"inline-block",verticalAlign:"middle"},x),Object(v.d)(g.a,{as:"input",type:"checkbox","aria-label":o,"aria-labelledby":i,id:n,ref:t,name:r,value:a,"aria-invalid":f,defaultChecked:l,onChange:h,onBlur:m,onFocus:w,checked:u,disabled:b}),Object(v.d)(j.a,S,Object(v.d)(y.a,{bg:"white",transition:"transform 250ms",rounded:"full",size:C})))}));w.displayName="Switch",w.defaultProps={color:"blue",size:"md"};var x=w,D=n("lSNA"),P=n.n(D),C=n("CjxU");function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){P()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E={position:"absolute",top:"50%",transform:"translateY(-50%)"},A=function(e){var t=e.thumbSize,n=e.trackPercent;e.theme;return _({},E,{zIndex:1,size:t,rounded:"full",bg:"#fff",boxShadow:"sm",left:"calc("+n+"% - "+t+" / 2)",border:"1px",borderColor:"transparent",transition:"transform 0.2s",_focus:{boxShadow:"outline"},_disabled:{backgroundColor:"gray.300"},_active:{transform:"translateY(-50%) scale(1.15)"}})},R=function(e){var t=e.trackHeight,n=e.trackPercent,r=e.color,a=e.colorMode;return _({},E,{height:t,bg:"light"===a?r+".500":r+".200",width:n+"%",rounded:"sm"})},T={light:{bg:"gray.200",_disabled:{bg:"gray.300"}},dark:{bg:"whiteAlpha.200",_disabled:{bg:"whiteAlpha.300"}}},z=function(e){var t=e.trackHeight,n=(e.theme,e.colorMode);return _({height:t,borderRadius:"sm",width:"100%"},E,{},T[n])},I={width:"full",display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"}},M={lg:{thumb:"16px",trackHeight:"4px"},md:{thumb:"14px",trackHeight:"4px"},sm:{thumb:"10px",trackHeight:"2px"}},N=function(e){var t=Object(C.b)(),n=Object(d.c)().colorMode,r=e.trackPercent,a=e.size,o=e.color,i=M[a],c={trackHeight:i.trackHeight,thumbSize:i.thumb,theme:t,trackPercent:r,color:o,colorMode:n};return{rootStyle:I,trackStyle:z(c),filledTrackStyle:R(c),thumbStyle:A(c)}},B=n("+Cyc"),H=n("D7Da");function L(e,t){return function(e,t){var n=t.toString().split(".")[1],r=n?n.length:0;return Number(e.toFixed(r))}(Math.round(e/t)*t,t)}function F(e,t,n){return e>n?n:e<t?t:e}var U=Object(o.forwardRef)((function(e,t){var n=q(),r=n.thumbRef,a=n.isDisabled,o=n.onFocus,i=n.onThumbKeyDown,c=n.min,l=n.max,u=n.valueText,d=n.orientation,s=n.trackPercent,b=n.size,f=n.color,h=n.value,m=n.ariaLabelledBy,O=N({trackPercent:s,orientation:d,size:b,color:f}).thumbStyle,y=Object(H.g)(r,t);return Object(v.d)(B.a,p()({"data-slider-thumb":"",d:"flex",alignItems:"center",outline:"none",justifyContent:"center",onFocus:o,ref:y,role:"slider",tabIndex:a?void 0:0,"aria-disabled":a,"aria-valuemin":c,"aria-valuetext":u,"aria-orientation":d,"aria-valuenow":h,"aria-valuemax":l,"aria-labelledby":m,onKeyDown:i},O,e))}));U.displayName="SliderThumb";var K=function(e){var t=q(),n=t.trackRef,r=t.isDisabled,a=O()(t,["trackRef","isDisabled"]),o=N(a).trackStyle;return Object(v.d)(y.a,p()({"data-slider-track":"","aria-disabled":r,ref:n},o,e))},V=function(e){var t=q(),n=t.isDisabled,r=O()(t,["isDisabled"]),a=N(r).filledTrackStyle;return Object(v.d)(B.a,p()({"aria-disabled":n,"data-slider-filled-track":""},a,e))},J=Object(o.createContext)(),q=function(){return Object(o.useContext)(J)},Q=Object(o.forwardRef)((function(e,t){var n=e.value,r=e.defaultValue,a=e.onChange,i=e.onKeyDown,c=e.onFocus,l=e.onBlur,u=e.onMouseDown,d=e.isDisabled,s=e.max,b=void 0===s?100:s,f=e.min,h=void 0===f?0:f,m=e.step,j=void 0===m?1:m,g=e["aria-labelledby"],k=(e["aria-label"],e["aria-valuetext"]),w=e.orientation,x=void 0===w?"horizontal":w,D=e.getAriaValueText,P=e.size,C=void 0===P?"md":P,S=e.color,_=void 0===S?"blue":S,E=e.name,A=e.id,R=e.children,T=O()(e,["value","defaultValue","onChange","onKeyDown","onFocus","onBlur","onMouseDown","isDisabled","max","min","step","aria-labelledby","aria-label","aria-valuetext","orientation","getAriaValueText","size","color","name","id","children"]),z=Object(o.useRef)(null!=n).current,I=Object(o.useState)(r||0),M=I[0],B=I[1],H=F(z?n:M,h,b),U=function(e,t,n){return 100*(e-t)/(n-t)}(H,h,b),K=N({trackPercent:U,orientation:x,size:C,color:_}).rootStyle,V=Object(o.useRef)(),q=Object(o.useRef)(),Q=function(e){if(V.current){var t=V.current.getBoundingClientRect(),n=t.left,r=t.width,a=function(e,t,n){return(n-t)*e+t}(((e.touches?e.touches[0]:e).clientX-n)/r,h,b);return j&&(a=L(a,j)),a=F(a,h,b)}},X=Object(o.useCallback)((function(e){z||B(e),a&&a(e)}),[z,a]),Y=function e(){document.body.removeEventListener("mousemove",Z),document.body.removeEventListener("touchmove",Z),document.body.removeEventListener("mouseup",e),document.body.removeEventListener("touchend",e)},Z=function(e){var t=Q(e);X(t)},G=function(e){if(!d){u&&u(e),e.preventDefault();var t=Q(e);t!==H&&X(t),document.body.addEventListener("mousemove",Z),document.body.addEventListener("touchmove",Z),document.body.addEventListener("mouseup",Y),document.body.addEventListener("touchend",Y),q.current&&q.current.focus()}},W=D?D(H):k,$={trackRef:V,thumbRef:q,onThumbKeyDown:function(e){var t,n=!1,r=(b-h)/10;switch(e.key){case"ArrowLeft":case"ArrowDown":t=H-j,n=!0;break;case"ArrowRight":case"ArrowUp":t=H+j,n=!0;break;case"PageDown":t=H-r,n=!0;break;case"PageUp":t=H+r,n=!0;break;case"Home":t=h,n=!0;break;case"End":t=b,n=!0;break;default:return}n&&(e.preventDefault(),e.stopPropagation()),j&&(t=L(t,j)),t=F(t,h,b),X(t),i&&i(e)},onFocus:c,trackPercent:U,ariaLabelledBy:g,orientation:x,isDisabled:d,size:C,color:_,min:h,max:b,valueText:W,value:H};return Object(v.d)(J.Provider,{value:$},Object(v.d)(y.a,p()({role:"presentation",tabIndex:"-1",onMouseDown:G,onTouchStart:G,onMouseLeave:Y,onTouchEnd:Y,onBlur:function(e){Y(),l&&l(e)},py:3,"aria-disabled":d,ref:t,css:{touchAction:"none"}},K,T),R,Object(v.d)("input",{type:"hidden",value:H,name:E,id:A})))}));Q.displayName="Slider";var X=Q,Y=n("eJLp"),Z=n("pboS"),G=n("+QRC"),W=n.n(G),$=n("N39q"),ee=n("21eR"),te=n("zmG3"),ne=i.a.createElement;function re(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?re(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):re(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function oe(e){var t=e.isOpen,n=e.onClose,i=Object(l.b)().chainId,h=Object(d.c)(),p=h.colorMode,m=h.toggleColorMode,O=Object(c.useRouter)().pathname;Object(ee.a)("d",m);var v=Object(te.b)(),y=Object(a.a)(v,2),j=y[0],g=y[1],k=Object(te.c)(),w=Object(a.a)(k,2),D=w[0],P=w[1],C=Object(te.h)(),S=Object(a.a)(C,2),_=S[0],E=S[1],A=Object(te.d)(),R=Object(a.a)(A,1)[0],T=Object(te.f)(),z=Object(a.a)(T,1)[0],I=null;if("number"===typeof i&&(R||z)&&("/buy"===O||"/sell"===O)){var M=ae(Object(r.a)({},$.m.CHAIN,i),"/buy"===O?ae(ae({},R?Object(r.a)({},$.m.OUTPUT,R.address):{}),z?Object(r.a)({},$.m.INPUT,z.address):{}):ae(ae({},R?Object(r.a)({},$.m.INPUT,R.address):{}),z?Object(r.a)({},$.m.OUTPUT,z.address):{}));I=Object(u.resolve)("https://emblem.finance","".concat(O,"?").concat(Object.entries(M).map((function(e){var t=Object(a.a)(e,2),n=t[0],r=t[1];return"".concat(n,"=").concat(r)})).join("&")))}var N=Object(o.useState)(!1),B=N[0],H=N[1];return Object(o.useEffect)((function(){if(B){var e=setTimeout((function(){H(!1)}),750);return function(){clearTimeout(e)}}}),[B]),ne(s.a,{isOpen:t,onClose:n,isCentered:!0},ne(s.g,null),ne(s.d,{color:$.d[p]},ne(s.f,null,ne(b.a,null,"Settings")),ne(s.c,null),ne(s.b,null,ne(f.a,{direction:"column"},ne(f.a,{direction:"row",justify:"space-between"},ne(b.a,null,"Dark Mode"),ne(x,{isChecked:"dark"===p,onChange:m})),ne(f.a,{direction:"row",justify:"space-between"},ne(b.a,null,"Approve Max"),ne(x,{isChecked:j,onChange:g})),ne(f.a,{direction:"row",justify:"space-between"},ne(b.a,null,"Deadline"),ne(f.a,{direction:"column",spacing:0,alignItems:"flex-end",w:"50%",flexShrink:0},ne(X,{min:60,max:3600,step:60,value:D,onChange:P},ne(K,null),ne(V,null),ne(U,null)),ne(f.a,{direction:"row",minHeight:"1.5rem"},D!==$.f&&ne(Y.a,{size:"xs",onClick:function(){P($.f)}},"Reset"),ne(b.a,null,D/60," ",60===D?"minute":"minutes")))),ne(f.a,{direction:"row",justify:"space-between"},ne(b.a,null,"Slippage Tolerance"),ne(f.a,{direction:"column",spacing:0,alignItems:"flex-end",w:"50%",flexShrink:0},ne(X,{min:0,max:400,step:10,value:_,onChange:E},ne(K,null),ne(V,null),ne(U,null)),ne(f.a,{direction:"row",minHeight:"1.5rem"},_!==$.g&&ne(Y.a,{size:"xs",onClick:function(){E($.g)}},"Reset"),ne(b.a,null,(_/100).toFixed(0===_?0:1),"%")))))),ne(s.e,{justifyContent:"space-between"},"string"===typeof I&&ne(Y.a,{variant:"link",isDisabled:B,color:"blue.500",width:"min-content",onClick:function(){try{window.navigator.share({title:"Emblem Vault",url:I}).catch((function(){}))}catch(t){e=I,W()(e),H(!0)}var e}},B?"Copied":"Share Permalink"),ne(Z.a,{href:"https://github.com/NoahZinsmeister/hypertext",target:"_blank",rel:"noopener noreferrer",color:"blue.500"},"Based on Hypertext"),ne(Z.a,{href:"https://github.com/EmblemCompany/emblem-vault-site/tree/".concat("master"),target:"_blank",rel:"noopener noreferrer",color:"blue.500"},null==="master"?void 0:"master".slice(0,7)))))}}}]);