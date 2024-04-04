import { createEntityAdapter } from "@ngrx/entity";
import { SignInReq, UserModel } from "../_models/requests/sign-in-req";


export const UserAdapter = createEntityAdapter<SignInReq>();

export const UserState:UserModel = UserAdapter.getInitialState({
    badCred: false 
});