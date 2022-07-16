import {CreateBrandLineDto} from "../models/brand-line/create-brand-line.dto";
import repository from "../repositories/brand-line.repository";
import {UpdateBrandLineDto} from "../models/brand-line/update-brand-line.dto";

const create = async (body: CreateBrandLineDto) => {
    return await repository.create(body);
}

const update = async (id: string, body: UpdateBrandLineDto) => {
    return await repository.update(id, body);
}

const getById = async (id: string) => {
    return await repository.getById(id);
}

const getByBrandId = async (id: string) => {
    return await repository.getAllByBrandId(id);
}

const getAll = async () => {
    return await repository.getAll();
}

const remove = async (id: string) => {
    return await repository.remove(id);
}

export default { create, update, getById, getByBrandId, getAll, remove };
