 (function (p) {
    if (window.paperLocale !== "pl") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Powierzchnia", "Rysowanie powierzchni", "Edycja powierzchni"],
            brushLawn: ["Trawnik", "Rysowanie trawnika", "Edycja trawnika"],
            brushIrrigateMarks: ["Specjalny znacznik", "Rysowanie specjalnego znacznika", "Edycja specjalnego znacznika"],
            brushConcrete: ["Beton", "Rysowanie betonu", "Edycja betonu"],
            brushSand: ["Piasek", "Rysowanie piasku", "Edycja piasku"],
            brushBed: ["Ściółkowanie", "Rysowanie łóżka", "Edycja łóżka"],
            brushBedding: ["Nawożenie", "Rysowanie nawożenia", "Edycja nawożenia"],
            brushShrubs: ["Krzewy", "Rysowanie krzewów", "Edycja krzewów"],
            brushPath: ["Ścieżka", "Rysowanie ścieżki", "Edycja ścieżki"],
            brushWater: ["Woda", "Rysowanie wody", "Edycja wody"],
            curve: ["Linia", "Rysowanie krzywej", "Edycja krzywej"],
            bush: ["Krzew", "Sadzenie krzewu", "Edycja krzewu"],
            saf: ["Małe Formy Architektoniczne", "Rysowanie małych form architektonicznych", "Edycja małych form architektonicznych"],
            tree: ["Drzewo", "Sadzenie drzewa", "Edycja drzewa"],
            polySurface: ["Powierzchnia", "Rysowanie powierzchni", "Edycja powierzchni"],
            polyLawn: ["Trawnik", "Rysowanie trawnika", "Edycja trawnika"],
            polyIrrigateMarks: ["Specjalny znacznik", "Rysowanie specjalnego znacznika", "Edycja specjalnego znacznika"],
            polyConcrete: ["Beton", "Rysowanie betonu", "Edycja betonu"],
            polySand: ["Piasek", "Rysowanie piasku", "Edycja piasku"],
            polyBed: ["Ściółkowanie", "Rysowanie łóżka", "Edycja łóżka"],
            polyBedding: ["Nawożenie", "Rysowanie nawożenia", "Edycja nawożenia"],
            polyShrubs: ["Krzewy", "Rysowanie krzewów", "Edycja krzewów"],
            polyPath: ["Ścieżka", "Rysowanie ścieżki", "Edycja ścieżki"],
            polyWater: ["Woda", "Rysowanie wody", "Edycja wody"],
            ruler: ["Linijka", "Linijka", "Linijka"],
            cntr: ["Sterownik", "Rysowanie sterownika", "Edycja sterownika"],
            sens: ["Czujnik", "Rysowanie czujnika", "Edycja czujnika"],
            wr: ["Przewód kontrolny", "Rysowanie przewodu kontrolnego", "Edycja przewodu kontrolnego"],
            swr: ["Przewód czujnika", "Rysowanie przewodu czujnika", "Edycja przewodu czujnika"],
            dl16: ["Kroplowniki 16/13mm", "Rysowanie kroplówki 16/13mm", "Edycja kroplówki 16/13mm"],
            ds16: ["Rozpoczęcie kroplówki 16/13mm", "Rysowanie rozpoczęcia kroplówki 16/13mm", "Edycja rozpoczęcia kroplówki 16/13mm"],
            dl17: ["Kroplowniki 17mm", "Rysowanie kroplówki 17mm", "Edycja kroplówki 17mm"],
            ds17: ["Rozpoczęcie kroplówki 17mm", "Rysowanie rozpoczęcia kroplówki 17mm", "Edycja rozpoczęcia kroplówki 17mm"],
            rzw: ["Podlewanie strefy korzeniowej", "Rysowanie jednostki podlewania strefy korzeniowej", "Edycja jednostki podlewania strefy korzeniowej"],
            qc: ["Zawór szybkozłączkowy", "Umieszczanie zaworu szybkozłączkowego", "Edycja zaworu szybkozłączkowego"],
            inset: ["Mufa rurowa", "Rysowanie mufy rurowej", "Edycja mufy rurowej"],
            mpRotator: ["Mp Rotator", "Umieszczanie Mp Rotator", "Edycja Mp Rotator"],
            mpRotatorSR: ["Mp Rotator 800", "Umieszczanie Mp Rotator 800", "Edycja Mp Rotator 800"],
            mpRotatorStrip: ["Mp Rotator Strip", "Umieszczanie Mp Rotator Strip", "Edycja Mp Rotator Strip"],
            bubbNHMS: ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            bubbNHPC: ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            bubbNHDS: ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            pdcAdj: ["Dysza regulowana PRO", "Umieszczanie dyszy regulowanej PRO", "Edycja dyszy regulowanej PRO"],
            proHE: ["Dysza regulowana PRO High Efficiency", "Umieszczanie dyszy regulowanej PRO High Efficiency", "Edycja dyszy regulowanej PRO High Efficiency"],
            prosFixed: ["Dysza stała PRO", "Umieszczanie dyszy stałej PRO", "Edycja dyszy stałej PRO"],
            srNoz: ["Dysza o krótkim zasięgu", "Umieszczanie dyszy o krótkim zasięgu", "Edycja dyszy o krótkim zasięgu"],
            streamNoz: ["Dysza strumieniowa", "Umieszczanie dyszy strumieniowej", "Edycja dyszy strumieniowej"],
            strPatNoz: ["Dysza wzorca paska", "Umieszczanie dyszy wzorca paska", "Edycja dyszy wzorca paska"],
            bubbHPC: ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            bubbHAF: ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            bubbTB: ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            bubbTBADJ: ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            fnf: ["Dysza stała", "Umieszczanie dyszy stałej", "Edycja dyszy stałej"],
            fnm: ["Dysza stała", "Umieszczanie dyszy stałej", "Edycja dyszy stałej"],
            fnfstrip: ["Dysza wzorca paska", "Umieszczanie dyszy wzorca paska", "Edycja dyszy wzorca paska"],
            fnmstrip: ["Dysza wzorca paska", "Umieszczanie dyszy wzorca paska", "Edycja dyszy wzorca paska"],
            hekvf: ["Dysza HE-KVF", "Umieszczanie dyszy HE-KVF", "Edycja dyszy HE-KVF"],
            kv: ["Dysza KV", "Umieszczanie dyszy KV", "Edycja dyszy KV"],
            rn: ["RN", "Umieszczanie RN", "Edycja RN"],
            rns: ["RN Strip", "Umieszczanie RN Strip", "Edycja RN Strip"],
            rna: ["RN-ADJ", "Umieszczanie RN-ADJ", "Edycja RN-ADJ"],
            "bubbRBPC": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "bubbRBPCT": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "bubbRBADJ": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "bubbNMPR": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "bubbNMPRSt": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "hevan": ["Dysza HE-VAN", "Umieszczanie dyszy HE-VAN", "Edycja dyszy HE-VAN"],
            "mprseries": ["Dysza serii MPR", "Umieszczanie dyszy serii MPR", "Edycja dyszy serii MPR"],
            "mprstseries": ["Dysza wzorca paska serii MPR", "Umieszczanie dyszy wzorca paska serii MPR", "Edycja dyszy wzorca paska serii MPR"],
            "rvan": ["Dysza R-VAN", "Umieszczanie dyszy R-VAN", "Edycja dyszy R-VAN"],
            "rvanStrip": ["Dysza R-VAN Strip", "Umieszczanie dyszy R-VAN Strip", "Edycja dyszy R-VAN Strip"],
            "sqseries": ["Dysza serii SQ Series Square Pattern", "Umieszczanie dyszy serii SQ Series Square Pattern", "Edycja dyszy serii SQ Series Square Pattern"],
            "useries": ["Dysza serii U-Series", "Umieszczanie dyszy serii U-Series", "Edycja dyszy serii U-Series"],
            "van": ["Dysza VAN", "Umieszczanie dyszy VAN", "Edycja dyszy VAN"],
            "bubbToro500": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "bubbToro500S": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "bubbNozToroPC": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "bubbNozStreamToro": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "bubbNozStreamToroPC": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "bubbNozOppStreamToro": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "bubbNozOppStreamToroPC": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "toromprplus": ["Dysza serii MPR Plus", "Umieszczanie dyszy serii MPR Plus", "Edycja dyszy serii MPR Plus"],
            "toromprplusStrip": ["Dysza serii MPR Plus", "Umieszczanie dyszy serii MPR Plus", "Edycja dyszy serii MPR Plus"],
            "toromprplusPC": ["Dysza serii MPR Plus Pressure-compensated", "Umieszczanie dyszy serii MPR Plus Pressure-compensated", "Edycja dyszy serii MPR Plus Pressure-compensated"],
            "toromprplusPCStrip": ["Dysza serii MPR Plus Pressure-compensated", "Umieszczanie dyszy serii MPR Plus Pressure-compensated", "Edycja dyszy serii MPR Plus Pressure-compensated"],
            "precisionRotator": ["Precyzyjna dysza obrotowa serii Precision", "Umieszczanie precyzyjnej dyszy obrotowej serii Precision", "Edycja precyzyjnej dyszy obrotowej serii Precision"],
            "precisionRotatorF": ["Precyzyjna dysza obrotowa serii Precision", "Umieszczanie precyzyjnej dyszy obrotowej serii Precision", "Edycja precyzyjnej dyszy obrotowej serii Precision"],
            "precisionSpray": ["Precyzyjna dysza serii Precision", "Umieszczanie precyzyjnej dyszy serii Precision", "Edycja precyzyjnej dyszy serii Precision"],
            "precisionSprayF": ["Precyzyjna dysza serii Precision", "Umieszczanie precyzyjnej dyszy serii Precision", "Edycja precyzyjnej dyszy serii Precision"],
            "precisionSprayStrip": ["Precyzyjna dysza serii Precision", "Umieszczanie precyzyjnej dyszy serii Precision", "Edycja precyzyjnej dyszy serii Precision"],
            "precisionSprayStripF": ["Precyzyjna dysza serii Precision", "Umieszczanie precyzyjnej dyszy serii Precision", "Edycja precyzyjnej dyszy serii Precision"],
            "precisionSprayPC": ["Precyzyjna dysza serii Precision Pressure-compensated", "Umieszczanie precyzyjnej dyszy serii Precision Pressure-compensated", "Edycja precyzyjnej dyszy serii Precision Pressure-compensated"],
            "precisionSprayPCF": ["Precyzyjna dysza serii Precision Pressure-compensated", "Umieszczanie precyzyjnej dyszy serii Precision Pressure-compensated", "Edycja precyzyjnej dyszy serii Precision Pressure-compensated"],
            "precisionSprayPCStrip": ["Precyzyjna dysza serii Precision Pressure-compensated", "Umieszczanie precyzyjnej dyszy serii Precision Pressure-compensated", "Edycja precyzyjnej dyszy serii Precision Pressure-compensated"],
            "precisionSprayPCStripF": ["Precyzyjna dysza serii Precision Pressure-compensated", "Umieszczanie precyzyjnej dyszy serii Precision Pressure-compensated", "Edycja precyzyjnej dyszy serii Precision Pressure-compensated"],
            "tvantoro": ["Dysza serii TVAN", "Umieszczanie dyszy serii TVAN", "Edycja dyszy serii TVAN"],
            "streamSprayNozToro": ["Dysza strumieniowa", "Umieszczanie dyszy strumieniowej", "Edycja dyszy strumieniowej"],
            "streamSprayNozToroPC": ["Dysza strumieniowa", "Umieszczanie dyszy strumieniowej", "Edycja dyszy strumieniowej"],
            "bubbWM": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "bubbWMADJ": ["Dysza bąbelkowa", "Umieszczanie dyszy bąbelkowej", "Edycja dyszy bąbelkowej"],
            "maxaan": ["Dysza MAXAAN", "Umieszczanie dyszy MAXAAN", "Edycja dyszy MAXAAN"],
            "maxmpr": ["Dysza MAXMPR", "Umieszczanie dyszy MAXMPR", "Edycja dyszy MAXMPR"],
            "maxmprst": ["Dysza wzorca paska MAXMPR", "Umieszczanie dyszy wzorca paska MAXMPR", "Edycja dyszy wzorca paska MAXMPR"],
            "maxmprstream": ["Dysza bąbelkowa MAXMPR Stream", "Umieszczanie dyszy bąbelkowej MAXMPR Stream", "Edycja dyszy bąbelkowej MAXMPR Stream"],
            "maxmprststream": ["Dysza bąbelkowa MAXMPR Stream", "Umieszczanie dyszy bąbelkowej MAXMPR Stream", "Edycja dyszy bąbelkowej MAXMPR Stream"],
            "bseries": ["Dysza serii B Series", "Umieszczanie dyszy serii B Series", "Edycja dyszy serii B Series"],
            "bseriesst": ["Dysza wzorca paska serii B Series", "Umieszczanie dyszy wzorca paska serii B Series", "Edycja dyszy wzorca paska serii B Series"],
            "trench": ["Rów", "Kopanie rowu", "Edycja rowu"],
            "v": ["Mufy zaworów", "Umieszczanie muf zaworów", "Edycja muf zaworów"],
            "ws": ["Źródło wody", "Umieszczanie źródła wody", "Edycja źródła wody"],
            "lp": ["Rura sekcyjna", "Rysowanie rury bocznej", "Edycja rury bocznej"],
            "lpPVC": ["Rura sekcyjna", "Rysowanie rury bocznej", "Edycja rury bocznej"],
            "mp": ["Rura główna", "Rysowanie rury głównej", "Edycja rury głównej"],
            "mpPVC": ["Rura główna", "Rysowanie rury głównej", "Edycja rury głównej"],
            "compass": ["Kompas", "Ustawienia kompasu", "Edycja kompasu"],
            "loCurve": ["Linia", "Rysowanie linii", "Edycja linii"],
            "lsz": ["Rozmiar", "Rysowanie rozmiaru", "Edycja rozmiaru"],
            "text": ["Tekst", "Rysowanie tekstu", "Edycja tekstu"],
            "ldtext": ["Tekst", "Konfiguracja tekstu", "Edycja tekstu"],
            "staticText": ["Tekst", "Konfiguracja tekstu", "Edycja tekstu"],
            "dynamicText": ["Tekst", "Konfiguracja tekstu", "Edycja tekstu"],
            "lotable": ["Tabela", "Konfiguracja tabeli", "Edycja tabeli"],
            "stampText": ["Stempel", "Konfiguracja tekstu stempla", "Edycja tekstu stempla"],
            "sb": ["Skala", "Rysowanie skali", "Edycja skali"],
        },
        vars: {
            sp: "Zraszacz",
            ld: "Krajobraz",
            mixed_sp_lo: "Zraszacz/Układ",
            mixed_sp_lo2: "Zraszacz/Układ 2",
            mixed_ld_lo: "Krajobraz/Układ",
            hw: "Hydrawise",
            lo: "Układ",
            loPM: "Opad",
            doIrrigate: "Strefa nawadniania",
            doNotIrrigate: "Strefa BEZ nawadniania",
            obstacles: "Przeszkody dla nawadniania",
            placementObstacles: "Przeszkody dla umieszczenia",
            stdSurf: "Standardowy",
            fineCut: "Trawnik ozdobny",
            raw: "Surowy beton",
            soft: "Miękki piasek",
            flowerBedMix1: "Rabata kwiatowa 1",
            flowerBedMix2: "Rabata kwiatowa 2",
            flowerBedMix3: "Rabata kwiatowa 3",
            flowerBedWhite: "Kwietnik biały",
            flowerBedBlue: "Kwietnik niebieski",
            flowerBedYellow: "Kwietnik żółty",
            flowerBedRed: "Kwietnik czerwony",
            flowerBedMalina: "Kwietnik malinowy",
            flowerBedOrange: "Kwietnik pomarańczowy",
            flowerBedDarkBlue: "Kwietnik ciemnoniebieski",
            flowerBedViolet: "Kwietnik fioletowy",
            flowerBedDarkViolet: "Kwietnik ciemnofioletowy",
            herbalBed1: "Rabata z ziołami 1",
            herbalBed2: "Rabata z ziołami 2",
            mulch: "Mulcz",
            gravel: "Żwir",
            shrubs: "Krzewy 1",
            pavementFill: "Chodnik 1",
            pavementContour: "Chodnik 2",
            pavement3: "Chodnik 3",
            pavement01_A: "Tetris 1",
            pavement01_B: "Tetris 2",
            pavement01_C: "Tetris 3",
            pavement02_A: "Ukośne 1",
            pavement02_B: "Ukośne 2",
            pavement03_A: "Dzikie 1",
            pavement03_B: "Dzikie 2",
            pavement04_Red_L: "Plaster miodu Czerwony Jasny",
            pavement04_Red_D: "Plaster miodu Czerwony Ciemny",
            pavement04_Green_L: "Plaster miodu Zielony Jasny",
            pavement04_Green_D: "Plaster miodu Zielony Ciemny",
            pavement04_Blue_L: "Plaster miodu Niebieski Jasny",
            pavement04_Blue_D: "Plaster miodu Niebieski Ciemny",
            pool: "Basen",
            lo_stdDynCurve: "Dynamiczny",
            lo_stdCurve: "Standardowy",
            stdCurve: "Standardowy",
            markCurve: "Czerwony znacznik",
            pathCurve: "Ścieżka",
            pillarCurve: "Filary",
            fenceCurve: "Płot",
            test00: "Test 00",
            test01: "Test 01",
            test02: "Test 02",
            test03: "Test 03",
            test04: "Test 04",
            test05: "Test 05",
            test06: "Test 06",
            saf01: "Kamień 1",
            saf02: "Kamień 2",
            saf03: "Kamień 3",
            saf04: "Kamień 4",
            saf05: "Kamień 5",
            saf06: "Kamień 6",
            saf07: "Kamień 7",
            saf08: "Ławka 1",
            saf09: "Ławka 2",
            saf10: "Meble 1",
            saf11: "Meble 2",
            saf12: "Samochód 1",
            saf13: "Samochód 2",
            saf14: "Zjeżdżalnia dla dzieci 1",
            saf14_0: "Zjeżdżalnia dla dzieci 2",
            saf14_L: "Zjeżdżalnia dla dzieci 3",
            saf14_R: "Zjeżdżalnia dla dzieci 4",
            saf15: "Dach na huśtawkę",
            saf16: "Leżak 1",
            saf17: "Leżak 2",
            saf18: "Światło 1",
            saf19: "Światło 2",
            saf20: "Wodospad",
            saf21: "Zbiornik wodny 1",
            saf22: "Zbiornik wodny 2",
            saf23: "Właz kanalizacyjny 1",
            saf24: "Właz kanalizacyjny 2",
            bush01: "Krzew #01",
            bush02: "Krzew #02",
            bush03: "Krzew #03",
            bush04: "Krzew #04",
            bush05: "Krzew #05",
            bush06: "Krzew #06",
            bush07: "Krzew #07",
            bush08: "Krzew #08",
            bush09: "Krzew #09",
            bush10: "Krzew #10",
            bush11: "Krzew #11",
            bush12: "Krzew #12",
            bush13: "Krzew #13",
            tree00: "Drzewo owocowe",
            tree01: "Drzewo #01",
            tree02: "Drzewo #02",
            tree03: "Drzewo #03",
            tree04: "Drzewo #04",
            tree05: "Drzewo #05",
            tree06: "Drzewo #06",
            tree07: "Drzewo #07",
            tree08: "Drzewo #08",
            tree09: "Drzewo #09",
            tree10: "Drzewo #10",
            tree11: "Drzewo #11",
            tree12: "Drzewo #12",
            tree13: "Drzewo #13",
            tree14: "Drzewo #14",
            tree15: "Drzewo #15",
            tree16: "Drzewo #16",
            tree17: "Drzewo #17",
            stdRuler: "Standardowy",
            fixedCntr: "Sterownik sieciowy",
            stand_aloneCntr: "Sterownik bateryjny",
            modularCntr: "Sterownik modułowy",
            rainSensor: "Czujnik deszczu",
            soilSensor: "Czujnik wilgotności gleby",
            freezeSensor: "Czujnik mrozu",
            wrFreezeSensor: "Bezprzewodowy czujnik deszczu/mrozu",
            windSensor: "Czujnik wiatru",
            solarSensor: "Czujnik słoneczny",
            flowSensor: "Czujnik przepływu",
            weatherStation: "Stacja pogodowa",
            controlWire: "Przewód sterujący",
            wirelessControl: "Draadloze besturing",
            sensorWire: "Przewód do czujnika",
            wirelessSensor: "Bezprzewodowe połączenie czujników",
            wirelessWire: "Połączenie bezprzewodowe",
            dS16: "Przyłącze 16/13mm",
            dS17: "Przyłącze 17mm",
            qcPlastic: "Zawór szybkozłączny plastikowy",
            qcMetal: "Zawór szybkozłączny metalowy",
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
            pvcCL315: "PVC CLASS 315",
            pvcCL200: "PVC CLASS 200",
            pvcCL160: "PVC CLASS 160",
            pvcCL125: "PVC CLASS 125",
            pvcUSCJPN18: "PVC-U SCJ (PN18)",
            pvcUSCJPN12: "PVC-U SCJ (PN12)",
            pvcUSCJPN9: "PVC-U SCJ (PN9)",
            pvcUSCJPN6: "PVC-U SCJ (PN6)",
            pvcUSCJPN45: "PVC-U SCJ (PN4.5)",
            ldpeCLASS3: "LDPE CLASS 3",
            stdTrench: "Standardowy (40cm) (stare)",
            normalTrench: "Normalny (S:10cm G:50cm)",
            narrowTrench: "Wąski (S:5cm G:30cm) (Kopanie szpadlem)",
            wideTrench: "Szeroki (S:30cm G:60cm) (Mini koparka)",
            multi: "Skrzynka zaworowa",
            source: "Źródło wody",
            empty: "Puste",
            frame: "Ramka",
            gostDefault: "Pełna",
            gostSmall: "Skrócowa",
            a4hor: "A4 Poziomo",
            a4vert: "A4 Pionowo",
            a3hor: "A3 Poziomo",
            a3vert: "A3 Pionowo",
            a2hor: "A2 Poziomo",
            a2vert: "A2 Pionowo",
            a1hor: "A1 Poziomo",
            a1vert: "A1 Pionowo",
            a0hor: "A0 Poziomo",
            a0vert: "A0 Pionowo",
            dind4hor: "DIN D4 Poziomo",
            dind4vert: "DIN D4 Pionowo",
            dind3hor: "DIN D3 Poziomo",
            dind3vert: "DIN D3 Pionowo",
            dind2hor: "DIN D2 Poziomo",
            dind2vert: "DIN D2 Pionowo",
            dind1hor: "DIN D1 Poziomo",
            dind1vert: "DIN D1 Pionowo",
            dind0hor: "DIN D0 Poziomo",
            dind0vert: "DIN D0 Pionowo",
            ansiAhor: "ANSI A Poziomo",
            ansiAvert: "ANSI A Pionowo",
            ansiBhor: "ANSI B Poziomo",
            ansiBvert: "ANSI B Pionowo",
            ansiChor: "ANSI C Poziomo",
            ansiCvert: "ANSI C Pionowo",
            ansiDhor: "ANSI D Poziomo",
            ansiDvert: "ANSI D Pionowo",
            ansiEhor: "ANSI E Poziomo",
            ansiEvert: "ANSI E Pionowo",
            archAhor: "Archiwum A Poziomo",
            archAvert: "Archiwum A Pionowo",
            archBhor: "Archiwum B Poziomo",
            archBvert: "Archiwum B Pionowo",
            archChor: "Archiwum C Poziomo",
            archCvert: "Archiwum C Pionowo",
            archDhor: "Archiwum D Poziomo",
            archDvert: "Archiwum D Pionowo",
            archEhor: "Archiwum E Poziomo",
            archEvert: "Archiwum E Pionowo",
            archE1hor: "Archiwum E1 Poziomo",
            archE1vert: "Archiwum E1 Pionowo",
            archE2hor: "Archiwum E2 Poziomo",
            archE2vert: "Archiwum E2 Pionowo",
            archE3hor: "Archiwum E3 Poziomo",
            stdCompass: "Kompas",
            gostSize: "Linia wielkości",
            landscp: "Tabela krajobrazu",
            conv: "Tabela symboli",
            convAll: "Wszystkie tabele symboli",
            zoneT: "Tabela stref",
            sprinkZoneTimeT: "Czas zraszania strefy",
            sprinkT: "Tabela zraszaczy",
            sprinkT2: "Tabela zraszaczy",
            dripT: "Tabela linii kroplujących",
            insItemT: "Tabela wkładów (wg przedmiotów)",
            insVarDiamT: "Tabela wkładów (wg materiału i średnic)",
            insDiamT: "Tabela wkładów (wg średnic)",
            insVarT: "Tabela wkładów (wg materiału)",
            staticText: "Tekst",
            dynamicText: "Tekst",
            stampTextDef: "Tekst stempla",
            sbStdMetric: "Średnia skala (Metryczna)",
            sbMinMetric: "Mini (Metryczna)",
            sbExtMetric: "Rozszerzona (Metryczna)",
            sbStdImperial: "Średnia skala (Imperialna)",
            sbMinImperial: "Mini (Imperialna)",
            sbExtImperial: "Rozszerzona (Imperialna)",
            gentleMicroClimate: "Łagodny",
            normalMicroClimate: "Normalny",
            toughMicroClimate: "Trudny",
            sand: "Piaszczysty",
            sandyLoam: "Piaszczysto-ziemisty",
            lightLoam: "Lekka ziemia",
            mediumLoam: "Średnia ziemia",
            heavyLoam: "Ciężka ziemia",
            clay: "Glina",
            heavyClay: "Ciężka glina",
            noneIncline: "0-5% (0-3°)",
            lightIncline: "5-8% (3-5°)",
            mediumIncline: "8-12% (5-7°)",
            hugeIncline: "12%+ (7°+)"
        },
        misc: {
            fixedCntrSubText: "Sieciowy",
            standAloneCntrSubText: "BAT",
            modularCntrSubText: "MOD."
        },
        placeholders: {
            rotorType: ["Rotor {{brand}} {{series}}", "Umieszczanie rotera {{brand}} {{series}}", "Edycja rotera {{brand}} {{series}}"]
        }
    };
})(this);
