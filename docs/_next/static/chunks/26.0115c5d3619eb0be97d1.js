(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[26],{"0bCS":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var u=n("q1tI"),i=n.n(u),c=n("mf32"),o=n("IDkF"),r=n("sK1y"),a=n("Yn+B"),l=n("eJLp"),s=n("+QRC"),f=n.n(s),p=n("N39q"),m=i.a.createElement;function d(e){var t=e.isOpen,n=e.onClose,s=e.mnemonic,d=(e.privKeyBTC,e.privKeyETH,e.privValues),v=e.addresses,b=s,w=Object(c.c)().colorMode,y=Object(u.useState)(!1),T=y[0],h=y[1];Object(u.useEffect)((function(){if(T){var e=setTimeout((function(){h(!1)}),750);return function(){clearTimeout(e)}}}),[T]);var C=Object(u.useState)(!1),k=C[0],O=C[1];Object(u.useEffect)((function(){if(k){var e=setTimeout((function(){O(!1)}),750);return function(){clearTimeout(e)}}}),[k]);var j=Object(u.useState)(!1),E=j[0],S=j[1];Object(u.useEffect)((function(){if(E){var e=setTimeout((function(){S(!1)}),750);return function(){clearTimeout(e)}}}),[E]);var g=Object(u.useState)(!1),K=g[0],B=g[1];Object(u.useEffect)((function(){if(K){var e=setTimeout((function(){B(!1)}),750);return function(){clearTimeout(e)}}}),[K]);var Y=Object(u.useState)(!1),H=Y[0],_=Y[1];function F(e,t){f()(e),"phrase"==t?h(!0):"BTCKey"==t?O(!0):"ETHKey"==t?S(!0):"BCHKey"==t?B(!0):"values"==t&&_(!0)}return Object(u.useEffect)((function(){if(H){var e=setTimeout((function(){_(!1)}),750);return function(){clearTimeout(e)}}}),[H]),m(o.a,{isOpen:t,onClose:n,isCentered:!0},m(o.g,null),m(o.d,{color:p.c[w]},m(o.f,null,m(r.a,null,"Your Vault Keys")),m(o.c,null),m(o.b,null,m(a.a,{direction:"column",mb:10},m(a.a,{direction:"row"},m(r.a,null,"Your mnemonic phrase (click to copy):")),m(a.a,{direction:"row"},m(l.a,{width:"100%",whiteSpace:"unset",height:"unset",p:2,onClick:function(){return F(b,"phrase")},isActive:!0},m(r.a,null,T?"Copied!":b))),d&&d.length>0?m(i.a.Fragment,null,m(a.a,{direction:"row",mt:4},m(r.a,null,"Your Values (click to copy): ")),d.map((function(e,t){return m(a.a,{direction:"row",key:t,justify:"space-between"},m(r.a,{isTruncated:!0},e.key),m(l.a,{whiteSpace:"unset",height:"unset",p:2,onClick:function(){return F(e.value,"values")}},H?m(r.a,null,"Copied!"):m(r.a,{isTruncated:!0},e.value)))}))):null,v.length>0?v.map((function(e,t){if("TEZOS"!==e.coin)return m(i.a.Fragment,null,m(a.a,{direction:"row",mt:4},m(r.a,null,"Your ",e.coin," private key (click to copy):")),m(a.a,{direction:"row",justify:"space-between"},m(l.a,{whiteSpace:"unset",height:"unset",p:2,onClick:function(){return F(e.key,"BCHKey")}},K?m(r.a,null,"Copied!"):m(r.a,{isTruncated:!0},e.key))))})):null))))}}}]);