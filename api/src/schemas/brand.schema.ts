import {Schema, model} from "mongoose";
import {Brand} from "../entities/brand";

const brandSchema = new Schema({
    name: {type: String, required: true},
    madeIn: {type: String, required: true},
    creationDate: {type: String, required: true},
    description: {type: String},
    lines: [{
        type: Schema.Types.ObjectId,
        ref: "BrandLines"
    }],
});

// @ts-ignore
export default model<Brand>('Brands', brandSchema);
