import { Component, OnInit } from '@angular/core';
import {Sort} from '@angular/material/sort';


interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.scss']
})
export class SchoolComponent implements OnInit {

  countries = COUNTRIES;
  constructor() { }
  sortedData: Country[];
  sortData(sort: Sort) {
    const data = COUNTRIES;
    if ( !sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    function compare(a: number | string, b: number | string, isAsc: boolean) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }

    this.sortedData = data.sort(
      (a, b) => {
        const isAsc = sort.direction === 'asc';
        switch (sort.active) {
          case 'name' : return compare(a.name, b.name, isAsc);
          case 'area' : return compare(a.area, b.area, isAsc);
          default: return 0;
        }
      }
    );
  }


  ngOnInit() {
  }

}
