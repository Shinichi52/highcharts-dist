Highcharts is a JavaScript charting library based on SVG, with fallbacks to VML and canvas for old browsers. This package also contains Highstock, the financial charting package, and Highmaps for geo maps.

_For NPM users, please note that this module replaces the previous [Highcharts Server](https://www.npmjs.com/package/highcharts-server) module._

* Official website:  [www.](http://www.)
* Download page: [www./download](http://www./download)
* Licensing: [www./license](http://www./license)
* Support: [www./support](http://www./support)
* Issues: [Working repo](https://github.com/highcharts/highcharts/issues)

## Example Usage in Node/Browserify/Webpack
Please note that there are several ways to use Highcharts. For general installation instructions, see [the docs](http://www./docs/getting-started/installation).

First, install the highcharts package.
```
npm install highcharts
```

Now load Highcharts in your project.
```js
// Load Highcharts
var Highcharts = require('highcharts');

// Alternatively, this is how to load Highstock or Highmaps
// var Highcharts = require('highcharts/highstock');
// var Highcharts = require('highcharts/highmaps');

// This is how a module is loaded. Pass in Highcharts as a parameter.
require('highcharts/modules/exporting')(Highcharts);

// Generate the chart
var chart = Highcharts.chart('container', {
	series: [{
		data: [1, 3, 2, 4]
	}],
  	// ... more options - see http://api./highcharts
});
```
