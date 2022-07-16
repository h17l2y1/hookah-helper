import {BrandLine} from "../brand-line/brand-line";

export interface CreateBrand {
    name: string;
    lines: Array<BrandLine>;
    madeIn: string;
    description: string;
}
