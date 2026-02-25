import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './services/product.service';
import { Category } from './models/category.models';
import { Product } from './models/product.model';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('online-store');

  categories: Category[] = [];
  selectedCategoryId?: number;
  products: Product[] = [];

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  get filteredProducts(): Product[] {
    return this.products.filter(p => p.categoryId === this.selectedCategoryId);
  }

  selectCategory(id: number): void {
    this.selectedCategoryId = id;
  }
  removeProduct(id: number) {
    this.products = this.products.filter(p => p.id !== id);
  }
}