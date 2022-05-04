/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars

const pactCypressPlugin = require('@pactflow/pact-cypress-adapter/dist/plugin')
const fs = require('fs')

module.exports = (on, config) => {
  pactCypressPlugin(on, config, fs)
}
