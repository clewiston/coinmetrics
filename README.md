## COINMETRICS

Node.js wrapper for the Coinmetrics.io API.  API documentation can be found here: [https://coinmetrics.io/api/](https://coinmetrics.io/api/)

## INSTALLATION

```bash
npm install coinmetrics
```

## USAGE with Promises

```js
const coinmetrics = require('coinmetrics')

var supportedAssets = await coinmetrics.getSupportedAssets()

var dataTypes = await coinmetrics.getAvailableDataTypesForAsset(asset)

var assetData = await coinmetrics.getAssetDataForTimeRange(asset, data_type, begin_timestamp, end_timestamp)

```

## USAGE with Callbacks

```js
const coinmetrics = require('coinmetrics')

coinmetrics.getSupportedAssets((supportedAssets) => { console.log(supportedAssets) })

coinmetrics.getAvailableDataTypesForAsset(asset, (dataTypes) => { console.log(dataTypes) })

coinmetrics.getAssetDataForTimeRange(asset, data_type, begin_timestamp, end_timestamp, (assetData) => {console.log(assetData)})

```
