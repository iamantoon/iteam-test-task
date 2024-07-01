import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AssessmentReportComponent } from './assessment-report/assessment-report.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: ':id', component: AssessmentReportComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}