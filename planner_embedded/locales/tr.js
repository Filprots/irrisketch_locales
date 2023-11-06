(function (p) {
    if (window.paperLocale !== "en") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["Yüzey", "Yüzey çizimi", "Yüzey düzenleme"],
            brushLawn: ["Çim", "Çim çizimi", "Çim düzenleme"],
            brushConcrete: ["Beton", "Beton çizimi", "Beton düzenleme"],
            brushSand: ["Kum", "Kum çizimi", "Kum düzenleme"],
            brushBed: ["Yatak", "Yatak çizimi", "Yatak düzenleme"],
            brushBedding: ["Yatak döşeme", "Yatak döşeme çizimi", "Yatak döşeme düzenleme"],
            brushShrubs: ["Çalılar", "Çalılar çizimi", "Çalılar düzenleme"],
            brushPath: ["Yol", "Yol çizimi", "Yol düzenleme"],
            brushWater: ["Su", "Su çizimi", "Su düzenleme"],
            curve: ["Eğri", "Eğri çizimi", "Eğri düzenleme"],
            bush: ["Çalı", "Çalı dikme", "Çalı düzenleme"],
            saf: ["Küçük Mimarlık Formları", "Küçük Mimarlık Formları çizimi", "Küçük Mimarlık Formları düzenleme"],
            tree: ["Ağaç", "Ağaç dikme", "Ağaç düzenleme"],
            polySurface: ["Yüzey", "Yüzey çizimi", "Yüzey düzenleme"],
            polyLawn: ["Çim", "Çim çizimi", "Çim düzenleme"],
            polyConcrete: ["Beton", "Beton çizimi", "Beton düzenleme"],
            polySand: ["Kum", "Kum çizimi", "Kum düzenleme"],
            polyBed: ["Yatak", "Yatak çizimi", "Yatak düzenleme"],
            polyBedding: ["Yatak döşeme", "Yatak döşeme çizimi", "Yatak döşeme düzenleme"],
            polyShrubs: ["Çalılar", "Çalılar çizimi", "Çalılar düzenleme"],
            polyPath: ["Yol", "Yol çizimi", "Yol düzenleme"],
            polyWater: ["Su", "Su çizimi", "Su düzenleme"],
            ruler: ["Cetvel", "Cetvel", "Cetvel"],
            cntr: ["Kontrolör", "Kontrolör çizimi", "Kontrolör düzenleme"],
            sens: ["Sensör", "Sensör çizimi", "Sensör düzenleme"],
            wr: ["Kontrol kablosu", "Kontrol kablosu çizimi", "Kontrol kablosu düzenleme"],
            swr: ["Sensör kablosu", "Sensör kablosu çizimi", "Sensör kablosu düzenleme"],
            dl16: ["Damlama hattı 16mm", "Damlama hattı 16mm çizimi", "Damlama hattı 16mm düzenleme"],
            ds16: ["Damlama başlangıcı 16mm", "Damlama başlangıcı 16mm çizimi", "Damlama başlangıcı 16mm düzenleme"],
            dl17: ["Damlama hattı 17mm", "Damlama hattı 17mm çizimi", "Damlama hattı 17mm düzenleme"],
            ds17: ["Damlama başlangıcı 17mm", "Damlama başlangıcı 17mm çizimi", "Damlama başlangıcı 17mm düzenleme"],
            rzw: ["Kök bölgesi sulama", "Kök bölgesi sulama ünitesi çizimi", "Kök bölgesi sulama ünitesi düzenleme"],
            qc: ["Hızlı Bağlantı Vanası", "Hızlı Bağlantı Vanası yerleştirme", "Hızlı Bağlantı Vanası düzenleme"],
            inset: ["Boru Kılıfı", "Boru Kılıfı çizimi", "Boru Kılıfı düzenleme"],
            mpRotator: ["Mp Rotator", "Mp Rotator yerleştirme", "Mp Rotator düzenleme"],
            mpRotatorSR: ["Mp Rotator 800", "Mp Rotator 800 yerleştirme", "Mp Rotator 800 düzenleme"],
            mpRotatorStrip: ["Mp Rotator Şerit", "Mp Rotator Şerit yerleştirme", "Mp Rotator Şerit düzenleme"],
            bubbNHMS: ["Kabarcık nozulu", "Kabarcık nozulu yerleştirme", "Kabarcık nozulu düzenleme"],
            bubbNHPC: ["Kabarcık nozulu", "Kabarcık nozulu yerleştirme", "Kabarcık nozulu düzenleme"],
            bubbNHDS: ["Kabarcık nozulu", "Kabarcık nozulu yerleştirme", "Kabarcık nozulu düzenleme"],
            pdcAdj: ["PRO Ayarlanabilir Nozul", "PRO Ayarlanabilir Nozul yerleştirme", "PRO Ayarlanabilir Nozul düzenleme"],
            prosFixed: ["Pro-Spray Sabit Nozul", "Pro-Spray Sabit Nozul yerleştirme", "Pro-Spray Sabit Nozul düzenleme"],
            srNoz: ["Kısa Yarıçap Nozulu", "Kısa Yarıçap Nozulu yerleştirme", "Kısa Yarıçap Nozulu düzenleme"],
            streamNoz: ["Akış Nozulu", "Akış Nozulu yerleştirme", "Akış Nozulu düzenleme"],
            strPatNoz: ["Şerit Desen Nozulu", "Şerit Desen Nozulu yerleştirme", "Şerit Desen Nozulu düzenleme"],
            bubbHPC: ["Kabarcık", "Kabarcık yerleştirme", "Kabarcık düzenleme"],
            bubbHAF: ["Kabarcık", "Kabarcık yerleştirme", "Kabarcık düzenleme"],
            bubbTB: ["Kabarcık", "Kabarcık yerleştirme", "Kabarcık düzenleme"],
            bubbTBADJ: ["Kabarcık", "Kabarcık yerleştirme", "Kabarcık düzenleme"],
            fnf: ["Sabit Nozul", "Sabit Nozul yerleştirme", "Sabit Nozul düzenleme"],
            fnm: ["Sabit Nozul", "Sabit Nozul yerleştirme", "Sabit Nozul düzenleme"],
            fnfstrip: ["Şerit Desen Nozulu", "Şerit Desen Nozulu yerleştirme", "Şerit Desen Nozulu düzenleme"],
            fnmstrip: ["Şerit Desen Nozulu", "Şerit Desen Nozulu yerleştirme", "Şerit Desen Nozulu düzenleme"],
            hekvf: ["HE-KVF Nozul", "HE-KVF Nozul yerleştirme", "HE-KVF Nozul düzenleme"],
            kv: ["KV Nozul", "KV Nozul yerleştirme", "KV Nozul düzenleme"],
            rn: ["RN", "RN yerleştirme", "RN düzenleme"],
            rns: ["RN Şerit", "RN Şerit yerleştirme", "RN Şerit düzenleme"],
            rna: ["RN-ADJ", "RN-ADJ yerleştirme", "RN-ADJ düzenleme"],
            "bubbRBPC": ["Kabarcık", "Kabarcık yerleştirme", "Kabarcık düzenleme"],
            "bubbRBPCT": ["Kabarcık", "Kabarcık yerleştirme", "Kabarcık düzenleme"],
            "bubbRBADJ": ["Kabarcık", "Kabarcık yerleştirme", "Kabarcık düzenleme"],
            "bubbNMPR": ["Kabarcık nozulu", "Kabarcık nozulu yerleştirme", "Kabarcık nozulu düzenleme"],
            "bubbNMPRSt": ["Kabarcık nozulu", "Kabarcık nozulu yerleştirme", "Kabarcık nozulu düzenleme"],
            "hevan": ["HE-VAN Nozul", "HE-VAN Nozul yerleştirme", "HE-VAN Nozul düzenleme"],
            "mprseries": ["MPR Serisi Nozul", "MPR Serisi Nozul yerleştirme", "MPR Serisi Nozul düzenleme"],
            "mprstseries": ["MPR Şerit Desen Nozulu", "MPR Şerit Desen Nozulu yerleştirme", "MPR Şerit Desen Nozulu düzenleme"],
            "rvan": ["R-VAN", "R-VAN yerleştirme", "R-VAN düzenleme"],
            "rvanStrip": ["R-VAN Şerit", "R-VAN Şerit yerleştirme", "R-VAN Şerit düzenleme"],
            "sqseries": ["SQ Serisi Kare Desen Nozulu", "SQ Serisi Kare Desen Nozulu yerleştirme", "SQ Serisi Kare Desen Nozulu düzenleme"],
            "useries": ["U Serisi Nozul", "U Serisi Nozul yerleştirme", "U Serisi Nozul düzenleme"],
            "van": ["VAN Nozul", "VAN Nozul yerleştirme", "VAN Nozul düzenleme"],
            "bubbToro500": ["Kabarcık", "Kabarcık yerleştirme", "Kabarcık düzenleme"],
            "bubbToro500S": ["Kabarcık", "Kabarcık yerleştirme", "Kabarcık düzenleme"],
            "bubbNozToroPC": ["Kabarcık nozulu", "Kabarcık nozulu yerleştirme", "Kabarcık nozulu düzenleme"],
            "bubbNozStreamToro": ["Kabarcık nozulu", "Kabarcık nozulu yerleştirme", "Kabarcık nozulu düzenleme"],
            "bubbNozStreamToroPC": ["Kabarcık nozulu", "Kabarcık nozulu yerleştirme", "Kabarcık nozulu düzenleme"],
            "bubbNozOppStreamToro": ["Kabarcık nozulu", "Kabarcık nozulu yerleştirme", "Kabarcık nozulu düzenleme"],
            "bubbNozOppStreamToroPC": ["Kabarcık nozulu", "Kabarcık nozulu yerleştirme", "Kabarcık nozulu düzenleme"],
            "toromprplus": ["MPR Plus Serisi Nozul", "MPR Plus Serisi Nozul yerleştirme", "MPR Plus Serisi Nozul düzenleme"],
            "toromprplusStrip": ["MPR Plus Serisi Nozul", "MPR Plus Serisi Nozul yerleştirme", "MPR Plus Serisi Nozul düzenleme"],
            "toromprplusPC": ["MPR Plus Serisi Basınç Dengeleyici Nozul", "MPR Plus Serisi Basınç Dengeleyici Nozul yerleştirme", "MPR Plus Serisi Basınç Dengeleyici Nozul düzenleme"],
            "toromprplusPCStrip": ["MPR Plus Serisi Basınç Dengeleyici Nozul", "MPR Plus Serisi Basınç Dengeleyici Nozul yerleştirme", "MPR Plus Serisi Basınç Dengeleyici Nozul düzenleme"],
            "precisionRotator": ["Hassas Serisi Döner Nozul", "Hassas Serisi Döner Nozul yerleştirme", "Hassas Serisi Döner Nozul düzenleme"],
            "precisionRotatorF": ["Hassas Serisi Döner Nozul", "Hassas Serisi Döner Nozul yerleştirme", "Hassas Serisi Döner Nozul düzenleme"],
            "precisionSpray": ["Hassas Serisi Nozul", "Hassas Serisi Nozul yerleştirme", "Hassas Serisi Nozul düzenleme"],
            "precisionSprayF": ["Hassas Serisi Nozul", "Hassas Serisi Nozul yerleştirme", "Hassas Serisi Nozul düzenleme"],
            "precisionSprayStrip": ["Hassas Seri Memesi", "Hassas Seri Memesi Yerleştirme", "Hassas Seri Memesi Düzenleme"],
            "precisionSprayStripF": ["Hassas Seri Memesi", "Hassas Seri Memesi Yerleştirme", "Hassas Seri Memesi Düzenleme"],
            "precisionSprayPC": ["Hassas Seri Basınç Dengeli Memesi", "Hassas Seri Basınç Dengeli Memesi Yerleştirme", "Hassas Seri Basınç Dengeli Memesi Düzenleme"],
            "precisionSprayPCF": ["Hassas Seri Basınç Dengeli Memesi", "Hassas Seri Basınç Dengeli Memesi Yerleştirme", "Hassas Seri Basınç Dengeli Memesi Düzenleme"],
            "precisionSprayPCStrip": ["Hassas Seri Basınç Dengeli Memesi", "Hassas Seri Basınç Dengeli Memesi Yerleştirme", "Hassas Seri Basınç Dengeli Memesi Düzenleme"],
            "precisionSprayPCStripF": ["Hassas Seri Basınç Dengeli Memesi", "Hassas Seri Basınç Dengeli Memesi Yerleştirme", "Hassas Seri Basınç Dengeli Memesi Düzenleme"],
            "tvantoro": ["TVAN Seri Memesi", "TVAN Seri Memesi Yerleştirme", "TVAN Seri Memesi Düzenleme"],
            "streamSprayNozToro": ["Akış Sprey Memesi", "Akış Sprey Memesi Yerleştirme", "Akış Sprey Memesi Düzenleme"],
            "streamSprayNozToroPC": ["Akış Sprey Memesi", "Akış Sprey Memesi Yerleştirme", "Akış Sprey Memesi Düzenleme"],
            "bubbWM": ["Kabarcık Memesi", "Kabarcık Memesi Yerleştirme", "Kabarcık Memesi Düzenleme"],
            "bubbWMADJ": ["Kabarcık Memesi", "Kabarcık Memesi Yerleştirme", "Kabarcık Memesi Düzenleme"],
            "maxaan": ["MAXAAN Memesi", "MAXAAN Memesi Yerleştirme", "MAXAAN Memesi Düzenleme"],
            "maxmpr": ["MAXMPR Memesi", "MAXMPR Memesi Yerleştirme", "MAXMPR Memesi Düzenleme"],
            "maxmprst": ["MAXMPR Şerit Memesi", "MAXMPR Şerit Memesi Yerleştirme", "MAXMPR Şerit Memesi Düzenleme"],
            "maxmprstream": ["MAXMPR Akış Kabarcık Memesi", "MAXMPR Akış Kabarcık Memesi Yerleştirme", "MAXMPR Akış Kabarcık Memesi Düzenleme"],
            "maxmprststream": ["MAXMPR Akış Kabarcık Memesi", "MAXMPR Akış Kabarcık Memesi Yerleştirme", "MAXMPR Akış Kabarcık Memesi Düzenleme"],
            "bseries": ["B Serisi Memesi", "B Serisi Memesi Yerleştirme", "B Serisi Memesi Düzenleme"],
            "bseriesst": ["B Serisi Şerit Memesi", "B Serisi Şerit Memesi Yerleştirme", "B Serisi Şerit Memesi Düzenleme"],
            "trench": ["Trench", "Trench Çizimi", "Trench Düzenleme"],
            "v": ["Vana Manifoldu", "Vana Manifoldu Yerleştirme", "Vana Manifoldu Düzenleme"],
            "ws": ["Su Kaynağı", "Su Kaynağı Yerleştirme", "Su Kaynağı Düzenleme"],
            "lp": ["Yanal Boru", "Yanal Boru Çizimi", "Yanal Boru Düzenleme"],
            "lpPVC": ["Yanal Boru", "Yanal Boru Çizimi", "Yanal Boru Düzenleme"],
            "mp": ["Ana Boru", "Ana Boru Çizimi", "Ana Boru Düzenleme"],
            "mpPVC": ["Ana Boru", "Ana Boru Çizimi", "Ana Boru Düzenleme"],
            "compass": ["Pusula", "Pusula Kurulumu", "Pusula Düzenleme"],
            "loCurve": ["Çizgi", "Çizgi Çizimi", "Çizgi Düzenleme"],
            "lsz": ["Boyut", "Boyut Çizimi", "Boyut Düzenleme"],
            "text": ["Metin", "Metin Çizimi", "Metin Düzenleme"],
            "ldtext": ["Metin", "Metin Ayarı", "Metin Düzenleme"],
            "staticText": ["Metin", "Metin Ayarı", "Metin Düzenleme"],
            "dynamicText": ["Metin", "Metin Ayarı", "Metin Düzenleme"],
            "lotable": ["Tablo", "Tablo Ayarı", "Tablo Düzenleme"],
            "stampText": ["Damga", "Damga Metni Ayarı", "Damga Metni Düzenleme"],
            "sb": ["Ölçek Çubuğu", "Ölçek Çubuğu Çizimi", "Ölçek Çubuğu Düzenleme"],
        },
        vars: {
            "sp": "Sulama",
            "ld": "Peysaj",
            "mixed_sp_lo": "Sulama/Düzen",
            "mixed_sp_lo2": "Sulama/Düzen 2",
            "mixed_ld_lo": "Peysaj/Düzen",
            "hw": "Hydrawise",
            "lo": "Düzen",
            "loPM": "Yağış",
            "doIrrigate": "Sulanan bölge",
            "doNotIrrigate": "Sulanan bölge değil",
            "stdSurf": "Standart",
            "fineCut": "İnce çim",
            "raw": "Ham beton",
            "soft": "Yumuşak kum",
            "flowerBedMix1": "Çiçek karışımı 1",
            "flowerBedMix2": "Çiçek karışımı 2",
            "flowerBedMix3": "Çiçek karışımı 3",
            "flowerBedWhite": "Beyaz çiçek yatağı",
            "flowerBedBlue": "Mavi çiçek yatağı",
            "flowerBedYellow": "Sarı çiçek yatağı",
            "flowerBedRed": "Kırmızı çiçek yatağı",
            "flowerBedMalina": "Bordo çiçek yatağı",
            "flowerBedOrange": "Turuncu çiçek yatağı",
            "flowerBedDarkBlue": "Koyu mavi çiçek yatağı",
            "flowerBedViolet": "Mor çiçek yatağı",
            "flowerBedDarkViolet": "Koyu mor çiçek yatağı",
            "herbalBed1": "Bitkisel yatak 1",
            "herbalBed2": "Bitkisel yatak 2",
            "mulch": "Kabuk dökme",
            "gravel": "Çakıl",
            "shrubs": "Ağaççıklar 1",
            "pavementFill": "Yol 1",
            "pavementContour": "Yol 2",
            "pavement3": "Yol 3",
            "pavement01_A": "Tetris 1",
            "pavement01_B": "Tetris 2",
            "pavement01_C": "Tetris 3",
            "pavement02_A": "Diyagonal 1",
            "pavement02_B": "Diyagonal 2",
            "pavement03_A": "Vahşi 1",
            "pavement03_B": "Vahşi 2",
            "pavement04_Red_L": "Bal peteği Kırmızı Açık",
            "pavement04_Red_D": "Bal peteği Kırmızı Koyu",
            "pavement04_Green_L": "Bal peteği Yeşil Açık",
            "pavement04_Green_D": "Bal peteği Yeşil Koyu",
            "pavement04_Blue_L": "Bal peteği Mavi Açık",
            "pavement04_Blue_D": "Bal peteği Mavi Koyu",
            "pool": "Yüzme havuzu",
            "lo_stdDynCurve": "Dinamik",
            "lo_stdCurve": "Standart",
            "stdCurve": "Standart",
            "markCurve": "Kırmızı işaretçi",
            "pathCurve": "Yol",
            "pillarCurve": "Sütun",
            "fenceCurve": "Çit",
            "test00": "Test 00",
            "test01": "Test 01",
            "test02": "Test 02",
            "test03": "Test 03",
            "test04": "Test 04",
            "test05": "Test 05",
            "test06": "Test 06",
            "saf01": "Taş 1",
            "saf02": "Taş 2",
            "saf03": "Taş 3",
            "saf04": "Taş 4",
            "saf05": "Taş 5",
            "saf06": "Taş 6",
            "saf07": "Taş 7",
            "saf08": "Bench 1",
            "saf09": "Bench 2",
            "saf10": "Mobilya 1",
            "saf11": "Mobilya 2",
            "saf12": "Araba 1",
            "saf13": "Araba 2",
            "saf14": "Çocuk Kaydırağı 1",
            "saf14_0": "Çocuk Kaydırağı 2",
            "saf14_L": "Çocuk Kaydırağı 3",
            "saf14_R": "Çocuk Kaydırağı 4",
            "saf15": "Salıncak Tentesi",
            "saf16": "Şezlong 1",
            "saf17": "Şezlong 2",
            "saf18": "Işık 1",
            "saf19": "Işık 2",
            "saf20": "Şelale",
            "saf21": "Su Alanı 1",
            "saf22": "Su Alanı 2",
            "saf23": "Kanal Kapağı 1",
            "saf24": "Kanal Kapağı 2",
            "bush01": "Çalı #01",
            "bush02": "Çalı #02",
            "bush03": "Çalı #03",
            "bush04": "Çalı #04",
            "bush05": "Çalı #05",
            "bush06": "Çalı #06",
            "bush07": "Çalı #07",
            "bush08": "Çalı #08",
            "bush09": "Çalı #09",
            "bush10": "Çalı #10",
            "bush11": "Çalı #11",
            "bush12": "Çalı #12",
            "bush13": "Çalı #13",
            "tree00": "Meyve Ağacı",
            "tree01": "Ağaç #01",
            "tree02": "Ağaç #02",
            "tree03": "Ağaç #03",
            "tree04": "Ağaç #04",
            "tree05": "Ağaç #05",
            "tree06": "Ağaç #06",
            "tree07": "Ağaç #07",
            "tree08": "Ağaç #08",
            "tree09": "Ağaç #09",
            "tree10": "Ağaç #10",
            "tree11": "Ağaç #11",
            "tree12": "Ağaç #12",
            "tree13": "Ağaç #13",
            "tree14": "Ağaç #14",
            "tree15": "Ağaç #15",
            "tree16": "Ağaç #16",
            "tree17": "Ağaç #17",
            "stdRuler": "Standart",
            "fixedCntr": "Sabit bölgeler numaraları",
            "stand_aloneCntr": "Bağımsız denetleyici",
            "modularCntr": "Modüler denetleyici",
            "rainSensor": "Yağmur sensörü",
            "soilSensor": "Toprak sensörü",
            "freezeSensor": "Donma sensörü",
            "wrFreezeSensor": "Kablosuz Yağmur/Donma sensörü",
            "windSensor": "Rüzgar sensörü",
            "solarSensor": "Güneş enerjisi sensörü",
            "flowSensor": "Akış sensörü",
            "weatherStation": "Hava istasyonu",
            "controlWire": "Kontrol kablosu",
            "sensorWire": "Sensör kablosu",
            "wirelessWire": "Kablosuz bağlantı",
            "dS16": "Damlalık başlangıcı 16mm",
            "dS17": "Damlalık başlangıcı 17mm",
            "qcPlastic": "Plastik Hızlı Bağlantı Vanası",
            "qcMetal": "Metalik Hızlı Bağlantı Vanası",
            "hdpePE80SDR11": "HDPE PE80 SDR 11",
            "hdpePE80SDR136": "HDPE PE80 SDR 13.6",
            "hdpePE80SDR176": "HDPE PE80 SDR 17.6",
            "hdpePE100SDR11": "HDPE PE100 SDR 11",
            "hdpePE100SDR136": "HDPE PE100 SDR 13.6",
            "hdpePE100SDR176": "HDPE PE100 SDR 17.6",
            "hdpeSDR9": "HDPE SDR 9",
            "hdpeSDR11": "HDPE SDR 11",
            "hdpeSDR136": "HDPE SDR 13.6",
            "hdpeSDR17": "HDPE SDR 17",
            "hdpeSDR176": "HDPE SDR 17.6",
            "pvcSCH40": "PVC SCH 40",
            "pvcSCH80": "PVC SCH 80",
            "pvcCL315": "PVC SINIF 315",
            "pvcCL200": "PVC SINIF 200",
            "pvcCL160": "PVC SINIF 160",
            "pvcCL125": "PVC SINIF 125",
            "stdTrench": "Standart (40cm) (eski)",
            "normalTrench": "Normal (W:10cm D:50cm)",
            "narrowTrench": "Dar (W:5cm D:30cm) (El Trencher)",
            "wideTrench": "Geniş (W:30cm D:60cm) (Mini-Ekskavatör)",
            "multi": "Vana kutusu",
            "source": "Su kaynağı",
            "empty": "Boş",
            "frame": "Çerçeve",
            "gostDefault": "Büyük Damga",
            "gostSmall": "Küçük Damga",
            "a4hor": "A4 Yatay",
            "a4vert": "A4 Dikey",
            "a3hor": "A3 Yatay",
            "a3vert": "A3 Dikey",
            "a2hor": "A2 Yatay",
            "a2vert": "A2 Dikey",
            "a1hor": "A1 Yatay",
            "a1vert": "A1 Dikey",
            "a0hor": "A0 Yatay",
            "a0vert": "A0 Dikey",
            "dind4hor": "DIN D4 Yatay",
            "dind4vert": "DIN D4 Dikey",
            "dind3hor": "DIN D3 Yatay",
            "dind3vert": "DIN D3 Dikey",
            "dind2hor": "DIN D2 Yatay",
            "dind2vert": "DIN D2 Dikey",
            "dind1hor": "DIN D1 Yatay",
            "dind1vert": "DIN D1 Dikey",
            "dind0hor": "DIN D0 Yatay",
            "dind0vert": "DIN D0 Dikey",
            "ansiAhor": "ANSI A Yatay",
            "ansiAvert": "ANSI A Dikey",
            "ansiBhor": "ANSI B Yatay",
            "ansiBvert": "ANSI B Dikey",
            "ansiChor": "ANSI C Yatay",
            "ansiCvert": "ANSI C Dikey",
            "ansiDhor": "ANSI D Yatay",
            "ansiDvert": "ANSI D Dikey",
            "ansiEhor": "ANSI E Yatay",
            "ansiEvert": "ANSI E Dikey",
            "archAhor": "Arch A Yatay",
            "archAvert": "Arch A Dikey",
            "archBhor": "Arch B Yatay",
            "archBvert": "Arch B Dikey",
            "archChor": "Arch C Yatay",
            "archCvert": "Arch C Dikey",
            "archDhor": "Arch D Yatay",
            "archDvert": "Arch D Dikey",
            "archEhor": "Arch E Yatay",
            "archEvert": "Arch E Dikey",
            "archE1hor": "Arch E1 Yatay",
            "archE1vert": "Arch E1 Dikey",
            "archE2hor": "Arch E2 Yatay",
            "archE2vert": "Arch E2 Dikey",
            "archE3hor": "Arch E3 Yatay",
            "stdCompass": "Pusula",
            "gostSize": "Boyut çizgisi",
            "landscp": "Peysaj tablosu",
            "conv": "Semboller tablosu",
            "convAll": "Tüm semboller tablosu",
            "zoneT": "Bölgeler tablosu",
            "sprinkZoneTimeT": "Bölge sulama süresi",
            "sprinkT": "Sulama tablosu",
            "dripT": "Damlama hattı tablosu",
            "insItemT": "Ekleme Tablosu (Öğelerle)",
            "insVarDiamT": "Ekleme Tablosu (Malzeme ve Çaplara Göre)",
            "insDiamT": "Ekleme Tablosu (Çaplara Göre)",
            "insVarT": "Ekleme Tablosu (Malzemeye Göre)",
            "staticText": "Metin",
            "dynamicText": "Metin",
            "stampTextDef": "Mühür metni",
            "sbStdMetric": "Orta ölçek çubuğu (Metrik)",
            "sbMinMetric": "Mini (Metrik)",
            "sbExtMetric": "Genişletilmiş (Metrik)",
            "sbStdImperial": "Orta ölçek çubuğu (İngilizce)",
            "sbMinImperial": "Mini (İngilizce)",
            "sbExtImperial": "Genişletilmiş (İngilizce)",
            "gentleMicroClimate": "Hafif",
            "normalMicroClimate": "Normal",
            "toughMicroClimate": "Zorlu",
            "sand": "Kumlu",
            "sandyLoam": "Kumlu toprak",
            "lightLoam": "Hafif toprak",
            "mediumLoam": "Orta toprak",
            "heavyLoam": "Ağır toprak",
            "clay": "Kil",
            "heavyClay": "Ağır kil",
            "noneIncline": "0-5% (0-3°)",
            "lightIncline": "5-8% (3-5°)",
            "mediumIncline": "8-12% (5-7°)",
            "hugeIncline": "12%+ (7°+)"
        },
        "misc": {
            "fixedCntrSubText": "SABİT",
            "standAloneCntrSubText": "SA",
            "modularCntrSubText": "MOD."
        },
        "placeholders": {
            "rotorType": ["{{brand}} {{series}} rotor", "{{brand}} {{series}} rotor yerleştirme", "{{brand}} {{series}} rotor düzenleme"]
        }
    };
})(this);
