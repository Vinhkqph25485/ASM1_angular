import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangChuComponent } from './component/trang-chu/trang-chu.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { ProductAddComponent } from './component/product-add/product-add.component';
import { ProductEditComponent } from './component/product-edit/product-edit.component';


const routes: Routes = [
  {path: '', component: TrangChuComponent},
  {path: 'products', component: ProductlistComponent},
  {path: 'products/add', component: ProductAddComponent },
  {path: 'products/edit/:id', component: ProductEditComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
