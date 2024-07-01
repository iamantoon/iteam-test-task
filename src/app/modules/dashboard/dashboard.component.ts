import { Component, OnInit } from '@angular/core';
import { Assessment } from './resources/models/assessment.model';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as DashboardActions from './state/dashboard/dashboard.actions';
import * as DashboardSelectors from './state/dashboard/dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  reportAssessments$!: Observable<Assessment[]> | null;
  public readonly displayedColumns: Array<keyof Assessment> = ['id', 'name', 'users_resolved', 'active', 'image_url'];

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(DashboardActions.loadReportAssessments());
    this.reportAssessments$ = this.store.select(DashboardSelectors.selectReportAssessments);
  }
}