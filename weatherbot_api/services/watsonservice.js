const AssistantV2 = require('ibm-watson/assistant/v2');
const {IamAuthenticator} = require('ibm-watson/auth');
const cloudantdb = require('../services/cloudant');
const uuidv1 = require('uuid/v1');

const assistant = new AssistantV2({
    authenticator: new IamAuthenticator({apikey: process.env.ASSISTANT_IAM_APIKEY}),
    serviceUrl: process.env.ASSISTANT_SERVICE_URL,
    version: '2018-09-19'
});

  // Endpoint to be call from the client side
exports.getMessage = async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//Payload 
payload = {
  assistantId: process.env.ASSISTANT_ID,
  sessionId: req.body.session_id,
  input:{
    message_type:"text",
    text: req.body.input
  }
}
console.log(req.body);
//If Success
try{
  const message = await assistant.message(payload);
  cloudantdb.createLogWebhok(req.body,message["result"]);
  res.json(message["result"]);
  //If Failed
}catch(err){
  res.send("There was an error processing your request");
  console.log(err);
}

}

exports.createSession = body => 
new Promise((resolve,reject) => {
    assistant.createSession(
      {
        assistantId: process.env.ASSISTANT_ID || '{assistant_id}',
      }).then(response => {
                  console.log(JSON.stringify(response.result, null, 2));
                  cloudantdb.createLogWebhok("No Payload",response);
                  resolve(response);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
            });