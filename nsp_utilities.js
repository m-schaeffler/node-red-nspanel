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

// Functions for message construction

exports.addEntity = function(type,entity,icon,color,label="",value="")
{
    return [type,entity,icon,color,label,value];
}

exports.addWeather = function(time='-',icon='-',data='-')
{
    return [time,icon,data];
}
