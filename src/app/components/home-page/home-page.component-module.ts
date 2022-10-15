import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HomePageComponent } from './home-page.component';
import {MatSelectModule} from "@angular/material/select";
import {MatChipsModule} from "@angular/material/chips";
import {RouterLink} from "@angular/router";

@NgModule({
  imports: [MatCardModule, MatSelectModule, MatChipsModule, RouterLink],
  declarations: [HomePageComponent],
  providers: [],
  exports: [HomePageComponent]
})
export class HomePageComponentModule {
}
