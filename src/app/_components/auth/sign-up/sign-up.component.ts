import { state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as UserAction from '../../../Store/User.action';

import { haveBadCred, selectUserState } from '../../../Store/User.selectors';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../../../_services/authentication-service.service';
import { SignUpReq } from '../../../_models/requests/sign-up-req';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  stats$ : Observable<string> ;
  constructor( private auth : AuthenticationService , private store : Store ){
    this.stats$ = this.store.select(selectStateTest);

  }
  ngOnInit(): void {
    
  }



  signUpForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    name: new FormControl(null, [Validators.required]),
  })

  submitForm(){

    const signUpReq : SignUpReq = {
      email : this.signUpForm.get("email")!.value ?? '',
      password : this.signUpForm.get("password")!.value ?? '',
      name :this.signUpForm.get("email")!.value ?? '' ,
      role : "USER" 
    }

      this.store.dispatch(UserAction.beginSignUp({userData:signUpReq }))
      console.log(this.store.select(selectStateTest));
      
    

  }

  checkEmail() {
    const email =  this.signUpForm.get("email")!.value ?? ''
    if (email) {
      this.store.dispatch(UserAction.checkEmail({email:email }));
      console.log(this.store.select(haveBadCred));
    }
  }

}

function selectStateTest(state: object): string {
  throw new Error('Function not implemented.');
}
