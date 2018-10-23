import { Component, OnInit } from '@angular/core';
import { AppareilService } from 'src/app/services/appareil.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss']
})
export class SingleAppareilComponent implements OnInit {

  constructor(private appareilService: AppareilService, private route: ActivatedRoute) { }

  name: string ='Appareil';
  status: string= 'Default';

  ngOnInit() {
    var id =this.route.snapshot.params['id'];
    this.name = this.appareilService.getAppareilById(+id).name;
    this.status = this.appareilService.getAppareilById(+id).status;
  }

}
