import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeBannerComponent } from './components/home-banner/home-banner.component';
import { PoliciesComponent } from './components/policies/policies.component';
import { CollectionsComponent } from './components/collections/collections.component';
import { FeaturedProductsComponent } from './components/featured-products/featured-products.component';
import { BigsaleComponent } from './components/bigsale/bigsale.component';
import { FooterComponent } from './components/footer/footer.component';
import { ShopComponent } from './components/shop/shop.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutPageComponent } from './pages/checkout-page/checkout-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { OrderconfirmPageComponent } from './pages/orderconfirm-page/orderconfirm-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewarrivalsPageComponent } from './pages/newarrivals-page/newarrivals-page.component';
import { ShopPageComponent } from './pages/shop-page/shop-page.component';
import { ViewcartPageComponent } from './pages/viewcart-page/viewcart-page.component';
import { ProductDetailsPageComponent } from './pages/product-details-page/product-details-page.component';
import { ContactComponent } from './components/contact/contact.component';
import { SliderDirective } from './slider/slider.directive';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeBannerComponent,
    PoliciesComponent,
    CollectionsComponent,
    FeaturedProductsComponent,
    BigsaleComponent,
    FooterComponent,
    ShopComponent,
    ProductDetailsComponent,
    CartComponent,
    CheckoutComponent,
    CheckoutPageComponent,
    ContactPageComponent,
    OrderconfirmPageComponent,
    HomePageComponent,
    NewarrivalsPageComponent,
    ShopPageComponent,
    ViewcartPageComponent,
    ProductDetailsPageComponent,
    ContactComponent,
    SliderDirective,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
