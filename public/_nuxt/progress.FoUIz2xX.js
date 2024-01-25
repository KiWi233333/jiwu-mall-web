import{M as L,R as m,O,hj as V,hk as A,aV as j,av as Q,aw as R,T as U,Q as X,U as Z}from"./entry.t-rqPOs0.js";import{j as I,k as r,W as q,M as B,O as l,P as c,Z as i,u as t,Q as k,a4 as f,X as C,a5 as N,a8 as T,a7 as D,a2 as G,a3 as H}from"./swiper-vue.Dj7aAS3P.js";const J=L({type:{type:String,default:"line",values:["line","circle","dashboard"]},percentage:{type:Number,default:0,validator:u=>u>=0&&u<=100},status:{type:String,default:"",values:["","success","exception","warning"]},indeterminate:{type:Boolean,default:!1},duration:{type:Number,default:3},strokeWidth:{type:Number,default:6},strokeLinecap:{type:m(String),default:"round"},textInside:{type:Boolean,default:!1},width:{type:Number,default:126},showText:{type:Boolean,default:!0},color:{type:m([String,Array,Function]),default:""},striped:Boolean,stripedFlow:Boolean,format:{type:m(Function),default:u=>`${u}%`}}),K=["aria-valuenow"],Y={viewBox:"0 0 100 100"},ee=["d","stroke","stroke-linecap","stroke-width"],te=["d","stroke","opacity","stroke-linecap","stroke-width"],se={key:0},ae=I({name:"ElProgress"}),re=I({...ae,props:J,setup(u){const s=u,v={success:"#13ce66",exception:"#ff4949",warning:"#e6a23c",default:"#20a0ff"},a=O("progress"),_=r(()=>({width:`${s.percentage}%`,animationDuration:`${s.duration}s`,backgroundColor:P(s.percentage)})),y=r(()=>(s.strokeWidth/s.width*100).toFixed(1)),b=r(()=>["circle","dashboard"].includes(s.type)?Number.parseInt(`${50-Number.parseFloat(y.value)/2}`,10):0),w=r(()=>{const e=b.value,o=s.type==="dashboard";return`
          M 50 50
          m 0 ${o?"":"-"}${e}
          a ${e} ${e} 0 1 1 0 ${o?"-":""}${e*2}
          a ${e} ${e} 0 1 1 0 ${o?"":"-"}${e*2}
          `}),h=r(()=>2*Math.PI*b.value),g=r(()=>s.type==="dashboard"?.75:1),$=r(()=>`${-1*h.value*(1-g.value)/2}px`),F=r(()=>({strokeDasharray:`${h.value*g.value}px, ${h.value}px`,strokeDashoffset:$.value})),W=r(()=>({strokeDasharray:`${h.value*g.value*(s.percentage/100)}px, ${h.value}px`,strokeDashoffset:$.value,transition:"stroke-dasharray 0.6s ease 0s, stroke 0.6s ease, opacity ease 0.6s"})),x=r(()=>{let e;return s.color?e=P(s.percentage):e=v[s.status]||v.default,e}),E=r(()=>s.status==="warning"?V:s.type==="line"?s.status==="success"?A:j:s.status==="success"?Q:R),M=r(()=>s.type==="line"?12+s.strokeWidth*.4:s.width*.111111+2),S=r(()=>s.format(s.percentage));function z(e){const o=100/e.length;return e.map((n,d)=>B(n)?{color:n,percentage:(d+1)*o}:n).sort((n,d)=>n.percentage-d.percentage)}const P=e=>{var o;const{color:p}=s;if(q(p))return p(e);if(B(p))return p;{const n=z(p);for(const d of n)if(d.percentage>e)return d.color;return(o=n[n.length-1])==null?void 0:o.color}};return(e,o)=>(l(),c("div",{class:i([t(a).b(),t(a).m(e.type),t(a).is(e.status),{[t(a).m("without-text")]:!e.showText,[t(a).m("text-inside")]:e.textInside}]),role:"progressbar","aria-valuenow":e.percentage,"aria-valuemin":"0","aria-valuemax":"100"},[e.type==="line"?(l(),c("div",{key:0,class:i(t(a).b("bar"))},[k("div",{class:i(t(a).be("bar","outer")),style:f({height:`${e.strokeWidth}px`})},[k("div",{class:i([t(a).be("bar","inner"),{[t(a).bem("bar","inner","indeterminate")]:e.indeterminate},{[t(a).bem("bar","inner","striped")]:e.striped},{[t(a).bem("bar","inner","striped-flow")]:e.stripedFlow}]),style:f(t(_))},[(e.showText||e.$slots.default)&&e.textInside?(l(),c("div",{key:0,class:i(t(a).be("bar","innerText"))},[C(e.$slots,"default",{percentage:e.percentage},()=>[k("span",null,N(t(S)),1)])],2)):T("v-if",!0)],6)],6)],2)):(l(),c("div",{key:1,class:i(t(a).b("circle")),style:f({height:`${e.width}px`,width:`${e.width}px`})},[(l(),c("svg",Y,[k("path",{class:i(t(a).be("circle","track")),d:t(w),stroke:`var(${t(a).cssVarName("fill-color-light")}, #e5e9f2)`,"stroke-linecap":e.strokeLinecap,"stroke-width":t(y),fill:"none",style:f(t(F))},null,14,ee),k("path",{class:i(t(a).be("circle","path")),d:t(w),stroke:t(x),fill:"none",opacity:e.percentage?1:0,"stroke-linecap":e.strokeLinecap,"stroke-width":t(y),style:f(t(W))},null,14,te)]))],6)),(e.showText||e.$slots.default)&&!e.textInside?(l(),c("div",{key:2,class:i(t(a).e("text")),style:f({fontSize:`${t(M)}px`})},[C(e.$slots,"default",{percentage:e.percentage},()=>[e.status?(l(),D(t(U),{key:1},{default:G(()=>[(l(),D(H(t(E))))]),_:1})):(l(),c("span",se,N(t(S)),1))])],6)):T("v-if",!0)],10,K))}});var oe=X(re,[["__file","/home/runner/work/element-plus/element-plus/packages/components/progress/src/progress.vue"]]);const ie=Z(oe);export{ie as E};