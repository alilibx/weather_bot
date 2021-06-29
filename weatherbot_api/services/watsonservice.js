const AssistantV2 = require('ibm-watson/assistant/v2');
const {IamAuthenticator} = require('ibm-watson/auth');
const uuidv1 = require('uuid/v1');

const assistant = new AssistantV2({
    authenticator: new IamAuthenticator({apikey: process.env.ASSISTANT_IAM_APIKEY}),
    serviceUrl: process.env.ASSISTANT_SERVICE_URL,
    version: '2018-09-19'
});

  // Endpoint to be call from the client side
exports.getMessage = body => 
 new Promise((resolve, reject) => {
    let assistantId = process.env.ASSISTANT_ID || '<assistant-id>';
    if (!assistantId || assistantId === '<assistant-id>') {
      return res.json({
        output: {
          text:
            'The app has not been configured with a <b>ASSISTANT_ID</b> environment variable.',
        },
      });
    }
  
    var textIn = '';
  
    if (body.input) {
      textIn = body.input.text;
    }
  
    var payload = {
      assistantId: assistantId,
      sessionId: body.session_id,
      input: {
        message_type: 'text',
        text: textIn,
      },
    };
  
    // Send the input to the assistant service
    assistant.message(payload)
    .then(response => {
                  console.log(JSON.stringify(response.result, null, 2));
                  resolve(response);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });

});

exports.createSession = body => 
new Promise((resolve,reject) => {
    assistant.createSession(
      {
        assistantId: process.env.ASSISTANT_ID || '{assistant_id}',
      }).then(response => {
                  console.log(JSON.stringify(response.result, null, 2));
                  resolve(response);
                })
                .catch(err => {
                    console.log(err);
                    reject(err);
                });
            });