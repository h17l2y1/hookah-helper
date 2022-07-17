import {CreateBrandLineDto} from "../models/brand-line/create-brand-line.dto";
import brandLineRepository from "../repositories/brand-line.repository";
import {UpdateBrandLineDto} from "../models/brand-line/update-brand-line.dto";

const create = async (body: CreateBrandLineDto) => {
    await brandLineRepository.create(body);
}

const update = async (id: string, body: UpdateBrandLineDto) => {
    await brandLineRepository.update(id, body);
}

const getById = async (id: string) => {
    return await brandLineRepository.getById(id);
}

const getByBrandId = async (id: string) => {
    return await brandLineRepository.getByBrandId(id);
}

const getAll = async () => {
    return await brandLineRepository.getAll();
}

const remove = async (id: string) => {
    await brandLineRepository.remove(id);
}

export default { create, update, getById, getByBrandId, getAll, remove };
