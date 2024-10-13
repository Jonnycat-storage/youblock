const e=[{code:"LC",name:"Αγία Λουκία"},{code:"VC",name:"Άγιος Βικέντιος και Γρεναδίνες"},{code:"SM",name:"Άγιος Μαρίνος"},{code:"KN",name:"Άγιος Χριστόφορος και Νέβις"},{code:"AZ",name:"Αζερμπαϊτζάν"},{code:"EG",name:"Αίγυπτος"},{code:"ET",name:"Αιθιοπία"},{code:"HT",name:"Αϊτή"},{code:"CI",name:"Ακτή Ελεφαντοστού"},{code:"AL",name:"Αλβανία"},{code:"DZ",name:"Αλγερία"},{code:"TL",name:"Ανατολικό Τιμόρ"},{code:"AO",name:"Ανγκόλα"},{code:"AD",name:"Ανδόρρα"},{code:"AG",name:"Αντίγκουα και Μπαρμπούντα"},{code:"AR",name:"Αργεντινή"},{code:"AM",name:"Αρμενία"},{code:"AU",name:"Αυστραλία"},{code:"AT",name:"Αυστρία"},{code:"AF",name:"Αφγανιστάν"},{code:"VU",name:"Βανουάτου"},{code:"BE",name:"Βέλγιο"},{code:"VE",name:"Βενεζουέλα"},{code:"VN",name:"Βιετνάμ"},{code:"BO",name:"Βολιβία"},{code:"KP",name:"Βόρεια Κορέα"},{code:"BA",name:"Βοσνία-Ερζεγοβίνη"},{code:"BG",name:"Βουλγαρία"},{code:"BR",name:"Βραζιλία"},{code:"FR",name:"Γαλλία"},{code:"DE",name:"Γερμανία"},{code:"GE",name:"Γεωργία"},{code:"GM",name:"Γκάμπια"},{code:"GA",name:"Γκαμπόν"},{code:"GH",name:"Γκάνα"},{code:"GT",name:"Γουατεμάλα"},{code:"GY",name:"Γουιάνα"},{code:"GN",name:"Γουινέα"},{code:"GW",name:"Γουινέα-Μπισσάου"},{code:"GD",name:"Γρενάδα"},{code:"DK",name:"Δανία"},{code:"DO",name:"Δομινικανή Δημοκρατία"},{code:"SV",name:"Ελ Σαλβαδόρ"},{code:"CH",name:"Ελβετία"},{code:"GR",name:"Ελλάδα"},{code:"ER",name:"Ερυθραία"},{code:"EE",name:"Εσθονία"},{code:"ZM",name:"Ζάμπια"},{code:"ZW",name:"Ζιμπάμπουε"},{code:"AE",name:"Ηνωμένα Αραβικά Εμιράτα"},{code:"US",name:"Ηνωμένες Πολιτείες Αμερικής"},{code:"GB",name:"Ηνωμένο Βασίλειο"},{code:"JP",name:"Ιαπωνία"},{code:"IN",name:"Ινδία"},{code:"ID",name:"Ινδονησία"},{code:"JO",name:"Ιορδανία"},{code:"IQ",name:"Ιράκ"},{code:"IR",name:"Ιράν"},{code:"IE",name:"Ιρλανδία"},{code:"GQ",name:"Ισημερινή Γουινέα"},{code:"EC",name:"Ισημερινός"},{code:"IS",name:"Ισλανδία"},{code:"ES",name:"Ισπανία"},{code:"IL",name:"Ισραήλ"},{code:"IT",name:"Ιταλία"},{code:"KZ",name:"Καζακστάν"},{code:"CM",name:"Καμερούν"},{code:"KH",name:"Καμπότζη"},{code:"CA",name:"Καναδάς"},{code:"QA",name:"Κατάρ"},{code:"CF",name:"Κεντροαφρικανική Δημοκρατία"},{code:"KE",name:"Κένυα"},{code:"CN",name:"Κίνα"},{code:"KG",name:"Κιργιζία"},{code:"KI",name:"Κιριμπάτι"},{code:"CG",name:"Κογκό"},{code:"CO",name:"Κολομβία"},{code:"KM",name:"Κομόρες"},{code:"CR",name:"Κόστα Ρίκα"},{code:"CU",name:"Κούβα"},{code:"KW",name:"Κουβέιτ"},{code:"HR",name:"Κροατία"},{code:"CY",name:"Κύπρος"},{code:"CD",name:"Λαϊκή Δημοκρατία του Κογκό"},{code:"LA",name:"Λάος"},{code:"LS",name:"Λεσότο"},{code:"LV",name:"Λεττονία"},{code:"BY",name:"Λευκορωσία"},{code:"LB",name:"Λίβανος"},{code:"LR",name:"Λιβερία"},{code:"LY",name:"Λιβύη"},{code:"LT",name:"Λιθουανία"},{code:"LI",name:"Λίχτενσταϊν"},{code:"LU",name:"Λουξεμβούργο"},{code:"MG",name:"Μαδαγασκάρη"},{code:"MY",name:"Μαλαισία"},{code:"MW",name:"Μαλάουι"},{code:"MV",name:"Μαλδίβες"},{code:"ML",name:"Μάλι"},{code:"MT",name:"Μάλτα"},{code:"MA",name:"Μαρόκο"},{code:"MU",name:"Μαυρίκιος"},{code:"MR",name:"Μαυριτανία"},{code:"ME",name:"Μαυροβούνιο"},{code:"MX",name:"Μεξικό"},{code:"MM",name:"Μιανμάρ"},{code:"MN",name:"Μογγολία"},{code:"MZ",name:"Μοζαμβίκη"},{code:"MD",name:"Μολδαβία"},{code:"MC",name:"Μονακό"},{code:"BD",name:"Μπανγκλαντές"},{code:"BB",name:"Μπαρμπάντος"},{code:"BS",name:"Μπαχάμες"},{code:"BH",name:"Μπαχρέιν"},{code:"BZ",name:"Μπελίζ"},{code:"BJ",name:"Μπενίν"},{code:"BW",name:"Μποτσουάνα"},{code:"BF",name:"Μπουρκίνα Φάσο"},{code:"BI",name:"Μπουρούντι"},{code:"BT",name:"Μπουτάν"},{code:"BN",name:"Μπρουνέι"},{code:"NA",name:"Ναμίμπια"},{code:"NR",name:"Ναουρού"},{code:"NZ",name:"Νέα Ζηλανδία"},{code:"NP",name:"Νεπάλ"},{code:"MH",name:"Νήσοι Μάρσαλ"},{code:"SB",name:"Νήσοι Σολομώντα"},{code:"NE",name:"Νίγηρας"},{code:"NG",name:"Νιγηρία"},{code:"NI",name:"Νικαράγουα"},{code:"NO",name:"Νορβηγία"},{code:"ZA",name:"Νότια Αφρική"},{code:"KR",name:"Νότια Κορέα"},{code:"SS",name:"Νότιο Σουδάν"},{code:"DM",name:"Δομινίκα"},{code:"NL",name:"Ολλανδία (Κάτω Χώρες)"},{code:"OM",name:"Ομάν"},{code:"FM",name:"Ομόσπονδες Πολιτείες της Μικρονησίας"},{code:"HN",name:"Ονδούρα"},{code:"HU",name:"Ουγγαρία"},{code:"UG",name:"Ουγκάντα"},{code:"UZ",name:"Ουζμπεκιστάν"},{code:"UA",name:"Ουκρανία"},{code:"UY",name:"Ουρουγουάη"},{code:"PK",name:"Πακιστάν"},{code:"PW",name:"Παλάου"},{code:"PA",name:"Παναμάς"},{code:"PG",name:"Παπούα Νέα Γουινέα"},{code:"PY",name:"Παραγουάη"},{code:"MK",name:"Βόρεια Μακεδονία"},{code:"PE",name:"Περού"},{code:"PL",name:"Πολωνία"},{code:"PT",name:"Πορτογαλία"},{code:"CV",name:"Πράσινο Ακρωτήρι"},{code:"RW",name:"Ρουάντα"},{code:"RO",name:"Ρουμανία"},{code:"RU",name:"Ρωσία"},{code:"WS",name:"Σαμόα"},{code:"ST",name:"Σάο Τομέ και Πρίνσιπε"},{code:"SA",name:"Σαουδική Αραβία"},{code:"SN",name:"Σενεγάλη"},{code:"RS",name:"Σερβία"},{code:"SC",name:"Σεϋχέλλες"},{code:"SL",name:"Σιέρα Λεόνε"},{code:"SG",name:"Σιγκαπούρη"},{code:"SK",name:"Σλοβακία"},{code:"SI",name:"Σλοβενία"},{code:"SO",name:"Σομαλία"},{code:"SZ",name:"Εσουατίνι"},{code:"SD",name:"Σουδάν"},{code:"SE",name:"Σουηδία"},{code:"SR",name:"Σουρινάμ"},{code:"LK",name:"Σρι Λάνκα"},{code:"SY",name:"Συρία"},{code:"TH",name:"Ταϊλάνδη"},{code:"TZ",name:"Τανζανία"},{code:"TJ",name:"Τατζικιστάν"},{code:"TW",name:"Ταϊβάν"},{code:"JM",name:"Τζαμάικα"},{code:"DJ",name:"Τζιμπουτί"},{code:"TO",name:"Τόγκα"},{code:"TG",name:"Τόγκο"},{code:"TV",name:"Τουβαλού"},{code:"TR",name:"Τουρκία"},{code:"TM",name:"Τουρκμενιστάν"},{code:"TT",name:"Τρινιντάντ και Τομπάγκο"},{code:"TD",name:"Τσαντ"},{code:"CZ",name:"Τσεχία"},{code:"TN",name:"Τυνησία"},{code:"YE",name:"Υεμένη"},{code:"PH",name:"Φιλιππίνες"},{code:"FI",name:"Φινλανδία"},{code:"FJ",name:"Φίτζι"},{code:"CL",name:"Χιλή"},{code:"HK",name:"Χονγκ Κονγκ"}];export{e as default};
//# sourceMappingURL=el-kyWqq840.js.map