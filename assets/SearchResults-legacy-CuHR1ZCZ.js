System.register(["./ContentItem-legacy-dpAxIUVA.js","./LoadingIndicatorPage-legacy-rxdJgMZA.js","./index-legacy-CmTDz3X_.js"],(function(e,t){"use strict";var s,r,l,i,n,u,a,o,h,c,d,y,g,m,f,p,q;return{setters:[e=>{s=e._},e=>{r=e.L},e=>{l=e.a,i=e.c,n=e.b,u=e.t,a=e.w,o=e.v,h=e.F,c=e.f,d=e.d,y=e.e,g=e.j,m=e.r,f=e.o,p=e.g,q=e.h}],execute:function(){const t={components:{ContentItem:s,LoadingIndicatorPage:r},data(){return{results:null,availableFilters:["all","videos","channels","playlists","music_songs","music_videos","music_albums","music_playlists","music_artists"],selectedFilter:this.$route.query.filter??"all"}},mounted(){this.handleRedirect()||(this.updateResults(),this.saveQueryToHistory())},updated(){void 0!==this.$route.query.search_query&&(document.title=this.$route.query.search_query+" - Piped")},activated(){this.handleRedirect(),window.addEventListener("scroll",this.handleScroll)},deactivated(){window.removeEventListener("scroll",this.handleScroll)},unmounted(){window.removeEventListener("scroll",this.handleScroll)},methods:{async fetchResults(){return await await this.fetchJson(this.apiUrl()+"/search",{q:this.$route.query.search_query,filter:this.$route.query.filter??"all"})},async updateResults(){document.title=this.$route.query.search_query+" - Piped",this.results=this.fetchResults().then((e=>{this.results=e,this.updateWatched(this.results.items)}))},updateFilter(){this.$router.replace({query:{search_query:this.$route.query.search_query,filter:this.selectedFilter}})},handleScroll(){!this.loading&&this.results&&this.results.nextpage&&window.innerHeight+window.scrollY>=document.body.offsetHeight-window.innerHeight&&(this.loading=!0,this.fetchJson(this.apiUrl()+"/nextpage/search",{nextpage:this.results.nextpage,q:this.$route.query.search_query,filter:this.$route.query.filter??"all"}).then((e=>{this.results.nextpage=e.nextpage,this.results.id=e.id,this.loading=!1,e.items.map((e=>this.results.items.push(e)))})))},handleRedirect(){const e=this.$route.query.search_query,t=/(?:http(?:s)?:\/\/)?(?:www\.)?youtube\.com(\/[/a-zA-Z0-9_?=&-]*)/gm.exec(e)?.[1]??/(?:http(?:s)?:\/\/)?(?:www\.)?youtu\.be\/(?:watch\?v=)?([/a-zA-Z0-9_?=&-]*)/gm.exec(e)?.[1].replace(/^/,"/watch?v=");if(t)return this.$router.push(t),!0},saveQueryToHistory(){if(!this.getPreferenceBoolean("searchHistory",!1))return;const e=this.$route.query.search_query;if(!e)return;const t=JSON.parse(localStorage.getItem("search_history"))??[];if(t.includes(e)){const s=t.indexOf(e);t.splice(s,1)}t.unshift(e),t.length>10&&t.shift(),localStorage.setItem("search_history",JSON.stringify(t))}}},w=["textContent"],_={for:"ddlSearchFilters"},v=["textContent"],x=["value"],$=n("hr",null,null,-1),S={key:0},F=["textContent"];e("default",l(t,[["render",function(e,t,s,r,l,C){const I=m("router-link"),b=m("i18n-t"),R=m("ContentItem"),L=m("LoadingIndicatorPage"),H=q("t");return f(),i(h,null,[n("h1",{class:"my-2 text-center",textContent:u(e.$route.query.search_query)},null,8,w),n("label",_,[n("strong",{textContent:u(`${e.$t("actions.filter")}:`)},null,8,v)]),a(n("select",{id:"ddlSearchFilters","onUpdate:modelValue":t[0]||(t[0]=e=>l.selectedFilter=e),default:"all",class:"select w-auto",onChange:t[1]||(t[1]=e=>C.updateFilter())},[(f(!0),i(h,null,c(l.availableFilters,(e=>a((f(),i("option",{key:e,value:e},null,8,x)),[[H,`search.${e}`]]))),128))],544),[[o,l.selectedFilter]]),$,l.results&&l.results.corrected?(f(),i("div",S,[d(b,{keypath:"search.did_you_mean",tag:"div",class:"text-lg"},{default:y((()=>[d(I,{to:{name:"SearchResults",query:{search_query:l.results.suggestion}}},{default:y((()=>[n("em",{textContent:u(l.results.suggestion)},null,8,F)])),_:1},8,["to"])])),_:1})])):g("",!0),d(L,{"show-content":null!=l.results&&l.results.items?.length,class:"video-grid"},{default:y((()=>[(f(!0),i(h,null,c(l.results.items,(e=>(f(),p(R,{key:e.url,item:e,height:"94",width:"168"},null,8,["item"])))),128))])),_:1},8,["show-content"])],64)}]]))}}}));
//# sourceMappingURL=SearchResults-legacy-CuHR1ZCZ.js.map