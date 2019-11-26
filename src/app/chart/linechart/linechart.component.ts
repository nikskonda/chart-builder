import { Component, Input, SimpleChanges } from '@angular/core';
import { NgModule, OnInit, ViewChild, ElementRef, VERSION } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Highcharts from 'highcharts/highstock';
import More from 'highcharts/highcharts-more';
import { StockChart, Chart } from 'angular-highcharts';
More(Highcharts);
import Drilldown from 'highcharts/modules/drilldown';
Drilldown(Highcharts);
import Exporting from 'highcharts/modules/exporting';
import { SeriesOptionsType } from 'highcharts/highcharts.src';
Exporting(Highcharts);

export interface ChartData2{
  type: string;
  name: string;
  data: [];
}

@Component({
  selector: 'linechart',
  templateUrl: `linechart.component.html`,
  styleUrls: [`linechart.component.css`]
})
export class LineChart2Component {
  @Input() data: Array<SeriesOptionsType> = [];
  @Input() type: string = null;
  stock: Chart = null;

  ngOnChanges(changes: SimpleChanges): void {
    this.stock = new Chart({
      chart: {
        zoomType: 'xy',
        type: this.type
      },
      series: this.data
    });

  }
}
