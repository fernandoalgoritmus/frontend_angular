import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChampionshipComponent } from './views/championship/championship.component';
import { IndexComponent } from './views/index/index.component';
import { LoginComponent } from './views/login/login.component';
import { ResultsComponent } from './views/results/results.component';
import { TimesComponent } from './views/times/times.component';

const routes: Routes = [
  
  {path:"login", component: LoginComponent},
  {path:"", component: IndexComponent},
  {path:"results", component: ResultsComponent},
  {path:"times", component: TimesComponent},
  {path:"championship", component: ChampionshipComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
