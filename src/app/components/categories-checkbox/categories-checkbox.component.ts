import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-categories-checkbox',
  styleUrls: ['./categories-checkbox.component.scss'],
  templateUrl: './categories-checkbox.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CategoriesCheckboxComponent {
  readonly data$: Observable<string[]> = this._productService.getAllCategories();

  constructor(private _productService: ProductService) {
  }
}
