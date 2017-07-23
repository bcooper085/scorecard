import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css'],
  providers: [CourseService]
})

export class MyCoursesComponent implements OnInit {
  courses: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private courseService: CourseService){}

  ngOnInit(){
    this.courses = this.courseService.getCourses();
  }

  goToDetailPage(clickedCourse) {
    this.router.navigate(['courses', clickedCourse.$key]);
  }

  submitForm(name: string, score: number, coursePar: number) {
    var newCourse: Course = new Course(name, score, coursePar);
    this.courseService.addCourse(newCourse);
  }
}
