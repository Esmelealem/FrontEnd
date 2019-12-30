import { Injectable } from "@angular/core";
import { Book } from "../Models/book";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class AddBookService {
  constructor(private http: HttpClient) {}
  sendBook(book: Book) {
    let url = "http://localhost:8282/book/add";

    let headers = new HttpHeaders({
      //Headers
      "Content-Type": "application/json",
      "X-auth-token": localStorage.getItem("xAuthToken")
    });
    //return this.http.post(url, {headers: headers});//'' empty string is here JSON.stringify(book),
    return this.http.post(url, JSON.stringify(book), { headers: headers });
  }
}
