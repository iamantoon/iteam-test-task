import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { AuthService } from 'src/app/modules/auth/resources/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import * as AuthActions from './auth.actions';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {

  constructor(private actions$: Actions, private authService: AuthService, private router: Router){}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.login),
      mergeMap((action) =>
        this.authService.login(action.userLogin).pipe(
          map((data) =>
            AuthActions.loginSuccess({ authUser: data })
          ),
          catchError((error: HttpErrorResponse) => {
            return of(AuthActions.loginFailure({ error: error.message }))
          })
        )
      )
    );
  });

  loginSuccess$ = createEffect(() =>
     this.actions$.pipe(
      ofType(AuthActions.loginSuccess),
      map((action) => {
        localStorage.setItem('authUser', JSON.stringify(action.authUser));
        this.router.navigate(['/dashboard']);
      })),
    { dispatch: false }
  );

  logout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.logout),
      tap(() => {
        localStorage.removeItem('authUser');
        this.router.navigate(['/auth/login']);
      })
    );
  }, { dispatch: false });
}