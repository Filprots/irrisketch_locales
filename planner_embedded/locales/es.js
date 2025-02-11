(function (p) {
    if (window.paperLocale !== "es") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Superficie", "Dibujo de superficie", "Edición de superficies"],
            brushLawn: ["Césped", "Dibujo de césped", "edición de césped"],
            brushIrrigateMarks: ["Special marker", "Special marker drawing", "Special marker editing"],
            brushConcrete: ["Concreto", "dibujo concreto", "Edición concreta"],
            brushSand: ["Arena", "dibujo de arena", "Edición de arena"],
            brushBed: ["Cama", "Dibujo de cama", "Edición de cama"],
            brushBedding: ["Lecho", "Dibujo de ropa de cama", "Edición de ropa de cama"],
            brushShrubs: ["Arbustos", "Dibujo de arbustos", "Edición de arbustos"],
            brushPath: ["Camino", "dibujo de ruta", "Edición de ruta"],
            brushWater: ["Agua", "Dibujo de agua", "Edición de agua"],
            curve: ["Curva", "Dibujo de curvas", "Edición de curvas"],
            bush: ["Arbusto", "plantar un arbusto", "Arbusto de edición"],
            saf: ["Pequeñas Formas Arquitectónicas", "Dibujo seguro", "Edición segura"],
            tree: ["Árbol", "plantando un arbol", "Edición de árboles"],
            polySurface: ["Superficie", "Dibujo de superficie", "Edición de superficies"],
            polyLawn: ["Césped", "Dibujo de césped", "edición de césped"],
            polyIrrigateMarks: ["Special marker", "Special marker drawing", "Special marker editing"],
            polyConcrete: ["Concreto", "dibujo concreto", "Edición concreta"],
            polySand: ["Arena", "dibujo de arena", "Edición de arena"],
            polyBed: ["Cama", "Dibujo de cama", "Edición de cama"],
            polyBedding: ["Lecho", "Dibujo de ropa de cama", "Edición de ropa de cama"],
            polyShrubs: ["Arbustos", "Dibujo de arbustos", "Edición de arbustos"],
            polyPath: ["Camino", "dibujo de ruta", "Edición de ruta"],
            polyWater: ["Agua", "Dibujo de agua", "Edición de agua"],
            ruler: ["Regla", "Regla", "Regla"],
            cntr: ["Controlador", "Dibujo del controlador", "Edición de controlador"],
            sens: ["Sensor", "Dibujo de sensores", "Edición de sensores"],
            wr: ["Cable de control", "Trefilado de cables de control", "Edición de cables de control"],
            swr: ["Cable sensor", "Trefilado de sensores", "Edición de cables de sensores"],
            dl16: ["Línea de goteo 16/13mm", "Dibujo de línea de goteo de 16/13mm", "Edición de línea de goteo de 16/13mm"],
            ds16: ["Goteo inicio 16/13mm", "Dibujo de 16/13mm de inicio por goteo", "Edición de inicio por goteo de 16/13mm"],
            dl17: ["Línea de goteo 17mm", "Dibujo de línea de goteo de 17 mm", "Edición de línea de goteo de 17 mm"],
            ds17: ["Goteo inicio 17mm", "Dibujo de 17 mm de inicio por goteo", "Edición de inicio por goteo de 17 mm"],
            rzw: ["Riego de la zona radicular", "Dibujo de la unidad de riego de la zona de la raíz", "Edición de la unidad de riego de la zona de raíces"],
            qc: ["Válvula de acoplamiento rápido", "Colocación de válvula de acoplamiento rápido", "Edición de válvulas de acoplamiento rápido"],
            inset: ["Manguito de tubería", "Dibujar manguitos de tubería", "Edición de manga de tubería"],
            mpRotator: ["MP rotador", "Colocación de Mp Rotator", "Edición de MP Rotator"],
            mpRotatorSR: ["MP Rotator 800", "Colocación de Mp Rotator 800", "edicion mp rotator 800"],
            mpRotatorStrip: ["Tira rotatoria MP", "Colocación de tira de rotador Mp", "Edición de tira de rotador de mp"],
            bubbNHMS: ["Boquilla burbujeadora", "Colocación de la boquilla del burbujeador", "Edición de boquillas de burbujeo"],
            bubbNHPC: ["Boquilla burbujeadora", "Colocación de la boquilla del burbujeador", "Edición de boquillas de burbujeo"],
            bubbNHDS: ["Boquilla burbujeadora", "Colocación de la boquilla del burbujeador", "Edición de boquillas de burbujeo"],
            pdcAdj: ["Boquilla regulable PRO", "Colocación de Boquilla Ajustable PRO", "Edición de boquilla ajustable PRO"],
            proHE: ["Boquilla regulable PRO-HE", "Colocación de Boquilla Ajustable PRO-HE", "Edición de boquilla ajustable PRO-HE"],
            prosFixed: ["Boquilla Fija PRO", "Colocación de Boquilla Fija PRO", "Edición de boquilla fija PRO"],
            srNoz: ["Boquilla de radio corto", "Colocación de boquillas de radio corto", "Edición de boquilla de radio corto"],
            streamNoz: ["Boquilla de chorro", "Colocación de boquillas de chorro", "Edición de boquillas de chorro"],
            strPatNoz: ["Boquilla de patrón de franjas", "Colocación de la boquilla de patrón de franjas", "Edición de boquillas de patrón de franjas"],
            bubbHPC: ["burbujeador", "colocación de burbujeador", "Edición de burbujeo"],
            bubbHAF: ["burbujeador", "colocación de burbujeador", "Edición de burbujeo"],
            bubbTB: ["burbujeador", "colocación de burbujeador", "Edición de burbujeo"],
            bubbTBADJ: ["burbujeador", "colocación de burbujeador", "Edición de burbujeo"],
            fnf: ["Boquilla Fija", "Colocación de boquillas fijas", "Edición de boquilla fija"],
            fnm: ["Boquilla Fija", "Colocación de boquillas fijas", "Edición de boquilla fija"],
            fnfstrip: ["Boquilla de patrón de franjas", "Colocación de la boquilla de patrón de franjas", "Edición de boquillas de patrón de franjas"],
            fnmstrip: ["Boquilla de patrón de franjas", "Colocación de la boquilla de patrón de franjas", "Edición de boquillas de patrón de franjas"],
            hekvf: ["Boquilla HE-KVF", "HE-KVF Colocación de boquillas", "Edición de boquillas HE-KVF"],
            kv: ["Boquilla KV", "Colocación de boquillas KV", "Edición de boquillas KV"],
            rn: ["enfermero", "colocación de RN", "edición de RN"],
            rns: ["Tira RN", "Colocación de tiras RN", "Edición de tiras RN"],
            rna: ["RN-ADJ", "Colocación de RN-ADJ", "Edición RN-ADJ"],
            "bubbRBPC": ["burbujeador", "colocación de burbujeador", "Edición de burbujeo"],
            "bubbRBPCT": ["burbujeador", "colocación de burbujeador", "Edición de burbujeo"],
            "bubbRBADJ": ["burbujeador", "colocación de burbujeador", "Edición de burbujeo"],
            "bubbNMPR": ["Boquilla burbujeadora", "Colocación de la boquilla del burbujeador", "Edición de boquillas de burbujeo"],
            "bubbNMPRSt": ["Boquilla burbujeadora", "Colocación de la boquilla del burbujeador", "Edición de boquillas de burbujeo"],
            "hevan": ["Boquilla HE-VAN", "HE-VAN Colocación de boquillas", "Edición de boquillas HE-VAN"],
            "mprseries": ["Boquilla serie MPR", "Colocación de boquillas de la serie MPR", "Edición de boquillas de la serie MPR"],
            "mprstseries": ["Boquilla de patrón de franjas MPR", "Colocación de boquillas de patrón de franjas MPR", "Edición de boquillas de patrón de franjas MPR"],
            "rvan": ["R-FURGONETA", "Colocación de R-VAN", "Edición R-VAN"],
            "rvanStrip": ["Franja R-VAN", "R-VAN Colocación de tiras", "Edición de tiras R-VAN"],
            "sqseries": ["Boquilla de patrón cuadrado serie SQ", "Colocación de la boquilla de patrón cuadrado de la serie SQ", "Edición de boquillas de patrón cuadrado de la serie SQ"],
            "useries": ["Boquilla serie U", "Colocación de boquillas serie U", "Edición de boquillas de la serie U"],
            "van": ["Boquilla FURGONETA", "Colocación de boquillas VAN", "Edición de boquillas VAN"],
            "bubbToro500": ["burbujeador", "colocación de burbujeador", "Edición de burbujeo"],
            "bubbToro500S": ["burbujeador", "colocación de burbujeador", "Edición de burbujeo"],
            "bubbNozToroPC": ["Boquilla burbujeadora", "Colocación de la boquilla del burbujeador", "Edición de boquillas de burbujeo"],
            "bubbNozStreamToro": ["Boquilla burbujeadora", "Colocación de la boquilla del burbujeador", "Edición de boquillas de burbujeo"],
            "bubbNozStreamToroPC": ["Boquilla burbujeadora", "Colocación de la boquilla del burbujeador", "Edición de boquillas de burbujeo"],
            "bubbNozOppStreamToro": ["Boquilla burbujeadora", "Colocación de la boquilla del burbujeador", "Edición de boquillas de burbujeo"],
            "bubbNozOppStreamToroPC": ["Boquilla burbujeadora", "Colocación de la boquilla del burbujeador", "Edición de boquillas de burbujeo"],
            "toromprplus": ["Boquilla serie MPR Plus", "Colocación de boquillas Serie MPR Plus", "Edición de boquillas de la serie MPR Plus"],
            "toromprplusStrip": ["Boquilla serie MPR Plus", "Colocación de boquillas Serie MPR Plus", "Edición de boquillas de la serie MPR Plus"],
            "toromprplusPC": ["Boquilla de presión compensada serie MPR Plus", "Colocación de boquillas de presión compensada serie MPR Plus", "Edición de boquillas con compensación de presión de la serie MPR Plus"],
            "toromprplusPCStrip": ["Boquilla de presión compensada serie MPR Plus", "Colocación de boquillas de presión compensada serie MPR Plus", "Edición de boquillas con compensación de presión de la serie MPR Plus"],
            "precisionRotator": ["Boquilla giratoria serie Precision", "Colocación de boquillas giratorias de la serie Precision", "Edición de boquillas giratorias de la serie Precision"],
            "precisionRotatorF": ["Boquilla giratoria serie Precision", "Colocación de boquillas giratorias de la serie Precision", "Edición de boquillas giratorias de la serie Precision"],
            "precisionSpray": ["Boquilla de la serie de precisión", "Colocación de boquillas serie Precision", "Edición de boquillas de la serie Precision"],
            "precisionSprayF": ["Boquilla de la serie de precisión", "Colocación de boquillas serie Precision", "Edición de boquillas de la serie Precision"],
            "precisionSprayStrip": ["Boquilla de la serie de precisión", "Colocación de boquillas serie Precision", "Edición de boquillas de la serie Precision"],
            "precisionSprayStripF": ["Boquilla de la serie de precisión", "Colocación de boquillas serie Precision", "Edición de boquillas de la serie Precision"],
            "precisionSprayPC": ["Boquilla de presión compensada serie Precision", "Colocación de boquillas con compensación de presión de la serie Precision", "Edición de boquillas con compensación de presión de la serie Precision"],
            "precisionSprayPCF": ["Boquilla de presión compensada serie Precision", "Colocación de boquillas con compensación de presión de la serie Precision", "Edición de boquillas con compensación de presión de la serie Precision"],
            "precisionSprayPCStrip": ["Boquilla de presión compensada serie Precision", "Colocación de boquillas con compensación de presión de la serie Precision", "Edición de boquillas con compensación de presión de la serie Precision"],
            "precisionSprayPCStripF": ["Boquilla de presión compensada serie Precision", "Colocación de boquillas con compensación de presión de la serie Precision", "Edición de boquillas con compensación de presión de la serie Precision"],
            "tvantoro": ["Boquilla Serie TVAN", "Serie TVAN Colocación de boquillas", "Edición de boquillas de la serie TVAN"],
            "streamSprayNozToro": ["Boquilla de pulverización de chorro", "Colocación de la boquilla de pulverización de chorro", "Edición de boquillas de pulverización de chorro"],
            "streamSprayNozToroPC": ["Boquilla de pulverización de chorro", "Colocación de la boquilla de pulverización de chorro", "Edición de boquillas de pulverización de chorro"],
            "bubbWM": ["burbujeador", "colocación de burbujeador", "Edición de burbujeo"],
            "bubbWMADJ": ["burbujeador", "colocación de burbujeador", "Edición de burbujeo"],
            "maxaan": ["Boquilla MAXAAN", "Colocación de boquillas MAXAAN", "Edición de boquillas MAXAAN"],
            "maxmpr": ["Boquilla MAXMPR", "Colocación de boquillas MAXMPR", "Edición de boquillas MAXMPR"],
            "maxmprst": ["Boquilla de tira MAXMPR", "Colocación de la boquilla de tira MAXMPR", "Edición de boquilla de tira MAXMPR"],
            "maxmprstream": ["Boquilla de chorro de agua MAXMPR", "Colocación de la boquilla del burbujeador MAXMPR Stream", "Edición de boquillas MAXMPR Stream Bubbler"],
            "maxmprststream": ["Boquilla de chorro de agua MAXMPR", "Colocación de la boquilla del burbujeador MAXMPR Stream", "Edición de boquillas MAXMPR Stream Bubbler"],
            "bseries": ["Boquilla Serie B", "Colocación de boquillas Serie B", "Edición de boquillas de la serie B"],
            "bseriesst": ["Boquilla de tira serie B", "Colocación de la boquilla de tira Serie B", "Edición de la boquilla de tira de la serie B"],
            "trench": ["Zanja", "Zanja", "Edición de trincheras"],
            "v": ["Colector de válvulas", "Colocación de colectores de válvulas", "Edición de colectores de válvulas"],
            "ws": ["Fuente de agua", "Colocación de fuente de agua", "Edición de fuente de agua"],
            "lp": ["tubería lateral", "Dibujo de tubería lateral", "Edición de tubería lateral"],
            "lpPVC": ["tubería lateral", "Dibujo de tubería lateral", "Edición de tubería lateral"],
            "mp": ["Tubo principal", "Dibujo de tubería principal", "Edición de tubería principal"],
            "mpPVC": ["Tubo principal", "Dibujo de tubería principal", "Edición de tubería principal"],
            "compass": ["Brújula", "Configuración de Brújula", "Edición de Brújula"],
            "loCurve": ["Línea", "Dibujando Línea", "Edición de Línea"],
            "lsz": ["Tamaño", "Dibujando Tamaño", "Edición de Tamaño"],
            "text": ["Texto", "Dibujando Texto", "Edición de Texto"],
            "ldtext": ["Texto", "Configuración de Texto", "Edición de Texto"],
            "staticText": ["Texto", "Configuración de Texto", "Edición de Texto"],
            "dynamicText": ["Texto", "Configuración de Texto", "Edición de Texto"],
            "lotable": ["Tabla", "Configuración de Tabla", "Edición de Tabla"],
            "stampText": ["Sello", "Configuración de Texto de Sello", "Edición de Texto de Sello"],
            "sb": ["Barra de Escala", "Dibujando Barra de Escala", "Edición de Barra de Escala"]
        },
        vars: {
            sp: "Aspersor",
            ld: "Paisaje",
            mixed_sp_lo: "Rociador/Disposición",
            mixed_sp_lo2: "Sprinkler/Layout 2",
            mixed_ld_lo: "Paisaje/Diseño",
            hw: "Hidrasabia",
            lo: "Disposición",
            loPM: "Precipitación",
            doIrrigate: "zona regada",
            doNotIrrigate: "Zona NO Riego",
            obstacles: "Obstáculos para la irrigación",
            placementObstacles: "Obstáculos para el emplazamiento",
            stdSurf: "Estándar",
            fineCut: "Césped de corte fino",
            raw: "hormigón en bruto",
            soft: "Arena suave",
            flowerBedMix1: "Mezcla de flores 1",
            flowerBedMix2: "Mezcla de flores 2",
            flowerBedMix3: "Mezcla de flores 3",
            flowerBedWhite: "macizo de flores blanco",
            flowerBedBlue: "macizo de flores azul",
            flowerBedYellow: "macizo de flores amarillo",
            flowerBedRed: "macizo de flores rojo",
            flowerBedMalina: "macizo de flores carmesí",
            flowerBedOrange: "macizo de flores naranja",
            flowerBedDarkBlue: "Macizo de flores azul oscuro",
            flowerBedViolet: "macizo de flores violeta",
            flowerBedDarkViolet: "Macizo de flores violeta oscuro",
            herbalBed1: "cama de hierbas 1",
            herbalBed2: "cama de hierbas 2",
            mulch: "Mantillo",
            gravel: "Grava",
            shrubs: "Arbustos 1",
            pavementFill: "Pavimento 1",
            pavementContour: "Pavimento 2",
            pavement3: "Pavimento 3",
            pavement01_A: "tetris 1",
            pavement01_B: "tetris 2",
            pavement01_C: "tetris 3",
            pavement02_A: "Diagonal 1",
            pavement02_B: "Diagonal 2",
            pavement03_A: "Salvaje 1",
            pavement03_B: "salvaje 2",
            pavement04_Red_L: "Luz roja de panal",
            pavement04_Red_D: "Panal Rojo Oscuro",
            pavement04_Green_L: "Luz verde panal",
            pavement04_Green_D: "Panal Verde Oscuro",
            pavement04_Blue_L: "Luz azul panal",
            pavement04_Blue_D: "Panal Azul Oscuro",
            pool: "Piscina",
            lo_stdDynCurve: "Dinámica",
            lo_stdCurve: "Estándar",
            stdCurve: "Estándar",
            markCurve: "marcador rojo",
            pathCurve: "Camino",
            pillarCurve: "Pilar",
            fenceCurve: "Cerrar",
            test00: "Prueba 00",
            test01: "Prueba 01",
            test02: "Prueba 02",
            test03: "Prueba 03",
            test04: "Prueba 04",
            test05: "Prueba 05",
            test06: "Prueba 06",
            saf01: "Piedra 1",
            saf02: "piedra 2",
            saf03: "piedra 3",
            saf04: "Piedra 4",
            saf05: "Piedra 5",
            saf06: "Piedra 6",
            saf07: "piedra 7",
            saf08: "Banco 1",
            saf09: "Banco 2",
            saf10: "muebles 1",
            saf11: "muebles 2",
            saf12: "Coche 1",
            saf13: "coche 2",
            saf14: "Tobogán para niños 1",
            saf14_0: "Tobogán infantil 2",
            saf14_L: "Tobogán para niños 3",
            saf14_R: "Tobogán para niños 4",
            saf15: "Toldo abatible",
            saf16: "Tumbona 1",
            saf17: "tumbona 2",
            saf18: "Luz 1",
            saf19: "Luz 2",
            saf20: "Cascada",
            saf21: "Cuerpo de agua 1",
            saf22: "Cuerpo de agua 2",
            saf23: "Boca de inspección 1",
            saf24: "boca de acceso 2",
            bush01: "Arbusto",
            bush02: "Arbusto",
            bush03: "Arbusto",
            bush04: "Arbusto",
            bush05: "Arbusto",
            bush06: "Arbusto",
            bush07: "Arbusto",
            bush08: "Arbusto",
            bush09: "Arbusto",
            bush10: "Arbusto",
            bush11: "Arbusto",
            bush12: "Arbusto",
            bush13: "Arbusto",
            tree00: "Árbol de frutas",
            tree01: "Árbol",
            tree02: "Árbol",
            tree03: "Árbol",
            tree04: "Árbol",
            tree05: "Árbol",
            tree06: "Árbol",
            tree07: "Árbol",
            tree08: "Árbol",
            tree09: "Árbol",
            tree10: "Árbol",
            tree11: "Árbol",
            tree12: "Árbol",
            tree13: "Árbol",
            tree14: "Árbol",
            tree15: "Árbol",
            tree16: "Árbol",
            tree17: "Árbol",
            stdRuler: "Estándar",
            fixedCntr: "Números de zonas fijas",
            stand_aloneCntr: "Controlador independiente",
            modularCntr: "Controlador modular",
            rainSensor: "Sensor de lluvia",
            soilSensor: "sensor de humedad",
            freezeSensor: "Sensor de congelación",
            wrFreezeSensor: "Sensor inalámbrico de lluvia/heladas",
            windSensor: "sensor de viento",
            solarSensor: "sensor solar",
            flowSensor: "Sensor de flujo",
            weatherStation: "Estación meteorológica",
            controlWire: "Cable de control",
            wirelessControl: "Control inalámbrico",
            sensorWire: "Cable sensor",
            wirelessSensor: "Conexión inalámbrica de sensores",
            wirelessWire: "Conexión inalámbrica",
            dS16: "Goteo inicio 16/13mm",
            dS17: "Goteo inicio 17mm",
            qcPlastic: "Válvula de acoplamiento rápido de plástico",
            qcMetal: "Válvula Metálica de Acoplamiento Rápido",
            hdpePE80SDR11: "HDPE PE80 DEG 11",
            hdpePE80SDR136: "HDPE PE80 DEG 13,6",
            hdpePE80SDR176: "HDPE PE80 DEG 17,6",
            hdpePE100SDR11: "HDPE PE100 DEG 11",
            hdpePE100SDR136: "HDPE PE100 DEG 13,6",
            hdpePE100SDR176: "HDPE PE100 DEG 17,6",
            hdpeSDR9: "HDPE DEG 9",
            hdpeSDR11: "HDPE DEG 11",
            hdpeSDR136: "HDPE DEG 13,6",
            hdpeSDR17: "HDPE DEG 17",
            hdpeSDR176: "HDPE DEG 17,6",
            pvcSCH40: "PVC SCH 40",
            pvcSCH80: "PVC CH 80",
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
            stdTrench: "Estándar (40 cm) (heredado)",
            normalTrench: "Normal (ancho: 10 cm profundidad: 50 cm)",
            narrowTrench: "Estrecho (W:5cm D:30cm) (zanjadora manual)",
            wideTrench: "Ancho (W:30cm D:60cm) (Miniexcavadora)",
            multi: "caja de valvulas",
            source: "Fuente de agua",
            empty: "Vacío",
            frame: "Marco",
            gostDefault: "Big Stamp",
            gostSmall: "Small Stamp",
            "a4hor": "A4 Horizontal",
            "a4vert": "A4 Vertical",
            "a3hor": "A3 Horizontal",
            "a3vert": "A3 Vertical",
            "a2hor": "A2 Horizontal",
            "a2vert": "A2 Vertical",
            "a1hor": "A1 Horizontal",
            "a1vert": "A1 Vertical",
            "a0hor": "A0 Horizontal",
            "a0vert": "A0 Vertical",
            "dind4hor": "DIN D4 Horizontal",
            "dind4vert": "DIN D4 Vertical",
            "dind3hor": "DIN D3 Horizontal",
            "dind3vert": "DIN D3 Vertical",
            "dind2hor": "DIN D2 Horizontal",
            "dind2vert": "DIN D2 Vertical",
            "dind1hor": "DIN D1 Horizontal",
            "dind1vert": "DIN D1 Vertical",
            "dind0hor": "DIN D0 Horizontal",
            "dind0vert": "DIN D0 Vertical",
            "ansiAhor": "ANSI A Horizontal",
            "ansiAvert": "ANSI A Vertical",
            "ansiBhor": "ANSI B Horizontal",
            "ansiBvert": "ANSI B Vertical",
            "ansiChor": "ANSI C Horizontal",
            "ansiCvert": "ANSI C Vertical",
            "ansiDhor": "ANSI D Horizontal",
            "ansiDvert": "ANSI D Vertical",
            "ansiEhor": "ANSI E Horizontal",
            "ansiEvert": "ANSI E Vertical",
            "archAhor": "Arch A Horizontal",
            "archAvert": "Arch A Vertical",
            "archBhor": "Arch B Horizontal",
            "archBvert": "Arch B Vertical",
            "archChor": "Arch C Horizontal",
            "archCvert": "Arch C Vertical",
            "archDhor": "Arch D Horizontal",
            "archDvert": "Arch D Vertical",
            "archEhor": "Arch E Horizontal",
            "archEvert": "Arch E Vertical",
            "archE1hor": "Arch E1 Horizontal",
            "archE1vert": "Arch E1 Vertical",
            "archE2hor": "Arch E2 Horizontal",
            "archE2vert": "Arch E2 Vertical",
            "archE3hor": "Arch E3 Horizontal",
            stdCompass: "Brújula",
            gostSize: "Tamaño",
            landscp: "Mesa paisaje",
            conv: "Tabla de símbolos",
            convAll: "Tabla de símbolos (All)",
            zoneT: "Tabla de zonas",
            sprinkZoneTimeT: "Tiempo de riego por zona",
            sprinkT: "Mesa de aspersores",
            sprinkT2: "Mesa de aspersores",
            dripT: "Tabla de líneas de goteo",
            insItemT: "Tabla de insertos (por artículos)",
            insVarDiamT: "Tabla de Insertos (Por Material y Diámetros)",
            insDiamT: "Tabla de Insertos (Por Diámetros)",
            insVarT: "Tabla de insertos (por material)",
            staticText: "Texto",
            dynamicText: "Texto",
            stampTextDef: "texto del sello",
            sbStdMetric: "Barra de escala media (métrica)",
            sbMinMetric: "Mini (métrico)",
            sbExtMetric: "Extendido (métrico)",
            sbStdImperial: "Barra de escala media (Imperial)",
            sbMinImperial: "Mini (Imperial)",
            sbExtImperial: "Extendido (Imperial)",
            gentleMicroClimate: "Leve",
            normalMicroClimate: "Normal",
            toughMicroClimate: "Duro",
            sand: "Arenoso",
            sandyLoam: "franco arenoso",
            lightLoam: "Franco ligero",
            mediumLoam: "Franco medio",
            heavyLoam: "marga pesada",
            clay: "Arcilla",
            heavyClay: "arcilla pesada",
            noneIncline: "0-5% (0-3°)",
            lightIncline: "5-8% (3-5°)",
            mediumIncline: "8-12% (5-7°)",
            hugeIncline: "12% (7°)"
        },
        misc: {
            fixedCntrSubText: "FIJADO",
            standAloneCntrSubText: "SA",
            modularCntrSubText: "MODIFICACIÓN."
        },
        placeholders: {
            rotorType: ["{{brand}} {{series}} rotor", "{{brand}} {{series}} rotor placing", "{{brand}} {{series}} rotor editing"]
        }
    };
})(this);
