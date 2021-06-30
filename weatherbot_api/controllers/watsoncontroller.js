const getMessage = require('../services/watsonservice').getMessage;
const createSession = require('../services/watsonservice').createSession;

exports.ask = (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return getMessage(req,res)
    .then(output => {
      res.status(200);
      res.send(output);
    })
    .catch(next);
};

exports.init = (req,res,next) =>{
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  return createSession(req.body)
  .then(output=>{
          res.status(200);
          res.send(output);
      })
      .catch(next);
};