import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivreComponent } from './livre/livre.component';
import { MesLivresComponent } from './mes-livres/mes-livres.component';
import { NgModule } from '@angular/core';
import { CreerComponent } from './creer/creer.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'livre/:id', component: LivreComponent },
  { path: 'my', component: MesLivresComponent },
  { path: 'ajouter', component: CreerComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
