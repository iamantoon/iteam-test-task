import { Component, OnInit } from '@angular/core';
import { AuthUser } from './modules/auth/resources/models/user.model';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/index';
import { loginSuccess } from './modules/auth/state/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private store: Store<AppState>, private router: Router){}

  ngOnInit(): void {
    this.setCurrentUser();
    const userString = localStorage.getItem('authUser');
    if (userString) {
      const user = JSON.parse(userString);
      if (user) {
        this.router.navigate(['/dashboard']);
      } else {
        this.router.navigate(['/auth/login']);
      }
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  setCurrentUser(){
    const userString = localStorage.getItem('authUser');
    if (!userString) return;
    const user: AuthUser = JSON.parse(userString);
    this.store.dispatch(loginSuccess({ authUser: user }));
  }
} 