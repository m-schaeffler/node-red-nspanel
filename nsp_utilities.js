// NSP-Utilities for use in NodeRed function nodes

// Colors
exports.colBlack  = 0x0000;
exports.colGray   = 0x8C51;
exports.colWhite  = 0xFFFF;
exports.colRed    = 0xF800;
exports.colYellow = 0xFFC0;
exports.colGreen  = 0x07C0;
exports.colBlue   = 0x422F;
exports.colAqua   = 0x07FF;

// Icons
exports.iconWeatherSunny = "";
exports.iconWeatherNight = "";
exports.iconWeatherCloudy = "";
exports.iconWeatherPartlyCloudy = "";
exports.iconWeatherNightPartlyCloudy = "";
exports.iconWeatherFog = "";
exports.iconWeatherHail = "";
exports.iconWeatherLightning = "";
exports.iconWeatherRainy = "";
exports.iconWeatherPartlyRainy = "";
exports.iconWeatherSnowy = "";
exports.iconWifi = "";
exports.iconWifiLock = "";
exports.iconWifiLockOpen = "";
exports.iconWifiOff = "";
exports.iconWifiStrength1 = "";
exports.iconWifiStrength2 = "";
exports.iconWifiStrength3 = "";
exports.iconWifiStrength4 = "";
exports.iconWifiStrengthOff = "";
exports.iconWifiStrengthOffOutline = "";
exports.iconWifiStrengthOutline = "";
exports.iconLightbulb = "";
exports.iconLightbulbOutline = "";
exports.iconLightbulbOff = "";
exports.iconLightbulbOffOtline = "";
exports.iconLightbulbOn = "";
exports.iconLightbulbOn10 = "祉";
exports.iconLightbulbOn20 = "祈";
exports.iconLightbulbOn30 = "祐";
exports.iconLightbulbOn40 = "祖";
exports.iconLightbulbOn50 = "祝";
exports.iconLightbulbOn60 = "禍";
exports.iconLightbulbOn70 = "禎";
exports.iconLightbulbOn80 = "穀";
exports.iconLightbulbOn90 = "突";
exports.iconLightbulbOnOutline = "";
exports.iconPowerPlug = "";
exports.iconPowerPlugOff = "";
exports.iconPowerPlugOffOutline = "";
exports.iconPowerPlugOutline = "";
exports.iconWindow = "";
exports.iconWindowShutter = "";
exports.iconStop = "";
exports.iconArrowUp = "";
exports.iconArrowUpBold = "";
exports.iconArrowDown = "";
exports.iconArrowDownBold = "";
exports.iconArrowLeft = "";
exports.iconArrowLeftBold = "";
exports.iconArrowRight = "";
exports.iconArrowRightBold = "";
exports.iconThermometer = "";
exports.iconThermometerAlert = "";
exports.iconThermometerChevronDown = "";
exports.iconThermometerChevronUp = "";
exports.iconThermometerHigh = "";
exports.iconThermometerLow = "";
exports.iconThermometerMinus = "";
exports.iconThermometerOff = "";
exports.iconThermometerPlus = "";
exports.iconThermometerWater = "奔";
exports.iconBrightness = "";
exports.iconBrightnessPercent = "";
exports.iconPalette = "";
exports.iconPaletteOutline = "";

// helper functions

exports.scale = function(value,min,max)
{
    return 100*(value-min)/(max-min);
}

exports.unscale = function(value,min,max)
{
    return min+(max-min)*value/100;
}

// Functions for message construction

exports.addEntity = function(type,entity,icon,color,label="",value="")
{
    return [type,entity,icon,color,label,value];
}

exports.addPrevButton = function()
{
    return exports.addEntity("button", "navigate.prev", "<", exports.colWhite);
}

exports.addNextButton = function()
{
    return exports.addEntity("button", "navigate.next", ">", exports.colWhite);
}

exports.addWeather = function(time='-',icon='-',data='-')
{
    return [time,icon,data];
}

// screensaver functions

exports.saverWeatherEmpty = function()
{
    return Array.prototype.concat(
        ["weatherUpdate","-","-"],
        exports.addWeather(),
        exports.addWeather(),
        exports.addWeather(),
        exports.addWeather() );
}

exports.saverColor = function(mainIcon=0,icon1=0,icon2=0,icon3=0,icon4=0)
{
    return ["color", exports.colBlack, exports.colWhite, exports.colWhite, exports.colWhite, mainIcon, exports.colWhite, exports.colWhite, exports.colWhite, exports.colWhite, exports.colWhite, icon1, icon2, icon3, icon4, exports.colWhite, exports.colWhite, exports.colWhite, exports.colWhite, exports.colGray, exports.colWhite, exports.colWhite];
}

exports.saverNotify = function(title="",text="")
{
    return ["notify",title,text];
}

// card functions

exports.cardEntities = function(title,e1,e2=[],e3=[],e4=[])
{
    return Array.prototype.concat(
        ["entityUpd",title],
        exports.addPrevButton(),
        exports.addNextButton(),
        e1,
        e2,
        e3,
        e4 );
}

exports.cardGrid = exports.cardEntities;

exports.cardWlan = function(title,ssid,passwd)
{
    return Array.prototype.concat(
        ["entityUpd",title],
        exports.addPrevButton(),
        exports.addNextButton(),
        `WIFI:T:WPA;S:${ssid};P:${passwd};;`,
        exports.addEntity( "text", "iText.test_ssid", exports.iconWifi, exports.colBlue, "SSID", ssid ),
        exports.addEntity( "text", "iText.test_pw", exports.iconWifiLockOpen, exports.colBlue, "Password", passwd ) );
}
