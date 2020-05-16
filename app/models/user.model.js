"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    username: {
        type: String,
        unique: true,
        index: true
    },
    email: {
        type: String,
        unique: true,
        index: true
    },
    password: String,
    role: {
        type: String,
        "enum": ['ADMIN', 'USER']
    }
}, { timestamps: true });
var userModel = mongoose_1["default"].model('user', userSchema);
exports["default"] = userModel;
