import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../../course.model';
import { CourseService } from '../../course.service';
import { FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  providers: [CourseService]
})

export class CourseDetailComponent implements OnInit {
  courseId: any;
  getCourse: any;
  course: any;

  constructor(private route: ActivatedRoute, private location: Location, private courseService: CourseService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.courseId = urlParameters['id'];
    });

    this.courseService.getCourseDetails(this.courseId).subscribe(course => {
      this.course = course;
      console.log(course)
    })

    this.getCourse = this.courseService.getCourseById(this.courseId);

  }

  // submitScore(scores){
  //   this.courseService.addScore(scores)
  // }

}
