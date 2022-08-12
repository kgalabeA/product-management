import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  form!: FormGroup;
  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(),
      price: new FormControl(),
      image: new FormControl(),
      description: new FormControl()
    })
  }

  submit() {
    console.debug(this.form.value);

    if (this.form.value.name == null) {
      return;
    }
    this.productService.addProduct(this.form.value).subscribe(res=>{
      console.log(res);
    },err=>{
      console.log(err)
    })
    this.form.reset();
    this.router.navigateByUrl("/")
  }

}
