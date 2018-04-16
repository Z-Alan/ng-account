import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AccountingComponent } from './accounting/accounting.component';
import { CountComponent } from './count/count.component';
import { CountYearComponent } from './count/count-year/count-year.component';
import { CountMonthComponent } from './count/count-month/count-month.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {WeUIModule} from 'angular-weui';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccountingComponent,
    CountComponent,
    CountYearComponent,
    CountMonthComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    WeUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
