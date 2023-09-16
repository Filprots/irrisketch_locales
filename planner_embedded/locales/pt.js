(function (p) {
    if (window.paperLocale !== "pt") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Surface", "Surface drawing", "Surface editing"],
            brushLawn: ["Lawn", "Lawn drawing", "Lawn editing"],
            brushConcrete: ["Concrete", "Concrete drawing", "Concrete editing"],
            brushSand: ["Sand", "Sand drawing", "Sand editing"],
            brushBed: ["Bed", "Bed drawing", "Bed editing"],
            brushBedding: ["Bedding", "Bedding drawing", "Bedding editing"],
            brushShrubs: ["Shrubs", "Shrubs drawing", "Shrubs editing"],
            brushPath: ["Path", "Path drawing", "Path editing"],
            brushWater: ["Water", "Water drawing", "Water editing"],
            curve: ["Curve", "Curve drawing", "Curve editing"],
            bush: ["Bush", "Planting a bush", "Editing bush"],
            saf: ["Small Architectural Forms", "Drawing saf", "Editing saf"],
            tree: ["Tree", "Planting a tree", "Editing trees"],
            polySurface: ["Surface", "Surface drawing", "Surface editing"],
            polyLawn: ["Lawn", "Lawn drawing", "Lawn editing"],
            polyConcrete: ["Concrete", "Concrete drawing", "Concrete editing"],
            polySand: ["Sand", "Sand drawing", "Sand editing"],
            polyBed: ["Bed", "Bed drawing", "Bed editing"],
            polyBedding: ["Bedding", "Bedding drawing", "Bedding editing"],
            polyShrubs: ["Shrubs", "Shrubs drawing", "Shrubs editing"],
            polyPath: ["Path", "Path drawing", "Path editing"],
            polyWater: ["Water", "Water drawing", "Water editing"],
            ruler: ["Ruler", "Ruler", "Ruler"],
            cntr: ["Controller", "Controller drawing", "Controller editing"],
            sens: ["Sensor", "Sensor drawing", "Sensor editing"],
            wr: ["Control wire", "Control wire drawing", "Control wire editing"],
            swr: ["Sensor wire", "Sensor wire drawing", "Sensor wire editing"],
            dl16: ["Drip line 16mm", "Drip line 16mm drawing", "Drip line 16mm editing"],
            ds16: ["Drip start 16mm", "Drip start 16mm drawing", "Drip start 16mm editing"],
            dl17: ["Drip line 17mm", "Drip line 17mm drawing", "Drip line 17mm editing"],
            ds17: ["Drip start 17mm", "Drip start 17mm drawing", "Drip start 17mm editing"],
            rzw: ["Root zone watering", "Root zone watering unit drawing", "Root zone watering unit editing"],
            qc: ["Quick-Coupling Valve", "Quick-Coupling Valve placing", "Quick-Coupling Valve editing"],
            inset: ["Pipe Sleeve", "Drawing Pipe Sleeves", "Pipe Sleeve editing"],
            mpRotator: ["Mp Rotator", "Mp Rotator placing", "Mp Rotator editing"],
            mpRotatorSR: ["Mp Rotator 800", "Mp Rotator 800 placing", "Mp Rotator 800 editing"],
            mpRotatorStrip: ["Mp Rotator Strip", "Mp Rotator Strip placing", "Mp Rotator Strip editing"],
            bubbNHMS: ["Bubbler nozzle", "Bubbler nozzle placing", "Bubbler nozzle editing"],
            bubbNHPC: ["Bubbler nozzle", "Bubbler nozzle placing", "Bubbler nozzle editing"],
            bubbNHDS: ["Bubbler nozzle", "Bubbler nozzle placing", "Bubbler nozzle editing"],
            pdcAdj: ["PRO Adjustable Nozzle", "PRO Adjustable Nozzle placing", "PRO Adjustable Nozzle editing"],
            prosFixed: ["Pro-Spray Fixed Nozzle", "Pro-Spray Fixed Nozzle placing", "Pro-Spray Fixed Nozzle editing"],
            srNoz: ["Short Radius Nozzle", "Short Radius Nozzle placing", "Short Radius Nozzle editing"],
            streamNoz: ["Stream Nozzle", "Stream Nozzle placing", "Stream Nozzle editing"],
            strPatNoz: ["Strip Pattern Nozzle", "Strip Pattern Nozzle placing", "Strip Pattern Nozzle editing"],
            bubbHPC: ["Bubbler", "Bubbler placing", "Bubbler editing"],
            bubbHAF: ["Bubbler", "Bubbler placing", "Bubbler editing"],
            bubbTB: ["Bubbler", "Bubbler placing", "Bubbler editing"],
            bubbTBADJ: ["Bubbler", "Bubbler placing", "Bubbler editing"],
            fnf: ["Fixed Nozzle", "Fixed Nozzle placing", "Fixed Nozzle editing"],
            fnm: ["Fixed Nozzle", "Fixed Nozzle placing", "Fixed Nozzle editing"],
            fnfstrip: ["Strip Pattern Nozzle", "Strip Pattern Nozzle placing", "Strip Pattern Nozzle editing"],
            fnmstrip: ["Strip Pattern Nozzle", "Strip Pattern Nozzle placing", "Strip Pattern Nozzle editing"],
            hekvf: ["HE-KVF Nozzle", "HE-KVF Nozzle placing", "HE-KVF Nozzle editing"],
            kv: ["KV Nozzle", "KV Nozzle placing", "KV Nozzle editing"],
            rn: ["RN", "RN placing", "RN editing"],
            rns: ["RN Strip", "RN Strip placing", "RN Strip editing"],
            rna: ["RN-ADJ", "RN-ADJ placing", "RN-ADJ editing"],
            "bubbRBPC": ["Bubbler", "Bubbler placing", "Bubbler editing"],
            "bubbRBPCT": ["Bubbler", "Bubbler placing", "Bubbler editing"],
            "bubbRBADJ": ["Bubbler", "Bubbler placing", "Bubbler editing"],
            "bubbNMPR": ["Bubbler nozzle", "Bubbler nozzle placing", "Bubbler nozzle editing"],
            "bubbNMPRSt": ["Bubbler nozzle", "Bubbler nozzle placing", "Bubbler nozzle editing"],
            "hevan": ["HE-VAN Nozzle", "HE-VAN Nozzle placing", "HE-VAN Nozzle editing"],
            "mprseries": ["MPR-Series Nozzle", "MPR-Series Nozzle placing", "MPR-Series Nozzle editing"],
            "mprstseries": ["MPR Strip Pattern Nozzle", "MPR Strip Pattern Nozzle placing", "MPR Strip Pattern Nozzle editing"],
            "rvan": ["R-VAN", "R-VAN placing", "R-VAN editing"],
            "rvanStrip": ["R-VAN Strip", "R-VAN Strip placing", "R-VAN Strip editing"],
            "sqseries": ["SQ Series Square Pattern Nozzle", "SQ Series Square Pattern Nozzle placing", "SQ Series Square Pattern Nozzle editing"],
            "useries": ["U-Series Nozzle", "U-Series Nozzle placing", "U-Series Nozzle editing"],
            "van": ["VAN Nozzle", "VAN Nozzle placing", "VAN Nozzle editing"],
            "bubbToro500": ["Bubbler", "Bubbler placing", "Bubbler editing"],
            "bubbToro500S": ["Bubbler", "Bubbler placing", "Bubbler editing"],
            "bubbNozToroPC": ["Bubbler nozzle", "Bubbler nozzle placing", "Bubbler nozzle editing"],
            "bubbNozStreamToro": ["Bubbler nozzle", "Bubbler nozzle placing", "Bubbler nozzle editing"],
            "bubbNozStreamToroPC": ["Bubbler nozzle", "Bubbler nozzle placing", "Bubbler nozzle editing"],
            "bubbNozOppStreamToro": ["Bubbler nozzle", "Bubbler nozzle placing", "Bubbler nozzle editing"],
            "bubbNozOppStreamToroPC": ["Bubbler nozzle", "Bubbler nozzle placing", "Bubbler nozzle editing"],
            "toromprplus": ["MPR Plus Series Nozzle", "MPR Plus Series Nozzle placing", "MPR Plus Series Nozzle editing"],
            "toromprplusStrip": ["MPR Plus Series Nozzle", "MPR Plus Series Nozzle placing", "MPR Plus Series Nozzle editing"],
            "toromprplusPC": ["MPR Plus Series Pressure-compensated Nozzle", "MPR Plus Series Pressure-compensated Nozzle placing", "MPR Plus Series Pressure-compensated Nozzle editing"],
            "toromprplusPCStrip": ["MPR Plus Series Pressure-compensated Nozzle", "MPR Plus Series Pressure-compensated Nozzle placing", "MPR Plus Series Pressure-compensated Nozzle editing"],
            "precisionRotator": ["Precision Series Rotating Nozzle", "Precision Series Rotating Nozzle placing", "Precision Series Rotating Nozzle editing"],
            "precisionRotatorF": ["Precision Series Rotating Nozzle", "Precision Series Rotating Nozzle placing", "Precision Series Rotating Nozzle editing"],
            "precisionSpray": ["Precision Series Nozzle", "Precision Series Nozzle placing", "Precision Series Nozzle editing"],
            "precisionSprayF": ["Precision Series Nozzle", "Precision Series Nozzle placing", "Precision Series Nozzle editing"],
            "precisionSprayStrip": ["Precision Series Nozzle", "Precision Series Nozzle placing", "Precision Series Nozzle editing"],
            "precisionSprayStripF": ["Precision Series Nozzle", "Precision Series Nozzle placing", "Precision Series Nozzle editing"],
            "precisionSprayPC": ["Precision Series Pressure-compensated Nozzle", "Precision Series Pressure-compensated Nozzle placing", "Precision Series Pressure-compensated Nozzle editing"],
            "precisionSprayPCF": ["Precision Series Pressure-compensated Nozzle", "Precision Series Pressure-compensated Nozzle placing", "Precision Series Pressure-compensated Nozzle editing"],
            "precisionSprayPCStrip": ["Precision Series Pressure-compensated Nozzle", "Precision Series Pressure-compensated Nozzle placing", "Precision Series Pressure-compensated Nozzle editing"],
            "precisionSprayPCStripF": ["Precision Series Pressure-compensated Nozzle", "Precision Series Pressure-compensated Nozzle placing", "Precision Series Pressure-compensated Nozzle editing"],
            "tvantoro": ["TVAN Series Nozzle", "TVAN Series Nozzle placing", "TVAN Series Nozzle editing"],
            "streamSprayNozToro": ["Stream Spray Nozzle", "Stream Spray Nozzle placing", "Stream Spray Nozzle editing"],
            "streamSprayNozToroPC": ["Stream Spray Nozzle", "Stream Spray Nozzle placing", "Stream Spray Nozzle editing"],
            "bubbWM": ["Bubbler", "Bubbler placing", "Bubbler editing"],
            "bubbWMADJ": ["Bubbler", "Bubbler placing", "Bubbler editing"],
            "maxaan": ["MAXAAN Nozzle", "MAXAAN Nozzle placing", "MAXAAN Nozzle editing"],
            "maxmpr": ["MAXMPR Nozzle", "MAXMPR Nozzle placing", "MAXMPR Nozzle editing"],
            "maxmprst": ["MAXMPR Strip Nozzle", "MAXMPR Strip Nozzle placing", "MAXMPR Strip Nozzle editing"],
            "maxmprstream": ["MAXMPR Stream Bubbler Nozzle", "MAXMPR Stream Bubbler Nozzle placing", "MAXMPR Stream Bubbler Nozzle editing"],
            "maxmprststream": ["MAXMPR Stream Bubbler Nozzle", "MAXMPR Stream Bubbler Nozzle placing", "MAXMPR Stream Bubbler Nozzle editing"],
            "bseries": ["B Series Nozzle", "B Series Nozzle placing", "B Series Nozzle editing"],
            "bseriesst": ["B Series Strip Nozzle", "B Series Strip Nozzle placing", "B Series Strip Nozzle editing"],
            "trench": ["Trench", "Trenching", "Trench editing"],
            "v": ["Valves manifold", "Valve manifold placing", "Valve manifold editing"],
            "ws": ["Water source", "Water source placing", "Water source editing"],
            "lp": ["Lateral pipe", "Lateral pipe drawing", "Lateral pipe editing"],
            "mp": ["Main pipe", "Main pipe drawing", "Main pipe editing"],
            "compass": ["Bússola", "Configuração da Bússola", "Edição da Bússola"],
            "loCurve": ["Linha", "Desenhando Linha", "Edição de Linha"],
            "lsz": ["Tamanho", "Desenhando Tamanho", "Edição de Tamanho"],
            "text": ["Texto", "Desenhando Texto", "Edição de Texto"],
            "ldtext": ["Texto", "Configuração de Texto", "Edição de Texto"],
            "staticText": ["Texto", "Configuração de Texto", "Edição de Texto"],
            "dynamicText": ["Texto", "Configuração de Texto", "Edição de Texto"],
            "lotable": ["Tabela", "Configuração de Tabela", "Edição de Tabela"],
            "stampText": ["Carimbo", "Configuração de Texto de Carimbo", "Edição de Texto de Carimbo"],
            "sb": ["Barra de Escala", "Desenhando Barra de Escala", "Edição de Barra de Escala"]
        },
        vars: {
            sp: "Sprinkler",
            ld: "Landscape",
            mixed_sp_lo: "Sprinkler/Layout",
            mixed_sp_lo2: "Sprinkler/Layout 2",
            mixed_ld_lo: "Landscape/Layout",
            hw: "Hydrawise",
            lo: "Layout",
            loPM: "Precipitation",
            doIrrigate: "Irrigated zone",
            doNotIrrigate: "NON-Irrigated zone",
            stdSurf: "Standard",
            fineCut: "Fine cut lawn",
            raw: "Raw concrete",
            soft: "Soft sand",
            flowerBedMix1: "Flower mix 1",
            flowerBedMix2: "Flower mix 2",
            flowerBedMix3: "Flower mix 3",
            flowerBedWhite: "Flower bed white",
            flowerBedBlue: "Flower bed blue",
            flowerBedYellow: "Flower bed yellow",
            flowerBedRed: "Flower bed red",
            flowerBedMalina: "Flower bed crimson",
            flowerBedOrange: "Flower bed orange",
            flowerBedDarkBlue: "Flower bed dark blue",
            flowerBedViolet: "Flower bed violet",
            flowerBedDarkViolet: "Flower bed dark violet",
            herbalBed1: "Herbal bed 1",
            herbalBed2: "Herbal bed 2",
            mulch: "Mulch",
            gravel: "Gravel",
            shrubs: "Shrubs 1",
            pavementFill: "Pavement 1",
            pavementContour: "Pavement 2",
            pavement3: "Pavement 3",
            pavement01_A: "Tetris 1",
            pavement01_B: "Tetris 2",
            pavement01_C: "Tetris 3",
            pavement02_A: "Diagonal 1",
            pavement02_B: "Diagonal 2",
            pavement03_A: "Wild 1",
            pavement03_B: "Wild 2",
            pavement04_Red_L: "Honeycomb Red Light",
            pavement04_Red_D: "Honeycomb Red Dark",
            pavement04_Green_L: "Honeycomb Green Light",
            pavement04_Green_D: "Honeycomb Green Dark",
            pavement04_Blue_L: "Honeycomb Blue Light",
            pavement04_Blue_D: "Honeycomb Blue Dark",
            pool: "Swimming pool",
            lo_stdDynCurve: "Dynamic",
            lo_stdCurve: "Standard",
            stdCurve: "Standard",
            markCurve: "Red marker",
            pathCurve: "Path",
            pillarCurve: "Pillar",
            fenceCurve: "Fence",
            test00: "Test 00",
            test01: "Test 01",
            test02: "Test 02",
            test03: "Test 03",
            test04: "Test 04",
            test05: "Test 05",
            test06: "Test 06",
            saf01: "Stone 1",
            saf02: "Stone 2",
            saf03: "Stone 3",
            saf04: "Stone 4",
            saf05: "Stone 5",
            saf06: "Stone 6",
            saf07: "Stone 7",
            saf08: "Bench 1",
            saf09: "Bench 2",
            saf10: "Furniture 1",
            saf11: "Furniture 2",
            saf12: "Car 1",
            saf13: "Car 2",
            saf14: "Сhildren's slide 1",
            saf14_0: "Сhildren's slide 2",
            saf14_L: "Сhildren's slide 3",
            saf14_R: "Сhildren's slide 4",
            saf15: "Swing canopy",
            saf16: "Sunbed 1",
            saf17: "Sunbed 2",
            saf18: "Light 1",
            saf19: "Light 2",
            saf20: "Waterfall",
            saf21: "Body of water 1",
            saf22: "Body of water 2",
            saf23: "Manhole 1",
            saf24: "Manhole 2",
            bush01: "Bush #01",
            bush02: "Bush #02",
            bush03: "Bush #03",
            bush04: "Bush #04",
            bush05: "Bush #05",
            bush06: "Bush #06",
            bush07: "Bush #07",
            bush08: "Bush #08",
            bush09: "Bush #09",
            bush10: "Bush #10",
            bush11: "Bush #11",
            bush12: "Bush #12",
            bush13: "Bush #13",
            tree00: "Fruit tree",
            tree01: "Tree #01",
            tree02: "Tree #02",
            tree03: "Tree #03",
            tree04: "Tree #04",
            tree05: "Tree #05",
            tree06: "Tree #06",
            tree07: "Tree #07",
            tree08: "Tree #08",
            tree09: "Tree #09",
            tree10: "Tree #10",
            tree11: "Tree #11",
            tree12: "Tree #12",
            tree13: "Tree #13",
            tree14: "Tree #14",
            tree15: "Tree #15",
            tree16: "Tree #16",
            tree17: "Tree #17",
            stdRuler: "Standard",
            fixedCntr: "Fixed zones numbers",
            stand_aloneCntr: "Stand alone controller",
            modularCntr: "Modular controller",
            rainSensor: "Rain sensor",
            soilSensor: "Soil sensor",
            freezeSensor: "Freeze sensor",
            wrFreezeSensor: "Wireless Rain/Freeze sensor",
            windSensor: "Wind sensor",
            solarSensor: "Solar sensor",
            flowSensor: "Flow sensor",
            weatherStation: "Weather station",
            controlWire: "Control wire",
            sensorWire: "Sensor wire",
            wirelessWire: "Wireless connection",
            dS16: "Drip start 16mm",
            dS17: "Drip start 17mm",
            qcPlastic: "Plastic Quick-Coupling Valve",
            qcMetal: "Metallic Quick-Coupling Valve",
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
            stdTrench: "Standard (40cm) (legacy)",
            normalTrench: "Normal (W:10cm D:50cm)",
            narrowTrench: "Narrow (W:5cm D:30cm) (Hand-trencher)",
            wideTrench: "Wide (W:30cm D:60cm) (Mini-Excavator)",
            multi: "Valve box",
            source: "Water source",
            empty: "Empty",
            frame: "Frame",
            gostDefault: "GOST 21.101-97 (First)",
            gostSmall: "GOST 21.101-97 (Rest)",
            a4hor: "A4 Horizontal",
            a4vert: "A4 Vertical",
            a3hor: "A3 Horizontal",
            a3vert: "A3 Vertical",
            a2hor: "A2 Horizontal",
            a2vert: "A2 Vertical",
            a1hor: "A1 Horizontal",
            a1vert: "A1 Vertical",
            a0hor: "A0 Horizontal",
            a0vert: "A0 Vertical",
            stdCompass: "Compass",
            gostSize: "GOST Size",
            landscp: "Landscape table",
            conv: "Symbols table",
            convAll: "Symbols table (All)",
            zoneT: "Zones table",
            sprinkZoneTimeT: "Zone sprinkling time",
            sprinkT: "Sprinklers table",
            dripT: "Drip lines table",
            insItemT: "Inserts Table (By Items)",
            insVarDiamT: "Inserts Table (By Material and Diameters)",
            insDiamT: "Inserts Table (By Diameters)",
            insVarT: "Inserts Table (By Material)",
            staticText: "Text",
            dynamicText: "Text",
            stampTextDef: "Stamp text",
            sbStdMetric: "Medium scaling bar (Metric)",
            sbMinMetric: "Mini (Metric)",
            sbExtMetric: "Extended (Metric)",
            sbStdImperial: "Medium scaling bar (Imperial)",
            sbMinImperial: "Mini (Imperial)",
            sbExtImperial: "Extended (Imperial)",
            gentleMicroClimate: "Mild",
            normalMicroClimate: "Normal",
            toughMicroClimate: "Harsh",
            sand: "Sandy",
            sandyLoam: "Sandy loam",
            lightLoam: "Light loam",
            mediumLoam: "Medium loam",
            heavyLoam: "Heavy loam",
            clay: "Clay",
            heavyClay: "Heavy clay",
            noneIncline: "0-5% (0-3°)",
            lightIncline: "5-8% (3-5°)",
            mediumIncline: "8-12% (5-7°)",
            hugeIncline: "12%+ (7°+)"
        },
        misc: {
            fixedCntrSubText: "FIXED",
            standAloneCntrSubText: "SA",
            modularCntrSubText: "MOD."
        },
        placeholders: {
            rotorType: ["{{brand}} {{series}} rotor", "{{brand}} {{series}} rotor placing", "{{brand}} {{series}} rotor editing"]
        }
    };
})(this);
