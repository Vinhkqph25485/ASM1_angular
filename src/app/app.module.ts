import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuComponent } from './component/trang-chu/trang-chu.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    ProductlistComponent,
    ProductItemComponent,
    ProductAddComponent,
    ProductEditComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
