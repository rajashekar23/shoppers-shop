import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css']
})
export class CollectionsComponent implements OnInit {

  constructor() { }
  collections = [
  {img: '../../../assets/images/women.jpg', name: 'Women'},
  {img: '../../../assets/images/children.jpg', name: 'Children'},
  {img: '../../../assets/images/men.jpg', name: 'Men'}
  ]

  ngOnInit() {
  }
}
