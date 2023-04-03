(function (p) {
    if (window.paperLocale !== "uk") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Поверхня", "Малювання поверхні", "Редагування поверхні"],
            brushLawn: ["Газон", "Малювання газону", "Редагування газону"],
            brushConcrete: ["Бетон", "Малювання бетону", "Редагування бетону"],
            brushSand: ["Пісок", "Малювання піску", "Редагування піску"],
            brushBed: ["Клумба", "Малювання клумби", "Редагування клумби"],
            brushBedding: ["Відсипка", "Малювання відсипки", "Редагування відсипки"],
            brushShrubs: ["Кущі", "Малювання кущів", "Редагування кущів"],
            brushPath: ["Доріжка", "Малювання доріжок", "Редагування доріжок"],
            brushWater: ["Вода", "Малювання води", "Редагування води"],
            curve: ["Лінія", "Малювання лінії", "Редагування лінії"],
            bush: ["Кущ", "Садіння кущів", "Редагування кущів"],
            saf: ["Малі архітектурні форми", "Монутвання МАФ", "Редагування МАФ"],
            tree: ["Дерево", "Садіння дерева", "Редагування дерева"],
            polySurface: ["Поверхня", "Малювання поверхні", "Редагування поверхні"],
            polyLawn: ["Газон", "Малювання газону", "Редагування газону"],
            polyConcrete: ["Бетон", "Малювання бетону", "Редагування бетону"],
            polySand: ["Пісок", "Малювання піску", "Редагування піску"],
            polyBed: ["Клумба", "Малювання клумби", "Редагування клумби"],
            polyBedding: ["Відсипка", "Малювання відсипки", "Редагування відсипки"],
            polyShrubs: ["Кущі", "Малювання кущів", "Редагування кущів"],
            polyPath: ["Доріжка", "Малювання доріжок", "Редагування доріжок"],
            polyWater: ["Вода", "Малювання води", "Редагування води"],
            ruler: ["Рулетка", "Рулетка", "Рулетка"],
            cntr: ["Контроллер", "Монутвання контроллера", "Редагування контроллера"],
            sens: ["Датчик", "Монутвання датчика", "Редагування датчика"],
            wr: ["Керуючий провід", "Прокладання керуючого проводу", "Редагування керуючого проводу"],
            swr: ["Провід датчика", "Прокладання проводу датчика", "Редагування проводу датчика"],
            dl16: ["Крапельна лінія 16мм", "Прокладання крапельної лінії 16мм", "Редагування крапельної лінії 16мм"],
            ds16: ["Старт 16мм", "Малювання крапельного старту 16мм", "Редагування крапельного старту 16мм"],
            dl17: ["Крапельна лінія 17мм", "Прокладання крапельної лінії 17мм", "Редагування крапельної лінії 17мм"],
            ds17: ["Старт 17мм", "Малювання крапельного старту 17мм", "Редагування крапельного старту 17мм"],
            rzw: ["Прикореневий полив", "Монутвання прикоревого поливу", "Редагування прикорневого поливу"],
            qc: ["Водорозбірна колонка", "Монутвання водорозбірної колонки", "Редагування водорозбірної колонки"],
            inset: ["Закладна", "Малювання закладних", "Редагування закладних"],
            mpRotator: ["Mp Rotator", "Монутвання Mp Rotator", "Редагування Mp Rotator"],
            mpRotatorSR: ["Mp Rotator 800", "Монутвання Mp Rotator 800", "Редагування Mp Rotator 800"],
            mpRotatorStrip: ["Mp Rotator Strip", "Монутвання Mp Rotator Strip", "Редагування Mp Rotator Strip"],
            bubbNHMS: ["Форсунка-баблер", "Монутвання форсунки-баблера", "Редагування форсунки-баблера"],
            bubbNHPC: ["Форсунка-баблер", "Монутвання форсунки-баблера", "Редагування форсунки-баблера"],
            bubbNHDS: ["Форсунка-баблер", "Монутвання форсунки-баблера", "Редагування форсунки-баблера"],
            pdcAdj: ["PRO Adjustable Nozzle", "Монутвання форсунки PRO Adjustable", "Редагування форсунки PRO Adjustable"],
            prosFixed: ["Pro-Spray Fixed Nozzle", "Монутвання форсунки Pro-Spray Fixed", "Редагування форсунки Pro-Spray Fixed"],
            srNoz: ["Short Radius Nozzle", "Монутвання форсунки Short Radius Nozzle", "Редагування форсунки Short Radius Nozzle"],
            streamNoz: ["Stream Nozzle", "Монутвання форсунки Stream Nozzle", "Редагування форсунки Stream Nozzle"],
            strPatNoz: ["Strip Pattern Nozzle", "Монутвання форсунки Strip Pattern Nozzle", "Редагування форсунки Strip Pattern Nozzle"],
            bubbHPC: ["Баблер", "Монутвання баблера", "Редагування баблера"],
            bubbHAF: ["Баблер", "Монутвання баблера", "Редагування баблера"],
            bubbTB: ["Баблер", "Монутвання баблера", "Редагування баблера"],
            bubbTBADJ: ["Баблер", "Монутвання баблера", "Редагування баблера"],
            fnf: ["Fixed Nozzle", "Монутвання форсунки Fixed", "Редагування форсунки Fixed"],
            fnm: ["Fixed Nozzle", "Монутвання форсунки Fixed", "Редагування форсунки Fixed"],
            fnfstrip: ["Strip Pattern Nozzle", "Монутвання форсунки Strip Pattern Nozzle", "Редагування форсунки Strip Pattern Nozzle"],
            fnmstrip: ["Strip Pattern Nozzle", "Монутвання форсунки Strip Pattern Nozzle", "Редагування форсунки Strip Pattern Nozzle"],
            hekvf: ["HE-KVF Nozzle", "Монутвання форсунки HE-KVF", "Редагування форсунки HE-KVF"],
            kv: ["KV Nozzle", "Монутвання форсунки KV", "Редагування форсунки KV"],
            rn: ["RN", "Монутвання RN", "Редагування RN"],
            rns: ["RN Strip", "Монутвання RN Strip", "Редагування RN Strip"],
            rna: ["RN-ADJ", "Монутвання RN-ADJ", "Редагування RN-ADJ"],
            "bubbRBPC": ["Баблер", "Монутвання баблера", "Редагування баблера"],
            "bubbRBPCT": ["Баблер", "Монутвання баблера", "Редагування баблера"],
            "bubbRBADJ": ["Баблер", "Монутвання баблера", "Редагування баблера"],
            "bubbNMPR": ["Форсунка-баблер", "Монутвання форсунки-баблера", "Редагування форсунки-баблера"],
            "bubbNMPRSt": ["Форсунка-баблер", "Монутвання форсунки-баблера", "Редагування форсунки-баблера"],
            "hevan": ["HE-VAN Nozzle", "Монутвання форсунки HE-VAN", "Редагування форсунки HE-VAN"],
            "mprseries": ["MPR-Series Nozzle", "Монутвання форсунки MPR-Series", "Редагування форсунки MPR-Series"],
            "mprstseries": ["MPR Strip Pattern Nozzle", "Монутвання форсунки MPR Strip Pattern Nozzle", "Редагування форсунки MPR Strip Pattern Nozzle"],
            "rvan": ["R-VAN", "Монутвання R-VAN", "Редагування R-VAN"],
            "rvanStrip": ["R-VAN Strip", "Монутвання R-VAN Strip", "Редагування R-VAN Strip"],
            "sqseries": ["SQ Series Square Pattern Nozzle", "Монутвання форсунки SQ Series Square Pattern Nozzle", "Редагування форсунки SQ Series Square Pattern Nozzle"],
            "useries": ["U-Series Nozzle", "Монутвання форсунки U-Series", "Редагування форсунки U-Series"],
            "van": ["VAN Nozzle", "Монутвання форсунки VAN", "Редагування форсунки VAN"],
            "bubbToro500": ["Баблер", "Монутвання баблера", "Редагування баблера"],
            "bubbToro500S": ["Баблер", "Монутвання баблера", "Редагування баблера"],
            "bubbNozToroPC": ["Форсунка-баблер", "Монутвання форсунки-баблера", "Редагування форсунки-баблера"],
            "bubbNozStreamToro": ["Форсунка-баблер", "Монутвання форсунки-баблера", "Редагування форсунки-баблера"],
            "bubbNozStreamToroPC": ["Форсунка-баблер", "Монутвання форсунки-баблера", "Редагування форсунки-баблера"],
            "bubbNozOppStreamToro": ["Форсунка-баблер", "Монутвання форсунки-баблера", "Редагування форсунки-баблера"],
            "bubbNozOppStreamToroPC": ["Форсунка-баблер", "Монутвання форсунки-баблера", "Редагування форсунки-баблера"],
            "toromprplus": ["MPR Plus Series Nozzle", "Монутвання форсунки MPR Plus Series", "Редагування форсунки MPR Plus Series"],
            "toromprplusStrip": ["MPR Plus Series Nozzle", "Монутвання форсунки MPR Plus Series", "Редагування форсунки MPR Plus Series"],
            "toromprplusPC": ["MPR Plus Series Pressure-compensated Nozzle", "Монутвання компенсаційної форсунки MPR Plus Series", "Редагування компенсаційної форсунки MPR Plus Series"],
            "toromprplusPCStrip": ["MPR Plus Series Pressure-compensated Nozzle", "Монутвання компенсаційної форсунки MPR Plus Series", "Редагування компенсаційної форсунки MPR Plus Series"],
            "precisionRotator": ["Precision Series Rotating Nozzle", "Монутвання ротаційної форсунки Precision Series", "Редагування ротаційної форсунки Precision Series"],
            "precisionRotatorF": ["Precision Series Rotating Nozzle", "Монутвання ротаційної форсунки Precision Series", "Редагування ротаційної форсунки Precision Series"],
            "precisionSpray": ["Precision Series Nozzle", "Монутвання форсунки Precision Series", "Редагування форсунки Precision Series"],
            "precisionSprayF": ["Precision Series Nozzle", "Монутвання форсунки Precision Series", "Редагування форсунки Precision Series"],
            "precisionSprayStrip": ["Precision Series Nozzle", "Монутвання форсунки Precision Series", "Редагування форсунки Precision Series"],
            "precisionSprayStripF": ["Precision Series Nozzle", "Монутвання форсунки Precision Series", "Редагування форсунки Precision Series"],
            "precisionSprayPC": ["Precision Series Pressure-compensated Nozzle", "Монутвання компенсаційної форсунки Precision Series", "Редагування компенсаційної форсунки Precision Series"],
            "precisionSprayPCF": ["Precision Series Pressure-compensated Nozzle", "Монутвання компенсаційної форсунки Precision Series", "Редагування компенсаційної форсунки Precision Series"],
            "precisionSprayPCStrip": ["Precision Series Pressure-compensated Nozzle", "Монутвання компенсаційної форсунки Precision Series", "Редагування компенсаційної форсунки Precision Series"],
            "precisionSprayPCStripF": ["Precision Series Pressure-compensated Nozzle", "Монутвання компенсаційної форсунки Precision Series", "Редагування компенсаційної форсунки Precision Series"],
            "tvantoro": ["TVAN Series Nozzle", "Монутвання форсунки TVAN Series", "Редагування форсунки TVAN Series"],
            "streamSprayNozToro": ["Багатоструменева форсунка", "Монутвання багатоструменевої форсунки", "Редагування багатоструменевої форсунки"],
            "streamSprayNozToroPC": ["Багатоструменева форсунка", "Монутвання багатоструменевої форсунки", "Редагування багатоструменевої форсунки"],
            "bubbWM": ["Баблер", "Монутвання баблера", "Редагування баблера"],
            "bubbWMADJ": ["Баблер", "Монутвання баблера", "Редагування баблера"],
            "maxaan": ["MAXAAN Nozzle", "Монутвання форсунки MAXAAN", "Редагування форсунки MAXAAN"],
            "maxmpr": ["MAXMPR Nozzle", "Монутвання форсунки MAXMPR", "Редагування форсунки MAXMPR"],
            "maxmprst": ["MAXMPR Strip Nozzle", "Монутвання форсунки MAXMPR Strip Nozzle", "Редагування форсунки MAXMPR Strip Nozzle"],
            "maxmprstream": ["MAXMPR Stream Bubbler Nozzle", "Монутвання форсунки MAXMPR Stream Bubbler", "Редагування форсунки MAXMPR Stream Bubbler"],
            "maxmprststream": ["MAXMPR Stream Bubbler Nozzle", "Монутвання форсунки MAXMPR Stream Bubbler", "Редагування форсунки MAXMPR Stream Bubbler"],
            "bseries": ["B Series Nozzle", "Монутвання форсунки B Series", "Редагування форсунки B Series"],
            "bseriesst": ["B Series Strip Nozzle", "Монутвання форсунки B Series Strip Nozzle", "Редагування форсунки B Series Strip Nozzle"],
            "trench": ["Траншея", "Малювання траншеи", "Редагування траншеи"],
            "v": ["Розподільна гребінка", "Монутвання розподільної гребінки", "Редагування розподільної гребінки"],
            "ws": ["Джерело води", "Монутвання джерела води", "Редагування джерела води"],
            "lp": ["Зональна труба", "Малювання зональної труби", "Редагування зональної труби"],
            "mp": ["Основна магістраль", "Малювання основної магістралі", "Редагування основної магістралі"]
        },
        vars: {
            sp: "Зрошування",
            ld: "Ландшафт",
            mixed_sp_lo: "Зрошування/Креслення",
            mixed_ld_lo: "Ландшафт/Креслення",
            hw: "Hydrawise",
            lo: "Креслення",
            loPM: "Карты осадков",
            doIrrigate: "Поливаемая площадь",
            doNotIrrigate: "НЕ поливаемая площадь",
            stdSurf: "Стандартна",
            fineCut: "Підстрижений газон",
            raw: "Необроблений бетон",
            soft: "Дрібний пісок",
            flowerBedMix1: "Квітковий мікс 1",
            flowerBedMix2: "Квітковий мікс 2",
            flowerBedMix3: "Квітковий мікс 3",
            flowerBedWhite: "Квіткова клумба біла",
            flowerBedBlue: "Квіткова клумба синя",
            flowerBedYellow: "Квіткова клумба жовта",
            flowerBedRed: "Квіткова клумба червона",
            flowerBedMalina: "Квіткова клумба малинова",
            flowerBedOrange: "Квіткова клумба оранжева",
            flowerBedDarkBlue: "Квіткова клумба темно-синя",
            flowerBedViolet: "Квіткова клумба фіолетова",
            flowerBedDarkViolet: "Квіткова клумба темно-фіолетова",
            herbalBed1: "Трав'яна клумба 1",
            herbalBed2: "Трав'яна клумба 2",
            mulch: "Мульча",
            gravel: "Щебень",
            shrubs: "Кущі 1",
            pavementFill: "Дріжки 1",
            pavementContour: "Доріжки 2",
            pavement3: "Доріжки 3",
            pavement01_A: "Тетріс 1",
            pavement01_B: "Тетріс 2",
            pavement01_C: "Тетріс 3",
            pavement02_A: "Діагональ 1",
            pavement02_B: "Діагональ 2",
            pavement03_A: "Дикий камінь 1",
            pavement03_B: "Дикий камінь 2",
            pavement04_Red_L: "Соти Червоні Світлі",
            pavement04_Red_D: "Соти Червоні Темні",
            pavement04_Green_L: "Соти Зелені Світлі",
            pavement04_Green_D: "Соти Зелені Темні",
            pavement04_Blue_L: "Соти Синие Світлі",
            pavement04_Blue_D: "Соти Синие Темні",
            pool: "Басейн",
            lo_stdDynCurve: "Динамическая",
            lo_stdCurve: "Стандартная",
            stdCurve: "Стандартна",
            markCurve: "Червоний маркер",
            pathCurve: "Доріжка",
            pillarCurve: "Стовб",
            fenceCurve: "Паркан",
            test00: "Тест 00",
            test01: "Тест 01",
            test02: "Тест 02",
            test03: "Тест 03",
            test04: "Тест 04",
            test05: "Тест 05",
            test06: "Тест 06",
            saf01: "Камінь 1",
            saf02: "Камінь 2",
            saf03: "Камінь 3",
            saf04: "Камінь 4",
            saf05: "Камінь 5",
            saf06: "Камінь 6",
            saf07: "Камінь 7",
            saf08: "Лавочка 1",
            saf09: "Лавочка 2",
            saf10: "Мебля 1",
            saf11: "Мебля 2",
            saf12: "Автомобіль 1",
            saf13: "Автомобіль 2",
            saf14: "Дитячка горка 1",
            saf14_0: "Дитячка горка 2",
            saf14_L: "Дитячка горка 3",
            saf14_R: "Дитячка горка 4",
            saf15: "Гойдалка з навісом",
            saf16: "Лижак 1",
            saf17: "Лижак 2",
            saf18: "Ліхтар 1",
            saf19: "Ліхтар 2",
            saf20: "Водоспад",
            saf21: "Водоём 1",
            saf22: "Водоём 2",
            saf23: "Люк 1",
            saf24: "Люк 2",
            bush01: "Кущ №01",
            bush02: "Кущ №02",
            bush03: "Кущ №03",
            bush04: "Кущ №04",
            bush05: "Кущ №05",
            bush06: "Кущ №06",
            bush07: "Кущ №07",
            bush08: "Кущ №08",
            bush09: "Кущ №09",
            bush10: "Кущ №10",
            bush11: "Кущ №11",
            bush12: "Кущ №12",
            bush13: "Кущ №13",
            tree00: "Фруктове дерево",
            tree01: "Дерево №01",
            tree02: "Дерево №02",
            tree03: "Дерево №03",
            tree04: "Дерево №04",
            tree05: "Дерево №05",
            tree06: "Дерево №06",
            tree07: "Дерево №07",
            tree08: "Дерево №08",
            tree09: "Дерево №09",
            tree10: "Дерево №10",
            tree11: "Дерево №11",
            tree12: "Дерево №12",
            tree13: "Дерево №13",
            tree14: "Дерево №14",
            tree15: "Дерево №15",
            tree16: "Дерево №16",
            tree17: "Дерево №17",
            stdRuler: "Стандартна",
            fixedCntr: "Фіксована кількість зон",
            stand_aloneCntr: "Автономний контролер",
            modularCntr: "Модульний контролер",
            rainSensor: "Датчик дощу",
            soilSensor: "Датчик вологості грунту",
            freezeSensor: "Датчик заморозків",
            wrFreezeSensor: "Беспроводной датчик Дождя/Заморозков",
            windSensor: "Датчик вітру",
            solarSensor: "Датчик активності сонця",
            flowSensor: "Датчик протоку",
            weatherStation: "Метеостанці1я",
            controlWire: "Керуючий провід",
            sensorWire: "Провід датчика",
            wirelessWire: "Беспроводное подключение",
            dS16: "Старт 16мм",
            dS17: "Старт 17мм",
            qcPlastic: "Водорозбірна колонка (пластмасова)",
            qcMetal: "Водорозбірна колонка (металічна)",
            hdpePE80SDR11: "ПНТ ПЭ80 SDR 11",
            hdpePE80SDR136: "ПНТ ПЭ80 SDR 13.6",
            hdpePE80SDR176: "ПНТ ПЭ80 SDR 17.6",
            hdpePE100SDR11: "ПНТ ПЭ100 SDR 11",
            hdpePE100SDR136: "ПНТ ПЭ100 SDR 13.6",
            hdpePE100SDR176: "ПНТ ПЭ100 SDR 17.6",
            hdpeSDR9: "ПНТ SDR 9",
            hdpeSDR11: "ПНТ SDR 11",
            hdpeSDR136: "ПНТ SDR 13.6",
            hdpeSDR17: "ПНТ SDR 17",
            hdpeSDR176: "ПНТ SDR 17.6",
            pvcSCH40: "ПВХ SCH 40",
            pvcSCH80: "ПВХ SCH 80",
            stdTrench: "Стандартна (40 см)",
            normalTrench: "Средняя (W:10cm D:50cm)",
            narrowTrench: "Узкая (W:5cm D:30cm) (траншеекопатель)",
            wideTrench: "Широкая (W:30cm D:60cm) (мини-экскаватор)",
            multi: "Бокс з клапанами",
            source: "Джерело водопостачання",
            empty: "Пусто",
            frame: "Рамка",
            gostDefault: "ДЕСТ 21.101-97 (First)",
            gostSmall: "ДЕСТ 21.101-97 (Rest)",
            a4hor: "A4 Горизонтальний",
            a4vert: "A4 Вертикальний",
            a3hor: "A3 Горизонтальний",
            a3vert: "A3 Вертикальний",
            a2hor: "A2 Горизонтальний",
            a2vert: "A2 Вертикальний",
            a1hor: "A1 Горизонтальний",
            a1vert: "A1 Вертикальний",
            a0hor: "A0 Горизонтальний",
            a0vert: "A0 Вертикальний",
            stdCompass: "Компас",
            gostSize: "Розмір ДЕСТ",
            landscp: "Таблиця ландшафту",
            conv: "Умовні позначення",
            zoneT: "Зони зрошення",
            sprinkZoneTimeT: "Время дождевания газона",
            sprinkT: "Зрошувачі",
            dripT: "Крапельні лінії",
            insItemT: "Закладні деталі (Список)",
            insVarDiamT: "Закладні деталі (Матеріал/Діаметр)",
            insDiamT: "Закладні деталі (Діаметр)",
            insVarT: "Закладні деталі (Матеріал)",
            staticText: "Текст статичний",
            dynamicText: "Текст динамічний",
            stampTextDef: "Текст штампу",
            sbStdMetric: "Середня шкала (Metric)",
            sbMinMetric: "Мала (Metric)",
            sbExtMetric: "Велика (Metric)",
            sbStdImperial: "Середня шкала (Imperial)",
            sbMinImperial: "Мала (Imperial)",
            sbExtImperial: "Велика (Imperial)",
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
            rotorType: ["Ротор серии {{series}} от {{brand}}", "Монтування ротора серії {{series}} от {{brand}}", "Редагування ротора серії {{series}} от {{brand}}"]
        }
    };
})(this);
