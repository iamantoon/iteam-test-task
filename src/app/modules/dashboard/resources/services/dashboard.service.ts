import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assessment } from '../models/assessment.model';
import { Graph } from '../models/graph.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private readonly baseUrl = 'https://user-assessment-api.vercel.app/api/userassessments/';

  constructor(private http: HttpClient) {}

  loadAssessments(){
    return this.http.get<Assessment[]>(this.baseUrl);
  }

  loadDataForGraph(id: number){
    let params = new HttpParams();

    params = params.append('id', id);

    return this.http.get<Graph>(this.baseUrl + 'graph', {params});
  }
}