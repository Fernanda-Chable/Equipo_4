import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BlogComponent } from './blog/blog.component';
import { LocationComponent } from './location/location.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ServiciosComponent,
    BlogComponent,
    LocationComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  exports: [
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CarouselComponent,
    ServiciosComponent,
    BlogComponent,
    LocationComponent
  ]
})
export class HomeModule { }
