import brandSchema from "../schemas/brand.schema";
import {CreateBrandDto} from "../models/brands/create-brand.dto";
import {UpdateBrandDto} from "../models/brands/update-brand.dto";

export const createBrandRepository = async (body: CreateBrandDto) => {
    return await brandSchema.create(body);
}

export const updateBrandRepository = async (id: string, body: UpdateBrandDto) => {
    return await brandSchema.findByIdAndUpdate(id, body);
}

export const getBrandByIdRepository = async (id: string) => {
    return await brandSchema.findById(id);
}

export const getAllBrandsRepository = async () => {
    return await brandSchema.find();
}

export const deleteBrandRepository = async (id: string) => {
    return await brandSchema.findByIdAndDelete(id);
}
