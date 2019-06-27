import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  open = false;
  icoButton = 'menu';

  constructor() { }
  toggle() {
    this.open = !this.open;
    if (this.open === true) {
      this.icoButton = 'close';
    } else { this.icoButton = 'menu'; }
  }

  ngOnInit() {
  }

}
