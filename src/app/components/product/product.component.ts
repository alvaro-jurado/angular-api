import { Component, Input, inject } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterModule } from '@angular/router';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  /*@Input('refNum') refNum!: any;

  productToShow: Product | undefined;

  products: Product[] = [];

  counter: number = 1;

  constructor(private productService: ProductService) {

    const productsFromService = this.productService.getProducts();

    this.products = [...productsFromService];
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.products = this.productService.getProducts();
    this.getProductByRefNum();
  }

  getProductByRefNum(): void {
    this.productToShow = this.products.find(product => product.refNum === this.refNum);
  }

  incrementCounter(): void {
    this.counter++;
  }

  decrementCounter(): void {
    if (this.counter > 1) {
      this.counter--;
    }
  }

  addToCart(): void {
    if (!this.productToShow?.available) {
      alert('Articulo agotado.')
    } else {
      if (this.counter == 1) {
        alert('Añadido ' + this.counter + ' producto al carrito.')
      } else {
        alert('Añadidos ' + this.counter + ' productos al carrito.')
      }
    }
  }*/
}
