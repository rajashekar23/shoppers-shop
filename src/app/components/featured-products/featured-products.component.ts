import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  constructor() { }
featuredProducts = [
  {img: 'cloth_1.jpg', name: 'Tank Top', summary: 'Finding perfect t-shirt', price: 500},
  {img: 'hero_2.png', name: 'Corator', summary: 'Finding perfect products', price: 590},
  {img: 'cloth_2.jpg', name: 'Polo Shirt', summary: 'Finding perfect shirt', price: 750},
  {img: 'cloth_3.jpg', name: 'T-Shirt Mockup', summary: 'Finding perfect t-shirt', price: 650},
  {img: 'hero_2.png', name: 'Corator', summary: 'Finding perfect products', price: 590},
];
  ngOnInit() {
  }

}
