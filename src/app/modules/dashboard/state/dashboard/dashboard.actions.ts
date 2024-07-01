import { createAction, props } from '@ngrx/store';
import { Assessment } from '../../resources/models/assessment.model';

export const loadReportAssessments = createAction('[Dashboard Component] Load Report Assessments');

export const loadReportAssessmentsSuccess = createAction(
  '[Dashboard Component] Load Report Assessments Success',
  props<{ data: Assessment[] }>(),
);

export const loadReportAssessmentsFailure = createAction(
  '[Dashboard Component] Load Report Assessments Failure',
  props<{ error: string }>(),
);