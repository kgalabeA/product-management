import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Subject } from 'rxjs';
import { Product } from './product-data.model';

@Injectable()
export class ProductService {

  private selectedProduct = new BehaviorSubject<any>('');
  private products = new BehaviorSubject<Product[]>([]);
  constructor(private http: HttpClient) { }

  setSelectedProduct(product: Product) {
    this.selectedProduct.next(product);
  }

  getSelectedProduct() {
    return this.selectedProduct.getValue();
  }

  serProducts(products: Product[]) {
    this.products.next(products);
  }
  getProductsTemp() {
    return this.products.getValue();
  }

  getProductList() {
return this.http.get('/api/menu/items');
  }

  getProductById(id: any) {

  }

  addProduct(product: any) {
    return this.http.post('/api/menu/items',product);
  }

  updateProduct(id:any,product: Product) {
    return this.http.put(`/api/menu/items/${id}`,product);
  }

  deleteProduct(id: any) {
    return this.http.delete(`/api/menu/items/${id}`);
  }

}
