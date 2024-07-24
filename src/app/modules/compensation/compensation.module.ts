import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompensationDetailComponent } from './compensation-detail/compensation-detail.component';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs'
import { FormsModule } from '@angular/forms'

import {
  FilterService,
  PageService,
  SortService,
  TreeGridModule,
} from '@syncfusion/ej2-angular-treegrid';
import { BrowserModule } from '@angular/platform-browser';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [CompensationDetailComponent],
  imports: [CommonModule, BrowserModule, TreeGridModule,DropDownListModule,NumericTextBoxModule,FormsModule],
  providers: [PageService, SortService, FilterService],
})
export class CompensationModule {}
