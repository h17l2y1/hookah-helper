import {NextFunction, Request, Response} from "express";
import {
    createBrandService,
    deleteBrandService, getAllBrandsService,
    getBrandByIdService,
    updateBrandService
} from "../services/brand.service";
import {getByBrandIdTobaccoService} from "../services/tobacco.service";

export const createBrand = (req: Request, res: Response, next: NextFunction) => {
    createBrandService(req.body)
        .then((data) => res.status(201).send(data))
        .catch((err: Error) => next(err));
}

export const updateBrand = (req: Request, res: Response, next: NextFunction) => {
    updateBrandService(req.params.id, req.body)
        .then(() => res.status(200).send())
        .catch((err: Error) => next(err));
}

export const getByIdBrand = (req: Request, res: Response, next: NextFunction) => {
    getBrandByIdService(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch((err: Error) => next(err));
}

export const getByBrandIdWithTobacco = (req: Request, res: Response, next: NextFunction) => {
    getByBrandIdTobaccoService(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch((err: Error) => next(err));
}

export const getAllBrands = (req: Request, res: Response, next: NextFunction) => {
    getAllBrandsService()
        .then((data) => res.status(200).send(data))
        .catch((err: Error) => next(err));
}

export const deleteBrand = (req: Request, res: Response, next: NextFunction) => {
    deleteBrandService(req.params.id)
        .then(() => res.status(200).send())
        .catch((err: Error) => next(err));
}


