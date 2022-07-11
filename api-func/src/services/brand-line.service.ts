import {CreateBrandLineDto} from "../models/brand-line/create-brand-line.dto";
import {
    createBrandLineRepository,
    deleteBrandLineRepository,
    getAllBrandLinesByBrandIdRepository,
    getAllBrandLinesRepository,
    getBrandLineByIdRepository,
    updateBrandLineRepository
} from "../repositories/brand-line.repository";
import {UpdateBrandLineDto} from "../models/brand-line/update-brand-line.dto";

export const createBrandLineService = async (body: CreateBrandLineDto) => {
    return await createBrandLineRepository(body);
}

export const updateBrandLineService = async (id: string, body: UpdateBrandLineDto) => {
    return await updateBrandLineRepository(id, body);
}

export const getBrandLineByIdService = async (id: string) => {
    return await getBrandLineByIdRepository(id);
}

export const getAllBrandLinesByBrandIdService = async (id: string) => {
    return await getAllBrandLinesByBrandIdRepository(id);
}

export const getAllBrandLinesService = async () => {
    return await getAllBrandLinesRepository();
}

export const deleteBrandLineService = async (id: string) => {
    return await deleteBrandLineRepository(id);
}
