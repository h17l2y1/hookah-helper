import {Router} from "express";
import brandRouter from "./brand.router";
import tobaccoRouter from "./tobacco.router";

export const baseRouter = Router();

baseRouter.use('/brand', brandRouter);
baseRouter.use('/tobacco', tobaccoRouter);
