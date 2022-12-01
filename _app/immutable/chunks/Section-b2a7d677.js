import{S,i as M,s as T,e as E,k as m,I as O,l as _,h as f,n as h,C as b,B as k,O as j,b as g,a as v,c as w,H as q,m as p,E as d,J as H,K as P,L as V,f as B,t as J,q as A,r as I,u as C}from"./index-2efb65f2.js";import{s as K}from"./singletons-b9133890.js";const L=()=>{const o=K,e={page:{subscribe:o.page.subscribe},navigating:{subscribe:o.navigating.subscribe},updated:o.updated};return Object.defineProperties(e,{preloading:{get(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:o.navigating.subscribe}},enumerable:!1},session:{get(){return F(),{}},enumerable:!1}}),e},z={subscribe(o){return L().page.subscribe(o)}};function F(){throw new Error("stores.session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")}function G(o){let e,t;return{c(){e=v(),t=m("meta"),this.h()},l(n){e=w(n),t=_(n,"META",{property:!0,content:!0}),this.h()},h(){document.title="Dilan Nair",h(t,"property","og:title"),h(t,"content","Dilan Nair")},m(n,r){g(n,e,r),g(n,t,r)},p:k,d(n){n&&f(e),n&&f(t)}}}function Q(o){let e,t,n,r;return document.title=e=o[0]+" - Dilan Nair",{c(){t=v(),n=m("meta"),this.h()},l(s){t=w(s),n=_(s,"META",{property:!0,content:!0}),this.h()},h(){h(n,"property","og:title"),h(n,"content",r=`${o[0]} - Dilan Nair`)},m(s,i){g(s,t,i),g(s,n,i)},p(s,i){i&1&&e!==(e=s[0]+" - Dilan Nair")&&(document.title=e),i&1&&r!==(r=`${s[0]} - Dilan Nair`)&&h(n,"content",r)},d(s){s&&f(t),s&&f(n)}}}function y(o){let e;return{c(){e=m("meta"),this.h()},l(t){e=_(t,"META",{name:!0,content:!0}),this.h()},h(){h(e,"name","description"),h(e,"content",o[1])},m(t,n){g(t,e,n)},p(t,n){n&2&&h(e,"content",t[1])},d(t){t&&f(e)}}}function R(o){let e,t,n;function r(l,c){return l[0]?Q:G}let s=r(o),i=s(o),a=o[1]&&y(o);return{c(){i.c(),e=E(),a&&a.c(),t=m("meta"),this.h()},l(l){const c=O("svelte-11tni9d",document.head);i.l(c),e=E(),a&&a.l(c),t=_(c,"META",{property:!0,content:!0}),c.forEach(f),this.h()},h(){h(t,"property","og:url"),h(t,"content",n=o[2].url.href)},m(l,c){i.m(document.head,null),b(document.head,e),a&&a.m(document.head,null),b(document.head,t)},p(l,[c]){s===(s=r(l))&&i?i.p(l,c):(i.d(1),i=s(l),i&&(i.c(),i.m(e.parentNode,e))),l[1]?a?a.p(l,c):(a=y(l),a.c(),a.m(t.parentNode,t)):a&&(a.d(1),a=null),c&4&&n!==(n=l[2].url.href)&&h(t,"content",n)},i:k,o:k,d(l){i.d(l),f(e),a&&a.d(l),f(t)}}}function U(o,e,t){let n;j(o,z,i=>t(2,n=i));let{title:r=void 0}=e,{description:s=void 0}=e;return o.$$set=i=>{"title"in i&&t(0,r=i.title),"description"in i&&t(1,s=i.description)},[r,s,n]}class x extends S{constructor(e){super(),M(this,e,U,R,T,{title:0,description:1})}}function N(o){let e,t,n=o[4].title+"",r,s,i=o[4].subtitle&&D(o);return{c(){e=m("div"),t=m("h2"),r=A(n),s=v(),i&&i.c(),this.h()},l(a){e=_(a,"DIV",{class:!0});var l=p(e);t=_(l,"H2",{class:!0});var c=p(t);r=I(c,n),c.forEach(f),s=w(l),i&&i.l(l),l.forEach(f),this.h()},h(){h(t,"class","svelte-1gyiwa"),h(e,"class","label svelte-1gyiwa")},m(a,l){g(a,e,l),b(e,t),b(t,r),b(e,s),i&&i.m(e,null)},p(a,l){l&16&&n!==(n=a[4].title+"")&&C(r,n),a[4].subtitle?i?i.p(a,l):(i=D(a),i.c(),i.m(e,null)):i&&(i.d(1),i=null)},d(a){a&&f(e),i&&i.d()}}}function D(o){let e,t=o[4].subtitle+"",n;return{c(){e=m("p"),n=A(t),this.h()},l(r){e=_(r,"P",{class:!0});var s=p(e);n=I(s,t),s.forEach(f),this.h()},h(){h(e,"class","svelte-1gyiwa")},m(r,s){g(r,e,s),b(e,n)},p(r,s){s&16&&t!==(t=r[4].subtitle+"")&&C(n,t)},d(r){r&&f(e)}}}function W(o){let e,t,n,r,s=o[4]&&N(o);const i=o[6].default,a=q(i,o,o[5],null);return{c(){e=m("section"),t=m("div"),s&&s.c(),n=v(),a&&a.c(),this.h()},l(l){e=_(l,"SECTION",{class:!0});var c=p(e);t=_(c,"DIV",{class:!0});var u=p(t);s&&s.l(u),n=w(u),a&&a.l(u),u.forEach(f),c.forEach(f),this.h()},h(){h(t,"class","content svelte-1gyiwa"),h(e,"class","svelte-1gyiwa"),d(e,"ws",o[0]),d(e,"wm",o[1]),d(e,"hs",o[2]),d(e,"hm",o[3])},m(l,c){g(l,e,c),b(e,t),s&&s.m(t,null),b(t,n),a&&a.m(t,null),r=!0},p(l,[c]){l[4]?s?s.p(l,c):(s=N(l),s.c(),s.m(t,n)):s&&(s.d(1),s=null),a&&a.p&&(!r||c&32)&&H(a,i,l,l[5],r?V(i,l[5],c,null):P(l[5]),null),(!r||c&1)&&d(e,"ws",l[0]),(!r||c&2)&&d(e,"wm",l[1]),(!r||c&4)&&d(e,"hs",l[2]),(!r||c&8)&&d(e,"hm",l[3])},i(l){r||(B(a,l),r=!0)},o(l){J(a,l),r=!1},d(l){l&&f(e),s&&s.d(),a&&a.d(l)}}}function X(o,e,t){let{$$slots:n={},$$scope:r}=e,{ws:s=!1}=e,{wm:i=!1}=e,{hs:a=!1}=e,{hm:l=!1}=e,{label:c=void 0}=e;return o.$$set=u=>{"ws"in u&&t(0,s=u.ws),"wm"in u&&t(1,i=u.wm),"hs"in u&&t(2,a=u.hs),"hm"in u&&t(3,l=u.hm),"label"in u&&t(4,c=u.label),"$$scope"in u&&t(5,r=u.$$scope)},[s,i,a,l,c,r,n]}class $ extends S{constructor(e){super(),M(this,e,X,W,T,{ws:0,wm:1,hs:2,hm:3,label:4})}}export{x as M,$ as S};