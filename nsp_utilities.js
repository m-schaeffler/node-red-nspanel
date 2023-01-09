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

// Functions for message construction

exports.addEntity = function(type,entity,icon,color,label="",value="")
{
    return [type,entity,icon,color,label,value];
}

exports.addWeather = function(time='-',icon='-',data='-')
{
    return [time,icon,data];
}
