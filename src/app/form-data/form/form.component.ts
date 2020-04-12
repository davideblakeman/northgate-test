import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../../data.service';
import { FormData } from '../../data.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  acControl = new FormControl();
  formData: FormData;
  form: FormGroup;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.formData = this.data.initFormValues;
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      firstName: new FormControl(null, Validators.required),
      lastName: new FormControl(null, Validators.required),
      dOB: new FormControl(this.formData.dOB),
      favMeal: new FormControl(null),
      personality: new FormControl(null),
    });
  }

  onSubmit() {
    this.data.setForm(this.form.value);
    this.data.formChanged.next(this.form.value);
  }

  onReset() {
    this.initForm();
  }
}
