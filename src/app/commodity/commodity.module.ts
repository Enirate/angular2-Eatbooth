import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommodityComponent } from './commodity.component';
import {FormsModule} from '@angular/forms';
import { DisplayComponent } from './display/display.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommodityComponent
  ],
  declarations: [CommodityComponent, DisplayComponent]
})
export class CommodityModule { }
