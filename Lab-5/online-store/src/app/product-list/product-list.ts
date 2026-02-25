import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { ProductItem } from '../product-item/product-item';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Output() remove = new EventEmitter<number>();

  onRemove(id: number) {
    this.remove.emit(id);
  }
}