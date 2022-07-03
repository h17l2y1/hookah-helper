import {Router} from "express";
import {
    createBrand,
    deleteBrand,
    getAllBrands,
    getByBrandIdWithTobacco,
    getByIdBrand,
    updateBrand
} from "../brand.controller";

const brandRouter = Router();

brandRouter.post('/', createBrand);
brandRouter.put('/:id', updateBrand);
brandRouter.get('/:id', getByIdBrand);
brandRouter.get('/:id/tobacco', getByBrandIdWithTobacco);
brandRouter.get('/', getAllBrands);
brandRouter.delete('/:id', deleteBrand);

export default brandRouter;
