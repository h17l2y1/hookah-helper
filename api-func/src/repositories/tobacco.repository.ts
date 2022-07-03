import moment from "moment";
import {CreateTobaccoDto} from "../models/tobacco/create-tobacco.dto";
import {UpdateTobaccoDto} from "../models/tobacco/update-tobacco.dto";
import tobaccoSchema from "../schemas/tobacco.schema";

export const createTobaccoRepository = async (body: CreateTobaccoDto) => {
    body.creationDate = moment().format("MM/DD/YYYY, hh:mm:ss");
    return await tobaccoSchema.create(body);
}

export const updateTobaccoRepository = async (id: string, body: UpdateTobaccoDto) => {
    return await tobaccoSchema.findByIdAndUpdate(id, body);
}

export const getByIdTobaccoRepository = async (id: string) => {
    return await tobaccoSchema.findById(id);
}

export const getByBrandIdTobaccoRepository = async (id: string) => {
    return await tobaccoSchema.find({ brandId: id });
}

export const getAllTobaccoRepository = async () => {
    return await tobaccoSchema.find();
}

export const deleteTobaccoRepository = async (id: string) => {
    return await tobaccoSchema.findByIdAndDelete(id);
}
