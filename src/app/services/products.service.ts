import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  listOfProducts = [
    { name: 'iPhone', price: '$999' },
    { name: 'iMac', price: '$2999' },
    { name: 'iWatch', price: '$399' }
  ];

  constructor() { }

  getProducts() {
    return this.listOfProducts;
  }

  addProduct(product: any) {
    this.listOfProducts.push(product);
  }
}
