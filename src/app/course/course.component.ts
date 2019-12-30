import { Component, OnInit } from '@angular/core';
import { CoursesServiceService } from '../courses-service.service';

@Component({
  selector: 'app-course',
 //templateUrl: './course.component.html',
  template: `<h2>{{title}}
            <ul>
            <li *ngFor="let courses  of course">
            {{courses}}</li>
            </ul>
            </h2>`,
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  title ="List of Courses";
  course;
  constructor(service: CoursesServiceService) {
    this.course=service.getCourses();
   }
   

  ngOnInit() {
  }

}
