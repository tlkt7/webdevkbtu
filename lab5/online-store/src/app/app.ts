import { Component, inject, OnInit } from '@angular/core';
import { Category } from './category.model';
import { Product } from './product.model';
import { ProductService } from './product';
import { ProductList } from './product-list/product-list';

@Component({
  selector: 'app-root',
  imports: [ProductList],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App implements OnInit {
  private productService = inject(ProductService);

  categories: Category[] = [];
  selectedCategory: Category | null = null;
  products: Product[] = [];

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  selectCategory(category: Category): void {
    this.selectedCategory = category;
    this.products = this.productService.getProductsByCategory(category.id);
  }
}
