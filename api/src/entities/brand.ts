import {BaseEntity} from "./base";
import {BrandLine} from "./brand-line";

export interface Brand extends BaseEntity {
    name: string;
    lines: Array<BrandLine>;
    madeIn: string;
    description: string;
}
