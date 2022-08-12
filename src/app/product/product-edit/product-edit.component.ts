import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form!: FormGroup;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    if(!this.productService.getSelectedProduct()){
this.router.navigateByUrl("/");
    }
    this.initForm(this.productService.getSelectedProduct());
  }

  initForm(data:any) {
    this.form = new FormGroup({
      name: new FormControl(data.name),
      price: new FormControl(data.price),
      image: new FormControl(data.image),
      description: new FormControl(data.description)
    })
  }

  submit() {
    console.debug(this.form.value);

    if (this.form.value.name == null) {
      return;
    }
    this.productService.updateProduct(this.productService.getSelectedProduct().id,this.form.value).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err)
    })
    this.form.reset();
    this.router.navigateByUrl("/")
  }

}
