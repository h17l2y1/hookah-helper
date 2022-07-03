import {
    Injectable,
    NestInterceptor,
    ExecutionContext,
    CallHandler,
    HttpException, HttpStatus,
} from '@nestjs/common';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {map} from 'rxjs/operators';

@Injectable()
export class ErrorsInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        return next.handle().pipe(
            // catchError(err =>
            //     throwError(() => new HttpException(err.message, HttpStatus.BAD_GATEWAY,))
            // ),

            catchError(err => {
                    if (err instanceof HttpException) {
                        return throwError(() => new HttpException(err.message, HttpStatus.BAD_GATEWAY,))
                    }
                    if (err instanceof Error) {
                        return throwError(() => new HttpException(err.message, HttpStatus.BAD_GATEWAY,))
                    }
                }
            ),
        );

        // return next.handle().pipe(
        //     catchError((err) => {
        //         if (err instanceof HttpException){
        //             return throwError(err.message);
        //         }
        //         return throwError(err.message);
        //     }),
        // );
    }
}
