import brandSchema from "../schemas/brand.schema";
import {CreateBrandDto} from "../models/brands/create-brand.dto";
import {UpdateBrandDto} from "../models/brands/update-brand.dto";
import moment from "moment";

const create = async (body: CreateBrandDto) => {
    body.creationDate = moment().format("MM/DD/YYYY, HH:mm:ss");
    return await brandSchema.create(body);
}

const update = async (id: string, body: UpdateBrandDto) => {
    await brandSchema.findByIdAndUpdate(id, body);
}

const getById = async (id: string) => {
    return await brandSchema.findById(id);
}

const getAll = async () => {
    return await brandSchema.find();
}

const remove = async (id: string) => {
    await brandSchema.findByIdAndDelete(id);
}

export default { create, update, getById, getAll, remove };

