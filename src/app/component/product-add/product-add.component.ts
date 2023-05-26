import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  product:IProduct = {
    name: '',
    price: 0
  }

  constructor(private formBuilder:FormBuilder,
    private productService:ProductService,
    private routers:Router
    ){}

    productForm = this.formBuilder.group({
      name: ['',Validators.required ],
      price: [0]
    })

    onhandleSubmit(){
      if(this.productForm.valid){
        const product:IProduct = {
          name: this.productForm.value.name || "",
          price:this.productForm.value.price || 0,
        }
        this.productService.addProduct(product).subscribe(() => {
          this.routers.navigate(['products'])
        })
      }
    }
}
