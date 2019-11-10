const _ = require('../../lib/utils')

module.exports = (types, label, fn) => {
  // Cloning types to keep the initial object intact
  types = types.slice()
  const executeNext = function () {
    const type = types.shift()
    if (!type) return

    _.info(type, `${label} starting`)

    return fn(type)
    .then(executeNext)
  }

  return executeNext()
}
