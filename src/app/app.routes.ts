import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductComponent } from './components/product/product.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'product-details/:refNum', component: ProductComponent},
    {path: 'admin', component: AdminComponent},
    {path: '', redirectTo: 'home', pathMatch: 'full'}
];
