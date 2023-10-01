import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BlogComponent } from './blog/blog.component';
import { LocationComponent } from './location/location.component';
import {RepertorioComponent} from './repertorio/repertorio.component';

const routes: Routes = [
  { path:"", component: HomeComponent},
  {path: "blog", component: BlogComponent},
  {path: "contacto", component: LocationComponent},
  {path: "repertorio", component: RepertorioComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
