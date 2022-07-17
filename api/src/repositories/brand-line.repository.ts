import {CreateBrandLineDto} from "../models/brand-line/create-brand-line.dto";
import {UpdateBrandLineDto} from "../models/brand-line/update-brand-line.dto";
import brandLineSchema from "../schemas/brand-line.schema";
import moment from "moment";

const create = async (body: CreateBrandLineDto) => {
    body.creationDate = moment().format("MM/DD/YYYY, HH:mm:ss");
    await brandLineSchema.create(body);
}

const createMany = async (body: Array<CreateBrandLineDto>) => {
    body.forEach(x => x.creationDate = moment().format("MM/DD/YYYY, HH:mm:ss"));
    await brandLineSchema.insertMany(body);
}

const update = async (id: string, body: UpdateBrandLineDto) => {
    await brandLineSchema.findByIdAndUpdate(id, body);
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
    await brandLineSchema.findByIdAndDelete(id);
}

export default { create, createMany, update, getById, getByBrandId, getAll, remove };
