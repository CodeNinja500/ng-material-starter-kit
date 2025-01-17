import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable} from 'rxjs';
import { ProductModel } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  styleUrls: ['./products.component.scss'],
  templateUrl: './products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsComponent {
  readonly data$: Observable<ProductModel[]> = this._productService.getAll();

  constructor(private _productService: ProductService) {
  }
}
