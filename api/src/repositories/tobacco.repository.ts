import moment from "moment";
import {CreateTobaccoDto} from "../models/tobacco/create-tobacco.dto";
import {UpdateTobaccoDto} from "../models/tobacco/update-tobacco.dto";
import tobaccoSchema from "../schemas/tobacco.schema";

const create = async (body: CreateTobaccoDto) => {
    body.creationDate = moment().format("MM/DD/YYYY, HH:mm:ss");
    await tobaccoSchema.create(body);
}

const update = async (id: string, body: UpdateTobaccoDto) => {
    await tobaccoSchema.findByIdAndUpdate(id, body);
}

const getById = async (id: string) => {
    return await tobaccoSchema.findById(id);
}

const getByBrandId = async (id: string) => {
    return await tobaccoSchema.find({ brandId: id });
}

const getAll = async () => {
    return await tobaccoSchema.find();
}

const remove = async (id: string) => {
    await tobaccoSchema.findByIdAndDelete(id);
}

export default { create, update, getById, getByBrandId, getAll, remove };
