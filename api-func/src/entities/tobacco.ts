import {BaseEntity} from "./base";

export interface Tobacco extends BaseEntity {
    brandId: string;
    name: string;
    lineId: string;
    sweetness: number;
    acidity: number;
    spice: number;
    freshness: number;
    rating: number;
    taste: string;
    madeIn: string;
    fortress: number;
    smokiness: number;
}
