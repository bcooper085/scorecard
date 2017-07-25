import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { masterFirebaseConfig } from './api-keys';
import { CourseService } from './course.service';
import * as firebase from 'firebase/app';

import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from "@angular/router";
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';
import { EditCourseComponent } from './components/edit-course/edit-course.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
};


const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'mycourses', component: MyCoursesComponent },
  { path: 'courses/:id', component: CourseDetailComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MyCoursesComponent,
    CourseDetailComponent,
    EditCourseComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})


export class AppModule { }
