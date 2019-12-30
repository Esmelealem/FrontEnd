//Main Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Material Module
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule,
        MatListModule,
        MatGridListModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatIconModule,  
        MatCardModule } from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {FormsModule }  from '@angular/forms';
//Services 
import {LoginService} from '././Services/Login.Service';
import {UploadImageService} from '././Services/upload-image.service';
import {AddBookService} from '././Services/add-book.service';
import {CoursesServiceService} from './courses-service.service';
//Components
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddNewBooksComponent } from './add-new-books/add-new-books.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    HomeComponent,
    ContactComponent,
    NavBarComponent,
    LoginComponent,
    AddNewBooksComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatMenuModule, 
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    HttpClientModule,
    MatListModule,
    MatGridListModule,
    MatInputModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [
    CoursesServiceService,
    LoginService,
    AddBookService,
    UploadImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
