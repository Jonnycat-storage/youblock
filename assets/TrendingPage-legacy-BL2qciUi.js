System.register(["./LoadingIndicatorPage-legacy-rxdJgMZA.js","./VideoItem-legacy-DDmFzm8y.js","./index-legacy-CmTDz3X_.js","./ModalComponent-legacy-BmTvlHoT.js","./CreatePlaylistModal-legacy-Bg0tm0yq.js","./ConfirmModal-legacy-CnRD7ob6.js"],(function(e,t){"use strict";var i,n,s,o,d,r,l,a,h,c,g,u,f,m;return{setters:[e=>{i=e.L},e=>{n=e.V},e=>{s=e.a,o=e.c,d=e.w,r=e.b,l=e.d,a=e.e,h=e.F,c=e.r,g=e.o,u=e.f,f=e.g,m=e.h},null,null,null],execute:function(){const t={components:{VideoItem:n,LoadingIndicatorPage:i},data:()=>({videos:[]}),mounted(){if("/"==this.$route.path&&"feed"==this.getPreferenceString("homepage","trending"))return;let e=this.getPreferenceString("region","US");this.fetchTrending(e).then((e=>{this.videos=e,this.updateWatched(this.videos),this.fetchDeArrowContent(this.videos)}))},activated(){if(document.title=this.$t("titles.trending")+" - Piped",this.videos.length>0&&this.updateWatched(this.videos),"/"==this.$route.path){let e=this.getHomePage(this);void 0!==e&&this.$router.push(e)}},methods:{async fetchTrending(e){return await this.fetchJson(this.apiUrl()+"/trending",{region:e||"US"})}}},v={class:"my-4 text-center font-bold"},y=r("hr",null,null,-1);e("default",s(t,[["render",function(e,t,i,n,s,p){const P=c("VideoItem"),I=c("LoadingIndicatorPage"),j=m("t");return g(),o(h,null,[d(r("h1",v,null,512),[[j,"titles.trending"]]),y,l(I,{"show-content":0!=s.videos.length,class:"video-grid"},{default:a((()=>[(g(!0),o(h,null,u(s.videos,(e=>(g(),f(P,{key:e.url,item:e,height:"118",width:"210"},null,8,["item"])))),128))])),_:1},8,["show-content"])],64)}]]))}}}));
//# sourceMappingURL=TrendingPage-legacy-BL2qciUi.js.map