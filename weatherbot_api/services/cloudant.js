const Cloudant = require('@cloudant/cloudant');
const vcap = require('../vcab-local.json');
const { uuid } = require('uuidv4');

exports.createLogWebhok = async function createLogWebhok(request, response) {

    let cloudant_db_name = 'weatherbotdb';
    const cloudant = Cloudant({  // eslint-disable-line
        url: vcap.services.cloudantNoSQLDB.credentials.url,
        plugins:{
            iamauth:{
                iamApiKey: vcap.services.cloudantNoSQLDB.credentials.apikey
            }
        }
    });
        let alldbs = await cloudant.db.list();
        console.log("all dbs List :"+alldbs);
        const thedb = cloudant.db.use(cloudant_db_name);
        let whenCreated = Date.now();
        var datetime = new Date();
        let id = 0;
        let res ="";
        let loge = {"_id": whenCreated.toString(), "createddate":datetime,"request":request,"response":response };
        res = await thedb.insert(loge);
        console.log(`Added log to DB ${loge}`);
}


