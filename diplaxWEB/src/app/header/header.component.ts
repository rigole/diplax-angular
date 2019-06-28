import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  mobileQuery:MediaQueryList;
  open = false;
  icoButton = 'menu';
  fillerNav=[

    { name:"Compte",route:"",icon: "person_outline"},
    { name:"Formation",route:"",icon: "person_outline"},
    { name:"Filière",route:"",icon: "worker"},
    { name:"Annonce",route:"",icon: "speaker"},
    { name:"Ecole",route:"",icon: "school"},
  ]


  fillerNav2=[

    { name:"Mon Compte",route:"",icon: "list"},
    { name:"Deconnexion",route:"",icon: ""},

  ]

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
