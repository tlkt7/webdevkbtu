import { Component, input, OnChanges } from '@angular/core';
import { Product } from '../product.model';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnChanges {
  products = input.required<Product[]>();
  displayedProducts: Product[] = [];

  ngOnChanges(): void {
    this.displayedProducts = [...this.products()];
  }

  removeProduct(id: number): void {
    this.displayedProducts = this.displayedProducts.filter(p => p.id !== id);
  }
}
