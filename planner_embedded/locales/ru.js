(function (p) {
    if (window.paperLocale !== "ru") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Поверхность", "Рисование поверхности", "Редактирование поверхности"],
            brushLawn: ["Газон", "Рисование газона", "Редактирование газона"],
            brushConcrete: ["Бетон", "Рисование бетона", "Редактирование бетона"],
            brushSand: ["Песок", "Рисование песка", "Редактирование песка"],
            brushBed: ["Клумба", "Рисование клумбы", "Редактирование клумбы"],
            brushBedding: ["Отсыпка", "Рисование отсыпки", "Редактирование отсыпки"],
            brushShrubs: ["Кусты", "Рисование кустов", "Редактирование кустов"],
            brushPath: ["Дорожка", "Рисование дорожек", "Редактирование дорожек"],
            brushWater: ["Вода", "Рисование воды", "Редактирование воды"],
            curve: ["Линия", "Рисование линии", "Редактирование линии"],
            bush: ["Куст", "Посадка кустов", "Редактирование кустов"],
            saf: ["Малые архитектурные формы", "Установка МАФ", "Редактирование МАФ"],
            tree: ["Дерево", "Посадка дерева", "Редактирование дерева"],
            polySurface: ["Поверхность", "Рисование поверхности", "Редактирование поверхности"],
            polyLawn: ["Газон", "Рисование газона", "Редактирование газона"],
            polyConcrete: ["Бетон", "Рисование бетона", "Редактирование бетона"],
            polySand: ["Песок", "Рисование песка", "Редактирование песка"],
            polyBed: ["Клумба", "Рисование клумбы", "Редактирование клумбы"],
            polyBedding: ["Отсыпка", "Рисование отсыпки", "Редактирование отсыпки"],
            polyShrubs: ["Кусты", "Рисование кустов", "Редактирование кустов"],
            polyPath: ["Дорожка", "Рисование дорожек", "Редактирование дорожек"],
            polyWater: ["Вода", "Рисование воды", "Редактирование воды"],
            ruler: ["Рулетка", "Рулетка", "Рулетка"],
            cntr: ["Контроллер", "Установка контроллера", "Редактирование контроллера"],
            sens: ["Датчик", "Установка датчика", "Редактирование датчика"],
            wr: ["Управляющий провод", "Укладка управляющего провода", "Редактирование управляющего провода"],
            swr: ["Проводка датчика", "Укладка проводки датчика", "Редактирование проводки датчика"],
            dl16: ["Капельная линия 16мм", "Укладка капельной линии 16мм", "Редактирование капельной линии 16мм"],
            ds16: ["Старт 16мм", "Рисование капельного старта 16мм", "Редактирование капельного старта 16мм"],
            dl17: ["Капельная линия 17мм", "Укладка капельной линии 17мм", "Редактирование капельной линии 17мм"],
            ds17: ["Старт 17мм", "Рисование капельного старта 17мм", "Редактирование капельного старта 17мм"],
            rzw: ["Прикорневой полив", "Установка прикоревого полива", "Редактирование прикорневого полива"],
            qc: ["Водоразборная колонка", "Установка водоразборной колонки", "Редактирование водоразборной колонки"],
            inset: ["Закладная", "Рисование закладных", "Редактирование закладных"],
            mpRotator: ["Mp Rotator", "Установка Mp Rotator", "Редактирование Mp Rotator"],
            mpRotatorSR: ["Mp Rotator 800", "Установка Mp Rotator 800", "Редактирование Mp Rotator 800"],
            mpRotatorStrip: ["Mp Rotator Strip", "Установка Mp Rotator Strip", "Редактирование Mp Rotator Strip"],
            bubbNHMS: ["Форсунка-баблер", "Установка форсунки-баблера", "Редактирование форсунки-баблера"],
            bubbNHPC: ["Форсунка-баблер", "Установка форсунки-баблера", "Редактирование форсунки-баблера"],
            bubbNHDS: ["Форсунка-баблер", "Установка форсунки-баблера", "Редактирование форсунки-баблера"],
            pdcAdj: ["PRO Adjustable Nozzle", "Установка форсунки PRO Adjustable", "Редактирование форсунки PRO Adjustable"],
            prosFixed: ["Pro-Spray Fixed Nozzle", "Установка форсунки Pro-Spray Fixed", "Редактирование форсунки Pro-Spray Fixed"],
            srNoz: ["Short Radius Nozzle", "Установка форсунки Short Radius Nozzle", "Редактирование форсунки Short Radius Nozzle"],
            streamNoz: ["Stream Nozzle", "Установка форсунки Stream Nozzle", "Редактирование форсунки Stream Nozzle"],
            strPatNoz: ["Strip Pattern Nozzle", "Установка форсунки Strip Pattern Nozzle", "Редактирование форсунки Strip Pattern Nozzle"],
            bubbHPC: ["Баблер", "Установка баблера", "Редактирование баблера"],
            bubbHAF: ["Баблер", "Установка баблера", "Редактирование баблера"],
            bubbTB: ["Баблер", "Установка баблера", "Редактирование баблера"],
            bubbTBADJ: ["Баблер", "Установка баблера", "Редактирование баблера"],
            fnf: ["Fixed Nozzle", "Установка форсунки Fixed", "Редактирование форсунки Fixed"],
            fnm: ["Fixed Nozzle", "Установка форсунки Fixed", "Редактирование форсунки Fixed"],
            fnfstrip: ["Strip Pattern Nozzle", "Установка форсунки Strip Pattern Nozzle", "Редактирование форсунки Strip Pattern Nozzle"],
            fnmstrip: ["Strip Pattern Nozzle", "Установка форсунки Strip Pattern Nozzle", "Редактирование форсунки Strip Pattern Nozzle"],
            hekvf: ["HE-KVF Nozzle", "Установка форсунки HE-KVF", "Редактирование форсунки HE-KVF"],
            kv: ["KV Nozzle", "Установка форсунки KV", "Редактирование форсунки KV"],
            rn: ["RN", "Установка RN", "Редактирование RN"],
            rns: ["RN Strip", "Установка RN Strip", "Редактирование RN Strip"],
            rna: ["RN-ADJ", "Установка RN-ADJ", "Редактирование RN-ADJ"],
            "bubbRBPC": ["Баблер", "Установка баблера", "Редактирование баблера"],
            "bubbRBPCT": ["Баблер", "Установка баблера", "Редактирование баблера"],
            "bubbRBADJ": ["Баблер", "Установка баблера", "Редактирование баблера"],
            "bubbNMPR": ["Форсунка-баблер", "Установка форсунки-баблера", "Редактирование форсунки-баблера"],
            "bubbNMPRSt": ["Форсунка-баблер", "Установка форсунки-баблера", "Редактирование форсунки-баблера"],
            "hevan": ["HE-VAN Nozzle", "Установка форсунки HE-VAN", "Редактирование форсунки HE-VAN"],
            "mprseries": ["MPR-Series Nozzle", "Установка форсунки MPR-Series", "Редактирование форсунки MPR-Series"],
            "mprstseries": ["MPR Strip Pattern Nozzle", "Установка форсунки MPR Strip Pattern Nozzle", "Редактирование форсунки MPR Strip Pattern Nozzle"],
            "rvan": ["R-VAN", "Установка R-VAN", "Редактирование R-VAN"],
            "rvanStrip": ["R-VAN Strip", "Установка R-VAN Strip", "Редактирование R-VAN Strip"],
            "sqseries": ["SQ Series Square Pattern Nozzle", "Установка форсунки SQ Series Square Pattern Nozzle", "Редактирование форсунки SQ Series Square Pattern Nozzle"],
            "useries": ["U-Series Nozzle", "Установка форсунки U-Series", "Редактирование форсунки U-Series"],
            "van": ["VAN Nozzle", "Установка форсунки VAN", "Редактирование форсунки VAN"],
            "bubbToro500": ["Баблер", "Установка баблера", "Редактирование баблера"],
            "bubbToro500S": ["Баблер", "Установка баблера", "Редактирование баблера"],
            "bubbNozToroPC": ["Форсунка-баблер", "Установка форсунки-баблера", "Редактирование форсунки-баблера"],
            "bubbNozStreamToro": ["Форсунка-баблер", "Установка форсунки-баблера", "Редактирование форсунки-баблера"],
            "bubbNozStreamToroPC": ["Форсунка-баблер", "Установка форсунки-баблера", "Редактирование форсунки-баблера"],
            "bubbNozOppStreamToro": ["Форсунка-баблер", "Установка форсунки-баблера", "Редактирование форсунки-баблера"],
            "bubbNozOppStreamToroPC": ["Форсунка-баблер", "Установка форсунки-баблера", "Редактирование форсунки-баблера"],
            "toromprplus": ["MPR Plus Series Nozzle", "Установка форсунки MPR Plus Series", "Редактирование форсунки MPR Plus Series"],
            "toromprplusStrip": ["MPR Plus Series Nozzle", "Установка форсунки MPR Plus Series", "Редактирование форсунки MPR Plus Series"],
            "toromprplusPC": ["MPR Plus Series Pressure-compensated Nozzle", "Установка компенсированной форсунки MPR Plus Series", "Редактирование компенсированной форсунки MPR Plus Series"],
            "toromprplusPCStrip": ["MPR Plus Series Pressure-compensated Nozzle", "Установка компенсированной форсунки MPR Plus Series", "Редактирование компенсированной форсунки MPR Plus Series"],
            "precisionRotator": ["Precision Series Rotating Nozzle", "Установка вращающейся форсунки Precision Series", "Редактирование вращающейся форсунки Precision Series"],
            "precisionRotatorF": ["Precision Series Rotating Nozzle", "Установка вращающейся форсунки Precision Series", "Редактирование вращающейся форсунки Precision Series"],
            "precisionSpray": ["Precision Series Nozzle", "Установка форсунки Precision Series", "Редактирование форсунки Precision Series"],
            "precisionSprayF": ["Precision Series Nozzle", "Установка форсунки Precision Series", "Редактирование форсунки Precision Series"],
            "precisionSprayStrip": ["Precision Series Nozzle", "Установка форсунки Precision Series", "Редактирование форсунки Precision Series"],
            "precisionSprayStripF": ["Precision Series Nozzle", "Установка форсунки Precision Series", "Редактирование форсунки Precision Series"],
            "precisionSprayPC": ["Precision Series Pressure-compensated Nozzle", "Установка компенсированной форсунки Precision Series", "Редактирование компенсированной форсунки Precision Series"],
            "precisionSprayPCF": ["Precision Series Pressure-compensated Nozzle", "Установка компенсированной форсунки Precision Series", "Редактирование компенсированной форсунки Precision Series"],
            "precisionSprayPCStrip": ["Precision Series Pressure-compensated Nozzle", "Установка компенсированной форсунки Precision Series", "Редактирование компенсированной форсунки Precision Series"],
            "precisionSprayPCStripF": ["Precision Series Pressure-compensated Nozzle", "Установка компенсированной форсунки Precision Series", "Редактирование компенсированной форсунки Precision Series"],
            "tvantoro": ["TVAN Series Nozzle", "Установка форсунки TVAN Series", "Редактирование форсунки TVAN Series"],
            "streamSprayNozToro": ["Многоструйная форсунка", "Установка многоструйной форсунки", "Редактирование многоструйной форсунки"],
            "streamSprayNozToroPC": ["Многоструйная форсунка", "Установка многоструйной форсунки", "Редактирование многоструйной форсунки"],
            "bubbWM": ["Баблер", "Установка баблера", "Редактирование баблера"],
            "bubbWMADJ": ["Баблер", "Установка баблера", "Редактирование баблера"],
            "maxaan": ["MAXAAN Nozzle", "Установка форсунки MAXAAN", "Редактирование форсунки MAXAAN"],
            "maxmpr": ["MAXMPR Nozzle", "Установка форсунки MAXMPR", "Редактирование форсунки MAXMPR"],
            "maxmprst": ["MAXMPR Strip Nozzle", "Установка форсунки MAXMPR Strip Nozzle", "Редактирование форсунки MAXMPR Strip Nozzle"],
            "maxmprstream": ["MAXMPR Stream Bubbler Nozzle", "Установка форсунки MAXMPR Stream Bubbler", "Редактирование форсунки MAXMPR Stream Bubbler"],
            "maxmprststream": ["MAXMPR Stream Bubbler Nozzle", "Установка форсунки MAXMPR Stream Bubbler", "Редактирование форсунки MAXMPR Stream Bubbler"],
            "bseries": ["B Series Nozzle", "Установка форсунки B Series", "Редактирование форсунки B Series"],
            "bseriesst": ["B Series Strip Nozzle", "Установка форсунки B Series Strip Nozzle", "Редактирование форсунки B Series Strip Nozzle"],
            "trench": ["Траншея", "Рисование траншеи", "Редактирование траншеи"],
            "v": ["Распределительная гребенка", "Установка распределительной гребенки", "Редактирование распределительной гребенки"],
            "ws": ["Источник воды", "Установка источника воды", "Редактирование источника воды"],
            "lp": ["Зональная труба", "Рисование зональной трубы", "Редактирование зональной трубы"],
            "mp": ["Основная магистраль", "Рисование основной магистрали", "Редактирование основной магистрали"]
        },
        vars: {
            sp: "Дождевание",
            ld: "Ландшафт",
            mixed_sp_lo: "Дождевание/Чертёж",
            mixed_sp_lo2: "Дождевание/Чертёж 2",
            mixed_ld_lo: "Ландшафт/Чертёж",
            hw: "Hydrawise",
            lo: "Чертеж",
            loPM: "Карты осадков",
            doIrrigate: "Поливаемая площадь",
            doNotIrrigate: "НЕ поливаемая площадь",
            stdSurf: "Стандартная",
            fineCut: "Подстриженный газон",
            raw: "Необработанный бетон",
            soft: "Мелкий песок",
            flowerBedMix1: "Цветочный микс 1",
            flowerBedMix2: "Цветочный микс 2",
            flowerBedMix3: "Цветочный микс 3",
            flowerBedWhite: "Цветочная клумба белая",
            flowerBedBlue: "Цветочная клумба синяя",
            flowerBedYellow: "Цветочная клумба желтая",
            flowerBedRed: "Цветочная клумба красная",
            flowerBedMalina: "Цветочная клумба малиновая",
            flowerBedOrange: "Цветочная клумба оранжевая",
            flowerBedDarkBlue: "Цветочная клумба тёмно-синяя",
            flowerBedViolet: "Цветочная клумба фиолетовая",
            flowerBedDarkViolet: "Цветочная клумба тёмно-фиолетовая",
            herbalBed1: "Травяная клумба 1",
            herbalBed2: "Травяная клумба 2",
            mulch: "Мульча",
            gravel: "Щебень",
            shrubs: "Кусты 1",
            pavementFill: "Дорожки 1",
            pavementContour: "Дорожки 2",
            pavement3: "Дорожки 3",
            pavement01_A: "Тетрис 1",
            pavement01_B: "Тетрис 2",
            pavement01_C: "Тетрис 3",
            pavement02_A: "Диагональ 1",
            pavement02_B: "Диагональ 2",
            pavement03_A: "Дикий камень 1",
            pavement03_B: "Дикий камень 2",
            pavement04_Red_L: "Соты Красные Светлые",
            pavement04_Red_D: "Соты Красные Тёмные",
            pavement04_Green_L: "Соты Зелёные Светлые",
            pavement04_Green_D: "Соты Зелёные Тёмные",
            pavement04_Blue_L: "Соты Синие Светлые",
            pavement04_Blue_D: "Соты Синие Тёмные",
            pool: "Бассейн",
            lo_stdDynCurve: "Динамическая",
            lo_stdCurve: "Стандартная",
            stdCurve: "Стандартная",
            markCurve: "Красный маркер",
            pathCurve: "Дорожка",
            pillarCurve: "Столб",
            fenceCurve: "Забор",
            test00: "Тест 00",
            test01: "Тест 01",
            test02: "Тест 02",
            test03: "Тест 03",
            test04: "Тест 04",
            test05: "Тест 05",
            test06: "Тест 06",
            saf01: "Камень 1",
            saf02: "Камень 2",
            saf03: "Камень 3",
            saf04: "Камень 4",
            saf05: "Камень 5",
            saf06: "Камень 6",
            saf07: "Камень 7",
            saf08: "Лавочка 1",
            saf09: "Лавочка 2",
            saf10: "Мебель 1",
            saf11: "Мебель 2",
            saf12: "Автомобиль 1",
            saf13: "Автомобиль 2",
            saf14: "Детская горка 1",
            saf14_0: "Детская горка 2",
            saf14_L: "Детская горка 3",
            saf14_R: "Детская горка 4",
            saf15: "Качели с навесом",
            saf16: "Лежак 1",
            saf17: "Лежак 2",
            saf18: "Светильник 1",
            saf19: "Светильник 2",
            saf20: "Водопад",
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
            tree00: "Плодовое дерево",
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
            stdRuler: "Стандартная",
            fixedCntr: "Фиксированное количество зон",
            stand_aloneCntr: "Автономный контроллер",
            modularCntr: "Модульный контроллер",
            rainSensor: "Датчик дождя",
            soilSensor: "Датчик влажности почвы",
            freezeSensor: "Датчик заморозков",
            wrFreezeSensor: "Беспроводной датчик Дождя/Заморозков",
            windSensor: "Датчик ветра",
            solarSensor: "Датчик солнечной активности",
            flowSensor: "Датчик потока",
            weatherStation: "Метеостанция",
            controlWire: "Управляющий провод",
            sensorWire: "Проводка датчика",
            wirelessWire: "Беспроводное подключение",
            dS16: "Старт 16мм",
            dS17: "Старт 17мм",
            qcPlastic: "Водоразборная колонка (пластиковая)",
            qcMetal: "Водоразборная колонка (металлическая)",
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
            stdTrench: "Стандарт (40cm)",
            normalTrench: "Средняя (W:10cm D:50cm)",
            narrowTrench: "Узкая (W:5cm D:30cm) (траншеекопатель)",
            wideTrench: "Широкая (W:30cm D:60cm) (мини-экскаватор)",
            multi: "Клапанный бокс",
            source: "Источник водоснабжения",
            empty: "Пусто",
            frame: "Рамка",
            gostDefault: "ГОСТ 21.101-97 (Первый лист)",
            gostSmall: "ГОСТ 21.101-97 (Последующие листы)",
            a4hor: "A4 Горизонтальный",
            a4vert: "A4 Вертикальный",
            a3hor: "A3 Горизонтальный",
            a3vert: "A3 Вертикальный",
            a2hor: "A2 Горизонтальный",
            a2vert: "A2 Вертикальный",
            a1hor: "A1 Горизонтальный",
            a1vert: "A1 Вертикальный",
            a0hor: "A0 Горизонтальный",
            a0vert: "A0 Вертикальный",
            stdCompass: "Компасс",
            gostSize: "Размер ГОСТ",
            landscp: "Таблица ландшафта",
            conv: "Условные обозначения",
            convAll: "Условные обозначения (Все)",
            zoneT: "Зоны полива",
            sprinkZoneTimeT: "Время дождевания газона",
            sprinkT: "Дождеватели",
            dripT: "Капельные линии",
            insItemT: "Закладные детали (Ведомость)",
            insVarDiamT: "Закладные детали (Материал/Диаметр)",
            insDiamT: "Закладные детали (Диаметр)",
            insVarT: "Закладные детали (Материал)",
            staticText: "Текст статический",
            dynamicText: "Текст динамический",
            stampTextDef: "Текст штампа",
            sbStdMetric: "Средняя шкала (Метрическая)",
            sbMinMetric: "Маленькая (Метрическая)",
            sbExtMetric: "Большая (Метрическая)",
            sbStdImperial: "Средняя шкала (Имперская)",
            sbMinImperial: "Маленькая (Имперская)",
            sbExtImperial: "Большая (Имперская)",
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
            rotorType: ["Ротор серии {{series}} от {{brand}}", "Установка ротора серии {{series}} от {{brand}}", "Редактирование ротора серии {{series}} от {{brand}}"]
        }
    };
})(this);
