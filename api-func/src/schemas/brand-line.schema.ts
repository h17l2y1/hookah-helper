import {Schema, model} from "mongoose";
import {BrandLine} from "../entities/brand-line";

const brandLineSchema = new Schema<BrandLine>({
    brandId: {type: String, required: true},
    name: {type: String, required: true}
});

export default model<BrandLine>('BrandLines', brandLineSchema);
