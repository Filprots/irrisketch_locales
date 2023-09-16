(function (p) {
    if (window.paperLocale !== "nl") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Oppervlak", "Oppervlak tekenen", "Oppervlak bewerken"],
            brushLawn: ["Gazon", "Gazon tekenen", "Gazon bewerken"],
            brushConcrete: ["Beton", "Beton tekenen", "Beton bewerken"],
            brushSand: ["Zand", "Zand tekenen", "Zand bewerken"],
            brushBed: ["Bed", "Bed tekenen", "Bed bewerken"],
            brushBedding: ["Beddengoed", "Beddengoed tekenen", "Beddengoed bewerken"],
            brushShrubs: ["Struiken", "Struiken tekenen", "Struiken bewerken"],
            brushPath: ["Pad", "Pad tekenen", "Pad bewerken"],
            brushWater: ["Water", "Water tekenen", "Water bewerken"],
            curve: ["Kromme lijn", "Kromme lijn tekenen", "Kromme lijn bewerken"],
            bush: ["Struik", "Een struik planten", "Struik bewerken"],
            saf: ["Kleine architectonische vormen", "Kleine architectonische vormen tekenen", "Kleine architectonische vormen bewerken"],
            tree: ["Boom", "Een boom planten", "Bomen bewerken"],
            polySurface: ["Oppervlak", "Oppervlak tekenen", "Oppervlak bewerken"],
            polyLawn: ["Gazon", "Gazon tekenen", "Gazon bewerken"],
            polyConcrete: ["Beton", "Beton tekenen", "Beton bewerken"],
            polySand: ["Zand", "Zand tekenen", "Zand bewerken"],
            polyBed: ["Bed", "Bed tekenen", "Bed bewerken"],
            polyBedding: ["Beddengoed", "Beddengoed tekenen", "Beddengoed bewerken"],
            polyShrubs: ["Struiken", "Struiken tekenen", "Struiken bewerken"],
            polyPath: ["Pad", "Pad tekenen", "Pad bewerken"],
            polyWater: ["Water", "Water tekenen", "Water bewerken"],
            ruler: ["Liniaal", "Liniaal", "Liniaal"],
            cntr: ["Controller", "Controller tekenen", "Controller bewerken"],
            sens: ["Sensor", "Sensor tekenen", "Sensor bewerken"],
            wr: ["Controlekabel", "Controlekabel tekenen", "Controlekabel bewerken"],
            swr: ["Sensor kabel", "Sensor kabel tekenen", "Sensor kabel bewerken"],
            dl16: ["Druppelleiding 16mm", "Druppelleiding 16mm tekenen", "Druppelleiding 16mm bewerken"],
            ds16: ["Druppelstart 16mm", "Druppelstart 16mm tekenen", "Druppelstart 16mm bewerken"],
            dl17: ["Druppelleiding 17mm", "Druppelleiding 17mm tekenen", "Druppelleiding 17mm bewerken"],
            ds17: ["Druppelstart 17mm", "Druppelstart 17mm tekenen", "Druppelstart 17mm bewerken"],
            rzw: ["Watergift in de wortelzone", "Tekening van een watergift in de wortelzone", "Watergift in de wortelzone bewerken"],
            qc: ["Snelkoppeling klep", "Snelkoppeling klep plaatsen", "Snelkoppeling klep bewerken"],
            inset: ["Pijpmof", "Tekenen van pijpmoffen", "Pijpmof bewerken"],
            mpRotator: ["Mp Rotator", "Mp Rotator plaatsen", "Mp Rotator bewerken"],
            mpRotatorSR: ["Mp Rotator 800", "Mp Rotator 800 plaatsen", "Mp Rotator 800 bewerken"],
            mpRotatorStrip: ["Mp Rotator Strip", "Mp Rotator Strip plaatsen", "Mp Rotator Strip bewerken"],
            bubbNHMS: ["Bubbler sproeier", "Bubbler sproeier plaatsen", "Bubbler sproeier bewerken"],
            bubbNHPC: ["Bubbler sproeier", "Bubbler sproeier plaatsen", "Bubbler sproeier bewerken"],
            bubbNHDS: ["Bubbler sproeier", "Bubbler sproeier plaatsen", "Bubbler sproeier bewerken"],
            pdcAdj: ["PRO verstelbare sproeier", "PRO verstelbare sproeier plaatsen", "PRO verstelbare sproeier bewerken"],
            prosFixed: ["Pro-Spray vaste sproeier", "Pro-Spray vaste sproeier plaatsen", "Pro-Spray vaste sproeier bewerken"],
            srNoz: ["Sproeier voor korte afstanden", "Sproeier voor korte afstanden plaatsen", "Sproeier voor korte afstanden bewerken"],
            streamNoz: ["Stroomsproeier", "Stroomsproeier plaatsen", "Stroomsproeier bewerken"],
            strPatNoz: ["Sproeier met strokenpatroon", "Sproeier met strokenpatroon plaatsen", "Sproeier met strokenpatroon bewerken"],
            bubbHPC: ["Bubbler", "Bubbler plaatsen", "Bubbler bewerken"],
            bubbHAF: ["Bubbler", "Bubbler plaatsen", "Bubbler bewerken"],
            bubbTB: ["Bubbler", "Bubbler plaatsen", "Bubbler bewerken"],
            bubbTBADJ: ["Bubbler", "Bubbler plaatsen", "Bubbler bewerken"],
            fnf: ["Vaste sproeier", "Vaste sproeier plaatsen", "Vaste sproeier bewerken"],
            fnm: ["Vaste sproeier", "Vaste sproeier plaatsen", "Vaste sproeier bewerken"],
            fnfstrip: ["Sproeier met strokenpatroon", "Sproeier met strokenpatroon plaatsen", "Sproeier met strokenpatroon bewerken"],
            fnmstrip: ["Sproeier met strokenpatroon", "Sproeier met strokenpatroon plaatsen", "Sproeier met strokenpatroon bewerken"],
            hekvf: ["HE-KVF sproeier", "HE-KVF sproeier plaatsen", "HE-KVF sproeier bewerken"],
            kv: ["KV sproeier", "KV sproeier plaatsen", "KV sproeier bewerken"],
            rn: ["RN", "RN plaatsen", "RN bewerken"],
            rns: ["RN-strook", "RN-strook plaatsen", "RN-strook bewerken"],
            rna: ["RN-ADJ", "RN-ADJ plaatsen", "RN-ADJ bewerken"],
            "bubbRBPC": ["Bubbler", "Bubbler plaatsen", "Bubbler bewerken"],
            "bubbRBPCT": ["Bubbler", "Bubbler plaatsen", "Bubbler bewerken"],
            "bubbRBADJ": ["Bubbler", "Bubbler plaatsen", "Bubbler bewerken"],
            "bubbNMPR": ["Bubbler sproeier", "Bubbler sproeier plaatsen", "Bubbler sproeier bewerken"],
            "bubbNMPRSt": ["Bubbler sproeier", "Bubbler sproeier plaatsen", "Bubbler sproeier bewerken"],
            "hevan": ["HE-VAN sproeier", "HE-VAN sproeier plaatsen", "HE-VAN sproeier bewerken"],
            "mprseries": ["MPR-Series sproeier", "MPR-Series sproeier plaatsen", "MPR-Series sproeier bewerken"],
            "mprstseries": ["MPR sproeier met strokenpatroon", "MPR sproeier met strokenpatroon plaatsen", "MPR sproeier met strokenpatroon bewerken"],
            "rvan": ["R-VAN", "R-VAN plaatsen", "R-VAN bewerken"],
            "rvanStrip": ["R-VAN strook", "R-VAN strook plaatsen", "R-VAN strook bewerken"],
            "sqseries": ["SQ Series vierkantpatroon sproeier", "SQ Series vierkantpatroon sproeier plaatsen", "SQ Series vierkantpatroon sproeier bewerken"],
            "useries": ["U-Series sproeier", "U-Series sproeier plaatsen", "U-Series sproeier bewerken"],
            "van": ["VAN sproeier", "VAN sproeier plaatsen", "VAN sproeier bewerken"],
            "bubbToro500": ["Bubbler", "Bubbler plaatsen", "Bubbler bewerken"],
            "bubbToro500S": ["Bubbler", "Bubbler plaatsen", "Bubbler bewerken"],
            "bubbNozToroPC": ["Bubbler sproeier", "Bubbler sproeier plaatsen", "Bubbler sproeier bewerken"],
            "bubbNozStreamToro": ["Bubbler sproeier", "Bubbler sproeier plaatsen", "Bubbler sproeier bewerken"],
            "bubbNozStreamToroPC": ["Bubbler sproeier", "Bubbler sproeier plaatsen", "Bubbler sproeier bewerken"],
            "bubbNozOppStreamToro": ["Bubbler sproeier", "Bubbler sproeier plaatsen", "Bubbler sproeier bewerken"],
            "bubbNozOppStreamToroPC": ["Bubbler sproeier", "Bubbler sproeier plaatsen", "Bubbler sproeier bewerken"],
            "toromprplus": ["MPR Plus Series sproeier", "MPR Plus Series sproeier plaatsen", "MPR Plus Series sproeier bewerken"],
            "toromprplusStrip": ["MPR Plus Series sproeier", "MPR Plus Series sproeier plaatsen", "MPR Plus Series sproeier bewerken"],
            "toromprplusPC": ["MPR Plus Series Drukgecompenseerde sproeier", "MPR Plus Series Drukgecompenseerde sproeier plaatsen", "MPR Plus Series Drukgecompenseerde sproeier bewerken"],
            "toromprplusPCStrip": ["MPR Plus Series Drukgecompenseerde sproeier", "MPR Plus Series Drukgecompenseerde sproeier plaatsen", "MPR Plus Series Drukgecompenseerde sproeier bewerken"],
            "precisionRotator": ["Precision Series roterende sproeier", "Precision Series roterende sproeier plaatsen", "Precision Series roterende sproeier bewerken"],
            "precisionRotatorF": ["Precision Series roterende sproeier", "Precision Series roterende sproeier plaatsen", "Precision Series roterende sproeier bewerken"],
            "precisionSpray": ["Precision Series sproeier", "Precision Series sproeier plaatsen", "Precision Series sproeier bewerken"],
            "precisionSprayF": ["Precision Series sproeier", "Precision Series sproeier plaatsen", "Precision Series sproeier bewerken"],
            "precisionSprayStrip": ["Precision Series sproeier", "Precision Series sproeier plaatsen", "Precision Series sproeier bewerken"],
            "precisionSprayStripF": ["Precision Series sproeier", "Precision Series sproeier plaatsen", "Precision Series sproeier bewerken"],
            "precisionSprayPC": ["Precision Series Drukgecompenseerde sproeier", "Precision Series Drukgecompenseerde sproeier plaatsen", "Precision Series Drukgecompenseerde sproeier bewerken"],
            "precisionSprayPCF": ["Precision Series Drukgecompenseerde sproeier", "Precision Series Drukgecompenseerde sproeier plaatsen", "Precision Series Drukgecompenseerde sproeier bewerken"],
            "precisionSprayPCStrip": ["Precision Series Drukgecompenseerde sproeier", "Precision Series Drukgecompenseerde sproeier plaatsen", "Precision Series Drukgecompenseerde sproeier bewerken"],
            "precisionSprayPCStripF": ["Precision Series Drukgecompenseerde sproeier", "Precision Series Drukgecompenseerde sproeier plaatsen", "Precision Series Drukgecompenseerde sproeier bewerken"],
            "tvantoro": ["TVAN Series sproeier", "TVAN Series sproeier plaatsen", "TVAN Series sproeier bewerken"],
            "streamSprayNozToro": ["Stream Spray sproeier", "Stream Spray sproeier plaatsen", "Stream Spray sproeier bewerken"],
            "streamSprayNozToroPC": ["Stream Spray sproeier", "Stream Spray sproeier plaatsen", "Stream Spray sproeier bewerken"],
            "bubbWM": ["Bubbler", "Bubbler plaatsen", "Bubbler bewerken"],
            "bubbWMADJ": ["Bubbler", "Bubbler plaatsen", "Bubbler bewerken"],
            "maxaan": ["MAXAAN sproeier", "MAXAAN sproeier plaatsen", "MAXAAN sproeier bewerken"],
            "maxmpr": ["MAXMPR sproeier", "MAXMPR sproeier plaatsen", "MAXMPR sproeier bewerken"],
            "maxmprst": ["MAXMPR Strip Nozzle", "MAXMPR Strip Nozzle plaatsen", "MAXMPR Strip Nozzle bewerken"],
            "maxmprstream": ["MAXMPR Stream Bubbler Nozzle", "MAXMPR Stream Bubbler Nozzle plaatsen", "MAXMPR Stream Bubbler Nozzle bewerken"],
            "maxmprststream": ["MAXMPR Stream Bubbler Nozzle", "MAXMPR Stream Bubbler Nozzle plaatsen", "MAXMPR Stream Bubbler Nozzle bewerken"],
            "bseries": ["B Serie Nozzle", "B Serie Nozzle plaatsen", "B Serie Nozzle bewerken"],
            "bseriesst": ["B Serie Strip Nozzle", "B Serie Strip Nozzle plaatsen", "B Serie Strip Nozzle bewerken"],
            "trench": ["Sleuf", "Graven van een geul", "Geul bewerken"],
            "v": ["Klepstuk", "Plaatsen van klepstuk", "Klepstuk bewerken"],
            "ws": ["Watervoorziening", "Plaatsen van watervoorziening", "Watervoorziening bewerken"],
            "lp": ["Laterale leiding", "Tekenen van laterale leiding", "Laterale leiding bewerken"],
            "mp": ["Hoofdleiding", "Tekenen van hoofdleiding", "Hoofdleiding bewerken"],
            "compass": ["Kompas", "Kompas Instelling", "Kompas Bewerking"],
            "loCurve": ["Lijn", "Lijn Tekenen", "Lijn Bewerken"],
            "lsz": ["Grootte", "Grootte Tekenen", "Grootte Bewerken"],
            "text": ["Tekst", "Tekst Tekenen", "Tekst Bewerken"],
            "ldtext": ["Tekst", "Tekst Instelling", "Tekst Bewerken"],
            "staticText": ["Tekst", "Tekst Instelling", "Tekst Bewerken"],
            "dynamicText": ["Tekst", "Tekst Instelling", "Tekst Bewerken"],
            "lotable": ["Tabel", "Tabel Instelling", "Tabel Bewerken"],
            "stampText": ["Stempel", "Stempel Tekst Instelling", "Stempel Tekst Bewerken"],
            "sb": ["Schaalbalk (m)", "Schaalbalk Tekenen", "Schaalbalk Bewerken"],
        },
        vars: {
            sp: "Sproeier",
            ld: "Landschap",
            mixed_sp_lo: "Sproeier/Lay-out",
            mixed_sp_lo2: "Sprinkler/Layout 2",
            mixed_ld_lo: "Landschap/Lay-out",
            hw: "Hydrawise",
            lo: "Lay-out",
            loPM: "Neerslagsimulatie",
            doIrrigate: "Geïrrigeerde zone",
            doNotIrrigate: "Niet-geïrrigeerde zone",
            stdSurf: "Standaard",
            fineCut: "Fijn gemaaid gazon",
            raw: "Onbewerkt beton",
            soft: "Zacht zand",
            flowerBedMix1: "Bloemenmix 1",
            flowerBedMix2: "Bloemenmix 2",
            flowerBedMix3: "Bloemenmix 3",
            flowerBedWhite: "Witte bloembedden",
            flowerBedBlue: "Blauwe bloembedden",
            flowerBedYellow: "Gele bloembedden",
            flowerBedRed: "Rode bloembedden",
            flowerBedMalina: "Karmijnrode bloembedden",
            flowerBedOrange: "Oranje bloembedden",
            flowerBedDarkBlue: "Donkerblauwe bloembedden",
            flowerBedViolet: "Paarse bloembedden",
            flowerBedDarkViolet: "Donkerpaarse bloembedden",
            herbalBed1: "Kruidenbed 1",
            herbalBed2: "Kruidenbed 2",
            mulch: "Mulch",
            gravel: "Grind",
            shrubs: "Heesters 1",
            pavementFill: "Bestrating 1",
            pavementContour: "Bestrating 2",
            pavement3: "Bestrating 3",
            pavement01_A: "Tetris 1",
            pavement01_B: "Tetris 2",
            pavement01_C: "Tetris 3",
            pavement02_A: "Diagonaal 1",
            pavement02_B: "Diagonaal 2",
            pavement03_A: "Wild 1",
            pavement03_B: "Wild 2",
            pavement04_Red_L: "Honingraat Rood Licht",
            pavement04_Red_D: "Honingraat Rood Donker",
            pavement04_Green_L: "Honingraat Groen Licht",
            pavement04_Green_D: "Honingraat Groen Donker",
            pavement04_Blue_L: "Honingraat Blauw Licht",
            pavement04_Blue_D: "Honingraat Blauw Donker",
            pool: "Zwembad",
            lo_stdDynCurve: "Dynamisch",
            lo_stdCurve: "Standaard",
            stdCurve: "Standaard",
            markCurve: "Rode markering",
            pathCurve: "Pad",
            pillarCurve: "Pilaar",
            fenceCurve: "Hek",
            test00: "Test 00",
            test01: "Test 01",
            test02: "Test 02",
            test03: "Test 03",
            test04: "Test 04",
            test05: "Test 05",
            test06: "Test 06",
            saf01: "Steen 1",
            saf02: "Steen 2",
            saf03: "Steen 3",
            saf04: "Steen 4",
            saf05: "Steen 5",
            saf06: "Steen 6",
            saf07: "Steen 7",
            saf08: "Bank 1",
            saf09: "Bank 2",
            saf10: "Meubilair 1",
            saf11: "Meubilair 2",
            saf12: "Auto 1",
            saf13: "Auto 2",
            saf14: "Glijbaan kinderen 1",
            saf14_0: "Glijbaan kinderen 2",
            saf14_L: "Glijbaan kinderen 3",
            saf14_R: "Glijbaan kinderen 4",
            saf15: "Schommelkap",
            saf16: "Ligbed 1",
            saf17: "Ligbed 2",
            saf18: "Lamp 1",
            saf19: "Lamp 2",
            saf20: "Waterval",
            saf21: "Waterlichaam 1",
            saf22: "Waterlichaam 2",
            saf23: "Mangat 1",
            saf24: "Mangat 2",
            bush01: "Struik #01",
            bush02: "Struik #02",
            bush03: "Struik #03",
            bush04: "Struik #04",
            bush05: "Struik #05",
            bush06: "Struik #06",
            bush07: "Struik #07",
            bush08: "Struik #08",
            bush09: "Struik #09",
            bush10: "Struik #10",
            bush11: "Struik #11",
            bush12: "Struik #12",
            bush13: "Struik #13",
            tree00: "Fruitboom",
            tree01: "Boom #01",
            tree02: "Boom #02",
            tree03: "Boom #03",
            tree04: "Boom #04",
            tree05: "Boom #05",
            tree06: "Boom #06",
            tree07: "Boom #07",
            tree08: "Boom #08",
            tree09: "Boom #09",
            tree10: "Boom #10",
            tree11: "Boom #11",
            tree12: "Boom #12",
            tree13: "Boom #13",
            tree14: "Boom #14",
            tree15: "Boom #15",
            tree16: "Boom #16",
            tree17: "Boom #17",
            stdRuler: "Standaard",
            fixedCntr: "Vaste zone-nummers",
            stand_aloneCntr: "Stand-alone controller",
            modularCntr: "Modulaire controller",
            rainSensor: "Regensensor",
            soilSensor: "Bodemvochtigheidssensor",
            freezeSensor: "Vriessensor",
            wrFreezeSensor: "Draadloze regen-/vriessensor",
            windSensor: "Windsensor",
            solarSensor: "Zonlichtsensor",
            flowSensor: "Flowmeter",
            weatherStation: "Weerstation",
            controlWire: "Besturingskabel",
            sensorWire: "Sensorkabel",
            wirelessWire: "Draadloze verbinding",
            dS16: "Druppelstart 16mm",
            dS17: "Druppelstart 17mm",
            qcPlastic: "Kunststof snelkoppeling ventiel",
            qcMetal: "Metalen snelkoppeling ventiel",
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
            stdTrench: "Standaard (40cm) (verouderd)",
            normalTrench: "Normaal (B:10cm D:50cm)",
            narrowTrench: "Smal (B:5cm D:30cm) (Handgraafmachine)",
            wideTrench: "Breed (B:30cm D:60cm) (Mini-graafmachine)",
            multi: "Klepbox",
            source: "Watervoorziening",
            empty: "Leeg",
            frame: "Frame",
            gostDefault: "GOST 21.101-97 (Eerste)",
            gostSmall: "GOST 21.101-97 (Overige)",
            a4hor: "A4 Horizontaal",
            a4vert: "A4 Verticaal",
            a3hor: "A3 Horizontaal",
            a3vert: "A3 Verticaal",
            a2hor: "A2 Horizontaal",
            a2vert: "A2 Verticaal",
            a1hor: "A1 Horizontaal",
            a1vert: "A1 Verticaal",
            a0hor: "A0 Horizontaal",
            a0vert: "A0 Verticaal",
            stdCompass: "Kompas",
            gostSize: "GOST Grootte",
            landscp: "Landschaps legenda",
            conv: "Symbool legenda",
            convAll: "Symbool legenda (All)",
            zoneT: "Zone tabel",
            sprinkZoneTimeT: "Besproeiingstijd per zone",
            sprinkT: "Sproeier tabel",
            dripT: "Druppelslang tabel",
            insItemT: "Invoegtabellen (Per Item)",
            insVarDiamT: "Invoegtabellen (Op materiaal en diameter)",
            insDiamT: "Invoegtabellen (Op diameter)",
            insVarT: "Invoegtabellen (Op materiaal)",
            staticText: "Tekst",
            dynamicText: "Tekst",
            stampTextDef: "Stempeltekst",
            sbStdMetric: "Medium (Metrisch)",
            sbMinMetric: "Mini (Metrisch)",
            sbExtMetric: "Uitgebreid (Metrisch)",
            sbStdImperial: "Medium (Imperiaal)",
            sbMinImperial: "Mini (Imperiaal)",
            sbExtImperial: "Uitgebreid (Imperiaal)",
            gentleMicroClimate: "Mild",
            normalMicroClimate: "Normaal",
            toughMicroClimate: "Zwaar",
            sand: "Zand",
            sandyLoam: "Zandleem",
            lightLoam: "Lichte leem",
            mediumLoam: "Gemiddelde leem",
            heavyLoam: "Zware leem",
            clay: "Klei",
            heavyClay: "Zware klei",
            noneIncline: "0-5% (0-3°)",
            lightIncline: "5-8% (3-5°)",
            mediumIncline: "8-12% (5-7°)",
            hugeIncline: "12%+ (7°+)"
        },
        misc: {
            fixedCntrSubText: "VASTE",
            standAloneCntrSubText: "SA",
            modularCntrSubText: "MOD."
        },
        placeholders: {
            rotorType: ["{{brand}} {{series}} sproeier", "{{brand}} {{series}} sproeier plaatsing", "{{brand}} {{series}} sproeier bewerken"]
        }
    };
})(this);
