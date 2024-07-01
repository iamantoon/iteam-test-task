import { Component, OnDestroy, OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { ActivatedRoute } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store';
import * as AssessmentReportSelector from './../state/assessment-report/assessment-report.selectors';
import * as AssessmentReportActions from './../state/assessment-report/assessment-report.actions';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-assessment-report',
  templateUrl: './assessment-report.component.html',
  styleUrls: ['./assessment-report.component.scss']
})
export class AssessmentReportComponent implements OnInit, OnDestroy {
  chartData: ChartData = {
    datasets: []
  };

  chartSubscription: Subscription | null = null;

  public type: ChartType = 'bar';

  public chartOptions: ChartOptions = {
    responsive: true,
  };

  constructor(private store: Store<AppState>, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    const id: string | null = this.activatedRoute.snapshot.paramMap.get('id');
    if (id) this.store.dispatch(AssessmentReportActions.loadReportAssessment({ id: +id }));
    
    this.chartSubscription = this.store.pipe(select(AssessmentReportSelector.selectReportAssessment)).subscribe(data => {
      if (data) {
        this.chartData = {
          labels: Object.keys(data.data),
          datasets: [
            {
              data: Object.values(data.data),
              label: 'Degree of characteristic',
              tension: 0.8,
              backgroundColor: [
                'rgba(63, 81, 181, 0.7)', 
                'rgba(153, 102, 255, 0.7)', 
                'rgba(51, 204, 255, 0.7)', 
                'rgba(37, 150, 190, 0.7)'
              ]
            }
          ]
        };
        this.type = data.type as ChartType;
      }
    });
  }

  ngOnDestroy(): void {
    this.chartSubscription?.unsubscribe();
  }
}