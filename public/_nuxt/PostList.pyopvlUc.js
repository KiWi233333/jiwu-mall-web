import{_ as K}from"./ElImage.MMEIiX96.js";import{_ as W}from"./nuxt-link.AUBdcVxd.js";import{u as X,B as N,j as Y,n as Z,E as O,d as tt,e as q,f as H,ai as et,w as at,S as ot}from"./entry.t-rqPOs0.js";import{E as st}from"./tag.C0ahusY6.js";import{_ as nt}from"./TagList.vue.OeOiiCEW.js";import{_ as it}from"./CommentPreview.1tOtzHAm.js";import{j as Q,k as L,a as $,ap as M,O as r,P as p,Q as a,$ as d,a2 as c,u as o,a7 as B,a8 as U,a5 as C,a6 as R,ad as rt,a0 as G,as as J,ab as S,an as lt,ao as dt,r as ct,ac as mt}from"./swiper-vue.Dj7aAS3P.js";import{_ as ut}from"./AutoIncre.vue.cpfunnOh.js";import{m as pt}from"./post.az1H9mBx.js";import"./debounce.0E-5_dMF.js";import"./select.CPu1gYEQ.js";import"./popper.b7Al0Wsi.js";import"./scrollbar.VqFpSCdd.js";import"./strings.Y1vdtDWm.js";import"./isEqual.OSnr_sHV.js";import"./hasIn.6fummut8.js";import"./index.dh5FAeg5.js";import"./OssFileUpload.AYjrnYRm.js";import"./progress.FoUIz2xX.js";import"./index.keDQovFV.js";import"./notification.YJSnxgg5.js";const b=_=>(lt("data-v-17dcffa2"),_=_(),dt(),_),_t={"w-full":"",flex:"","grid-gap-2":""},ft={"max-w-20rem":"",flex:"","flex-col":"",truncate:""},gt={"mt-1":"","opacity-60":""},vt={class:"ml-a"},ht=b(()=>a("i",{"i-solar:crown-star-bold":"","mr-1":"","p-0.5em":""},null,-1)),wt={"mt-1":"","border-0":"","border-t-1px":"","pt-3":"","border-default":""},yt={for:"content",class:"truncate"},kt={class:"transition-[all_0.2s] grid grid-cols-2 mt-4 cursor-pointer gap-4 md:grid-cols-5"},$t={class:"grid mt-4 w-full flex grid-gap-2 truncate opacity-70"},Ct={class:"mt-4 w-full flex-row-bt-c"},Tt={class:"link-text"},bt=b(()=>a("i",{class:"i-solar:share-outline mr-1 p-0.5em"},null,-1)),It=b(()=>a("small",null,"分享",-1)),Bt=[bt,It],Lt={flex:""},St=b(()=>a("i",{class:"i-solar:chat-dots-outline mr-1 p-0.5em"},null,-1)),Pt=b(()=>a("i",{class:"i-solar:like-outline mr-1 p-0.5em"},null,-1)),Et={"overflow-hidden":""},xt=Q({__name:"PostLine",props:{data:{},userId:{}},setup(_){const{data:f}=_,i=X(),g=L(()=>{const t=(Date.now()-new Date(f.createTime).getTime())/1e3/60;return t>24?f.createTime:t>60?`${Math.floor(t/60)}小时前`:`${Math.floor(t)}分钟前`}),l=L(()=>{var n;const t=[];return t.push(N+f.cover),f.images&&t.push(...(n=f.images.split(",").filter(m=>m))==null?void 0:n.map(m=>N+m)),t});function k(t){O.warning("该功能未开放！")}function P(t,n){O.warning("该功能未开放！")}function s(t){if(!i.getToken)return i.showLoginForm=!0;t&&t()}const v=$(!1),h=`${location.protocol}/${location==null?void 0:location.host}`;return(t,n)=>{var j;const m=K,w=W,e=tt,V=st,E=nt,I=q,x=it,D=M("copying"),y=M("auto-animate");return r(),p("div",{class:"group grid grid-gap-2 leading-1.4em",onDblclick:n[3]||(n[3]=u=>("navigateTo"in t?t.navigateTo:o(Z))(`/community/post/detail/${t.data.id}`))},[a("div",_t,[d(w,{to:{path:"/user/info",query:{id:(j=t.data)==null?void 0:j.userId}},class:"flex-row-c-c"},{default:c(()=>{var u,T,z,A,F;return[(T=(u=t.data)==null?void 0:u.user)!=null&&T.avatar?(r(),B(m,{key:0,src:("BaseUrlImg"in t?t.BaseUrlImg:o(N))+((A=(z=t.data)==null?void 0:z.user)==null?void 0:A.avatar),class:"mr-2 h-2.6rem w-2.6rem rounded-1/2 border-default card-default"},null,8,["src"])):U("",!0),a("div",ft,[a("span",null,C((F=t.data)==null?void 0:F.user.nickname),1),a("small",gt,C(o(g)),1)])]}),_:1},8,["to"]),a("div",vt,[d(e,{type:"info",plain:"",round:"",class:"ml-a opacity-0 group-hover:opacity-100","icon-class":"i-tabler:plus mr-2","transition-icon":!0,size:"small",onClick:n[0]||(n[0]=rt(u=>o(i).getTokenFn()&&k(t.userId),["stop"]))},{default:c(()=>[R(" 关注 ")]),_:1}),t.data.isEssence?(r(),B(V,{key:0,class:"font-600 shadow",round:"","ml-2":"",style:{padding:"0.2rem 0.4rem"},type:"warning",effect:"dark"},{default:c(()=>[ht,R(" 精选 ")]),_:1})):U("",!0)])]),a("main",wt,[d(w,{tag:"div",to:`/community/post/detail/${t.data.id}`},{default:c(()=>[a("label",yt,C(t.data.title),1)]),_:1},8,["to"]),a("div",kt,[(r(!0),p(G,null,J(o(l),(u,T)=>(r(),B(m,{key:T,fit:"cover",class:"h-8rem max-w-14rem object-cover border-default card-default",loading:"lazy","preview-teleported":"",src:u,"initial-index":T,"preview-src-list":o(l)},null,8,["src","initial-index","preview-src-list"]))),128))]),a("div",$t,[d(E,{tags:t.data.tags,effect:"light"},null,8,["tags"])]),a("div",Ct,[d(I,null,{default:c(()=>[S((r(),p("span",Tt,Bt)),[[D,`${h}/community/post/detail/${t.data.id}`,void 0,{toast:!0}]])]),_:1}),a("div",Lt,[a("span",{class:"link-text tip-group tip-group ml-4",onClick:n[1]||(n[1]=u=>s(()=>v.value=!o(v)))},[St,a("small",null,C(t.data.comments?`${t.data.comments>99?"99+":t.data.comments}`:"评论"),1)]),a("span",{class:"link-text ml-4",onClick:n[2]||(n[2]=u=>s(()=>P(t.data.id)))},[Pt,a("small",null,C(`${t.data.likes>99?"99+":t.data.likes}`),1)])])]),S((r(),p("div",Et,[d(I,null,{default:c(()=>[o(v)?(r(),B(x,{key:"CardCommentPreview","post-id":t.data.id,limit:10,dto:{isNew:("isTrue"in t?t.isTrue:o(Y)).TRUE},class:"mt-4"},null,8,["post-id","dto"])):U("",!0)]),_:1})])),[[y]])])],32)}}}),Dt=H(xt,[["__scopeId","data-v-17dcffa2"]]),Nt={class:"grid grid-gap-6"},Ut=Q({__name:"PostList",props:{dto:{default:()=>({})},limit:{},class:{default:""},immediate:{type:Boolean,default:!0}},setup(_,{expose:f}){const i=_,g=$(!1),l=$([]),k=$(0),P=$(i.limit||10),s=ct({total:-1,pages:-1,current:-1}),v=L(()=>(s==null?void 0:s.total)===0&&s.pages===0),h=L(()=>s.pages>0&&(k.value>=s.pages||i.limit!==void 0&&i.limit<=l.value.length));async function t(){if(g.value||h.value||v.value)return;if(i.limit!==void 0&&l.value.length>=i.limit){g.value=!1;return}g.value=!0,k.value++;const e=await pt(k.value,P.value,i==null?void 0:i.dto);(e==null?void 0:e.code)===ot.SUCCESS&&(s.total=e==null?void 0:e.data.total,s.current=e==null?void 0:e.data.current,s.pages=e==null?void 0:e.data.pages,e!=null&&e.data.records&&(e!=null&&e.data.records.length)&&l.value.push(...e==null?void 0:e.data.records),g.value=!1)}function n(){l.value.splice(0),s.total=-1,s.pages=-1,s.current=-1,k.value=0}const m=et(i.dto),w=$();return at(m,async()=>{w.value||(n(),await t(),w.value=setTimeout(()=>{clearTimeout(w.value),w.value=null},400))},{immediate:i.immediate}),f({clearResult:n,loadPostListPage:t,postList:l,pageInfo:s}),(e,V)=>{const E=Dt,I=ut,x=q,D=M("auto-animate");return r(),p("div",null,[d(x,null,{default:c(()=>[S((r(),p("div",Nt,[d(I,{"loading-class":"mx-a my-0.6em h-1.4rem w-1.4rem animate-[spin_2s_infinite_linear] rounded-6px bg-[var(--el-color-info)]",immediate:e.immediate,loading:o(g)||!o(h),"no-more":o(h)||o(v),onLoad:t},{done:c(()=>[S(a("p",{class:"w-full py-4","text-center":"","text-bluegray":"","tracking-1":""},C(o(h)?"暂无更多帖子":"暂无帖子"),513),[[mt,o(h)||o(v)]])]),default:c(()=>[(r(!0),p(G,null,J(o(l),y=>(r(),p("div",{key:y.id},[d(E,{class:"p-4 transition-300 transition-shadow card-default md:p-6 hover:shadow",data:y,"user-id":y==null?void 0:y.userId},null,8,["data","user-id"])]))),128))]),_:1},8,["immediate","loading","no-more"])])),[[D]])]),_:1})])}}}),oe=H(Ut,[["__scopeId","data-v-1ad4a674"]]);export{oe as default};