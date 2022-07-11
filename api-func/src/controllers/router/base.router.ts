import {Router} from "express";
import brandRouter from "./brand.router";
import tobaccoRouter from "./tobacco.router";
import brandLineRouter from "./brand-line.router";

export const baseRouter = Router();

baseRouter.use('/brand', brandRouter);
baseRouter.use('/brandLine', brandLineRouter);
baseRouter.use('/tobacco', tobaccoRouter);
