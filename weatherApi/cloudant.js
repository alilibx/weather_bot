const Cloudant = require('@cloudant/cloudant');
const vcap = require('./vcab-local.json');

let cloudant_db_name = 'weatherbotdb';

function dbCloudantConnect() {
    return new Promise((resolve, reject) => {
        Cloudant({  // eslint-disable-line
            url: vcap.services.cloudantNoSQLDB.credentials.url
        }, ((err, cloudant) => {
            if (err) {
                console.log('Connect failure: ' + err.message + ' for Cloudant DB: ' +
                cloudant_db_name);
                reject(err);
            } else {
                let db = cloudant.use(cloudant_db_name);
                console.log('Connect success! Connected to DB: ' + cloudant_db_name);
                resolve(db);
            }
        }));
    });
}

function create(description) {
    dbCloudantConnect();
    return new Promise((resolve, reject) => {
        let listId = uuidv4();
        let whenCreated = Date.now();
        let list = {
            _id: listId,
            id: listId,
            type: 'shoppingList',
            items: [],
            description: description,
            whenCreated: whenCreated,
            whenUpdated: null
        };
        db.insert(list, (err, result) => {
            if (err) {
                logger.error('Error occurred: ' + err.message, 'create()');
                reject(err);
            } else {
                resolve({ data: { createdId: result.id, createdRevId: result.rev }, statusCode: 201 });
            }
        });
    });
}


