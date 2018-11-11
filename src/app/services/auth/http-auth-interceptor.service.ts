import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpAuthInterceptorService {

  constructor(private router: Router, private injector: Injector) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // access AuthenticationService this way instead of using the constructor to prevent
    const authenticationService = this.injector.get(AuthenticationService);
    const token = authenticationService.getCurrentToken();

    // Only attach the bearer token if one exists and we are talking made to our api server
    if (token && !req.url.endsWith('/token')) {
      const authReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token.ExternalAccessToken}`)
      });

      return next.handle(authReq).pipe(
        catchError(err => {
          authenticationService.logout();
          return Observable.throw(err);
        })
      );

    } else {
      return next.handle(req);
    }
  }
}
