import{S as I,i as q,s as A,k as g,l as v,m as b,h as o,n as u,E as m,b as _,B as E,N as C,a as p,c as j,C as y,q as d,r as L,D as k,u as B}from"./index-2efb65f2.js";const H=r=>({to:r,text:"Learn more",icon:"fas fa-arrow-right"}),N=r=>({to:"https://github.com/"+r,newTab:!0,icon:"fab fa-github",text:"GitHub"}),z=(r,e)=>({to:e,newTab:!0,icon:"fas fa-external-link-alt",text:r}),D=r=>r.startsWith("https://")||r.startsWith("http://")?{href:r,target:"_blank",rel:"noreferrer"}:{href:r};function V(r,e,n){const a=r.slice();return a[5]=e[n].href,a[6]=e[n].target,a[7]=e[n].rel,a[8]=e[n].text,a[9]=e[n].icon,a}function P(r){let e,n=r[8]+"",a,t,h,i;return{c(){e=g("p"),a=d(n),t=p(),h=g("i"),this.h()},l(s){e=v(s,"P",{class:!0});var l=b(e);a=L(l,n),l.forEach(o),t=j(s),h=v(s,"I",{class:!0}),b(h).forEach(o),this.h()},h(){u(e,"class","svelte-1hya1ju"),u(h,"class",i=k(r[9]||"fas fa-arrow-right")+" svelte-1hya1ju")},m(s,l){_(s,e,l),y(e,a),_(s,t,l),_(s,h,l)},p(s,l){l&1&&n!==(n=s[8]+"")&&B(a,n),l&1&&i!==(i=k(s[9]||"fas fa-arrow-right")+" svelte-1hya1ju")&&u(h,"class",i)},d(s){s&&o(e),s&&o(t),s&&o(h)}}}function S(r){let e,n,a,t,h=r[8]+"",i;return{c(){e=g("i"),a=p(),t=g("p"),i=d(h),this.h()},l(s){e=v(s,"I",{class:!0}),b(e).forEach(o),a=j(s),t=v(s,"P",{class:!0});var l=b(t);i=L(l,h),l.forEach(o),this.h()},h(){u(e,"class",n=k(r[9])+" svelte-1hya1ju"),u(t,"class","svelte-1hya1ju")},m(s,l){_(s,e,l),_(s,a,l),_(s,t,l),y(t,i)},p(s,l){l&1&&n!==(n=k(s[9])+" svelte-1hya1ju")&&u(e,"class",n),l&1&&h!==(h=s[8]+"")&&B(i,h)},d(s){s&&o(e),s&&o(a),s&&o(t)}}}function w(r){let e,n,a,t,h;function i(f,c){return f[9]?S:P}let s=i(r),l=s(r);return{c(){e=g("a"),l.c(),n=p(),this.h()},l(f){e=v(f,"A",{href:!0,target:!0,rel:!0,class:!0});var c=b(e);l.l(c),n=j(c),c.forEach(o),this.h()},h(){u(e,"href",a=r[5]),u(e,"target",t=r[6]),u(e,"rel",h=r[7]),u(e,"class","svelte-1hya1ju"),m(e,"highlight",r[2])},m(f,c){_(f,e,c),l.m(e,null),y(e,n)},p(f,c){s===(s=i(f))&&l?l.p(f,c):(l.d(1),l=s(f),l&&(l.c(),l.m(e,n))),c&1&&a!==(a=f[5])&&u(e,"href",a),c&1&&t!==(t=f[6])&&u(e,"target",t),c&1&&h!==(h=f[7])&&u(e,"rel",h),c&4&&m(e,"highlight",f[2])},d(f){f&&o(e),l.d()}}}function T(r){let e,n=r[0].map(r[4]),a=[];for(let t=0;t<n.length;t+=1)a[t]=w(V(r,n,t));return{c(){e=g("div");for(let t=0;t<a.length;t+=1)a[t].c();this.h()},l(t){e=v(t,"DIV",{class:!0});var h=b(e);for(let i=0;i<a.length;i+=1)a[i].l(h);h.forEach(o),this.h()},h(){u(e,"class","svelte-1hya1ju"),m(e,"margin",r[1]),m(e,"mobileVertical",r[3])},m(t,h){_(t,e,h);for(let i=0;i<a.length;i+=1)a[i].m(e,null)},p(t,[h]){if(h&5){n=t[0].map(t[4]);let i;for(i=0;i<n.length;i+=1){const s=V(t,n,i);a[i]?a[i].p(s,h):(a[i]=w(s),a[i].c(),a[i].m(e,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=n.length}h&2&&m(e,"margin",t[1]),h&8&&m(e,"mobileVertical",t[3])},i:E,o:E,d(t){t&&o(e),C(a,t)}}}function W(r,e,n){let{links:a}=e,{margin:t=!1}=e,{highlight:h=!1}=e,{mobileVertical:i=!1}=e;const s=({to:l,text:f,icon:c})=>({...D(l),text:f,icon:c});return r.$$set=l=>{"links"in l&&n(0,a=l.links),"margin"in l&&n(1,t=l.margin),"highlight"in l&&n(2,h=l.highlight),"mobileVertical"in l&&n(3,i=l.mobileVertical)},[a,t,h,i,s]}class F extends I{constructor(e){super(),q(this,e,W,T,A,{links:0,margin:1,highlight:2,mobileVertical:3})}}export{F as L,H as a,z as e,N as g,D as l};