import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grfico-dona',
  templateUrl: './grfico-dona.component.html',
  styleUrls: ['./grfico-dona.component.css']
})
export class GrficoDonaComponent implements OnInit {

  @Input() doughnutChartLabels: string[] = [];
  @Input() doughnutChartData: number[] = [];
  @Input() doughnutChartType: string = '';

  constructor() { }

  ngOnInit() {
  }

}
