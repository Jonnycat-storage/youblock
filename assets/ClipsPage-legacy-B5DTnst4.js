System.register(["./index-legacy-CmTDz3X_.js"],(function(e,r){"use strict";var s,t,n,o,i;return{setters:[e=>{s=e.a,t=e.g,n=e.j,o=e.r,i=e.o}],execute:function(){e("default",s({activated(){this.fetchJson(this.apiUrl()+"/clips/"+this.$route.params.clipId).then((e=>{this.response=e,this.response.videoId&&this.$router.push(`/watch?v=${this.response.videoId}`)}))}},[["render",function(e,r,s,a,c,p){const u=o("ErrorHandler");return e.response&&e.response.error?(i(),t(u,{key:0,message:e.response.message,error:e.response.error},null,8,["message","error"])):n("",!0)}]]))}}}));
//# sourceMappingURL=ClipsPage-legacy-B5DTnst4.js.map