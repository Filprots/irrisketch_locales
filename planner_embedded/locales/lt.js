(function (p) {
    if (window.paperLocale !== "lt") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Paviršius", "Paviršiaus brėžinys", "Paviršiaus redagavimas"],
            brushLawn: ["Laukas", "Lauko brėžinys", "Lauko redagavimas"],
            brushConcrete: ["Betonas", "Betoninio paviršiaus brėžinys", "Betoninio paviršiaus redagavimas"],
            brushSand: ["Smėlis", "Smėlio paviršiaus brėžinys", "Smėlio paviršiaus redagavimas"],
            brushBed: ["Ložė", "Ložės brėžinys", "Ložės redagavimas"],
            brushBedding: ["Įrankis lovoms tvarkyti", "Ložės tvarkymo įrankio brėžinys", "Ložės tvarkymo įrankio redagavimas"],
            brushShrubs: ["Krūmai", "Krūmų brėžinys", "Krūmų redagavimas"],
            brushPath: ["Kelias", "Kelio brėžinys", "Kelio redagavimas"],
            brushWater: ["Vanduo", "Vandens brėžinys", "Vandens redagavimas"],
            curve: ["Linija", "Linijos brėžinys", "Linijos redagavimas"],
            bush: ["Krūmas", "Krūmo sodinimas", "Krūmo redagavimas"],
            saf: ["Mažosios architektūros formos", "Mažųjų architektūros formų brėžinys", "Mažųjų architektūros formų redagavimas"],
            tree: ["Medis", "Medžio sodinimas", "Medžio redagavimas"],
            polySurface: ["Paviršius", "Paviršiaus brėžinys", "Paviršiaus redagavimas"],
            polyLawn: ["Laukas", "Lauko brėžinys", "Lauko redagavimas"],
            polyConcrete: ["Betonas", "Betoninio paviršiaus brėžinys", "Betoninio paviršiaus redagavimas"],
            polySand: ["Smėlis", "Smėlio paviršiaus brėžinys", "Smėlio paviršiaus redagavimas"],
            polyBed: ["Ložė", "Ložės brėžinys", "Ložės redagavimas"],
            polyBedding: ["Įrankis lovoms tvarkyti", "Ložės tvarkymo įrankio brėžinys", "Ložės tvarkymo įrankio redagavimas"],
            polyShrubs: ["Krūmai", "Krūmų brėžinys", "Krūmų redagavimas"],
            polyPath: ["Kelias", "Kelio brėžinys", "Kelio redagavimas"],
            polyWater: ["Vanduo", "Vandens brėžinys", "Vandens redagavimas"],
            ruler: ["Linijinis matuoklis", "Linijinio matuoklio brėžinys", "Linijinio matuoklio redagavimas"],
            cntr: ["Valdiklis", "Valdiklio brėžinys", "Valdiklio redagavimas"],
            sens: ["Sensorius", "Sensoriaus brėžinys", "Sensoriaus redagavimas"],
            wr: ["Valdymo laidas", "Valdymo laido brėžinys", "Valdymo laido redagavimas"],
            swr: ["Sensorinė laida", "Sensorinės laido brėžinys", "Sensorinės laido redagavimas"],
            dl16: ["Lašelinė linija 16 mm", "Lašelinės linijos 16 mm brėžinys", "Lašelinės linijos 16 mm redagavimas"],
            ds16: ["Lašelinio pradžios 16 mm", "Lašelinio pradžios 16 mm brėžinys", "Lašelinio pradžios 16 mm redagavimas"],
            dl17: ["Lašelinė linija 17 mm", "Lašelinės linijos 17 mm brėžinys", "Lašelinės linijos 17 mm redagavimas"],
            ds17: ["Lašelinio pradžios 17 mm", "Lašelinio pradžios 17 mm brėžinys", "Lašelinio pradžios 17 mm redagavimas"],
            rzw: ["Šaknų zonos laistymas", "Šaknų zonos laistymo įrenginio brėžinys", "Šaknų zonos laistymo įrenginio redagavimas"],
            qc: ["Greito jungimo vožtuvas", "Greito jungimo vožtuvo montavimas", "Greito jungimo vožtuvo redagavimas"],
            inset: ["Vamzdžių apdaila", "Vamzdžių apdailos brėžinys", "Vamzdžių apdailos redagavimas"],
            mpRotator: ["Mp Rotator", "Mp Rotator montavimas", "Mp Rotator redagavimas"],
            mpRotatorSR: ["Mp Rotator 800", "Mp Rotator 800 montavimas", "Mp Rotator 800 redagavimas"],
            mpRotatorStrip: ["Mp Rotator Strip", "Mp Rotator Strip montavimas", "Mp Rotator Strip redagavimas"],
            bubbNHMS: ["Burbuliukų antgalis", "Burzgiklio antgalio montavimas", "Burzgiklio antgalio redagavimas"],
            bubbNHPC: ["Burzgiklio antgalis", "Burzgiklio antgalio montavimas", "Burzgiklio antgalio redagavimas"],
            bubbNHDS: ["Burzgiklio antgalis", "Burzgiklio antgalio montavimas", "Burzgiklio antgalio redagavimas"],
            pdcAdj: ["PRO reguliuojamas antgalis", "PRO reguliuojamo antgalio montavimas", "PRO reguliuojamo antgalio redagavimas"],
            prosFixed: ["Pro-Spray fiksuotas antgalis", "Pro-Spray fiksuoto antgalio montavimas", "Pro-Spray fiksuoto antgalio redagavimas"],
            srNoz: ["Trumpo spindulio antgalis", "Trumpo spindulio antgalio montavimas", "Trumpo spindulio antgalio redagavimas"],
            streamNoz: ["Srauto antgalis", "Srauto antgalio montavimas", "Srauto antgalio redagavimas"],
            strPatNoz: ["Juostinio šilumos antgalis", "Juostinio šilumos antgalio montavimas", "Juostinio šilumos antgalio redagavimas"],
            bubbHPC: ["Burzgiklis", "Burzgiklio montavimas", "Burzgiklio redagavimas"],
            bubbHAF: ["Burzgiklis", "Burzgiklio montavimas", "Burzgiklio redagavimas"],
            bubbTB: ["Burzgiklis", "Burzgiklio montavimas", "Burzgiklio redagavimas"],
            bubbTBADJ: ["Burzgiklis", "Burzgiklio montavimas", "Burzgiklio redagavimas"],
            fnf: ["Fiksuotas antgalis", "Fiksuoto antgalio montavimas", "Fiksuoto antgalio redagavimas"],
            fnm: ["Fiksuotas antgalis", "Fiksuoto antgalio montavimas", "Fiksuoto antgalio redagavimas"],
            fnfstrip: ["Juostinio šilumos antgalis", "Juostinio šilumos antgalio montavimas", "Juostinio šilumos antgalio redagavimas"],
            fnmstrip: ["Juostinio šilumos antgalis", "Juostinio šilumos antgalio montavimas", "Juostinio šilumos antgalio redagavimas"],
            hekvf: ["HE-KVF antgalis", "HE-KVF antgalio montavimas", "HE-KVF antgalio redagavimas"],
            kv: ["KV antgalis", "KV antgalio montavimas", "KV antgalio redagavimas"],
            rn: ["RN", "RN montavimas", "RN redagavimas"],
            rns: ["RN Juosta", "RN Juostos montavimas", "RN Juostos redagavimas"],
            rna: ["RN-ADJ", "RN-ADJ montavimas", "RN-ADJ redagavimas"],
            "bubbRBPC": ["Burzgiklis", "Burzgiklio montavimas", "Burzgiklio redagavimas"],
            "bubbRBPCT": ["Burzgiklis", "Burzgiklio montavimas", "Burzgiklio redagavimas"],
            "bubbRBADJ": ["Burzgiklis", "Burzgiklio montavimas", "Burzgiklio redagavimas"],
            "bubbNMPR": ["Burzgiklio antgalis", "Burzgiklio antgalio montavimas", "Burzgiklio antgalio redagavimas"],
            "bubbNMPRSt": ["Burzgiklio antgalis", "Burzgiklio antgalio montavimas", "Burzgiklio antgalio redagavimas"],
            "hevan": ["HE-VAN antgalis", "HE-VAN antgalio montavimas", "HE-VAN antgalio redagavimas"],
            "mprseries": ["MPR-Series antgalis", "MPR-Series antgalio montavimas", "MPR-Series antgalio redagavimas"],
            "mprstseries": ["MPR Juostinio šilumos antgalis", "MPR Juostinio šilumos antgalio montavimas", "MPR Juostinio šilumos antgalio redagavimas"],
            "rvan": ["R-VAN", "R-VAN montavimas", "R-VAN redagavimas"],
            "rvanStrip": ["R-VAN Juosta", "R-VAN Juostos montavimas", "R-VAN Juostos redagavimas"],
            "sqseries": ["Kvadratinio modelio antgalis SQ Series", "Kvadratinio modelio antgalio SQ Series montavimas", "Kvadratinio modelio antgalio SQ Series redagavimas"],
            "useries": ["U-Series antgalis", "U-Series antgalio montavimas", "U-Series antgalio redagavimas"],
            "van": ["VAN antgalis", "VAN antgalio montavimas", "VAN antgalio redagavimas"],
            "bubbToro500": ["Burzgiklis", "Burzgiklio montavimas", "Burzgiklio redagavimas"],
            "bubbToro500S": ["Burzgiklis", "Burzgiklio montavimas", "Burzgiklio redagavimas"],
            "bubbNozToroPC": ["Burzgiklio antgalis", "Burzgiklio antgalio montavimas", "Burzgiklio antgalio redagavimas"],
            "bubbNozStreamToro": ["Burzgiklio antgalis", "Burzgiklio antgalio montavimas", "Burzgiklio antgalio redagavimas"],
            "bubbNozStreamToroPC": ["Burzgiklio antgalis", "Burzgiklio antgalio montavimas", "Burzgiklio antgalio redagavimas"],
            "bubbNozOppStreamToro": ["Burzgiklio antgalis", "Burzgiklio antgalio montavimas", "Burzgiklio antgalio redagavimas"],
            "bubbNozOppStreamToroPC": ["Burzgiklio antgalis", "Burzgiklio antgalio montavimas", "Burzgiklio antgalio redagavimas"],
            "toromprplus": ["MPR Plus serijos purkštukas", "MPR Plus serijos purkštukas dėliojamas", "MPR Plus serijos purkštukas redaguojamas"],
            "toromprplusStrip": ["MPR Plus serijos purkštukas", "MPR Plus serijos purkštukas dėliojamas", "MPR Plus serijos purkštukas redaguojamas"],
            "toromprplusPC": ["MPR Plus serijos spaudos kompensuojamas purkštukas", "MPR Plus serijos spaudos kompensuojamas purkštukas dėliojamas", "MPR Plus serijos spaudos kompensuojamas purkštukas redaguojamas"],
            "toromprplusPCStrip": ["MPR Plus serijos spaudos kompensuojamas purkštukas", "MPR Plus serijos spaudos kompensuojamas purkštukas dėliojamas", "MPR Plus serijos spaudos kompensuojamas purkštukas redaguojamas"],
            "precisionRotator": ["Precizijos serijos suktukinis purkštukas", "Precizijos serijos suktukinis purkštukas dėliojamas", "Precizijos serijos suktukinis purkštukas redaguojamas"],
            "precisionRotatorF": ["Precizijos serijos suktukinis purkštukas", "Precizijos serijos suktukinis purkštukas dėliojamas", "Precizijos serijos suktukinis purkštukas redaguojamas"],
            "precisionSpray": ["Precizijos serijos purkštukas", "Precizijos serijos purkštukas dėliojamas", "Precizijos serijos purkštukas redaguojamas"],
            "precisionSprayF": ["Precizijos serijos purkštukas", "Precizijos serijos purkštukas dėliojamas", "Precizijos serijos purkštukas redaguojamas"],
            "precisionSprayStrip": ["Precizijos serijos purkštukas", "Precizijos serijos purkštukas dėliojamas", "Precizijos serijos purkštukas redaguojamas"],
            "precisionSprayStripF": ["Precizijos serijos purkštukas", "Precizijos serijos purkštukas dėliojamas", "Precizijos serijos purkštukas redaguojamas"],
            "precisionSprayPC": ["Tikslumo serijos slėgio kompensuojamas antgalis", "Tikslumo serijos slėgio kompensuojamo antgalio dėklas", "Tikslumo serijos slėgio kompensuojamo antgalio redagavimas"],
            "precisionSprayPCF": ["Tikslumo serijos slėgio kompensuojamas antgalis", "Tikslumo serijos slėgio kompensuojamo antgalio dėklas", "Tikslumo serijos slėgio kompensuojamo antgalio redagavimas"],
            "precisionSprayPCStrip": ["Tikslumo serijos slėgio kompensuojamas antgalis", "Tikslumo serijos slėgio kompensuojamo antgalio dėklas", "Tikslumo serijos slėgio kompensuojamo antgalio redagavimas"],
            "precisionSprayPCStripF": ["Tikslumo serijos slėgio kompensuojamas antgalis", "Tikslumo serijos slėgio kompensuojamo antgalio dėklas", "Tikslumo serijos slėgio kompensuojamo antgalio redagavimas"],
            "tvantoro": ["TVAN serijos antgalis", "TVAN serijos antgalio dėklas", "TVAN serijos antgalio redagavimas"],
            "streamSprayNozToro": ["Sraigtinis purkštukas", "Sraigtinio purkštuko dėklas", "Sraigtinio purkštuko redagavimas"],
            "streamSprayNozToroPC": ["Sraigtinis purkštukas", "Sraigtinio purkštuko dėklas", "Sraigtinio purkštuko redagavimas"],
            "bubbWM": ["Burksninių", "Burksninių dėklas", "Burksninių redagavimas"],
            "bubbWMADJ": ["Burksninių", "Burksninių dėklas", "Burksninių redagavimas"],
            "maxaan": ["MAXAAN skvernozulnis", "MAXAAN skvernozulnio dedimas", "MAXAAN skvernozulnio redagavimas"],
            "maxmpr": ["MAXMPR skvernozulnis", "MAXMPR skvernozulnio dedimas", "MAXMPR skvernozulnio redagavimas"],
            "maxmprst": ["MAXMPR juostinis skvernozulnis", "MAXMPR juostinio skvernozulnio dedimas", "MAXMPR juostinio skvernozulnio redagavimas"],
            "maxmprstream": ["MAXMPR srauto burbuliuko skvernozulnis", "MAXMPR srauto burbuliuko skvernozulnio dedimas", "MAXMPR srauto burbuliuko skvernozulnio redagavimas"],
            "maxmprststream": ["MAXMPR srauto burbuliuko juostinis skvernozulnis", "MAXMPR srauto burbuliuko juostinio skvernozulnio dedimas", "MAXMPR srauto burbuliuko juostinio skvernozulnio redagavimas"],
            "bseries": ["B serijos skvernozulnis", "B serijos skvernozulnio dedimas", "B serijos skvernozulnio redagavimas"],
            "bseriesst": ["B serijos juostinis skvernozulnis", "B serijos juostinio skvernozulnio dedimas", "B serijos juostinio skvernozulnio redagavimas"],
            "trench": ["Iškasimas", "Iškasimo brėžinys", "Iškasimo redagavimas"],
            "v": ["Ventilių kolektorius", "Ventilių kolektoriaus dedimas", "Ventilių kolektoriaus redagavimas"],
            "ws": ["Vandens šaltinis", "Vandens šaltinio dedimas", "Vandens šaltinio redagavimas"],
            "lp": ["Lateralinis vamzdis", "Lateralinio vamzdžio brėžinys", "Lateralinio vamzdžio redagavimas"],
            "mp": ["Pagrindinis vamzdis", "Pagrindinio vamzdžio brėžinys", "Pagrindinio vamzdžio redagavimas"]
        },
        vars: {
            sp: "Pabarstukas",
            ld: "Kraštovaizdis",
            mixed_sp_lo: "Pabarstukas / Planas",
            mixed_sp_lo2: "Sprinkler/Layout 2",
            mixed_ld_lo: "Kraštovaizdis / Planas",
            hw: "Hydrawise",
            lo: "Planas",
            loPM: "Kritulių intensyvumas",
            doIrrigate: "Laistoma zona",
            doNotIrrigate: "Nelaistoma zona",
            stdSurf: "Standartinis",
            fineCut: "Trumpos žolės",
            raw: "Neporėtas betonas",
            soft: "Minkšta smėla",
            flowerBedMix1: "Gėlių mišinys 1",
            flowerBedMix2: "Gėlių mišinys 2",
            flowerBedMix3: "Gėlių mišinys 3",
            flowerBedWhite: "Gėlių lovų baltos spalvos",
            flowerBedBlue: "Gėlių lovų mėlynos spalvos",
            flowerBedYellow: "Gėlių lovų geltonos spalvos",
            flowerBedRed: "Gėlių lovų raudonos spalvos",
            flowerBedMalina: "Gėlių lovų šviesiai raudonos spalvos",
            flowerBedOrange: "Gėlių lovų oranžinės spalvos",
            flowerBedDarkBlue: "Gėlių lovų tamsiai mėlynos spalvos",
            flowerBedViolet: "Gėlių lovų violetinės spalvos",
            flowerBedDarkViolet: "Gėlių lovų tamsiai violetinės spalvos",
            herbalBed1: "Vaistinių augalų lova 1",
            herbalBed2: "Vaistinių augalų lova 2",
            mulch: "Mulčias",
            gravel: "Grindys",
            shrubs: "Krūmai",
            pavementFill: "Grindų užpildas 1",
            pavementContour: "Grindų kontūras 2",
            pavement3: "Grindys 3",
            pavement01_A: "Tetris 1",
            pavement01_B: "Tetris 2",
            pavement01_C: "Tetris 3",
            pavement02_A: "Įstrižai 1",
            pavement02_B: "Įstrižai 2",
            pavement03_A: "Laukinių formų 1",
            pavement03_B: "Laukinių formų 2",
            pavement04_Red_L: "Raudonos spalvos hexagonas lengvas",
            pavement04_Red_D: "Raudonos spalvos hexagonas tamsus",
            pavement04_Green_L: "Žalios spalvos hexagonas lengvas",
            pavement04_Green_D: "Žalios spalvos hexagonas tamsus",
            pavement04_Blue_L: "Mėlynos spalvos hexagonas lengvas",
            pavement04_Blue_D: "Mėlynos spalvos hexagonas tamsus",
            pool: "Baseinas",
            lo_stdDynCurve: "Dinaminis",
            lo_stdCurve: "Standartinis",
            stdCurve: "Standartinis",
            markCurve: "Raudonas žymeklis",
            pathCurve: "Kelias",
            pillarCurve: "Stulpas",
            fenceCurve: "Tvora",
            test00: "Testas 00",
            test01: "Testas 01",
            test02: "Testas 02",
            test03: "Testas 03",
            test04: "Testas 04",
            test05: "Testas 05",
            test06: "Testas 06",
            saf01: "Akmuo 1",
            saf02: "Akmuo 2",
            saf03: "Akmuo 3",
            saf04: "Akmuo 4",
            saf05: "Akmuo 5",
            saf06: "Akmuo 6",
            saf07: "Akmuo 7",
            saf08: "Sėdmaišis 1",
            saf09: "Sėdmaišis 2",
            saf10: "Mebelės 1",
            saf11: "Mebelės 2",
            saf12: "Automobilis 1",
            saf13: "Automobilis 2",
            saf14: "Vaikų kalnelis 1",
            saf14_0: "Vaikų kalnelis 2",
            saf14_L: "Vaikų kalnelis 3",
            saf14_R: "Vaikų kalnelis 4",
            saf15: "Lankstus šešėlis",
            saf16: "Atsigulimo kėdė 1",
            saf17: "Atsigulimo kėdė 2",
            saf18: "Šviesa 1",
            saf19: "Šviesa 2",
            saf20: "Krioklys",
            saf21: "Vandens telkinys 1",
            saf22: "Vandens telkinys 2",
            saf23: "Kanalizacijos vamzdis 1",
            saf24: "Kanalizacijos vamzdis 2",
            bush01: "Krūmas #01",
            bush02: "Krūmas #02",
            bush03: "Krūmas #03",
            bush04: "Krūmas #04",
            bush05: "Krūmas #05",
            bush06: "Krūmas #06",
            bush07: "Krūmas #07",
            bush08: "Krūmas #08",
            bush09: "Krūmas #09",
            bush10: "Krūmas #10",
            bush11: "Krūmas #11",
            bush12: "Krūmas #12",
            bush13: "Krūmas #13",
            tree00: "Vaismedis",
            tree01: "Medis #01",
            tree02: "Medis #02",
            tree03: "Medis #03",
            tree04: "Medis #04",
            tree05: "Medis #05",
            tree06: "Medis #06",
            tree07: "Medis #07",
            tree08: "Medis #08",
            tree09: "Medis #09",
            tree10: "Medis #10",
            tree11: "Medis #11",
            tree12: "Medis #12",
            tree13: "Medis #13",
            tree14: "Medis #14",
            tree15: "Medis #15",
            tree16: "Medis #16",
            tree17: "Medis #17",
            stdRuler: "Standartinis",
            fixedCntr: "Fiksuotų zonų numeracija",
            stand_aloneCntr: "Atskiras valdiklis",
            modularCntr: "Modulinis valdiklis",
            rainSensor: "Lietimo jutiklis",
            soilSensor: "Dirvožemio drėgmės jutiklis",
            freezeSensor: "Šalčiui jautrus jutiklis",
            wrFreezeSensor: "Bevielis lietaus / šalčiui jautrus jutiklis",
            windSensor: "Vėjo jutiklis",
            solarSensor: "Saulės jutiklis",
            flowSensor: "Srauto jutiklis",
            weatherStation: "Oro stotis",
            controlWire: "Valdymo laidas",
            sensorWire: "Jutiklių laidas",
            wirelessWire: "Bevielė ryšio linija",
            dS16: "Lašelinio laistymo pradžios jungtis 16mm",
            dS17: "Lašelinio laistymo pradžios jungtis 17mm",
            qcPlastic: "Plastikinė greitos jungties vamzdis",
            qcMetal: "Metalinė greitos jungties vamzdis",
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
            stdTrench: "Standartinis (40cm) (ankstyvesnė versija)",
            normalTrench: "Normalus (W:10cm D:50cm)",
            narrowTrench: "Siauras (W:5cm D:30cm) (rankinis kasikas)",
            wideTrench: "Platus (W:30cm D:60cm) (Mini ekskavatorius)",
            multi: "Vamzdžių dėžė",
            source: "Vandens šaltinis",
            empty: "Tuščias",
            frame: "Rėmelis",
            gostDefault: "GOST 21.101-97 (Pirma)",
            gostSmall: "GOST 21.101-97 (Kitos)",
            a4hor: "A4 Horizontalus",
            a4vert: "A4 Vertikalus",
            a3hor: "A3 Horizontalus",
            a3vert: "A3 Vertikalus",
            a2hor: "A2 Horizontalus",
            a2vert: "A2 Vertikalus",
            a1hor: "A1 Horizontalus",
            a1vert: "A1 Vertikalus",
            a0hor: "A0 Horizontalus",
            a0vert: "A0 Vertikalus",
            stdCompass: "Kompasas",
            gostSize: "GOST Dydis",
            landscp: "Peizažo lentelė",
            conv: "Simbolių lentelė",
            convAll: "Simbolių lentelė (All)",
            zoneT: "Zonų lentelė",
            sprinkZoneTimeT: "Zonų laistymo laikas",
            sprinkT: "Pakabinami purkštuvai lentelė",
            dripT: "Lašelinės linijos lentelė",
            insItemT: "Įterpimų lentelė (pagal elementus)",
            insVarDiamT: "Įterpimų lentelė (pagal medžiagą ir skersmenis)",
            insDiamT: "Įterpimų lentelė (pagal skersmenis)",
            insVarT: "Įterpimų lentelė (pagal medžiagą)",
            staticText: "Tekstas",
            dynamicText: "Dinaminis tekstas",
            stampTextDef: "Spaudas",
            sbStdMetric: "Vidutinis skalavimo juostelė (metrinė sistema)",
            sbMinMetric: "Mini (metrinė sistema)",
            sbExtMetric: "Išplėsta (metrinė sistema)",
            sbStdImperial: "Vidutinis skalavimo juostelė (imperinė sistema)",
            sbMinImperial: "Mini (imperinė sistema)",
            sbExtImperial: "Išplėsta (imperinė sistema)",
            gentleMicroClimate: "Švelnus",
            normalMicroClimate: "Normalus",
            toughMicroClimate: "Sunkus",
            sand: "Smėlingas",
            sandyLoam: "Smėlėtas durpinės dirvožemis",
            lightLoam: "Lengvas durpinės dirvožemis",
            mediumLoam: "Vidutinio sunkumo durpinės dirvožemis",
            heavyLoam: "Sunkus durpinės dirvožemis",
            clay: "Molis",
            heavyClay: "Sunkus molis",
            noneIncline: "0-5% (0-3°)",
            lightIncline: "5-8% (3-5°)",
            mediumIncline: "8-12% (5-7°)",
            hugeIncline: "12%+ (7°+)"
        },
        misc: {
            fixedCntrSubText: "FIKSUOTAS",
            standAloneCntrSubText: "SA",
            modularCntrSubText: "MOD."
        },
        placeholders: {
            rotorType: ["{{brand}} {{series}} rotoras", "{{brand}} {{series}} rotoras montavimui", "{{brand}} {{series}} rotoras redagavimui"]
        }
    };
})(this);
