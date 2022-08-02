import {Router} from "express";
import {create, remove, getAll, getById, update, getByBrandId} from "../tobacco.controller";

const tobaccoRouter = Router();

tobaccoRouter.post('/', create);
tobaccoRouter.put('/:id', update);
tobaccoRouter.get('/:id', getById);
tobaccoRouter.get('/brand/:id', getByBrandId);
tobaccoRouter.get('/', getAll);
tobaccoRouter.delete('/:id', remove);

export default tobaccoRouter;
