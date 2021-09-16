import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/core/home/home.component';
import { ProizvodComponent } from './components/proizvod/proizvod.component';
import { ProizvodjacComponent } from './components/proizvodjac/proizvodjac.component';
import { RacunComponent } from './components/racun/racun.component';
import { StavkaRacunaComponent } from './components/stavka-racuna/stavka-racuna.component';

const routes: Routes = [
  {path: 'proizvod', component: ProizvodComponent},
  {path: 'proizvodjac', component: ProizvodjacComponent},
  {path: 'racun', component: RacunComponent},
  {path: 'stavkaRacuna', component: StavkaRacunaComponent},
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
