import {NextFunction, Request, Response} from "express";
import service from "../services/tobacco.service";

export const create = (req: Request, res: Response, next: NextFunction) => {
    service.create(req.body)
        .then((data) => res.status(201).send(data))
        .catch((err: Error) => next(err));
}

export const update = (req: Request, res: Response, next: NextFunction) => {
    service.update(req.params.id, req.body)
        .then(() => res.status(200).send())
        .catch((err: Error) => next(err));
}

export const getById = (req: Request, res: Response, next: NextFunction) => {
    service.getById(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch((err: Error) => next(err));
}

export const getByBrandId = (req: Request, res: Response, next: NextFunction) => {
    service.getByBrandId(req.params.id)
        .then((data) => res.status(200).send(data))
        .catch((err: Error) => next(err));
}

export const getAll = (req: Request, res: Response, next: NextFunction) => {
    service.getAll()
        .then((data) => res.status(200).send(data))
        .catch((err: Error) => next(err));
}

export const remove = (req: Request, res: Response, next: NextFunction) => {
    service.remove(req.params.id)
        .then(() => res.status(200).send())
        .catch((err: Error) => next(err));
}
