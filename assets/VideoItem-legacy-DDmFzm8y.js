System.register(["./ModalComponent-legacy-BmTvlHoT.js","./CreatePlaylistModal-legacy-Bg0tm0yq.js","./index-legacy-CmTDz3X_.js","./ConfirmModal-legacy-CnRD7ob6.js"],(function(e,t){"use strict";var l,i,s,a,n,o,d,r,h,u,c,m,p,y,f,w,C,b,v,k,g,x,P,_,M;return{setters:[e=>{l=e.M},e=>{i=e.C},e=>{s=e.a,a=e.o,n=e.c,o=e.d,d=e.e,r=e.w,h=e.b,u=e.v,c=e.F,m=e.f,p=e.t,y=e.g,f=e.j,w=e.r,C=e.h,b=e.k,v=e.l,k=e.u,g=e.m,x=e._,P=e.n,_=e.p},e=>{M=e.C}],execute:function(){var L=document.createElement("style");L.textContent=".shorts-img{object-fit:contain;width:100%}\n",document.head.appendChild(L);const S={class:"inline-block w-max text-2xl"},j=["value","textContent"],I={class:"mt-3 w-full flex justify-between"},T=e("P",s({components:{ModalComponent:l,CreatePlaylistModal:i},props:{videoInfo:{type:Object,required:!0},videoId:{type:String,required:!0}},emits:["close"],data:()=>({playlists:[],selectedPlaylist:null,processing:!1,showCreatePlaylistModal:!1}),mounted(){this.getPlaylists().then((e=>{this.playlists=e})),this.selectedPlaylist=this.getPreferenceString("selectedPlaylist"+this.hashCode(this.authApiUrl())),window.addEventListener("keydown",this.handleKeyDown),window.blur()},unmounted(){window.removeEventListener("keydown",this.handleKeyDown)},methods:{handleKeyDown(e){"Enter"!==e.code||this.showCreatePlaylistModal||(this.handleClick(this.selectedPlaylist),e.preventDefault())},handleClick(e){e?this.processing||(this.$refs.addButton.disabled=!0,this.processing=!0,this.addVideosToPlaylist(e,[this.videoId],[this.videoInfo]).then((t=>{this.setPreference("selectedPlaylist"+this.hashCode(this.authApiUrl()),e),this.$emit("close"),t.error&&alert(t.error)}))):alert(this.$t("actions.please_select_playlist"))},addCreatedPlaylist(e,t){this.playlists.push({id:e,name:t}),this.selectedPlaylist=e}}},[["render",function(e,t,l,i,s,b){const v=w("ModalComponent"),k=w("CreatePlaylistModal"),g=C("t");return a(),n(c,null,[o(v,{onClose:t[3]||(t[3]=t=>e.$emit("close"))},{default:d((()=>[r(h("span",S,null,512),[[g,"actions.select_playlist"]]),r(h("select",{"onUpdate:modelValue":t[0]||(t[0]=e=>s.selectedPlaylist=e),class:"select mt-3 w-full"},[(a(!0),n(c,null,m(s.playlists,(e=>(a(),n("option",{key:e.id,value:e.id,textContent:p(e.name)},null,8,j)))),128))],512),[[u,s.selectedPlaylist]]),h("div",I,[r(h("button",{ref:"addButton",class:"btn",onClick:t[1]||(t[1]=e=>s.showCreatePlaylistModal=!0)},null,512),[[g,"actions.create_playlist"]]),r(h("button",{ref:"addButton",class:"btn",onClick:t[2]||(t[2]=e=>b.handleClick(s.selectedPlaylist))},null,512),[[g,"actions.add_to_playlist"]])])])),_:1}),s.showCreatePlaylistModal?(a(),y(k,{key:0,onClose:t[4]||(t[4]=e=>s.showCreatePlaylistModal=!1),onCreated:b.addCreatedPlaylist},null,8,["onCreated"])):f("",!0)],64)}]])),V={class:"mb-5"},$={class:"flex justify-between"},B=h("hr",null,null,-1),U={key:0,class:"flex justify-between"},A={class:"flex justify-between"},N={for:"withTimeCode"},q={key:1,class:"mt-2 flex items-center justify-between"},D=h("hr",null,null,-1),F=["href"],R=["textContent"],O={class:"mt-4 flex justify-end"},Q={components:{ModalComponent:l},props:{videoId:{type:String,required:!0},currentTime:{type:Number,required:!0},playlistId:{type:String,default:void 0},playlistIndex:{type:Number,default:void 0}},data:()=>({withTimeCode:!0,pipedLink:!0,withPlaylist:!0,timeStamp:null,hasPlaylist:!1,showQrCode:!1}),computed:{generatedLink(){var e=this.pipedLink?window.location.origin+"/watch?v="+this.videoId:"https://youtu.be/"+this.videoId,t=new URL(e);return this.withTimeCode&&this.timeStamp>0&&t.searchParams.append("t",this.timeStamp),this.hasPlaylist&&this.withPlaylist&&(t.searchParams.append("list",this.playlistId),t.searchParams.append("index",this.playlistIndex)),t.href}},mounted(){this.timeStamp=parseInt(this.currentTime),this.withTimeCode=this.getPreferenceBoolean("shareWithTimeCode",!0),this.pipedLink=this.getPreferenceBoolean("shareAsPipedLink",!0),this.withPlaylist=this.getPreferenceBoolean("shareWithPlaylist",!0),this.hasPlaylist=null!=this.playlistId&&!isNaN(this.playlistIndex)},methods:{followLink(){window.open(this.generatedLink,"_blank").focus()},async copyLink(){await this.copyURL(this.generatedLink)},async copyURL(e){try{await navigator.clipboard.writeText(e),alert(this.$t("info.copied"))}catch(t){alert(this.$t("info.cannot_copy"))}},onChange(){this.setPreference("shareWithTimeCode",this.withTimeCode,!0),this.setPreference("shareAsPipedLink",this.pipedLink,!0),this.setPreference("shareWithPlaylist",this.withPlaylist,!0)}}},W=e("_",Object.assign(Q,{__name:"ShareModal",setup(e){const i=g((()=>x((()=>t.import("./QrCode-legacy-OqTwD7BE.js")),void 0)));return(e,t)=>{const s=C("t");return a(),y(l,null,{default:d((()=>[r(h("h2",V,null,512),[[s,"actions.share"]]),h("div",$,[r(h("label",null,null,512),[[s,"actions.piped_link"]]),r(h("input",{"onUpdate:modelValue":t[0]||(t[0]=t=>e.pipedLink=t),type:"checkbox",onChange:t[1]||(t[1]=(...t)=>e.onChange&&e.onChange(...t))},null,544),[[b,e.pipedLink]])]),B,e.hasPlaylist?(a(),n("div",U,[r(h("label",null,null,512),[[s,"actions.with_playlist"]]),r(h("input",{"onUpdate:modelValue":t[2]||(t[2]=t=>e.withPlaylist=t),type:"checkbox",onChange:t[3]||(t[3]=(...t)=>e.onChange&&e.onChange(...t))},null,544),[[b,e.withPlaylist]])])):f("",!0),h("div",A,[r(h("label",N,null,512),[[s,"actions.with_timecode"]]),r(h("input",{id:"withTimeCode","onUpdate:modelValue":t[4]||(t[4]=t=>e.withTimeCode=t),type:"checkbox",onChange:t[5]||(t[5]=(...t)=>e.onChange&&e.onChange(...t))},null,544),[[b,e.withTimeCode]])]),e.withTimeCode?(a(),n("div",q,[r(h("label",null,null,512),[[s,"actions.time_code"]]),r(h("input",{"onUpdate:modelValue":t[6]||(t[6]=t=>e.timeStamp=t),class:"input w-12",type:"text",onChange:t[7]||(t[7]=(...t)=>e.onChange&&e.onChange(...t))},null,544),[[v,e.timeStamp]])])):f("",!0),D,h("a",{href:e.generatedLink,target:"_blank"},[h("h3",{class:"mt-4",textContent:p(e.generatedLink)},null,8,R)],8,F),e.showQrCode?(a(),y(k(i),{key:2,text:e.generatedLink},null,8,["text"])):f("",!0),h("div",O,[r(h("button",{class:"btn",onClick:t[8]||(t[8]=t=>e.showQrCode=!e.showQrCode)},null,512),[[s,"actions.generate_qrcode"]]),r(h("button",{class:"btn ml-3",onClick:t[9]||(t[9]=t=>e.followLink())},null,512),[[s,"actions.follow_link"]]),r(h("button",{class:"btn ml-3",onClick:t[10]||(t[10]=t=>e.copyLink())},null,512),[[s,"actions.copy_link"]])])])),_:1})}}})),E={components:{PlaylistAddModal:T,ConfirmModal:M,ShareModal:W},props:{item:{type:Object,default:()=>({})},isFeed:{type:Boolean,default:!1},height:{type:String,default:"118"},width:{type:String,default:"210"},hideChannel:{type:Boolean,default:!1},index:{type:Number,default:-1},playlistId:{type:String,default:null},preferListen:{type:Boolean,default:!1},admin:{type:Boolean,default:!1}},emits:["remove"],data:()=>({showPlaylistModal:!1,showShareModal:!1,showVideo:!0,showConfirmRemove:!1}),computed:{title(){return this.item.dearrow?.titles[0]?.title??this.item.title},thumbnail(){return this.item.dearrow?.thumbnails[0]?.thumbnail??this.item.thumbnail}},mounted(){this.shouldShowVideo()},methods:{removeVideo(){this.$refs.removeButton.disabled=!0,this.removeVideoFromPlaylist(this.playlistId,this.index).then((e=>{e.error?alert(e.error):this.$emit("remove")}))},shouldShowVideo(){this.isFeed&&this.getPreferenceBoolean("hideWatched",!1)&&(window.db.transaction("watch_history","readonly").objectStore("watch_history").get(this.item.url.substr(-11)).onsuccess=e=>{const t=e.target.result;t&&(t.currentTime??0)>.9*t.duration&&(this.showVideo=!1)})}}},K={key:0,class:"flex flex-col flex-justify-between"},z={class:"w-full"},G=["src","alt"],H={class:"relative h-1 w-full"},J={class:"relative text-sm"},X=["textContent"],Y={key:1,class:"thumbnail-overlay thumbnail-left"},Z=["textContent"],ee=h("i",{class:"i-fa6-solid:tower-broadcast w-3"},null,-1),te={key:4,class:"thumbnail-overlay bottom-5px left-5px"},le=["title","textContent"],ie={class:"flex"},se=["src"],ae={class:"flex-1 px-2"},ne=["textContent"],oe={key:0,class:"i-fa6-solid:check ml-1.5"},de={key:1,class:"mt-1 text-xs text-gray-300 font-normal"},re={key:0},he=h("i",{class:"i-fa6-solid:eye"},null,-1),ue=["textContent"],ce=["textContent"],me=["textContent"],pe={class:"flex items-center gap-2.5"},ye=["title"],fe=[h("i",{class:"i-fa6-solid:circle-plus"},null,-1)],we=["title"],Ce=[h("i",{class:"i-fa6-solid:share"},null,-1)],be=["title"],ve=[h("i",{class:"i-fa6-solid:circle-minus"},null,-1)],ke=e("V",s(E,[["render",function(e,t,l,i,s,u){const c=w("i18n-t"),m=w("router-link"),b=w("ConfirmModal"),v=w("PlaylistAddModal"),k=w("ShareModal"),g=C("t");return s.showVideo?(a(),n("div",K,[o(m,{class:"inline-block w-full focus:underline hover:underline",to:{path:"/watch",query:{v:l.item.url.substr(-11),...l.playlistId&&{list:l.playlistId},...l.index>=0&&{index:l.index+1},...l.preferListen&&{listen:1}}}},{default:d((()=>[h("div",z,[h("img",{loading:"lazy",class:P(["aspect-video w-full object-contain",{"shorts-img":l.item.isShort,"opacity-75":l.item.watched}]),src:u.thumbnail,alt:u.title},null,10,G),h("div",H,[l.item.watched&&l.item.duration>0?(a(),n("div",{key:0,class:"absolute bottom-0 left-0 h-1 bg-red-600",style:_({width:`clamp(0%, ${l.item.currentTime/l.item.duration*100}%, 100%`})},null,4)):f("",!0)])]),h("div",J,[l.item.duration>0?(a(),n("span",{key:0,class:"thumbnail-overlay thumbnail-right",textContent:p(e.timeFormat(l.item.duration))},null,8,X)):f("",!0),l.item.isShort?r((a(),n("span",Y,null,512)),[[g,"video.shorts"]]):l.item.duration>=0?(a(),n("span",{key:2,class:"thumbnail-overlay thumbnail-right",textContent:p(e.timeFormat(l.item.duration))},null,8,Z)):(a(),y(c,{key:3,keypath:"video.live",class:"thumbnail-overlay thumbnail-right !bg-red-600",tag:"div"},{default:d((()=>[ee])),_:1})),l.item.watched?r((a(),n("span",te,null,512)),[[g,"video.watched"]]):f("",!0)]),h("div",null,[h("p",{style:{display:"-webkit-box","-webkit-line-clamp":"2","-webkit-box-orient":"vertical"},class:"link flex overflow-hidden pt-2 font-bold",title:u.title,textContent:p(u.title)},null,8,le)])])),_:1},8,["to"]),h("div",ie,[o(m,{to:l.item.uploaderUrl},{default:d((()=>[l.item.uploaderAvatar?(a(),n("img",{key:0,loading:"lazy",src:l.item.uploaderAvatar,class:"mr-0.5 mt-0.5 h-32px w-32px rounded-full",width:"68",height:"68"},null,8,se)):f("",!0)])),_:1},8,["to"]),h("div",ae,[l.item.uploaderUrl&&l.item.uploaderName&&!l.hideChannel?(a(),y(m,{key:0,class:"link-secondary block overflow-hidden text-sm",to:l.item.uploaderUrl,title:l.item.uploaderName},{default:d((()=>[h("span",{textContent:p(l.item.uploaderName)},null,8,ne),l.item.uploaderVerified?(a(),n("i",oe)):f("",!0)])),_:1},8,["to","title"])):f("",!0),l.item.views>=0||l.item.uploadedDate?(a(),n("div",de,[l.item.views>=0?(a(),n("span",re,[he,h("span",{class:"pl-1",textContent:p(`${e.numberFormat(l.item.views)} •`)},null,8,ue)])):f("",!0),l.item.uploaded>0?(a(),n("span",{key:1,class:"pl-0.5",textContent:p(e.timeAgo(l.item.uploaded))},null,8,ce)):l.item.uploadedDate?(a(),n("span",{key:2,class:"pl-0.5",textContent:p(l.item.uploadedDate)},null,8,me)):f("",!0)])):f("",!0)]),h("div",pe,[o(m,{to:{path:"/watch",query:{v:l.item.url.substr(-11),...l.playlistId&&{list:l.playlistId},...l.index>=0&&{index:l.index+1},...!l.preferListen&&{listen:1}}},"aria-label":l.preferListen?u.title:"Listen to "+u.title,title:l.preferListen?u.title:"Listen to "+u.title},{default:d((()=>[h("i",{class:P(l.preferListen?"i-fa6-solid:tv":"i-fa6-solid:headphones")},null,2)])),_:1},8,["to","aria-label","title"]),h("button",{title:e.$t("actions.add_to_playlist"),onClick:t[0]||(t[0]=e=>s.showPlaylistModal=!s.showPlaylistModal)},fe,8,ye),h("button",{title:e.$t("actions.share"),onClick:t[1]||(t[1]=e=>s.showShareModal=!s.showShareModal)},Ce,8,we),l.admin?(a(),n("button",{key:0,ref:"removeButton",title:e.$t("actions.remove_from_playlist"),onClick:t[2]||(t[2]=e=>s.showConfirmRemove=!0)},ve,8,be)):f("",!0),s.showConfirmRemove?(a(),y(b,{key:1,message:e.$t("actions.delete_playlist_video_confirm"),onClose:t[3]||(t[3]=e=>s.showConfirmRemove=!1),onConfirm:t[4]||(t[4]=e=>u.removeVideo(l.item.url.substr(-11)))},null,8,["message"])):f("",!0),s.showPlaylistModal?(a(),y(v,{key:2,"video-id":l.item.url.substr(-11),"video-info":l.item,onClose:t[5]||(t[5]=e=>s.showPlaylistModal=!1)},null,8,["video-id","video-info"])):f("",!0),s.showShareModal?(a(),y(k,{key:3,"video-id":l.item.url.substr(-11),"current-time":0,onClose:t[6]||(t[6]=e=>s.showShareModal=!1)},null,8,["video-id"])):f("",!0)])])])):f("",!0)}]])),ge=Object.freeze(Object.defineProperty({__proto__:null,default:ke},Symbol.toStringTag,{value:"Module"}));e("a",ge)}}}));
//# sourceMappingURL=VideoItem-legacy-DDmFzm8y.js.map
