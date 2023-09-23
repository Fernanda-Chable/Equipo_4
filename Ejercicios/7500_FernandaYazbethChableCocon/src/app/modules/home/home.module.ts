import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';

import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ReservasComponent } from './reservas/reservas.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';


@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    ReservasComponent,
    CalculadoraComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CalculadoraComponent,
    ReservasComponent,
  ]
})
  
export class HomeModule { }
