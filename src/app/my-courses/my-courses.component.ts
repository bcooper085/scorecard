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
    new Course("Green River", 92, 72, 1),
    new Course("North Shore", 96, 71, 2)
  ];

  constructor(private router: Router){}

  goToDetailPage(clickedCourse) {
    this.router.navigate(['courses', clickedCourse.id]);
  };
}
