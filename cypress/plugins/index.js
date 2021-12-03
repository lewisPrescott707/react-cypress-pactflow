const axios = require('axios')

/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('task', {
    getIngredients(url) {
      const result = axios.get(`https://ministryoftesting.pactflow.io/pacts/provider/Cake_API/consumer/Fan_GBBO/version/0.0.1/stub${url}`,
        {
          headers: {
            Authorization: 'Bearer mz0TQ06P5mEnUZfLO4BgSQ',
            Accept: 'application/json'
          }
        }).then(response => { 
          console.log(response.data)
          return response.data })
      return result
    },
  })
}
