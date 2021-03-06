import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListBaseComponent } from 'src/app/grid-list/container/list-base/list-base.component';
import { ListViewComponent } from 'src/app/grid-list/presentationals/list-view/list-view.component';
import { Routes, RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { GridListEffects } from 'src/app/grid-list/store/effects/grid-list.effects';
import { gridListFeatureKey, gridReducer } from './store/reducers/grid-list.reducer';
import { StoreModule } from '@ngrx/store';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { DragDropModule } from '@angular/cdk/drag-drop';

const listRoutes: Routes = [
  {
    path: '',
    component: ListBaseComponent
  }
];

@NgModule({
  declarations: [ListBaseComponent, ListViewComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(listRoutes),
    StoreModule.forFeature(gridListFeatureKey, gridReducer),
    EffectsModule.forFeature([GridListEffects]),
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    DragDropModule
  ]
})
export class GridListModule { }
