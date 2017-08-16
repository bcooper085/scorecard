import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { Score } from './score.model';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class CourseService {
  courses: FirebaseListObservable<any[]>;
  course: FirebaseObjectObservable<any[]>;
  scores: FirebaseListObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.courses = af.list('courses');
    this.course = af.object('course/id')
    this.scores = af.list('scores');
  }

  getCourses(){
    return this.courses;
  }

  getScores(){
    return this.scores;
  }

  addCourse(newCourse: Course){
    this.courses.push(newCourse)
  }

  getCourseById(courseId: string){
    return this.af.object('courses/' + courseId);
  }

  getCourseAsList(courseId: string){
    return this.af.list('courses/' + courseId);
  }

  getCourseDetails(courseId: string){
    return this.af.object('/courses/' + courseId) as FirebaseObjectObservable<Course>
  }

  addScore(newScore: Score){
    this.scores.push(newScore)
  }

  updateCourse(thisCourse){
    var firebaseCourse = this.getCourseById(thisCourse.$key);
    firebaseCourse.update({name: thisCourse.name, coursePar: thisCourse.coursePar});
  }

  deleteCourse(thisCourseDelete){
    var firebaseCourse = this.getCourseById(thisCourseDelete.$key);
    firebaseCourse.remove();
  }

}
