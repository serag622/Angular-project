import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { ProductListingComponent } from './core/products/product-listing/product-listing.component';
import { ProductItemComponent } from './core/products/product-item/product-item.component';
import { FooterComponent } from './footer/footer.component';
import { Product } from './_models/product.model';
import { productservice } from './_services/productservice.service';
import { AddProductComponent } from './core/products/add-product/add-product.component';
import { PaymentTypeComponent } from './shared/payment-type/payment-type.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductDetailsComponent } from './core/products/product-details/product-details.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListingComponent,
    ProductItemComponent,
    FooterComponent,
    AddProductComponent,
    PaymentTypeComponent,
    NotFoundComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [productservice],
  bootstrap: [AppComponent]
})

export class AppModule {


}
