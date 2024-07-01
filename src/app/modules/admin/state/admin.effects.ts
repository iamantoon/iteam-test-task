import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AdminActions from './admin.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AdminService } from '../resources/services/admin.service';


@Injectable()
export class AdminEffects {
  constructor(private actions$: Actions, private adminService: AdminService) {}

  loadReportAssessments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AdminActions.loadUsers),
      mergeMap(() =>
        this.adminService.loadUsers(),
      ),
      map((data) => AdminActions.loadUsersSuccess({ data })),
      catchError((error: HttpErrorResponse) =>
        of(
            AdminActions.loadUsersFailure({
            error: error.message,
          }),
        ),
      ),
    ),
  );
}