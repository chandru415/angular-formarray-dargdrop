import { createReducer, on } from '@ngrx/store';
import * as GridListActions from 'src/app/grid-list/store/actions/grid-list.actions';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import * as fromRoot from 'src/app/store/reducers';

export const gridListFeatureKey = 'gridList';

export interface State extends fromRoot.State {
  employeeState: GridState;
}

export interface GridState extends EntityState<any> {
  error: any;
  isFecting: boolean;
}

export const gridAdapter: EntityAdapter<any> = createEntityAdapter<any>();

export const gridInitialState: GridState = gridAdapter.getInitialState({
  error: null,
  isFecting: false,
});

export const gridReducer = createReducer(
  gridInitialState,
  on(GridListActions.loadGridLists, (state) => {
    return { ...state, isFecting: true };
  }),

  on(GridListActions.loadGridListsSuccess, (state, action) =>
    gridAdapter.addMany(action.data, { ...state, isFecting: false })
  ),

  on(GridListActions.loadGridListsFailure, (state, action) => {
    return { ...state, error: action.error, isFecting: false };
  }),

  on(GridListActions.UpdateListObject, (state, action) =>
    gridAdapter.updateOne(action.update, { ...state })
  )
);
