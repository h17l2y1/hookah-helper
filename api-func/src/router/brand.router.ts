import {Router} from "express";
import {createBrand, deleteBrand, getAllBrands, getByIdBrand, updateBrand} from "../controllers/brand.controller";

const brandRouter = Router();

brandRouter.post('/', createBrand);
brandRouter.put('/:id', updateBrand);
brandRouter.get('/:id', getByIdBrand);
brandRouter.get('/', getAllBrands);
brandRouter.delete('/:id', deleteBrand);

export default brandRouter;
