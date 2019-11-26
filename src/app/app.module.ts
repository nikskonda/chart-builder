
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { LineChart2Component } from './chart/linechart/linechart.component';
import { ReadXlsxFileComponent } from './read-xlsx-file/read-xlsx-file.component';
import { TableDataComponent } from './table-data/table-data.component';

import {MatNativeDateModule} from '@angular/material/core';
import { MatTableModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { PageComponent } from './page/page.component';
import { AsixSelectorComponent } from './asix-selector/asix-selector.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import stock from 'highcharts/modules/stock.src';
import more from 'highcharts/highcharts-more.src';

export function highchartsModules() {
  // apply Highcharts Modules to this array
  return [stock, more];
}

@NgModule({
   declarations: [
      AppComponent,
      ReadXlsxFileComponent,
      TableDataComponent,
      PageComponent,
      AsixSelectorComponent,
      LineChart2Component
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MDBBootstrapModule.forRoot(),
      FormsModule,
      MatNativeDateModule,
      MatTableModule,
      MatRadioModule,
      ChartModule
   ],
   providers: [{ provide: HIGHCHARTS_MODULES, useFactory: highchartsModules } ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
