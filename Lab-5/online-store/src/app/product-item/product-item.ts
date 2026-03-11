import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
  @Input() product!: Product;

  selectedImage?: string;

  getMainImage(): string {
    return this.selectedImage || this.product.images[0];
  }

  selectImage(image: string): void {
    this.selectedImage = image;
  }

  shareWhatsapp() {
    const t = `Check out this product: ${this.product.link}`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(t)}`;
    window.open(shareUrl, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    const shareUrl = `https://t.me/share/url?url=${url}&text=${text}`;
    window.open(shareUrl, '_blank');
  }

  @Output() remove = new EventEmitter<number>();

  deleteProduct() {
    const ok = confirm('Are you sure you want to delete this product?');
    if (!ok) return;
    this.remove.emit(this.product.id);
  }

  like() {
    this.product.likes++;
  }
}