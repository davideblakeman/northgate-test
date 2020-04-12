import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface FormData {
  firstName: string;
  lastName: string;
  dOB: string;
  favMeal: string;
  options: string[];
  personality: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  form: FormData;
  formChanged = new Subject<FormData>();
  readonly initFormValues = {
    firstName: '',
    lastName: '',
    dOB: '980730000000',
    favMeal: '',
    options: ['Chicken Nuggets', 'Pizza', 'Red Wine', 'White Wine'],
    personality: '',
  };

  constructor() {
    this.form = this.initFormValues;
  }

  clear() {
    this.form = this.initFormValues;
    this.formChanged.next(this.form);
  }

  setForm(form: FormData) {
    this.form = form;
  }
}
