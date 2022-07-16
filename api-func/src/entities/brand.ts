import {BaseEntity} from "./base";

export interface Brand extends BaseEntity {
    name: string;
    madeIn: string;
    description: string;
}
