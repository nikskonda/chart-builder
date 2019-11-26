import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-asix-selector',
  templateUrl: './asix-selector.component.html',
  styleUrls: ['./asix-selector.component.css']
})
export class AsixSelectorComponent {

    @Input() asixes: string[] = [];
    @Input() value: string = null;
    @Output() selected = new EventEmitter<string>();

    select(asix) {
      this.selected.emit(asix);
  }

}
