import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';
import {HttpErrorResponse} from '@angular/common/http';
import {Pizza} from '../model/pizza.model';
import {Commande} from '../model/commande.model';
import {Router} from "@angular/router";
@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {
  public commande: Commande;
  public pizza = new Pizza();
  constructor(private pizzaService: PizzaService, private router: Router) {}
  private isLoading: boolean;

  ngOnInit() {
    this.isLoading = false;
  }
  public commanderPizzaService() {
    this.isLoading = true;
    this.pizzaService.sendCommande(this.pizza).subscribe(
      (res) => { this.onSuccess(res); window.localStorage.setItem('lastPizza', JSON.stringify(this.pizza));},
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
    this.isLoading = false; console.log(err);
    this.commande = null;
    this.router.navigate
    (['/commande-ko']);
  }

  isNotValidePizza() {
    let ppizza = this.pizza;
    return !(ppizza.anchois || ppizza.magret || ppizza.miel || ppizza.jambon) || !ppizza.base || !ppizza.pate;
  }

}
