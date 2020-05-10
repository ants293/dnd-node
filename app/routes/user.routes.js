import { UserService } from "../services/UserService";
import express from 'express';
const userService = new UserService();
const apiRouter = express.Router();

export const userRoutes = () => {

    apiRouter.use("/", async (req, res) => {

        const { users } = await userService.findAll();

        res.json({ users });

        //res.send("yes");
    });

    apiRouter.post("/new", async (req, res) => {
        const userData = req.body;
        const { user } = await userService.create(userData);
        return res.json({ user });
    });


    return apiRouter;

}