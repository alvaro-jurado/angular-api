import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {
  productForm!: FormGroup;
  products: Product[] = [];

  constructor(private fb: FormBuilder, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.createProductForm();
    
  }

  createProductForm(): void {
    this.productForm = this.fb.group({
      refNum: new FormControl('', Validators.required),
      productName: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      price: new FormControl('', [Validators.required, Validators.min(1), Validators.max(999)]),
      productCategory: new FormControl('', Validators.required),
      available: new FormControl(''),
      imgLink: new FormControl('', Validators.required),
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const product: Product = this.productForm.value;
      //this.productService.addProduct(product);
      console.log(product)
      this.productService.createProduct(product).subscribe();
      this.productForm.reset();
    } else {
      console.log('Not valid :(')
    }
  }
}

