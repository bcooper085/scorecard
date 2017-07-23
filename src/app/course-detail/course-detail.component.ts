import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../course.model';
import { CourseService } from '../course.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  providers: [CourseService]
})

export class CourseDetailComponent implements OnInit {
  courseId;
  getCourse;

  constructor(private route: ActivatedRoute, private location: Location, private courseService: CourseService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.courseId = urlParameters['id'];
    });

    this.getCourse = this.courseService.getCourseById(this.courseId);
  }

}
