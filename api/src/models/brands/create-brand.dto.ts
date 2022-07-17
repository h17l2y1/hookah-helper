import {CreateBrandLineDto} from "../brand-line/create-brand-line.dto";

export interface CreateBrandDto {
    name: string;
    creationDate: string;
    lines: Array<CreateBrandLineDto>;
    madeIn: string;
    description: string;
}
