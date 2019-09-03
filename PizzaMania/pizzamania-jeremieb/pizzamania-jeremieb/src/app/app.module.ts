import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormulaireComponent } from './formulaire/formulaire.component';
import {FormsModule} from '@angular/forms';
import { AccueilComponent } from './accueil/accueil.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CommandeOkComponent } from './commande-ok/commande-ok.component';
import { CarteComponent } from './carte/carte.component';
import {HttpClientModule } from '@angular/common/http';
import {PizzaService} from './pizza.service';
import { CommandeKoComponent } from './commande-ko/commande-ko.component';

@NgModule({
  declarations: [
    AppComponent,
    FormulaireComponent,
    AccueilComponent,
    HeaderComponent,
    FooterComponent,
    CommandeOkComponent,
    CarteComponent,
    CommandeKoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PizzaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
