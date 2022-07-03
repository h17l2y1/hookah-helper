import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongoExceptionFilter } from './middleware/mongoErrMiddleware';
import {LoggingInterceptor} from "./middleware/logging.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
  app.setGlobalPrefix('api');

  // app.useGlobalFilters(new MongoExceptionFilter());

  // app.useGlobalInterceptors(new LoggingInterceptor());


  console.log(`Application is running on: http://localhost:3000`);
}
bootstrap();
