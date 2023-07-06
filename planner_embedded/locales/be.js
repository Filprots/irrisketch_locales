(function (p) {
    if (window.paperLocale !== "be") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Паверхня", "Маляванне паверхні", "Рэдагаванне паверхні"],
            brushLawn: ["Траўнік", "Маляванне траўніка", "Рэдагаванне траўніка"],
            brushConcrete: ["Бетон", "Маляванне бетону", "Рэдагаванне бетону"],
            brushSand: ["Пясок", "Маляванне пяску", "Рэдагаванне пяску"],
            brushBed: ["Кветнік", "Маляванне кветніка", "Рэдагаванне кветніка"],
            brushBedding: ["Адсыпка", "Маляванне адсыпкі", "Рэдагаванне адсыпкі"],
            brushShrubs: ["Кусты", "Маляванне кустоў", "Рэдагаванне кустоў"],
            brushPath: ["Дарожка", "Маляванне дарожак", "Рэдагаванне дарожак"],
            brushWater: ["Вада", "Маляванне вады", "Рэдагаванне вады"],
            curve: ["Лінія", "Маляванне лініі", "Рэдагаванне лініі"],
            bush: ["Куст", "Пасадка кустоў", "Рэдагаванне кустоў"],
            saf: ["Малыя архітэктурныя формы", "Усталёўка МАФ", "Рэдагаванне МАФ"],
            tree: ["Дрэва", "Пасадка дрэва", "Рэдагаванне дрэва"],
            polySurface: ["Паверхня", "Маляванне паверхні", "Рэдагаванне паверхні"],
            polyLawn: ["Траўнік", "Маляванне траўніка", "Рэдагаванне траўніка"],
            polyConcrete: ["Бетон", "Маляванне бетону", "Рэдагаванне бетону"],
            polySand: ["Пясок", "Маляванне пяску", "Рэдагаванне пяску"],
            polyBed: ["Кветнік", "Маляванне кветніка", "Рэдагаванне кветніка"],
            polyBedding: ["Адсыпка", "Маляванне адсыпкі", "Рэдагаванне адсыпкі"],
            polyShrubs: ["Кусты", "Маляванне кустоў", "Рэдагаванне кустоў"],
            polyPath: ["Дарожка", "Маляванне дарожак", "Рэдагаванне дарожак"],
            polyWater: ["Вада", "Маляванне вады", "Рэдагаванне вады"],
            ruler: ["Рулетка", "Рулетка", "Рулетка"],
            cntr: ["Кантролер", "Усталёўка кантролера", "Рэдагаванне кантролера"],
            sens: ["Чуйнік", "Усталёўка чуйніка", "Рэдагаванне чуйніка"],
            wr: ["Кіроўны провад", "Кладка кіроўнага проваду", "Рэдагаванне кіроўнага проваду"],
            swr: ["Праводка чуйніка", "Кладка праводкі чуйніка", "Рэдагаванне праводкі чуйніка"],
            dl16: ["Кропельная лінія 16мм", "Кладка кропельнай лініі 16мм", "Рэдагаванне кропельнай лініі 16мм"],
            ds16: ["Старт 16мм", "Маляванне кропельнага старту 16мм", "Рэдагаванне кропельнага старту 16мм"],
            dl17: ["Кропельная лінія 17мм", "Кладка кропельнай лініі 17мм", "Рэдагаванне кропельнай лініі 17мм"],
            ds17: ["Старт 17мм", "Маляванне кропельнага старту 17мм", "Рэдагаванне кропельнага старту 17мм"],
            rzw: ["Прыкаранёвае паліванне", "Усталёўка прыкаранёвага палівання", "Рэдагаванне прыкаранёвага палівання"],
            qc: ["Водаразборная калонка", "Усталёўка водаразборнай калонкі", "Рэдагаванне водаразборнай калонкі"],
            inset: ["Закладная", "Маляванне закладных", "Рэдагаванне закладных"],
            mpRotator: ["Mp Rotator", "Усталёўка Mp Rotator", "Рэдагаванне Mp Rotator"],
            mpRotatorSR: ["Mp Rotator 800", "Усталёўка Mp Rotator 800", "Рэдагаванне Mp Rotator 800"],
            mpRotatorStrip: ["Mp Rotator Strip", "Усталёўка Mp Rotator Strip", "Рэдагаванне Mp Rotator Strip"],
            bubbNHMS: ["Фарсунка-баблер", "Усталёўка фарсункі-баблера", "Рэдагаванне фарсункі-баблера"],
            bubbNHPC: ["Фарсунка-баблер", "Усталёўка фарсункі-баблера", "Рэдагаванне фарсункі-баблера"],
            bubbNHDS: ["Фарсунка-баблер", "Усталёўка фарсункі-баблера", "Рэдагаванне фарсункі-баблера"],
            pdcAdj: ["PRO Adjustable Nozzle", "Усталёўка фарсункі PRO Adjustable", "Рэдагаванне фарсункі PRO Adjustable"],
            prosFixed: ["Pro-Spray Fixed Nozzle", "Усталёўка фарсункі Pro-Spray Fixed", "Рэдагаванне фарсункі Pro-Spray Fixed"],
            srNoz: ["Short Radius Nozzle", "Усталёўка фарсункі Short Radius Nozzle", "Рэдагаванне фарсункі Short Radius Nozzle"],
            streamNoz: ["Stream Nozzle", "Усталёўка фарсункі Stream Nozzle", "Рэдагаванне фарсункі Stream Nozzle"],
            strPatNoz: ["Strip Pattern Nozzle", "Усталёўка фарсункі Strip Pattern Nozzle", "Рэдагаванне фарсункі Strip Pattern Nozzle"],
            bubbHPC: ["Баблер", "Усталёўка баблера", "Рэдагаванне баблера"],
            bubbHAF: ["Баблер", "Усталёўка баблера", "Рэдагаванне баблера"],
            bubbTB: ["Баблер", "Усталёўка баблера", "Рэдагаванне баблера"],
            bubbTBADJ: ["Баблер", "Усталёўка баблера", "Рэдагаванне баблера"],
            fnf: ["Fixed Nozzle", "Усталёўка фарсункі Fixed", "Рэдагаванне фарсункі Fixed"],
            fnm: ["Fixed Nozzle", "Усталёўка фарсункі Fixed", "Рэдагаванне фарсункі Fixed"],
            fnfstrip: ["Strip Pattern Nozzle", "Усталёўка фарсункі Strip Pattern Nozzle", "Рэдагаванне фарсункі Strip Pattern Nozzle"],
            fnmstrip: ["Strip Pattern Nozzle", "Усталёўка фарсункі Strip Pattern Nozzle", "Рэдагаванне фарсункі Strip Pattern Nozzle"],
            hekvf: ["HE-KVF Nozzle", "Усталёўка фарсункі HE-KVF", "Рэдагаванне фарсункі HE-KVF"],
            kv: ["KV Nozzle", "Усталёўка фарсункі KV", "Рэдагаванне фарсункі KV"],
            rn: ["RN", "Усталёўка RN", "Рэдагаванне RN"],
            rns: ["RN Strip", "Усталёўка RN Strip", "Рэдагаванне RN Strip"],
            rna: ["RN-ADJ", "Усталёўка RN-ADJ", "Рэдагаванне RN-ADJ"],
            "bubbRBPC": ["Баблер", "Усталёўка баблера", "Рэдагаванне баблера"],
            "bubbRBPCT": ["Баблер", "Усталёўка баблера", "Рэдагаванне баблера"],
            "bubbRBADJ": ["Баблер", "Усталёўка баблера", "Рэдагаванне баблера"],
            "bubbNMPR": ["Фарсунка-баблер", "Усталёўка фарсункі-баблера", "Рэдагаванне фарсункі-баблера"],
            "bubbNMPRSt": ["Фарсунка-баблер", "Усталёўка фарсункі-баблера", "Рэдагаванне фарсункі-баблера"],
            "hevan": ["HE-VAN Nozzle", "Усталёўка фарсункі HE-VAN", "Рэдагаванне фарсункі HE-VAN"],
            "mprseries": ["MPR-Series Nozzle", "Усталёўка фарсункі MPR-Series", "Рэдагаванне фарсункі MPR-Series"],
            "mprstseries": ["MPR Strip Pattern Nozzle", "Усталёўка фарсункі MPR Strip Pattern Nozzle", "Рэдагаванне фарсункі MPR Strip Pattern Nozzle"],
            "rvan": ["R-VAN", "Усталёўка R-VAN", "Рэдагаванне R-VAN"],
            "rvanStrip": ["R-VAN Strip", "Усталёўка R-VAN Strip", "Рэдагаванне R-VAN Strip"],
            "sqseries": ["SQ Series Square Pattern Nozzle", "Усталёўка фарсункі SQ Series Square Pattern Nozzle", "Рэдагаванне фарсункі SQ Series Square Pattern Nozzle"],
            "useries": ["U-Series Nozzle", "Усталёўка фарсункі U-Series", "Рэдагаванне фарсункі U-Series"],
            "van": ["VAN Nozzle", "Усталёўка фарсункі VAN", "Рэдагаванне фарсункі VAN"],
            "bubbToro500": ["Баблер", "Усталёўка баблера", "Рэдагаванне баблера"],
            "bubbToro500S": ["Баблер", "Усталёўка баблера", "Рэдагаванне баблера"],
            "bubbNozToroPC": ["Фарсунка-баблер", "Усталёўка фарсункі-баблера", "Рэдагаванне фарсункі-баблера"],
            "bubbNozStreamToro": ["Фарсунка-баблер", "Усталёўка фарсункі-баблера", "Рэдагаванне фарсункі-баблера"],
            "bubbNozStreamToroPC": ["Фарсунка-баблер", "Усталёўка фарсункі-баблера", "Рэдагаванне фарсункі-баблера"],
            "bubbNozOppStreamToro": ["Фарсунка-баблер", "Усталёўка фарсункі-баблера", "Рэдагаванне фарсункі-баблера"],
            "bubbNozOppStreamToroPC": ["Фарсунка-баблер", "Усталёўка фарсункі-баблера", "Рэдагаванне фарсункі-баблера"],
            "toromprplus": ["MPR Plus Series Nozzle", "Усталёўка фарсункі MPR Plus Series", "Рэдагаванне фарсункі MPR Plus Series"],
            "toromprplusStrip": ["MPR Plus Series Nozzle", "Усталёўка фарсункі MPR Plus Series", "Рэдагаванне фарсункі MPR Plus Series"],
            "toromprplusPC": ["MPR Plus Series Pressure-compensated Nozzle", "Усталёўка кампенсаванай фарсункі MPR Plus Series", "Рэдагаванне кампенсаванай фарсункі MPR Plus Series"],
            "toromprplusPCStrip": ["MPR Plus Series Pressure-compensated Nozzle", "Усталёўка кампенсаванай фарсункі MPR Plus Series", "Рэдагаванне кампенсаванай фарсункі MPR Plus Series"],
            "precisionRotator": ["Precision Series Rotating Nozzle", "Усталёўка крутнай фарсункі Precision Series", "Рэдагаванне крутнай фарсункі Precision Series"],
            "precisionRotatorF": ["Precision Series Rotating Nozzle", "Усталёўка крутнай фарсункі Precision Series", "Рэдагаванне крутнай фарсункі Precision Series"],
            "precisionSpray": ["Precision Series Nozzle", "Усталёўка фарсункі Precision Series", "Рэдагаванне фарсункі Precision Series"],
            "precisionSprayF": ["Precision Series Nozzle", "Усталёўка фарсункі Precision Series", "Рэдагаванне фарсункі Precision Series"],
            "precisionSprayStrip": ["Precision Series Nozzle", "Усталёўка фарсункі Precision Series", "Рэдагаванне фарсункі Precision Series"],
            "precisionSprayStripF": ["Precision Series Nozzle", "Усталёўка фарсункі Precision Series", "Рэдагаванне фарсункі Precision Series"],
            "precisionSprayPC": ["Precision Series Pressure-compensated Nozzle", "Усталёўка кампенсаванай фарсункі Precision Series", "Рэдагаванне кампенсаванай фарсункі Precision Series"],
            "precisionSprayPCF": ["Precision Series Pressure-compensated Nozzle", "Усталёўка кампенсаванай фарсункі Precision Series", "Рэдагаванне кампенсаванай фарсункі Precision Series"],
            "precisionSprayPCStrip": ["Precision Series Pressure-compensated Nozzle", "Усталёўка кампенсаванай фарсункі Precision Series", "Рэдагаванне кампенсаванай фарсункі Precision Series"],
            "precisionSprayPCStripF": ["Precision Series Pressure-compensated Nozzle", "Усталёўка кампенсаванай фарсункі Precision Series", "Рэдагаванне кампенсаванай фарсункі Precision Series"],
            "tvantoro": ["TVAN Series Nozzle", "Усталёўка фарсункі TVAN Series", "Рэдагаванне фарсункі TVAN Series"],
            "streamSprayNozToro": ["Шматструменевая фарсунка", "Усталёўка шматструменевай фарсункі", "Рэдагаванне шматструменевай фарсункі"],
            "streamSprayNozToroPC": ["Шматструменевая фарсунка", "Усталёўка шматструменевай фарсункі", "Рэдагаванне шматструменевай фарсункі"],
            "bubbWM": ["Баблер", "Усталёўка баблера", "Рэдагаванне баблера"],
            "bubbWMADJ": ["Баблер", "Усталёўка баблера", "Рэдагаванне баблера"],
            "maxaan": ["MAXAAN Nozzle", "Усталёўка фарсункі MAXAAN", "Рэдагаванне фарсункі MAXAAN"],
            "maxmpr": ["MAXMPR Nozzle", "Усталёўка фарсункі MAXMPR", "Рэдагаванне фарсункі MAXMPR"],
            "maxmprst": ["MAXMPR Strip Nozzle", "Усталёўка фарсункі MAXMPR Strip Nozzle", "Рэдагаванне фарсункі MAXMPR Strip Nozzle"],
            "maxmprstream": ["MAXMPR Stream Bubbler Nozzle", "Усталёўка фарсункі MAXMPR Stream Bubbler", "Рэдагаванне фарсункі MAXMPR Stream Bubbler"],
            "maxmprststream": ["MAXMPR Stream Bubbler Nozzle", "Усталёўка фарсункі MAXMPR Stream Bubbler", "Рэдагаванне фарсункі MAXMPR Stream Bubbler"],
            "bseries": ["B Series Nozzle", "Усталёўка фарсункі B Series", "Рэдагаванне фарсункі B Series"],
            "bseriesst": ["B Series Strip Nozzle", "Усталёўка фарсункі B Series Strip Nozzle", "Рэдагаванне фарсункі B Series Strip Nozzle"],
            "trench": ["Траншэя", "Маляванне траншэі", "Рэдагаванне траншэі"],
            "v": ["Размеркавальны грабянец", "Усталёўка размеркавальнага грабянца", "Рэдагаванне размеркавальнага грабянца"],
            "ws": ["Крыніца вады", "Усталёўка крыніцы вады", "Рэдагаванне крыніцы вады"],
            "lp": ["Латэральная труба", "Маляванне латэральнай трубы", "Рэдагаванне латэральнай трубы"],
            "mp": ["Асноўная магістраль", "Маляванне асноўнай магістралі", "Рэдагаванне асноўнай магістралі"]
        },
        vars: {
            sp: "Дажджаванне",
            ld: "Ландшафт",
            mixed_sp_lo: "Дождевание/Чертёж",
            mixed_sp_lo2: "Дождевание/Чертёж 2",
            mixed_ld_lo: "Ландшафт/Чертёж",
            hw: "Hydrawise",
            lo: "Рысунак",
            loPM: "Карты ападкаў",
            doIrrigate: "Поливаемая площадь",
            doNotIrrigate: "НЕ поливаемая площадь",
            stdSurf: "Стандартная",
            fineCut: "Падстрыжаны траўнік",
            raw: "Неапрацаваны бетон",
            soft: "Дробны пясок",
            flowerBedMix1: "Кветкавы мікс 1",
            flowerBedMix2: "Кветкавы мікс 2",
            flowerBedMix3: "Кветкавы мікс 3",
            flowerBedWhite: "Кветкавы кветнік белы",
            flowerBedBlue: "Кветкавы кветнік сіні",
            flowerBedYellow: "Кветкавы кветнік жоўты",
            flowerBedRed: "Кветкавы кветнік чырвоны",
            flowerBedMalina: "Кветкавы кветнік малінавы",
            flowerBedOrange: "Кветкавы кветнік памяранцавы",
            flowerBedDarkBlue: "Кветкавы кветнік цёмна-сіняя",
            flowerBedViolet: "Кветкавы кветнік фіялетавы",
            flowerBedDarkViolet: "Кветкавы кветнік цёмна-фіялетавая",
            herbalBed1: "Травяны кветнік 1",
            herbalBed2: "Травяны кветнік 2",
            mulch: "Мульча",
            gravel: "Щебень",
            shrubs: "Кусты 1",
            pavementFill: "Дарожкі 1",
            pavementContour: "Дарожкі 2",
            pavement3: "Дарожкі 3",
            pavement01_A: "Тэтрыс 1",
            pavement01_B: "Тэтрыс 2",
            pavement01_C: "Тэтрыс 3",
            pavement02_A: "Дыяганаль 1",
            pavement02_B: "Дыяганаль 2",
            pavement03_A: "Дзікі камень 1",
            pavement03_B: "Дзікі камень 2",
            pavement04_Red_L: "Соты Чырвоныя Светлыя",
            pavement04_Red_D: "Соты Чырвоныя Цёмныя",
            pavement04_Green_L: "Соты Зялёныя Светлыя",
            pavement04_Green_D: "Соты Зялёныя Цёмныя",
            pavement04_Blue_L: "Соты Сінія Светлыя",
            pavement04_Blue_D: "Соты Сінія Цёмныя",
            pool: "Басейн",
            lo_stdDynCurve: "Динамическая",
            lo_stdCurve: "Стандартная",
            stdCurve: "Стандартная",
            markCurve: "Чырвоны маркер",
            pathCurve: "Дарожка",
            pillarCurve: "Слуп",
            fenceCurve: "Плот",
            test00: "Тэст 00",
            test01: "Тэст 01",
            test02: "Тэст 02",
            test03: "Тэст 03",
            test04: "Тэст 04",
            test05: "Тэст 05",
            test06: "Тэст 06",
            saf01: "Камень 1",
            saf02: "Камень 2",
            saf03: "Камень 3",
            saf04: "Камень 4",
            saf05: "Камень 5",
            saf06: "Камень 6",
            saf07: "Камень 7",
            saf08: "Крамка 1",
            saf09: "Крамка 2",
            saf10: "Мэбля 1",
            saf11: "Мэбля 2",
            saf12: "Аўтамабіль 1",
            saf13: "Аўтамабіль 2",
            saf14: "Дзіцячая горка 1",
            saf14_0: "Дзіцячая горка 2",
            saf14_L: "Дзіцячая горка 3",
            saf14_R: "Дзіцячая горка 4",
            saf15: "Арэлі з паветкай",
            saf16: "Ляжак 1",
            saf17: "Ляжак 2",
            saf18: "Свяцільня 1",
            saf19: "Свяцільня 2",
            saf20: "Вадаспад",
            saf21: "Водоём 1",
            saf22: "Водоём 2",
            saf23: "Люк 1",
            saf24: "Люк 2",
            bush01: "Куст №01",
            bush02: "Куст №02",
            bush03: "Куст №03",
            bush04: "Куст №04",
            bush05: "Куст №05",
            bush06: "Куст №06",
            bush07: "Куст №07",
            bush08: "Куст №08",
            bush09: "Куст №09",
            bush10: "Куст №10",
            bush11: "Куст №11",
            bush12: "Куст №12",
            bush13: "Куст №13",
            tree00: "Пладовае дрэва",
            tree01: "Дрэва №01",
            tree02: "Дрэва №02",
            tree03: "Дрэва №03",
            tree04: "Дрэва №04",
            tree05: "Дрэва №05",
            tree06: "Дрэва №06",
            tree07: "Дрэва №07",
            tree08: "Дрэва №08",
            tree09: "Дрэва №09",
            tree10: "Дрэва №10",
            tree11: "Дрэва №11",
            tree12: "Дрэва №12",
            tree13: "Дрэва №13",
            tree14: "Дрэва №14",
            tree15: "Дрэва №15",
            tree16: "Дрэва №16",
            tree17: "Дрэва №17",
            stdRuler: "Стандартная",
            fixedCntr: "Фіксаваная колькасць зон",
            stand_aloneCntr: "Аўтаномны кантролер",
            modularCntr: "Модульны кантролер",
            rainSensor: "Чуйнік дажджу",
            soilSensor: "Чуйнік вільготнасці глебы",
            freezeSensor: "Чуйнік замаразкаў",
            wrFreezeSensor: "Беспроводной датчик Дождя/Заморозков",
            windSensor: "Чуйнік ветру",
            solarSensor: "Чуйнік сонечнай актыўнасці",
            flowSensor: "Чуйнік струменя",
            weatherStation: "Метэастанцыя",
            controlWire: "Кіроўны провад",
            sensorWire: "Праводка чуйніка",
            wirelessWire: "Беспроводное подключение",
            dS16: "Старт 16мм",
            dS17: "Старт 17мм",
            qcPlastic: "Водаразборная калонка (пластыкавая)",
            qcMetal: "Водаразборная калонка (металічная)",
            hdpePE80SDR11: "ПНД ПЭ80 SDR 11",
            hdpePE80SDR136: "ПНД ПЭ80 SDR 13.6",
            hdpePE80SDR176: "ПНД ПЭ80 SDR 17.6",
            hdpePE100SDR11: "ПНД ПЭ100 SDR 11",
            hdpePE100SDR136: "ПНД ПЭ100 SDR 13.6",
            hdpePE100SDR176: "ПНД ПЭ100 SDR 17.6",
            hdpeSDR9: "ПНД SDR 9",
            hdpeSDR11: "ПНД SDR 11",
            hdpeSDR136: "ПНД SDR 13.6",
            hdpeSDR17: "ПНД SDR 17",
            hdpeSDR176: "ПНД SDR 17.6",
            pvcSCH40: "ПВХ SCH 40",
            pvcSCH80: "ПВХ SCH 80",
            stdTrench: "Стандартная (40 см)",
            normalTrench: "Средняя (W:10cm D:50cm)",
            narrowTrench: "Узкая (W:5cm D:30cm) (траншеекопатель)",
            wideTrench: "Широкая (W:30cm D:60cm) (мини-экскаватор)",
            multi: "Клапанавы бокс",
            source: "Крыніца водазабеспячэння",
            empty: "Пуста",
            frame: "Рамка",
            gostDefault: "ДАСТ 21.101-97 (Першы ліст)",
            gostSmall: "ДАСТ 21.101-97 (Наступныя лісты)",
            a4hor: "A4 Гарызантальны",
            a4vert: "A4 Вертыкальны",
            a3hor: "A3 Гарызантальны",
            a3vert: "A3 Вертыкальны",
            a2hor: "A2 Гарызантальны",
            a2vert: "A2 Вертыкальны",
            a1hor: "A1 Гарызантальны",
            a1vert: "A1 Вертыкальны",
            a0hor: "A0 Гарызантальны",
            a0vert: "A0 Вертыкальны",
            stdCompass: "Компас",
            gostSize: "Памер ДАСТ",
            landscp: "Табліца ландшафту",
            conv: "Умоўныя пазначэнні",
            convAll: "Умоўныя пазначэнні (все)",
            zoneT: "Зоны палівання",
            sprinkZoneTimeT: "Время дождевания газона",
            sprinkT: "Дажджавацелi",
            dripT: "Кропельныя лініі",
            insItemT: "Закладныя дэталі (Ведамасць)",
            insVarDiamT: "Закладныя дэталі (Матэрыял/Дыяметр)",
            insDiamT: "Закладныя дэталі (Дыяметр)",
            insVarT: "Закладныя дэталі (Матэрыял)",
            staticText: "Тэкст статычны",
            dynamicText: "Тэкст дынамічны",
            stampTextDef: "Тэкст штампа",
            sbStdMetric: "Сярэдняя шкала (Metric)",
            sbMinMetric: "Маленькая (Metric)",
            sbExtMetric: "Вялікая (Metric)",
            bStdImperial: "Сярэдняя шкала (Imperial)",
            sbMinImperial: "Маленькая (Imperial)",
            sbExtImperial: "Вялікая (Imperial)",
            gentleMicroClimate: "Мягкий",
            normalMicroClimate: "Нормальный",
            toughMicroClimate: "Жёсткий",
            sand: "Песчаная",
            sandyLoam: "Супесь",
            lightLoam: "Суглинок лёгкий",
            mediumLoam: "Суглинок средний",
            heavyLoam: "Суглинок тяжёлый",
            clay: "Глина",
            heavyClay: "Глина тяжёлая",
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
            rotorType: ["Ротар серыі {{series}} от {{brand}}", "Усталёўка ротара серыі {{series}} от {{brand}}", "Рэдагаванне ротара серыі {{series}} от {{brand}}"]
        }
    };
})(this);
