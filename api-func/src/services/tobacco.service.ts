import {UpdateTobaccoDto} from "../models/tobacco/update-tobacco.dto";
import {CreateTobaccoDto} from "../models/tobacco/create-tobacco.dto";
import repository from "../repositories/tobacco.repository";

const create = async (body: CreateTobaccoDto) => {
    return await repository.create(body);
}

const update = async (id: string, body: UpdateTobaccoDto) => {
    return await repository.update(id, body);
}

const getById = async (id: string) => {
    return await repository.getById(id);
}

const getByBrandId = async (id: string) => {
    return await repository.getByBrandId(id);
}

const getAll = async () => {
    return await repository.getAll();
}

const remove = async (id: string) => {
    return await repository.remove(id);
}

export default { create, update, getById, getByBrandId, getAll, remove };

