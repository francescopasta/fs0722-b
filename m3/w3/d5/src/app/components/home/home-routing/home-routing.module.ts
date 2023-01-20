import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingRoutingModule } from './home-routing-routing.module';
import { HomeComponent } from '../home.component';
import { NavbarComponent } from '../../navbar/navbar.component';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingRoutingModule
  ]
})
export class HomeRoutingModule { }
