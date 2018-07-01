import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

//โหลดหน้า home และ About เข้ามา

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
