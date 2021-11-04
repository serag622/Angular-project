import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { productservice } from 'src/app/_services/productservice.service';

@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

   itemAdded :Product[] =[];

  cart :boolean = false;
  sum : number = 0;

  constructor(private productService :productservice) {

   }

  ngOnInit(): void {

    this.productService.itemAdded.subscribe(
      (next)=>{
        console.log("mmm")
        this.itemAdded.push(next);
      },
      (error)=>{

      },
      ()=>{

      })
  }

  // getTotal() : any{
  //   for(let i in this.itemAdded){
  //        this.sum = this.sum + this.itemAdded[i].price;
  //    return this.sum;
  //   }
  // }



}
