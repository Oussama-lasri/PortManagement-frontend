
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SignInReq } from '../../../_models/requests/sign-in-req';
import { beginSignIn } from '../../../Store/User.action';
import { AuthenticationService } from '../../../_services/authentication-service.service';
import { selectStateTest } from '../../../Store/User.selectors';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  stats$ : Observable<string> ;

  constructor(
    //private toastr: ToastrService,
     private auth : AuthenticationService,
     private store : Store
     ){
      this.stats$ = this.store.select(selectStateTest);
  }

  ngOnInit(): void {
    //this.showSuccess(); toast
  }
  signInForm = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })


  submitForm() {
    const signInReq :SignInReq = {
      email : this.signInForm.get("email")!.value ?? '',
      password : this.signInForm.get("password")!.value ?? ''
    }

    this.store.dispatch(beginSignIn({userData:signInReq}))


    // this.auth.signIn(signInReq).subscribe({
    //   next : (res) => {
    //     console.log(res)
    //   },
    //   error : (err) =>{
    //     console.log(err)
    //   }
    // }
      
    // )

    
  }
  

}