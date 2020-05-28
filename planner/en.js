this.LNG = {
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //UNITS---------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    units: {
        m: "m",
        cm: "cm",
        mm: "mm",
        ft: "'",
        in: '"',
        sqm: "m²",
        acre: "ac",
        hectare: "ha",
        sqft: "sqr.ft",
        bar: "bar",
        kpa: "kPa",
        atm: "atm",
        mH2O: "mH₂O",
        psi: "psi",
        l: "l",
        m3: "m³",
        USg: "gal",
        lpm: "lpm",
        lph: "lph",
        m3h: "m³/h",
        USgpm: "gpm",
        USgph: "gph",
        deg: "°",
        pcs: "pcs",
        pcsDot: "pcs.",
        percent: "%",
        in_Alt: "in.",
        mps: "m/s",
        kph: "km/h",
        degreesCentigrade: "°C",
        mmph: "mm/h",
        inph: "in./h"
    },
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //DRAWING TOOLS-------------------------------------------------------------
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    drawing: {
        autoDrawer: "Auto drawer",
        chooseSprinkler: "Choose nozzle:",
        auto: "Auto-set",
        waterSource2row: ["Water", "Intake"],
        setLineLength: "Set line size (mm):",
        setPressure: "Set expected dynamical pressure at nozzles (bar):",
        setMaxFlow: "Set max water flow (l/min):",
        controllerShort: "C",
        sensorShort: "S",
        action_activateEraser: "Activate eraser",
        action_deactivateEraser: "Deactivate eraser",
        action_boolUnite: "Unite",
        action_boolIntersect: "Intersect",
        action_boolSubtract: "Subtract",
        action_boolExclude: "Exclude",
        action_changeSprayBody: "Set spray",
        action_changeVariant: "Set variant",
        action_changeImgVariant: "Set variant",
        action_changeType: "Set type",
        action_addConsumers: "Add consumers",
        action_drawBranches: "Add branches",
        action_editLine: "Edit segments",
        action_drawCircles: "Draw circles",
        action_detachAll: "Detach all",
        action_drawBrush: "Draw brush",
        action_editBrush: "Edit brush",
        action_changeBrushSize: "Brush size",
        action_booleans: "Boolean ops.",
        action_intoPoly: "Turn into polygon",
        action_intoBrush: "Turn into brush",
        action_activateRotation: "Rotate",
        action_deactivateRotation: "Still",
        action_markZones: "Zones marking",
        action_unmarkZones: "Remove marking",
        action_sprNames: "Sprinklers names",
        action_noSprNames: "Remove names",
        action_lockItem: "Lock",
        action_unlockItem: "Unlock",
        Circle: "Circle",
        Triangle: "Triangle",
        BushForm: "Bushes",
        BushForm1: "Bushes 1",
        BushForm2: "Bushes 2",
        BushForm3: "Bushes 3",
        Square: "Square",
        noShadow: "None",
        standardShadow: "Standard",
        normalSizeSide: "Normal",
        invertedSizeSide: "Inverted",
        strMiter: "Miter",
        strRound: "Round",
        strBevel: "Bevel",
        strSquare: "Square",
        strButt: "Butt",
        FWnormal: "Normal",
        FWbold: "Bold",
        FWitalic: "Italic",
        FWbolditalic: "Italic Bold",
        FJleft: "Left",
        FJright: "Right",
        FJcenter: "Center",
        rzwHeight: "Height"
    },
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //DRAWER HELPER-------------------------------------------------------------
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    interface: {
        //------------------------------------------------------------
        //-------------------TOOL NAMES-------------------------------
        //------------------------------------------------------------
        multiSelector: "Selector",
        //----Drawing
        selectPoly: "No selected items",
        //----Sprinkling
        selectSprink: "No selected items",
        lpNozzler: "Attaching water consumers",
        dl16CircDrawer: "Drip circles laying 16mm",
        dl16sDrawer: "Drip cover drawing 16mm",
        dl17CircDrawer: "Drip circles laying 17mm",
        dl17sDrawer: "Drip cover drawing 17mm",
        //------------------------------------------------------------
        //-------------------VALUES-----------------------------------
        //------------------------------------------------------------
        //Values
        rulerLength: "Total distance",
        type: "Type",
        variant: "Variant",
        area: "Area",
        perimeter: "Perimeter",
        curveLength: "Length",
        treeDiameter: "Diameter",
        bushDiameter: "Diameter",
        nozTypes: "Available types",
        nozType: "Type",
        sprBod: "Spray body",
        rad: 'Radius',
        angle: 'Angle',
        reducedBy: 'Reduced by',
        consump: 'Consumption',
        pressure: 'Pressure',
        coverSize: 'Coverage',
        maxFlow: 'Maximum water flow',
        pipesNum: "Pipes attached",
        pipeType: "Type",
        pipeLength: "Length",
        wireLength: "Length",
        valvesManifNum: "Valves manifolds",
        valvesNum: "Valves",
        propDiam: "Proper diameter",
        curDiam: "Drawing diameter",
        outsNum: "Water consumers",
        flow: "Water flow",
        precipRate: "Precipitation rate",
        totalPrecipArea: "Total coverage",
        precipRateShort: "Precip.",
        coveredArea: "Area",
        dripsNum: "Drip lines connected",
        dripType: "Drip Type",
        dripRowsStep: "Surface rows step",
        dripRowsAngle: "Surface rows angle",
        cntrType: "Controller type",
        sensType: "Sensor type",
        zonesNum: "Zones controlled",
        trenchWidth: "Width",
        trenchDepth: "Depth",
        trenchVolume: "Volume",
        insetDiam: "Diameter",
        insetLength: "Length",
        insetVar: "Material",
        itemsCount: "Count",
        insetDepth: "Depth",
        zoneName: "Zone name",
        itemAlias: "Alias",
        //MULTISELECTOR
        itemsSelected: "Selected",
        totalArea: "Total area",
        totalPerimeter: "Total perimeter",
        totalLength: "Total length",
        totalVolume: "Total volume",
        totalConsumption: "Total consumption",
        //------------------------------------------------------------
        //-------------------STATUSES---------------------------------
        //------------------------------------------------------------
        //Stauses
        isSelfCrossing_true: "Invalid polygon",
        isSelfCrossing_false: "Valid polygon",
        isConnected_true: "Connected",
        isConnected_false: "Not connected",
        isWired_true: "Wired",
        isWired_false: "Not wired",
        isDripZone_true: "Drip zone",
        isDripZone_false: "",
        isSprinklerZone_true: "Sprinkler zone",
        isSprinklerZone_false: "",
        isOverloaded_true: "OVERLOAD!!!",
        isOverloaded_false: "",
        isUnderpressured_true: "Low pressure",
        isUnderpressured_false: "",
        isOverpressured_true: "High pressure",
        isOverpressured_false: "",
        isLocked_true: "Locked",
        isLocked_false: "",
        //------------------------------------------------------------
        //-------------------CLASSES,SERIES,SUBSERIES etc.------------
        //------------------------------------------------------------
        "Stainless steel": "Stainless steel",
        "Plastic": "Plastic",
        "MPR Nozzles": "MPR Nozzles",
        "Rotary Nozzles": "Rotary Nozzles",
        Nozzles: "Nozzles",
        "Bubbler nozzles": "Bubbler nozzles",
        "Multi-stream": "Multi-stream",
        "Dual-stream": "Dual-stream",
        "Stream Nozzles": "Stream Nozzles",
        "Short Radius Nozzles": "Short Radius Nozzles",
        "Pressure compensating": "Pressure compensating",
        "Adjustable flood": "Adjustable flood",
        Adjustable: "Adjustable",
        Fixed: "Fixed",
        "Fixed Arc": "Fixed Arc",
        "Strip Pattern": "Strip Pattern",
        "Drip line": "Drip line",
        "Drip cover": "Drip cover",
        "16mm": "16mm",
        "17mm": "17mm",
        "emitter": "With emitters",
        "noemitter": "W/O Emitters",
        "Root zone watering": "Root zone watering",
        Lateral: "Lateral",
        Main: "Main",
        hdpe: "HDPE",
        Controller: "Controller",
        Sensor: "Sensor",
        Wiring: "Wiring",
        Surface: "Surface",
        Lawn: "Lawn",
        Bed: "Bed",
        Shrubs: "Shrubs",
        Path: "Path",
        Concrete: "Concrete",
        Sand: "Sand",
        Water: "Water",
        Bedding: "Bedding",
        Flower: "Flower",
        Herbal: "Herbal",
        geographic: "Geographic",
        sizeMark: "Dimensions",
        scalingBar: "Scaling bar",
        texts: "Texts",
        staticText: "Static text",
        dynamicText: "Dynamic text",
        stampText: "Stamp text",
        stampTextDefault: "Text",
        stampTextgr1: "Document definition",
        stampTextgr2: "Address cell",
        stampTextgr3: "Site name",
        stampTextgr4: "Drawing name",
        stampTextgr9: "Organization info",
        stampTextgr6t: "Stage",
        stampTextgr7t: "Page",
        stampTextgr8t: "Pages",
        stampTextgr6: "P",
        stampTextgr7: "1",
        stampTextgr8: "10",
        stampTextgr14t: "Ch.",
        stampTextgr15t: "Prtcp.",
        stampTextgr16t: "Page",
        stampTextgr17t: "# Doc.",
        stampTextgr18t: "Sign.",
        stampTextgr19t: "Date",
        stampTextgr20t: "Orig. Inv.#",
        stampTextgr21t: "Sign'n'Date",
        stampTextgr22t: "Repl. Inv.#",
        inserts: "Pipe Sleeves",
        //------------------------------------------------------------
        //-------------------LAYERS MANIPULATOR-----------------------
        //------------------------------------------------------------
        showLM: "Show layers manager",
        hideLM: "Hide layers manager",
        //------------------------------------------------------------
        //-------------------SOME OTHER DETAILS-----------------------
        //------------------------------------------------------------
        noName: "Unnamed",
        //------------------------------------------------------------
        //-------------------AJAX LOADING STATUSES--------------------
        //------------------------------------------------------------
        beganExporting: "Exporting layout",
        successExporting: "Successfully exported",
        failExporting: "Failed to export",
        failExportingLimitReached: "<a target='_blank' href='/account/subscription'>Daily limit reached</a>",
        exportingLimit: "Limit: ",
        exportingLeft: "Left today: ",
        pdfExportingPopUpBlocked: "Your browser blocked pop-up window. Please allow pop-ups for this site to get .PDF file",
        //------------------------------------------------------------
        //-------------------TOOLTIPS---------------------------------
        //------------------------------------------------------------
        tt_group: "Pop-up thread",
        tt_group_MT: "Male",
        tt_group_FT: "Female",
        tt_riserHeight: "Rizer height",
        tt_pressureReg: "Pressure regulator",
        tt_checkValve: "(With Check Valve)",
        tt_home: "Home",
        tt_prev: "Previous",
        tt_next: "Next",
        tt_end: "End",
        tt_add: "Add",
        tt_clone: "Clone",
        tt_remove: "Remove",
        tt_rename: "Rename"
    },
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //LAYOUTER-------------------------------------------------------------
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    layouter: {
        //compass
        N: "N",
        S: "S",
        E: "E",
        W: "W",
        //conventions
        sprinklers: "Sprinklers",
        dripStarts: "Drip start",
        rzwLayer: "Root zone watering",
        dripLines: "Drip line",
        valvesLayer: "Valve manifold",
        waterSources: "Water source",
        quickCoupLayer: "Quick coupling",
        controllers: "Controller",
        sensorsLayer: "Sensor",
        mainPipes: "Main pipe",
        lateralPipes: "Lateral pipes",
        trenchesLayer: "Trenches",
        insetsLayer: "Insets",
        wiresLayer: "Wiring",
        senswiresLayer: "Sensor wiring",
        surfaces: "Surfaces",
        ldItemsLayer: "Plants",
        covers: "Cover area",
        nameplates: "Consumers info",
        oreolas: "Consumers marks",
        pipeInfo: "Pipes info",
        lines: "lines",
        overlays: "Overlays",
        stampLayer: "Frame",
        stampTexts: "Stamp texts",
        //zonesTable
        zoneType: "Zone type",
        color: "Color",
        consumers: "Consumers",
        waterFlow: "Flow",
        sprinklerZone: "Sprinkler",
        dripZone: "Drip",
        rzwZone: "Root watering",
        emptyZone: "No consumers",
        specifyDiagonal: "Please, specify your monitor diagonal size in inches",
        //sprinklersTable
        consType: "Type",
        consName: "Name",
        zoneNum: "Zone",
        sector: "Sector",
        radius: "Radius",
        reducedBy: "Reduced",
        nozzle: "Nozzle",
        rotor: "Rotor",
        bubbler: "Bubbler",
        bubblerNozzle: "Bubbler-Nozzle",
        //dripsTable
        catId: "Cat.ID",
        brand: "Brand",
        emitterStep: "Step",
        emitterFlow: "Flow",
        //layersManangerSpecific
        consumersGrp: "Consumers",
        nodesGrp: "Nodes",
        wiresGrp: "Wires",
        pipesGrp: "Pipes",
        landscapeGrp: "Landscape",
        allTogether: "All"
    },
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //OUTLAYER-------------------------------------------------------------
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    outlayer: {
        //tableHeaders
        numsign: "#",
        typeCol: "Type",
        brand: "Brand",
        catid: "Cat.ID",
        title: "Title",
        units: "Units",
        amount: "Amount",
        //predetermined
        dripLine: "Drip line",
        dl16: "Drip line 16mm",
        dl17: "Drip line 17mm",
        dripStart: "Drip start",
        ds16: "Drip start 16mm",
        ds17: "Drip start 17mm",
        manifold_no_lps_issue: "No zones connected",
        manifold_no_mp_issue: "Not connected to mainline",
        manifold_no_wr_issue: "No control wire attached",
        //nodes-----------------------------------
        sprinkler_unattached: "WARNING!!! You have unattached SPRINKLERS (they won't be presented in final specs sheet)",
        drip_unattached: "WARNING!!! You have unattached DRIP irrigation elements (they won't be presented in final specs sheet)",
        mains_unattached: "WARNING!!! You have unattached MAINLINES (they won't be presented in final specs sheet)",
        mains_empty: "WARNING!!! You have MAINLINES without consumers (they won't be presented in final specs sheet)",
        laterals_unattached: "WARNING!!! You have unattached LATERAL PIPES (they won't be presented in final specs sheet)",
        laterals_empty: "WARNING!!! You have LATERAL PIPES without consumers (they won't be presented in final specs sheet)",
        rzw_unattached: "WARNING!!! You have unattached ROOT ZONE WATERING elements (they won't be presented in final specs sheet)",
        sensors_unattached: "WARNING!!! You have unattached SENSORS (they won't be presented in final specs sheet)",
        manifolds_unfinished: "WARNING!!! You have unfinished MANIFOLDS (you cannot compete valves configuration)",
        youCanSeeThemInTheDrawing: "You can see each element on the drawing, by pressing the 'eye' on the left of element row",
        sprinkler_nozzleMT: "Sprinkler node (Nozzle with Female thread)",
        sprinkler_nozzleFT: "Sprinkler node (Nozzle with Male thread)",
        "sprinkler_rotor1/2F": "Sprinkler node (Rotor) 1/2\" female",
        "sprinkler_rotor3/4F": "Sprinkler node (Rotor) 3/4\"",
        "sprinkler_rotor1/2M": "Sprinkler node (Rotor) 1/2\" male",
        "sprinkler_bubbler1/2F": "Sprinkler node (Bubbler)",
        sprinkler_bubblerNozzleMT: "Sprinkler node (Bubbler nozzle with Female thread)",
        sprinkler_bubblerNozzleFT: "Sprinkler node (Bubbler nozzle with Male thread)",
        dripIrrigation16: "Drip irrigation (16mm)",
        dripIrrigation17: "Drip irrigation (17mm)",
        rootZoneWatering: "Root zone watering system",
        manifold: "Valves manifold node",
        automation: "Automation node",
        mainPipes_hdpePE80SDR11: "Main pipes HDPE SDR 11",
        mainPipes_hdpePE80SDR136: "Main pipes HDPE SDR 13.6",
        mainPipes_hdpePE80SDR176: "Main pipes HDPE SDR 17.6",
        lateralPipes_hdpePE80SDR11: "Lateral pipes HDPE SDR 11",
        lateralPipes_hdpePE80SDR136: "Lateral pipes HDPE SDR 13.6",
        lateralPipes_hdpePE80SDR176: "Lateral pipes HDPE SDR 17.6",
        mainPipes_hdpeSDR9: "Main pipes HDPE SDR 9",
        mainPipes_hdpeSDR11: "Main pipes HDPE SDR 11",
        mainPipes_hdpeSDR136: "Main pipes HDPE SDR 13.6",
        mainPipes_hdpeSDR17: "Main pipes HDPE SDR 17",
        mainPipes_hdpeSDR176: "Main pipes HDPE SDR 17.6",
        lateralPipes_hdpeSDR9: "Lateral pipes HDPE SDR 9",
        lateralPipes_hdpeSDR11: "Lateral pipes HDPE SDR 11",
        lateralPipes_hdpeSDR136: "Lateral pipes HDPE SDR 13.6",
        lateralPipes_hdpeSDR17: "Lateral pipes HDPE SDR 17",
        lateralPipes_hdpeSDR176: "Lateral pipes HDPE SDR 17.6",
        wiring: "Wiring",
        qcv: "Quick-coupling valves",
        fixedCntr: "fixed",
        stand_aloneCntr: "stand alone",
        modularCntr: "modular",
        decoderCntr: "decoder",
        inset: "Pipe Sleeve",
        insets: "Sleeves",
        //-----------------------------------------
        novar: "no variants",
        choosevar: "choose variant",
        //element.types----------------------------
        nozzle: "Nozzle",
        rotor: "Rotor",
        rotorNozzle: "Rotor nozzle",
        bubbler: "Bubbler",
        bubblerNozzle: "Bubbler-nozzle",
        rzw: "Root zone watering system",
        sprayBody: "Spray body",
        outBarb: "Barb-to-nozzle",
        flexPipe: "Funny pipe",
        sj: "Swing joint",
        inBarb: "Barb-to-pipe",
        midSprinkPipeFitting: "Tie-in fitting",
        endSprinkPipeFitting: "End-pipe fitting",
        midRZWPipeFitting: "Tie-in fitting",
        endRZWPipeFitting: "End-pipe fitting",
        dripPipe: "Drip pipe",
        dripTeeFitting: "Drip tee",
        dripCapFitting: "Drip cap",
        dripCouplingFitting: "Drip coupling",
        dripElbowFitting: "Drip elbow",
        dripSpike: "Drip spike",
        sprinklerZoneValve: "Sprinkler zone valve",
        emptyZoneValve: "Valve w/o consumers",
        valveOutFitting: "Valve-to-zone",
        dripZoneValve: "Drip zone valve",
        rzwZoneValve: "Root watering valve",
        pressureReg: "Pressure regulator",
        controller: "Controller",
        flowMeter: "Flow meter",
        rainSensor: "Rain sensor",
        soilSensor: "Soil sensor",
        freezeSensor: "Freeze sensor",
        windSensor: "Wind sensor",
        solarSensor: "Solar sensor",
        flowSensor: "Flow sensor",
        weatherStation: "Weather station",
        solarPanel: "Solar panel",
        mainPipe: "Main pipe",
        teeFitting: "Tee",
        elbowFitting: "Elbow",
        reducerFitting: "Reducer",
        lateralPipe: "Lateral pipe",
        capFitting: "Cap",
        basicCable: "Basic cable",
        basicWire: "Basic wire",
        sensorCable: "Weather sensor wire",
        qcPlastic: "Q/C Valve plastic",
        qcMetal: "Q/C Valve metal",
        //typesOfAcessories
        hdpeCOR: "Corrugated pipe",
        expModule: "Expansion module",
        rzwSleeve: "Fabric sleeve",
        rwCap: "Reclaimed water cap",
        gutterMount: "Gutter mount",
        delayRelay: "Delay relay",
        fctFlow: "FCT Receptacle tee",
        fctBspAdap: "Adapter for FCT fitting",
        drainCheckValve: "Check valve",
        rwId: "Reclaimed water ID",
        vpc: "Vandal-proof cap",
        inletFilter: "Inlet filter",
        wifiModule: "Wi-Fi module",
        wallMount: "Wall mount",
        rwsSock: "Fabric sleeve",
        rwsGrate: "Grate for RWS",
        npCover: "Non-potable cover",
        sprExt: "Spray extension",
        popUpToThread: "Spray adapter",
        valveBox: "Valve box",
        valveBoxExt: "Valve box extension",
        qcPlasticKey: "Key for Q/C Valve",
        qcPlasticElbFit: "Elbow fitting",
        qcMetalKey: "Key for Q/C Valve",
        qcMetalElbFit: "Elbow fitting",
        qcMetalCapKey: "Cover key",
        insTape: "Insulation tape",
        wrConn: "Connector",
        shrinkTube: "Heat shrink tube",
        hcFrontPanel: "Front panel",
        ball_valve: "Ball valve",
        thread_manifold: "Manifold",
        plastic_filter: "Filter (plastic)",
        waterMeter: "Water meter",
        rfModule: "Radio module",
        largeAntenna: "Antenna",
        wifiHub: "WiFi Hub",
        handRemoteKit: "Remote kit",
        handRemote: "Remote",
        wifiBundleKit: "WiFi Bundle Kit",
        //typesOfFittings
        //drip
        barb_cap_8: "Drip end closure",
        barb_elbow_PP: "Barb elbow",
        barb_tee_PPP: "Barb tee",
        barb_coupling_PP: "Barb coupling",
        barb_cross_PPPP: "Barb cross",
        barb_cap_P: "Barb end cap",
        barb_coupling_PT: "Barb coupling to thread",
        barb_tee_PTP: "Barb tee to thread",
        barb_valve_PT: "Barb valve to thread",
        barb_valve_PP: "Barb valve",
        twlc_elbow_PP: "Twist-lock elbow",
        twlc_tee_PPP: "Twist-lock tee",
        twlc_coupling_PP: "Twist-lock coupling",
        twlc_cross_PPPP: "Twist-lock cross",
        twlc_cap_P: "Twist-lock end cap",
        twlc_coupling_PT: "Twist-lock coupling to thread",
        twlc_tee_PTP: "Twist-lock tee to thread",
        twlc_valve_PT: "Twist-lock valve to thread",
        twlc_valve_PP: "Twist-lock valve",
        dl_valves: "Special valves",
        //pipe
        compress_elbow_PT: "Compression/thread elbow",
        compress_coupling_PT: "Compression/thread coupling",
        compress_tee_PTP: "Compression/thread tee",
        compress_cap_P: "Compression end plug",
        compress_elbow_PP: "Compression elbow",
        compress_coupling_PP: "Compression coupling",
        compress_reducer_PP: "Compression reducer",
        compress_tee_PPP: "Compression tee",
        compress_cross_PPPP: "Compression cross",
        compress_single_clamp_saddle: "Single clamp saddle",
        thread_nipple: "Nipple",
        thread_coupling: "Coupling",
        thread_mf_reducer: "Male/Female reducer",
        thread_mf_adaptor: "Male/Female adapter",
        thread_mf_bush: "Male/Female bush",
        thread_tee: "Female tee",
        thread_elbow: "Female elbow",
        thread_mf_elbow: "Male/Female elbow",
        thread_cap: "Female cap",
        thread_plug: "Male plug",
        thread_union_nut: "Union nut",
        cable: "Cable",
        wire: "Wire",
        //extendables
        dripStartAssembly: "Drip start assembly",
        intakeAssembly: "Intake assembly",
        offtakeAssembly: "Offtake arbitrary fittings",
        numofvalves: "Number of valves: ",
        numofvalvesshort: "Valves: ",
        numofmanifs: "Number of manifolds: ",
        intakePipeSize: "Intake pipe size: ",
        valveBoxes: "Valve boxes",
        valveAccessories: "Valves accessories",
        oneValveAccessories: "Valve accessories",
        controllerAccessories: "Controller accessories",
        sensorAccessories: "Sensor accessories",
        sprBodyAccessories: "Spray body accessories",
        rzwAccessories: "Root zone watering accessories",
        pipeStartFittings: "Main pipe arbitrary fittings",
        qcAccessories: "Q/C Valves accessories",
        wiringAccessories: "Wiring accessories",
        pipeSize: "Pipe size: ",
        endOfPipe: "(End position)",
        midOfPipe: "(Incutting)",
        emptyRender: [
            "Sorry... no content parsed",
            "You haven`t fully completed any of the irrigation nodes to be rendered"
        ],
        serviceFail: [
            "Sorry... specification rendering service is unreachable at the moment",
            "Please try again later, when connection will be established",
            "Note, that configuration you have made previously will be saved though"
        ],
        serviceTrialExpired: [
            "Sorry... specification rendering service is not available for your account",
            "That means your trial period is over, and if you want to use this service",
            "<a href='/account/subscription'>You can upgrade to PRO Account</a>"
        ],
        serviceLimitReached: [
            "You have reached daily limit on rendering specs sheets",
            "To remove the limit on the number of specification renders per day",
            "<a href='/account/subscription'>You can upgrade to PRO Account</a>"
        ],
        findInDrawing: "Show on canvas"
    },
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    //DIALOGER-------------------------------------------------------------
    //--------------------------------------------------------------------------
    //--------------------------------------------------------------------------
    dialoger: {
        MMMM: ["\x00", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        MMM: ["\x01", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        dddd: ["\x02", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        ddd: ["\x03", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        //buttonsCaps
        ok: "Ok",
        save: "Save",
        apply: "Apply",
        defaults: "Defaults",
        retry: "Retry",
        finish: "Finish",
        safeRestart: "Safe restart",
        saveAndExit: "Save and Exit",
        exit: "Exit",
        cancel: "Cancel",
        rename: "Rename",
        idk: "I don't know",
        getFile: "Get file",
        reset: "Reset",
        random: "Random",
        //misc
        zoneNum: "Zone #",
        zonesColoring: "Zones coloring",
        coversColoured: "Paint sprinklers covers",
        dripsColoring: "Drip lines coloring",
        //saveOflline
        saveOffline: [
            "Sorry... connection is lost",
            "But don`t worry, you can proceed with your project in offline mode.",
            "While you are offline - all your savings will be stored as text file in your browser downloads folder.",
            "And later you can upload the latest version of your drawing onto the server."
        ],
        restartOffline: [
            "Sorry... connection is lost",
            "But don`t worry, your project was saved locally on your computer.",
            "You can find it in browser downloads folder.",
            "If you want to work offline, you can download an Offline Instance of application from your cabinet at http://www.irrisketch.com"
        ],
        brokenSaving: [
            "Sorry... something went wrong while loading your project",
            "It seems that your previous saving was corrupted somehow.",
            "But don't worry, we can repair it.",
            "Your project will be marked as 'Broken' in your workshop now.",
            "And our technical stuff will handle this situation as soon as possible."
        ],
        corruptedSavingFile: [
            "Sorry... file you are trying to load is not readable",
            "But don't worry, we can repair it.",
            "All you need is to submit this broken file in your workshop file loading form.",
            "And then  we will try to get it back to work."
        ],
        ajaxReqFail: [
            "Sorry... We lost connection to the server",
            "It's impossible to send/receive any data at the moment",
            "Please try again later"
        ],
        critical: [
            "Sorry... something went wrong",
            "But don`t worry, your drawing is in a safe place now, just click safe-restart button to continue..."
        ],
        fatal: [
            "Sorry... something went wrong",
            "Please help us to make our service better. Describe after which user actions this error occurred",
            "Provide information here"
        ],
        areYouSure: [
            "You are about to close this project",
            "Note that all unsaved changes will be lost."
        ],
        pickAnotherImage: "Pick another one",
        imageTooBig: [
            "Maximum image size exceeded",
            "For optimization purposes, maximum image handled is limited by 10Mb"
        ],
        notAnImage: [
            "Sorry, this file type is not supported",
            "Supported image formats : .pdf .png, .jpg, .jpeg, .tiff, .gif, .bmp"
        ],
        goProTexts: [
            "Action RESTRICTED",
            "This action is not allowed for FREE subscription"
        ],
        goPro: 'GO PRO',
        renameLayout: "Enter new name",
        areYouSureDeleteLayout: [
            "Attention! This action cannot be undone",
            "Are you sure want to delete : ",
            "Delete"
        ],
        setUnderlaySize: [
            "Set length of the line you have just drawn",
            "You`ve entered incorrect value. Please try again"
        ],
        setMonitorDiagonal: [
            "Please give us information about your monitors diagonal size",
            "You`ve entered incorrect value. Please try again"
        ],
        getSpecsTable: [
            "Set specification output preferences",
            "Group equipment by ",
            "Node", "Brand",
            "Set file type as ",
            "XLSX", "ODS"
        ],
        saveSpecsVariant: [
            "Enter title",
            "Outlay #",
            "Save",
            "Saving specs",
            "Completed",
            "Saving failed",
            "Update existing outlays",
            "Update",
            "Updating outlays"
        ],
        differentSprGroups: [
            "Failed to attach different types of water consumers on this pipe",
            "According to the irrigation design standards it's unacceptable to mix different types of water consumers or sprinklers with different precipitation rates on the same zone"
        ],
        tooFarAwaySpr: [
            "Failed to connect consumers",
            "Some of consumers are too far away from lateral pipe to be connected. Maximum distance of connection you can configure in preferences menu"
        ],
        outlayerConfig: [
            "Specification sheet configuration"
        ],
        cL_alreadyConnected: [
            "Failed to concatenate lines",
            "These lines are both connected to"
        ],
        cL_segOnElem: [
            "Failed to concatenate lines",
            "You can't connect to segment that is on"
        ],
        cL_strangeError: [
            "Failed to concatenate lines",
            "Sorry...Connection failed"
        ],
        cL_misgrouping: [
            "Failed to concatenate lines",
            "These lines have consumers that are not recommended to place on the same zone. If you want to connect them anyway, turn on 'Unsafe mode' for Grouping sprinkles in project configuration"
        ],
        cL_valve: "Valves manifold",
        cL_waterSource: "Water source",
        cL_dripStart: "Drip start",
        cL_controller: "Controller",
        cL_sensors: "Sensor",
        cL_valves: "Valves manifold",
        cL_notSameVariant: [
            "Failed to concatenate lines",
            "These lines have different types",
            "Type of currently drawing line",
            "Type of line that you want to connect with"
        ],
        hasRestorableProject: [
            "You have unsaved data for this project",
            "You can restore unsaved state from snapshot taken at"
        ],
        restoreProject: "Restore",
        imageLost: [
            "Sorry we cannot find some of underlay images on server",
            "This image was not found:"
        ],
        filterSelection_exclude: "Exclude from selection",
        filterSelection_include: "Include into selection",
        filterSelectionNames: {
            sprinklers: "Consumers",
            dripStarts: "Drip starts",
            rzwLayer: "Root zone watering",
            dripLines: "Drip lines",
            valvesLayer: "Valve manifolds",
            waterSources: "Water sources",
            controllers: "Controllers",
            sensorsLayer: "Sensors",
            mainPipes: "Main pipes",
            lateralPipes: "Lateral pipes",
            trenchesLayer: "Trenches",
            insetsLayer: "Insets",
            wiresLayer: "Wiring",
            senswiresLayer: "Sensor wiring",
            quickCoupLayer: "Quick couplings",
            surfaces: "Polygons and lines",
            ldItemsLayer: "Landscape items"
        },
        //SPRINKLER NODE CONFIGS
        sprinklerNode: "Sprinkler node",
        fcType: "Type of flex connection",
        sj: "Swing joint",
        flexPipeBarbs: "Flex pipe + barbs",
        minFlexPipeLength: "Minimal length of flex pipe per connection",
        midSprinkPipeFitting: "Tie-in fitting",
        endSprinkPipeFitting: "End-pipe fitting",
        single_clamp_saddle: "Clamp saddle",
        tee_PTP: "Tee with female BSP thread",
        elbow_PT: "Elbow with female BSP thread",
        coupling_PT: "Adapter with female BSP thread",
        //MANIFOLD NODE CONFIGS
        manifoldNode: "Manifold nodes",
        valvesOutlay: "Valves outlay",
        fold: "Folded",
        unfold: "Unfolded",
        //AUTOMATION NODE CONFIGS
        automationNode: "Automation node",
        controllerModules: "Modular controllers expansion modules are choosen:",
        autoModules: "Automatically (best fit)",
        userModules: "Manually (as accessories)",
        //RZW NODE
        rzwNode: "Root zone watering node",
        midRZWPipeFitting: "Tie-in fitting",
        endRZWPipeFitting: "End-pipe fitting",
        //DRIP node
        dripNode: "Drip irrigation",
        dripConnectionType: "Drip fittings type",
        dripLengthPrecision: "Digits after the decimal point in tubing length",
        dripTubingAddon: "Drip tubing additive",
        barb: "Barbed fittings",
        twistLock: "Twist-lock fittings",
        dripSpikesStep: "Drip line holder spike step",
        dripCrossFittingAble: "Cross fitting able",
        pipesNode: "Piping section",
        hdpeConnectionType: "HDPE fittings type",
        pipeAddon: "Pipe additive for each diameter",
        pipeLengthPrecision: "Digits after the decimal point in pipes length",
        crossFittingAble: "Cross fitting able",
        compress: "Compression fittings",
        wiringNode: "Wiring section",
        basicWiringMethod: "Control wiring method",
        noAutoWiring: "Add wiring manually",
        separateCableToManifold: "Separate multi-core cable to manifold",
        separateWireToValve: "Separate wire to valve + common wire to manifold",
        maxCableCores: "Max cable cores",
        verticalWiringAddon: "Vertical additive to controller wire",
        verticalSensWiringAddon: "Vertical additive to sensor wire",
        wireAddon: "Wire additive for each type",
        wireLengthPrecision: "Digits after the decimal point in wiring length",
        //DRAWER CONFIG
        drawerConfig: [
            "Project configuration"
        ],
        //SPRINKLER PRESSURE CONFIGS
        sprinklerConfig: "Sprinklers",
        pressureDefinedBy: "Expected pressure at sprinklers is",
        recommendedPressure: "Recommended by vendor",
        userPressure: "Set by user",
        expPressure: "Expected pressure at sprinkler",
        sprinklerGroupMode: "Grouping sprinklers",
        safeSprGroupMode: "Strict mode (group only compatible)",
        unsafeSprGroupMode: "Unsafe mode (WARNING! No grouping restrictions)",
        //UNITS CONFIG
        unitsConfig: "Units of Measurement",
        precisionStd: "Digits after the decimal point",
        distanceUnits: "Distance",
        distancePrecision: "Digits after the decimal point",
        sprinklerDistUnits: "Sprinkler radius",
        sprinklerDistPrecision: "Digits after the decimal point",
        areaUnits: "Area",
        areaPrecision: "Digits after the decimal point",
        volumeUnits: "Volume",
        volumePrecision: "Digits after the decimal point",
        waterFlowUnits: "Water flow",
        waterFlowPrecision: "Digits after the decimal point",
        pressureUnits: "Pressure",
        pressurePrecision: "Digits after the decimal point",
        velocityUnits: "Velocity",
        velocityPrecision: "Digits after the decimal point",
        precipRateUnits: "Precipitation rate",
        precipRatePrecision: "Digits after the decimal point",
        ft: "feet",
        ftin: "feet/inches",
        //UNITS CONFIG
        hydraConfig: "Hydraulics",
        waterTemp: "Water temperature",
        maxFlowVelocity: "Max flow velocity in pipe"
    }
};
