import {CreateBrandDto} from "../models/brands/create-brand.dto";
import {UpdateBrandDto} from "../models/brands/update-brand.dto";
import repository from "../repositories/brand.repository";

const create = async (body: CreateBrandDto) => {
    return await repository.create(body);
}

const update = async (id: string, body: UpdateBrandDto) => {
    return await repository.update(id, body);
}

const getById = async (id: string) => {
    return await repository.getById(id);
}

const getAll = async () => {
    return await repository.getAll();
}

const remove = async (id: string) => {
    return await repository.remove(id);
}

export default { create, update, getById, getAll, remove };

