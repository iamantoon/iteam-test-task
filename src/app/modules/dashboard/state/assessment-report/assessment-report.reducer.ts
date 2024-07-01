import { createReducer, on } from '@ngrx/store';
import * as AssessmentReportActions from './assessment-report.actions';
import { Graph } from '../../resources/models/graph.model';

export const reportAssessmentFeatureKey = 'assessment-report';

export interface State {
  data: Graph | null;
  error: string | null;
};

const initialState: State = {
  data: null,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(AssessmentReportActions.loadReportAssessment, (state) => ({
    ...state,
    error: null,
    data: null
  })),
  on(AssessmentReportActions.loadReportAssessmentSuccess, (state, action) => ({
    ...state,
    data: action.data,
    error: null
  })),
  on(AssessmentReportActions.loadReportAssessmentFailure, (state, action) => ({
    ...state,
    data: null,
    error: action.error
  })),
); 