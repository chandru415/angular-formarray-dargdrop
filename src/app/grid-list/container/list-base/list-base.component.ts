import { Component, OnInit } from '@angular/core';
import { GridState } from '../../store/reducers/grid-list.reducer';
import { Store, select } from '@ngrx/store';
import { Subject, Observable } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { getGridList } from '../../store/selectors/grid-list.selectors';
import {
  loadGridLists,
  UpdateListObject,
} from '../../store/actions/grid-list.actions';
import { FormArray } from '@angular/forms';
import { buildFormGroup } from 'src/app/models/periodic-element-work';
import { Update } from '@ngrx/entity';
import { PeriodicElement } from 'src/app/models/periodic-element';

@Component({
  selector: 'app-list-base',
  templateUrl: './list-base.component.html',
  styleUrls: ['./list-base.component.scss'],
})
export class ListBaseComponent implements OnInit {
  private alive = new Subject<void>();
  gridDataSource$: Observable<any>;

  constructor(private store: Store<GridState>) {}

  ngOnInit(): void {
    this.gridDataSource$ = this.store.pipe(
      takeUntil(this.alive),
      select(getGridList),
      map((elements) => new FormArray(elements.map(buildFormGroup)))
    );

    this.store.dispatch(loadGridLists());
  }

  onUpdatePeridoicElement(event: Update<PeriodicElement>) {
    this.store.dispatch(UpdateListObject({ update: event }));
  }
}
