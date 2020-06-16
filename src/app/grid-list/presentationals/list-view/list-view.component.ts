import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  EventEmitter,
  Output,
} from '@angular/core';
import { FormGroup, FormArray, Form } from '@angular/forms';
import { noop } from 'rxjs';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { PeriodicElement } from 'src/app/models/periodic-element';
import { Update } from '@ngrx/entity';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnChanges {
  @Input() gridDataSource: FormArray;
  @Output() updatePeridoicElement = new EventEmitter<Update<PeriodicElement>>();

  gridForm: FormGroup;

  get list() {
    return this.gridForm.get('list');
  }

  constructor() {
    this.gridForm = new FormGroup({
      list: new FormArray([]),
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.gridForm
      ? this.gridForm.setControl('list', this.gridDataSource)
      : noop();
  }

  listDropped(event: CdkDragDrop<any>) {
    moveItemInArray(
      (this.list as FormArray).controls,
      event.previousIndex,
      event.currentIndex
    );
  }

  updateFormInState(form: FormGroup) {
    this.updatePeridoicElement.emit({
      id: form.get('id').value,
      changes: form.value,
    } as Update<PeriodicElement>);
  }
}
