import brandSchema from "../schemas/brand.schema";
import {CreateBrandDto} from "../models/brands/create-brand.dto";
import {UpdateBrandDto} from "../models/brands/update-brand.dto";

export const create = async (body: CreateBrandDto) => {
    return await brandSchema.create(body);
}

export const update = async (id: string, body: UpdateBrandDto) => {
    return await brandSchema.findByIdAndUpdate(id, body);
}

export const getById = async (id: string) => {
    return await brandSchema.findById(id);
}

export const getAll = async () => {
    return await brandSchema.find();
}

export const remove = async (id: string) => {
    return await brandSchema.findByIdAndDelete(id);
}

export default { create, update, getById, getAll, remove };

