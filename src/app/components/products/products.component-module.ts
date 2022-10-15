import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [MatCardModule, MatListModule, CommonModule, MatChipsModule, MatGridListModule, MatFormFieldModule, MatSelectModule, MatOptionModule],
  declarations: [ProductsComponent],
  providers: [],
  exports: [ProductsComponent]
})
export class ProductsComponentModule {
}
