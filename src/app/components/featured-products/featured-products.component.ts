import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/common/services/products.service';

@Component({
  selector: 'app-featured-products',
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.css']
})
export class FeaturedProductsComponent implements OnInit {

  constructor(private productService: ProductsService, private router: Router) { }
  slideItems = [];
  featuredProducts = [];
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe((data: any) => {
      this.featuredProducts = data;
      this.slideItems = this.featuredProducts.splice(0, 3);
    })
  }

  onNext() {
    this.slideItems.push(this.featuredProducts.slice(0, 2));
  }

  onSelectProduct(item) {
    this.productService.selectedProduct.next(item);
    this.productService.preselect.next(item);
    this.router.navigateByUrl('/productDetails');
  }

}
