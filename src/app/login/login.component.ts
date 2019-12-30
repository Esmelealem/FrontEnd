import { Component, OnInit } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse
} from "@angular/common/http";
import { LoginService } from ".././Services/Login.Service";
//import { HttpClient } from '@angular/common/http';

//import { HttpClientJsonpModule} from '@angular/common/http';
//import { Token } from '@angular/compiler';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  private credential = { username: "", password: "" };
  private loggedIn: boolean;

  constructor(private loginService: LoginService) {}

  onSubmit() {
    this.loginService
      .sendCredential(this.credential.username, this.credential.password)
      .subscribe(
        res => {
          console.log(res);
          //localStorage.setItem("xAuthToken", JSON.stringify("token"));
          localStorage.setItem("xAuthToken", JSON.stringify("token"));
          this.loggedIn = true;
          //location.reload();
        },
        error => {
          console.log(error);
        }
      );
  }

  ngOnInit() {
    this.loginService.checkSession().subscribe(
      res => {
        this.loggedIn = true;
      },
      error => {
        this.loggedIn = false;
      }
    );
  }
}
