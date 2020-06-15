import { PeriodicElement } from './periodic-element';
import { FormGroup, FormControl } from '@angular/forms';

export const ELEMENT_DATA: PeriodicElement[] = [
  { id: '1590341187185', position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { id: '1590341212180', position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { id: '1590341218695', position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { id: '1590341226801', position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { id: '1590341232825', position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { id: '1590341238223', position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { id: '1590341249804', position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { id: '1590497248844', position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { id: '1590497256695', position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { id: '1590497262164', position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

export const buildFormGroup = (pd: PeriodicElement): FormGroup => {
  return new FormGroup({
    id: new FormControl(pd.id),
    position: new FormControl(pd.position),
    name: new FormControl(pd.name),
    weight: new FormControl(pd.weight),
    symbol: new FormControl(pd.symbol),
  });
};
