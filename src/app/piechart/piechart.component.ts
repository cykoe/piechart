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
  }
}
