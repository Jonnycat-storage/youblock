System.register(["./index-legacy-CmTDz3X_.js"],(function(e,t){"use strict";var l,n,i,o,s,r,a,u,m,c;return{setters:[e=>{l=e.r,n=e.o,i=e.c,o=e.d,s=e.e,r=e.b,a=e.t,u=e.j,m=e.g,c=e.F}],execute:function(){const t={class:"flex flex-col flex-justify-between"},d={class:"relative"},p=["src"],x=["textContent"],f={key:0,class:"i-fa6-solid:check ml-1.5"},y=["textContent"],k=["textContent"],C={key:0,class:"i-fa6-solid:check ml-1.5"},v=["textContent"],b={key:0},g=["textContent"],j=r("br",null,null,-1);e("default",{__name:"PlaylistItem",props:{item:{type:Object,required:!0}},setup(e){const N=e;return(e,_)=>{const h=l("router-link");return n(),i("div",t,[o(h,{to:N.item.url},{default:s((()=>[r("div",d,[r("img",{loading:"lazy",class:"w-full",src:N.item.thumbnail},null,8,p)]),r("p",null,[r("span",{textContent:a(N.item.name)},null,8,x),N.item.verified?(n(),i("i",f)):u("",!0)])])),_:1},8,["to"]),N.item.description?(n(),i("p",{key:0,textContent:a(N.item.description)},null,8,y)):u("",!0),N.item.uploaderUrl?(n(),m(h,{key:1,class:"link",to:N.item.uploaderUrl},{default:s((()=>[r("p",null,[r("span",{textContent:a(N.item.uploaderName)},null,8,k),N.item.uploaderVerified?(n(),i("i",C)):u("",!0)])])),_:1},8,["to"])):N.item.uploaderName?(n(),i("a",{key:2,class:"link",textContent:a(N.item.uploaderName)},null,8,v)):u("",!0),N.item.videos>=0?(n(),i(c,{key:3},[N.item.uploaderName?(n(),i("br",b)):u("",!0),r("strong",{textContent:a(`${N.item.videos} ${e.$t("video.videos")}`)},null,8,g)],64)):u("",!0),j])}}})}}}));
//# sourceMappingURL=PlaylistItem-legacy-CI8BR7sq.js.map
