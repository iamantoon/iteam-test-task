import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { AssessmentReportComponent } from './assessment-report/assessment-report.component';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromDashboard from './state/dashboard/dashboard.reducer';
import * as fromReportAssessment from './state/assessment-report/assessment-report.reducer';
import { DashboardEffects } from './state/dashboard/dashboard.effects';
import { ReportAssessmentEffects } from './state/assessment-report/assessment-report.effects';

@NgModule({
  declarations: [
    DashboardComponent,
    AssessmentReportComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    DashboardRoutingModule,
    StoreModule.forFeature(fromDashboard.dashboardFeatureKey, fromDashboard.reducer),
    StoreModule.forFeature(fromReportAssessment.reportAssessmentFeatureKey, fromReportAssessment.reducer),
    EffectsModule.forFeature([DashboardEffects, ReportAssessmentEffects]),
  ]
})
export class DashboardModule {}