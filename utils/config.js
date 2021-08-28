const pjson = require('../package.json')

const config = {
  exampleConfig: parse(
    process.env.EXAMPLE_CONFIG || 'not have `EXAMPLE_CONFIG` env',
  ),
  features: {},
  version: 'v' + pjson.version,
}

function feature(name) {
  return config.features[name]
}

function parse(value, fallback) {
  if (typeof value === 'undefined') {
    return fallback
  }
  switch (typeof fallback) {
    case 'boolean':
      return !!JSON.parse(value)
    case 'number':
      return JSON.parse(value)
    default:
      return value
  }
}

export { config }
export default {
  install(Vue) {
    Vue.appConfig = config
    Vue.feature = feature
    Vue.prototype.$appConfig = config
    Vue.prototype.$feature = feature
  },
}
