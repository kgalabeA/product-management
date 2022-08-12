import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template:`
  <div class="jumbotron text-center" style="margin-bottom: 0">
  <footer class="bg-dark text-center text-white">
  <!-- Copyright -->
  <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2);">
    © {{currentYear}} Copyright: www.example.com
  </div>
  <!-- Copyright -->
</footer>

</div>
  `
})
export class FooterComponent implements OnInit {
currentYear=new Date().getFullYear();
  constructor() { }

  ngOnInit() {

  }

}
