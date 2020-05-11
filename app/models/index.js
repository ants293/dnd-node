import userModel from "./user.model";

const dbConfig = require("../config/db.config.js");
import mongoose from 'mongoose';

export const models = () => {
    mongoose.Promise = global.Promise;
    const allModels = {};

    allModels.mongoose = mongoose;
    allModels.url = dbConfig.url;

    allModels.users = userModel();

    return allModels;
}
