import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    /*private predefinedProducts: Product[] = [
        { refNum: '1', productName: 'Haru Okumura', price: 10.99, productCategory: 'notColored', available: true, imgLink: '../../../assets/images/HaruOkumura.jpg' },
        { refNum: '2', productName: 'Sakura Matou', price: 9.49, productCategory: 'notColored', available: false, imgLink: '../../../assets/images/SakuraMatou.jpg' },
        { refNum: '3', productName: 'Violet Evergarden', price: 12.99, productCategory: 'notColored', available: true, imgLink: '../../../assets/images/VioletEvergarden.jpg' },
    ];

    private products: Product[] = [];*/

    API_URL: string = "http://localhost:3000/api/products";
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':'application/json'
        })
    }

    constructor(private httpClient: HttpClient) { }

    getProducts(): Observable<any> {
        return this.httpClient.get(this.API_URL).pipe(res=> res);
    }

    createProduct(product: Product): Observable<Product> {
        return this.httpClient.post<Product>(this.API_URL, JSON.stringify(product), this.httpOptions).pipe(res=> res);
    }

    /*addProduct(product: Product): void {
        this.products.push(product);
    }

    getProducts(): Product[] {
        const allProducts = [...this.predefinedProducts, ...this.products];
        return allProducts;
    }*/
}
