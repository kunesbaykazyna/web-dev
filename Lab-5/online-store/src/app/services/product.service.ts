import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
 /*
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
   {
      id: 1,
      name: 'iPhone 13',
      price: 450000,
      description: 'Apple smartphone',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/hc1/64030652342206.jpg',
      
    },
    {
      id: 2,
      name: 'Samsung Galaxy S22',
      price: 380000,
      description: 'Samsung flagship phone',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2a/hc4/64031512371230.jpg'
    },
    {
      id: 3,
      name: 'Xiaomi Redmi Note 12',
      price: 120000,
      description: 'Budget smartphone',
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/h36/64487100000030.jpg'
    }
  ];

getCategories() {
  return [...new Set(this.products.map(p => p.category))];
}
  deletedProducts: Product[] = [];

  constructor() {}

  
  getProducts(): Product[] {
    return this.products;
  }

  deleteProduct(id: number): void {
    const index = this.products.findIndex(p => p.id === id);

    if (index !== -1) {
      const removedProduct = this.products.splice(index, 1)[0];
      this.deletedProducts.push(removedProduct);
    }
  }

  restoreProducts(): void {
    this.products.push(...this.deletedProducts);
    this.deletedProducts = [];
  }

}**/