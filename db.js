const { MongoClient } = require('mongodb');

let dbConnection;

module.exports = {
    connectToDb: (cb) => {
        MongoClient.connect('mongodb+srv://rylee1689:hWKjCxsJIPREjeHv@clusterryan.friyn.mongodb.net/')
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
