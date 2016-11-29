import {Component} from "@angular/core";
import { ChartsModule } from 'ng2-charts/ng2-charts';

@Component({
    selector:"area-chart",
     styles: [`
      chart {
        display: block;
      }
    `],
    template:`<base-chart
      class="chart"
      [datasets]="datasets"
      [labels]="labels"
      [options]="options"
      [chartType]="'line'">
    </base-chart>`
})
export class AreaChartComponent {
private datasets = [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3]
    }
  ];

  private labels = ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

  private options = {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
}