import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { LoaderService } from '@/core/services/loader.service';

@Injectable()
export class LoaderInterceptor implements HttpInterceptor {

    constructor(public loaderService: LoaderService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.loaderService.show();
        return next.handle(req).pipe(
            finalize(() => this.loaderService.hide())
        );
    }

    manejoErorHttp(error: HttpErrorResponse){
      console.log('! SUCEDIO UN ERROR !');
      console.log('Registrado en el log file');
      console.warn(error);
      return throwError('Error Personalizado');
    }

}
