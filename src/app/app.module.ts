import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompensationDetailComponent } from './modules/compensation/compensation-detail/compensation-detail.component';
import { CompensationModule } from './modules/compensation/compensation.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import {
  FreezeService,
  VirtualScrollService,
} from '@syncfusion/ej2-angular-treegrid';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CompensationModule,
    NgSelectModule,
    DropDownListModule,
  ],
  providers: [VirtualScrollService, FreezeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
