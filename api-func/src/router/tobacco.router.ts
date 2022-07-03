import {Router} from "express";
import {
    createTobacco,
    deleteTobacco,
    getAllTobacco,
    getByIdTobacco,
    updateTobacco
} from "../controllers/tobacco.controller";

const tobaccoRouter = Router();

tobaccoRouter.post('/', createTobacco);
tobaccoRouter.put('/:id', updateTobacco);
tobaccoRouter.get('/:id', getByIdTobacco);
tobaccoRouter.get('/', getAllTobacco);
tobaccoRouter.delete('/:id', deleteTobacco);

export default tobaccoRouter;
