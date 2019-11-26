import { Shift } from './data-server.service';
import { Injectable } from '@angular/core';

export interface Shift {
  id: number
  name: string
  checkbox: boolean
  value: object[]
}

@Injectable({
  providedIn: 'root'
})
export class DataServerService {

  private data: Shift[] = [];

  convertToArray(data) {
    let array = [];
    if (data) {
      Object.keys(data).forEach((item, i) => array.push({id: i, name: item, checkbox: false, value: data[item]}));
    }
    return array;
  }

  setData(data) {
    this.data = this.convertToArray(data);
  }

  getData() {
    return this.data;
  }

  changeCheckbox(id){
    this.data[id].checkbox = !this.data[id].checkbox;
  }

  findById(id){
    return this.data[id];
  }

  getDisplayedColumns(id) {
    let max = 0;
    let result = [];
    if (id !== null && id !== undefined && this.data.length > 0) {
      const array = this.data[id].value;
      if (array) {
        array.forEach(item =>
          {
            if (Object.keys(item).length > max) {
              result = Object.keys(item);
              max = result.length;
            }
          });
      }
    }
    return result;
  }

  convertToChartData(usingShifts, oX, oY) {
    console.log("convertToChartData2");
    let array = [];
    usingShifts.forEach(id => {
      let data = this.findById(id);
      array.push({data: data.value.map(item => [Number.parseFloat(item[oX]), Number.parseFloat(item[oY])]), name: data.name});
    })
    return array;
  }

}
