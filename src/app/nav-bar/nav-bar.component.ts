import { Component, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material';
import {Router} from '@angular/router';
import {LoginService} from '.././Services/Login.Service';
//import {md-toolbar} from '@angular/material';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  private loggedIn=false;
  constructor(private loginService: LoginService, private router:Router) { }
  
  toggleDisplay() {
  	this.loggedIn = !this.loggedIn;
  }

 
  //logout Session
      logout()
      {
        this.loginService.logout().subscribe(
          res => {

          location.reload();
              },
          error => {
            console.log(error);
            
          }          
        );
        this.router.navigate(['/']);
      }
  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
         this.loggedIn = true;
          },
          error => {

         this.loggedIn=false;
      }
    );
   }
 
  }


