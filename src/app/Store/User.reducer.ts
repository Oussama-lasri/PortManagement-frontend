import { createReducer, on } from "@ngrx/store";
import { badCredSuccess, setUser } from "./User.action";

import * as UserActions from './User.action';
import { UserState } from "./User.state";


export interface UserState {
  user: any;
}

export const initialState: UserState = {
  user: null
  // user: {
  //     id : 0 ,
  //     name : "" ,
  //     email : "" ,
  //     role : "" ,
  // } ,
};
export interface AppState {
  stateTest: string;
}

export const initialState2: AppState = {
  stateTest: "initialState"
};


export const stateTestReducer = createReducer(
  initialState2,
  on(UserActions.changeState, (state, { stateTest }) => ({ ...state, stateTest }))
)



export const userReducer = createReducer(
  initialState,
  on(UserActions.setUser, (state, { user }) => ({ ...state, user }))
);

const _userReducer = createReducer(UserState,
  on(UserActions.badCredSuccess, (state, action) => {
    return { ...state, badCred: action.badCred }
  }))

export function UserReducer(state: any, action: any) {
  return _userReducer(state, action);
}