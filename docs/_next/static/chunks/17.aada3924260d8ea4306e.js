(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"0bCS":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return w}));var i=n("q1tI"),u=n.n(i),c=n("mf32"),o=n("IDkF"),r=n("sK1y"),a=n("Yn+B"),l=n("eJLp"),s=n("+QRC"),f=n.n(s),p=n("N39q"),d=u.a.createElement;function w(e){var t=e.isOpen,n=e.onClose,s=e.mnemonic,w=e.privKeyBTC,m=e.privKeyETH,T=e.privValues,v=s,y=w,h=m,b=Object(c.c)().colorMode,C=Object(i.useState)(!1),k=C[0],j=C[1];Object(i.useEffect)((function(){if(k){var e=setTimeout((function(){j(!1)}),750);return function(){clearTimeout(e)}}}),[k]);var E=Object(i.useState)(!1),O=E[0],S=E[1];Object(i.useEffect)((function(){if(O){var e=setTimeout((function(){S(!1)}),750);return function(){clearTimeout(e)}}}),[O]);var K=Object(i.useState)(!1),g=K[0],Y=K[1];Object(i.useEffect)((function(){if(g){var e=setTimeout((function(){Y(!1)}),750);return function(){clearTimeout(e)}}}),[g]);var B=Object(i.useState)(!1),H=B[0],_=B[1];function J(e,t){f()(e),"phrase"==t?j(!0):"BTCKey"==t?S(!0):"ETHKey"==t?Y(!0):"values"==t&&_(!0)}return Object(i.useEffect)((function(){if(H){var e=setTimeout((function(){_(!1)}),750);return function(){clearTimeout(e)}}}),[H]),d(o.a,{isOpen:t,onClose:n,isCentered:!0},d(o.g,null),d(o.d,{color:p.d[b]},d(o.f,null,d(r.a,null,"Your Vault Keys")),d(o.c,null),d(o.b,null,d(a.a,{direction:"column",mb:10},d(a.a,{direction:"row"},d(r.a,null,"Your mnemonic phrase (click to copy):")),d(a.a,{direction:"row"},d(l.a,{width:"100%",whiteSpace:"unset",height:"unset",p:2,onClick:function(){return J(v,"phrase")},isActive:!0},d(r.a,null,k?"Copied!":v))),d(a.a,{direction:"row",mt:4},d(r.a,null,"Your BTC private key (click to copy):")),d(a.a,{direction:"row",justify:"space-between"},d(l.a,{whiteSpace:"unset",height:"unset",p:2,onClick:function(){return J(y,"BTCKey")}},O?d(r.a,null,"Copied!"):d(r.a,{isTruncated:!0},y))),d(a.a,{direction:"row",mt:4},d(r.a,null,"Your ETH private key (click to copy):")),d(a.a,{direction:"row",justify:"space-between"},d(l.a,{whiteSpace:"unset",height:"unset",p:2,onClick:function(){return J(h,"ETHKey")}},g?d(r.a,null,"Copied!"):d(r.a,{isTruncated:!0},h))),T.length>0?d(u.a.Fragment,null,d(a.a,{direction:"row",mt:4},d(r.a,null,"Your Values (click to copy): ")),T.map((function(e,t){return d(a.a,{direction:"row",key:t,justify:"space-between"},d(r.a,{isTruncated:!0},e.key),d(l.a,{whiteSpace:"unset",height:"unset",p:2,onClick:function(){return J(e.value,"values")}},H?d(r.a,null,"Copied!"):d(r.a,{isTruncated:!0},e.value)))}))):null))))}}}]);