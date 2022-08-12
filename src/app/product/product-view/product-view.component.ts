import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit, OnDestroy {

  product:any;
  sub: Subscription = new Subscription;
  constructor(private productService: ProductService,private router: Router) { }


  ngOnInit(): void {
    this.product=this.productService.getSelectedProduct();
    if(!this.product){
      this.router.navigateByUrl("/");
    }
  }

  edit(){

  }

  delete(){

  }

  ngOnDestroy(): void {
    //this.sub.unsubscribe();
  }

}
