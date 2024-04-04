import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PortManagement-frontend';
  showSidebar: boolean = false;
  constructor(private router: Router) {

    if(window.location.pathname == "/" 
    || location.pathname == "/authentication/signin" 
    || location.pathname == "/authentication/signup" 
    || location.pathname == "/unauthorized" ){
      this.showSidebar = true ;
    }
  }
}
