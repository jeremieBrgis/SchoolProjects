import { Injectable, OnInit } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pizza} from './model/pizza.model';
import {Commande} from './model/commande.model';


@Injectable()
export class PizzaService {
  constructor(private http: HttpClient) { }
private url = 'http://localhost:4300/pizzas';
  private url2;
  public getPizzas(): Observable<Pizza[]> {
    return this.http.get<Pizza[]>(this.url);
  }
  public sendCommande(pizza: Pizza): Observable<Commande[]> {
    this.url2 = 'http://localhost:4300/commanderPizza?base=';
    this.url2 = this.url2.concat("'").concat(pizza.base).concat("'").concat("&pate=").concat("'").concat(pizza.pate).concat("'");
    // On sérialise la pizza souhaite dans le local storage

    if(pizza.anchois){
      this.url2 = this.url2.concat("&anchois=true");
    }
    if(pizza.jambon){
      this.url2 = this.url2.concat("&jambon=true");
    }
    if(pizza.miel){
      this.url2 = this.url2.concat("&miel=true");
    }
    if(pizza.magret){
      this.url2 = this.url2.concat("&magret=true");
    }
    return this.http.get<Commande[]>(this.url2);
  }
}
