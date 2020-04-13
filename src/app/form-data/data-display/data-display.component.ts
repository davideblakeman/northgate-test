import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataService } from '../../data.service';
import { FormData } from '../../data.service';

@Component({
  selector: 'app-data-display',
  templateUrl: './data-display.component.html',
  styleUrls: ['./data-display.component.scss'],
})
export class DataDisplayComponent implements OnInit, OnDestroy {
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

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
