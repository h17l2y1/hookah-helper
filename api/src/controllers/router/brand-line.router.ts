import {Router} from "express";
import {create, remove, getAll, getById, update, getByBrandId} from "../brand-line.controller";

const brandLineRouter = Router();

brandLineRouter.post('/', create);
brandLineRouter.put('/:id', update);
brandLineRouter.get('/:id', getById);
brandLineRouter.get('/:id', getByBrandId);
brandLineRouter.get('/', getAll);
brandLineRouter.delete('/:id', remove);

export default brandLineRouter;
