import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: Observable<firebase.User>;


  constructor(private router: Router, public flashMessage: FlashMessagesService, public afAuth: AngularFireAuth){
    this.user = afAuth.authState;
  }

  goToMyCourses() {
    this.router.navigate(['mycourses']);
  };

  goHome() {
    this.router.navigate(['']);
  };

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['/']);
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
    this.flashMessage.show('You are logged out', {cssClass: 'alert-success', timeout: 3000});
  }
}
