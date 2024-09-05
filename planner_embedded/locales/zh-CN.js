(function (p) {
    if (window.paperLocale !== "zh-CN") return false;
    !p.ELNG && (p.ELNG = {});//EMBEDDED DICTIONARY
    p.ELNG = {
        types: {
            brushSurface: ["表面", "表面绘制", "表面编辑"],
            brushLawn: ["草坪", "草坪绘制", "草坪编辑"],
            brushIrrigateMarks: ["特殊标记", "特殊标记绘制", "特殊标记编辑"],
            brushConcrete: ["混凝土", "混凝土绘制", "混凝土编辑"],
            brushSand: ["沙地", "沙地绘制", "沙地编辑"],
            brushBed: ["花坛", "花坛绘制", "花坛编辑"],
            brushBedding: ["铺垫", "铺垫绘制", "铺垫编辑"],
            brushShrubs: ["灌木", "灌木绘制", "灌木编辑"],
            brushPath: ["小径", "小径绘制", "小径编辑"],
            brushWater: ["水", "水绘制", "水编辑"],
            curve: ["曲线", "曲线绘制", "曲线编辑"],
            bush: ["灌木", "种植灌木", "编辑灌木"],
            saf: ["小型建筑物", "绘制小型建筑物", "编辑小型建筑物"],
            tree: ["树木", "种植树木", "编辑树木"],
            polySurface: ["表面", "表面绘制", "表面编辑"],
            polyLawn: ["草坪", "草坪绘制", "草坪编辑"],
            polyIrrigateMarks: ["特殊标记", "特殊标记绘制", "特殊标记编辑"],
            polyConcrete: ["混凝土", "混凝土绘制", "混凝土编辑"],
            polySand: ["沙地", "沙地绘制", "沙地编辑"],
            polyBed: ["花坛", "花坛绘制", "花坛编辑"],
            polyBedding: ["铺垫", "铺垫绘制", "铺垫编辑"],
            polyShrubs: ["灌木", "灌木绘制", "灌木编辑"],
            polyPath: ["小径", "小径绘制", "小径编辑"],
            polyWater: ["水", "水绘制", "水编辑"],
            ruler: ["标尺", "标尺", "标尺"],
            cntr: ["控制器", "控制器绘制", "控制器编辑"],
            sens: ["传感器", "传感器绘制", "传感器编辑"],
            wr: ["控制线", "控制线绘制", "控制线编辑"],
            swr: ["传感器线", "传感器线绘制", "传感器线编辑"],
            dl16: ["滴灌管 16/13毫米", "滴灌管 16/13毫米绘制", "滴灌管 16/13毫米编辑"],
            ds16: ["滴灌起点 16/13毫米", "滴灌起点 16/13毫米绘制", "滴灌起点 16/13毫米编辑"],
            dl17: ["滴灌管 17毫米", "滴灌管 17毫米绘制", "滴灌管 17毫米编辑"],
            ds17: ["滴灌起点 17毫米", "滴灌起点 17毫米绘制", "滴灌起点 17毫米编辑"],
            rzw: ["根区灌溉", "根区灌溉单元绘制", "根区灌溉单元编辑"],
            qc: ["快速接头阀", "快速接头阀放置", "快速接头阀编辑"],
            inset: ["管套", "管套绘制", "管套编辑"],
            mpRotator: ["MP 旋转喷头", "MP 旋转喷头放置", "MP 旋转喷头编辑"],
            mpRotatorSR: ["MP 旋转喷头 800", "MP 旋转喷头 800 放置", "MP 旋转喷头 800 编辑"],
            mpRotatorStrip: ["MP 条形旋转喷头", "MP 条形旋转喷头放置", "MP 条形旋转喷头编辑"],
            bubbNHMS: ["涌泉喷嘴", "涌泉喷嘴放置", "涌泉喷嘴编辑"],
            bubbNHPC: ["涌泉喷嘴", "涌泉喷嘴放置", "涌泉喷嘴编辑"],
            bubbNHDS: ["涌泉喷嘴", "涌泉喷嘴放置", "涌泉喷嘴编辑"],
            pdcAdj: ["PRO 可调喷嘴", "PRO 可调喷嘴放置", "PRO 可调喷嘴编辑"],
            proHE: ["PRO 高效可调喷嘴", "PRO 高效可调喷嘴放置", "PRO 高效可调喷嘴编辑"],
            prosFixed: ["PRO 固定喷嘴", "PRO 固定喷嘴放置", "PRO 固定喷嘴编辑"],
            srNoz: ["短半径喷嘴", "短半径喷嘴放置", "短半径喷嘴编辑"],
            streamNoz: ["流式喷嘴", "流式喷嘴放置", "流式喷嘴编辑"],
            strPatNoz: ["条形喷嘴", "条形喷嘴放置", "条形喷嘴编辑"],
            bubbHPC: ["涌泉", "涌泉放置", "涌泉编辑"],
            bubbHAF: ["涌泉", "涌泉放置", "涌泉编辑"],
            bubbTB: ["涌泉", "涌泉放置", "涌泉编辑"],
            bubbTBADJ: ["涌泉", "涌泉放置", "涌泉编辑"],
            fnf: ["固定喷嘴", "固定喷嘴放置", "固定喷嘴编辑"],
            fnm: ["固定喷嘴", "固定喷嘴放置", "固定喷嘴编辑"],
            fnfstrip: ["条形喷嘴", "条形喷嘴放置", "条形喷嘴编辑"],
            fnmstrip: ["条形喷嘴", "条形喷嘴放置", "条形喷嘴编辑"],
            hekvf: ["HE-KVF 喷嘴", "HE-KVF 喷嘴放置", "HE-KVF 喷嘴编辑"],
            kv: ["KV 喷嘴", "KV 喷嘴放置", "KV 喷嘴编辑"],
            rn: ["RN", "RN 放置", "RN 编辑"],
            rns: ["RN 条形", "RN 条形放置", "RN 条形编辑"],
            rna: ["RN-ADJ", "RN-ADJ 放置", "RN-ADJ 编辑"],
            "bubbRBPC": ["涌泉", "涌泉放置", "涌泉编辑"],
            "bubbRBPCT": ["涌泉", "涌泉放置", "涌泉编辑"],
            "bubbRBADJ": ["涌泉", "涌泉放置", "涌泉编辑"],
            "bubbNMPR": ["涌泉喷嘴", "涌泉喷嘴放置", "涌泉喷嘴编辑"],
            "bubbNMPRSt": ["涌泉喷嘴", "涌泉喷嘴放置", "涌泉喷嘴编辑"],
            "hevan": ["HE-VAN 喷嘴", "HE-VAN 喷嘴放置", "HE-VAN 喷嘴编辑"],
            "mprseries": ["MPR 系列喷嘴", "MPR 系列喷嘴放置", "MPR 系列喷嘴编辑"],
            "mprstseries": ["MPR 条形喷嘴", "MPR 条形喷嘴放置", "MPR 条形喷嘴编辑"],
            "rvan": ["R-VAN", "R-VAN 放置", "R-VAN 编辑"],
            "rvanStrip": ["R-VAN 条形", "R-VAN 条形放置", "R-VAN 条形编辑"],
            "sqseries": ["SQ 系列方形喷嘴", "SQ 系列方形喷嘴放置", "SQ 系列方形喷嘴编辑"],
            "useries": ["U 系列喷嘴", "U 系列喷嘴放置", "U 系列喷嘴编辑"],
            "van": ["VAN 喷嘴", "VAN 喷嘴放置", "VAN 喷嘴编辑"],
            "bubbToro500": ["涌泉", "涌泉放置", "涌泉编辑"],
            "bubbToro500S": ["涌泉", "涌泉放置", "涌泉编辑"],
            "bubbNozToroPC": ["涌泉喷嘴", "涌泉喷嘴放置", "涌泉喷嘴编辑"],
            "bubbNozStreamToro": ["涌泉喷嘴", "涌泉喷嘴放置", "涌泉喷嘴编辑"],
            "bubbNozStreamToroPC": ["涌泉喷嘴", "涌泉喷嘴放置", "涌泉喷嘴编辑"],
            "bubbNozOppStreamToro": ["涌泉喷嘴", "涌泉喷嘴放置", "涌泉喷嘴编辑"],
            "bubbNozOppStreamToroPC": ["涌泉喷嘴", "涌泉喷嘴放置", "涌泉喷嘴编辑"],
            "toromprplus": ["MPR Plus 系列喷嘴", "MPR Plus 系列喷嘴放置", "MPR Plus 系列喷嘴编辑"],
            "toromprplusStrip": ["MPR Plus 系列喷嘴", "MPR Plus 系列喷嘴放置", "MPR Plus 系列喷嘴编辑"],
            "toromprplusPC": ["MPR Plus 系列压力补偿喷嘴", "MPR Plus 系列压力补偿喷嘴放置", "MPR Plus 系列压力补偿喷嘴编辑"],
            "toromprplusPCStrip": ["MPR Plus 系列压力补偿喷嘴", "MPR Plus 系列压力补偿喷嘴放置", "MPR Plus 系列压力补偿喷嘴编辑"],
            "precisionRotator": ["精密系列旋转喷嘴", "精密系列旋转喷嘴放置", "精密系列旋转喷嘴编辑"],
            "precisionRotatorF": ["精密系列旋转喷嘴", "精密系列旋转喷嘴放置", "精密系列旋转喷嘴编辑"],
            "precisionSpray": ["精密系列喷嘴", "精密系列喷嘴放置", "精密系列喷嘴编辑"],
            "precisionSprayF": ["精密系列喷嘴", "精密系列喷嘴放置", "精密系列喷嘴编辑"],
            "precisionSprayStrip": ["精密系列喷嘴", "精密系列喷嘴放置", "精密系列喷嘴编辑"],
            "precisionSprayStripF": ["精密系列喷嘴", "精密系列喷嘴放置", "精密系列喷嘴编辑"],
            "precisionSprayPC": ["精密系列压力补偿喷嘴", "精密系列压力补偿喷嘴放置", "精密系列压力补偿喷嘴编辑"],
            "precisionSprayPCF": ["精密系列压力补偿喷嘴", "精密系列压力补偿喷嘴放置", "精密系列压力补偿喷嘴编辑"],
            "precisionSprayPCStrip": ["精密系列压力补偿喷嘴", "精密系列压力补偿喷嘴放置", "精密系列压力补偿喷嘴编辑"],
            "precisionSprayPCStripF": ["精密系列压力补偿喷嘴", "精密系列压力补偿喷嘴放置", "精密系列压力补偿喷嘴编辑"],
            "tvantoro": ["TVAN 系列喷嘴", "TVAN 系列喷嘴放置", "TVAN 系列喷嘴编辑"],
            "streamSprayNozToro": ["流式喷嘴", "流式喷嘴放置", "流式喷嘴编辑"],
            "streamSprayNozToroPC": ["流式喷嘴", "流式喷嘴放置", "流式喷嘴编辑"],
            "bubbWM": ["涌泉", "涌泉放置", "涌泉编辑"],
            "bubbWMADJ": ["涌泉", "涌泉放置", "涌泉编辑"],
            "maxaan": ["MAXAAN 喷嘴", "MAXAAN 喷嘴放置", "MAXAAN 喷嘴编辑"],
            "maxmpr": ["MAXMPR 喷嘴", "MAXMPR 喷嘴放置", "MAXMPR 喷嘴编辑"],
            "maxmprst": ["MAXMPR 条形喷嘴", "MAXMPR 条形喷嘴放置", "MAXMPR 条形喷嘴编辑"],
            "maxmprstream": ["MAXMPR 流式涌泉喷嘴", "MAXMPR 流式涌泉喷嘴放置", "MAXMPR 流式涌泉喷嘴编辑"],
            "maxmprststream": ["MAXMPR 流式涌泉喷嘴", "MAXMPR 流式涌泉喷嘴放置", "MAXMPR 流式涌泉喷嘴编辑"],
            "bseries": ["B 系列喷嘴", "B 系列喷嘴放置", "B 系列喷嘴编辑"],
            "bseriesst": ["B 系列条形喷嘴", "B 系列条形喷嘴放置", "B 系列条形喷嘴编辑"],
            "trench": ["沟槽", "挖沟", "沟槽编辑"],
            "v": ["阀门集管", "阀门集管放置", "阀门集管编辑"],
            "ws": ["水源", "水源放置", "水源编辑"],
            "lp": ["支管", "支管绘制", "支管编辑"],
            "lpPVC": ["支管", "支管绘制", "支管编辑"],
            "mp": ["主管", "主管绘制", "主管编辑"],
            "mpPVC": ["主管", "主管绘制", "主管编辑"],
            "compass": ["指南针", "指南针设置", "指南针编辑"],
            "loCurve": ["线条", "绘制线条", "编辑线条"],
            "lsz": ["大小", "绘制大小", "编辑大小"],
            "text": ["文本", "绘制文本", "编辑文本"],
            "ldtext": ["文本", "文本设置", "编辑文本"],
            "staticText": ["文本", "文本设置", "编辑文本"],
            "dynamicText": ["文本", "文本设置", "编辑文本"],
            "lotable": ["表格", "表格设置", "编辑表格"],
            "stampText": ["印章", "印章文字设置", "编辑印章文字"],
            "sb": ["比例尺", "绘制比例尺", "编辑比例尺"]
        },
        vars: {
            sp: "喷头",
            ld: "景观",
            mixed_sp_lo: "喷头/布局",
            mixed_sp_lo2: "喷头/布局 2",
            mixed_ld_lo: "景观/布局",
            hw: "Hydrawise",
            lo: "布局",
            loPM: "降水量",
            doIrrigate: "灌溉区",
            doNotIrrigate: "非灌溉区",
            obstacles: "灌溉障碍物",
            placementObstacles: "放置障碍物",
            stdSurf: "标准",
            fineCut: "精修草坪",
            raw: "生混凝土",
            soft: "软沙",
            flowerBedMix1: "花卉混合 1",
            flowerBedMix2: "花卉混合 2",
            flowerBedMix3: "花卉混合 3",
            flowerBedWhite: "白色花坛",
            flowerBedBlue: "蓝色花坛",
            flowerBedYellow: "黄色花坛",
            flowerBedRed: "红色花坛",
            flowerBedMalina: "深红色花坛",
            flowerBedOrange: "橙色花坛",
            flowerBedDarkBlue: "深蓝色花坛",
            flowerBedViolet: "紫色花坛",
            flowerBedDarkViolet: "深紫色花坛",
            herbalBed1: "草药床 1",
            herbalBed2: "草药床 2",
            mulch: "覆盖物",
            gravel: "碎石",
            shrubs: "灌木 1",
            pavementFill: "人行道 1",
            pavementContour: "人行道 2",
            pavement3: "人行道 3",
            pavement01_A: "俄罗斯方块 1",
            pavement01_B: "俄罗斯方块 2",
            pavement01_C: "俄罗斯方块 3",
            pavement02_A: "对角线 1",
            pavement02_B: "对角线 2",
            pavement03_A: "野性 1",
            pavement03_B: "野性 2",
            pavement04_Red_L: "蜂窝红色浅",
            pavement04_Red_D: "蜂窝红色深",
            pavement04_Green_L: "蜂窝绿色浅",
            pavement04_Green_D: "蜂窝绿色深",
            pavement04_Blue_L: "蜂窝蓝色浅",
            pavement04_Blue_D: "蜂窝蓝色深",
            pool: "游泳池",
            lo_stdDynCurve: "动态",
            lo_stdCurve: "标准",
            stdCurve: "标准",
            markCurve: "红色标记",
            pathCurve: "路径",
            pillarCurve: "柱子",
            fenceCurve: "围栏",
            test00: "测试 00",
            test01: "测试 01",
            test02: "测试 02",
            test03: "测试 03",
            test04: "测试 04",
            test05: "测试 05",
            test06: "测试 06",
            saf01: "石头 1",
            saf02: "石头 2",
            saf03: "石头 3",
            saf04: "石头 4",
            saf05: "石头 5",
            saf06: "石头 6",
            saf07: "石头 7",
            saf08: "长椅 1",
            saf09: "长椅 2",
            saf10: "家具 1",
            saf11: "家具 2",
            saf12: "汽车 1",
            saf13: "汽车 2",
            saf14: "儿童滑梯 1",
            saf14_0: "儿童滑梯 2",
            saf14_L: "儿童滑梯 3",
            saf14_R: "儿童滑梯 4",
            saf15: "秋千顶篷",
            saf16: "躺椅 1",
            saf17: "躺椅 2",
            saf18: "灯 1",
            saf19: "灯 2",
            saf20: "瀑布",
            saf21: "水体 1",
            saf22: "水体 2",
            saf23: "井盖 1",
            saf24: "井盖 2",
            bush01: "灌木 #01",
            bush02: "灌木 #02",
            bush03: "灌木 #03",
            bush04: "灌木 #04",
            bush05: "灌木 #05",
            bush06: "灌木 #06",
            bush07: "灌木 #07",
            bush08: "灌木 #08",
            bush09: "灌木 #09",
            bush10: "灌木 #10",
            bush11: "灌木 #11",
            bush12: "灌木 #12",
            bush13: "灌木 #13",
            tree00: "果树",
            tree01: "树 #01",
            tree02: "树 #02",
            tree03: "树 #03",
            tree04: "树 #04",
            tree05: "树 #05",
            tree06: "树 #06",
            tree07: "树 #07",
            tree08: "树 #08",
            tree09: "树 #09",
            tree10: "树 #10",
            tree11: "树 #11",
            tree12: "树 #12",
            tree13: "树 #13",
            tree14: "树 #14",
            tree15: "树 #15",
            tree16: "树 #16",
            tree17: "树 #17",
            stdRuler: "标准",
            fixedCntr: "固定区域编号",
            stand_aloneCntr: "独立控制器",
            modularCntr: "模块化控制器",
            rainSensor: "雨量传感器",
            soilSensor: "土壤传感器",
            freezeSensor: "冻结传感器",
            wrFreezeSensor: "无线雨量/冻结传感器",
            windSensor: "风速传感器",
            solarSensor: "太阳能传感器",
            flowSensor: "流量传感器",
            weatherStation: "气象站",
            controlWire: "控制线",
            wirelessControl: "无线控制",
            sensorWire: "传感器线",
            wirelessSensor: "无线传感器连接",
            wirelessWire: "无线连接",
            dS16: "滴灌起点 16/13毫米",
            dS17: "滴灌起点 17毫米",
            qcPlastic: "塑料快速接头阀",
            qcMetal: "金属快速接头阀",
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
            stdTrench: "标准（40厘米）（旧）",
            normalTrench: "正常（宽：10厘米 深：50厘米）",
            narrowTrench: "窄（宽：5厘米 深：30厘米）（手动挖沟机）",
            wideTrench: "宽（宽：30厘米 深：60厘米）（小型挖掘机）",
            multi: "阀门箱",
            source: "水源",
            empty: "空的",
            frame: "框架",
            gostDefault: "大印章",
            gostSmall: "小印章",
            a4hor: "A4 横向",
            a4vert: "A4 纵向",
            a3hor: "A3 横向",
            a3vert: "A3 纵向",
            a2hor: "A2 横向",
            a2vert: "A2 纵向",
            a1hor: "A1 横向",
            a1vert: "A1 纵向",
            a0hor: "A0 横向",
            a0vert: "A0 纵向",
            "dind4hor": "DIN D4 横向",
            "dind4vert": "DIN D4 纵向",
            "dind3hor": "DIN D3 横向",
            "dind3vert": "DIN D3 纵向",
            "dind2hor": "DIN D2 横向",
            "dind2vert": "DIN D2 纵向",
            "dind1hor": "DIN D1 横向",
            "dind1vert": "DIN D1 纵向",
            "dind0hor": "DIN D0 横向",
            "dind0vert": "DIN D0 纵向",
            "ansiAhor": "ANSI A 横向",
            "ansiAvert": "ANSI A 纵向",
            "ansiBhor": "ANSI B 横向",
            "ansiBvert": "ANSI B 纵向",
            "ansiChor": "ANSI C 横向",
            "ansiCvert": "ANSI C 纵向",
            "ansiDhor": "ANSI D 横向",
            "ansiDvert": "ANSI D 纵向",
            "ansiEhor": "ANSI E 横向",
            "ansiEvert": "ANSI E 纵向",
            "archAhor": "Arch A 横向",
            "archAvert": "Arch A 纵向",
            "archBhor": "Arch B 横向",
            "archBvert": "Arch B 纵向",
            "archChor": "Arch C 横向",
            "archCvert": "Arch C 纵向",
            "archDhor": "Arch D 横向",
            "archDvert": "Arch D 纵向",
            "archEhor": "Arch E 横向",
            "archEvert": "Arch E 纵向",
            "archE1hor": "Arch E1 横向",
            "archE1vert": "Arch E1 纵向",
            "archE2hor": "Arch E2 横向",
            "archE2vert": "Arch E2 纵向",
            "archE3hor": "Arch E3 横向",
            stdCompass: "指南针",
            gostSize: "大小线",
            landscp: "景观表",
            conv: "符号表",
            convAll: "所有符号表",
            zoneT: "区域表",
            sprinkZoneTimeT: "喷洒区域时间",
            sprinkT: "喷洒表",
            dripT: "滴灌管表",
            insItemT: "插入表（按项目）",
            insVarDiamT: "插入表（按材料和直径）",
            insDiamT: "插入表（按直径）",
            insVarT: "插入表（按材料）",
            staticText: "文本",
            dynamicText: "文本",
            stampTextDef: "印章文本",
            sbStdMetric: "中等比例尺（公制）",
            sbMinMetric: "迷你（公制）",
            sbExtMetric: "扩展（公制）",
            sbStdImperial: "中等比例尺（英制）",
            sbMinImperial: "迷你（英制）",
            sbExtImperial: "扩展（英制）",
            gentleMicroClimate: "温和",
            normalMicroClimate: "正常",
            toughMicroClimate: "恶劣",
            sand: "沙土",
            sandyLoam: "沙壤土",
            lightLoam: "轻壤土",
            mediumLoam: "中壤土",
            heavyLoam: "重壤土",
            clay: "粘土",
            heavyClay: "重粘土",
            noneIncline: "0-5% (0-3°)",
            lightIncline: "5-8% (3-5°)",
            mediumIncline: "8-12% (5-7°)",
            hugeIncline: "12%+ (7°+)"
        },
        misc: {
            fixedCntrSubText: "固定",
            standAloneCntrSubText: "独立",
            modularCntrSubText: "模块化"
        },
        placeholders: {
            rotorType: ["{{brand}} {{series}} 旋转喷头", "{{brand}} {{series}} 旋转喷头放置", "{{brand}} {{series}} 旋转喷头编辑"]
        }
    };
})(this);
