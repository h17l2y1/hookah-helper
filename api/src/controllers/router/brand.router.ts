import {Router} from "express";
import { create, remove, getAll, getById, update } from "../brand.controller";

const brandRouter = Router();

brandRouter.post('/', create);
brandRouter.put('/:id', update);
brandRouter.get('/:id', getById);
brandRouter.get('/', getAll);
brandRouter.delete('/:id', remove);

export default brandRouter;
