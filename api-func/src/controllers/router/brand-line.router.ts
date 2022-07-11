import {Router} from "express";
import {
    createBrandLine,
    deleteBrandLine,
    getAllBrandLines,
    getAllBrandLinesByBrandId,
    getByIdBrandLine, updateBrandLine
} from "../brand-line.controller";

const brandLineRouter = Router();

brandLineRouter.post('/', createBrandLine);
brandLineRouter.put('/:id', updateBrandLine);
brandLineRouter.get('/:id', getByIdBrandLine);
brandLineRouter.get('/:id/tobacco', getAllBrandLinesByBrandId);
brandLineRouter.get('/', getAllBrandLines);
brandLineRouter.delete('/:id', deleteBrandLine);

export default brandLineRouter;
