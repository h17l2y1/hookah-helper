import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
} from '@nestjs/common';
import { MongoError } from 'mongodb';

@Catch(MongoError)
export class MongoExceptionFilter implements ExceptionFilter {
  catch(exception: MongoError, host: ArgumentsHost) {
    console.log(`Mongo ERROR: ${exception.message}`);
    switch (exception.code) {
      case 11000:
        // const ctx = host.switchToHttp();
        // const response = ctx.getResponse<Response>();
        // response.statusCode = HttpStatus.FORBIDDEN;
        // response.json({
        //   statusCode: HttpStatus.FORBIDDEN,
        //   timestamp: new Date().toISOString(),
        //   message: 'You are already registered',
        // });
    }
  }
}
