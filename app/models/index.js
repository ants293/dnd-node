"use strict";
exports.__esModule = true;
var user_model_1 = require("./user.model");
var db_config_1 = require("../config/db.config");
var mongoose_1 = require("mongoose");
exports.models = function () {
    var allModels = {};
    mongoose_1["default"].Promise = global.Promise;
    allModels.mongoose = mongoose_1["default"];
    allModels.url = db_config_1.dbConfig.url;
    allModels.users = new user_model_1["default"]();
    return allModels;
};
