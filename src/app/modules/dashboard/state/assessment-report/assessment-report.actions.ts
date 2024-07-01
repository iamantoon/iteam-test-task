import { createAction, props } from '@ngrx/store';
import { Graph } from '../../resources/models/graph.model';

export const loadReportAssessment = createAction(
  '[AssessmentReport Component] Load Report Assessment',
  props<{ id: number }>()
);

export const loadReportAssessmentSuccess = createAction(
  '[AssessmentReport Component] Load Report Assessment Success',
  props<{ data: Graph }>(),
);

export const loadReportAssessmentFailure = createAction(
  '[AssessmentReport Component] Load Report Assessment Failure',
  props<{ error: string }>(),
);