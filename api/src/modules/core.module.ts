import {APP_INTERCEPTOR} from "@nestjs/core";
import {LoggingInterceptor} from "../middleware/logging.interceptor";
import { Module } from '@nestjs/common';
import {ErrorsInterceptor} from "../middleware/exception.interceptor";

@Module({
    providers: [
        { provide: APP_INTERCEPTOR, useClass: ErrorsInterceptor },
        // { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
    ],
})
export class CoreModule {}
