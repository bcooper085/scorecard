import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //Login Routing

  constructor(private router: Router){}

  goToMyCourses() {
    this.router.navigate(['mycourses']);
  };

  goHome() {
    this.router.navigate(['']);
  };
}
