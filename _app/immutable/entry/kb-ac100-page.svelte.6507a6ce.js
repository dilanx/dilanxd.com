import{S as A,i as B,s as H,y as u,a as K,z as c,c as S,A as m,b as p,g as $,d as i,B as _,h as g,q as b,r as E,u as M,I as k,K as q,L,M as z}from"../chunks/index.a4cad43b.js";import{H as C}from"../chunks/Heading.31cf289e.js";import{M as D}from"../chunks/Meta.e893ef72.js";import{S as G}from"../chunks/Section.eacaad4d.js";function I(r){let e;return{c(){e=b(r[0])},l(s){e=E(s,r[0])},m(s,t){p(s,e,t)},p(s,t){t&1&&M(e,s[0])},d(s){s&&g(e)}}}function N(r){let e;const s=r[1].default,t=k(s,r,r[2],null);return{c(){t&&t.c()},l(a){t&&t.l(a)},m(a,l){t&&t.m(a,l),e=!0},p(a,l){t&&t.p&&(!e||l&4)&&q(t,s,a,a[2],e?z(s,a[2],l,null):L(a[2]),null)},i(a){e||($(t,a),e=!0)},o(a){i(t,a),e=!1},d(a){t&&t.d(a)}}}function O(r){let e,s,t,a,l,f;return e=new D({props:{title:`${r[0]} - KB`}}),t=new C({props:{h1:!0,topic:"KNOWLEDGE BASE",$$slots:{default:[I]},$$scope:{ctx:r}}}),l=new G({props:{ws:!0,hm:!0,$$slots:{default:[N]},$$scope:{ctx:r}}}),{c(){u(e.$$.fragment),s=K(),u(t.$$.fragment),a=K(),u(l.$$.fragment)},l(n){c(e.$$.fragment,n),s=S(n),c(t.$$.fragment,n),a=S(n),c(l.$$.fragment,n)},m(n,o){m(e,n,o),p(n,s,o),m(t,n,o),p(n,a,o),m(l,n,o),f=!0},p(n,[o]){const d={};o&1&&(d.title=`${n[0]} - KB`),e.$set(d);const w={};o&5&&(w.$$scope={dirty:o,ctx:n}),t.$set(w);const h={};o&4&&(h.$$scope={dirty:o,ctx:n}),l.$set(h)},i(n){f||($(e.$$.fragment,n),$(t.$$.fragment,n),$(l.$$.fragment,n),f=!0)},o(n){i(e.$$.fragment,n),i(t.$$.fragment,n),i(l.$$.fragment,n),f=!1},d(n){_(e,n),n&&g(s),_(t,n),n&&g(a),_(l,n)}}}function P(r,e,s){let{$$slots:t={},$$scope:a}=e,{title:l}=e;return r.$$set=f=>{"title"in f&&s(0,l=f.title),"$$scope"in f&&s(2,a=f.$$scope)},[l,t,a]}class W extends A{constructor(e){super(),B(this,e,P,O,H,{title:0})}}function j(r){let e;return{c(){e=b("Hello world")},l(s){e=E(s,"Hello world")},m(s,t){p(s,e,t)},d(s){s&&g(e)}}}function v(r){let e,s;return e=new W({props:{title:"About these accounts",$$slots:{default:[j]},$$scope:{ctx:r}}}),{c(){u(e.$$.fragment)},l(t){c(e.$$.fragment,t)},m(t,a){m(e,t,a),s=!0},p(t,[a]){const l={};a&1&&(l.$$scope={dirty:a,ctx:t}),e.$set(l)},i(t){s||($(e.$$.fragment,t),s=!0)},o(t){i(e.$$.fragment,t),s=!1},d(t){_(e,t)}}}class T extends A{constructor(e){super(),B(this,e,null,v,H,{})}}export{T as default};
