import {Schema, model} from "mongoose";
import {BrandLine} from "../entities/brand-line";

const brandLineSchema = new Schema({
    brandId: {
        type: Schema.Types.ObjectId,
        ref: "Brands"
    },
    creationDate: {type: String, required: true},
    name: {type: String, required: true},
    description: {type: String}
});

export default model<BrandLine>('BrandLines', brandLineSchema);
