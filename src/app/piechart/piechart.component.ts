import { Component, OnInit } from '@angular/core';

export interface ISector {
  p: number;
  color: string;
  offset?: number;
}

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent implements OnInit {
  sectors: ISector[] = [
    { p: 20, color: 'blue' },
    { p: 50, color: 'red' },
    { p: 30, color: 'green' },
  ];

  constructor() {}

  ngOnInit(): void {
    // calculate stroke-dashoffset
    this.sectors[0].offset = 0;
    for (let i = 1; i < this.sectors.length; i++) {
      this.sectors[i].offset =
        this.sectors[i - 1].offset - this.sectors[i - 1].p;
    }

    this.change(20, 50, 30);
  }

  spin(): void {
    this.change(30, 40, 30);
  }

  spin2(): void {
    this.change(1, 4, 95);
  }

  change(n1, n2, n3): void {
    var val1D = document.getElementById('donut-segment1');
    var val2D = document.getElementById('donut-segment2');
    var val3D = document.getElementById('donut-segment3');
    var per1 = n1;
    var per2 = n2;
    var per3 = n3;
    var offset = 25;

    val1D.style.transition =
      'stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out';
    val1D.style.strokeDasharray = per1 + ' ' + (100 - per1);
    val1D.style.strokeDashoffset = offset + '';

    val2D.style.transition =
      'stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out';
    val2D.style.strokeDasharray = per2 + ' ' + (100 - per2);
    val2D.style.strokeDashoffset = 100 - per1 + offset + '';

    val3D.style.transition =
      'stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out';
    val3D.style.strokeDasharray = per3 + ' ' + (100 - per3);
    val3D.style.strokeDashoffset = 100 - (per1 + per2) + offset + '';
  }
}
