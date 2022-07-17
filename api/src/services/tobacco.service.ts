import {UpdateTobaccoDto} from "../models/tobacco/update-tobacco.dto";
import {CreateTobaccoDto} from "../models/tobacco/create-tobacco.dto";
import tobaccoRepository from "../repositories/tobacco.repository";

const create = async (body: CreateTobaccoDto) => {
    await tobaccoRepository.create(body);
}

const update = async (id: string, body: UpdateTobaccoDto) => {
    await tobaccoRepository.update(id, body);
}

const getById = async (id: string) => {
    return await tobaccoRepository.getById(id);
}

const getByBrandId = async (id: string) => {
    return await tobaccoRepository.getByBrandId(id);
}

const getAll = async () => {
    return await tobaccoRepository.getAll();
}

const remove = async (id: string) => {
    await tobaccoRepository.remove(id);
}

export default { create, update, getById, getByBrandId, getAll, remove };

