import {NextFunction, Request, Response} from "express";
import {
    createBrandLineService, deleteBrandLineService, getAllBrandLinesByBrandIdService,
    getAllBrandLinesService, getBrandLineByIdService,
    updateBrandLineService
} from "../services/brand-line.service";

export const createBrandLine = (req: Request, res: Response, next: NextFunction) => {
    createBrandLineService(req.body)
        .then((data) => res.status(201).send(data))
        .catch((err: Error) => next(err));
}

export const updateBrandLine = (req: Request, res: Response, next: NextFunction) => {
    updateBrandLineService(req.params.id, req.body)
        .then(() => res.status(200).send())
        .catch((err: Error) => next(err));
}

export const getByIdBrandLine = (req: Request, res: Response, next: NextFunction) => {
    getBrandLineByIdService(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch((err: Error) => next(err));
}

export const getAllBrandLinesByBrandId = (req: Request, res: Response, next: NextFunction) => {
    getAllBrandLinesByBrandIdService(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch((err: Error) => next(err));
}

export const getAllBrandLines = (req: Request, res: Response, next: NextFunction) => {
    getAllBrandLinesService()
        .then((data) => res.status(200).send(data))
        .catch((err: Error) => next(err));
}

export const deleteBrandLine = (req: Request, res: Response, next: NextFunction) => {
    deleteBrandLineService(req.params.id)
        .then(() => res.status(200).send())
        .catch((err: Error) => next(err));
}


