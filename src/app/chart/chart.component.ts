import { Component, OnInit } from '@angular/core';
import { ChartService } from '../services/chart.service';
import { Root } from '../interfaces/chart.interface';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.scss'
})
export class ChartComponent implements OnInit {

  protected barChartObject: { categories: string[], dataList: any[] } = {
    categories: [],
    dataList: []
  }

  ngOnInit(): void {
  }

  constructor(private chartService: ChartService) { }

  protected async getBarChartData() {
    this.chartService.getBarChartData().subscribe({
      next: (data: Root) => {
        console.log(data)
        const series: any[] = data.series
        const categories: string[] = series[0].data.map((m: any) => m.x)
        const dataList: any[] = series.map(dataset => {
          return dataset.data.map((m: any) => m.value)
        })
        this.barChartObject = {
          categories: categories,
          dataList: dataList
        }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }
}
