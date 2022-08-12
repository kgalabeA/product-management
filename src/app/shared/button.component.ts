import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 's-button',
  template: `
  <button type="button" class="btn btn-{{type}}">{{label}}</button>
  `
})
export class ButtonComponent implements OnInit {
  @Input('type') type = 'primary';
  @Input('label') label = 'missing';
  constructor() { }

  ngOnInit() {

  }
}
