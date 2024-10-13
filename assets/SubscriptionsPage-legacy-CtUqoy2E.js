System.register(["./ModalComponent-legacy-BmTvlHoT.js","./CreateGroupModal-legacy-BCXVk8ul.js","./ConfirmModal-legacy-CnRD7ob6.js","./index-legacy-CmTDz3X_.js"],(function(e,t){"use strict";var s,l,o,n,r,u,i,a,c,p,d,h,m,b,f,G,g,C,x,w;return{setters:[e=>{s=e.M},e=>{l=e.C},e=>{o=e.C},e=>{n=e.a,r=e.c,u=e.w,i=e.b,a=e.d,c=e.t,p=e.e,d=e.j,h=e.F,m=e.f,b=e.g,f=e.r,G=e.o,g=e.C,C=e.n,x=e.l,w=e.h}],execute:function(){var t=document.createElement("style");t.textContent=".selected{border:.1rem outset red}\n",document.head.appendChild(t);const y={components:{ModalComponent:s,CreateGroupModal:l,ConfirmModal:o},data:()=>({subscriptions:[],selectedGroup:{groupName:"",channels:[]},channelGroups:[],showCreateGroupModal:!1,showEditGroupModal:!1,editedGroupName:"",groupToDelete:null}),computed:{filteredSubscriptions:e=>""==e.selectedGroup.groupName?e.subscriptions:e.subscriptions.filter((t=>e.selectedGroup.channels.includes(t.url.substr(-24))))},mounted(){this.fetchSubscriptions().then((e=>{e.error?alert(e.error):(this.subscriptions=e,this.subscriptions.forEach((e=>e.subscribed=!0)))})),this.channelGroups.push(this.selectedGroup),window.db&&this.loadChannelGroups()},activated(){document.title="Subscriptions - Piped"},methods:{async loadChannelGroups(){const e=await this.getChannelGroups();this.channelGroups.push(...e)},handleButton(e){const t=e.url.split("/")[2];this.authenticated?this.fetchJson(this.authApiUrl()+(e.subscribed?"/unsubscribe":"/subscribe"),null,{method:"POST",body:JSON.stringify({channelId:t}),headers:{Authorization:this.getAuthToken(),"Content-Type":"application/json"}}):this.handleLocalSubscriptions(t),e.subscribed=!e.subscribed},exportHandler(){const e=[];this.subscriptions.forEach((t=>{e.push({url:"https://www.youtube.com"+t.url,name:t.name,service_id:0})}));const t=JSON.stringify({app_version:"",app_version_int:0,subscriptions:e});this.download(t,"subscriptions.json","application/json")},selectGroup(e){this.selectedGroup=e,this.editedGroupName=e.groupName},createGroup(e){if(!e||this.channelGroups.some((t=>t.groupName==e)))return;const t={groupName:e,channels:[]};this.channelGroups.push(t),this.createOrUpdateChannelGroup(t),this.showCreateGroupModal=!1},editGroupName(){const e=this.selectedGroup.groupName,t=this.editedGroupName;t&&t!=e&&(this.channelGroups.some((e=>e.groupName==t))||(this.selectedGroup.groupName=t,this.createOrUpdateChannelGroup(this.selectedGroup),this.deleteChannelGroup(e),this.showEditGroupModal=!1))},deleteGroup(e){this.deleteChannelGroup(e),this.channelGroups=this.channelGroups.filter((t=>t.groupName!=e)),this.selectedGroup=this.channelGroups[0]||{},this.groupToDelete=null},checkedChange(e){const t=e.url.substr(-24);this.selectedGroup.channels=this.selectedGroup.channels.includes(t)?this.selectedGroup.channels.filter((e=>e!=t)):this.selectedGroup.channels.concat(t),this.createOrUpdateChannelGroup(this.selectedGroup)},async importGroupsHandler(){const e=this.$refs.fileSelector.files;for(let t of e){const e=JSON.parse(await t.text()).groups;for(let t of e)this.createOrUpdateChannelGroup(t),this.channelGroups.push(t)}},exportGroupsHandler(){const e={format:"Piped",version:1,groups:this.channelGroups.slice(1)};this.download(JSON.stringify(e),"channel_groups.json","application/json")}}},k={class:"my-4 text-center font-bold"},v={class:"flex flex-wrap justify-between"},N={class:"flex gap-1"},_={class:"btn"},M={class:"m-1 flex flex-wrap gap-1"},j=["textContent"],S=["textContent"],$={key:0,class:"flex self-center gap-1"},H=i("br",null,null,-1),O=i("hr",null,null,-1),T={class:"w-full flex flex-wrap"},E=["onClick"],D=["textContent"],U={key:0},J=["onClick"],A=[i("i",{class:"i-fa6-solid:circle-plus"},null,-1)],P=i("br",null,null,-1),B=i("hr",null,null,-1),z={class:"xl:grid xl:grid-cols-5 <md:flex-wrap"},F=["src"],I=["textContent"],K=["onClick"],L=i("br",null,null,-1),V={class:"mb-5 mt-3 flex justify-between"},q=["placeholder"],Q={class:"mb-2 mt-3 h-[80vh] flex flex-col overflow-y-scroll pr-2"},R={class:"mr-3 flex items-center justify-between"},W=["href"],X=["src"],Y={class:"ml-2"},Z=["checked","onChange"],ee=i("hr",null,null,-1);e("default",n(y,[["render",function(e,t,s,l,o,n){const y=f("router-link"),te=f("i18n-t"),se=f("ConfirmModal"),le=f("CreateGroupModal"),oe=f("ModalComponent"),ne=w("t");return G(),r(h,null,[u(i("h1",k,null,512),[[ne,"titles.subscriptions"]]),i("div",v,[i("div",N,[i("button",_,[u(a(y,{to:"/import"},null,512),[[ne,"actions.import_from_json_csv"]])]),u(i("button",{class:"btn",onClick:t[0]||(t[0]=(...e)=>n.exportHandler&&n.exportHandler(...e))},null,512),[[ne,"actions.export_to_json"]])]),i("div",M,[i("div",null,[i("label",{for:"fileSelector",class:"btn",textContent:c(`${e.$t("actions.import_from_json")} (${e.$t("titles.channel_groups")})`)},null,8,j),i("input",{id:"fileSelector",ref:"fileSelector",type:"file",class:"hidden",multiple:"multiple",onChange:t[1]||(t[1]=(...e)=>n.importGroupsHandler&&n.importGroupsHandler(...e))},null,544)]),i("button",{class:"btn",onClick:t[2]||(t[2]=(...e)=>n.exportGroupsHandler&&n.exportGroupsHandler(...e)),textContent:c(`${e.$t("actions.export_to_json")} (${e.$t("titles.channel_groups")})`)},null,8,S)]),o.subscriptions.length>0?(G(),r("div",$,[a(te,{keypath:"subscriptions.subscribed_channels_count"},{default:p((()=>[g(c(o.subscriptions.length),1)])),_:1})])):d("",!0)]),H,O,i("div",T,[(G(!0),r(h,null,m(o.channelGroups,(s=>(G(),r("button",{key:s.groupName,class:C(["btn mx-1 w-max",{selected:o.selectedGroup===s}]),onClick:e=>n.selectGroup(s)},[i("span",{textContent:c(""!==s.groupName?s.groupName:e.$t("video.all"))},null,8,D),""!=s.groupName&&o.selectedGroup==s?(G(),r("div",U,[i("i",{class:"i-fa6-solid:pen mx-2",onClick:t[3]||(t[3]=e=>o.showEditGroupModal=!0)}),i("i",{class:"i-fa6-solid:circle-minus mx-2",onClick:e=>o.groupToDelete=s.groupName},null,8,J)])):d("",!0)],10,E)))),128)),null!=o.groupToDelete?(G(),b(se,{key:0,message:e.$t("actions.delete_group_confirm"),onClose:t[4]||(t[4]=e=>o.groupToDelete=null),onConfirm:t[5]||(t[5]=e=>n.deleteGroup(o.groupToDelete))},null,8,["message"])):d("",!0),i("button",{class:"btn mx-1",onClick:t[6]||(t[6]=e=>o.showCreateGroupModal=!0)},A)]),P,B,i("div",z,[(G(!0),r(h,null,m(n.filteredSubscriptions,(e=>(G(),r("div",{key:e.url,class:"col m-2 border border-gray-500 rounded-lg p-1"},[a(y,{to:e.url,class:"text-4x4 flex p-2 font-bold"},{default:p((()=>[i("img",{src:e.avatar,class:"h-[fit-content] rounded-full",width:"48",height:"48"},null,8,F),i("span",{class:"mx-2 self-center",textContent:c(e.name)},null,8,I)])),_:2},1032,["to"]),u(i("button",{class:"btn mt-2 w-full",onClick:t=>n.handleButton(e)},null,8,K),[[ne,"actions."+(e.subscribed?"unsubscribe":"subscribe")]])])))),128))]),L,o.showCreateGroupModal?(G(),b(le,{key:0,"on-create-group":n.createGroup,onClose:t[7]||(t[7]=e=>o.showCreateGroupModal=!1)},null,8,["on-create-group"])):d("",!0),o.showEditGroupModal?(G(),b(oe,{key:1,onClose:t[10]||(t[10]=e=>o.showEditGroupModal=!1)},{default:p((()=>[i("div",V,[u(i("input",{"onUpdate:modelValue":t[8]||(t[8]=e=>o.editedGroupName=e),type:"text",class:"input"},null,512),[[x,o.editedGroupName]]),u(i("button",{class:"btn",placeholder:e.$t("actions.group_name"),onClick:t[9]||(t[9]=e=>n.editGroupName())},null,8,q),[[ne,"actions.okay"]])]),i("div",Q,[(G(!0),r(h,null,m(o.subscriptions,(e=>(G(),r("div",{key:e.name},[i("div",R,[i("a",{href:e.url,target:"_blank",class:"flex items-center overflow-hidden"},[i("img",{src:e.avatar,class:"h-8 w-8 rounded-full"},null,8,X),i("span",Y,c(e.name),1)],8,W),i("input",{type:"checkbox",class:"checkbox",checked:o.selectedGroup.channels.includes(e.url.substr(-24)),onChange:t=>n.checkedChange(e)},null,40,Z)]),ee])))),128))])])),_:1})):d("",!0)],64)}]]))}}}));
//# sourceMappingURL=SubscriptionsPage-legacy-CtUqoy2E.js.map
