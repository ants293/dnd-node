const dbConfig = require("../config/db.config.js");
import mongoose from 'mongoose';

export const models = () => {
    mongoose.Promise = global.Promise;

    const db = {};
    db.mongoose = mongoose;
    db.url = dbConfig.url;
    db.tutorials = require("./tutorial.model.js")(mongoose);
    db.users = require("./user.model.js")(mongoose);

    return db;
}
