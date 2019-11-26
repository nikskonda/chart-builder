import { DataServerService } from './../data-server.service';
import { Component, Input, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {
  @Input() shiftId: number = null;

  data = [];
  displayedColumns = [];
  show = false;

  constructor(public service: DataServerService) {  }

  ngOnInit() {
    this.data = this.service.findById(this.shiftId).value;
    this.displayedColumns = this.service.getDisplayedColumns(this.shiftId);
  }

}
