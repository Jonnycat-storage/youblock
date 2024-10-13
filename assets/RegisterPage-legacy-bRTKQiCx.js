System.register(["./Misc-legacy-DufQkfaw.js","./ConfirmModal-legacy-CnRD7ob6.js","./index-legacy-CmTDz3X_.js","./ModalComponent-legacy-BmTvlHoT.js"],(function(e,s){"use strict";var t,r,o,l,i,n,a,u,c,d,p,h,m,w,g;return{setters:[e=>{t=e.i},e=>{r=e.C},e=>{o=e.a,l=e.c,i=e.b,n=e.w,a=e.l,u=e.x,c=e.E,d=e.g,p=e.j,h=e.F,m=e.r,w=e.o,g=e.h},null],execute:function(){const s={components:{ConfirmModal:r},data:()=>({username:null,password:null,passwordConfirm:null,showPassword:!1,showConfirmPassword:!1,showUnsecureRegisterDialog:!1,forceUnsecureRegister:!1}),mounted(){this.getAuthToken()&&this.$router.push("/")},activated(){document.title="Register - Piped"},methods:{register(){this.username&&this.password&&(this.password==this.passwordConfirm?!t(this.username)||this.forceUnsecureRegister?this.fetchJson(this.authApiUrl()+"/register",null,{method:"POST",body:JSON.stringify({username:this.username,password:this.password})}).then((e=>{e.token?(this.setPreference("authToken"+this.hashCode(this.authApiUrl()),e.token),window.location="/"):alert(e.error)})):this.showUnsecureRegisterDialog=!0:alert(this.$t("login.passwords_incorrect")))}}},f={class:"flex justify-center"},y={class:"my-4 text-center font-bold"},C=["title"],b=i("hr",null,null,-1),x={class:"flex flex-col items-center justify-center text-center"},U={class:"w-max items-center px-3 children:pb-3"},P=["placeholder","aria-label"],v={class:"flex justify-center"},$=["type","placeholder","aria-label"],j=[i("div",{class:"i-fa6-solid:eye"},null,-1)],R={class:"flex justify-center"},k=["type","placeholder","aria-label"],_=[i("div",{class:"i-fa6-solid:eye"},null,-1)];e("default",o(s,[["render",function(e,s,t,r,o,M){const D=m("ConfirmModal"),K=g("t");return w(),l(h,null,[i("div",f,[n(i("h1",y,null,512),[[K,"titles.register"]]),i("i",{class:"i-fa6-solid:circle-info ml-2 mt-6 cursor-pointer",title:e.$t("info.register_note")},null,8,C)]),b,i("div",x,[i("form",U,[i("div",null,[n(i("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>o.username=e),class:"input w-full",type:"text",autocomplete:"username",placeholder:e.$t("login.username"),"aria-label":e.$t("login.username"),onKeyup:s[1]||(s[1]=u(((...e)=>M.register&&M.register(...e)),["enter"]))},null,40,P),[[a,o.username]])]),i("div",v,[n(i("input",{"onUpdate:modelValue":s[2]||(s[2]=e=>o.password=e),class:"input h-auto w-full",type:o.showPassword?"text":"password",autocomplete:"password",placeholder:e.$t("login.password"),"aria-label":e.$t("login.password"),onKeyup:s[3]||(s[3]=u(((...e)=>M.register&&M.register(...e)),["enter"]))},null,40,$),[[c,o.password]]),i("button",{type:"button",class:"btn ml-2",onClick:s[4]||(s[4]=e=>o.showPassword=!o.showPassword)},j)]),i("div",R,[n(i("input",{"onUpdate:modelValue":s[5]||(s[5]=e=>o.passwordConfirm=e),class:"input h-auto w-full",type:o.showConfirmPassword?"text":"password",autocomplete:"password",placeholder:e.$t("login.password_confirm"),"aria-label":e.$t("login.password_confirm"),onKeyup:s[6]||(s[6]=u(((...e)=>M.register&&M.register(...e)),["enter"]))},null,40,k),[[c,o.passwordConfirm]]),i("button",{type:"button",class:"btn ml-2",onClick:s[7]||(s[7]=e=>o.showConfirmPassword=!o.showConfirmPassword)},_)]),i("div",null,[n(i("a",{class:"btn w-auto",onClick:s[8]||(s[8]=(...e)=>M.register&&M.register(...e))},null,512),[[K,"titles.register"]])])])]),o.showUnsecureRegisterDialog?(w(),d(D,{key:0,message:e.$t("info.register_no_email_note"),onClose:s[9]||(s[9]=e=>o.showUnsecureRegisterDialog=!1),onConfirm:s[10]||(s[10]=e=>{o.forceUnsecureRegister=!0,o.showUnsecureRegisterDialog=!1,M.register()})},null,8,["message"])):p("",!0)],64)}]]))}}}));
//# sourceMappingURL=RegisterPage-legacy-bRTKQiCx.js.map
