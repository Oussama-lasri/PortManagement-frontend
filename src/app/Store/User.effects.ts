import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { badCred, badCredSuccess, beginSignIn, beginSignUp, checkEmail ,changeState } from "./User.action";
import { catchError, exhaustAll, map, of, switchMap } from "rxjs";
import { Router } from "@angular/router";
import { JwtHelperService  } from "@auth0/angular-jwt";
import Swal from "sweetalert2";
import { AuthenticationService } from "../_services/authentication-service.service";

@Injectable()
export class UserEffect {

    constructor(
        private action$: Actions,
        private authService: AuthenticationService,
        private router: Router,
        private jwtHelper : JwtHelperService
        ) {

    }

    _userSignIn = createEffect(() =>
        this.action$.pipe(
            ofType(beginSignIn),
            switchMap((action) => {
                console.log(action);
                return this.authService.signIn(action.userData).pipe(
                    map((data) => {
                        console.log("token => ");
                        console.log(data)
                        //this.jwtHelper.decodeToken(data.token)
                        this.authService.decodedToken()
                        this.router.navigate(['/']);
                        return showalert({ message: 'signup successfully.', resulttype: 'pass' })
                    }),
                    catchError((err) => {
                        //showalert({ message: 'signup Failed due to :.' + err.error.message, resulttype: 'fail' })
                        console.log(err);
                        //alert(err.error.message)
                        Swal.fire({
                            title: err.error.message,
                            text:   "Your password or email incorrect.",    
                            icon: "warning"
                          });
                        return of(showalert({ message: 'signup Failed due to :.' + err.error.message, resulttype: 'fail' }));
                    })
                )
            })
        )
    )


    _userSignUp = createEffect(() =>
        this.action$.pipe(
            ofType(beginSignUp),
            switchMap((action) => {
                console.log(action);
                return this.authService.signUp(action.userData).pipe(
                    map(() => {
                        this.router.navigate(['authentication/signin']);
                        return showalert({ message: 'Registered successfully.', resulttype: 'pass' })
                    }),
                    catchError((err) => {

                        alert(err.error.message);
                        return of(showalert({ message: 'Registerion Failed due to :.' + err.message, resulttype: 'fail' }));
                    })
                )
            })
        )
    )


    _userCred = createEffect(() =>
        this.action$.pipe(
            ofType(badCred),
            switchMap((action) => {
                console.log(action);
                return this.authService.signIn(action.userData).pipe(
                    map((data) => {
                        return of(badCredSuccess({ badCred: true })), showalert({ message: '.', resulttype: 'pass' })

                    }),
                    catchError((err) => {
                        console.log(err.error.message);
                        alert(err.error.message)
                        return of(showalert({ message: 'Registerion Failed due to :.' + err.message, resulttype: 'fail' }));
                    })
                )
            })
        )
    )


    _checkEmail = createEffect(() => {
        return this.action$.pipe(
            ofType(checkEmail),
            switchMap((action) => {
                return this.authService.checkEmail(action.email).pipe(
                    map((data) => {
                        return of(badCredSuccess({ badCred: true })), (changeState({stateTest : "changed with success"})) ,(showalert({ message: '', resulttype: 'pass' }));
                    }),
                    catchError((err) => {
                        
                        return of(showalert({ message: 'Registerion Failed due to :.' + err.message, resulttype: 'fail' }));
                    })
                );


            })

        );
    })





}

function showalert(arg0: { message: string; resulttype: string; }): any {
    throw new Error("Function not implemented.");
}
