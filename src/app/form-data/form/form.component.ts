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
    this.formData = this.data.form;

    this.form = new FormGroup({
      firstName: new FormControl(this.formData.firstName, Validators.required),
      lastName: new FormControl(this.formData.lastName, Validators.required),
      dOB: new FormControl(this.formData.dOB),
      favMeal: new FormControl(this.formData.favMeal),
      personality: new FormControl(this.formData.personality),
    });
  }

  onSubmit() {
    this.data.formChanged.next(this.form.value);
    this.data.setForm(this.form.value);
  }

  onReset() {
    this.form.reset();
  }
}
