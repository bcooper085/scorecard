import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Course } from '../../course.model';
import { Score } from '../../score.model';
import { CourseService } from '../../course.service';
import { FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css'],
  providers: [CourseService]
})

export class CourseDetailComponent implements OnInit {
  scores: FirebaseListObservable<any[]>;
  courseId: any;
  getCourse: any;
  course: any;

  constructor(private route: ActivatedRoute, private location: Location, private courseService: CourseService) { }

  ngOnInit() {
    this.scores = this.courseService.getScores()

    this.route.params.forEach((urlParameters) => {
      this.courseId = urlParameters['id'];
    });

    this.courseService.getCourseDetails(this.courseId).subscribe(course => {
      this.course = course;
      console.log(course)
    })

    this.getCourse = this.courseService.getCourseById(this.courseId);
  }

  submitScore(score: number){
    // var today = Date.now();
    var date = new Date()
    var newScore: Score = new Score (score, date)
    this.courseService.addScore(newScore)
  }

}
