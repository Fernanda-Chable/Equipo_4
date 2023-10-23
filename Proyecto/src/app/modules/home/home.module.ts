import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { LocationComponent } from './location/location.component';
import { BlogComponent } from './blog/blog.component';
import { RepertorioComponent } from './repertorio/repertorio.component';
import { VServiciosComponent } from './v-servicios/v-servicios.component';
import { FilterPipe } from './my-filter.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    ServiciosComponent,
    LocationComponent,
    BlogComponent,
    RepertorioComponent,
    VServiciosComponent,
    FilterPipe ,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
   

  ],
  exports: [
    
    BlogComponent,
    LocationComponent,
    RepertorioComponent,
    VServiciosComponent,
    
  ]
})
export class HomeModule { }
