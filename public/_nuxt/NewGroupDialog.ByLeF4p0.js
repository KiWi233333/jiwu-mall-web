import{_ as X}from"./ElImage.MMEIiX96.js";import{E as Y,a as Z}from"./checkbox.zfGg0ai0.js";import{_ as ee}from"./AutoIncre.vue.cpfunnOh.js";import{E as te}from"./scrollbar.VqFpSCdd.js";import{u as le,B as C,E as V,S as oe,v as ae,i as se,x as re,f as ie}from"./entry.t-rqPOs0.js";import{_ as ne}from"./OssFileUpload.AYjrnYRm.js";import{E as ue}from"./dialog.W1fDsdND.js";/* empty css                       */import{E as de}from"./notification.YJSnxgg5.js";import{u as ce}from"./contact.O0MKBF5K.js";import{j as me,k as S,a as u,ap as fe,O as d,a7 as U,a2 as r,u as a,a0 as B,$ as s,Q as i,a5 as k,as as N,P as p,a6 as w,ac as pe,ab as F,a8 as ve,x as _e}from"./swiper-vue.Dj7aAS3P.js";import{i as ge,j as we}from"./Main.vue.XLnSog5g.js";import{a as he}from"./friend.psniISnN.js";import"./debounce.0E-5_dMF.js";import"./isEqual.OSnr_sHV.js";import"./hasIn.6fummut8.js";import"./flatten.qRdZVAia.js";import"./progress.FoUIz2xX.js";import"./index.keDQovFV.js";import"./useWs.cWBkfbdz.js";import"./tag.C0ahusY6.js";const xe={key:"left",class:"w-90vw flex md:w-800px"},be={flex:"","flex-col":""},ke={class:"w-full flex items-center gap-2"},Ie={class:"avatar-icon"},ye={truncate:""},Le=["label"],Ee=["onClick"],Ce={class:"avatar-icon"},Ve={"mt-a":"","w-full":"","flex-row-c-c":""},Se={key:"2",class:"h-300px w-90vw flex-row-c-c flex-col md:w-400px"},Ue={"mt-a":"","w-full":"","flex-row-c-c":""},Be=me({__name:"NewGroupDialog",props:{modelValue:{type:Boolean}},emits:["update:modelValue"],setup(D,{expose:$,emit:G}){const M=D,O=G,h=le();ce();const m=S({get(){return M.modelValue},set(e){O("update:modelValue",e)}}),t=u({roomId:null,avatar:null,uidList:[]}),v=u();function I(){var e;(e=v==null?void 0:v.value)==null||e.validate(async l=>{if(!l)return;let n;t.value.roomId?n=await ge({...t.value},h.getToken):n=await we({...t.value},h.getToken),n.code===oe.SUCCESS&&(m.value=!1,de.success({title:"发起邀请提醒",message:+n.data===t.value.uidList.length?"群聊邀请已发送！":"部分邀请未送达！"}))})}const _=u(!1),c=u({cursor:null,isLast:!1,size:10,total:-1}),x=u([]);async function y(){if(_.value||c.value.isLast)return;_.value=!0;const{data:e}=await he(c.value.size,c.value.cursor,h.getToken);e.list&&x.value.push(...e.list),c.value.isLast=e.isLast,c.value.cursor=e.cursor,_.value=!1}y();const R=S(()=>{const e=new Set(t.value.uidList);return x.value.filter(l=>e.has(l.userId))});function T(e){t.value.uidList=t.value.uidList.filter(l=>l!==e)}const f=u(!1),q=u();function z(e,l,n){t.value.avatar=e}function L(e=[]){t.value.roomId=null,t.value.uidList=e,t.value.avatar=null,f.value=!1}L();function j(){if(t.value.roomId)I();else{if(t.value.uidList.length<=0)return V.warning("请选择成员");f.value=!0}}return $({form:t,reload:L}),(e,l)=>{const n=X,A=Y,P=ee,E=te,Q=Z,b=ae,g=se,H=ne,J=re,K=ue,W=fe("auto-animate");return d(),U(K,{modelValue:a(m),"onUpdate:modelValue":l[6]||(l[6]=o=>_e(m)?m.value=o:null),title:a(t).roomId?"邀请成员":"新建群聊",width:"fit-content",class:"overflow-hidden",center:"","append-to-body":""},{default:r(()=>[s(J,{ref_key:"formRef",ref:v,"label-position":"top",model:a(t),class:"relative max-h-400px flex"},{default:r(()=>[F((d(),p("div",null,[F(i("div",xe,[s(b,{label:"好友列表",class:"left flex-1"},{default:r(()=>[s(Q,{modelValue:a(t).uidList,"onUpdate:modelValue":l[0]||(l[0]=o=>a(t).uidList=o),class:"w-full"},{default:r(()=>[s(E,{height:"350px","wrap-class":"pr-2 w-full"},{default:r(()=>[i("div",be,[s(P,{immediate:!0,"auto-stop":!0,"no-more":a(c).isLast,loading:a(_),onLoad:y},{default:r(()=>[(d(!0),p(B,null,N(a(x),o=>(d(),U(A,{key:o.userId,class:"check-item mb-2",value:o.userId,label:o.userId,style:{width:"100%",height:"fit-content"}},{default:r(()=>[i("div",ke,[i("div",Ie,[s(n,{class:"h-full w-full overflow-hidden rounded-6px",src:("BaseUrlImg"in e?e.BaseUrlImg:a(C))+o.avatar,fit:"cover"},null,8,["src"])]),i("strong",ye,k(o.nickName||"未填写"),1)])]),_:2},1032,["value","label"]))),128))]),_:1},8,["no-more","loading"])])]),_:1})]),_:1},8,["modelValue"])]),_:1}),s(b,{label:"已选好友",prop:"uidList",rules:[{required:!0,trigger:["blur"],message:"群成员不能为空！"}],class:"right flex-1 pb-2rem",style:{display:"flex","flex-direction":"column"}},{default:r(()=>[s(E,{style:{width:"100%"},height:"300px","view-class":"min-h-full bg-light items-start w-full v-card grid grid-cols-5 gap-4 p-2 dark:bg-dark-9 mt-0"},{default:r(()=>[(d(!0),p(B,null,N(a(R),o=>(d(),p("div",{key:o.userId,class:"item relative flex-col truncate p-2",label:o.userId},[i("i",{"i-solar:close-circle-bold":"","p-2":"","btn-primary":"",class:"absolute right-0 top-0 z-1",onClick:Ne=>T(o.userId)},null,8,Ee),i("div",Ce,[s(n,{class:"h-full w-full overflow-hidden rounded-6px",src:("BaseUrlImg"in e?e.BaseUrlImg:a(C))+o.avatar,fit:"cover"},null,8,["src"])]),i("span",null,k(o.nickName||"未填写"),1)],8,Le))),128))]),_:1}),i("div",Ve,[s(g,{class:"w-1/3",onClick:l[1]||(l[1]=o=>m.value=!1)},{default:r(()=>[w(" 取消 ")]),_:1}),s(g,{class:"w-1/3",type:a(t).roomId?"warning":"info",onClick:l[2]||(l[2]=o=>j())},{default:r(()=>[w(k(a(t).roomId?"邀请":"下一步"),1)]),_:1},8,["type"])])]),_:1})],512),[[pe,!a(f)]]),a(f)?(d(),p("div",Se,[s(b,{label:"群头像",prop:"avatar",rules:[{required:!0,trigger:["blur"],message:"群头像不能为空！"}],class:"right flex-1 pb-2rem",style:{display:"flex","flex-direction":"column"}},{default:r(()=>[s(H,{ref_key:"inputOssFileUploadRef",ref:q,key:"inputOssFileUploadRef",multiple:!1,limit:1,"input-class":"w-8rem h-8rem mr-2 flex-row-c-c flex-shrink-0  v-card","upload-quality":.4,onErrorMsg:l[3]||(l[3]=o=>{("ElMessage"in e?e.ElMessage:a(V)).error(o)}),onSubmit:z},null,512)]),_:1}),i("div",Ue,[s(g,{class:"w-1/5",onClick:l[4]||(l[4]=o=>f.value=!1)},{default:r(()=>[w(" 上一步 ")]),_:1}),s(g,{class:"w-1/5",type:a(t).roomId?"warning":"info",onClick:l[5]||(l[5]=o=>I())},{default:r(()=>[w(" 完成 ")]),_:1},8,["type"])])])):ve("",!0)])),[[W]])]),_:1},8,["model"])]),_:1},8,["modelValue","title"])}}}),et=ie(Be,[["__scopeId","data-v-43dfb6f2"]]);export{et as default};