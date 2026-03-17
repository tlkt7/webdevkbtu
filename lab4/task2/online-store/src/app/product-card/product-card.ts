import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard implements OnInit {
  @Input() product!: Product;

  activeImage = '';
  activeImageIndex = 0;

  ngOnInit(): void {
    this.activeImage = this.product.images[0] ?? this.product.image;
  }

  selectImage(index: number): void {
    this.activeImageIndex = index;
    this.activeImage = this.product.images[index];
  }

  prevImage(): void {
    const newIndex = (this.activeImageIndex - 1 + this.product.images.length) % this.product.images.length;
    this.selectImage(newIndex);
  }

  nextImage(): void {
    const newIndex = (this.activeImageIndex + 1) % this.product.images.length;
    this.selectImage(newIndex);
  }

  getStars(rating: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
  }

  shareOnWhatsApp(): void {
    const text = encodeURIComponent(`Check out this product: ${this.product.link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareOnTelegram(): void {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }

  formatPrice(price: number): string {
    return price.toLocaleString('ru-RU') + ' ₸';
  }
}
