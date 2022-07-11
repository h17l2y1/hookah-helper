import {CreateBrandLineDto} from "../models/brand-line/create-brand-line.dto";
import {UpdateBrandLineDto} from "../models/brand-line/update-brand-line.dto";
import brandLineSchema from "../schemas/brand-line.schema";

export const createBrandLineRepository = async (body: CreateBrandLineDto) => {
    return await brandLineSchema.create(body);
}

export const updateBrandLineRepository = async (id: string, body: UpdateBrandLineDto) => {
    return await brandLineSchema.findByIdAndUpdate(id, body);
}

export const getBrandLineByIdRepository = async (id: string) => {
    return await brandLineSchema.findById(id);
}

export const getAllBrandLinesByBrandIdRepository = async (id: string) => {
    return await brandLineSchema.find({ brandId: id });
}

export const getAllBrandLinesRepository = async () => {
    return await brandLineSchema.find();
}

export const deleteBrandLineRepository = async (id: string) => {
    return await brandLineSchema.findByIdAndDelete(id);
}
