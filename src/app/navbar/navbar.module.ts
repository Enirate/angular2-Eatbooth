import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent
  ],
  declarations: [NavbarComponent, CartComponent]
})
export class NavbarModule { }
