import UserModel from "./user.model";
import { dbConfig } from "../config/db.config";
import mongoose from 'mongoose';

export const models = () => {
    const allModels = {} as any;
    mongoose.Promise = global.Promise;

    allModels.mongoose = mongoose;
    allModels.url = dbConfig.url;

    allModels.users = new UserModel();

    return allModels;
}
