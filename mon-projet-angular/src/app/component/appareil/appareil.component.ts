import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../../services/appareil.service';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.scss']
})
export class AppareilComponent implements OnInit {

  @Input() appareilName : string;
  @Input() appareilStatus : string;
  @Input() appareilIndex : number;
  @Input() appareilId: number;
  

  constructor(private appareilService: AppareilService) { }

  ngOnInit() {
  }

  getStatus()
  {
    return this.appareilStatus;
  }

  getColor()
  {
    if (this.appareilStatus == 'allumé')
    return 'green';
    else
    return 'red';
  }

  onSwitchOn(){
    this.appareilService.switchOnOne(this.appareilIndex);
  }

  onSwitchOff(){
    this.appareilService.switchOffOne(this.appareilIndex);
  }

}
