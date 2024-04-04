import { EntityState } from "@ngrx/entity";

export interface SignUpReq {
    name: string;
    email: string;
    password: string;
    role: string;
}
export interface UserModel extends EntityState<SignUpReq>{
    badCred:boolean
}
