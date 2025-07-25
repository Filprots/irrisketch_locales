(function (p) {
    if (window.paperLocale !== "hu") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Felület", "Felület rajzolása", "Felület szerkesztése"],
            brushLawn: ["Gyep", "Gyep rajzolása", "Gyep szerkesztése"],
            brushIrrigateMarks: ["Speciális jelölő", "Speciális jelölő rajzolása", "Speciális jelölő szerkesztése"],
            brushConcrete: ["Betón", "Betón rajzolása", "Betón szerkesztése"],
            brushSand: ["Homok", "Homok rajzolása", "Homok szerkesztése"],
            brushBed: ["Ágy", "Ágy rajzolása", "Ágy szerkesztése"],
            brushBedding: ["Ágyás", "Ágyás rajzolása", "Ágyás szerkesztése"],
            brushShrubs: ["Bokrok", "Bokrok rajzolása", "Bokrok szerkesztése"],
            brushPath: ["Ösvény", "Ösvény rajzolása", "Ösvény szerkesztése"],
            brushWater: ["Víz", "Víz rajzolása", "Víz szerkesztése"],
            curve: ["Görbe", "Görbe rajzolása", "Görbe szerkesztése"],
            ldLine: ["Vonal", "Vonal rajzolás", "Vonal szerkesztés"],
            spLine: ["Vonal", "Vonal rajzolás", "Vonal szerkesztés"],
            loLine: ["Vonal", "Vonal rajzolás", "Vonal szerkesztés"],
            ldLineWithArea: ["Vonal (m2)", "Vonal (m2) rajzolás", "Vonal (m2) szerkesztés"],
            spLineWithArea: ["Vonal (m2)", "Vonal (m2) rajzolás", "Vonal (m2) szerkesztés"],
            loLineWithArea: ["Vonal (m2)", "Vonal (m2) rajzolás", "Vonal (m2) szerkesztés"],
            ldVolumetricLine: ["Vonal (m3)", "Vonal (m3) rajzolás", "Vonal (m3) szerkesztés"],
            spVolumetricLine: ["Vonal (m3)", "Vonal (m3) rajzolás", "Vonal (m3) szerkesztés"],
            loVolumetricLine: ["Vonal (m3)", "Vonal (m3) rajzolás", "Vonal (m3) szerkesztés"],
            bush: ["Bokor", "Bokor ültetése", "Bokor szerkesztése"],
            saf: ["Kisépítészeti formák", "Kisépítészeti formák rajzolása", "Kisépítészeti formák szerkesztése"],
            tree: ["Fa", "Fa ültetése", "Fák szerkesztése"],
            polySurface: ["Felület", "Felület rajzolása", "Felület szerkesztése"],
            polyLawn: ["Gyep", "Gyep rajzolása", "Gyep szerkesztése"],
            polyIrrigateMarks: ["Speciális jelölő", "Speciális jelölő rajzolása", "Speciális jelölő szerkesztése"],
            polyConcrete: ["Betón", "Betón rajzolása", "Betón szerkesztése"],
            polySand: ["Homok", "Homok rajzolása", "Homok szerkesztése"],
            polyBed: ["Ágy", "Ágy rajzolása", "Ágy szerkesztése"],
            polyBedding: ["Ágyás", "Ágyás rajzolása", "Ágyás szerkesztése"],
            polyShrubs: ["Bokrok", "Bokrok rajzolása", "Bokrok szerkesztése"],
            polyPath: ["Ösvény", "Ösvény rajzolása", "Ösvény szerkesztése"],
            polyWater: ["Víz", "Víz rajzolása", "Víz szerkesztése"],
            ruler: ["Vonalzó", "Vonalzó", "Vonalzó"],
            cntr: ["Irányító", "Irányító rajzolása", "Irányító szerkesztése"],
            sens: ["Érzékelő", "Érzékelő rajzolása", "Érzékelő szerkesztése"],
            wr: ["Irányítóvezeték", "Irányítóvezeték rajzolása", "Irányítóvezeték szerkesztése"],
            swr: ["Érzékelővezeték", "Érzékelővezeték rajzolása", "Érzékelővezeték szerkesztése"],
            dl16: ["Csepegővonal 16/13mm", "Csepegővonal 16/13mm rajzolása", "Csepegővonal 16/13mm szerkesztése"],
            ds16: ["Csepegő indító 16/13mm", "Csepegő indító 16/13mm rajzolása", "Csepegő indító 16/13mm szerkesztése"],
            dl17: ["Csepegővonal 17mm", "Csepegővonal 17mm rajzolása", "Csepegővonal 17mm szerkesztése"],
            ds17: ["Csepegő indító 17mm", "Csepegő indító 17mm rajzolása", "Csepegő indító 17mm szerkesztése"],
            rzw: ["Gyökéröntözés", "Gyökéröntözés egység rajzolása", "Gyökéröntözés egység szerkesztése"],
            qc: ["Gyorscsatlakozó szelep", "Gyorscsatlakozó szelep elhelyezése", "Gyorscsatlakozó szelep szerkesztése"],
            inset: ["Csővédő", "Csővédő rajzolása", "Csővédő szerkesztése"],
            mpRotator: ["Mp Rotator", "Mp Rotator elhelyezése", "Mp Rotator szerkesztése"],
            mpRotatorSR: ["Mp Rotator 800", "Mp Rotator 800 elhelyezése", "Mp Rotator 800 szerkesztése"],
            mpRotatorStrip: ["Mp Rotator csík", "Mp Rotator csík elhelyezése", "Mp Rotator csík szerkesztése"],
            bubbNHMS: ["Buborékosztócső", "Buborékosztócső elhelyezése", "Buborékosztócső szerkesztése"],
            bubbNHPC: ["Buborékosztócső", "Buborékosztócső elhelyezése", "Buborékosztócső szerkesztése"],
            bubbNHDS: ["Buborékosztócső", "Buborékosztócső elhelyezése", "Buborékosztócső szerkesztése"],
            pdcAdj: ["PRO állítható permetezőfej", "PRO állítható permetezőfej elhelyezése", "PRO állítható permetezőfej szerkesztése"],
            proHE: ["PRO nagy hatékonyságú állítható permetezőfej", "PRO nagy hatékonyságú állítható permetezőfej elhelyezése", "PRO nagy hatékonyságú állítható permetezőfej szerkesztése"],
            prosFixed: ["PRO fix permetezőfej", "PRO fix permetezőfej elhelyezése", "PRO fix permetezőfej szerkesztése"],
            srNoz: ["Rövid sugárú permetezőfej", "Rövid sugárú permetezőfej elhelyezése", "Rövid sugárú permetezőfej szerkesztése"],
            streamNoz: ["Áramlásos permetezőfej", "Áramlásos permetezőfej elhelyezése", "Áramlásos permetezőfej szerkesztése"],
            strPatNoz: ["Csíkos mintázatú permetezőfej", "Csíkos mintázatú permetezőfej elhelyezése", "Csíkos mintázatú permetezőfej szerkesztése"],
            bubbHPC: ["Buborék", "Buborék elhelyezése", "Buborék szerkesztése"],
            bubbHAF: ["Buborék", "Buborék elhelyezése", "Buborék szerkesztése"],
            bubbTB: ["Buborék", "Buborék elhelyezése", "Buborék szerkesztése"],
            bubbTBADJ: ["Buborék", "Buborék elhelyezése", "Buborék szerkesztése"],
            fnf: ["Fix permetezőfej", "Fix permetezőfej elhelyezése", "Fix permetezőfej szerkesztése"],
            fnm: ["Fix permetezőfej", "Fix permetezőfej elhelyezése", "Fix permetezőfej szerkesztése"],
            fnfstrip: ["Csíkos mintázatú permetezőfej", "Csíkos mintázatú permetezőfej elhelyezése", "Csíkos mintázatú permetezőfej szerkesztése"],
            fnmstrip: ["Csíkos mintázatú permetezőfej", "Csíkos mintázatú permetezőfej elhelyezése", "Csíkos mintázatú permetezőfej szerkesztése"],
            hekvf: ["HE-KVF permetezőfej", "HE-KVF permetezőfej elhelyezése", "HE-KVF permetezőfej szerkesztése"],
            kv: ["KV permetezőfej", "KV permetezőfej elhelyezése", "KV permetezőfej szerkesztése"],
            rn: ["RN", "RN elhelyezése", "RN szerkesztése"],
            rns: ["RN csík", "RN csík elhelyezése", "RN csík szerkesztése"],
            rna: ["RN-ADJ", "RN-ADJ elhelyezése", "RN-ADJ szerkesztése"],
            "bubbRBPC": ["Buborék", "Buborék elhelyezése", "Buborék szerkesztése"],
            "bubbRBPCT": ["Buborék", "Buborék elhelyezése", "Buborék szerkesztése"],
            "bubbRBADJ": ["Buborék", "Buborék elhelyezése", "Buborék szerkesztése"],
            "bubbNMPR": ["Buborék permetezőfej", "Buborék permetezőfej elhelyezése", "Buborék permetezőfej szerkesztése"],
            "bubbNMPRSt": ["Buborék permetezőfej", "Buborék permetezőfej elhelyezése", "Buborék permetezőfej szerkesztése"],
            "hevan": ["HE-VAN permetezőfej", "HE-VAN permetezőfej elhelyezése", "HE-VAN permetezőfej szerkesztése"],
            "mprseries": ["MPR-Sorozatú permetezőfej", "MPR-Sorozatú permetezőfej elhelyezése", "MPR-Sorozatú permetezőfej szerkesztése"],
            "mprstseries": ["MPR Csíkmintázatú permetezőfej", "MPR Csíkmintázatú permetezőfej elhelyezése", "MPR Csíkmintázatú permetezőfej szerkesztése"],
            "rvan": ["R-VAN", "R-VAN elhelyezése", "R-VAN szerkesztése"],
            "rvanStrip": ["R-VAN csík", "R-VAN csík elhelyezése", "R-VAN csík szerkesztése"],
            "sqseries": ["SQ Sorozatú Négyzetmintázatú permetezőfej", "SQ Sorozatú Négyzetmintázatú permetezőfej elhelyezése", "SQ Sorozatú Négyzetmintázatú permetezőfej szerkesztése"],
            "useries": ["U-Sorozatú permetezőfej", "U-Sorozatú permetezőfej elhelyezése", "U-Sorozatú permetezőfej szerkesztése"],
            "van": ["VAN permetezőfej", "VAN permetezőfej elhelyezése", "VAN permetezőfej szerkesztése"],
            "bubbToro500": ["Buborék", "Buborék elhelyezése", "Buborék szerkesztése"],
            "bubbToro500S": ["Buborék", "Buborék elhelyezése", "Buborék szerkesztése"],
            "bubbNozToroPC": ["Buborék permetezőfej", "Buborék permetezőfej elhelyezése", "Buborék permetezőfej szerkesztése"],
            "bubbNozStreamToro": ["Buborék permetezőfej", "Buborék permetezőfej elhelyezése", "Buborék permetezőfej szerkesztése"],
            "bubbNozStreamToroPC": ["Buborék permetezőfej", "Buborék permetezőfej elhelyezése", "Buborék permetezőfej szerkesztése"],
            "bubbNozOppStreamToro": ["Buborék permetezőfej", "Buborék permetezőfej elhelyezése", "Buborék permetezőfej szerkesztése"],
            "bubbNozOppStreamToroPC": ["Buborék permetezőfej", "Buborék permetezőfej elhelyezése", "Buborék permetezőfej szerkesztése"],
            "toromprplus": ["MPR Plus sorozatú permetezőfej", "MPR Plus sorozatú permetezőfej elhelyezése", "MPR Plus sorozatú permetezőfej szerkesztése"],
            "toromprplusStrip": ["MPR Plus sorozatú permetezőfej", "MPR Plus sorozatú permetezőfej elhelyezése", "MPR Plus sorozatú permetezőfej szerkesztése"],
            "toromprplusPC": ["MPR Plus sorozatú nyomáskiegyenlített permetezőfej", "MPR Plus sorozatú nyomáskiegyenlített permetezőfej elhelyezése", "MPR Plus sorozatú nyomáskiegyenlített permetezőfej szerkesztése"],
            "toromprplusPCStrip": ["MPR Plus sorozatú nyomáskiegyenlített permetezőfej", "MPR Plus sorozatú nyomáskiegyenlített permetezőfej elhelyezése", "MPR Plus sorozatú nyomáskiegyenlített permetezőfej szerkesztése"],
            "precisionRotator": ["Precíziós sorozatú forgó permetezőfej", "Precíziós sorozatú forgó permetezőfej elhelyezése", "Precíziós sorozatú forgó permetezőfej szerkesztése"],
            "precisionRotatorF": ["Precíziós sorozatú forgó permetezőfej", "Precíziós sorozatú forgó permetezőfej elhelyezése", "Precíziós sorozatú forgó permetezőfej szerkesztése"],
            "precisionSpray": ["Precíziós sorozatú permetezőfej", "Precíziós sorozatú permetezőfej elhelyezése", "Precíziós sorozatú permetezőfej szerkesztése"],
            "precisionSprayF": ["Precíziós sorozatú permetezőfej", "Precíziós sorozatú permetezőfej elhelyezése", "Precíziós sorozatú permetezőfej szerkesztése"],
            "precisionSprayStrip": ["Precíziós sorozatú permetezőfej", "Precíziós sorozatú permetezőfej elhelyezése", "Precíziós sorozatú permetezőfej szerkesztése"],
            "precisionSprayStripF": ["Precíziós sorozatú permetezőfej", "Precíziós sorozatú permetezőfej elhelyezése", "Precíziós sorozatú permetezőfej szerkesztése"],
            "precisionSprayPC": ["Precíziós sorozatú nyomáskiegyenlített permetezőfej", "Precíziós sorozatú nyomáskiegyenlített permetezőfej elhelyezése", "Precíziós sorozatú nyomáskiegyenlített permetezőfej szerkesztése"],
            "precisionSprayPCF": ["Precíziós sorozatú nyomáskiegyenlített permetezőfej", "Precíziós sorozatú nyomáskiegyenlített permetezőfej elhelyezése", "Precíziós sorozatú nyomáskiegyenlített permetezőfej szerkesztése"],
            "precisionSprayPCStrip": ["Precíziós sorozatú nyomáskiegyenlített permetezőfej", "Precíziós sorozatú nyomáskiegyenlített permetezőfej elhelyezése", "Precíziós sorozatú nyomáskiegyenlített permetezőfej szerkesztése"],
            "precisionSprayPCStripF": ["Precíziós sorozatú nyomáskiegyenlített permetezőfej", "Precíziós sorozatú nyomáskiegyenlített permetezőfej elhelyezése", "Precíziós sorozatú nyomáskiegyenlített permetezőfej szerkesztése"],
            "tvantoro": ["TVAN sorozatú permetezőfej", "TVAN sorozatú permetezőfej elhelyezése", "TVAN sorozatú permetezőfej szerkesztése"],
            "streamSprayNozToro": ["Áramlási permetezőfej", "Áramlási permetezőfej elhelyezése", "Áramlási permetezőfej szerkesztése"],
            "streamSprayNozToroPC": ["Áramlási permetezőfej", "Áramlási permetezőfej elhelyezése", "Áramlási permetezőfej szerkesztése"],
            "bubbWM": ["Buborék", "Buborék elhelyezése", "Buborék szerkesztése"],
            "bubbWMADJ": ["Buborék", "Buborék elhelyezése", "Buborék szerkesztése"],
            "maxaan": ["MAXAAN permetezőfej", "MAXAAN permetezőfej elhelyezése", "MAXAAN permetezőfej szerkesztése"],
            "maxmpr": ["MAXMPR permetezőfej", "MAXMPR permetezőfej elhelyezése", "MAXMPR permetezőfej szerkesztése"],
            "maxmprst": ["MAXMPR Csíkmintázatú permetezőfej", "MAXMPR Csíkmintázatú permetezőfej elhelyezése", "MAXMPR Csíkmintázatú permetezőfej szerkesztése"],
            "maxmprstream": ["MAXMPR Áramlási buborék permetezőfej", "MAXMPR Áramlási buborék permetezőfej elhelyezése", "MAXMPR Áramlási buborék permetezőfej szerkesztése"],
            "maxmprststream": ["MAXMPR Áramlási buborék permetezőfej", "MAXMPR Áramlási buborék permetezőfej elhelyezése", "MAXMPR Áramlási buborék permetezőfej szerkesztése"],
            "bseries": ["B Sorozatú permetezőfej", "B Sorozatú permetezőfej elhelyezése", "B Sorozatú permetezőfej szerkesztése"],
            "bseriesst": ["B Sorozatú Csíkmintázatú permetezőfej", "B Sorozatú Csíkmintázatú permetezőfej elhelyezése", "B Sorozatú Csíkmintázatú permetezőfej szerkesztése"],
            "trench": ["Árok", "Árokkal kapcsolatos műveletek", "Árok szerkesztése"],
            "v": ["Szelepek manifoldja", "Szelepek manifoldjának elhelyezése", "Szelepek manifoldjának szerkesztése"],
            "ws": ["Vízforrás", "Vízforrás elhelyezése", "Vízforrás szerkesztése"],
            "lp": ["Oldalforgalmi cső", "Oldalforgalmi cső rajzolása", "Oldalforgalmi cső szerkesztése"],
            "lpPVC": ["Oldalforgalmi cső", "Oldalforgalmi cső rajzolása", "Oldalforgalmi cső szerkesztése"],
            "mp": ["Főcső", "Főcső rajzolása", "Főcső szerkesztése"],
            "mpPVC": ["Főcső", "Főcső rajzolása", "Főcső szerkesztése"],
            "compass": ["Iránytű", "Iránytű beállítása", "Iránytű szerkesztése"],
            "loCurve": ["Vonal", "Vonal rajzolása", "Vonal szerkesztése"],
            "lsz": ["Méret", "Méret rajzolása", "Méret szerkesztése"],
            "text": ["Szöveg", "Szöveg rajzolása", "Szöveg szerkesztése"],
            "ldtext": ["Szöveg", "Szöveg beállítása", "Szöveg szerkesztése"],
            "staticText": ["Szöveg", "Szöveg beállítása", "Szöveg szerkesztése"],
            "dynamicText": ["Szöveg", "Szöveg beállítása", "Szöveg szerkesztése"],
            "lotable": ["Táblázat", "Táblázat beállítása", "Táblázat szerkesztése"],
            "stampText": ["Jelzés", "Jelzés szöveg beállítása", "Jelzés szerkesztése"],
            "sb": ["Méretvonal", "Méretvonal rajzolása", "Méretvonal szerkesztése"]
        },
        vars: {
            "sp": "Szórófej",
            "ld": "Kert",
            "mixed_sp_lo": "Szórófej/Tervezés",
            "mixed_sp_lo2": "Szórófej/Tervezés 2",
            "mixed_ld_lo": "Kert/Tervezés",
            "hw": "Hydrawise",
            "lo": "Tervezés",
            "loPM": "Csapadék",
            "doIrrigate": "Öntözött övezet",
            "doNotIrrigate": "NEM Öntözött övezet",
            "obstacles": "Akadályok az öntözéshez",
            "placementObstacles": "Akadályok a elhelyezéshez",
            "stdSurf": "Standard",
            "fineCut": "Finom fű",
            "raw": "Nyers beton",
            "soft": "Puha homok",
            "flowerBedMix1": "Virágkeverék 1",
            "flowerBedMix2": "Virágkeverék 2",
            "flowerBedMix3": "Virágkeverék 3",
            "flowerBedWhite": "Fehér virágágyás",
            "flowerBedBlue": "Kék virágágyás",
            "flowerBedYellow": "Sárga virágágyás",
            "flowerBedRed": "Piros virágágyás",
            "flowerBedMalina": "Málna virágágyás",
            "flowerBedOrange": "Narancssárga virágágyás",
            "flowerBedDarkBlue": "Sötétkék virágágyás",
            "flowerBedViolet": "Lila virágágyás",
            "flowerBedDarkViolet": "Sötétlila virágágyás",
            "herbalBed1": "Gyógynövényágy 1",
            "herbalBed2": "Gyógynövényágy 2",
            "mulch": "Mulcs",
            "gravel": "Kavics",
            "shrubs": "Bokrok 1",
            "pavementFill": "Járda 1",
            "pavementContour": "Járda 2",
            "pavement3": "Járda 3",
            "pavement01_A": "Tetris 1",
            "pavement01_B": "Tetris 2",
            "pavement01_C": "Tetris 3",
            "pavement02_A": "Átlós 1",
            "pavement02_B": "Átlós 2",
            "pavement03_A": "Vad 1",
            "pavement03_B": "Vad 2",
            "pavement04_Red_L": "Méhsejt Vörös Világos",
            "pavement04_Red_D": "Méhsejt Vörös Sötét",
            "pavement04_Green_L": "Méhsejt Zöld Világos",
            "pavement04_Green_D": "Méhsejt Zöld Sötét",
            "pavement04_Blue_L": "Méhsejt Kék Világos",
            "pavement04_Blue_D": "Méhsejt Kék Sötét",
            "pool": "Úszómedence",
            "lo_stdDynCurve": "Dinamikus",
            "lo_stdCurve": "Standard",
            "stdCurve": "Standard",
            "markCurve": "Piros jelző",
            "pathCurve": "Út",
            "pillarCurve": "Oszlop",
            "fenceCurve": "Kerítés",
            "test00": "Teszt 00",
            "test01": "Teszt 01",
            "test02": "Teszt 02",
            "test03": "Teszt 03",
            "test04": "Teszt 04",
            "test05": "Teszt 05",
            "test06": "Teszt 06",
            "saf01": "Kő 1",
            "saf02": "Kő 2",
            "saf03": "Kő 3",
            "saf04": "Kő 4",
            "saf05": "Kő 5",
            "saf06": "Kő 6",
            "saf07": "Kő 7",
            "saf08": "Pad 1",
            "saf09": "Pad 2",
            "saf10": "Bútor 1",
            "saf11": "Bútor 2",
            "saf12": "Autó 1",
            "saf13": "Autó 2",
            saf14: "Gyermek csúszda 1",
            saf14_0: "Gyermek csúszda 2",
            saf14_L: "Gyermek csúszda 3",
            saf14_R: "Gyermek csúszda 4",
            saf15: "Hinta ponyva",
            saf16: "Napágy 1",
            saf17: "Napágy 2",
            saf18: "Lámpa 1",
            saf19: "Lámpa 2",
            saf20: "Vízesés",
            saf21: "Víztömeg 1",
            saf22: "Víztömeg 2",
            saf23: "Emésztőakna 1",
            saf24: "Emésztőakna 2",
            bush01: "Bokor #01",
            bush02: "Bokor #02",
            bush03: "Bokor #03",
            bush04: "Bokor #04",
            bush05: "Bokor #05",
            bush06: "Bokor #06",
            bush07: "Bokor #07",
            bush08: "Bokor #08",
            bush09: "Bokor #09",
            bush10: "Bokor #10",
            bush11: "Bokor #11",
            bush12: "Bokor #12",
            bush13: "Bokor #13",
            tree00: "Gyümölcsfa",
            tree01: "Fa #01",
            tree02: "Fa #02",
            tree03: "Fa #03",
            tree04: "Fa #04",
            tree05: "Fa #05",
            tree06: "Fa #06",
            tree07: "Fa #07",
            tree08: "Fa #08",
            tree09: "Fa #09",
            tree10: "Fa #10",
            tree11: "Fa #11",
            tree12: "Fa #12",
            tree13: "Fa #13",
            tree14: "Fa #14",
            tree15: "Fa #15",
            tree16: "Fa #16",
            tree17: "Fa #17",
            stdRuler: "Standard",
            fixedCntr: "Rögzített övezetszámok",
            stand_aloneCntr: "Önálló vezérlő",
            modularCntr: "Moduláris vezérlő",
            rainSensor: "Esőérzékelő",
            soilSensor: "Talajérzékelő",
            freezeSensor: "Fagyérzékelő",
            wrFreezeSensor: "Vezeték nélküli Eső/Fagyérzékelő",
            windSensor: "Szele érzékelő",
            solarSensor: "Napérzékelő",
            flowSensor: "Áramlásérzékelő",
            weatherStation: "Időjárás állomás",
            controlWire: "Vezérlő kábel",
            wirelessControl: "Vezeték nélküli vezérlés",
            sensorWire: "Érzékelő kábel",
            wirelessSensor: "Vezeték nélküli érzékelő csatlakozás",
            wirelessWire: "Vezeték nélküli kapcsolat",
            dS16: "Csepegtető indítás 16/13mm",
            dS17: "Csepegtető indítás 17mm",
            qcPlastic: "Műanyag Gyors-Csatlakozó Szelep",
            qcMetal: "Fémes Gyors-Csatlakozó Szelep",
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
            pvcCL315: "PVC OSZTÁLY 315",
            pvcCL200: "PVC OSZTÁLY 200",
            pvcCL160: "PVC OSZTÁLY 160",
            pvcCL125: "PVC OSZTÁLY 125",
            "pvcUSCJPN18": "PVC-U SCJ (PN18)",
            "pvcUSCJPN12": "PVC-U SCJ (PN12)",
            "pvcUSCJPN9": "PVC-U SCJ (PN9)",
            "pvcUSCJPN6": "PVC-U SCJ (PN6)",
            "pvcUSCJPN45": "PVC-U SCJ (PN4.5)",
            "ldpeCLASS3": "LDPE OSZTÁLY 3",
            stdTrench: "Standard (40cm) (örökség)",
            normalTrench: "Normál (W:10cm D:50cm)",
            narrowTrench: "Szűk (W:5cm D:30cm) (Kézi ásó)",
            wideTrench: "Széles (W:30cm D:60cm) (Mini-ásó)",
            multi: "Szelep doboz",
            source: "Vízforrás",
            empty: "Üres",
            frame: "Keret",
            gostDefault: "Nagy bélyeg",
            gostSmall: "Kis bélyeg",
            a4hor: "A4 Vízszintes",
            a4vert: "A4 Függőleges",
            a3hor: "A3 Vízszintes",
            a3vert: "A3 Függőleges",
            a2hor: "A2 Vízszintes",
            a2vert: "A2 Függőleges",
            a1hor: "A1 Vízszintes",
            a1vert: "A1 Függőleges",
            a0hor: "A0 Vízszintes",
            a0vert: "A0 Függőleges",
            "dind4hor": "DIN D4 Vízszintes",
            "dind4vert": "DIN D4 Függőleges",
            "dind3hor": "DIN D3 Vízszintes",
            "dind3vert": "DIN D3 Függőleges",
            "dind2hor": "DIN D2 Vízszintes",
            "dind2vert": "DIN D2 Függőleges",
            "dind1hor": "DIN D1 Vízszintes",
            "dind1vert": "DIN D1 Függőleges",
            "dind0hor": "DIN D0 Vízszintes",
            "dind0vert": "DIN D0 Függőleges",
            "ansiAhor": "ANSI A Vízszintes",
            "ansiAvert": "ANSI A Függőleges",
            "ansiBhor": "ANSI B Vízszintes",
            "ansiBvert": "ANSI B Függőleges",
            "ansiChor": "ANSI C Vízszintes",
            "ansiCvert": "ANSI C Függőleges",
            "ansiDhor": "ANSI D Vízszintes",
            "ansiDvert": "ANSI D Függőleges",
            "ansiEhor": "ANSI E Vízszintes",
            "ansiEvert": "ANSI E Függőleges",
            "archAhor": "Arch A Vízszintes",
            "archAvert": "Arch A Függőleges",
            "archBhor": "Arch B Vízszintes",
            "archBvert": "Arch B Függőleges",
            "archChor": "Arch C Vízszintes",
            "archCvert": "Arch C Függőleges",
            "archDhor": "Arch D Vízszintes",
            "archDvert": "Arch D Függőleges",
            "archEhor": "Arch E Vízszintes",
            "archEvert": "Arch E Függőleges",
            "archE1hor": "Arch E1 Vízszintes",
            "archE1vert": "Arch E1 Függőleges",
            "archE2hor": "Arch E2 Vízszintes",
            "archE2vert": "Arch E2 Függőleges",
            "archE3hor": "Arch E3 Vízszintes",
            stdCompass: "Iránytű",
            gostSize: "Méretvonal",
            landscp: "Fekvőtájú táblázat",
            conv: "Szimbólumok táblázat",
            convAll: "Minden szimbólum táblázat",
            zoneT: "Zóna táblázat",
            sprinkZoneTimeT: "Öntözési idő zónánként",
            sprinkT: "Szórófejek táblázat",
            sprinkT2: "Szórófejek táblázat",
            dripT: "Csepegtető vezetékek táblázat",
            insItemT: "Beszúrások táblázata (Elemek szerint)",
            insVarDiamT: "Beszúrások táblázata (Anyagok és átmérők szerint)",
            insDiamT: "Beszúrások táblázata (Átmérők szerint)",
            insVarT: "Beszúrások táblázata (Anyagok szerint)",
            staticText: "Statikus szöveg",
            dynamicText: "Dinamikus szöveg",
            stampTextDef: "Jelzésszöveg",
            sbStdMetric: "Közepes skálázási sáv (Méretű)",
            sbMinMetric: "Mini (Méretű)",
            sbExtMetric: "Kiterjesztett (Méretű)",
            sbStdImperial: "Közepes skálázási sáv (Brit)",
            sbMinImperial: "Mini (Brit)",
            sbExtImperial: "Kiterjesztett (Brit)",
            gentleMicroClimate: "Enyhe",
            normalMicroClimate: "Normál",
            toughMicroClimate: "Kemény",
            sand: "Homokos",
            sandyLoam: "Homokos agyagos",
            lightLoam: "Könnyű agyag",
            mediumLoam: "Közepes agyag",
            heavyLoam: "Nehéz agyag",
            clay: "Agyag",
            heavyClay: "Nehéz agyag",
            noneIncline: "0-5% (0-3°)",
            lightIncline: "5-8% (3-5°)",
            mediumIncline: "8-12% (5-7°)",
            hugeIncline: "12%+ (7°+)"
        },
        misc: {
            fixedCntrSubText: "RÖGZÍTETT",
            standAloneCntrSubText: "ÖA",
            modularCntrSubText: "MOD."
        },
        placeholders: {
            rotorType: ["{{brand}} {{series}} szórófej", "{{brand}} {{series}} szórófej elhelyezése", "{{brand}} {{series}} szórófej szerkesztése"]
        }
    };
})(this);
