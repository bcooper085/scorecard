import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../course.model';
import { CourseService } from '../../course.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
  providers: [CourseService]
})
export class EditCourseComponent implements OnInit {
  @Input() selectedCourse;
  editCourse: boolean;

  constructor(private courseService: CourseService, private router: Router){}

  ngOnInit() {
    this.editCourse = false;
  }

  submitCourseUpdate(thisCourse){
    this.courseService.updateCourse(thisCourse);
  }

  submitCourseDelete(thisCourseDelete){
    this.courseService.deleteCourse(thisCourseDelete);
    this.router.navigate(['mycourses']);
  }

  expand(){
    this.editCourse = !this.editCourse;
  }

}
