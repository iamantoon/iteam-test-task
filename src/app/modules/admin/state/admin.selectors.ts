import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as AdminReducer from './admin.reducer';

export const selectAdminState = createFeatureSelector<AdminReducer.State>(
    AdminReducer.adminFeatureKey,
);

export const selectUsers = createSelector(selectAdminState, state => state.data);