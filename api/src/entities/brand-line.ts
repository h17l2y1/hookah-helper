import {BaseEntity} from "./base";

export interface BrandLine extends BaseEntity {
    brandId: string;
    name: string;
    description: string;
}
