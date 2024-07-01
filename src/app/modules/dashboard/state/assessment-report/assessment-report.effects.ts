import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as AssessmentReportActions from './assessment-report.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { DashboardService } from '../../resources/services/dashboard.service';

@Injectable()
export class ReportAssessmentEffects {
  constructor(private actions$: Actions, private dashboardService: DashboardService){}

  loadReportAssessment$ = createEffect(() =>
    this.actions$.pipe(
      ofType(AssessmentReportActions.loadReportAssessment),
      mergeMap((action) =>
        this.dashboardService.loadDataForGraph(action.id),
      ),
      map((data) => AssessmentReportActions.loadReportAssessmentSuccess({ data })),
      catchError((error: HttpErrorResponse) =>
        of(
            AssessmentReportActions.loadReportAssessmentFailure({
            error: error.message,
          }),
        ),
      ),
    ),
  );
}