import express from 'express';
import { userRoutes } from "./user.routes";
const apiRouter = express.Router();

export const routes = () => {
    apiRouter.use('/users', userRoutes());

    return apiRouter;
}