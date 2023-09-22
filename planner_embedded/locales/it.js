(function (p) {
    if (window.paperLocale !== "it") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Superficie", "Disegno superficiale", "Modifica della superficie"],
            brushLawn: ["Prato", "Disegno del prato", "Modifica del prato"],
            brushConcrete: ["Calcestruzzo", "Disegno concreto", "Editing concreto"],
            brushSand: ["Sabbia", "Disegno di sabbia", "Modifica della sabbia"],
            brushBed: ["Letto", "Disegno del letto", "Modifica del letto"],
            brushBedding: ["Biancheria da letto", "Disegno della lettiera", "Modifica biancheria da letto"],
            brushShrubs: ["Arbusti", "Disegno di arbusti", "Modifica degli arbusti"],
            brushPath: ["Sentiero", "Disegno del percorso", "Modifica del percorso"],
            brushWater: ["Acqua", "Disegno ad acqua", "Modifica dell'acqua"],
            curve: ["Curva", "Disegno della curva", "Modifica della curva"],
            bush: ["Cespuglio", "Piantare un cespuglio", "Cespuglio di modifica"],
            saf: ["Piccole forme architettoniche", "Disegno sicuro", "Modifica sicura"],
            tree: ["Albero", "Piantare un albero", "Modifica degli alberi"],
            polySurface: ["Superficie", "Disegno superficiale", "Modifica della superficie"],
            polyLawn: ["Prato", "Disegno del prato", "Modifica del prato"],
            polyConcrete: ["Calcestruzzo", "Disegno concreto", "Editing concreto"],
            polySand: ["Sabbia", "Disegno di sabbia", "Modifica della sabbia"],
            polyBed: ["Letto", "Disegno del letto", "Modifica del letto"],
            polyBedding: ["Biancheria da letto", "Disegno della lettiera", "Modifica biancheria da letto"],
            polyShrubs: ["Arbusti", "Disegno di arbusti", "Modifica degli arbusti"],
            polyPath: ["Sentiero", "Disegno del percorso", "Modifica del percorso"],
            polyWater: ["Acqua", "Disegno ad acqua", "Modifica dell'acqua"],
            ruler: ["Governate", "Governate", "Governate"],
            cntr: ["Controllore", "Disegno del controllore", "Modifica del controllore"],
            sens: ["Sensore", "Disegno del sensore", "Modifica del sensore"],
            wr: ["Filo di controllo", "Controllare la trafilatura", "Controlla la modifica del filo"],
            swr: ["Filo del sensore", "Trafilatura del sensore", "Modifica del cavo del sensore"],
            dl16: ["Ala gocciolante 16mm", "Disegno ala gocciolante 16mm", "Modifica linea gocciolante 16mm"],
            ds16: ["Gocciolamento inizio 16mm", "Disegno a goccia da 16 mm", "Drip start editing 16mm"],
            dl17: ["Ala gocciolante 17mm", "Disegno ala gocciolante 17mm", "Modifica linea gocciolante 17mm"],
            ds17: ["Gocciolamento inizio 17mm", "Disegno a goccia da 17 mm", "Drip start modifica 17mm"],
            rzw: ["Irrigazione della zona radicale", "Disegno dell'unità di irrigazione della zona radicale", "Modifica dell'unità di irrigazione della zona radicale"],
            qc: ["Valvola ad innesto rapido", "Posizionamento della valvola ad innesto rapido", "Modifica della valvola ad innesto rapido"],
            inset: ["Manicotto del tubo", "Disegnare manicotti per tubi", "Modifica del manicotto del tubo"],
            mpRotator: ["Mp rotatore", "Posizionamento Mp Rotator", "Modifica Mp Rotator"],
            mpRotatorSR: ["Mp rotatore 800", "Posizionamento Mp Rotator 800", "Modifica Mp Rotator 800"],
            mpRotatorStrip: ["Mp Rotatore Striscia", "Posizionamento di Mp Rotator Strip", "Modifica di Mp Rotator Strip"],
            bubbNHMS: ["Ugello gorgogliatore", "Posizionamento dell'ugello del gorgogliatore", "Modifica dell'ugello del gorgogliatore"],
            bubbNHPC: ["Ugello gorgogliatore", "Posizionamento dell'ugello del gorgogliatore", "Modifica dell'ugello del gorgogliatore"],
            bubbNHDS: ["Ugello gorgogliatore", "Posizionamento dell'ugello del gorgogliatore", "Modifica dell'ugello del gorgogliatore"],
            pdcAdj: ["Ugello regolabile PRO", "Posizionamento dell'ugello regolabile PRO", "Modifica dell'ugello regolabile PRO"],
            prosFixed: ["Ugello fisso Pro-Spray", "Posizionamento dell'ugello fisso Pro-Spray", "Modifica dell'ugello fisso Pro-Spray"],
            srNoz: ["Ugello a raggio corto", "Posizionamento dell'ugello a raggio corto", "Modifica dell'ugello a raggio corto"],
            streamNoz: ["Ugello flusso", "Posizionamento dell'ugello di flusso", "Modifica dell'ugello del flusso"],
            strPatNoz: ["Ugello con motivo a strisce", "Posizionamento degli ugelli con motivo a strisce", "Modifica dell'ugello del motivo a striscia"],
            bubbHPC: ["Gorgogliatore", "Posizionamento del gorgogliatore", "Modifica del gorgogliatore"],
            bubbHAF: ["Gorgogliatore", "Posizionamento del gorgogliatore", "Modifica del gorgogliatore"],
            bubbTB: ["Gorgogliatore", "Posizionamento del gorgogliatore", "Modifica del gorgogliatore"],
            bubbTBADJ: ["Gorgogliatore", "Posizionamento del gorgogliatore", "Modifica del gorgogliatore"],
            fnf: ["Ugello fisso", "Risolto il problema del posizionamento degli ugelli", "Risolto il problema con la modifica degli ugelli"],
            fnm: ["Ugello fisso", "Risolto il problema del posizionamento degli ugelli", "Risolto il problema con la modifica degli ugelli"],
            fnfstrip: ["Ugello con motivo a strisce", "Posizionamento degli ugelli con motivo a strisce", "Modifica dell'ugello del motivo a striscia"],
            fnmstrip: ["Ugello con motivo a strisce", "Posizionamento degli ugelli con motivo a strisce", "Modifica dell'ugello del motivo a striscia"],
            hekvf: ["Ugello HE-KVF", "Posizionamento ugelli HE-KVF", "Modifica dell'ugello HE-KVF"],
            kv: ["Ugello KV", "Posizionamento ugelli KV", "Modifica dell'ugello KV"],
            rn: ["RN", "Posizionamento RN", "Redazione RN"],
            rns: ["Striscia RN", "RN Posizionamento strisce", "Modifica della striscia RN"],
            rna: ["RN-ADJ", "Posizionamento RN-ADJ", "Modifica RN-ADJ"],
            "bubbRBPC": ["Gorgogliatore", "Posizionamento del gorgogliatore", "Modifica del gorgogliatore"],
            "bubbRBPCT": ["Gorgogliatore", "Posizionamento del gorgogliatore", "Modifica del gorgogliatore"],
            "bubbRBADJ": ["Gorgogliatore", "Posizionamento del gorgogliatore", "Modifica del gorgogliatore"],
            "bubbNMPR": ["Ugello gorgogliatore", "Posizionamento dell'ugello del gorgogliatore", "Modifica dell'ugello del gorgogliatore"],
            "bubbNMPRSt": ["Ugello gorgogliatore", "Posizionamento dell'ugello del gorgogliatore", "Modifica dell'ugello del gorgogliatore"],
            "hevan": ["Ugello HE-VAN", "Posizionamento ugelli HE-VAN", "Modifica degli ugelli HE-VAN"],
            "mprseries": ["Ugello serie MPR", "Posizionamento ugelli serie MPR", "Modifica degli ugelli della serie MPR"],
            "mprstseries": ["Ugello a striscia MPR", "Posizionamento dell'ugello a strisce MPR", "Modifica dell'ugello del modello a strisce MPR"],
            "rvan": ["R-VAN", "Posizionamento R-VAN", "Montaggio R-VAN"],
            "rvanStrip": ["Striscia R-VAN", "Posizionamento strisce R-VAN", "Modifica di strisce R-VAN"],
            "sqseries": ["Ugello quadrato serie SQ", "Piazzamento dell'ugello del modello quadrato di serie di SQ", "Modifica degli ugelli quadrati della serie SQ"],
            "useries": ["Ugello serie U", "Posizionamento ugelli serie U", "Modifica degli ugelli serie U"],
            "van": ["Ugello VAN", "Posizionamento ugelli VAN", "Modifica dell'ugello VAN"],
            "bubbToro500": ["Gorgogliatore", "Posizionamento del gorgogliatore", "Modifica del gorgogliatore"],
            "bubbToro500S": ["Gorgogliatore", "Posizionamento del gorgogliatore", "Modifica del gorgogliatore"],
            "bubbNozToroPC": ["Ugello gorgogliatore", "Posizionamento dell'ugello del gorgogliatore", "Modifica dell'ugello del gorgogliatore"],
            "bubbNozStreamToro": ["Ugello gorgogliatore", "Posizionamento dell'ugello del gorgogliatore", "Modifica dell'ugello del gorgogliatore"],
            "bubbNozStreamToroPC": ["Ugello gorgogliatore", "Posizionamento dell'ugello del gorgogliatore", "Modifica dell'ugello del gorgogliatore"],
            "bubbNozOppStreamToro": ["Ugello gorgogliatore", "Posizionamento dell'ugello del gorgogliatore", "Modifica dell'ugello del gorgogliatore"],
            "bubbNozOppStreamToroPC": ["Ugello gorgogliatore", "Posizionamento dell'ugello del gorgogliatore", "Modifica dell'ugello del gorgogliatore"],
            "toromprplus": ["Ugello serie MPR Plus", "Serie MPR Plus Posizionamento ugelli", "Modifica degli ugelli della serie MPR Plus"],
            "toromprplusStrip": ["Ugello serie MPR Plus", "Serie MPR Plus Posizionamento ugelli", "Modifica degli ugelli della serie MPR Plus"],
            "toromprplusPC": ["Ugello autocompensato serie MPR Plus", "Serie MPR Plus Posizionamento ugelli compensato in pressione", "Serie MPR Plus Modifica ugelli con compensazione della pressione"],
            "toromprplusPCStrip": ["Ugello autocompensato serie MPR Plus", "Serie MPR Plus Posizionamento ugelli compensato in pressione", "Serie MPR Plus Modifica ugelli con compensazione della pressione"],
            "precisionRotator": ["Ugello rotante serie Precision", "Posizionamento dell'ugello rotante serie Precision", "Modifica dell'ugello rotante della serie Precision"],
            "precisionRotatorF": ["Ugello rotante serie Precision", "Posizionamento dell'ugello rotante serie Precision", "Modifica dell'ugello rotante della serie Precision"],
            "precisionSpray": ["Ugello serie di precisione", "Posizionamento degli ugelli della serie Precision", "Modifica degli ugelli della serie di precisione"],
            "precisionSprayF": ["Ugello serie di precisione", "Posizionamento degli ugelli della serie Precision", "Modifica degli ugelli della serie di precisione"],
            "precisionSprayStrip": ["Ugello serie di precisione", "Posizionamento degli ugelli della serie Precision", "Modifica degli ugelli della serie di precisione"],
            "precisionSprayStripF": ["Ugello serie di precisione", "Posizionamento degli ugelli della serie Precision", "Modifica degli ugelli della serie di precisione"],
            "precisionSprayPC": ["Ugello con compensazione della pressione serie Precision", "Posizionamento degli ugelli con compensazione della pressione della serie Precision", "Modifica dell'ugello con compensazione della pressione della serie Precision"],
            "precisionSprayPCF": ["Ugello con compensazione della pressione serie Precision", "Posizionamento degli ugelli con compensazione della pressione della serie Precision", "Modifica dell'ugello con compensazione della pressione della serie Precision"],
            "precisionSprayPCStrip": ["Ugello con compensazione della pressione serie Precision", "Posizionamento degli ugelli con compensazione della pressione della serie Precision", "Modifica dell'ugello con compensazione della pressione della serie Precision"],
            "precisionSprayPCStripF": ["Ugello con compensazione della pressione serie Precision", "Posizionamento degli ugelli con compensazione della pressione della serie Precision", "Modifica dell'ugello con compensazione della pressione della serie Precision"],
            "tvantoro": ["Ugello serie TVAN", "Posizionamento ugelli serie TVAN", "Modifica degli ugelli della serie TVAN"],
            "streamSprayNozToro": ["Ugello a getto d'acqua", "Posizionamento dell'ugello a getto d'acqua", "Stream Spray Nozzle editing"],
            "streamSprayNozToroPC": ["Ugello a getto d'acqua", "Posizionamento dell'ugello a getto d'acqua", "Stream Spray Nozzle editing"],
            "bubbWM": ["Gorgogliatore", "Posizionamento del gorgogliatore", "Modifica del gorgogliatore"],
            "bubbWMADJ": ["Gorgogliatore", "Posizionamento del gorgogliatore", "Modifica del gorgogliatore"],
            "maxaan": ["Ugello MAXAAN", "MAXAAN Posizionamento degli ugelli", "MAXAAN Modifica degli ugelli"],
            "maxmpr": ["Ugello MAXMPR", "MAXMPR Posizionamento ugelli", "Modifica dell'ugello MAXMPR"],
            "maxmprst": ["Ugello a striscia MAXMPR", "Posizionamento dell'ugello a striscia MAXMPR", "Modifica dell'ugello a strisce MAXMPR"],
            "maxmprstream": ["Ugello gorgogliatore flusso MAXMPR", "MAXMPR Stream Bubbler Posizionamento dell'ugello", "MAXMPR Stream Bubbler Nozzle editing"],
            "maxmprststream": ["Ugello gorgogliatore flusso MAXMPR", "MAXMPR Stream Bubbler Posizionamento dell'ugello", "MAXMPR Stream Bubbler Nozzle editing"],
            "bseries": ["Ugello serie B", "Posizionamento ugelli serie B", "Modifica ugelli serie B"],
            "bseriesst": ["Ugello a striscia serie B", "Posizionamento di ugelli a nastro serie B", "Modifica di ugelli a strisce serie B"],
            "trench": ["Trincea", "Trincee", "Modifica della trincea"],
            "v": ["Collettore valvole", "Posizionamento del collettore di valvole", "Modifica del collettore di valvole"],
            "ws": ["Sorgente d'acqua", "Posizionamento della fonte d'acqua", "Modifica della fonte d'acqua"],
            "lp": ["Tubo laterale", "Disegno tubo laterale", "Modifica tubo laterale"],
            "lpPVC": ["Tubo laterale", "Disegno tubo laterale", "Modifica tubo laterale"],
            "mp": ["Tubo principale", "Disegno del tubo principale", "Modifica della pipa principale"],
            "mpPVC": ["Tubo principale", "Disegno del tubo principale", "Modifica della pipa principale"],
            "compass": ["Bussola", "Impostazione della Bussola", "Modifica della Bussola"],
            "loCurve": ["Linea", "Disegno della Linea", "Modifica della Linea"],
            "lsz": ["Dimensione", "Disegno della Dimensione", "Modifica della Dimensione"],
            "text": ["Testo", "Disegno del Testo", "Modifica del Testo"],
            "ldtext": ["Testo", "Impostazione del Testo", "Modifica del Testo"],
            "staticText": ["Testo", "Impostazione del Testo", "Modifica del Testo"],
            "dynamicText": ["Testo", "Impostazione del Testo", "Modifica del Testo"],
            "lotable": ["Tabella", "Impostazione della Tabella", "Modifica della Tabella"],
            "stampText": ["Timbro", "Impostazione del Testo del Timbro", "Modifica del Testo del Timbro"],
            "sb": ["Barra delle Dimensioni", "Disegno della Barra delle Dimensioni", "Modifica della Barra delle Dimensioni"]
        },
        vars: {
            sp: "Spruzzatore",
            ld: "Paesaggio",
            mixed_sp_lo: "Irrigatore/Disposizione",
            mixed_sp_lo2: "Sprinkler/Layout 2",
            mixed_ld_lo: "Orizzontale/Layout",
            hw: "Hydrawise",
            lo: "Disposizione",
            loPM: "Precipitazione",
            doIrrigate: "Zona irrigata",
            doNotIrrigate: "Zona NON irrigua",
            stdSurf: "Standard",
            fineCut: "Prato ben tagliato",
            raw: "Calcestruzzo grezzo",
            soft: "Sabbia soffice",
            flowerBedMix1: "Miscela di fiori 1",
            flowerBedMix2: "Miscela di fiori 2",
            flowerBedMix3: "Miscela di fiori 3",
            flowerBedWhite: "Aiuola bianca",
            flowerBedBlue: "Aiuola blu",
            flowerBedYellow: "Aiuola gialla",
            flowerBedRed: "Aiuola rossa",
            flowerBedMalina: "Aiuola cremisi",
            flowerBedOrange: "Aiuola arancione",
            flowerBedDarkBlue: "Aiuola blu scuro",
            flowerBedViolet: "Aiuola viola",
            flowerBedDarkViolet: "Aiuola viola scuro",
            herbalBed1: "letto di erbe 1",
            herbalBed2: "letto di erbe 2",
            mulch: "Pacciame",
            gravel: "Ghiaia",
            shrubs: "arbusti 1",
            pavementFill: "Pavimentazione 1",
            pavementContour: "Pavimentazione 2",
            pavement3: "Pavimentazione 3",
            pavement01_A: "Tetri 1",
            pavement01_B: "Tetri 2",
            pavement01_C: "Tetri 3",
            pavement02_A: "Diagonale 1",
            pavement02_B: "Diagonale 2",
            pavement03_A: "Selvaggio 1",
            pavement03_B: "Selvaggio 2",
            pavement04_Red_L: "Luce rossa a nido d'ape",
            pavement04_Red_D: "Rosso scuro a nido d'ape",
            pavement04_Green_L: "Luce verde a nido d'ape",
            pavement04_Green_D: "Verde scuro a nido d'ape",
            pavement04_Blue_L: "Luce blu a nido d'ape",
            pavement04_Blue_D: "A nido d'ape blu scuro",
            pool: "Piscina",
            lo_stdDynCurve: "Dinamico",
            lo_stdCurve: "Standard",
            stdCurve: "Standard",
            markCurve: "Indicatore rosso",
            pathCurve: "Sentiero",
            pillarCurve: "Pilastro",
            fenceCurve: "Recinzione",
            test00: "Prova 00",
            test01: "Prova 01",
            test02: "Prova 02",
            test03: "Prova 03",
            test04: "Prova 04",
            test05: "Prova 05",
            test06: "Prova 06",
            saf01: "Pietra 1",
            saf02: "Pietra 2",
            saf03: "Pietra 3",
            saf04: "Pietra 4",
            saf05: "Pietra 5",
            saf06: "Pietra 6",
            saf07: "Pietra 7",
            saf08: "Banco 1",
            saf09: "Banco 2",
            saf10: "Mobili 1",
            saf11: "Mobili 2",
            saf12: "Auto 1",
            saf13: "Auto 2",
            saf14: "Scivolo per bambini 1",
            saf14_0: "Scivolo per bambini 2",
            saf14_L: "Scivolo per bambini 3",
            saf14_R: "Scivolo per bambini 4",
            saf15: "Baldacchino oscillante",
            saf16: "Lettino 1",
            saf17: "Lettino 2",
            saf18: "Luce 1",
            saf19: "Luce 2",
            saf20: "Cascata",
            saf21: "Specchio d'acqua 1",
            saf22: "Specchio d'acqua 2",
            saf23: "Tombino 1",
            saf24: "tombino 2",
            bush01: "Cespuglio",
            bush02: "Cespuglio",
            bush03: "Cespuglio",
            bush04: "Cespuglio",
            bush05: "Cespuglio",
            bush06: "Cespuglio",
            bush07: "Cespuglio",
            bush08: "Cespuglio",
            bush09: "Cespuglio",
            bush10: "Cespuglio",
            bush11: "Cespuglio",
            bush12: "Cespuglio",
            bush13: "Cespuglio",
            tree00: "Albero da frutta",
            tree01: "Albero",
            tree02: "Albero",
            tree03: "Albero",
            tree04: "Albero",
            tree05: "Albero",
            tree06: "Albero",
            tree07: "Albero",
            tree08: "Albero",
            tree09: "Albero",
            tree10: "Albero",
            tree11: "Albero",
            tree12: "Albero",
            tree13: "Albero",
            tree14: "Albero",
            tree15: "Albero",
            tree16: "Albero",
            tree17: "Albero",
            stdRuler: "Standard",
            fixedCntr: "Numeri di zone fisse",
            stand_aloneCntr: "Controllore autonomo",
            modularCntr: "Controllore modulare",
            rainSensor: "Sensore di pioggia",
            soilSensor: "Sensore del suolo",
            freezeSensor: "Sensore di congelamento",
            wrFreezeSensor: "Sensore pioggia/gelo wireless",
            windSensor: "Sensore vento",
            solarSensor: "Sensore solare",
            flowSensor: "Sensore di flusso",
            weatherStation: "Stazione metereologica",
            controlWire: "Filo di controllo",
            sensorWire: "Filo del sensore",
            wirelessWire: "Connessione senza fili",
            dS16: "Gocciolamento inizio 16mm",
            dS17: "Gocciolamento inizio 17mm",
            qcPlastic: "Valvola ad innesto rapido in plastica",
            qcMetal: "Valvola metallica ad innesto rapido",
            hdpePE80SDR11: "HDPE PE80 SDR 11",
            hdpePE80SDR136: "HDPE PE80 SDR 13.6",
            hdpePE80SDR176: "HDPE PE80 SDR 17.6",
            hdpePE100SDR11: "HDPE PE100 SDR 11",
            hdpePE100SDR136: "HDPE PE100 SDR 13.6",
            hdpePE100SDR176: "HDPE PE100 SDR 17.6",
            hdpeSDR9: "HDPE DSP 9",
            hdpeSDR11: "HDPE DSP 11",
            hdpeSDR136: "DSP HDPE 13.6",
            hdpeSDR17: "HDPE DSP 17",
            hdpeSDR176: "DSP HDPE 17,6",
            pvcSCH40: "PVC SCH 40",
            pvcSCH80: "PVC SCH 80",
            stdTrench: "Standard (40 cm) (eredità)",
            normalTrench: "Normale (L:10 cm P:50 cm)",
            narrowTrench: "Stretto (L:5cm P:30cm) (scavacavi manuale)",
            wideTrench: "Largo (L:30cm P:60cm) (Miniescavatore)",
            multi: "Scatola valvole",
            source: "Sorgente d'acqua",
            empty: "Vuoto",
            frame: "Telaio",
            gostDefault: "GOST 21.101-97 (primo)",
            gostSmall: "GOST 21.101-97 (Riposo)",
            a4hor: "A4 Orizzontale",
            a4vert: "A4 Verticale",
            a3hor: "A3 Orizzontale",
            a3vert: "A3 Verticale",
            a2hor: "A2 Orizzontale",
            a2vert: "A2 Verticale",
            a1hor: "A1 Orizzontale",
            a1vert: "A1 Verticale",
            a0hor: "A0 Orizzontale",
            a0vert: "A0 Verticale",
            stdCompass: "Bussola",
            gostSize: "Dimensioni GOST",
            landscp: "Tavolo orizzontale",
            conv: "Tabella dei simboli",
            convAll: "Tabella dei simboli (All)",
            zoneT: "Tabella delle zone",
            sprinkZoneTimeT: "Tempo di aspersione della zona",
            sprinkT: "Tavolo degli irrigatori",
            dripT: "Tabella delle linee di gocciolamento",
            insItemT: "Tabella inserti (per elementi)",
            insVarDiamT: "Tabella inserti (per materiale e diametri)",
            insDiamT: "Tabella inserti (per diametri)",
            insVarT: "Tabella inserti (per materiale)",
            staticText: "Testo",
            dynamicText: "Testo",
            stampTextDef: "Testo del timbro",
            sbStdMetric: "Barra di scalatura media (metrico)",
            sbMinMetric: "Mini (metrico)",
            sbExtMetric: "Esteso (metrico)",
            sbStdImperial: "Barra di ridimensionamento media (imperiale)",
            sbMinImperial: "Mini (imperiale)",
            sbExtImperial: "Esteso (Imperiale)",
            gentleMicroClimate: "Blando",
            normalMicroClimate: "Normale",
            toughMicroClimate: "Duro",
            sand: "sabbioso",
            sandyLoam: "terreno sabbioso",
            lightLoam: "Terriccio leggero",
            mediumLoam: "Terriccio medio",
            heavyLoam: "Terriccio pesante",
            clay: "Argilla",
            heavyClay: "Argilla pesante",
            noneIncline: "0-5% (0-3°)",
            lightIncline: "5-8% (3-5°)",
            mediumIncline: "8-12% (5-7°)",
            hugeIncline: "12% (7°)"
        },
        misc: {
            fixedCntrSubText: "FISSO",
            standAloneCntrSubText: "S.A",
            modularCntrSubText: "MOD."
        },
        placeholders: {
            rotorType: ["{{brand}} {{series}} rotor", "{{brand}} {{series}} rotor placing", "{{brand}} {{series}} rotor editing"]
        }
    };
})(this);
