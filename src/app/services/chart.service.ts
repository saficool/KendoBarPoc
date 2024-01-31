import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Root } from '../interfaces/chart.interface';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private apiUrl: string = "https://localhost:7216"

  constructor(private http: HttpClient) { }

  getBarChartData(): Observable<Root> {
    return this.http.get<Root>(`${this.apiUrl}/api/BarChart/GetBarChartData`);
  }
}
