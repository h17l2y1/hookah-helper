import {Module} from "@nestjs/common";
import {TobaccoController} from "../controllers/tobacco.controller";
import {TobaccoService} from "../services/tobacco.service";
import {MongooseModule} from "@nestjs/mongoose";
import {Tobacco, TobaccoSchema} from "../schemas/tobacco.schema";

@Module({
    imports: [MongooseModule.forFeature([{name: Tobacco.name, schema: TobaccoSchema}])],
    controllers: [TobaccoController],
    providers: [TobaccoService],
    exports: [TobaccoService]
})
export class TobaccoModule {
}
