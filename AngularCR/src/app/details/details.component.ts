import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router'; 
import { products, Product } from '../products';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  product: Product = {} as Product;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

    addToCart() {
      window.alert('Your product has been added to the cart!');
      this.cartService.addToCart(this.product);
    }

    ngOnInit() {
      const routeParams = this.route.snapshot.paramMap;
      const productIdFromRoute = Number(routeParams.get('productId'));
      this.product = products[productIdFromRoute];
    }
}
