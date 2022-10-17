import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { HolidaysComponent } from './components/holidays/holidays.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CategoriesCheckboxComponent } from './components/categories-checkbox/categories-checkbox.component';
import { CategoriesMenuComponent } from './components/categories-menu/categories-menu.component';
import { ProductsComponentModule } from './components/products/products.component-module';
import { ProductServiceModule } from './services/product.service-module';
import { CategoriesComponentModule } from './components/categories/categories.component-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoServiceModule } from './services/crypto.service-module';
import { HolidaysComponentModule } from './components/holidays/holidays.component-module';
import { HolidaysServiceModule } from './services/holidays.service-module';
import { HomePageComponentModule } from './components/home-page/home-page.component-module';
import { CategoriesCheckboxComponentModule } from './components/categories-checkbox/categories-checkbox.component-module';
import { CategoriesMenuComponentModule } from './components/categories-menu/categories-menu.component-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductsComponent },
    { path: 'categories', component: CategoriesComponent },
    { path: 'crypto', component: CryptoChipsComponent },
    { path: 'public-holidays', component: HolidaysComponent },
    { path: '', component: HomePageComponent },
    { path: 'checkbox-categories', component: CategoriesCheckboxComponent },
    { path: 'categories-menu', component: CategoriesMenuComponent }
  ]), ProductsComponentModule, ProductServiceModule, CategoriesComponentModule, CryptoChipsComponentModule, CryptoServiceModule, HolidaysComponentModule, HolidaysServiceModule, HomePageComponentModule, CategoriesCheckboxComponentModule, CategoriesMenuComponentModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
