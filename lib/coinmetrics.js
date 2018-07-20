const request = require('request')
const COINMETRICS_API_URL = 'https://coinmetrics.io/api/v1/'
const GET_ASSET_DATA_FOR_TIME_RANGE = 'get_asset_data_for_time_range/'
const GET_SUPPORTED_ASSETS = 'get_supported_assets'
const GET_AVAILABLE_DATA_TYPE_FOR_ASSET = 'get_available_data_types_for_asset'

module.exports.getSupportedAssets = async(cb) => {
  var url = COINMETRICS_API_URL + GET_SUPPORTED_ASSETS
  var results = await restCallPromise(url)
  if (cb) {
    cb(results)
  } else {
    return results
  }
}

module.exports.getAvailableDataTypesForAsset = async(asset, cb) => {
  var url = COINMETRICS_API_URL + GET_AVAILABLE_DATA_TYPE_FOR_ASSET + '/' + asset
  var results = await restCallPromise(url)
  if (cb) {
    cb(results)
  } else {
    return results
  }
}

module.exports.getAssetDataForTimeRange = async(asset, data_type, begin_timestamp, end_timestamp, cb) => {
  var url = COINMETRICS_API_URL + GET_ASSET_DATA_FOR_TIME_RANGE + asset + '/' + data_type + '/' + begin_timestamp + '/' + end_timestamp
  var results = await restCallPromise(url)
  if (cb) {
    cb(results)
  } else {
    return results
  }
}

const restCallPromise = (url) => {
    return new Promise((resolve, reject) => {
      request(url, (err, response, body) => {
        if (err) {
          reject(err)
        } else {
          resolve(JSON.parse(body))
        }
      })
    })
};
