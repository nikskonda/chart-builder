import { Shift, DataServerService } from './../data-server.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {

  usingShifts: number[] = [];
  oX: string = null;
  oY: string = null;
  type: string = 'line';
  chartData = [];

  constructor(public service: DataServerService) {}

  changeInUsing(shiftId) {
    this.service.changeCheckbox(shiftId);
    const data = this.service.findById(shiftId);
    if (data.checkbox) {
      this.usingShifts.push(data.id);
    } else {
      const index = this.usingShifts.indexOf(data.id);
      if (index !== -1) { this.usingShifts.splice(index, 1); }
    }
    if (this.usingShifts.length === 0) {
      this.oX = null;
      this.oY = null;
    }
  }

  setOx(asixOx) {
    this.oX = asixOx;
    this.setChartData();
  }

  setOy(asixOy) {
    this.oY = asixOy;
    this.setChartData();
  }

  setType(type) {
    this.type = type;
  }

  setChartData() {
    if (this.oX && this.oY) {
      this.chartData = this.service.convertToChartData(this.usingShifts, this.oX, this. oY);
    }
  }

}
