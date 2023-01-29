# node-red-nspanel

## NspUtil

This package provides some constants and utility funtions for a NodeRed integration of a 
[Sonoff NsPanel](https://sonoff.tech/product/central-control-panel/nspanel/)
flashed with [Tasmota / Lovelace UI](https://docs.nspanel.pky.eu/).

### Constants

There are some predefined color values: `colBlack`, `colGray`, `colWhite`, `colRed`, `colYellow`, 
`colGreen`, `colBlue`, `colAqua`

You can also find a lot of icons named `iconXxxx`; for details plesae have a look into the 
[source code](nsp_utilities.js).

### Functions

#### Helper Functions

#### Functions for Message Construction

#### Screensaver Functions

##### `function saverWeatherEmpty()`

builds and returns an empty `weatherUpdate` message for the screensaver; the weather data itself must be writen afterwarts into the array.

##### `function saverColor()`

builds and returns a `color` message for the screensaver.

|parameter| type | description |
|:--------|:-----|:------------|
|mainIcon| integer | color of the now icon|
|icon1| integer | color of the icon #1|
|icon2| integer | color of the icon #2|
|icon3| integer | color of the icon #3|
|icon4| integer | color of the icon #4|

##### `function saverNotify()`

builds and returns a `notify` message for the screensaver.

|parameter| type | description |
|:--------|:-----|:------------|
|title| string | header of the notification|
|text| string | text of the notification|

#### Card Functions

##### `function cardEntities(title,...e)`

builds the `entityUpd` data for an entity page.
The entire command is returned as an array.

|parameter| type | description |
|:--------|:-----|:------------|
|title | string | Title of the page|
|e|array| up to four entities for the page|

##### `function cardGrid(title,...e)`
s. `cardEntities`.

##### `function cardPower(title,...e)`
s. `cardEntities`.

##### `function cardWlan(title,ssid,passwd)`

builds the `entityUpd` data for a WLAN QR page.
The entire command is returned as an array.

|parameter| type | description |
|:--------|:-----|:------------|
|title | string | Title of the page|
|ssid|string| SSID (name) of the WLAN|
|passwd|string| Password of the WLAN|

## Author

[Mathias Schäffler](https://github.com/m-schaeffler)

## License

LGPL-2.1
