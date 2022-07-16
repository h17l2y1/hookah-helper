import {BrandLine} from "../brand-line/brand-line";

export interface Brand {
    _id: string;
    name: string;
    lines: Array<BrandLine>;
    madeIn: string;
    description: string;
}
