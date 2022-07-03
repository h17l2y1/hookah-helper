import {Module} from '@nestjs/common';
import {DatabaseModule} from './modules/database.module';
import {BrandModule} from "./modules/brand.module";
import {TobaccoModule} from "./modules/tobacco.module";
import {CoreModule} from "./modules/core.module";

@Module({
    imports: [
        CoreModule,
        DatabaseModule,
        BrandModule,
        TobaccoModule
    ],
    controllers: [],
    providers: [],
})
export class AppModule {
}
