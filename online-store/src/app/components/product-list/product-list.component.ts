import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductCardComponent } from '../product-card/product-card.component';
import { PRODUCTS } from '../../data/products';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, FormsModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products = PRODUCTS;
  sortOrder: string = '';

  sortByPrice() {
    if (this.sortOrder === 'asc') {
      this.products.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'desc') {
      this.products.sort((a, b) => b.price - a.price);
    }
  }
}
