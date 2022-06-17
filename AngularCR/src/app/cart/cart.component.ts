import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../products';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Product[] = [];
  checkoutForm = this.fb.group({
    name: '',
    address: '',
  });
  constructor(private cartService: CartService, private fb: FormBuilder) {}
  
  onSubmit() {
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  productPrice() {
    let total = 0;
    this.items.forEach((product) => {
    total += product.price
    })
    return total
    }

    servicePrice () {
      return this.productPrice()*0.1
    }

      discountPrice() {
        const productsTotal = this.productPrice();
        const serviceTotal = this.servicePrice();
        const priceTotal = productsTotal + serviceTotal;
        if (priceTotal < 40) {
          return 0;
        } else {
          return priceTotal*0.15
        }
      }

      totalPrice() {
        return (this.productPrice() + this.servicePrice()) - this.discountPrice()
      }
    }
