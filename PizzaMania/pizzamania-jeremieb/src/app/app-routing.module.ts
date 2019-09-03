import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormulaireComponent} from './formulaire/formulaire.component';
import { AccueilComponent} from './accueil/accueil.component';
import { CommandeOkComponent } from './commande-ok/commande-ok.component';
import { CommandeKoComponent } from './commande-ko/commande-ko.component';
import { CarteComponent } from './carte/carte.component';

const routes: Routes = [
  {path: 'accueil', component: AccueilComponent},
  {path: 'formulaire', component: FormulaireComponent},
  {path: 'commande-ok', component: CommandeOkComponent},
  {path: 'commande-ko', component: CommandeKoComponent},
  {path: 'carte', component: CarteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
