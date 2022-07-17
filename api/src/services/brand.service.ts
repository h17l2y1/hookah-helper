import {CreateBrandDto} from "../models/brands/create-brand.dto";
import {UpdateBrandDto} from "../models/brands/update-brand.dto";
import brandRepository from "../repositories/brand.repository";
import brandLineRepository from "../repositories/brand-line.repository";

const create = async (body: CreateBrandDto) => {
    return await brandRepository.create(body);
}

const createWithDependencies = async (body: CreateBrandDto) => {
    const copy = {...body} as CreateBrandDto;
    copy.lines = [];
    const brand = await brandRepository.create(copy);
    body.lines.forEach(x => x.brandId = brand._id);
    await brandLineRepository.createMany(body.lines);
    return brand;
}

const update = async (id: string, body: UpdateBrandDto) => {
    await brandRepository.update(id, body);
}

const getById = async (id: string) => {
    return await brandRepository.getById(id);
}

const getAll = async () => {
    return await brandRepository.getAll();
}

const remove = async (id: string) => {
    await brandRepository.remove(id);
}

export default { create, createWithDependencies, update, getById, getAll, remove };

