import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';

@NgModule({
  imports: [RouterModule.forRoot([{ path: 'products', component: ProductsComponent }, { path: 'categories', component: CategoriesComponent }, { path: 'crypto', component: CryptoChipsComponent }]), ProductsComponentModule, ProductServiceModule, CategoriesComponentModule, CryptoChipsComponentModule, CryptoServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
