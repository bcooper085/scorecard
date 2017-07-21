import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from "@angular/router";
import { MyCoursesComponent } from './my-courses/my-courses.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'mycourses', component: MyCoursesComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MyCoursesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
