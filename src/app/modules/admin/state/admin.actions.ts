import { createAction, props } from '@ngrx/store';
import { User } from '../resources/models/admin.model';

export const loadUsers = createAction('[Admin Component] Load Users');

export const loadUsersSuccess = createAction(
  '[Admin Component] Load Users Success',
  props<{ data: User[] }>(),
);

export const loadUsersFailure = createAction(
  '[Admin Component] Load Users Failure',
  props<{ error: string }>(),
);