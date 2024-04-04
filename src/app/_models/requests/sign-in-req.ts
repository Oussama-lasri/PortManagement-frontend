import { EntityState } from "@ngrx/entity";

export interface SignInReq {
    email: string;
    password: string;
}
export interface UserModel extends EntityState<SignInReq>{
    badCred:boolean
}
