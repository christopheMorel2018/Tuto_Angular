import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {

  private users: User[] = [
    {firstName: 'Christophe',
    lastName: 'Morel',
    email:'christophe@morel',
    drinkPreferences: 'Coca',
    hobbies:[
      'Football', 'Cinéma'
    ]}
  ];
  userSubject = new Subject<User[]>();

  emitUsers()
  {
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }

  constructor() { }
}
