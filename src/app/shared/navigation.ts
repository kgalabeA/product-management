import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template:`
  <div class="jumbotron text-center" style="margin-bottom: 0">
  <h1>{{title}}</h1>
</div>
<nav class="navbar navbar-expand-md bg-dark navbar-dark">
  <a class="navbar-brand" routerLink="/">Home</a>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#collapsibleNavbar"
  >
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" routerLink="/">List products</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/add">Add product</a>
      </li>
    </ul>
  </div>
</nav>
  `
})
export class NavComponent implements OnInit {
@Input('title') title:string='';
  constructor() { }

  ngOnInit() {

  }

}
