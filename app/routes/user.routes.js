module.exports = app => {
    const users = require("../controllers/user.controller.js");

    const router = require("express").Router();

    router.post("/new", users.create);
    router.get("/", users.findAll);
    router.get("/:id", users.findOne);
    //router.get("/", users.findAll);
    /*router.get("/published", tutorials.findAllPublished);
    router.get("/:id", tutorials.findOne);
    router.put("/:id", tutorials.update);
    router.delete("/:id", tutorials.delete);
    router.delete("/", tutorials.deleteAll);*/



    app.use('/api/users', router);
}