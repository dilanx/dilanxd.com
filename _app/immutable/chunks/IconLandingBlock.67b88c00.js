import{S as D,i as F,s as V,k,a as y,q as P,l as b,m as v,h as d,c as E,r as S,n as g,E as H,F as L,b as w,C as _,u as A,g as z,v as j,d as I,f as G,y as J,z as K,A as M,B as N}from"./index.a4cad43b.js";import{L as O}from"./LinkButtons.ee470ea2.js";function q(a){let t,l;return{c(){t=k("p"),l=P(a[2]),this.h()},l(e){t=b(e,"P",{class:!0});var n=v(t);l=S(n,a[2]),n.forEach(d),this.h()},h(){g(t,"class","subtitle svelte-1hokyzz")},m(e,n){w(e,t,n),_(t,l)},p(e,n){n&4&&A(l,e[2])},d(e){e&&d(t)}}}function C(a){let t,l;return t=new O({props:{links:a[3],highlight:a[4]}}),{c(){J(t.$$.fragment)},l(e){K(t.$$.fragment,e)},m(e,n){M(t,e,n),l=!0},p(e,n){const c={};n&8&&(c.links=e[3]),n&16&&(c.highlight=e[4]),t.$set(c)},i(e){l||(z(t.$$.fragment,e),l=!0)},o(e){I(t.$$.fragment,e),l=!1},d(e){N(t,e)}}}function Q(a){let t,l,e,n,c,r,m,h,s,u=a[2]&&q(a),i=a[3]&&C(a);return{c(){t=k("div"),l=k("i"),n=y(),c=k("p"),r=P(a[1]),m=y(),u&&u.c(),h=y(),i&&i.c(),this.h()},l(o){t=b(o,"DIV",{class:!0});var f=v(t);l=b(f,"I",{class:!0}),v(l).forEach(d),n=E(f),c=b(f,"P",{class:!0});var B=v(c);r=S(B,a[1]),B.forEach(d),m=E(f),u&&u.l(f),h=E(f),i&&i.l(f),f.forEach(d),this.h()},h(){g(l,"class",e=H(a[0])+" svelte-1hokyzz"),g(c,"class","title svelte-1hokyzz"),g(t,"class","svelte-1hokyzz"),L(t,"dark",a[5])},m(o,f){w(o,t,f),_(t,l),_(t,n),_(t,c),_(c,r),_(t,m),u&&u.m(t,null),_(t,h),i&&i.m(t,null),s=!0},p(o,[f]){(!s||f&1&&e!==(e=H(o[0])+" svelte-1hokyzz"))&&g(l,"class",e),(!s||f&2)&&A(r,o[1]),o[2]?u?u.p(o,f):(u=q(o),u.c(),u.m(t,h)):u&&(u.d(1),u=null),o[3]?i?(i.p(o,f),f&8&&z(i,1)):(i=C(o),i.c(),z(i,1),i.m(t,null)):i&&(j(),I(i,1,1,()=>{i=null}),G()),(!s||f&32)&&L(t,"dark",o[5])},i(o){s||(z(i),s=!0)},o(o){I(i),s=!1},d(o){o&&d(t),u&&u.d(),i&&i.d()}}}function R(a,t,l){let{icon:e}=t,{title:n}=t,{subtitle:c=void 0}=t,{buttons:r=void 0}=t,{buttonsHighlighted:m=!1}=t,{dark:h=!1}=t;return a.$$set=s=>{"icon"in s&&l(0,e=s.icon),"title"in s&&l(1,n=s.title),"subtitle"in s&&l(2,c=s.subtitle),"buttons"in s&&l(3,r=s.buttons),"buttonsHighlighted"in s&&l(4,m=s.buttonsHighlighted),"dark"in s&&l(5,h=s.dark)},[e,n,c,r,m,h]}class W extends D{constructor(t){super(),F(this,t,R,Q,V,{icon:0,title:1,subtitle:2,buttons:3,buttonsHighlighted:4,dark:5})}}export{W as I};
