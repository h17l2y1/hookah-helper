import {Router} from "express";
import {create, remove, getAll, getById, update, getByBrandIdWithTobacco} from "../tobacco.controller";

const tobaccoRouter = Router();

tobaccoRouter.post('/', create);
tobaccoRouter.put('/:id', update);
tobaccoRouter.get('/:id', getById);
tobaccoRouter.get('/:id', getByBrandIdWithTobacco);
tobaccoRouter.get('/', getAll);
tobaccoRouter.delete('/:id', remove);

export default tobaccoRouter;
