import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from 'src/app/models/user';
import { Subscription } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit, OnDestroy {

// Array Users en local

  users: User[];
  userSubscription: Subscription;


  constructor(private userService: UserService) { }

  ngOnInit() {
    
    this.userSubscription = this.userService.userSubject.subscribe(
      (us: User[]) => {this.users=us;
      }
    );
    this.userService.emitUsers();
    //this.userService.getUsersFromServer();  
  }

  ngOnDestroy()
  {
    this.userSubscription.unsubscribe();
  }

  onFetch()
  {
    this.userService.getUsersFromServer();  
  }

  

}
