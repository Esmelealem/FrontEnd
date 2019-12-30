import { Component, OnInit } from "@angular/core";
import { Book } from "../Models/Book";
import { AddBookService } from "../Services/add-book.service";
import { UploadImageService } from "../Services/upload-image.service";
@Component({
  selector: "app-add-new-books",
  templateUrl: "./add-new-books.component.html",
  styleUrls: ["./add-new-books.component.css"]
})
export class AddNewBooksComponent implements OnInit {
  private newBook: Book = new Book();
  private bookAdded: boolean;
  constructor(
    private addBookService: AddBookService,
    private uploadImage: UploadImageService
  ) {}

  onSubmit() {
    this.addBookService.sendBook(this.newBook).subscribe(
      res => {
        //this.uploadImage.upload(JSON.parse(JSON.parse(JSON.stringify(res)). _body).id);
        this.uploadImage.upload(
          JSON.parse(JSON.parse(JSON.stringify(res))._body).id
        );
        this.bookAdded = true;
        this.newBook = new Book();
        this.newBook.category = "management";
        this.newBook.language = "English";
        this.newBook.format = "paperback";
      },
      error => {
        console.log(error);
      }
    );
  }
  ngOnInit() {
    this.bookAdded = false;
    this.newBook.active = true;
    this.newBook.category = "management";
    this.newBook.language = "English";
    this.newBook.format = "paperback";
  }
}
