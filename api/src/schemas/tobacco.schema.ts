import {model, Schema} from "mongoose";
import {Tobacco} from "../entities/tobacco";

const tobaccoSchema = new Schema({
    brandId: {
        type: Schema.Types.ObjectId,
        ref: "Brands"
    },    lineId: {type: String, required: true},
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
