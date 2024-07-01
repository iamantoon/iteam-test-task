import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AssessmentReportReducer from './assessment-report.reducer';

export const selectAssessmentReportState = createFeatureSelector<AssessmentReportReducer.State>(
  AssessmentReportReducer.reportAssessmentFeatureKey,
);

export const selectReportAssessment = createSelector(selectAssessmentReportState, state => state.data);