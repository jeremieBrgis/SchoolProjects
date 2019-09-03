import { Component, OnInit } from '@angular/core';
import {PizzaService} from '../pizza.service';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Pizza} from '../model/pizza.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-carte',
  templateUrl: './carte.component.html',
  styleUrls: ['./carte.component.css']
})
export class CarteComponent implements OnInit {
  constructor(private pizzaService: PizzaService, private router: Router) { }
  public pizzas: Pizza;
  public  prixMax = 5;
  private isLoading: boolean;

  ngOnInit() {
  this.isLoading = false;
    this.getPizzaService();
  }

public getPizzaService() {
  this.isLoading = true;
  this.pizzaService.getPizzas().subscribe(
    (res) => { this.onSuccessGet(res)},
    (error) => { this.onErrorGet(error)})
}

public onSuccessGet(ppizza: any) {
    this.isLoading = false;
    console.log('success');
    this.pizzas = ppizza;
  }
public onErrorGet(err: HttpErrorResponse) { this.isLoading = false; console.log(err); }

  public commanderPizzaService(pizza : Pizza) {
    this.isLoading = true;
    this.pizzaService.sendCommande(pizza).subscribe(
      (res1) => { this.onSuccessSend(res1); window.localStorage.setItem('lastPizza', JSON.stringify(pizza));},
      (error1) => { this.onErrorSend(error1)})
  }
  public onSuccessSend(ppizza: any) {
    this.isLoading = false;
    console.log('success');
    this.router.navigate
    (['/commande-ok']);
  }
  public onErrorSend(err: HttpErrorResponse) {
    this.isLoading = false;
    console.log(err);
    this.router.navigate
    (['/commande-ko']);
  }

}



