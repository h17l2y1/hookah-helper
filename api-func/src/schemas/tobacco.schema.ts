import {model, Schema} from "mongoose";
import {Tobacco} from "../entities/tobacco";

const tobaccoSchema = new Schema<Tobacco>({
    brandId: {type: String, required: true},
    name: {type: String, required: true},
    sweetness: {type: Number, required: true},
    acidity: {type: Number, required: true},
    spice: {type: Number, required: true},
    freshness: {type: Number, required: true},
    taste: {type: String, required: true},
    madeIn: {type: String, required: true},
    fortress: {type: Number, required: true},
    smokiness: {type: Number, required: true},
    creationDate: {type: String, required: true}
});

export default model<Tobacco>('Tobacco', tobaccoSchema);
