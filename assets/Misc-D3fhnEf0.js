const i=s=>s.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),p=s=>{var t,r,a;let e=0;if(/^[\d]*$/g.test(s))e=s;else{const n=(t=/([\d]*)h/gi.exec(s))==null?void 0:t[1],c=(r=/([\d]*)m/gi.exec(s))==null?void 0:r[1],o=(a=/([\d]*)s/gi.exec(s))==null?void 0:a[1];n&&(e+=parseInt(n)*60*60),c&&(e+=parseInt(c)*60),o&&(e+=parseInt(o))}return e};export{i,p};
//# sourceMappingURL=Misc-D3fhnEf0.js.map