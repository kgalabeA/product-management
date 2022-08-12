export interface ProductFormData {
  name: string,
  price: string,
  description: string,
  image: string
}

export interface Product {
  id:number,
  name: string,
  price: string,
  description: string,
  image: string
}

export class ProductData {
  private productFormData: ProductFormData = {
    name: "",
    price: "",
    description: "",
    image: "",
  }
  setProductFormData(productFormData: ProductFormData) {
    this.productFormData = productFormData;
  }
  getProductFormData(): ProductFormData {
    return this.productFormData;
  }
}
