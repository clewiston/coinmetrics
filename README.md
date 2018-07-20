## COINMETRICS

Node.js wrapper for the Coinmetrics.io API.  Documentation can be found here: [https://coinmetrics.io/api/](https://coinmetrics.io/api/)

## INSTALLATION

```bash
npm install coinmetrics
```

## Usage with Async/Await

```js
const coinmetrics = require('coinmetrics')

var supportedAssets = await coinmetrics.getSupportedAssets()

var dataTypes = await coinmetrics.getAvailableDataTypesForAsset(asset)

var assetData = await coinmetrics.getAssetDataForTimeRange(asset, data_type, begin_timestamp, end_timestamp)

```

## Usage with Promises

```js
const coinmetrics = require('coinmetrics')

coinmetrics.getSupportedAssets()
  .then((results) => {
    var supportedAssets = results
  })

coinmetrics.getAvailableDataTypesForAsset(asset)
  .then((results) => {
    var dataTypes = results
  })

coinmetrics.getAssetDataForTimeRange(asset, data_type, begin_timestamp, end_timestamp)
  .then((results) => {
    var assetData = results
  })

```

## Usage with Callbacks

```js
const coinmetrics = require('coinmetrics')

coinmetrics.getSupportedAssets((results) => {
  var supportedAssets = results
})

coinmetrics.getAvailableDataTypesForAsset(asset, (results) => {
  var dataTypes = results
})

coinmetrics.getAssetDataForTimeRange(asset, data_type, begin_timestamp, end_timestamp, (results) => {
  var assetData = results
})

```
