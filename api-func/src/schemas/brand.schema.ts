import {Schema, model} from "mongoose";
import {Brand} from "../entities/brand";

const brandSchema = new Schema<Brand>({
    name: {type: String, required: true}
});

export default model<Brand>('Brands', brandSchema);
