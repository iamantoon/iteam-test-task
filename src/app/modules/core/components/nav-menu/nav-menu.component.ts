import { Component, OnInit } from '@angular/core';
import * as AuthSelectors from './../../../auth/state/auth.selectors';
import * as AuthActions from './../../../auth/state/auth.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import { Role } from 'src/app/modules/auth/resources/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.scss']
})
export class NavMenuComponent implements OnInit {
  role$!: Observable<Role | null>;
  Role = Role;

  constructor(private store: Store<AppState>, private router: Router){}

  ngOnInit(): void {
    this.role$ = this.store.select(AuthSelectors.selectUserRole);
  }

  goToAdminPage(): void {
    this.router.navigate(['/admin']);
  }

  goBack(): void {
    this.router.navigate(['/dashboard']);
  }

  logout(): void {
    this.store.dispatch(AuthActions.logout());
  }

  isDashboardRoute(): boolean {
    return this.router.url === '/dashboard';
  }

  isAdminRoute(): boolean {
    return this.router.url === '/admin';
  }
}