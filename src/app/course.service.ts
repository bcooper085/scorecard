import { Injectable } from '@angular/core';
import { Course } from './course.model';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable  } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';


@Injectable()
export class CourseService {
  courses: FirebaseListObservable<any[]>;
  course: FirebaseObjectObservable<any[]>;

  constructor(private af: AngularFireDatabase) {
    this.courses = af.list('courses');
    this.course = af.object('course/id')
  }

  getCourses(){
    return this.courses;
  }

  addCourse(newCourse: Course){
    this.courses.push(newCourse)
  }

  // addScore(scores){
  //   this.course.push({scores: scores});
  // }

  getCourseById(courseId: string){
    return this.af.object('courses/' + courseId);
  }

  getCourseDetails(courseId: string){
    return this.af.object('/courses/' + courseId) as FirebaseObjectObservable<Course>
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
