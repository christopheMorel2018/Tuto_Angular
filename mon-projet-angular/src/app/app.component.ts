import { Component, OnInit, OnDestroy } from '@angular/core';

import { Observable, Subscription } from 'rxjs';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
constructor() {}

secondes: number;
counterSubscription: Subscription;

ngOnInit() {
  //1. Création d'un Observable
 const counter = Observable.interval(1000);
// 2. Mon Observable souscrit à un abonnement dans une Subscription
 this.counterSubscription = counter.subscribe(
   // se déclenche à chaque fois que l'Observable émet de nouvelles données et reçoit ces données en argument.
   (value) => {
     this.secondes = value;
   },
   (error) => {
     console.log('Une erreur est survenue');
   },
   () => {
     console.log ('Observable completed')
   }
 );
}
//3. J'implémente onDestroy où je fais un unsubscribe()
ngOnDestroy() {
  this.counterSubscription.unsubscribe();
  };

}
