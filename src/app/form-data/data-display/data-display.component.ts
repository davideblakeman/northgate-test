import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { FormData } from '../../data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss'],
})
export class DataDisplayComponent implements OnInit {
  formData: FormData;
  subscription: Subscription;

  constructor(private data: DataService) {}

  ngOnInit() {
    this.formData = this.data.form;
    this.subscription = this.data.formChanged.subscribe(
      (formData: FormData) => {
        this.formData = formData;
      }
    );
  }

  onClear() {
    this.data.clear();
  }
}
