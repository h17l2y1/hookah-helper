import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Document} from 'mongoose';
import {BaseSchema} from "./base-schema.schema";

export type ImageDocument = Image & Document;

@Schema()
export class Image extends BaseSchema {
    @Prop()
    name: string;
    desc: string;
    img: {
            data: Buffer,
            contentType: string
    };
}

export const ImageSchema = SchemaFactory.createForClass(Image);
