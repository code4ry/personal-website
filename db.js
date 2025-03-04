const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb+srv://rylee1689:@clusterryan.friyn.mongodb.net/')
            .then((client) => {
                dbConnection = client.db('db');
                return cb();
            })
            .catch((err) => {
                console.log(err);
                return cb(err);
            });
    },
    getDb: () => dbConnection
};
