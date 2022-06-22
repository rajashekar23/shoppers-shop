import { Component, OnInit } from '@angular/core';
import { Subscriber, Subscription } from 'rxjs';
import { ProductsService } from 'src/app/common/services/products.service';

@Component({
  selector: 'app-product-details-page',
  templateUrl: './product-details-page.component.html',
  styleUrls: ['./product-details-page.component.css']
})
export class ProductDetailsPageComponent implements OnInit {
  selectedProduct: any;
  postSubscription = new Subscription;
  preSubscription = new Subscription;
  constructor(private productService: ProductsService) {
    this.postSubscription = this.productService.selectedProduct.subscribe(data =>
      // console.log(data)
      this.selectedProduct = data)
    // this.preSubscription = this.productService.preselect.subscribe({
    //   next: (d) => console.log(d)
    // })
  }

  ngOnInit() {
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.postSubscription.unsubscribe();
    // this.preSubscription.unsubscribe();
  }
}
