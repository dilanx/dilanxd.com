import{S as q,i as D,s as H,H as V,k as r,a as S,l as d,m as w,c as k,h as o,n as v,E as c,b,C as m,K,L,M,f as N,t as O,q as y,r as C,u as I}from"./index-31298124.js";function g(f){let e,t,u=f[4].title+"",i,s,n=f[4].subtitle&&E(f);return{c(){e=r("div"),t=r("h2"),i=y(u),s=S(),n&&n.c(),this.h()},l(a){e=d(a,"DIV",{class:!0});var l=w(e);t=d(l,"H2",{class:!0});var _=w(t);i=C(_,u),_.forEach(o),s=k(l),n&&n.l(l),l.forEach(o),this.h()},h(){v(t,"class","svelte-1gyiwa"),v(e,"class","label svelte-1gyiwa")},m(a,l){b(a,e,l),m(e,t),m(t,i),m(e,s),n&&n.m(e,null)},p(a,l){l&16&&u!==(u=a[4].title+"")&&I(i,u),a[4].subtitle?n?n.p(a,l):(n=E(a),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(a){a&&o(e),n&&n.d()}}}function E(f){let e,t=f[4].subtitle+"",u;return{c(){e=r("p"),u=y(t),this.h()},l(i){e=d(i,"P",{class:!0});var s=w(e);u=C(s,t),s.forEach(o),this.h()},h(){v(e,"class","svelte-1gyiwa")},m(i,s){b(i,e,s),m(e,u)},p(i,s){s&16&&t!==(t=i[4].subtitle+"")&&I(u,t)},d(i){i&&o(e)}}}function P(f){let e,t,u,i,s=f[4]&&g(f);const n=f[6].default,a=V(n,f,f[5],null);return{c(){e=r("section"),t=r("div"),s&&s.c(),u=S(),a&&a.c(),this.h()},l(l){e=d(l,"SECTION",{class:!0});var _=w(e);t=d(_,"DIV",{class:!0});var h=w(t);s&&s.l(h),u=k(h),a&&a.l(h),h.forEach(o),_.forEach(o),this.h()},h(){v(t,"class","content svelte-1gyiwa"),v(e,"class","svelte-1gyiwa"),c(e,"ws",f[0]),c(e,"wm",f[1]),c(e,"hs",f[2]),c(e,"hm",f[3])},m(l,_){b(l,e,_),m(e,t),s&&s.m(t,null),m(t,u),a&&a.m(t,null),i=!0},p(l,[_]){l[4]?s?s.p(l,_):(s=g(l),s.c(),s.m(t,u)):s&&(s.d(1),s=null),a&&a.p&&(!i||_&32)&&K(a,n,l,l[5],i?M(n,l[5],_,null):L(l[5]),null),(!i||_&1)&&c(e,"ws",l[0]),(!i||_&2)&&c(e,"wm",l[1]),(!i||_&4)&&c(e,"hs",l[2]),(!i||_&8)&&c(e,"hm",l[3])},i(l){i||(N(a,l),i=!0)},o(l){O(a,l),i=!1},d(l){l&&o(e),s&&s.d(),a&&a.d(l)}}}function T(f,e,t){let{$$slots:u={},$$scope:i}=e,{ws:s=!1}=e,{wm:n=!1}=e,{hs:a=!1}=e,{hm:l=!1}=e,{label:_=void 0}=e;return f.$$set=h=>{"ws"in h&&t(0,s=h.ws),"wm"in h&&t(1,n=h.wm),"hs"in h&&t(2,a=h.hs),"hm"in h&&t(3,l=h.hm),"label"in h&&t(4,_=h.label),"$$scope"in h&&t(5,i=h.$$scope)},[s,n,a,l,_,i,u]}class z extends q{constructor(e){super(),D(this,e,T,P,H,{ws:0,wm:1,hs:2,hm:3,label:4})}}export{z as S};
