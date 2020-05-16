"use strict";
exports.__esModule = true;
var express_1 = require("express");
var user_routes_1 = require("./user.routes");
var apiRouter = express_1["default"].Router();
exports.routes = function () {
    apiRouter.use('/users', user_routes_1.userRoutes());
    return apiRouter;
};
