import { NgModule } from '@angular/core';

import { ProductRepository } from './product.repository';
import { StaticDataSource } from './static.datasource';
import { Cart } from './cart.model';

// Export all models to main app.module.ts
@NgModule({
  providers: [ProductRepository, StaticDataSource, Cart]
})
export class ModelModule {}
