'use strict'

let axios = require('axios')
const handler = (interaction) => {
  return new Promise((resolve, reject) => {
    // Check for parameters
    // Fetch the price of the cryptocurrency
    axios
      .get(`https://crnzwhack.herokuapp.com/dateUpdate`)
      .then(axiosResponse => {
        // Retrieve the prices from the response object, in USD and EUR
        let dateUpdate = axiosResponse.data

        // Check if the API returned an error
        if (dateUpdate.Response && date.Response === 'Error') {
          // The API returned an error
          // So build the response object to trigger the failure intent
          interaction.response.followupEvent = {
            name: 'dateUpdate-not-found',
            data: {}
          }
        } else {
          // The prices have been successfully retrieved
          // So build the response object to trigger the success intent
          interaction.response.followupEvent = {
            name: 'dateUpdate-found',
            data: {
             dateUpdate
            }
          }
        }

        // Resolve the Promise to say that the handler performed the action without any error
        resolve()
      })
      .catch(e => {
        // An error occured during the request to the API
        // Reject the Promise to say that an error occured while the handler was performing the action
        reject(e)
      })
  })
}

module.exports = handler