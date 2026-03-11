import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.models.js';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;

  selectedImageIndex = 0;

  get selectedImage(): string {
    return this.product.images[this.selectedImageIndex];
  }

  selectImage(index: number): void {
    this.selectedImageIndex = index;
  }

  nextImage(): void {
    if (this.selectedImageIndex < this.product.images.length - 1) {
      this.selectedImageIndex++;
    }
  }

  prevImage(): void {
    if (this.selectedImageIndex > 0) {
      this.selectedImageIndex--;
    }
  }

  shareOnWhatsApp(): void {
    const text = `Check out this product: ${this.product.name} - ${this.product.link}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }

  shareOnTelegram(): void {
    const url = `https://t.me/share/url?url=${encodeURIComponent(this.product.link)}&text=${encodeURIComponent(this.product.name)}`;
    window.open(url, '_blank');
  }

  getStarsArray(rating: number): number[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;
    return [...Array(fullStars).fill(1), ...Array(halfStar).fill(0.5), ...Array(emptyStars).fill(0)];
  }
}