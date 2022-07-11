import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Injectable, Injector} from "@angular/core";
import {catchError, Observable, throwError} from "rxjs";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private router: Router,
                private injector: Injector,
                private notificationService: ToastrService) {
        this.notificationService = this.injector.get(ToastrService)
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError((err: HttpErrorResponse) => {
            switch (err.status) {
                // TODO: add correct handling for every case
                case 400: {
                    // Bad Input
                }
                case 401: {
                    // unauthorized
                }
                case 403: {
                    // access denied
                }
                case 404: {
                    // not found
                }
                case 500: {
                    // server error
                }
                default: {
                    this.notificationService.error(`${err.status} - ${err.statusText}`)
                }
                    return throwError(err);
            }
        }));
    }
}
