import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { FormGroup, FormArray, Form } from '@angular/forms';
import { noop } from 'rxjs';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnChanges {
  @Input() gridDataSource: FormArray;

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
}
