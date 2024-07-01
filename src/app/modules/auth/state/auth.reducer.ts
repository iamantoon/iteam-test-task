import { createReducer, on } from '@ngrx/store';
import * as fromAuthActions from './auth.actions';
import { AuthUser } from '../resources/models/user.model';

export const authFeatureKey = 'auth';

export interface State {
  user: AuthUser | null;
  error: string | null;
};

export const initialState: State = {
  user: null,
  error: null
};

export const reducer = createReducer(
  initialState,
  on(fromAuthActions.loginSuccess, (state, { authUser }) => {
    return {
      ...state,
      user: authUser, 
      error: null 
    };
  }),
  on(fromAuthActions.loginFailure, (state, { error }) => {
    return {
      ...state,
      error: error
    };
  }),
  on(fromAuthActions.logout, (state) => {
    return {
      ...state,
      user: null, 
      error: null 
    };
  })
);