import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course.model';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css']
})
export class MyCoursesComponent {
  courses: Course[] = [
    new Course("Green River", 72),
    new Course("North Shore", 71)
  ];
}
