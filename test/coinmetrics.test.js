'use strict'
const moment = require('moment');
const coinmetrics = require('../lib/coinmetrics.js')


test('tests CoinMetrics getSupportedAssets', async() => {
  var results = await coinmetrics.getSupportedAssets()
  expect(typeof results).toBe('object')
})

test('tests CoinMetrics getAvailableDataTypesForAsset', async() => {
  var asset = 'btc'
  var results = await coinmetrics.getAvailableDataTypesForAsset(asset)
  expect(typeof results).toBe('object')
})

test('tests CoinMetrics getAssetDataForTimeRange', async() => {
  var asset = 'btc'
  var data_type = 'txcount'
  var begin_timestamp = moment().subtract(2,'days').unix()
  var end_timestamp = moment().unix()
  var results = await coinmetrics.getAssetDataForTimeRange(asset, data_type, begin_timestamp, end_timestamp)
  expect(Object.keys(results)[0]).toEqual('result')
})
