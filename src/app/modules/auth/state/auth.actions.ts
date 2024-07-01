import { createAction, props } from '@ngrx/store';
import { AuthUser, UserLogin } from '../resources/models/user.model';


export const login = createAction(
  '[Auth] Login User',
  props<{ userLogin: UserLogin }>()
);

export const loginSuccess = createAction(
  '[Auth] Login User Success',
  props<{ authUser: AuthUser }>()
);

export const loginFailure = createAction(
  '[Auth] Login User Failure',
  props<{ error: string }>()
);

export const logout = createAction(
  '[Auth] Logout User'
);