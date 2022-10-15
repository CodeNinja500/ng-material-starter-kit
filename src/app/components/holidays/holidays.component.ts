import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {HolidaysService} from "../../services/holidays.service";
import {Observable} from "rxjs";
import {HolidaysModel} from "../../models/holidays.model";

@Component({
  selector: 'app-holidays',
  styleUrls: ['./holidays.component.scss'],
  templateUrl: './holidays.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HolidaysComponent {
  readonly data$:Observable<HolidaysModel[]> = this._holidaysService.getAll();

  constructor(private _holidaysService: HolidaysService) {}
}
