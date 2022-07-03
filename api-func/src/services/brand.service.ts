import {CreateBrandDto} from "../models/brands/create-brand.dto";
import {UpdateBrandDto} from "../models/brands/update-brand.dto";
import {
    createBrandRepository, deleteBrandRepository,
    getAllBrandsRepository,
    getBrandByIdRepository,
    updateBrandRepository
} from "../repositories/brand.repository";

export const createBrandService = async (body: CreateBrandDto) => {
    return await createBrandRepository(body);
}

export const updateBrandService = async (id: string, body: UpdateBrandDto) => {
    return await updateBrandRepository(id, body);
}

export const getBrandByIdService = async (id: string) => {
    return await getBrandByIdRepository(id);
}

export const getAllBrandsService = async () => {
    return await getAllBrandsRepository();
}

export const deleteBrandService = async (id: string) => {
    return await deleteBrandRepository(id);
}
