import { DataServerService } from './../data-server.service';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-read-xlsx-file',
  templateUrl: './read-xlsx-file.component.html',
  styleUrls: ['./read-xlsx-file.component.css']
})
export class ReadXlsxFileComponent {

  constructor(private service: DataServerService) {}

  onFileChange(ev) {
    let workBook = null;
    let jsonData = null;
    const reader = new FileReader();
    const file = ev.target.files[0];
    reader.onload = (event) => {
      const data = reader.result;
      workBook = XLSX.read(data, { type: 'binary' });
      jsonData = workBook.SheetNames.reduce((initial, name) => {
        const sheet = workBook.Sheets[name];
        initial[name] = XLSX.utils.sheet_to_json(sheet);
        return initial;
      }, {});
      const dataString = JSON.stringify(jsonData);
      // document.getElementById('output').innerHTML = dataString;
      this.service.setData(jsonData);
    }
    reader.readAsBinaryString(file);
  }


}
