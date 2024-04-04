

import { createAction , props } from "@ngrx/store";
import { SignInReq } from "../_models/requests/sign-in-req";
import { SignUpReq } from "../_models/requests/sign-up-req";
import { User } from "../_models/responses/user";


export const BEGIN_SIGNIN = '[auth] begin sign in ' ;
export const BEGIN_SIGNUP = '[auth] begin sign up' ;
export const BAD_CRED = '[user] bad user cred ' ;
export const BAD_CRED_SUCC = '[user] bad user cred success' ;
export const CHECK_EMAIL = '[user] check user' ;
export const STATE_CHANGED = '[test] CHANGE STATE' ;
// export const CHECK_EMAIL = '[user] check user' ;

export const SET_USER_FROM_JWT = '[User] Set User'

export const beginSignIn = createAction(BEGIN_SIGNIN,props<{userData: SignInReq}>());
export const beginSignUp = createAction(BEGIN_SIGNUP,props<{userData: SignUpReq}>());
export const badCred = createAction(BAD_CRED,props<{userData: SignUpReq}>());
export const badCredSuccess = createAction(BAD_CRED_SUCC,props<{badCred:boolean}>());
export const checkEmail = createAction(CHECK_EMAIL,props<{email:string}>());



export const setUser = createAction(SET_USER_FROM_JWT, props<{ user: User }>());
export const changeState = createAction(STATE_CHANGED,props<{stateTest:string}>())  