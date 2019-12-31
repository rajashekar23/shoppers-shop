import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { NewarrivalsPageComponent } from './pages/newarrivals-page/newarrivals-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ViewcartPageComponent } from './pages/viewcart-page/viewcart-page.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { OrderconfirmPageComponent } from './pages/orderconfirm-page/orderconfirm-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'shop', component: ShopPageComponent},
  {path: 'newArrivals', component: NewarrivalsPageComponent},
  {path: 'contactPage', component: ContactPageComponent},
  {path: 'viewCart', component: ViewcartPageComponent},
  {path: 'checkout', component: CheckoutPageComponent},
  {path: 'orederConfirm', component: OrderconfirmPageComponent},
  {path: 'productDetails', component: ProductDetailsPageComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
