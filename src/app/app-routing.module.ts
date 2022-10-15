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
import {HolidaysComponent} from "./components/holidays/holidays.component";
import {HolidaysComponentModule} from "./components/holidays/holidays.component-module";
import {HolidaysServiceModule} from "./services/holidays.service-module";

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductsComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'crypto', component: CryptoChipsComponent },
    { path: 'public-holidays', component: HolidaysComponent}]),

    ProductsComponentModule, ProductServiceModule, CategoriesComponentModule, CryptoChipsComponentModule, CryptoServiceModule ,HolidaysComponentModule, HolidaysServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
