'use strict'
const moment = require('moment');
const coinmetrics = require('../lib/coinmetrics.js')

test('tests coinmetrics.getSupportedAssets with Async/Await', async() => {
  var results = await coinmetrics.getSupportedAssets()
  expect(typeof results).toBe('object')
})

test('tests coinmetrics.getSupportedAssets with Promise', async() => {
  coinmetrics.getSupportedAssets()
    .then(results => {
      expect(typeof results).toBe('object')
      return;
    })
})

test('tests coinmetrics.getSupportedAssets with Callback', async() => {
  coinmetrics.getSupportedAssets((results) => {
    expect(typeof results).toBe('object')
  })
})

test('tests CoinMetrics getAvailableDataTypesForAsset with Async/Await', async() => {
  var asset = 'btc'
  var results = await coinmetrics.getAvailableDataTypesForAsset(asset)
  expect(typeof results).toBe('object')
})

test('tests CoinMetrics getAvailableDataTypesForAsset with Promise', async() => {
  var asset = 'btc'
  coinmetrics.getAvailableDataTypesForAsset(asset)
    .then(results => {
      expect(typeof results).toBe('object')
      return;
    })
})

test('tests CoinMetrics getAvailableDataTypesForAsset with Callback', async() => {
  var asset = 'btc'
  coinmetrics.getAvailableDataTypesForAsset(asset, (results) => {
    expect(typeof results).toBe('object')
  })
})

test('tests CoinMetrics getAssetDataForTimeRange with Async/Await', async() => {
  var asset = 'btc'
  var data_type = 'txcount'
  var begin_timestamp = moment().subtract(2,'days').unix()
  var end_timestamp = moment().unix()
  var results = await coinmetrics.getAssetDataForTimeRange(asset, data_type, begin_timestamp, end_timestamp)
  expect(Object.keys(results)[0]).toEqual('result')
})

test('tests CoinMetrics getAssetDataForTimeRange with Promise', async() => {
  var asset = 'btc'
  var data_type = 'txcount'
  var begin_timestamp = moment().subtract(2,'days').unix()
  var end_timestamp = moment().unix()
  coinmetrics.getAssetDataForTimeRange(asset, data_type, begin_timestamp, end_timestamp)
    .then(results => {
      expect(Object.keys(results)[0]).toEqual('result')
    })
})

test('tests CoinMetrics getAssetDataForTimeRange with Callback', async() => {
  var asset = 'btc'
  var data_type = 'txcount'
  var begin_timestamp = moment().subtract(2,'days').unix()
  var end_timestamp = moment().unix()
  var results = await coinmetrics.getAssetDataForTimeRange(asset, data_type, begin_timestamp, end_timestamp, (results) => {
    expect(Object.keys(results)[0]).toEqual('result')
  })
})
