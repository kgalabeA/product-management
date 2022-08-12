import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product-data.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: any;
  productsTemp: any;

  constructor(public productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService.getProductList().subscribe((res) => {
      this.products = res;
    });
  }

  trackByFn(index: any, prod: any) {
    return prod.id;
  }

  edit(product: Product) {
    console.debug('Debug........');
    this.productService.setSelectedProduct(product);
    this.router.navigateByUrl('/edit');
  }

  view(prod: Product) {
    this.productService.setSelectedProduct(prod);
    this.router.navigateByUrl('view');
  }

  onDelete(id: any) {
    this.productService.deleteProduct(id).subscribe((res) => {
      this.refresh();
    });
  }

  refresh() {
    window.location.reload();
  }
}
