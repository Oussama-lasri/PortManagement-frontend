import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './_components/auth/sign-in/sign-in.component';
import { SignUpComponent } from './_components/auth/sign-up/sign-up.component';
import { HomeComponent } from './_components/home/home.component';

const routes: Routes = [

  //{ path: "", redirectTo: "/", pathMatch: "full" },
  { path: "", component: HomeComponent },
  // route auth
  {
    path: 'authentication', children: [
      { path: "signin", component: SignInComponent },
      { path: "signup", component: SignUpComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
