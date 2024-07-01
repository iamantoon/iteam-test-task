import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as DashboardActions from './dashboard.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DashboardService } from '../../resources/services/dashboard.service';

@Injectable()
export class DashboardEffects {
  constructor(private actions$: Actions, private dashboardService: DashboardService) {}

  loadReportAssessments$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DashboardActions.loadReportAssessments),
      mergeMap(() =>
        this.dashboardService.loadAssessments(),
      ),
      map((data) => DashboardActions.loadReportAssessmentsSuccess({ data })),
      catchError((error: HttpErrorResponse) =>
        of(
          DashboardActions.loadReportAssessmentsFailure({
            error: error.message,
          }),
        ),
      ),
    ),
  );
}