import {Router} from "express";
import brandRouter from "./brand.router";
import tobaccoRouter from "./tobacco.router";

export const router = Router();

router.use('/brand', brandRouter);
router.use('/tobacco', tobaccoRouter);
