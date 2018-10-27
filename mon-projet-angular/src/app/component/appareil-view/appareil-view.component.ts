import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../../services/appareil.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  lastUpdate = new Promise(
    (resolve,reject)=> {
      const date = new Date();
      setTimeout(
        ()=>{
          resolve(date);
        },3000
      );
    }
  );

  appareils: any[];
  appareilSubscription: Subscription;

  constructor(private appareilService: AppareilService)
  {
    setTimeout(
      ()=>{this.isAuth=true},4000
    );

    
  }

  ngOnInit()
  { //this.appareilService.getAppareilFromServer();
    this.appareilSubscription = this.appareilService.appareilSubject.subscribe(
      (apps) => {
        this.appareils = apps;
      }
    );
    this.appareilService.emitAppareilSubject();
    
  }

  onAllumer()
  {
    this.appareilService.switchOnAll();
  }

  onEteindre()
  {
    if(confirm('Etes-vous sûrs de vouloir éteindre tous vos appareils ?'))
    {
      this.appareilService.switchOffAll();
    }
    else{
      return null;
    }
    
  }

  onSave(){
    this.appareilService.saveAppareilToServer();
  }

  onFetch(){
    this.appareilService.getAppareilFromServer();
  }

}
