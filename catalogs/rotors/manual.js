//HUNTER

var i20 = {
    lang: {
        en: "Hunter " + model + " Rotor with #" + key + " " + nm.en + " nozzle",
        ru: "Роторный дождеватель Hunter " + model + " " + nm.ru + " сопло №" + key
    },
    body_lang: {
        en: "Hunter " + mdl + " Rotor",
        ru: "Роторный дождеватель Hunter " + mdl
    },
    noz_lang: {
        en: "Hunter I-20 #" + nzlId + " nozzle (" + nm.en + ")",
        ru: "Сопло №" + nzlId + " для ротора Hunter I-20 (" + nm.ru + ")"
    }
};

var i25 = {
    lang: {
        en: "Hunter " + model + " Rotor with #" + key + " " + nm.en + " nozzle",
        ru: "Роторный дождеватель Hunter " + model + " " + nm.ru + " сопло №" + key
    },
    body_lang: {
        en: "Hunter " + model + " Rotor",
        ru: "Роторный дождеватель Hunter " + model
    },
    noz_lang: {
        en: "Hunter I-25 #" + key + " nozzle (" + nm.en + ")",
        ru: "Сопло №" + key + " для ротора Hunter I-25 (" + nm.ru + ")"
    }
};

var pgj = {
    lang: {
        en: "Hunter PGJ-" + RR + " Rotor with #" + nzl + " red nozzle",
        ru: "Роторный дождеватель Hunter PGJ-" + RR + " красное сопло №" + nzl
    },
    body_lang: {
        en: "Hunter PGJ-" + RR + " Rotor",
        ru: "Роторный дождеватель Hunter PGJ-" + RR
    },
    noz_lang: {
        en: "Hunter PGJ #" + nzl + " nozzle (red)",
        ru: "Сопло №" + nzl + " для ротора Hunter PGJ (красное)"
    }
};

var pgpAdj = {
    lang: {
        en: "Hunter " + model + " Rotor with #" + key + " " + nm.en + " nozzle",
        ru: "Роторный дождеватель Hunter " + model + " " + nm.ru + " сопло №" + key
    },
    body_lang: {
        en: "Hunter " + model + " Rotor",
        ru: "Роторный дождеватель Hunter " + model
    },
    noz_lang: {
        en: "Hunter PGP-ADJ #" + key + " nozzle (" + nm.en + ")",
        ru: "Сопло №" + key + " для ротора Hunter PGP-ADJ (" + nm.ru + ")"
    }
};

var pgpUltra = {
    lang: {
        en: "Hunter " + model + " Rotor with #" + key + " " + nm.en + " nozzle",
        ru: "Роторный дождеватель Hunter " + model + " " + nm.ru + " сопло №" + key
    },
    body_lang: {
        en: "Hunter " + mdl + " Rotor",
        ru: "Роторный дождеватель Hunter " + mdl
    },
    noz_lang: {
        en: "Hunter PGP-Ultra #" + nzlId + " nozzle (" + nm.en + ")",
        ru: "Сопло №" + nzlId + " для ротора Hunter PGP-Ultra (" + nm.ru + ")"
    }
};

var pgpUltraPRB = {
    lang: {
        en: "Hunter " + model + " Rotor with #" + key + " " + nm.en + " nozzle (pressure regulated body 3.1 bar)",
        ru: "Роторный дождеватель Hunter " + model + " " + nm.ru + " сопло №" + key + " (регулятор давления 3.1 бар)"
    },
    body_lang: {
        en: "Hunter " + mdl + " Rotor",
        ru: "Роторный дождеватель Hunter " + mdl
    },
    noz_lang: {
        en: "Hunter PGP-Ultra #" + nzlId + " nozzle (" + nm.en + ")",
        ru: "Сопло №" + nzlId + " для ротора Hunter PGP-Ultra (" + nm.ru + ")"
    }
};

var srm = {
    lang: {
        en: "Hunter SRM-" + RR + " Rotor with #" + nzl + " dark green nozzle",
        ru: "Роторный дождеватель Hunter SRM-" + RR + " тёмно-зеленое сопло №" + nzl
    },
    body_lang: {
        en: "Hunter SRM-" + RR + " Rotor",
        ru: "Роторный дождеватель Hunter SRM-" + RR
    },
    noz_lang: {
        en: "Hunter SRM #" + nzl + " nozzle (dark green)",
        ru: "Сопло №" + nzl + " для ротора Hunter SRM (тёмно-зеленое)"
    },
};

//RAIN BIRD


var optionsTexts = {
    "S": {
        en: " (Shrub model)",
        ru: " (Кустарниковая модель)"
    },
    "SAM": {
        en: " (with Check Valve)",
        ru: " (с запорным клапаном)"
    },
    "NP": {
        en: " (non-potable water)",
        ru: " (непитьевая вода)"
    }
};

var featureTexts = {
    "S": {
        en: " (Shrub model)",
        ru: " (Кустарниковая модель)"
    },
    "+": {
        en: " (Flow shut-off)",
        ru: " (Перекрыте потока)"
    },
    "PC": {
        en: " (Part circle)",
        ru: " (Регулируемый сектор)"
    },
    "FC": {
        en: " (Full circle)",
        ru: " (Полный круг)"
    },
    "SAM": {
        en: " (With Check Valve)",
        ru: " (Запорный клапан)"
    },
    "PRS": {
        en: " (Pressure regulated 3.1 bar)",
        ru: " (Регулировка давления 3.1 бар)"
    },
    "NP": {
        en: " (Non-potable water)",
        ru: " (Непитьевая вода)"
    },
    "SS": {
        en: " (Stainless steel)",
        ru: " (Нержавеющая сталь)"
    }
};

var featureTexts_maxibird_maxipaw = {
    "SAM": {
        en: " (With Check Valve)",
        ru: " (Запорный клапан)"
    }
};

var rb3500 = {
    lang: {
        en: "Rain Bird 35" + RR + " Rotor with #" + nzl + " blue nozzle" + options["en"],
        ru: "Роторный дождеватель Rain Bird 35" + RR + " синее сопло №" + nzl + options["ru"]
    },
    body_lang: {
        en: "Rain Bird 35" + RR + " Rotor" + options["en"],
        ru: "Роторный дождеватель Rain Bird 35" + RR + options["ru"]
    },
    noz_lang: {
        en: "Rain Bird 3500 Series #" + nzl + " nozzle (blue)",
        ru: "Сопло №" + nzl + " для ротора Rain Bird 3500 (синее)"
    }
};

var rb5000 = {
    lang: {
        en: "Rain Bird " + model + " Rotor with #" + nozName + " " + nzl.name.en + " nozzle" + options.en,
        ru: "Роторный дождеватель Rain Bird " + model + " " + nzl.name.ru + " сопло №" + nozName + options.ru
    },
    body_lang: {
        en: "Rain Bird " + mdl + " Rotor" + options.en,
        ru: "Роторный дождеватель Rain Bird " + mdl + options.ru
    },
    noz_lang: {
        en: "Rain Bird 5000 Series #" + nzlId + " nozzle (" + nzl.name.en + ")",
        ru: "Сопло №" + nzlId + " для ротора Rain Bird 5000 (" + nzl.name.ru + ")"
    },
};

var rb8000 = {
    lang: {
        en: "Rain Bird " + model + " Rotor with #" + key + " " + nm.en + " nozzle",
        ru: "Роторный дождеватель Rain Bird " + model + " " + nm.ru + " сопло №" + key
    }
};

var maxibird = {
    lang: {
        en: "Rain Bird " + model + " Impulse rotor with #" + nozName + " " + nzl.name.en + " nozzle" + options.en,
        ru: "Импульсный дождеватель Rain Bird " + model + " " + nzl.name.ru + " сопло №" + nozName + options.ru
    },
    body_lang: {
        en: "Rain Bird " + mdl + " Impulse rotor" + options.en,
        ru: "Импульсный дождеватель Rain Bird " + mdl + options.ru
    },
    noz_lang: {
        en: "Rain Bird MAXI-BIRD Series #" + nzlId + " nozzle (" + nzl.name.en + ")",
        ru: "Сопло №" + nzlId + " для ротора Rain Bird MAXI-BIRD (" + nzl.name.ru + ")"
    }
};

var maxipaw = {
    lang: {
        en: "Rain Bird " + model + " Impulse rotor with #" + nozName + " " + nzl.name.en + " nozzle" + options.en,
        ru: "Импульсный дождеватель Rain Bird " + model + " " + nzl.name.ru + " сопло №" + nozName + options.ru
    },
    body_lang: {
        en: "Rain Bird " + mdl + " Impulse rotor" + options.en,
        ru: "Импульсный дождеватель Rain Bird " + mdl + options.ru
    },
    noz_lang: {
        en: "Rain Bird MAXI-PAW Series #" + nzlId + " nozzle (" + nzl.name.en + ")",
        ru: "Сопло №" + nzlId + " для ротора Rain Bird MAXI-PAW (" + nzl.name.ru + ")"
    }
};

//K-RAIN

var optionsTexts = {
    "CV": {
        en: " (Check Valve)",
        ru: " (запорный клапан)"
    },
    "RCW": {
        en: " (Reclaimed Water Use)",
        ru: " (непитьевая вода)"
    }
};

var miniPro = {
    lang: {
        en: "K-Rain MiniPro 130" + RR + " Rotor with #" + nzl + " red nozzle" + options["en"],
        ru: "Роторный дождеватель K-Rain MiniPro 130" + RR + " красное сопло №" + nzl + options["ru"]
    },
    body_lang: {
        en: "K-Rain MiniPro 130" + RR + " Rotor" + options["en"],
        ru: "Роторный дождеватель K-Rain MiniPro 130" + RR + options["ru"]
    },
    noz_lang: {
        en: "K-Rain MiniPro Series #" + nzl + " nozzle (red)",
        ru: "Сопло №" + nzl + " для ротора K-Rain MiniPro (красное)"
    }
};

var featureTexts = {
    "SH": {
        en: " (Shrub model)",
        ru: " (Кустарниковая модель)"
    },
    "HP": {
        en: " (12\" High Pop)",
        ru: " (12\" Шток)"
    },
    "CV": {
        en: " (With Check Valve)",
        ru: " (Запорный клапан)"
    },
    "RCW": {
        en: " (Reclaimed Water Use)",
        ru: " (Непитьевая вода)"
    }
};

var proPlus = {
    lang: {
        en: "K-Rain " + model + " ProPlus Rotor with #" + nozName + " " + nzl.name.en + " nozzle" + options.en,
        ru: "Роторный дождеватель K-Rain ProPlus " + model + " " + nzl.name.ru + " сопло №" + nozName + options.ru
    },
    body_lang: {
        en: "K-Rain " + mdl + " ProPlus Rotor" + options.en,
        ru: "Роторный дождеватель K-Rain ProPlus " + mdl + options.ru
    },
    noz_lang: {
        en: "K-Rain ProPlus Series #" + nzlId + " nozzle (" + nzl.name.en + ")",
        ru: "Сопло №" + nzlId + " для ротора K-Rain ProPlus (" + nzl.name.ru + ")"
    },
};

var optionsTexts = {
    "CV": {
        en: " (Check Valve)",
        ru: " (запорный клапан)"
    }
};

var rps50 = {
    lang: {
        en: "K-Rain RPS" + RR + " Rotor with #" + nzl + " red nozzle" + options["en"],
        ru: "Роторный дождеватель K-Rain RPS" + RR + " красное сопло №" + nzl + options["ru"]
    },
    body_lang: {
        en: "K-Rain RPS" + RR + " Rotor" + options["en"],
        ru: "Роторный дождеватель K-Rain RPS" + RR + options["ru"]
    },
    noz_lang: {
        en: "K-Rain RPS50 Series #" + nzl + " nozzle (red)",
        ru: "Сопло №" + nzl + " для ротора K-Rain RPS50 (красное)"
    },
};

var featureTexts = {
    "SH": {
        en: " (Shrub model)",
        ru: " (Кустарниковая модель)"
    },
    "6INCH": {
        en: " (6\" Riser)",
        ru: " (6\" Шток)"
    },
    "360": {
        en: " (Full circle)",
        ru: " (Полный круг)"
    },
    "CV": {
        en: " (With Check Valve)",
        ru: " (Запорный клапан)"
    },
    "RCW": {
        en: " (Reclaimed Water Use)",
        ru: " (Непитьевая вода)"
    },
    "SS": {
        en: " (Stainless Steel)",
        ru: " (Нержавеющая сталь)"
    }
};

var rps75 = {
    lang: {
        en: "K-Rain " + model + " Rotor with #" + nozName + " " + nzl.name.en + " nozzle" + options.en,
        ru: "Роторный дождеватель K-Rain " + model + " " + nzl.name.ru + " сопло №" + nozName + options.ru
    },
    body_lang: {
        en: "K-Rain " + mdl + " Rotor" + options.en,
        ru: "Роторный дождеватель K-Rain " + mdl + options.ru
    },
    noz_lang: {
        en: "K-Rain RPS75 Series #" + nzlId + " nozzle (" + nzl.name.en + ")",
        ru: "Сопло №" + nzlId + " для ротора K-Rain RPS75 (" + nzl.name.ru + ")"
    },
};

var rps75i = {
    lang: {
        en: "K-Rain " + model + " Rotor with #" + nozName + " " + nzl.name.en + " nozzle" + options.en,
        ru: "Роторный дождеватель K-Rain " + model + " " + nzl.name.ru + " сопло №" + nozName + options.ru
    },
    body_lang: {
        en: "K-Rain " + mdl + " Rotor" + options.en,
        ru: "Роторный дождеватель K-Rain " + mdl + options.ru
    },
    noz_lang: {
        en: "K-Rain RPS75i Series #" + nzlId + " nozzle (" + nzl.name.en + ")",
        ru: "Сопло №" + nzlId + " для ротора K-Rain RPS75i (" + nzl.name.ru + ")"
    },
};

var featureTexts = {
    "SH": {
        en: " (Shrub model)",
        ru: " (Кустарниковая модель)"
    },
    "6INCH": {
        en: " (6\" Riser)",
        ru: " (6\" Шток)"
    },
    "CV": {
        en: " (With Check Valve)",
        ru: " (Запорный клапан)"
    },
    "RCW": {
        en: " (Reclaimed Water Use)",
        ru: " (Непитьевая вода)"
    }
};

var rpsSelect = {
    lang: {
        en: "K-Rain " + model + " RPS Select Rotor with #" + nozName + " " + nzl.name.en + " nozzle" + options.en,
        ru: "Роторный дождеватель K-Rain RPS Select " + model + " " + nzl.name.ru + " сопло №" + nozName + options.ru
    },
    body_lang: {
        en: "K-Rain " + mdl + " RPS Select Rotor" + options.en,
        ru: "Роторный дождеватель K-Rain " + mdl + options.ru
    },
    noz_lang: {
        en: "K-Rain RPS Select Series #" + nzlId + " nozzle (" + nzl.name.en + ")",
        ru: "Сопло №" + nzlId + " для ротора K-Rain RPS Select (" + nzl.name.ru + ")"
    }
};

var featureTexts = {
    "SH": {
        en: " (Shrub model)",
        ru: " (Кустарниковая модель)"
    },
    "HP": {
        en: " (12\" High Pop)",
        ru: " (12\" Шток)"
    },
    "CV": {
        en: " (With Check Valve)",
        ru: " (Запорный клапан)"
    },
    "RCW": {
        en: " (Reclaimed Water Use)",
        ru: " (Непитьевая вода)"
    },
    "CR": {
        en: " (Chlorine Resistant Seal)",
        ru: " (Уплотнитель устойчивый к хлору)"
    },
    "OS": {
        en: " (On-site wastewater applications)",
        ru: " (Для сточных вод)"
    }
};

var superPro = {
    lang: {
        en: "K-Rain " + model + " SuperPro Rotor with #" + nozName + " " + nzl.name.en + " nozzle" + options.en,
        ru: "Роторный дождеватель K-Rain SuperPro " + model + " " + nzl.name.ru + " сопло №" + nozName + options.ru
    },
    body_lang: {
        en: "K-Rain " + mdl + " SuperPro Rotor" + options.en,
        ru: "Роторный дождеватель K-Rain SuperPro " + mdl + options.ru
    },
    noz_lang: {
        en: "K-Rain SuperPro Series #" + nzlId + " nozzle (" + nzl.name.en + ")",
        ru: "Сопло №" + nzlId + " для ротора K-Rain SuperPro (" + nzl.name.ru + ")"
    },
};

//TORO

var optionsTexts = {
    "12": {
        en: " (High Pop)",
        ru: " (Высокий шток)"
    },
    "E": {
        en: " (Effluent)",
        ru: " (Непитьевая вода)"
    }
};

var toro_300 = {
    lang: {
        en: "Toro 300 Series Rotor with #" + nzl + " fixed nozzle" + options["en"],
        ru: "Роторный дождеватель Toro 300 Series с фиксированным соплом №" + nzl + options["ru"]
    },
    body_lang: {
        en: "Toro 300 Series 300-" + RR + "-00" + optionsTogether + " Rotor" + options["en"],
        ru: "Роторный дождеватель Toro 300 Series 300-" + RR + "-00" + optionsTogether + options["ru"]
    },
    noz_lang: {
        en: "Toro 300-" + nzl + " Fixed nozzle + 3" + arc + "-00 (" + arcMap[arc][0] + ")" + " arc disk",
        ru: "Сопло фиксированное 300-" + nzl + " и диск 3" + arc + "-00 (" + arcMap[arc][0] + ")" + " для ротора Toro 300 Series"
    },
};

var toro_omni = {
    lang: {
        en: "Toro 300 Series Rotor with #" + nzl + " OMNI nozzle" + options["en"],
        ru: "Роторный дождеватель Toro 300 Series с соплом OMNI №" + nzl + options["ru"]
    },
    cat_id: "3" + arc + "-" + RR + "-" + nzl + optionsTogether,
    body_lang: {
        en: "Toro 300 Series 300-" + RR + "-00" + optionsTogether + " Rotor" + options["en"],
        ru: "Роторный дождеватель Toro 300 Series 300-" + RR + "-00" + optionsTogether + options["ru"]
    },
    noz_lang: {
        en: "Toro 300-" + nzl + " OMNI nozzle + 3" + arc + "-00 (" + arcMap[arc][0] + ")" + " arc disk",
        ru: "Сопло OMNI 300-" + nzl + " и диск 3" + arc + "-00 (" + arcMap[arc][0] + ")" + " для ротора Toro 300 Series"
    },
};

var optionsTexts = {
    "00": {
        en: " (Lawn Pop-Up)",
        ru: " (Газонный)"
    },
    "E": {
        en: " (Effluent)",
        ru: " (Непитьевая вода)"
    }
};

var optionsTexts = {
    "10": {
        en: " (Shrub)",
        ru: " (Кустовой)"
    },
    "E": {
        en: " (Effluent)",
        ru: " (Непитьевая вода)"
    },
    "COM": {
        en: " (Check Valve)",
        ru: " (Запорный клапан)"
    }
};

var mini8 ={
    lang: {
        en: "Toro MINI8-" + RR + " Rotor with #" + nzl + " red nozzle",
        ru: "Роторный дождеватель Toro MINI8-" + RR + " красное сопло №" + nzl
    },
    body_lang: {
        en: "Toro MINI8-" + RR + " Rotor",
        ru: "Роторный дождеватель Toro MINI8-" + RR
    },
    noz_lang: {
        en: "Toro MINI 8 Series #" + nzl + " nozzle (red)",
        ru: "Сопло №" + nzl + " для ротора Toro MINI 8 (красное)"
    },
};

var mini8E = {
    lang: {
        en: "Toro MINI8-" + RR + " Rotor with #" + nzl + " red nozzle (Effluent)",
        ru: "Роторный дождеватель Toro MINI8-" + RR + " красное сопло №" + nzl + " (Непитьевая вода)"
    },
    body_lang: {
        en: "Toro MINI8-" + RR + "-E" + " Rotor (Effluent)",
        ru: "Роторный дождеватель Toro MINI8-" + RR + "-E (Непитьевая вода)"
    },
    noz_lang: {
        en: "Toro MINI 8 Series #" + nzl + " nozzle (red)",
        ru: "Сопло №" + nzl + " для ротора Toro MINI 8 (красное)"
    },
};

var featureTexts = {
    "S": {
        en: " (Shrub model)",
        ru: " (Кустарниковая модель)"
    },
    "P": {
        en: " (Lawn pop-up)",
        ru: " (Газонная модель)"
    },
    "HP": {
        en: " (High pop)",
        ru: " (Высокий шток)"
    },
    "CK": {
        en: " (With Check Valve)",
        ru: " (Запорный клапан)"
    },
    "E": {
        en: " (Non-potable water)",
        ru: " (Непитьевая вода)"
    },
    "SS": {
        en: " (Stainless steel)",
        ru: " (Нержавеющая сталь)"
    }
};

var t5 ={
    lang: {
        en: "Toro " + model + " T5 RapidSet Rotor with #" + nozName + " " + nzl.name.en + " nozzle" + options.en,
        ru: "Роторный дождеватель Toro " + model + " T5 RapidSet " + nzl.name.ru + " сопло №" + nozName + options.ru
    },
    cat_id: model.split("-")[0] + nozName + "-" + model.split("-")[1],
    body_lang: {
        en: "Toro " + mdl + " T5 RapidSet Rotor" + options.en,
        ru: "Роторный дождеватель Toro " + mdl + " T5 RapidSet" + options.ru
    },
    noz_lang: {
        en: "Toro T5 RapidSet #" + nzlId + " nozzle (" + nzl.name.en + ")",
        ru: "Сопло №" + nzlId + " для ротора Toro T5 RapidSet (" + nzl.name.ru + ")"
    },
};