import {Schema, model} from "mongoose";
import {Brand} from "../entities/brand";

const brandSchema = new Schema<Brand>({
    name: {type: String, required: true},
    madeIn: {type: String, required: true},
    creationDate: {type: String, required: true},
    description: {type: String}
});

export default model<Brand>('Brands', brandSchema);
