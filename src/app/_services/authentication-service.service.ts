import { Injectable } from '@angular/core';
import { SignInReq } from '../_models/requests/sign-in-req';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { SignUpReq } from '../_models/requests/sign-up-req';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment.development';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  signIn(req: SignInReq ) {
    return this.http.post<any>(`${environment.apiUrl}/auth/signIn`, req, httpOptions);
  }


  signUp(req: SignUpReq ) {
    return this.http.post<any>(`${environment.apiUrl}/auth/signUp`, req, httpOptions);
  }

  checkEmail(email : string){
    let params = new HttpParams().set('email', email);
    return this.http.post<any>(`${environment.apiUrl}/auth/checkEmail`,params)
    // .subscribe(
    //   response => {
    //     alert("response");
    //     console.log(response)
    //   },
    //   error => {
    //     alert("error")
    //     console.log(error)
    //     // todo  Handle errors
    //   }
    // )

  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }

  getToken(){
    console.log(localStorage.getItem('token'));
    return localStorage.getItem('token')
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  decodedToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token))
    return jwtHelper.decodeToken(token)
  }

}