import{hm as t,h3 as l,hx as m,hE as r}from"./entry.t-rqPOs0.js";var b=t?t.isConcatSpreadable:void 0;function x(n){return l(n)||m(n)||!!(b&&n&&n[b])}function e(n,h,i,s,f){var a=-1,g=n.length;for(i||(i=x),f||(f=[]);++a<g;){var o=n[a];h>0&&i(o)?h>1?e(o,h-1,i,s,f):r(f,o):s||(f[f.length]=o)}return f}function F(n){var h=n==null?0:n.length;return h?e(n,1):[]}export{e as b,F as f};