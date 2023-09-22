import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CalculadoraComponent } from './calculadora/calculadora.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ],
  exports:[
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent
  ]
})
export class HomeModule { }
