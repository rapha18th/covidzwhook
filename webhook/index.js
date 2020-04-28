'use strict'

const webhook = (req, res) => {
  let body = req.body

  // Retrieving parameters from the request made by the agent
  let action = body.result.action
  let parameters = body.result.parameters

  // Performing the action
  if (action === 'fetchDateUpdate') {
    // Fetch the price of the cryptocurrency
    let price = ''
    let response = ''
  }

  else if (action === 'fetchSexUpdate') {
    
  }

  else if (action === 'fetchTransmissionUpdate') {
    
  }
  else if (action === 'fetchCaseProvince') {
    
   }
   else if (action === 'fetchUpdateSummary') {
    
   }
   else if (action === 'fetchApiCase') {
    
   }

   else if (action === 'fetchApiDay') {
    
     } 

   else {
    // Stuff to do if a triggered action has no handler
    console.error(`unhandled action ${action}`)
  }

  // Sending back the results to the agent
  res.json(response)
}

module.exports = webhook