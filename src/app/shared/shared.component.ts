import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template:`
  <app-nav [title]="title"></app-nav>
  <ng-content></ng-content>
  <app-footer></app-footer>

  `
})
export class SharedComponent implements OnInit {
@Input('title') title='';
  constructor() { }

  ngOnInit() {

  }

}
