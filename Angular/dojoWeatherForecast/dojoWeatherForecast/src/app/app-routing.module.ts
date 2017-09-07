import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtonComponent } from './washington/washington.component';
import { ChicagoComponent } from './chicago/chicago.component';


const routes: Routes = [
  {
    path: '', 
    pathMatch:'full',
    children: []
  },

  {
    path: 'seattle',
    component: SeattleComponent,
    children: []
  }, 

  {
    path: 'sanjose',
    component: SanjoseComponent,
    children: []
  }, 

  {
    path: 'burbank',
    component: BurbankComponent,
    children: []
  }, 

  {
    path: 'dallas',
    component: DallasComponent,
    children: []
  }, 

  {
    path: 'washington_dc',
    component: WashingtonComponent,
    children: []
  }, 

  {
    path: 'chicago',
    component: ChicagoComponent,
    children: []
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
