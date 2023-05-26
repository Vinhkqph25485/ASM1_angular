import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interface/IProduct';
import { ProductService } from 'src/app/services/product.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent {
  product:IProduct = {
    name: '',
    price: 0
  }

  constructor(private formBuilder:FormBuilder,
    private productService:ProductService,
    private routers:Router,
    private router: ActivatedRoute
    ){
      this.router.paramMap.subscribe(param => {
        const id = Number(param.get('id'))
        this.productService.getProduct(id).subscribe(product=> {
          this.product = product

          this.productForm.patchValue({
            name: this.product.name,
            price: this.product.price
          })
        })
      })
    }

    productForm = this.formBuilder.group({
      name: ['',Validators.required ],
      price: [0]
    })

    onhandleSubmit(){
      if(this.productForm.valid){
        const product:IProduct = {
          id: this.product.id,
          name: this.productForm.value.name || "",
          price: this.productForm.value.price || 0
        }
        this.productService.updateProduct(product).subscribe(() => {
          this.routers.navigate(['products'])
        })
      }
    }
}
