import { createAction, props } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { PeriodicElement } from 'src/app/models/periodic-element';

export const loadGridLists = createAction(
  '[GridList] Load GridLists'
);

export const loadGridListsSuccess = createAction(
  '[GridList] Load GridLists Success',
  props<{ data: any }>()
);

export const loadGridListsFailure = createAction(
  '[GridList] Load GridLists Failure',
  props<{ error: any }>()
);

export const UpdateListObject = createAction(
  '[GridList] Update List Object',
  props<{ update: Update<PeriodicElement> }>()
);
