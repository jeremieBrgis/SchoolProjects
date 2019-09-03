import { Component, OnInit } from '@angular/core';
import {Pizza} from '../model/pizza.model';
import {HttpErrorResponse} from '@angular/common/http';
import {PizzaService} from '../pizza.service';
import {Router} from '@angular/router';
import {Commande} from '../model/commande.model';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  private pizzaString = window.localStorage.getItem('lastPizza');
  public lastPizza: Pizza = JSON.parse(this.pizzaString);
  public commande: Commande;
  constructor(private pizzaService: PizzaService, private router: Router) { }
  private isLoading: boolean;

  ngOnInit() {
    this.isLoading = false;
  }

  public getPrix(): number {

    let prix = 0
    if (this.lastPizza.miel) {
      prix += 2;
    }
    if (this.lastPizza.magret) {
      prix += 4;
    }
    if (this.lastPizza.jambon) {
      prix += 2;
    }
    if (this.lastPizza.anchois) {
      prix += 1;
    }
    if (this.lastPizza.base === 'tomate') {
      prix += 3;
    }
    if (this.lastPizza.base === 'creme') {
      prix += 4;
    }
    return prix;
  }

  public commanderPizzaService() {
    this.isLoading = true;
    this.pizzaService.sendCommande(this.lastPizza).subscribe(
      (res) => { this.onSuccess(res); window.localStorage.setItem('lastPizza', JSON.stringify(this.lastPizza));},
      (error) => { this.onError(error)})
  }
  public onSuccess(pcommande: any) {
    this.isLoading = false;
    console.log('success');
    this.commande = pcommande;
    this.router.navigate
    (['/commande-ok']);
  }
  public onError(err: HttpErrorResponse) {
    this.isLoading = false;
    this.commande = null;
    this.router.navigate
    (['/commande-ko']);
  }



}
