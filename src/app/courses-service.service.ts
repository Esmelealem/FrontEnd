import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesServiceService {
  getCourses()
  {
    return ["Course 1","Course2","Course3"];

  }

  constructor() { }
}
