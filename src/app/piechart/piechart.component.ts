import { Component, OnInit } from '@angular/core';

export interface ISector {
  p: number;
  color: string;
  offset?: number;
  array?: string;
}

@Component({
  selector: 'app-piechart',
  templateUrl: './piechart.component.html',
  styleUrls: ['./piechart.component.scss'],
})
export class PiechartComponent implements OnInit {
  //sectors: ISector[] = [
  //{ p: 20, color: '#1e8e3e' },
  //{ p: 50, color: '#f9ab00' },
  //{ p: 30, color: '#d93025' },
  //];
  sectors: ISector[] = [
    { p: 10, color: '#1e8e3e' },
    { p: 20, color: 'blue' },
    { p: 30, color: 'purple' },
    { p: 15, color: '#f9ab00' },
    { p: 25, color: '#d93025' },
  ];

  constructor() {}

  ngOnInit(): void {
    // calculate stroke-dashoffset
    this.sectors[0].offset = 25;
    this.sectors[0].array = `${this.sectors[0].p} ${100 - this.sectors[0].p}`;
    for (let i = 1; i < this.sectors.length; i++) {
      this.sectors[i].offset =
        this.sectors[i - 1].offset - this.sectors[i - 1].p;
      this.sectors[i].array = `${this.sectors[i].p} ${100 - this.sectors[i].p}`;
    }
  }
}
