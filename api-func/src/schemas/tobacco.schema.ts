import {model, Schema} from "mongoose";
import {Tobacco} from "../entities/tobacco";

const tobaccoSchema = new Schema<Tobacco>({
    brandId: {type: String, required: true},
    lineId: {type: String, required: true},
    creationDate: {type: String, required: true},
    name: {type: String, required: true},
    sweetness: {type: Number},
    acidity: {type: Number},
    spice: {type: Number},
    freshness: {type: Number},
    taste: {type: String},
    fortress: {type: Number},
    smokiness: {type: Number},
    description: {type: String}
});

export default model<Tobacco>('Tobacco', tobaccoSchema);
