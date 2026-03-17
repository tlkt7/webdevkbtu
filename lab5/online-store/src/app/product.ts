import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { Product } from './product.model';
import { CATEGORIES, PRODUCTS } from './products.data';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private categories: Category[] = CATEGORIES;
  private products: Product[] = PRODUCTS.map(p => ({ ...p }));

  getCategories(): Category[] {
    return this.categories;
  }

  getProductsByCategory(categoryId: number): Product[] {
    return this.products.filter(p => p.categoryId === categoryId);
  }
}
