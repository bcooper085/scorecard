import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../../course.model';
import { CourseService } from '../../course.service';
import { FirebaseListObservable } from 'angularfire2/database';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-my-courses',
  templateUrl: './my-courses.component.html',
  styleUrls: ['./my-courses.component.css'],
  providers: [CourseService]
})

export class MyCoursesComponent implements OnInit {
  addMyCourse: boolean;
  courses: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;


  constructor(private router: Router, private courseService: CourseService, public flashMessage: FlashMessagesService){}

  ngOnInit(){
    this.courses = this.courseService.getCourses();
    this.addMyCourse = false;
  }

  goToDetailPage(clickedCourse) {
    this.router.navigate(['course', clickedCourse.$key]);
  }

  submitForm(name: string, scores: number, coursePar: number, image: any) {
    var newCourse: Course = new Course(name, scores, coursePar, image);
    this.courseService.addCourse(newCourse);
    this.flashMessage.show('Course Added', {cssClass: 'alert-success', timeout: 3000});
  }

  addTheCourse(){
    this.addMyCourse = !this.addMyCourse;
  }

}
