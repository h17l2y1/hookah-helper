import {NextFunction, Request, Response} from "express";
import {
    createTobaccoService, deleteTobaccoService,
    getAllTobaccoService,
    getByIdTobaccoService,
    updateTobaccoService
} from "../services/tobacco.service";

export const createTobacco = (req: Request, res: Response, next: NextFunction) => {
    createTobaccoService(req.body)
        .then((data) => res.status(201).send(data))
        .catch((err: Error) => next(err));
}

export const updateTobacco = (req: Request, res: Response, next: NextFunction) => {
    updateTobaccoService(req.params.id, req.body)
        .then((data) => res.status(201).send(data))
        .catch((err: Error) => next(err));
}

export const getByIdTobacco = (req: Request, res: Response, next: NextFunction) => {
    getByIdTobaccoService(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch((err: Error) => next(err));
}

export const getAllTobacco = (req: Request, res: Response, next: NextFunction) => {
    getAllTobaccoService()
        .then((data) => res.status(200).send(data))
        .catch((err: Error) => next(err));
}

export const deleteTobacco = (req: Request, res: Response, next: NextFunction) => {
    deleteTobaccoService(req.params.id)
        .then(res.status(200).send)
        .catch((err: Error) => next(err));
}
