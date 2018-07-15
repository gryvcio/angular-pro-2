import { Component } from '@angular/core';

import { Cart } from '../model/cart.model';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cartSummary.component.html',
  styles: [`
    .float-right {
    color: whitesmoke;
  }`]
})
export class CartSummaryComponent {
  constructor(public cart: Cart) {}

}
