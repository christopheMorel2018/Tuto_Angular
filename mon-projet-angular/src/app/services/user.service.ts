import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  private users: User[] = [];
  userSubject = new Subject<User[]>();

  emitUsers()
  {
    this.userSubject.next(this.users.slice());
  }
  addUser(user: User){
    this.users.push(user);
    this.emitUsers();
  }

  constructor(private httpClient: HttpClient) { }

  saveUsersToServer(){
    this.httpClient.put('https://http-client-demo-18d7a.firebaseio.com/users.json',this.users)
                        .subscribe(
                          () => {
                            console.log('Enregistrement terminé');
                          },
                          (error) => {
                            console.log('Erreur lors de l\'enregistrement : '+error);
                          }
                        )
  }

  getUsersFromServer(){
    this.httpClient.get<User[]>('https://http-client-demo-18d7a.firebaseio.com/users.json')
                    .subscribe(
                      (response) => {
                        this.users=response;
                      this.emitUsers()
                    },
                      (error) => {
                        console.log('Erreur de chargement : '+error);
                      }
                    )
  }
}
