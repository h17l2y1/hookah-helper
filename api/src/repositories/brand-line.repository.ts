import {CreateBrandLineDto} from "../models/brand-line/create-brand-line.dto";
import {UpdateBrandLineDto} from "../models/brand-line/update-brand-line.dto";
import brandLineSchema from "../schemas/brand-line.schema";

const create = async (body: CreateBrandLineDto) => {
    return await brandLineSchema.create(body);
}

const update = async (id: string, body: UpdateBrandLineDto) => {
    return await brandLineSchema.findByIdAndUpdate(id, body);
}

const getById = async (id: string) => {
    return await brandLineSchema.findById(id);
}

const getByBrandId = async (id: string) => {
    return await brandLineSchema.find({ brandId: id });
}

const getAll = async () => {
    return await brandLineSchema.find();
}

const remove = async (id: string) => {
    return await brandLineSchema.findByIdAndDelete(id);
}

export default { create, update, getById, getByBrandId, getAll, remove };
