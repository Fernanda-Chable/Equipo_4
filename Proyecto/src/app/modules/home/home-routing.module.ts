import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { BlogComponent } from './blog/blog.component';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path: "blog", component: BlogComponent},
  {path: "contacto", component: LocationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
