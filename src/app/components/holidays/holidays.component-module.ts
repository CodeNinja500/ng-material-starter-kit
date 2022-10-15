import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, NgForOf, NgIf } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { HolidaysComponent } from './holidays.component';

@NgModule({
  imports: [
    NgIf,
    AsyncPipe,
    NgForOf,
    MatCardModule,
    MatButtonToggleModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    CommonModule
  ],
  declarations: [HolidaysComponent],
  providers: [],
  exports: [HolidaysComponent]
})
export class HolidaysComponentModule {
}
