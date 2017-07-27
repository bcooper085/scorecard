import { Component, OnInit, Input } from '@angular/core';
import { Course } from '../../course.model';
import { CourseService } from '../../course.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrls: ['./edit-course.component.css'],
  providers: [CourseService]
})
export class EditCourseComponent implements OnInit {
  @Input() selectedCourse;
  editCourse: boolean;

  constructor(private courseService: CourseService){}

  ngOnInit() {
    this.editCourse = false;
  }

  submitCourseUpdate(thisCourse){
    this.courseService.updateCourse(thisCourse);
  }

  submitCourseDelete(thisCourseDelete){
    this.courseService.deleteCourse(thisCourseDelete);
  }

  expand(){
    this.editCourse = !this.editCourse;
  }

}
