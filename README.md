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

#### Card Functions

##### `function cardEntities(title,...e)`

builds the `entityUpd` data for an entitiy page.
The entire command is returned as an array.

|parameter| type | description |
|:--------|:-----|:------------|
|title | string | Title of the page|
|e|array| up to four entities for the page|

## Author

[Mathias Schäffler](https://github.com/m-schaeffler)

## License

LGPL-2.1
