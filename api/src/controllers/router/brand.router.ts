import {Router} from "express";
import {create, remove, getAll, getById, update, createWithDependencies} from "../brand.controller";

const brandRouter = Router();

brandRouter.post('/', create);
brandRouter.post('/createWithDependencies', createWithDependencies);
brandRouter.put('/:id', update);
brandRouter.get('/:id', getById);
brandRouter.get('/', getAll);
brandRouter.delete('/:id', remove);

export default brandRouter;
