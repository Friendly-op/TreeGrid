import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompensationDetailComponent } from './modules/compensation/compensation-detail/compensation-detail.component';
import { CompensationModule } from './modules/compensation/compensation.module';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CompensationModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
