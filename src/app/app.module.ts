import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FormComponent } from './form-data/form/form.component';
import { DataDisplayComponent } from './form-data/data-display/data-display.component';
import { FormDataComponent } from './form-data/form-data.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FormComponent,
    DataDisplayComponent,
    FormDataComponent,
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    PagesModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
