import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const userString = localStorage.getItem('authUser');

    if (userString){
      const user = JSON.parse(userString);
      request = request.clone({
        setHeaders: {
          'X-Token': user.token
        }
      })
    }
    
    return next.handle(request);
  }
}