import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth.reducer';

export const selectAuthState = createFeatureSelector<fromAuth.State>(
  fromAuth.authFeatureKey
);

export const selectUser = createSelector(
  selectAuthState,
  (state: fromAuth.State) => state.user
);

export const selectUserRole = createSelector(
  selectAuthState,
  (state: fromAuth.State) => state.user ? state.user.role : null
);

export const selectError = createSelector(
  selectAuthState,
  (state: fromAuth.State) => state.error
);