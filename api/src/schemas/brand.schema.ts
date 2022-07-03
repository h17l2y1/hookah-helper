import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {BaseSchema} from "./base-schema.schema";

export type BrandDocument = Brand & Document;

@Schema()
export class Brand extends BaseSchema {
    @Prop()
    name: string;
}

export const BrandSchema = SchemaFactory.createForClass(Brand);
