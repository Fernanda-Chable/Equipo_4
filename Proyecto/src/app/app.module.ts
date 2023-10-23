import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Rutas principales
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './modules/home/header/header.component';
import { FooterComponent } from './modules/home/footer/footer.component';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    


  ],

  exports: [
    HeaderComponent,
    FooterComponent,

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
