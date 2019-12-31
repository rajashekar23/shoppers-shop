import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.css']
})
export class PoliciesComponent implements OnInit {

  constructor() { }

  policies = [
    // tslint:disable-next-line: max-line-length
    {icon: 'fas fa-truck', title: 'FREE SHIPPING', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.'},
    // tslint:disable-next-line: max-line-length
    {icon: 'fa fa-repeat', title: 'FREE RETURNS', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.'},
    // tslint:disable-next-line: max-line-length
    {icon: 'fas fa-question-circle', title: 'CUSTOMER SUPPORT', summary: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.'},
  ]

  ngOnInit() {
  }
}
