import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as DashboardReducer from './dashboard.reducer';

export const selectDashboardState = createFeatureSelector<DashboardReducer.State>(
    DashboardReducer.dashboardFeatureKey,
);

export const selectReportAssessments = createSelector(selectDashboardState, state => state.data);