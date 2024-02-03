(function (p) {
    if (window.paperLocale !== "de") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Oberfläche","Oberfläche zeichnen","Oberfläche bearbeiten"],
            brushLawn: ["Rasen","Rasen zeichnen","Rasen bearbeiten"],
            brushConcrete: ["Beton","Beton zeichnen","Beton bearbeiten"],
            brushSand: ["Sand","Sand zeichnen","Sand bearbeiten"],
            brushBed: ["Beet","Beet zeichnen","Beet bearbeiten"],
            brushBedding: ["Mulch","Mulch zeichnen","Mulch bearbeiten"],
            brushShrubs: ["Hecken","Hecken zeichnen","Hecken bearbeiten"],
            brushPath: ["Pfad","Pfad zeichnen","Pfad bearbeiten"],
            brushWater: ["Wasser","Wasser zeichnen","Wasser bearbeiten"],
            curve: ["Kurve","Kurve zeichnen","Kurve bearbeiten"],
            bush: ["Strauch","Strauch zeichnen","Strauch bearbeiten"],
            saf: ["Objekt","Objekt zeichnen","Objekt bearbeiten"],
            tree: ["Baum","Baum zeichnen","Baum bearbeiten"],
            polySurface: ["Oberfläche","Oberfläche zeichnen","Oberfläche bearbeiten"],
            polyLawn: ["Rasen","Rasen zeichnen","Rasen bearbeiten"],
            polyConcrete: ["Beton","Beton zeichnen","Beton bearbeiten"],
            polySand: ["Sand","Sand zeichnen","Sand bearbeiten"],
            polyBed: ["Beet","Beet zeichnen","Beet bearbeiten"],
            polyBedding: ["Mulch","Mulch zeichnen","Mulch bearbeiten"],
            polyShrubs: ["Hecken","Hecken zeichnen","Hecken bearbeiten"],
            polyPath: ["Pfad","Pfad zeichnen","Pfad bearbeiten"],
            polyWater: ["Wasser","Wasser zeichnen","Wasser bearbeiten"],
            ruler: ["Lineal","Lineal","Lineal"],
            cntr: ["Controller","Controller zeichnen","Controller bearbeiten"],
            sens: ["Sensor","Sensor zeichnen","Sensor bearbeiten"],
            wr: ["Steuerkabel","Steuerkabel zeichnen","Steuerkabel bearbeiten"],
            swr: ["Sensorkabel","Sensorkabel zeichnen","Sensorkabel bearbeiten"],
            dl16: ["Tropfleitung 16/13mm","Tropfleitung 16/13mm zeichnen","Tropfleitung 16/13mm bearbeiten"],
            ds16: ["Tropfstart 16/13mm","Tropfstart 16/13mm zeichnen","Tropfstart 16/13mm bearbeiten"],
            dl17: ["Tropfleitung 17 mm","Tropfleitung 17 mm zeichnen","Tropfleitung 17 mm bearbeiten"],
            ds17: ["Tropfstart 17 mm","Tropfstart 17 mm zeichnen","Tropfstart 17 mm bearbeiten"],
            rzw: ["Wurzelbewässerung","Wurzelbewässerung zeichnen","Wurzelbewässerung bearbeiten"],
            qc: ["Wassersteckdose","Wassersteckdose zeichnen","Wassersteckdose bearbeiten"],
            inset: ["Rohrhülse","Rohrhülse zeichnen","Rohrhülse bearbeiten"],
            mpRotator: ["MP-Rotator","MP-Rotator zeichnen","MP-Rotator bearbeiten"],
            mpRotatorSR: ["MP-Rotator 800","MP-Rotator 800 zeichnen","MP-Rotator 800 bearbeiten"],
            mpRotatorStrip: ["MP-Rotator Strip","MP-Rotator Strip zeichnen","MP-Rotator Strip bearbeiten"],
            bubbNHMS: ["Bubbler-Düse","Bubbler-Düse zeichnen","Bubbler-Düse bearbeiten"],
            bubbNHPC: ["Bubbler-Düse","Bubbler-Düse zeichnen","Bubbler-Düse bearbeiten"],
            bubbNHDS: ["Bubbler-Düse","Bubbler-Düse zeichnen","Bubbler-Düse bearbeiten"],
            pdcAdj: ["PRO verstellbare Düse","PRO verstellbare Düse zeichnen","PRO verstellbare Düse bearbeiten"],
            proHE: ["PRO-HE verstellbare Düse","PRO-HE verstellbare Düse zeichnen","PRO-HE verstellbare Düse bearbeiten"],
            prosFixed: ["Feste PRO-Düse","Feste PRO-Düse zeichnen","Feste PRO-Düse bearbeiten"],
            srNoz: ["Düse kurz","Düse kurz zeichnen","Düse kurz bearbeiten"],
            streamNoz: ["Stream-Düse","Stream-Düse zeichnen","Stream-Düse bearbeiten"],
            strPatNoz: ["Streifen-Düse","Streifen-Düse zeichnen","Streifen-Düse bearbeiten"],
            bubbHPC: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbHAF: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbTB: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbTBADJ: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            fnf: ["Feste Düse","Feste Düsenplatzierung","Düsenbearbeitung behoben"],
            fnm: ["Düse","Düse zeichnen","Düse bearbeiten"],
            fnfstrip: ["Streifen-Düse","Streifen-Düse zeichnen","Streifen-Düse bearbeiten"],
            fnmstrip: ["Streifen-Düse","Streifen-Düse zeichnen","Streifen-Düse bearbeiten"],
            hekvf: ["Düse","Düse zeichnen","Düse bearbeiten"],
            kv: ["Düse","Düse zeichnen","Düse bearbeiten"],
            rn: ["Düse","Düse zeichnen","Düse bearbeiten"],
            rns: ["Düse","Düse zeichnen","Düse bearbeiten"],
            rna: ["Düse","Düse zeichnen","Düse bearbeiten"],
            bubbRBPC: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbRBPCT: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbRBADJ: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbNMPR: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbNMPRSt: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            hevan: ["HE-VAN-Düse","HE-VAN-Düse zeichnen","HE-VAN-Düse bearbeiten"],
            mprseries: ["MPR-Düse","MPR-Düse zeichnen","MPR-Düse bearbeiten"],
            mprstseries: ["MPR-Streifedüse","MPR-Streifendüse zeichnen","MPR-Streifendüse bearbeiten"],
            rvan: ["R-VAN","R-VAN zeichen","R-VAN bearbeiten"],
            rvanStrip: ["R-VAN-Streifen","R-VAN-Streifen zeichen","R-VAN-Streifen bearbeiten"],
            sqseries: ["Düse","Düse zeichnen","Düse bearbeiten"],
            useries: ["Düse","Düse zeichnen","Düse bearbeiten"],
            van: ["VAN-Düse","VAN-Düse zeichnen","VAN-Düse bearbeiten"],
            bubbToro500: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbToro500S: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbNozToroPC: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbNozStreamToro: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbNozStreamToroPC: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbNozOppStreamToro: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbNozOppStreamToroPC: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            toromprplus: ["Düse","Düse zeichnen","Düse bearbeiten"],
            toromprplusStrip: ["Düse","Düse zeichnen","Düse bearbeiten"],
            toromprplusPC: ["Düse","Düse zeichnen","Düse bearbeiten"],
            toromprplusPCStrip: ["Düse","Düse zeichnen","Düse bearbeiten"],
            precisionRotator: ["Düse","Düse zeichnen","Düse bearbeiten"],
            precisionRotatorF: ["Düse","Düse zeichnen","Düse bearbeiten"],
            precisionSpray: ["Düse","Düse zeichnen","Düse bearbeiten"],
            precisionSprayF: ["Düse","Düse zeichnen","Düse bearbeiten"],
            precisionSprayStrip: ["Düse","Düse zeichnen","Düse bearbeiten"],
            precisionSprayStripF: ["Düse","Düse zeichnen","Düse bearbeiten"],
            precisionSprayPC: ["Düse","Düse zeichnen","Düse bearbeiten"],
            precisionSprayPCF: ["Düse","Düse zeichnen","Düse bearbeiten"],
            precisionSprayPCStrip: ["Düse","Düse zeichnen","Düse bearbeiten"],
            precisionSprayPCStripF: ["Düse","Düse zeichnen","Düse bearbeiten"],
            tvantoro: ["Düse","Düse zeichnen","Düse bearbeiten"],
            streamSprayNozToro: ["Düse","Düse zeichnen","Düse bearbeiten"],
            streamSprayNozToroPC: ["Düse","Düse zeichnen","Düse bearbeiten"],
            bubbWM: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bubbWMADJ: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            maxaan: ["Düse","Düse zeichnen","Düse bearbeiten"],
            maxmpr: ["Düse","Düse zeichnen","Düse bearbeiten"],
            maxmprst: ["Düse","Düse zeichnen","Düse bearbeiten"],
            maxmprstream: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            maxmprststream: ["Bubbler","Bubbler zeichnen","Bubbler bearbeiten"],
            bseries: ["Düse","Düse zeichnen","Düse bearbeiten"],
            bseriesst: ["Düse","Düse zeichnen","Düse bearbeiten"],
            trench: ["Graben","Graben zeichnen","Graben bearbeiten"],
            v: ["Ventilverteiler","Ventilverteiler zeichnen","Ventilverteiler bearbeiten"],
            ws: ["Wasserquelle","Wasserquelle zeichnen","Wasserquelle bearbeiten"],
            lp: ["Rohr","Rohr zeichnen","Rohr bearbeiten"],
            lpPVC: ["Rohr","Rohr zeichnen","Rohr bearbeiten"],
            mp: ["Rohr","Rohr zeichnen","Rohr bearbeiten"],
            mpPVC: ["Rohr","Rohr zeichnen","Rohr bearbeiten"],
            compass: ["Kompass","Kompass zeichnen","Kompass bearbeiten"],
            loCurve: ["Linie","Linie zeichnen","Linie Bearbeiten"],
            lsz: ["Größe","Größe zeichnen","Größe bearbeiten"],
            text: ["Text","Text zeichnen","Text bearbeiten"],
            ldtext: ["Text","Text zeichnen","Text bearbeiten"],
            staticText: ["Text","Text zeichnen","Text bearbeiten"],
            dynamicText: ["Text","Text zeichnen","Text bearbeiten"],
            lotable: ["Tabelle","Tabelle zeichnen","Tabelle bearbeiten"],
            stampText: ["Stempel","Stempel zeichnen","Stempel bearbeiten"],
            sb: ["Maßstab","Maßstab Zeichnen","Maßstab bearbeiten"]
        },
        vars: {
            sp: "Sprinkler",
            ld: "Landschaft",
            mixed_sp_lo: "Sprinkler/Layout",
            mixed_sp_lo2: "Sprinkler/Layout 2",
            mixed_ld_lo: "Querformat/Layout",
            hw: "Hydrawise",
            lo: "Layout",
            loPM: "Niederschlag",
            doIrrigate: "Bewässerte Zone",
            doNotIrrigate: "NICHT bewässerte Zone",
            obstacles: "Hindernisse für Bewässerung",
            placementObstacles: "Hindernisse für die Platzierung",
            stdSurf: "Standard",
            fineCut: "Fein geschnittener Rasen",
            raw: "Beton",
            soft: "Weicher Sand",
            flowerBedMix1: "Blumenmischung 1",
            flowerBedMix2: "Blumenmischung 2",
            flowerBedMix3: "Blumenmischung 3",
            flowerBedWhite: "Blumenbeet weiß",
            flowerBedBlue: "Blumenbeet blau",
            flowerBedYellow: "Blumenbeet gelb",
            flowerBedRed: "Blumenbeet rot",
            flowerBedMalina: "Blumenbeet purpurrot",
            flowerBedOrange: "Blumenbeet orange",
            flowerBedDarkBlue: "Blumenbeet dunkelblau",
            flowerBedViolet: "Blumenbeet violett",
            flowerBedDarkViolet: "Blumenbeet dunkelviolett",
            herbalBed1: "Kräuterbett 1",
            herbalBed2: "Kräuterbett 2",
            mulch: "Mulch",
            gravel: "Kies",
            shrubs: "Sträucher 1",
            pavementFill: "Pflaster 1",
            pavementContour: "Pflaster 2",
            pavement3: "Pflaster 3",
            pavement01_A: "Tetris 1",
            pavement01_B: "Tetris 2",
            pavement01_C: "Tetris 3",
            pavement02_A: "Diagonale 1",
            pavement02_B: "Diagonale 2",
            pavement03_A: "Wild 1",
            pavement03_B: "Wild 2",
            pavement04_Red_L: "Wabenrotes Licht",
            pavement04_Red_D: "Wabenrot Dunkel",
            pavement04_Green_L: "Wabengrünes Licht",
            pavement04_Green_D: "Wabengrün Dunkel",
            pavement04_Blue_L: "Wabenblaues Licht",
            pavement04_Blue_D: "Wabenblau Dunkel",
            pool: "Schwimmbad",
            lo_stdDynCurve: "Dynamisch",
            lo_stdCurve: "Standard",
            stdCurve: "Standard",
            markCurve: "Rote Markierung",
            pathCurve: "Weg",
            pillarCurve: "Säule",
            fenceCurve: "Zaun",
            test00: "Test 00",
            test01: "Prüfung 01",
            test02: "Prüfung 02",
            test03: "Prüfung 03",
            test04: "Test 04",
            test05: "Prüfung 05",
            test06: "Prüfung 06",
            saf01: "Stein 1",
            saf02: "Stein 2",
            saf03: "Stein 3",
            saf04: "Stein 4",
            saf05: "Stein 5",
            saf06: "Stein 6",
            saf07: "Stein 7",
            saf08: "Bank 1",
            saf09: "Bank 2",
            saf10: "Möbel 1",
            saf11: "Möbel 2",
            saf12: "Auto 1",
            saf13: "Auto 2",
            saf14: "Kinderrutsche 1",
            saf14_0: "Kinderrutsche 2",
            saf14_L: "Kinderrutsche 3",
            saf14_R: "Kinderrutsche 4",
            saf15: "Schaukeldach",
            saf16: "Sonnenliege 1",
            saf17: "Sonnenliege 2",
            saf18: "Licht 1",
            saf19: "Licht 2",
            saf20: "Wasserfall",
            saf21: "Gewässer 1",
            saf22: "Gewässer 2",
            saf23: "Schacht 1",
            saf24: "Schacht 2",
            bush01: "Busch",
            bush02: "Busch",
            bush03: "Busch",
            bush04: "Busch",
            bush05: "Busch",
            bush06: "Busch",
            bush07: "Busch",
            bush08: "Busch",
            bush09: "Busch",
            bush10: "Busch",
            bush11: "Busch",
            bush12: "Busch",
            bush13: "Busch",
            tree00: "Obstbaum",
            tree01: "Baum",
            tree02: "Baum",
            tree03: "Baum",
            tree04: "Baum",
            tree05: "Baum",
            tree06: "Baum",
            tree07: "Baum",
            tree08: "Baum",
            tree09: "Baum",
            tree10: "Baum",
            tree11: "Baum",
            tree12: "Baum",
            tree13: "Baum",
            tree14: "Baum",
            tree15: "Baum",
            tree16: "Baum",
            tree17: "Baum",
            stdRuler: "Standard",
            fixedCntr: "Feste Zonennummern",
            stand_aloneCntr: "Eigenständiger Controller",
            modularCntr: "Modularer Controller",
            rainSensor: "Regensensor",
            soilSensor: "Bodensensor",
            freezeSensor: "Sensor einfrieren",
            wrFreezeSensor: "Drahtloser Regen-/Frostsensor",
            windSensor: "Windsensor",
            solarSensor: "Solarsensor",
            flowSensor: "Durchflusssensor",
            weatherStation: "Wetterstation",
            controlWire: "Steuerkabel",
            wirelessControl: "Drahtlose Steuerung",
            sensorWire: "Sensorkabel",
            wirelessWire: "Kabellose Verbindung",
            wirelessSensor: "Kabellose Sensorverbindung",
            dS16: "Tropfstart 16/13mm",
            dS17: "Tropfstart 17 mm",
            qcPlastic: "Wassersteckdose aus Kunststoff",
            qcMetal: "Wassersteckdose aus Metall",
            hdpePE80SDR11: "HDPE PE80 SDR 11",
            hdpePE80SDR136: "HDPE PE80 SDR 13,6",
            hdpePE80SDR176: "HDPE PE80 SDR 17,6",
            hdpePE100SDR11: "HDPE PE100 SDR 11",
            hdpePE100SDR136: "HDPE PE100 SDR 13,6",
            hdpePE100SDR176: "HDPE PE100 SDR 17,6",
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
            "pvcUSCJPN18": "PVC-U SCJ (PN18)",
            "pvcUSCJPN12": "PVC-U SCJ (PN12)",
            "pvcUSCJPN9": "PVC-U SCJ (PN9)",
            "pvcUSCJPN6": "PVC-U SCJ (PN6)",
            "pvcUSCJPN45": "PVC-U SCJ (PN4.5)",
            "ldpeCLASS3": "LDPE CLASS 3",
            stdTrench: "Standard (40 cm) (alt)",
            normalTrench: "Normal (B: 10 cm T: 50 cm)",
            narrowTrench: "Schmal (B:5cm T:30cm) (Handgrabenfräse)",
            wideTrench: "Breit (B:30cm T:60cm) (Bagger)",
            multi: "Ventilkasten",
            source: "Wasserquelle",
            empty: "Leer",
            frame: "Rahmen",
            gostDefault: "Big Stamp",
            gostSmall: "Small Stamp",
            "a4hor": "A4 Querformat",
            "a4vert": "A4 Hochformat",
            "a3hor": "A3 Querformat",
            "a3vert": "A3 Hochformat",
            "a2hor": "A2 Querformat",
            "a2vert": "A2 Hochformat",
            "a1hor": "A1 Querformat",
            "a1vert": "A1 Hochformat",
            "a0hor": "A0 Querformat",
            "a0vert": "A0 Hochformat",
            "dind4hor": "DIN D4 Querformat",
            "dind4vert": "DIN D4 Hochformat",
            "dind3hor": "DIN D3 Querformat",
            "dind3vert": "DIN D3 Hochformat",
            "dind2hor": "DIN D2 Querformat",
            "dind2vert": "DIN D2 Hochformat",
            "dind1hor": "DIN D1 Querformat",
            "dind1vert": "DIN D1 Hochformat",
            "dind0hor": "DIN D0 Querformat",
            "dind0vert": "DIN D0 Hochformat",
            "ansiAhor": "ANSI A Querformat",
            "ansiAvert": "ANSI A Hochformat",
            "ansiBhor": "ANSI B Querformat",
            "ansiBvert": "ANSI B Hochformat",
            "ansiChor": "ANSI C Querformat",
            "ansiCvert": "ANSI C Hochformat",
            "ansiDhor": "ANSI D Querformat",
            "ansiDvert": "ANSI D Hochformat",
            "ansiEhor": "ANSI E Querformat",
            "ansiEvert": "ANSI E Hochformat",
            "archAhor": "Arch A Querformat",
            "archAvert": "Arch A Hochformat",
            "archBhor": "Arch B Querformat",
            "archBvert": "Arch B Hochformat",
            "archChor": "Arch C Querformat",
            "archCvert": "Arch C Hochformat",
            "archDhor": "Arch D Querformat",
            "archDvert": "Arch D Hochformat",
            "archEhor": "Arch E Querformat",
            "archEvert": "Arch E Hochformat",
            "archE1hor": "Arch E1 Querformat",
            "archE1vert": "Arch E1 Hochformat",
            "archE2hor": "Arch E2 Querformat",
            "archE2vert": "Arch E2 Hochformat",
            "archE3hor": "Arch E3 Querformat",
            stdCompass: "Kompass",
            gostSize: "Größenlinie",
            landscp: "Landschaftstisch",
            conv: "Symboltabelle",
            convAll: "Alle Symboltabelle",
            zoneT: "Zonentabelle",
            sprinkZoneTimeT: "Zonen Beregnungszeit",
            sprinkT: "Sprinklertisch",
            dripT: "Tabelle der Tropfleitungen",
            insItemT: "Tabelle „Einfügungen“ (nach Elementen)",
            insVarDiamT: "Tabelle der Einsätze (nach Material und Durchmesser)",
            insDiamT: "Tabelle der Einsätze (nach Durchmessern)",
            insVarT: "Tabelle „Einsätze“ (nach Material)",
            staticText: "Text",
            dynamicText: "Text",
            stampTextDef: "Stempeltext",
            sbStdMetric: "Mittlerer Skalierungsbalken (metrisch)",
            sbMinMetric: "Mini (metrisch)",
            sbExtMetric: "Erweitert (metrisch)",
            sbStdImperial: "Mittlerer Skalierungsbalken (imperial)",
            sbMinImperial: "Mini (imperial)",
            sbExtImperial: "Erweitert (imperial)",
            gentleMicroClimate: "Leicht",
            normalMicroClimate: "Normal",
            toughMicroClimate: "Rau",
            sand: "sandig",
            sandyLoam: "Sandiger Lehm",
            lightLoam: "leichter Lehm",
            mediumLoam: "mittlerer Lehm",
            heavyLoam: "schwerer Lehm",
            clay: "Tonne",
            heavyClay: "schwerer Ton",
            noneIncline: "0-5% (0-3°)",
            lightIncline: "5-8 % (3-5°)",
            mediumIncline: "8-12 % (5-7°)",
            hugeIncline: "12 % (7°)"
        },
        misc: {
            fixedCntrSubText: "FEST",
            standAloneCntrSubText: "SA",
            modularCntrSubText: "MOD."
        },
        placeholders: {
            rotorType: ["{{brand}} {{series}} Rotor","{{brand}} {{series}} Rotorplatzierung","{{brand}} {{series}} Rotorbearbeitung"]
        }
    }
})(this);
