const r="or",t={year:{previous:"ଗତ ବର୍ଷ",current:"ଏହି ବର୍ଷ",next:"ଆଗାମୀ ବର୍ଷ",past:"{0} ବର୍ଷ ପୂର୍ବେ",future:"{0} ବର୍ଷରେ"},quarter:{previous:"ଗତ ତ୍ରୟମାସ",current:"ଗତ ତ୍ରୟମାସ",next:"ଆଗାମୀ ତ୍ରୟମାସ",past:"{0} ତ୍ରୟମାସ ପୂର୍ବେ",future:"{0} ତ୍ରୟମାସରେ"},month:{previous:"ଗତ ମାସ",current:"ଏହି ମାସ",next:"ଆଗାମୀ ମାସ",past:"{0} ମାସ ପୂର୍ବେ",future:"{0} ମାସରେ"},week:{previous:"ଗତ ସପ୍ତାହ",current:"ଏହି ସପ୍ତାହ",next:"ଆଗାମୀ ସପ୍ତାହ",past:"{0} ସପ୍ତାହ ପୂର୍ବେ",future:"{0} ସପ୍ତାହରେ"},day:{previous:"ଗତକାଲି",current:"ଆଜି",next:"ଆସନ୍ତାକାଲି",past:"{0} ଦିନ ପୂର୍ବେ",future:"{0} ଦିନରେ"},hour:{current:"ଏହି ଘଣ୍ଟା",past:"{0} ଘଣ୍ଟା ପୂର୍ବେ",future:"{0} ଘଣ୍ଟାରେ"},minute:{current:"ଏହି ମିନିଟ୍",past:"{0} ମିନିଟ୍ ପୂର୍ବେ",future:"{0} ମିନିଟ୍‌‌ରେ"},second:{current:"ବର୍ତ୍ତମାନ",past:"{0} ସେକେଣ୍ଡ ପୂର୍ବେ",future:"{0} ସେକେଣ୍ଡରେ"}},e={year:{previous:"ଗତ ବର୍ଷ",current:"ଏହି ବର୍ଷ",next:"ଆଗାମୀ ବର୍ଷ",past:"{0} ବ. ପୂର୍ବେ",future:"{0} ବ. ରେ"},quarter:{previous:"ଗତ ତିନିମାସ",current:"ଏହି ତ୍ରୟମାସ",next:"ଆଗାମୀ ତ୍ରୟମାସ",past:"{0} ତ୍ରୟ. ପୂର୍ବେ",future:"{0} ତ୍ରୟ. ରେ"},month:{previous:"ଗତ ମାସ",current:"ଏହି ମାସ",next:"ଆଗାମୀ ମାସ",past:"{0} ମା. ପୂର୍ବେ",future:"{0} ମା. ରେ"},week:{previous:"ଗତ ସପ୍ତାହ",current:"ଏହି ସପ୍ତାହ",next:"ଆଗାମୀ ସପ୍ତାହ",past:"{0} ସପ୍ତା. ପୂର୍ବେ",future:"{0} ସପ୍ତା. ରେ"},day:{previous:"ଗତକାଲି",current:"ଆଜି",next:"ଆସନ୍ତାକାଲି",past:"{0} ଦିନ ପୂର୍ବେ",future:"{0} ଦିନରେ"},hour:{current:"ଏହି ଘଣ୍ଟା",past:"{0} ଘ. ପୂର୍ବେ",future:"{0} ଘ. ରେ"},minute:{current:"ଏହି ମିନିଟ୍",past:"{0} ମି. ପୂର୍ବେ",future:"{0} ମି. ରେ"},second:{current:"ବର୍ତ୍ତମାନ",past:"{0} ସେ. ପୂର୍ବେ",future:"{0} ସେ. ରେ"}},u={year:{previous:"ଗତ ବର୍ଷ",current:"ଏହି ବର୍ଷ",next:"ଆଗାମୀ ବର୍ଷ",past:"{0} ବ. ପୂର୍ବେ",future:"{0} ବ. ରେ"},quarter:{previous:"ଗତ ତିନିମାସ",current:"ଏହି ତିନିମାସ",next:"ଆଗାମୀ ତିନିମାସ",past:"{0} ତ୍ରୟ. ପୂର୍ବେ",future:"{0} ତ୍ରୟ. ରେ"},month:{previous:"ଗତ ମାସ",current:"ଏହି ମାସ",next:"ଆଗାମୀ ମାସ",past:"{0} ମା. ପୂର୍ବେ",future:"{0} ମା. ରେ"},week:{previous:"ଗତ ସପ୍ତାହ",current:"ଏହି ସପ୍ତାହ",next:"ଆଗାମୀ ସପ୍ତାହ",past:"{0} ସପ୍ତା. ପୂର୍ବେ",future:"{0} ସପ୍ତା. ରେ"},day:{previous:"ଗତକାଲି",current:"ଆଜି",next:"ଆସନ୍ତାକାଲି",past:"{0} ଦିନ ପୂର୍ବେ",future:"{0} ଦିନରେ"},hour:{current:"ଏହି ଘଣ୍ଟା",past:"{0} ଘ. ପୂର୍ବେ",future:"{0} ଘ. ରେ"},minute:{current:"ଏହି ମିନିଟ୍",past:"{0} ମି. ପୂର୍ବେ",future:"{0} ମି. ରେ"},second:{current:"ବର୍ତ୍ତମାନ",past:"{0} ସେ. ପୂର୍ବେ",future:"{0} ସେ. ରେ"}},n={locale:r,long:t,short:e,narrow:u};export{n as default,r as locale,t as long,u as narrow,e as short};
//# sourceMappingURL=or-JCEDhp2n.js.map