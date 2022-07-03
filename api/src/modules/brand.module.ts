import {Module} from "@nestjs/common";
import {BrandController} from "../controllers/brand.controller";
import {BrandService} from "../services/brand.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Brand, BrandSchema} from "../schemas/brand.schema";
import {Image, ImageSchema} from "../schemas/image.schema";

@Module({
    imports: [MongooseModule.forFeature([
        {name: Brand.name, schema: BrandSchema},
        {name: Image.name, schema: ImageSchema},
    ])],
    controllers: [BrandController],
    providers: [BrandService],
    exports: [BrandService],
})
export class BrandModule {
}
