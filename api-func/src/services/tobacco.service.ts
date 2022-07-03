import {UpdateTobaccoDto} from "../models/tobacco/update-tobacco.dto";
import {CreateTobaccoDto} from "../models/tobacco/create-tobacco.dto";
import {
    createTobaccoRepository, deleteTobaccoRepository, getAllTobaccoRepository, getByBrandIdTobaccoRepository,
    getByIdTobaccoRepository,
    updateTobaccoRepository
} from "../repositories/tobacco.repository";

export const createTobaccoService = async (body: CreateTobaccoDto) => {
    return await createTobaccoRepository(body);
}

export const updateTobaccoService = async (id: string, body: UpdateTobaccoDto) => {
    return await updateTobaccoRepository(id, body);
}

export const getByIdTobaccoService = async (id: string) => {
    return await getByIdTobaccoRepository(id);
}

export const getByBrandIdTobaccoService = async (id: string) => {
    return await getByBrandIdTobaccoRepository(id);
}

export const getAllTobaccoService = async () => {
    return await getAllTobaccoRepository();
}

export const deleteTobaccoService = async (id: string) => {
    return await deleteTobaccoRepository(id);
}
