const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/QrCode-CxUAMnmO.js","assets/index-DFHtCH6M.js","assets/index-BMArARtH.css"])))=>i.map(i=>d[i]);
import{M as k}from"./ModalComponent-B-ePo8ic.js";import{C as V}from"./CreatePlaylistModal-D_amQld8.js";import{a as S,o as a,c as r,d as C,e as f,w as u,b as i,v as I,F as x,f as T,t as m,g as c,j as d,r as y,h as g,k as p,l as B,u as j,m as U,_ as A,n as M,p as D}from"./index-DFHtCH6M.js";import{C as N}from"./ConfirmModal-DRMIgDMG.js";const q={components:{ModalComponent:k,CreatePlaylistModal:V},props:{videoInfo:{type:Object,required:!0},videoId:{type:String,required:!0}},emits:["close"],data(){return{playlists:[],selectedPlaylist:null,processing:!1,showCreatePlaylistModal:!1}},mounted(){this.getPlaylists().then(l=>{this.playlists=l}),this.selectedPlaylist=this.getPreferenceString("selectedPlaylist"+this.hashCode(this.authApiUrl())),window.addEventListener("keydown",this.handleKeyDown),window.blur()},unmounted(){window.removeEventListener("keydown",this.handleKeyDown)},methods:{handleKeyDown(l){l.code==="Enter"&&!this.showCreatePlaylistModal&&(this.handleClick(this.selectedPlaylist),l.preventDefault())},handleClick(l){if(!l){alert(this.$t("actions.please_select_playlist"));return}this.processing||(this.$refs.addButton.disabled=!0,this.processing=!0,this.addVideosToPlaylist(l,[this.videoId],[this.videoInfo]).then(t=>{this.setPreference("selectedPlaylist"+this.hashCode(this.authApiUrl()),l),this.$emit("close"),t.error&&alert(t.error)}))},addCreatedPlaylist(l,t){this.playlists.push({id:l,name:t}),this.selectedPlaylist=l}}},F={class:"inline-block w-max text-2xl"},R=["value","textContent"],E={class:"mt-3 w-full flex justify-between"};function O(l,t,e,o,s,n){const b=y("ModalComponent"),w=y("CreatePlaylistModal"),_=g("t");return a(),r(x,null,[C(b,{onClose:t[3]||(t[3]=h=>l.$emit("close"))},{default:f(()=>[u(i("span",F,null,512),[[_,"actions.select_playlist"]]),u(i("select",{"onUpdate:modelValue":t[0]||(t[0]=h=>s.selectedPlaylist=h),class:"select mt-3 w-full"},[(a(!0),r(x,null,T(s.playlists,h=>(a(),r("option",{key:h.id,value:h.id,textContent:m(h.name)},null,8,R))),128))],512),[[I,s.selectedPlaylist]]),i("div",E,[u(i("button",{ref:"addButton",class:"btn",onClick:t[1]||(t[1]=h=>s.showCreatePlaylistModal=!0)},null,512),[[_,"actions.create_playlist"]]),u(i("button",{ref:"addButton",class:"btn",onClick:t[2]||(t[2]=h=>n.handleClick(s.selectedPlaylist))},null,512),[[_,"actions.add_to_playlist"]])])]),_:1}),s.showCreatePlaylistModal?(a(),c(w,{key:0,onClose:t[4]||(t[4]=h=>s.showCreatePlaylistModal=!1),onCreated:n.addCreatedPlaylist},null,8,["onCreated"])):d("",!0)],64)}const z=S(q,[["render",O]]),Q={class:"mb-5"},W={class:"flex justify-between"},K=i("hr",null,null,-1),G={key:0,class:"flex justify-between"},H={class:"flex justify-between"},J={for:"withTimeCode"},X={key:1,class:"mt-2 flex items-center justify-between"},Y=i("hr",null,null,-1),Z=["href"],$=["textContent"],ee={class:"mt-4 flex justify-end"},te={components:{ModalComponent:k},props:{videoId:{type:String,required:!0},currentTime:{type:Number,required:!0},playlistId:{type:String,default:void 0},playlistIndex:{type:Number,default:void 0}},data(){return{withTimeCode:!0,pipedLink:!0,withPlaylist:!0,timeStamp:null,hasPlaylist:!1,showQrCode:!1}},computed:{generatedLink(){var l=this.pipedLink?window.location.origin+"/watch?v="+this.videoId:"https://youtu.be/"+this.videoId,t=new URL(l);return this.withTimeCode&&this.timeStamp>0&&t.searchParams.append("t",this.timeStamp),this.hasPlaylist&&this.withPlaylist&&(t.searchParams.append("list",this.playlistId),t.searchParams.append("index",this.playlistIndex)),t.href}},mounted(){this.timeStamp=parseInt(this.currentTime),this.withTimeCode=this.getPreferenceBoolean("shareWithTimeCode",!0),this.pipedLink=this.getPreferenceBoolean("shareAsPipedLink",!0),this.withPlaylist=this.getPreferenceBoolean("shareWithPlaylist",!0),this.hasPlaylist=this.playlistId!=null&&!isNaN(this.playlistIndex)},methods:{followLink(){window.open(this.generatedLink,"_blank").focus()},async copyLink(){await this.copyURL(this.generatedLink)},async copyURL(l){try{await navigator.clipboard.writeText(l),alert(this.$t("info.copied"))}catch(t){alert(this.$t("info.cannot_copy"))}},onChange(){this.setPreference("shareWithTimeCode",this.withTimeCode,!0),this.setPreference("shareAsPipedLink",this.pipedLink,!0),this.setPreference("shareWithPlaylist",this.withPlaylist,!0)}}},ie=Object.assign(te,{__name:"ShareModal",setup(l){const t=U(()=>A(()=>import("./QrCode-CxUAMnmO.js"),__vite__mapDeps([0,1,2])));return(e,o)=>{const s=g("t");return a(),c(k,null,{default:f(()=>[u(i("h2",Q,null,512),[[s,"actions.share"]]),i("div",W,[u(i("label",null,null,512),[[s,"actions.piped_link"]]),u(i("input",{"onUpdate:modelValue":o[0]||(o[0]=n=>e.pipedLink=n),type:"checkbox",onChange:o[1]||(o[1]=(...n)=>e.onChange&&e.onChange(...n))},null,544),[[p,e.pipedLink]])]),K,e.hasPlaylist?(a(),r("div",G,[u(i("label",null,null,512),[[s,"actions.with_playlist"]]),u(i("input",{"onUpdate:modelValue":o[2]||(o[2]=n=>e.withPlaylist=n),type:"checkbox",onChange:o[3]||(o[3]=(...n)=>e.onChange&&e.onChange(...n))},null,544),[[p,e.withPlaylist]])])):d("",!0),i("div",H,[u(i("label",J,null,512),[[s,"actions.with_timecode"]]),u(i("input",{id:"withTimeCode","onUpdate:modelValue":o[4]||(o[4]=n=>e.withTimeCode=n),type:"checkbox",onChange:o[5]||(o[5]=(...n)=>e.onChange&&e.onChange(...n))},null,544),[[p,e.withTimeCode]])]),e.withTimeCode?(a(),r("div",X,[u(i("label",null,null,512),[[s,"actions.time_code"]]),u(i("input",{"onUpdate:modelValue":o[6]||(o[6]=n=>e.timeStamp=n),class:"input w-12",type:"text",onChange:o[7]||(o[7]=(...n)=>e.onChange&&e.onChange(...n))},null,544),[[B,e.timeStamp]])])):d("",!0),Y,i("a",{href:e.generatedLink,target:"_blank"},[i("h3",{class:"mt-4",textContent:m(e.generatedLink)},null,8,$)],8,Z),e.showQrCode?(a(),c(j(t),{key:2,text:e.generatedLink},null,8,["text"])):d("",!0),i("div",ee,[u(i("button",{class:"btn",onClick:o[8]||(o[8]=n=>e.showQrCode=!e.showQrCode)},null,512),[[s,"actions.generate_qrcode"]]),u(i("button",{class:"btn ml-3",onClick:o[9]||(o[9]=n=>e.followLink())},null,512),[[s,"actions.follow_link"]]),u(i("button",{class:"btn ml-3",onClick:o[10]||(o[10]=n=>e.copyLink())},null,512),[[s,"actions.copy_link"]])])]),_:1})}}}),le={components:{PlaylistAddModal:z,ConfirmModal:N,ShareModal:ie},props:{item:{type:Object,default:()=>({})},isFeed:{type:Boolean,default:!1},height:{type:String,default:"118"},width:{type:String,default:"210"},hideChannel:{type:Boolean,default:!1},index:{type:Number,default:-1},playlistId:{type:String,default:null},preferListen:{type:Boolean,default:!1},admin:{type:Boolean,default:!1}},emits:["remove"],data(){return{showPlaylistModal:!1,showShareModal:!1,showVideo:!0,showConfirmRemove:!1}},computed:{title(){var l,t,e;return(e=(t=(l=this.item.dearrow)==null?void 0:l.titles[0])==null?void 0:t.title)!=null?e:this.item.title},thumbnail(){var l,t,e;return(e=(t=(l=this.item.dearrow)==null?void 0:l.thumbnails[0])==null?void 0:t.thumbnail)!=null?e:this.item.thumbnail}},mounted(){this.shouldShowVideo()},methods:{removeVideo(){this.$refs.removeButton.disabled=!0,this.removeVideoFromPlaylist(this.playlistId,this.index).then(l=>{l.error?alert(l.error):this.$emit("remove")})},shouldShowVideo(){if(!this.isFeed||!this.getPreferenceBoolean("hideWatched",!1))return;const t=window.db.transaction("watch_history","readonly").objectStore("watch_history").get(this.item.url.substr(-11));t.onsuccess=e=>{var s;const o=e.target.result;if(o&&((s=o.currentTime)!=null?s:0)>o.duration*.9){this.showVideo=!1;return}}}}},se={key:0,class:"flex flex-col flex-justify-between"},ne={class:"w-full"},oe=["src","alt"],ae={class:"relative h-1 w-full"},de={class:"relative text-sm"},re=["textContent"],ue={key:1,class:"thumbnail-overlay thumbnail-left"},he=["textContent"],me=i("i",{class:"i-fa6-solid:tower-broadcast w-3"},null,-1),ce={key:4,class:"thumbnail-overlay bottom-5px left-5px"},fe=["title","textContent"],ye={class:"flex"},we=["src"],ve={class:"flex-1 px-2"},_e=["textContent"],Ce={key:0,class:"i-fa6-solid:check ml-1.5"},be={key:1,class:"mt-1 text-xs text-gray-300 font-normal"},pe={key:0},ke=i("i",{class:"i-fa6-solid:eye"},null,-1),ge=["textContent"],Pe=["textContent"],xe=["textContent"],Me={class:"flex items-center gap-2.5"},Se=["title"],Le=i("i",{class:"i-fa6-solid:circle-plus"},null,-1),Ve=[Le],Ie=["title"],Te=i("i",{class:"i-fa6-solid:share"},null,-1),Be=[Te],je=["title"],Ue=i("i",{class:"i-fa6-solid:circle-minus"},null,-1),Ae=[Ue];function De(l,t,e,o,s,n){const b=y("i18n-t"),w=y("router-link"),_=y("ConfirmModal"),h=y("PlaylistAddModal"),L=y("ShareModal"),P=g("t");return s.showVideo?(a(),r("div",se,[C(w,{class:"inline-block w-full focus:underline hover:underline",to:{path:"/watch",query:{v:e.item.url.substr(-11),...e.playlistId&&{list:e.playlistId},...e.index>=0&&{index:e.index+1},...e.preferListen&&{listen:1}}}},{default:f(()=>[i("div",ne,[i("img",{loading:"lazy",class:M(["aspect-video w-full object-contain",{"shorts-img":e.item.isShort,"opacity-75":e.item.watched}]),src:n.thumbnail,alt:n.title},null,10,oe),i("div",ae,[e.item.watched&&e.item.duration>0?(a(),r("div",{key:0,class:"absolute bottom-0 left-0 h-1 bg-red-600",style:D({width:"clamp(0%, ".concat(e.item.currentTime/e.item.duration*100,"%, 100%")})},null,4)):d("",!0)])]),i("div",de,[e.item.duration>0?(a(),r("span",{key:0,class:"thumbnail-overlay thumbnail-right",textContent:m(l.timeFormat(e.item.duration))},null,8,re)):d("",!0),e.item.isShort?u((a(),r("span",ue,null,512)),[[P,"video.shorts"]]):e.item.duration>=0?(a(),r("span",{key:2,class:"thumbnail-overlay thumbnail-right",textContent:m(l.timeFormat(e.item.duration))},null,8,he)):(a(),c(b,{key:3,keypath:"video.live",class:"thumbnail-overlay thumbnail-right !bg-red-600",tag:"div"},{default:f(()=>[me]),_:1})),e.item.watched?u((a(),r("span",ce,null,512)),[[P,"video.watched"]]):d("",!0)]),i("div",null,[i("p",{style:{display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical"},class:"link flex overflow-hidden pt-2 font-bold",title:n.title,textContent:m(n.title)},null,8,fe)])]),_:1},8,["to"]),i("div",ye,[C(w,{to:e.item.uploaderUrl},{default:f(()=>[e.item.uploaderAvatar?(a(),r("img",{key:0,loading:"lazy",src:e.item.uploaderAvatar,class:"mr-0.5 mt-0.5 h-32px w-32px rounded-full",width:"68",height:"68"},null,8,we)):d("",!0)]),_:1},8,["to"]),i("div",ve,[e.item.uploaderUrl&&e.item.uploaderName&&!e.hideChannel?(a(),c(w,{key:0,class:"link-secondary block overflow-hidden text-sm",to:e.item.uploaderUrl,title:e.item.uploaderName},{default:f(()=>[i("span",{textContent:m(e.item.uploaderName)},null,8,_e),e.item.uploaderVerified?(a(),r("i",Ce)):d("",!0)]),_:1},8,["to","title"])):d("",!0),e.item.views>=0||e.item.uploadedDate?(a(),r("div",be,[e.item.views>=0?(a(),r("span",pe,[ke,i("span",{class:"pl-1",textContent:m("".concat(l.numberFormat(e.item.views)," •"))},null,8,ge)])):d("",!0),e.item.uploaded>0?(a(),r("span",{key:1,class:"pl-0.5",textContent:m(l.timeAgo(e.item.uploaded))},null,8,Pe)):e.item.uploadedDate?(a(),r("span",{key:2,class:"pl-0.5",textContent:m(e.item.uploadedDate)},null,8,xe)):d("",!0)])):d("",!0)]),i("div",Me,[C(w,{to:{path:"/watch",query:{v:e.item.url.substr(-11),...e.playlistId&&{list:e.playlistId},...e.index>=0&&{index:e.index+1},...!e.preferListen&&{listen:1}}},"aria-label":e.preferListen?n.title:"Listen to "+n.title,title:e.preferListen?n.title:"Listen to "+n.title},{default:f(()=>[i("i",{class:M(e.preferListen?"i-fa6-solid:tv":"i-fa6-solid:headphones")},null,2)]),_:1},8,["to","aria-label","title"]),i("button",{title:l.$t("actions.add_to_playlist"),onClick:t[0]||(t[0]=v=>s.showPlaylistModal=!s.showPlaylistModal)},Ve,8,Se),i("button",{title:l.$t("actions.share"),onClick:t[1]||(t[1]=v=>s.showShareModal=!s.showShareModal)},Be,8,Ie),e.admin?(a(),r("button",{key:0,ref:"removeButton",title:l.$t("actions.remove_from_playlist"),onClick:t[2]||(t[2]=v=>s.showConfirmRemove=!0)},Ae,8,je)):d("",!0),s.showConfirmRemove?(a(),c(_,{key:1,message:l.$t("actions.delete_playlist_video_confirm"),onClose:t[3]||(t[3]=v=>s.showConfirmRemove=!1),onConfirm:t[4]||(t[4]=v=>n.removeVideo(e.item.url.substr(-11)))},null,8,["message"])):d("",!0),s.showPlaylistModal?(a(),c(h,{key:2,"video-id":e.item.url.substr(-11),"video-info":e.item,onClose:t[5]||(t[5]=v=>s.showPlaylistModal=!1)},null,8,["video-id","video-info"])):d("",!0),s.showShareModal?(a(),c(L,{key:3,"video-id":e.item.url.substr(-11),"current-time":0,onClose:t[6]||(t[6]=v=>s.showShareModal=!1)},null,8,["video-id"])):d("",!0)])])])):d("",!0)}const Ne=S(le,[["render",De]]),Oe=Object.freeze(Object.defineProperty({__proto__:null,default:Ne},Symbol.toStringTag,{value:"Module"}));export{z as P,Ne as V,ie as _,Oe as a};
//# sourceMappingURL=VideoItem-BNJ24tbL.js.map