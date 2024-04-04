import { state } from "@angular/animations";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState, UserState } from "./User.reducer";
import { UserModel } from "../_models/requests/sign-up-req";

const getUserState = createFeatureSelector<UserModel>('user');

export const haveBadCred = createSelector(getUserState,(state)=> state.badCred) 


export const selectUserState = createFeatureSelector<UserState>('user');

// Create a selector to get the user information
export const selectUser = createSelector(
  selectUserState,
  (state: UserState) => state.user
);

export const selectFeatureState = createFeatureSelector<AppState>('stateTest');

// Define selectors for specific pieces of state
export const selectStateTest = createSelector(
  selectFeatureState,
  (state: AppState) => state.stateTest
);