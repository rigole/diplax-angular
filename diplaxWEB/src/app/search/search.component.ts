import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  value: string;
  vertebrates: 'any';
  invertebrates: 'any';

  constructor() { }

  ngOnInit() {
  }

  clear() {
    this.value = '';
  }
}
