import { createReducer, on } from '@ngrx/store';
import * as AdminActions from './admin.actions';
import { User } from '../resources/models/admin.model';

export const adminFeatureKey = 'admin';

export interface State {
  data: User[];
  error: string | null;
}

const initialState: State = {
  data: [],
  error: null
};

export const reducer = createReducer(
  initialState,
  on(AdminActions.loadUsers, (state, action) => ({
    ...state,
    error: null,
    data: []
  })),
  on(AdminActions.loadUsersSuccess, (state, action) => ({
    ...state,
    data: action.data,
    error: null
  })),
  on(AdminActions.loadUsersFailure, (state, action) => ({
    ...state,
    data: [],
    error: action.error
  })),
);