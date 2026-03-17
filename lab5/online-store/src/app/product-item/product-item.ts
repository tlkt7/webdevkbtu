import { Component, input, output, OnInit } from '@angular/core';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem implements OnInit {
  product = input.required<Product>();
  delete = output<number>();

  activeImage = '';
  activeImageIndex = 0;

  ngOnInit(): void {
    this.activeImage = this.product().images[0] ?? this.product().image;
  }

  selectImage(index: number): void {
    this.activeImageIndex = index;
    this.activeImage = this.product().images[index];
  }

  prevImage(): void {
    const newIndex = (this.activeImageIndex - 1 + this.product().images.length) % this.product().images.length;
    this.selectImage(newIndex);
  }

  nextImage(): void {
    const newIndex = (this.activeImageIndex + 1) % this.product().images.length;
    this.selectImage(newIndex);
  }

  like(): void {
    this.product().likes++;
  }

  onDelete(): void {
    this.delete.emit(this.product().id);
  }

  getStars(rating: number): boolean[] {
    return Array.from({ length: 5 }, (_, i) => i < Math.round(rating));
  }

  formatPrice(price: number): string {
    return price.toLocaleString('ru-RU') + ' ₸';
  }

  shareOnWhatsApp(): void {
    const text = encodeURIComponent(`Check out this product: ${this.product().link}`);
    window.open(`https://wa.me/?text=${text}`, '_blank');
  }

  shareOnTelegram(): void {
    const url = encodeURIComponent(this.product().link);
    const text = encodeURIComponent(this.product().name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}
