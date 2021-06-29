const getMessage = require('../services/watsonservice').getMessage;
const createSession = require('../services/watsonservice').createSession;

exports.ask = (req, res, next) => {
  return getMessage(req.body)
    .then(output => {
      res.status(200);
      res.send(output);
    })
    .catch(next);
};

exports.init = (req,res,next) =>{
  return createSession(req.body)
  .then(output=>{
          res.status(200);
          res.send(output);
      })
      .catch(next);
};