import {BrandLine} from "../brand-line/brand-line";

export interface Brand {
    _id: string;
    name: string;
    imageBase64: string;
    lines: Array<BrandLine>;
    madeIn: string;
    description: string;
}
