import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import { productservice } from 'src/app/_services/productservice.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  product!: Product ;
  relatedProducts : Product[]=[] ;
  constructor(private _productService: productservice, private router :ActivatedRoute) { }

  ngOnInit(): void {
    const id = +this.router.params.subscribe((res)=>{
    const product= this._productService.getproductById(+res.id);
    if(!product)
    {
      alert('Product not found')
    }
    else{
      this.product = product;
      this.relatedProducts =[]
      this.product.relatedProductsIds?.map((id)=>{
        const rproduct =this._productService.getproductById(id)
        rproduct && this.relatedProducts.push(rproduct)
      })
    }
    });




  }

}
