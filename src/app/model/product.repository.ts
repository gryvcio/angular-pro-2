import { Injectable } from '@angular/core';

import { Product } from './product.model';
import { StaticDataSource } from './static.datasource';

@Injectable()
export class ProductRepository {
  private products: Product[] = [];
  private categories: string[] = [];

  constructor (private dataSource: StaticDataSource) {
    // Get product from dataSource
    dataSource.getProduct().subscribe(data => {
      // Get all products
      this.products = data;
      // Get only kategories from dataSource
      this.categories = data.map(p => p.category)
      .filter((c, index, array) => array.indexOf(c) === index).sort();
    });
  }

  getProducts(category: string = null): Product[] {
    return this.products
      .filter(p => category === null || category === p.category);
  }

  getProduct(id: number): Product {
    return this.products.find(p => p.id === id);
  }

  getCategories(): string[] {
    return this.categories;
  }
}
