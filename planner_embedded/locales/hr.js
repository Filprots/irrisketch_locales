(function (p) {
    if (window.paperLocale !== "hr") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Površina", "Crtanje površine", "Uređivanje površine"],
            brushLawn: ["Travnjak", "Crtanje travnjaka", "Uređivanje travnjaka"],
            brushConcrete: ["Beton", "Crtanje betona", "Uređivanje betona"],
            brushSand: ["Pijesak", "Crtanje pijeska", "Uređivanje pijeska"],
            brushBed: ["Gredica", "Crtanje gredice", "Uređivanje gredice"],
            brushBedding: ["Pokrov", "Crtanje pokrova", "Uređivanje pokrova"],
            brushShrubs: ["Grmlje", "Crtanje grmlja", "Uređivanje grmlja"],
            brushPath: ["Staza", "Crtanje staza", "Uređivanje staza"],
            brushWater: ["Voda", "Crtanje vode", "Uređivanje vode"],
            curve: ["Krivulja", "Crtanje krivulje", "Uređivanje krivulje"],
            bush: ["Grm", "Sadnja grma", "Uređivanje grma"],
            saf: ["Objekti", "Crtanje objekata", "Uređivanje objekata"],
            tree: ["Stabla", "Sadnja stabla", "Uređivanje stabala"],
            polySurface: ["Površina", "Crtanje površine", "Uređivanje površine"],
            polyLawn: ["Travnjak", "Crtanje travnjaka", "Uređivanje travnjaka"],
            polyConcrete: ["Beton", "Crtanje betona", "Uređivanje betona"],
            polySand: ["Pijesak", "Crtanje pijeska", "Uređivanje pijeska"],
            polyBed: ["Gredica", "Crtanje gredice", "Uređivanje gredice"],
            polyBedding: ["Pokrov", "Crtanje pokrova", "Uređivanje pokrova"],
            polyShrubs: ["Grmlje", "Crtanje grmlja", "Uređivanje grmlja"],
            polyPath: ["Staza", "Crtanje staza", "Uređivanje staza"],
            polyWater: ["Voda", "Crtanje vode", "Uređivanje vode"],
            ruler: ["Ravnalo", "Ravnalo", "Ravnalo"],
            cntr: ["Programator", "Crtanje programatora", "Uređivanje programatora"],
            sens: ["Senzor", "Crtanje senzora", "Uređivanje senzora"],
            wr: ["Kontrolna žica", "Crtanje kontrolne žice", "Uređivanje kontrolne žice"],
            swr: ["Žica senzora", "Crtanje žice senzora", "Uređivanje žice senzora"],
            dl16: ["Kap po kap 16mm", "Crtanje Kap po kap 16mm", "Uređivanje Kap po kap 16mm"],
            ds16: ["Priključak za kap po kap 16mm", "Crtanje priključka za kap po kap 16mm", "Uređivanje priključka za kap po kap 16mm"],
            dl17: ["Kap po kap 17mm", "Crtanje Kap po kap 17mm", "Uređivanje Kap po kap 17mm"],
            ds17: ["Priključak za kap po kap 17mm", "Crtanje priključka za kap po kap 17mm", "Uređivanje priključka za kap po kap 17mm"],
            rzw: ["Navodnjavanje zone korijena", "Crtanje uređaja navodnjavanja zone korijena", "Uređivanje uređaja navodnjavanja zone korijena"],
            qc: ["Q/C Ventil", "Postavljanje Q/C Ventila", "Uređivanje Q/C Ventila"],
            inset: ["Protur", "Crtanje protura", "Uređivanje protura"],
            mpRotator: ["MP Rotator", "Postavljanje MP Rotatora", "Uređivanje MP Rotatora"],
            mpRotatorSR: ["MP Rotator 800", "Postavljanje MP Rotatora 800", "Uređivanje MP Rotatora 800"],
            mpRotatorStrip: ["MP Rotator Trakasti", "Postavljanje trakastog MP Rotatora", "Uređivanje trakastog MP Rotatora"],
            bubbNHMS: ["Bubbler dizna", "Postavljanje Bubbler dizne", "Uređivanje Bubbler dizne"],
            bubbNHPC: ["Bubbler dizna", "Postavljanje Bubbler dizne", "Uređivanje Bubbler dizne"],
            bubbNHDS: ["Bubbler dizna", "Postavljanje Bubbler dizne", "Uređivanje Bubbler dizne"],
            pdcAdj: ["PRO dizna podesivog kuta", "Postavljanje PRO dizne podesivog kuta", "Uređivanje PRO dizne podesivog kuta"],
            prosFixed: ["Pro-Spray dizna fiksnog kuta", "Postavljanje Pro-Spray dizne fiksnog kuta", "Uređivanje Pro-Spray dizne fiksnog kuta"],
            srNoz: ["Dizna kratkog dometa", "Postavljanje dizne kratkog dometa", "Uređivanje dizne kratkog dometa"],
            streamNoz: ["Višemlazna dizna", "Postavljanje višemlazne dizne", "Uređivanje višemlazne dizne"],
            strPatNoz: ["Trakasta dizna", "Postavljanje trakaste dizne", "Uređivanje trakaste dizne"],
            bubbHPC: ["Bubbler", "Postavljanje Bubblera", "Uređivanje Bubblera"],
            bubbHAF: ["Bubbler", "Postavljanje Bubblera", "Uređivanje Bubblera"],
            bubbTB: ["Bubbler", "Postavljanje Bubblera", "Uređivanje Bubblera"],
            bubbTBADJ: ["Bubbler", "Postavljanje Bubblera", "Uređivanje Bubblera"],
            fnf: ["Dizna fiksnog kuta", "Postavljanje dizne fiksnog kuta", "Uređivanje dizne fiksnog kuta"],
            fnm: ["Dizna fiksnog kuta", "Postavljanje dizne fiksnog kuta", "Uređivanje dizne fiksnog kuta"],
            fnfstrip: ["Trakasta dizna", "Postavljanje trakaste dizne", "Uređivanje trakaste dizne"],
            fnmstrip: ["Trakasta dizna", "Postavljanje trakaste dizne", "Uređivanje trakaste dizne"],
            hekvf: ["HE-KVF Dizna", "Postavljanje HE-KVF dizne", "Uređivanje HE-KVF dizne"],
            kv: ["KV Dizna", "Postavljanje KV dizne", "Uređivanje KV dizne"],
            rn: ["RN Dizna", "Postavljanje RN dizne", "Uređivanje RN dizne"],
            rns: ["RN Trakasta dizna", "Postavljanje RN trakaste dizne", "Uređivanje RN trakaste dizne"],
            rna: ["RN-Podesiva dizna", "Postavljanje RN podesive dizne", "Uređivanje RN podesive dizne"],
            "bubbRBPC": ["Bubbler", "Postavljanje Bubblera", "Uređivanje Bubblera"],
            "bubbRBPCT": ["Bubbler", "Postavljanje Bubblera", "Uređivanje Bubblera"],
            "bubbRBADJ": ["Bubbler", "Postavljanje Bubblera", "Uređivanje Bubblera"],
            "bubbNMPR": ["Bubbler dizna", "Postavljanje Bubbler dizne", "Uređivanje Bubbler dizne"],
            "bubbNMPRSt": ["Bubbler dizna", "Postavljanje Bubbler dizne", "Uređivanje Bubbler dizne"],
            "hevan": ["HE-VAN Dizna", "Postavljanje HE-VAN dizne", "Uređivanje HE-VAN dizne"],
            "mprseries": ["Dizna MPR Serije", "Postavljanje dizne MPR Serije", "Uređivanje dizne MPR Serije"],
            "mprstseries": ["MPR Trakasta dizna", "Postavljanje MPR trakaste dizne", "Uređivanje MPR trakaste dizne"],
            "rvan": ["R-VAN Dizna", "Postavljanje R-VAN dizne", "Uređivanje R-VAN dizne"],
            "rvanStrip": ["R-VAN Trakasta dizna", "Postavljanje R-VAN trakaste dizne", "Uređivanje R-VAN trakaste dizne"],
            "sqseries": ["Dizna SQ Serije s kvadratnim oblikom mlaza", "Postavljanje dizne SQ Serije s kvadratnim oblikom mlaza", "Uređivanje dizne SQ Serije s kvadratnim oblikom mlaza"],
            "useries": ["Dizna U-Serije", "Postavljanje dizne U-Serije", "Uređivanje dizne U-Serije"],
            "van": ["VAN Dizna", "Postavljanje VAN Dizne", "Uređivanje VAN Dizne"],
            "bubbToro500": ["Bubbler", "Postavljanje Bubblera", "Uređivanje Bubblera"],
            "bubbToro500S": ["Bubbler", "Postavljanje Bubblera", "Uređivanje Bubblera"],
            "bubbNozToroPC": ["Bubbler dizna", "Postavljanje Bubbler dizne", "Uređivanje Bubbler dizne"],
            "bubbNozStreamToro": ["Bubbler dizna", "Postavljanje Bubbler dizne", "Uređivanje Bubbler dizne"],
            "bubbNozStreamToroPC": ["Bubbler dizna", "Postavljanje Bubbler dizne", "Uređivanje Bubbler dizne"],
            "bubbNozOppStreamToro": ["Bubbler dizna", "Postavljanje Bubbler dizne", "Uređivanje Bubbler dizne"],
            "bubbNozOppStreamToroPC": ["Bubbler dizna", "Postavljanje Bubbler dizne", "Uređivanje Bubbler dizne"],
            "toromprplus": ["Dizna serije MPR Plus", "Postavljanje dizne serije MPR Plus", "Uređivanje dizne serije MPR Plus"],
            "toromprplusStrip": ["Dizna serije MPR Plus", "Postavljanje dizne serije MPR Plus", "Uređivanje dizne serije MPR Plus"],
            "toromprplusPC": ["Dizna serije MPR Plus PC", "Postavljanje dizne serije MPR Plus PC", "Uređivanje dizne serije MPR Plus PC"],
            "toromprplusPCStrip": ["Dizna serije MPR Plus PC", "Postavljanje dizne serije MPR Plus PC", "Uređivanje dizne serije MPR Plus PC"],
            "precisionRotator": ["Rotacijska dizna Precision Serije", "Postavljanje rotacijske dizne Precision Serije", "Uređivanje rotacijske dizne Precision Serije"],
            "precisionRotatorF": ["Rotacijska dizna Precision Serije", "Postavljanje rotacijske dizne Precision Serije", "Uređivanje rotacijske dizne Precision Serije"],
            "precisionSpray": ["Dizna Precision serije", "Postavljanje dizne Precision serije", "Uređivanje dizne Precision serije"],
            "precisionSprayF": ["Dizna Precision serije", "Postavljanje dizne Precision serije", "Uređivanje dizne Precision serije"],
            "precisionSprayStrip": ["Dizna Precision serije", "Postavljanje dizne Precision serije", "Uređivanje dizne Precision serije"],
            "precisionSprayStripF": ["Dizna Precision serije", "Postavljanje dizne Precision serije", "Uređivanje dizne Precision serije"],
            "precisionSprayPC": ["Dizna Precision PC serije", "Postavljanje dizne Precision PC serije", "Uređivanje dizne Precision PC serije"],
            "precisionSprayPCF": ["Dizna Precision PC serije", "Postavljanje dizne Precision PC serije", "Uređivanje dizne Precision PC serije"],
            "precisionSprayPCStrip": ["Dizna Precision PC serije", "Postavljanje dizne Precision PC serije", "Uređivanje dizne Precision PC serije"],
            "precisionSprayPCStripF": ["Dizna Precision PC serije", "Postavljanje dizne Precision PC serije", "Uređivanje dizne Precision PC serije"],
            "tvantoro": ["Dizna serije TVAN", "Postavljanje dizne serije TVAN", "Uređivanje dizne serije TVAN"],
            "streamSprayNozToro": ["Stream Spray dizna", "Postavljanje Stream Spray dizne", "Uređivanje Stream Spray dizne"],
            "streamSprayNozToroPC": ["Stream Spray dizna", "Postavljanje Stream Spray dizne", "Uređivanje Stream Spray dizne"],
            "bubbWM": ["Bubbler", "Postavljanje Bubblera", "Uređivanje Bubblera"],
            "bubbWMADJ": ["Bubbler", "Postavljanje Bubblera", "Uređivanje Bubblera"],
            "maxaan": ["MAXAAN Dizna", "Postavljanje MAXAAN dizne", "Uređivanje MAXAAN dizne"],
            "maxmpr": ["MAXMPR Dizna", "Postavljanje MAXMPR dizne", "Uređivanje MAXMPR dizne"],
            "maxmprst": ["MAXMPR Strip Dizna", "Postavljanje MAXMPR Strip dizne", "Uređivanje MAXMPR Strip dizne"],
            "maxmprstream": ["MAXMPR Stream Bubbler Dizna", "Postavljanje MAXMPR Stream Bubbler dizne", "Uređivanje MAXMPR Stream Bubbler dizne"],
            "maxmprststream": ["MAXMPR Stream Bubbler Dizna", "Postavljanje MAXMPR Stream Bubbler dizne", "Uređivanje MAXMPR Stream Bubbler dizne"],
            "bseries": ["Dizna B Serije", "Postavljanje dizne B Serije", "Uređivanje dizne B Serije"],
            "bseriesst": ["Trakasta dizna B Serije", "Postavljanje trakaste dizne B Serije", "Uređivanje trakaste dizne B Serije"],
            "trench": ["Rov", "Crtanje rovova", "Uređivanje rovova"],
            "v": ["Razvod ventila", "Postavljanje razvoda ventila", "Uređivanje razvoda ventila"],
            "ws": ["Izvor vode", "Postavljanje izvora vode", "Uređivanje izvora vode"],
            "lp": ["Lateralne cijevi", "Crtanje lateralnih cijevi", "Uređivanje lateralnih cijevi"],
            "mp": ["Opskrbni vod", "Crtanje opskrbnog voda", "Uređivanje opskrbnog voda"]
        },
        vars: {
            sp: "Zone",
            ld: "Hortikultura",
            mixed_sp_lo: "Instalacija/Potrošači",
            mixed_sp_lo2: "Sprinkler/Layout 2",
            mixed_ld_lo: "Instalacija/Hortikultura",
            hw: "Hydrawise",
            lo: "Radionički",
            loPM: "Intenzitet kišenja",
            doIrrigate: "Irrigated zone",
            doNotIrrigate: "NON-Irrigated zone",
            stdSurf: "Standard",
            fineCut: "Fino pokošeni travnjak",
            raw: "Sirovi beton",
            soft: "Meki pijesak",
            flowerBedMix1: "Cvjetni miks 1",
            flowerBedMix2: "Cvjetni miks 2",
            flowerBedMix3: "Cvjetni miks 3",
            flowerBedWhite: "Cvjetna gredica bijela",
            flowerBedBlue: "Cvjetna gredica plava",
            flowerBedYellow: "Cvjetna gredica žuta",
            flowerBedRed: "Cvjetna gredica crvena",
            flowerBedMalina: "Cvjetna gredica grimizna",
            flowerBedOrange: "Cvjetna gredica narančasta",
            flowerBedDarkBlue: "Cvjetna gredica tamno plava",
            flowerBedViolet: "Cvjetna gredica ljubičasta",
            flowerBedDarkViolet: "Cvjetna gredica tamno ljubičasta",
            herbalBed1: "Začinska gredica 1",
            herbalBed2: "Začinska gredica 2",
            mulch: "Malč",
            gravel: "Šljunak",
            shrubs: "Grmlje 1",
            pavementFill: "Pavement 1",
            pavementContour: "Pavement 2",
            pavement3: "Pavement 3",
            pavement01_A: "Tetris 1",
            pavement01_B: "Tetris 2",
            pavement01_C: "Tetris 3",
            pavement02_A: "Dijagonalno 1",
            pavement02_B: "Dijagonalno 2",
            pavement03_A: "Mozaik 1",
            pavement03_B: "Mozaik 2",
            pavement04_Red_L: "Saće - Svjetlo Crvena",
            pavement04_Red_D: "Saće - Tamno Crvena",
            pavement04_Green_L: "Saće - Svjetlo Zelena",
            pavement04_Green_D: "Saće - Tamno Zelena",
            pavement04_Blue_L: "Saće - Svjetlo Plava",
            pavement04_Blue_D: "Saće - Tamno Plava",
            pool: "Bazen",
            lo_stdDynCurve: "Dinamičke",
            lo_stdCurve: "Standardne",
            stdCurve: "Standard",
            markCurve: "Crveni marker",
            pathCurve: "Staza",
            pillarCurve: "Stupovi",
            fenceCurve: "Ograda",
            test00: "Test 00",
            test01: "Test 01",
            test02: "Test 02",
            test03: "Test 03",
            test04: "Test 04",
            test05: "Test 05",
            test06: "Test 06",
            saf01: "Kamen 1",
            saf02: "Kamen 2",
            saf03: "Kamen 3",
            saf04: "Kamen 4",
            saf05: "Kamen 5",
            saf06: "Kamen 6",
            saf07: "Kamen 7",
            saf08: "Klupa 1",
            saf09: "Klupa 2",
            saf10: "Stol 4 stolice",
            saf11: "Stol 6 stolica",
            saf12: "Karavan",
            saf13: "Limuzina",
            saf14: "Dječji tobogan 1",
            saf14_0: "Dječji tobogan 2",
            saf14_L: "Dječji tobogan 3",
            saf14_R: "Dječji tobogan 4",
            saf15: "Njihaljka",
            saf16: "Ležaljka 1",
            saf17: "Ležaljka 2",
            saf18: "Svjetlo 1",
            saf19: "Svjetlo 2",
            saf20: "Vodopad",
            saf21: "Vodeno tijelo 1",
            saf22: "Vodeno tijelo 2",
            saf23: "Šaht 1",
            saf24: "Šaht 2",
            bush01: "Grm #01",
            bush02: "Grm #02",
            bush03: "Grm #03",
            bush04: "Grm #04",
            bush05: "Grm #05",
            bush06: "Grm #06",
            bush07: "Grm #07",
            bush08: "Grm #08",
            bush09: "Grm #09",
            bush10: "Grm #10",
            bush11: "Grm #11",
            bush12: "Grm #12",
            bush13: "Grm #13",
            tree00: "Voćka",
            tree01: "Stablo #01",
            tree02: "Stablo #02",
            tree03: "Stablo #03",
            tree04: "Stablo #04",
            tree05: "Stablo #05",
            tree06: "Stablo #06",
            tree07: "Stablo #07",
            tree08: "Stablo #08",
            tree09: "Stablo #09",
            tree10: "Stablo #10",
            tree11: "Stablo #11",
            tree12: "Stablo #12",
            tree13: "Stablo #13",
            tree14: "Stablo #14",
            tree15: "Stablo #15",
            tree16: "Stablo #16",
            tree17: "Stablo #17",
            stdRuler: "Standard",
            fixedCntr: "24V Fiksni broj zona",
            stand_aloneCntr: "Baterijski programator",
            modularCntr: "Modularni programator",
            rainSensor: "Senzor kiše",
            soilSensor: "Senzor vlažnosti",
            freezeSensor: "Senzor mraza",
            wrFreezeSensor: "Bežični senzor za Kišu/Mraz",
            windSensor: "Senzor vjetra",
            solarSensor: "Senzor solarni",
            flowSensor: "Senzor protoka",
            weatherStation: "Vremenska stanica",
            controlWire: "Kontrolna žica",
            sensorWire: "Žica senzora",
            wirelessWire: "Wireless connection",
            dS16: "Priključak za kap po kap 16mm",
            dS17: "Priključak za kap po kap 17mm",
            qcPlastic: "Plastični Q/C Ventil",
            qcMetal: "Metalni Q/C Ventil",
            hdpePE80SDR11: "HDPE PE80 SDR 11",
            hdpePE80SDR136: "HDPE PE80 SDR 13.6",
            hdpePE80SDR176: "HDPE PE80 SDR 17.6",
            hdpePE100SDR11: "HDPE PE100 SDR 11",
            hdpePE100SDR136: "HDPE PE100 SDR 13.6",
            hdpePE100SDR176: "HDPE PE100 SDR 17.6",
            hdpeSDR9: "HDPE SDR 9",
            hdpeSDR11: "HDPE SDR 11",
            hdpeSDR136: "HDPE SDR 13.6",
            hdpeSDR17: "HDPE SDR 17",
            hdpeSDR176: "HDPE SDR 17.6",
            pvcSCH40: "PVC SCH 40",
            pvcSCH80: "PVC SCH 80",
            stdTrench: "Standard (40cm) (naslijeđeno)",
            normalTrench: "Normalni (Š:10cm D:50cm)",
            narrowTrench: "Uski (Š:5cm D:30cm) (Ručna freza)",
            wideTrench: "Široki (Š:30cm D:60cm) (Mini-Bager)",
            multi: "Ventilska kutija",
            source: "Izvor vode",
            empty: "Prazno",
            frame: "Okvir",
            gostDefault: "GOST 21.101-97 (Prva)",
            gostSmall: "GOST 21.101-97 (Ostale)",
            a4hor: "A4 Horizontalno",
            a4vert: "A4 Vertikalno",
            a3hor: "A3 Horizontalno",
            a3vert: "A3 Vertikalno",
            a2hor: "A2 Horizontalno",
            a2vert: "A2 Vertikalno",
            a1hor: "A1 Horizontalno",
            a1vert: "A1 Vertikalno",
            a0hor: "A0 Horizontalno",
            a0vert: "A0 Vertikalno",
            stdCompass: "Kompas",
            gostSize: "Kote",
            landscp: "Tablica Krajobraza",
            conv: "Tablica simbola",
            convAll: "Tablica simbola (All)",
            zoneT: "Tablica zona",
            sprinkZoneTimeT: "Vrijeme rada zona",
            sprinkT: "Tablica rasprskivača",
            dripT: "Tablica Kap po kap",
            insItemT: "Tablica protura (Po stavkama)",
            insVarDiamT: "Tablica protura (Po materijalu i promjeru)",
            insDiamT: "Tablica protura (Po promjerima)",
            insVarT: "Tablica protura (Po Materijalu)",
            staticText: "Tekst",
            dynamicText: "Tekst",
            stampTextDef: "Tekst Sastavnice",
            sbStdMetric: "Srednje mjerilo (Metričko)",
            sbMinMetric: "Mini (Metričko)",
            sbExtMetric: "Prošireno (Metričko)",
            sbStdImperial: "Srednje mjerilo (Imperijalno)",
            sbMinImperial: "Mini (Imperijalno)",
            sbExtImperial: "Prošireno (Imperijalno)",
            gentleMicroClimate: "Blaga",
            normalMicroClimate: "Normalna",
            toughMicroClimate: "Teška",
            sand: "Pijesak",
            sandyLoam: "Ilovasta pjeskulja",
            lightLoam: "Pjeskovita ilovača",
            mediumLoam: "Obična ilovača",
            heavyLoam: "Teža ilovača",
            clay: "Glinasta ilovača",
            heavyClay: "Teška glina",
            noneIncline: "0-5% (0-3°)",
            lightIncline: "5-8% (3-5°)",
            mediumIncline: "8-12% (5-7°)",
            hugeIncline: "12%+ (7°+)"
        },
        misc: {
            fixedCntrSubText: "24V",
            standAloneCntrSubText: "BAT",
            modularCntrSubText: "MOD."
        },
        placeholders: {
            rotorType: ["{{brand}} {{series}} rotor", "Postavljanje {{series}} Rotora", "Uređivanje {{series}} Rotora"]
        }
    };
})(this);
