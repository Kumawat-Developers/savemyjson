import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyjsonComponent } from './myjson/myjson.component';


const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
  },
  {
    path:'myjson/:id',
    component:MyjsonComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
