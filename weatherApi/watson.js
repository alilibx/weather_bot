require('dotenv').config();
const AssistantV2 = require('ibm-watson/assistant/v2');
const { IamAuthenticator } = require('ibm-watson/auth');

const assistant = new AssistantV2({
  authenticator: new IamAuthenticator({ apikey: 'kS0cwK4wdSnEBY3LKkPDk5orOooM3a4lAi9OXtQ3oSdF' }),
  serviceUrl: 'https://api.eu-gb.assistant.watson.cloud.ibm.com/instances/ea216b74-9ca0-4a03-b16c-b7cc388689f0',
  version: '2018-09-19'
});
var _sessionId = "";
assistant.createSession({
    assistantId: '4d874228-10f3-4adc-ace6-4f42087fb0bf'
  })
    .then(res => {
     let result = JSON.stringify(res.result);
     _sessionId = JSON.parse(result);
     console.log(_sessionId.session_id);
    })
    .catch(err => {
      console.log(err);
    });
console.log("SessionId = "+_sessionId);
// assistant.message(
//   {
//     input: { text: "What's the weather?" },
//     assistantId: '4d874228-10f3-4adc-ace6-4f42087fb0bf',
//     sessionId: _sessionId,
//   })
//   .then(response => {
//     console.log(JSON.stringify(response.result, null, 2));
//   })
//   .catch(err => {
//     console.log(err);
//   });