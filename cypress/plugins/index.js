const axios = require('axios')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on) => {
  on('task', {
    getIngredients(stubUrl) {
      const pactflow = 'https://ministryoftesting.pactflow.io/pacts/provider/Cake_API';
      const result = axios.get(`${pactflow}/consumer/Fan_GBBO/version/0.0.3/stub${stubUrl}`,
        {
          headers: {
            Authorization: 'Bearer hZyOhJLwkCFCKddqZS9nNQ',
            Accept: "application/json; charset=UTF-8"
          }
        }).then(response => { 
          return response.data })
      return result
    },
  })
}
