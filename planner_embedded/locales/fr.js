(function (p) {
    if (window.paperLocale !== "fr") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Surface", "Dessin de surfaces", "Édition de surface"],
            brushLawn: ["Pelouse", "Dessin de pelouse", "Édition de pelouse"],
            brushConcrete: ["Béton", "Dessin concret", "Montage concret"],
            brushSand: ["Sable", "Dessin au sable", "Édition de sable"],
            brushBed: ["Lit", "Dessin de lit", "Édition de lit"],
            brushBedding: ["Literie", "Dessin de literie", "Édition de literie"],
            brushShrubs: ["Arbustes", "Dessin d'arbustes", "Édition des arbustes"],
            brushPath: ["Chemin", "Dessin de chemin", "Modification du chemin"],
            brushWater: ["Eau", "Dessin à l'eau", "Édition de l'eau"],
            curve: ["Courbe", "Dessin de courbe", "Édition de courbe"],
            bush: ["Buisson", "Planter un buisson", "Bush d'édition"],
            saf: ["Petites formes architecturales", "Dessin sûr", "Édition sûre"],
            tree: ["Arbre", "Planter un arbre", "Modification des arbres"],
            polySurface: ["Surface", "Dessin de surfaces", "Édition de surface"],
            polyLawn: ["Pelouse", "Dessin de pelouse", "Édition de pelouse"],
            polyConcrete: ["Béton", "Dessin concret", "Montage concret"],
            polySand: ["Sable", "Dessin au sable", "Édition de sable"],
            polyBed: ["Lit", "Dessin de lit", "Édition de lit"],
            polyBedding: ["Literie", "Dessin de literie", "Édition de literie"],
            polyShrubs: ["Arbustes", "Dessin d'arbustes", "Édition des arbustes"],
            polyPath: ["Chemin", "Dessin de chemin", "Modification du chemin"],
            polyWater: ["Eau", "Dessin à l'eau", "Édition de l'eau"],
            ruler: ["Règle", "Règle", "Règle"],
            cntr: ["Manette", "Dessin du contrôleur", "Édition du contrôleur"],
            sens: ["Capteur", "Dessin du capteur", "Modification du capteur"],
            wr: ["Fil de contrôle", "Contrôler le tréfilage", "Contrôler l'édition des fils"],
            swr: ["Fil de capteur", "Dessin de fil de capteur", "Modification du fil du capteur"],
            dl16: ["Goutte à goutte 16mm", "Dessin goutte à goutte 16mm", "Montage goutte à goutte 16mm"],
            ds16: ["Goutte à goutte 16mm", "Dessin goutte à goutte 16mm", "Montage goutte à goutte 16mm"],
            dl17: ["Goutte à goutte 17mm", "Dessin goutte à goutte 17mm", "Montage goutte à goutte 17mm"],
            ds17: ["Goutte à goutte 17mm", "Dessin goutte à goutte 17mm", "Montage goutte à goutte 17mm"],
            rzw: ["Arrosage de la zone racinaire", "Dessin de l'unité d'arrosage de la zone racinaire", "Modification de l'unité d'arrosage de la zone racinaire"],
            qc: ["Vanne à raccord rapide", "Placement de la vanne à couplage rapide", "Édition de la vanne à couplage rapide"],
            inset: ["Manchon tubulaire", "Dessiner des manchons de tuyau", "Modification du manchon de tuyau"],
            mpRotator: ["Rotateur MP", "Placement du Mp Rotator", "Montage MP Rotator"],
            mpRotatorSR: ["Mp Rotateur 800", "Mise en place du Mp Rotator 800", "Montage Mp Rotator 800"],
            mpRotatorStrip: ["Mp Rotateur Bande", "Placement de la bande Mp Rotator", "Montage de la bande Mp Rotator"],
            bubbNHMS: ["Buse barboteuse", "Placement de la buse du barboteur", "Modification de la buse du barboteur"],
            bubbNHPC: ["Buse barboteuse", "Placement de la buse du barboteur", "Modification de la buse du barboteur"],
            bubbNHDS: ["Buse barboteuse", "Placement de la buse du barboteur", "Modification de la buse du barboteur"],
            pdcAdj: ["Buse réglable PRO", "Placement de la buse réglable PRO", "Modification de la buse réglable PRO"],
            prosFixed: ["Buse fixe Pro-Spray", "Placement de la buse fixe Pro-Spray", "Modification de la buse fixe Pro-Spray"],
            srNoz: ["Buse à rayon court", "Placement de la buse à rayon court", "Modification de la buse à rayon court"],
            streamNoz: ["Buse de flux", "Placement de la buse de flux", "Édition de la buse de flux"],
            strPatNoz: ["Buse à motif de bande", "Placement de la buse à motif de bande", "Modification des buses à motif de bande"],
            bubbHPC: ["Barboteur", "Placement du barboteur", "Édition du barboteur"],
            bubbHAF: ["Barboteur", "Placement du barboteur", "Édition du barboteur"],
            bubbTB: ["Barboteur", "Placement du barboteur", "Édition du barboteur"],
            bubbTBADJ: ["Barboteur", "Placement du barboteur", "Édition du barboteur"],
            fnf: ["Buse fixe", "Placement de la buse fixe", "Édition de buse fixe"],
            fnm: ["Buse fixe", "Placement de la buse fixe", "Édition de buse fixe"],
            fnfstrip: ["Buse à motif de bande", "Placement de la buse à motif de bande", "Modification des buses à motif de bande"],
            fnmstrip: ["Buse à motif de bande", "Placement de la buse à motif de bande", "Modification des buses à motif de bande"],
            hekvf: ["Buse HE-KVF", "Placement de la buse HE-KVF", "Édition de buse HE-KVF"],
            kv: ["Buse KV", "Placement de la buse KV", "Modification de la buse KV"],
            rn: ["RN", "Placement RN", "Édition RN"],
            rns: ["Bande RN", "Placement de la bande RN", "Édition de la bande RN"],
            rna: ["RN-ADJ", "Placement RN-ADJ", "Montage RN-ADJ"],
            "bubbRBPC": ["Barboteur", "Placement du barboteur", "Édition du barboteur"],
            "bubbRBPCT": ["Barboteur", "Placement du barboteur", "Édition du barboteur"],
            "bubbRBADJ": ["Barboteur", "Placement du barboteur", "Édition du barboteur"],
            "bubbNMPR": ["Buse barboteuse", "Placement de la buse du barboteur", "Modification de la buse du barboteur"],
            "bubbNMPRSt": ["Buse barboteuse", "Placement de la buse du barboteur", "Modification de la buse du barboteur"],
            "hevan": ["Buse HE-VAN", "Positionnement des buses HE-VAN", "Édition de buses HE-VAN"],
            "mprseries": ["Buse série MPR", "Placement des buses de la série MPR", "Modification des buses de la série MPR"],
            "mprstseries": ["Buse à motif de bande MPR", "Placement de la buse à motif de bande MPR", "Modification des buses de motif de bande MPR"],
            "rvan": ["R-VAN", "Placement R-VAN", "Montage R-VAN"],
            "rvanStrip": ["Bande R-VAN", "Placement de la bande R-VAN", "Montage de la bande R-VAN"],
            "sqseries": ["Buse à motif carré série SQ", "Placement des buses à motif carré de la série SQ", "Édition des buses à motif carré de la série SQ"],
            "useries": ["Buse de la série U", "Placement des buses de la série U", "Édition des buses de la série U"],
            "van": ["VAN Buse", "Placement de la buse VAN", "Édition de buse VAN"],
            "bubbToro500": ["Barboteur", "Placement du barboteur", "Édition du barboteur"],
            "bubbToro500S": ["Barboteur", "Placement du barboteur", "Édition du barboteur"],
            "bubbNozToroPC": ["Buse barboteuse", "Placement de la buse du barboteur", "Modification de la buse du barboteur"],
            "bubbNozStreamToro": ["Buse barboteuse", "Placement de la buse du barboteur", "Modification de la buse du barboteur"],
            "bubbNozStreamToroPC": ["Buse barboteuse", "Placement de la buse du barboteur", "Modification de la buse du barboteur"],
            "bubbNozOppStreamToro": ["Buse barboteuse", "Placement de la buse du barboteur", "Modification de la buse du barboteur"],
            "bubbNozOppStreamToroPC": ["Buse barboteuse", "Placement de la buse du barboteur", "Modification de la buse du barboteur"],
            "toromprplus": ["Buse série MPR Plus", "Placement des buses de la série MPR Plus", "Modification des buses de la série MPR Plus"],
            "toromprplusStrip": ["Buse série MPR Plus", "Placement des buses de la série MPR Plus", "Modification des buses de la série MPR Plus"],
            "toromprplusPC": ["Buse à compensation de pression série MPR Plus", "Placement des buses à pression compensée de la série MPR Plus", "Modification des buses à compensation de pression de la série MPR Plus"],
            "toromprplusPCStrip": ["Buse à compensation de pression série MPR Plus", "Placement des buses à pression compensée de la série MPR Plus", "Modification des buses à compensation de pression de la série MPR Plus"],
            "precisionRotator": ["Buse rotative série Precision", "Placement des buses rotatives de la série Precision", "Édition des buses rotatives de la série Precision"],
            "precisionRotatorF": ["Buse rotative série Precision", "Placement des buses rotatives de la série Precision", "Édition des buses rotatives de la série Precision"],
            "precisionSpray": ["Buse de série de précision", "Placement des buses de la série Precision", "Édition de buses de la série Precision"],
            "precisionSprayF": ["Buse de série de précision", "Placement des buses de la série Precision", "Édition de buses de la série Precision"],
            "precisionSprayStrip": ["Buse de série de précision", "Placement des buses de la série Precision", "Édition de buses de la série Precision"],
            "precisionSprayStripF": ["Buse de série de précision", "Placement des buses de la série Precision", "Édition de buses de la série Precision"],
            "precisionSprayPC": ["Buse à compensation de pression série Precision", "Placement des buses à pression compensée de la série Precision", "Édition des buses à pression compensée de la série Precision"],
            "precisionSprayPCF": ["Buse à compensation de pression série Precision", "Placement des buses à pression compensée de la série Precision", "Édition des buses à pression compensée de la série Precision"],
            "precisionSprayPCStrip": ["Buse à compensation de pression série Precision", "Placement des buses à pression compensée de la série Precision", "Édition des buses à pression compensée de la série Precision"],
            "precisionSprayPCStripF": ["Buse à compensation de pression série Precision", "Placement des buses à pression compensée de la série Precision", "Édition des buses à pression compensée de la série Precision"],
            "tvantoro": ["Buse série TVAN", "Placement des buses de la série TVAN", "Modification des buses de la série TVAN"],
            "streamSprayNozToro": ["Buse de pulvérisation de flux", "Placement de la buse de pulvérisation de flux", "Édition de la buse de pulvérisation de flux"],
            "streamSprayNozToroPC": ["Buse de pulvérisation de flux", "Placement de la buse de pulvérisation de flux", "Édition de la buse de pulvérisation de flux"],
            "bubbWM": ["Barboteur", "Placement du barboteur", "Édition du barboteur"],
            "bubbWMADJ": ["Barboteur", "Placement du barboteur", "Édition du barboteur"],
            "maxaan": ["Buse MAXAAN", "Placement de la buse MAXAAN", "Édition de buse MAXAAN"],
            "maxmpr": ["Buse MAXMPR", "Placement des buses MAXMPR", "Édition de buse MAXMPR"],
            "maxmprst": ["Buse à bande MAXMPR", "Placement de la buse de bande MAXMPR", "Modification de la buse de bande MAXMPR"],
            "maxmprstream": ["Buse de barbotage de flux MAXMPR", "Placement de la buse MAXMPR Stream Bubbler", "Modification de la buse MAXMPR Stream Bubbler"],
            "maxmprststream": ["Buse de barbotage de flux MAXMPR", "Placement de la buse MAXMPR Stream Bubbler", "Modification de la buse MAXMPR Stream Bubbler"],
            "bseries": ["Buse série B", "Placement des buses de la série B", "Édition des buses de la série B"],
            "bseriesst": ["Buse à bande série B", "Placement de la buse à bande série B", "Édition de la buse de bande de la série B"],
            "trench": ["Tranchée", "Tranchée", "Montage de tranchée"],
            "v": ["Collecteur de vannes", "Placement du collecteur de vannes", "Édition du collecteur de vannes"],
            "ws": ["Source d'eau", "Placement de la source d'eau", "Modification de la source d'eau"],
            "lp": ["Tuyau latéral", "Dessin de tuyau latéral", "Modification du tuyau latéral"],
            "lpPVC": ["Tuyau latéral", "Dessin de tuyau latéral", "Modification du tuyau latéral"],
            "mp": ["Tuyau principal", "Dessin du tuyau principal", "Modification du tuyau principal"],
            "mpPVC": ["Tuyau principal", "Dessin du tuyau principal", "Modification du tuyau principal"],
            "compass": ["Boussole", "Configuration de la Boussole", "Édition de la Boussole"],
            "loCurve": ["Ligne", "Dessin de Ligne", "Édition de Ligne"],
            "lsz": ["Taille", "Dessin de Taille", "Édition de Taille"],
            "text": ["Texte", "Dessin de Texte", "Édition de Texte"],
            "ldtext": ["Texte", "Configuration du Texte", "Édition du Texte"],
            "staticText": ["Texte", "Configuration du Texte", "Édition du Texte"],
            "dynamicText": ["Texte", "Configuration du Texte", "Édition du Texte"],
            "lotable": ["Tableau", "Configuration du Tableau", "Édition du Tableau"],
            "stampText": ["Tampon", "Configuration du Texte du Tampon", "Édition du Texte du Tampon"],
            "sb": ["Barre d'Échelle", "Dessin de la Barre d'Échelle", "Édition de la Barre d'Échelle"],
        },
        vars: {
            sp: "Arroseur",
            ld: "Paysage",
            mixed_sp_lo: "Arroseur/Aménagement",
            mixed_sp_lo2: "Sprinkler/Layout 2",
            mixed_ld_lo: "Paysage/Mise en page",
            hw: "Hydrawise",
            lo: "Mise en page",
            loPM: "Précipitation",
            doIrrigate: "Zone irriguée",
            doNotIrrigate: "Zone NON irriguée",
            stdSurf: "Standard",
            fineCut: "Pelouse finement coupée",
            raw: "Béton brut",
            soft: "Sable doux",
            flowerBedMix1: "Mélange de fleurs 1",
            flowerBedMix2: "Mélange de fleurs 2",
            flowerBedMix3: "Mélange de fleurs 3",
            flowerBedWhite: "Plate-bande blanche",
            flowerBedBlue: "Plate-bande bleue",
            flowerBedYellow: "Plate-bande jaune",
            flowerBedRed: "Plate-bande rouge",
            flowerBedMalina: "Parterre de fleurs cramoisi",
            flowerBedOrange: "Plate-bande orange",
            flowerBedDarkBlue: "Plate-bande bleu foncé",
            flowerBedViolet: "Violette parterre de fleurs",
            flowerBedDarkViolet: "Plate-bande violet foncé",
            herbalBed1: "Lit d'herbes 1",
            herbalBed2: "Lit d'herbes 2",
            mulch: "Paillis",
            gravel: "Gravier",
            shrubs: "Arbustes 1",
            pavementFill: "Chaussée 1",
            pavementContour: "Chaussée 2",
            pavement3: "Chaussée 3",
            pavement01_A: "Tétris 1",
            pavement01_B: "Tétris 2",
            pavement01_C: "Tétris 3",
            pavement02_A: "Diagonale 1",
            pavement02_B: "Diagonale 2",
            pavement03_A: "Sauvage 1",
            pavement03_B: "Sauvage 2",
            pavement04_Red_L: "Lumière rouge en nid d'abeille",
            pavement04_Red_D: "Nid d'abeille rouge foncé",
            pavement04_Green_L: "Lumière verte en nid d'abeille",
            pavement04_Green_D: "Nid d'abeille vert foncé",
            pavement04_Blue_L: "Lumière bleue en nid d'abeille",
            pavement04_Blue_D: "Nid d'Abeille Bleu Foncé",
            pool: "Piscine",
            lo_stdDynCurve: "Dynamique",
            lo_stdCurve: "Standard",
            stdCurve: "Standard",
            markCurve: "Marqueur rouge",
            pathCurve: "Chemin",
            pillarCurve: "Pilier",
            fenceCurve: "Clôture",
            test00: "Essai 00",
            test01: "Essai 01",
            test02: "Essai 02",
            test03: "Essai 03",
            test04: "Essai 04",
            test05: "Essai 05",
            test06: "Essai 06",
            saf01: "Pierre 1",
            saf02: "Pierre 2",
            saf03: "Pierre 3",
            saf04: "Pierre 4",
            saf05: "Pierre 5",
            saf06: "Pierre 6",
            saf07: "Pierre 7",
            saf08: "Banc 1",
            saf09: "Banc 2",
            saf10: "Meubles 1",
            saf11: "Meubles 2",
            saf12: "Voiture 1",
            saf13: "Voiture 2",
            saf14: "Diapositive pour enfants 1",
            saf14_0: "Diapositive pour enfants 2",
            saf14_L: "Diapositive pour enfants 3",
            saf14_R: "Diapositive pour enfants 4",
            saf15: "Auvent pivotant",
            saf16: "Chaise longue 1",
            saf17: "Chaise longue 2",
            saf18: "Lumière 1",
            saf19: "Lumière 2",
            saf20: "Cascade",
            saf21: "Plan d'eau 1",
            saf22: "Plan d'eau 2",
            saf23: "Regard 1",
            saf24: "Regard 2",
            bush01: "Buisson",
            bush02: "Buisson",
            bush03: "Buisson",
            bush04: "Buisson",
            bush05: "Buisson",
            bush06: "Buisson",
            bush07: "Buisson",
            bush08: "Buisson",
            bush09: "Buisson",
            bush10: "Buisson",
            bush11: "Buisson",
            bush12: "Buisson",
            bush13: "Buisson",
            tree00: "Arbre fruitier",
            tree01: "Arbre",
            tree02: "Arbre",
            tree03: "Arbre",
            tree04: "Arbre",
            tree05: "Arbre",
            tree06: "Arbre",
            tree07: "Arbre",
            tree08: "Arbre",
            tree09: "Arbre",
            tree10: "Arbre",
            tree11: "Arbre",
            tree12: "Arbre",
            tree13: "Arbre",
            tree14: "Arbre",
            tree15: "Arbre",
            tree16: "Arbre",
            tree17: "Arbre",
            stdRuler: "Standard",
            fixedCntr: "Numéros de zones fixes",
            stand_aloneCntr: "Contrôleur autonome",
            modularCntr: "Contrôleur modulaire",
            rainSensor: "Capteur de pluie",
            soilSensor: "Capteur de sol",
            freezeSensor: "Capteur de gel",
            wrFreezeSensor: "Capteur de pluie/gel sans fil",
            windSensor: "Capteur de vent",
            solarSensor: "Capteur solaire",
            flowSensor: "Capteur de débit",
            weatherStation: "Station météo",
            controlWire: "Fil de contrôle",
            sensorWire: "Fil de capteur",
            wirelessWire: "Connexion sans fil",
            dS16: "Goutte à goutte 16mm",
            dS17: "Goutte à goutte 17mm",
            qcPlastic: "Valve à raccord rapide en plastique",
            qcMetal: "Valve à raccord rapide métallique",
            hdpePE80SDR11: "PEHD PE80 SDR 11",
            hdpePE80SDR136: "PEHD PE80 DTS 13,6",
            hdpePE80SDR176: "PEHD PE80 DTS 17,6",
            hdpePE100SDR11: "PEHD PE100 SDR 11",
            hdpePE100SDR136: "PEHD PE100 SDR 13,6",
            hdpePE100SDR176: "PEHD PE100 SDR 17,6",
            hdpeSDR9: "PEHD SDR 9",
            hdpeSDR11: "PEHD SDR 11",
            hdpeSDR136: "PEHD DTS 13,6",
            hdpeSDR17: "PEHD SDR 17",
            hdpeSDR176: "PEHD DTS 17,6",
            pvcSCH40: "PVC SCH 40",
            pvcSCH80: "PVC SCH 80",
            stdTrench: "Standard (40cm) (héritage)",
            normalTrench: "Normale (L : 10 cm P : 50 cm)",
            narrowTrench: "Étroit (L : 5 cm P : 30 cm) (trancheuse manuelle)",
            wideTrench: "Large (L : 30 cm P : 60 cm) (mini-pelle)",
            multi: "Boîte à vannes",
            source: "Source d'eau",
            empty: "Vide",
            frame: "Cadre",
            gostDefault: "GOST 21.101-97 (première)",
            gostSmall: "GOST 21.101-97 (Reste)",
            a4hor: "A4 horizontale",
            a4vert: "A4 verticale",
            a3hor: "A3 horizontale",
            a3vert: "A3 verticale",
            a2hor: "A2 horizontale",
            a2vert: "A2 verticale",
            a1hor: "A1 horizontale",
            a1vert: "A1 verticale",
            a0hor: "A0 horizontale",
            a0vert: "A0 verticale",
            stdCompass: "Boussole",
            gostSize: "Taille GOST",
            landscp: "Tableau paysage",
            conv: "Tableau des symboles",
            convAll: "Tableau des symboles (All)",
            zoneT: "Tableau des zones",
            sprinkZoneTimeT: "Temps d'arrosage de la zone",
            sprinkT: "Tableau des gicleurs",
            dripT: "Tableau des lignes goutte à goutte",
            insItemT: "Tableau des insertions (par articles)",
            insVarDiamT: "Tableau des inserts (par matière et diamètres)",
            insDiamT: "Tableau des inserts (par diamètres)",
            insVarT: "Tableau des inserts (par matériau)",
            staticText: "Texte",
            dynamicText: "Texte",
            stampTextDef: "Tamponnez le texte",
            sbStdMetric: "Barre d'échelle moyenne (métrique)",
            sbMinMetric: "Mini (Métrique)",
            sbExtMetric: "Étendu (Métrique)",
            sbStdImperial: "Barre d'échelle moyenne (impérial)",
            sbMinImperial: "Mini (impérial)",
            sbExtImperial: "Étendu (Impérial)",
            gentleMicroClimate: "Bénin",
            normalMicroClimate: "Normal",
            toughMicroClimate: "Rude",
            sand: "Sablonneux",
            sandyLoam: "loam sableux",
            lightLoam: "Limon léger",
            mediumLoam: "Limon moyen",
            heavyLoam: "Limon lourd",
            clay: "Argile",
            heavyClay: "Argile lourde",
            noneIncline: "0-5% (0-3°)",
            lightIncline: "5-8% (3-5°)",
            mediumIncline: "8-12% (5-7°)",
            hugeIncline: "12% (7° )"
        },
        misc: {
            fixedCntrSubText: "FIXED",
            standAloneCntrSubText: "SA",
            modularCntrSubText: "MOD."
        },
        placeholders: {
            rotorType: ["{{brand}} {{series}} rotor", "{{brand}} {{series}} rotor placing", "{{brand}} {{series}} rotor editing"]
        }
    }
})(this);
