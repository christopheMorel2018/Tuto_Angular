import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private userService: UserService,
              private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.userForm = this.formBuilder.group(
      {
        firstName: ['', Validators.required],
        lastName: ['',Validators.required],
        email: ['',[Validators.required, Validators.email]],
        drinkPreference: ['',Validators.required],
        hobbies: this.formBuilder.array([])
      });
  }

  onSubmit(){
    const newUser = new User(
      this.userForm.value['firstName'],
      this.userForm.value['lastName'],
      this.userForm.value['email'],
      this.userForm.value['drinkPreference'],
      this.userForm.value['hobbies'] ? this.userForm.value['hobbies'] : []
    );
    this.userService.addUser(newUser);
    this.userService.saveUsersToServer();
    this.router.navigate(['/users']);
  }

  

  getHobbies(){
    return this.userForm.get('hobbies') as FormArray;
  }

  onAddHobby(){
    const newHobbyControl = this.formBuilder.control('',Validators.required);
    this.getHobbies().push(newHobbyControl);
  }

}
