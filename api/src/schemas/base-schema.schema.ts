import {Prop, Schema} from "@nestjs/mongoose";

@Schema()
export class BaseSchema {
    @Prop()
    id: string;
    @Prop()
    creationDate: Date;

    constructor() {
        this.creationDate = new Date();
    }
}
