import { Component, OnInit } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

  productList: Product[] = [];

  constructor(private productService: ProductService) {
    this.getProducts();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe({
      next: (result) => {
        this.productList = result.products;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

  /*products: Product[] = [];

  constructor(private productService: ProductService) {

    const productsFromService = this.productService.getProducts();

    this.products = [...productsFromService];
  }*/
}
