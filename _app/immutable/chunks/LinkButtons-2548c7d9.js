import{S as A,i as C,s as D,k as g,l as b,m as v,h as _,n as o,E as m,b as u,B as d,N as P,a as p,c as E,C as V,q as L,r as q,D as k,u as w}from"./index-cd5f678e.js";import{l as S}from"./common-2c5fc204.js";function B(f,e,r){const a=f.slice();return a[5]=e[r].href,a[6]=e[r].target,a[7]=e[r].rel,a[8]=e[r].text,a[9]=e[r].icon,a}function N(f){let e,r=f[8]+"",a,l,n,i;return{c(){e=g("p"),a=L(r),l=p(),n=g("i"),this.h()},l(s){e=b(s,"P",{class:!0});var t=v(e);a=q(t,r),t.forEach(_),l=E(s),n=b(s,"I",{class:!0}),v(n).forEach(_),this.h()},h(){o(e,"class","svelte-64b9or"),o(n,"class",i=k(f[9]||"fas fa-arrow-right")+" svelte-64b9or")},m(s,t){u(s,e,t),V(e,a),u(s,l,t),u(s,n,t)},p(s,t){t&1&&r!==(r=s[8]+"")&&w(a,r),t&1&&i!==(i=k(s[9]||"fas fa-arrow-right")+" svelte-64b9or")&&o(n,"class",i)},d(s){s&&_(e),s&&_(l),s&&_(n)}}}function j(f){let e,r,a,l,n=f[8]+"",i;return{c(){e=g("i"),a=p(),l=g("p"),i=L(n),this.h()},l(s){e=b(s,"I",{class:!0}),v(e).forEach(_),a=E(s),l=b(s,"P",{class:!0});var t=v(l);i=q(t,n),t.forEach(_),this.h()},h(){o(e,"class",r=k(f[9])+" svelte-64b9or"),o(l,"class","svelte-64b9or")},m(s,t){u(s,e,t),u(s,a,t),u(s,l,t),V(l,i)},p(s,t){t&1&&r!==(r=k(s[9])+" svelte-64b9or")&&o(e,"class",r),t&1&&n!==(n=s[8]+"")&&w(i,n)},d(s){s&&_(e),s&&_(a),s&&_(l)}}}function I(f){let e,r,a,l,n;function i(h,c){return h[9]?j:N}let s=i(f),t=s(f);return{c(){e=g("a"),t.c(),r=p(),this.h()},l(h){e=b(h,"A",{href:!0,target:!0,rel:!0,class:!0});var c=v(e);t.l(c),r=E(c),c.forEach(_),this.h()},h(){o(e,"href",a=f[5]),o(e,"target",l=f[6]),o(e,"rel",n=f[7]),o(e,"class","svelte-64b9or"),m(e,"highlight",f[2])},m(h,c){u(h,e,c),t.m(e,null),V(e,r)},p(h,c){s===(s=i(h))&&t?t.p(h,c):(t.d(1),t=s(h),t&&(t.c(),t.m(e,r))),c&1&&a!==(a=h[5])&&o(e,"href",a),c&1&&l!==(l=h[6])&&o(e,"target",l),c&1&&n!==(n=h[7])&&o(e,"rel",n),c&4&&m(e,"highlight",h[2])},d(h){h&&_(e),t.d()}}}function y(f){let e,r=f[0].map(f[4]),a=[];for(let l=0;l<r.length;l+=1)a[l]=I(B(f,r,l));return{c(){e=g("div");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){e=b(l,"DIV",{class:!0});var n=v(e);for(let i=0;i<a.length;i+=1)a[i].l(n);n.forEach(_),this.h()},h(){o(e,"class","svelte-64b9or"),m(e,"margin",f[1]),m(e,"mobileVertical",f[3])},m(l,n){u(l,e,n);for(let i=0;i<a.length;i+=1)a[i].m(e,null)},p(l,[n]){if(n&5){r=l[0].map(l[4]);let i;for(i=0;i<r.length;i+=1){const s=B(l,r,i);a[i]?a[i].p(s,n):(a[i]=I(s),a[i].c(),a[i].m(e,null))}for(;i<a.length;i+=1)a[i].d(1);a.length=r.length}n&2&&m(e,"margin",l[1]),n&8&&m(e,"mobileVertical",l[3])},i:d,o:d,d(l){l&&_(e),P(a,l)}}}function z(f,e,r){let{links:a}=e,{margin:l=!1}=e,{highlight:n=!1}=e,{mobileVertical:i=!1}=e;const s=({to:t,text:h,icon:c})=>({...S(t),text:h,icon:c});return f.$$set=t=>{"links"in t&&r(0,a=t.links),"margin"in t&&r(1,l=t.margin),"highlight"in t&&r(2,n=t.highlight),"mobileVertical"in t&&r(3,i=t.mobileVertical)},[a,l,n,i,s]}class H extends A{constructor(e){super(),C(this,e,z,y,D,{links:0,margin:1,highlight:2,mobileVertical:3})}}export{H as L};