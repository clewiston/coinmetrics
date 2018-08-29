const rp = require('request-promise')
const COINMETRICS_API_URL = 'https://coinmetrics.io/api/v1/'
const GET_ASSET_DATA_FOR_TIME_RANGE = 'get_asset_data_for_time_range/'
const GET_SUPPORTED_ASSETS = 'get_supported_assets'
const GET_AVAILABLE_DATA_TYPE_FOR_ASSET = 'get_available_data_types_for_asset'

module.exports.getSupportedAssets = async(cb) => {
  var url = COINMETRICS_API_URL + GET_SUPPORTED_ASSETS
  var results = JSON.parse(await rp(url))
  if (cb) {
    cb(results)
  } else {
    return results
  }
}

module.exports.getAvailableDataTypesForAsset = async(asset, cb) => {
  var url = COINMETRICS_API_URL + GET_AVAILABLE_DATA_TYPE_FOR_ASSET + '/' + asset
  var results = JSON.parse(await rp(url))
  if (cb) {
    cb(results)
  } else {
    return results
  }
}

module.exports.getAssetDataForTimeRange = async(asset, data_type, begin_timestamp, end_timestamp, cb) => {
  var url = COINMETRICS_API_URL + GET_ASSET_DATA_FOR_TIME_RANGE + asset + '/' + data_type + '/' + begin_timestamp + '/' + end_timestamp
  var results = JSON.parse(await rp(url))
  if (cb) {
    cb(results)
  } else {
    return results
  }
}
