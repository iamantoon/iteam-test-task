import { createReducer, on } from '@ngrx/store';
import * as DashboardActions from './dashboard.actions';
import { Assessment } from '../../resources/models/assessment.model';

export const dashboardFeatureKey = 'dashboard';

export interface State {
  data: Assessment[];
  error: string | null;
}

const initialState: State = {
  data: [],
  error: null
};

export const reducer = createReducer(
  initialState,
  on(DashboardActions.loadReportAssessments, (state, action) => ({
    ...state,
    error: null,
    data: []
  })),
  on(DashboardActions.loadReportAssessmentsSuccess, (state, action) => ({
    ...state,
    data: action.data,
    error: null
  })),
  on(DashboardActions.loadReportAssessmentsFailure, (state, action) => ({
    ...state,
    data: [],
    error: action.error
  })),
);