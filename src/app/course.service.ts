import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class CourseService {
  courses: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.courses = database.list('courses');
  }

  getCourses(){
    return this.courses;
  }

  addCourse(newCourse: Course){
    this.courses.push(newCourse)
  }

  // addScore(thisCourse, scores){
  //   var firebaseCourse = this.getCourseById(thisCourse.$key);
  //   firebaseCourse.push({scores: thisCourse.scores});
  // }

  getCourseById(courseId: string){
    return this.database.object('courses/' + courseId);
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
