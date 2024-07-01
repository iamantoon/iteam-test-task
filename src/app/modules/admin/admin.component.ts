import { Component, OnInit } from '@angular/core';
import { User } from './resources/models/admin.model';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store';
import * as AdminActions from './state/admin.actions';
import * as AdminSelectors from './state/admin.selectors';
import * as AuthActions from './../auth/state/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  users$: Observable<User[]> | null = null;
  public readonly columns: Array<keyof User> = ['name', 'lastName', 'dateOfBirth', 'education', 'role', 'position'];
  
  constructor(private store: Store<AppState>, private router: Router){}

  ngOnInit(): void {
    this.store.dispatch(AdminActions.loadUsers());
    this.users$ = this.store.select(AdminSelectors.selectUsers);
  }

  goBack(){
    this.router.navigate(['/dashboard']);
  }

  logout(){
    this.store.dispatch(AuthActions.logout());
  }
}