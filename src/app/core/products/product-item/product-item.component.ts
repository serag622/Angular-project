import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { productservice } from 'src/app/_services/productservice.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {
  @Input() product !: Product;

  // @Output() itemAdded = new EventEmitter<any>();
  // productService : productservice = new productservice();

  constructor(private productService : productservice) {
    // this.product = {name:"camera",price:100,discount:30,imgUrl:"assets/img/layout-styles.png"}

   }

  ngOnInit(): void {
  }

  getprice(){
    return this.product.discount? this.product.price - this.product.discount : this.product.price;
  }

  itemAddedtoCart(){
    // this.itemAdded.emit(this.product);
    this.productService.itemAdded.emit(this.product);
    console.log("mm")
  }

  deleteItem(id: number){
    this.productService.deleteProduct(id)

  }

}
