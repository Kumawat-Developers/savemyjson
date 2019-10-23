import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyjsonComponent } from './myjson/myjson.component';
import { NewjsonComponent } from './newjson/newjson.component';


const routes: Routes = [
  {
  path: 'home',
  component: HomeComponent
  },
  
  {
    path:'newjson',
    component:NewjsonComponent
  },
  {
    path:'',
    component:NewjsonComponent
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
