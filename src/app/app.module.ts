import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from "@angular/router";
import { MyCoursesComponent } from './my-courses/my-courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';

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
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
