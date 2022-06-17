import { Component, OnInit } from '@angular/core';
import { products, Product } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menue',
  templateUrl: './menue.component.html',
  styleUrls: ['./menue.component.css']
})
export class MenueComponent implements OnInit {
  products:Product[] = products;

  constructor(
    private cartService: CartService
  ) { }

  addToCart(productId: number) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(this.products[productId]);
  }

  ngOnInit(): void {
  }

}
