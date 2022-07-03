import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import * as mongoose from 'mongoose';
import {BaseSchema} from "./base-schema.schema";

export type TobaccoDocument = Tobacco & Document;

@Schema()
export class Tobacco extends BaseSchema {
    @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'Brand'})
    brandId: string;
    @Prop({required: true})
    name: string;
    @Prop()
    sweetness: number;
    @Prop()
    acidity: number;
    @Prop()
    spice: number;
    @Prop()
    freshness: number;
    @Prop()
    rating: number;
    @Prop()
    taste: string;
    @Prop()
    madeIn: string;
    @Prop()
    fortress: number;
    @Prop()
    recommendedCup: string;
    @Prop()
    smokiness: number;
}

export const TobaccoSchema = SchemaFactory.createForClass(Tobacco);
