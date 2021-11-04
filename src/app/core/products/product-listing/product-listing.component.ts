import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { productservice } from 'src/app/_services/productservice.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
  productListArray :Product[] = this.productService.getAllProduct()



  pageSize :number = 9;
  // @Output() outputItem = new EventEmitter<Product>();

  noOpages :number[]=[] ;
  productViewed :Product[] =[];
  currentPage :number = 0;

  constructor(private productService : productservice) {

  }

  paging(){
    const numberOfPages =Math.ceil(this.productListArray.length/this.pageSize);
    for(let i = 0; i < numberOfPages; i++) {
      this.noOpages.push(i+1);
    }
  }

  ngOnInit(): void {

    this.paging()
    this.sliceArray()

    this.productService.productchanged.subscribe(
      (next)=>{
        this.productListArray = next
         this.paging()
         this.sliceArray()
      },
      (error)=>{},
      ()=>{}
    )

    this.productService.itemDeleted.subscribe(
      (next)=>{
        this.productListArray = next;
          let numberOfPages =Math.ceil(this.productListArray.length/this.pageSize);
          if(numberOfPages < this.noOpages.length){
            this.noOpages.pop()
           }
          this.sliceArray()
      },
      (error)=>{},
      ()=>{})

  }

  sliceArray(){
    this.productViewed = this.productListArray.slice(this.currentPage *this.pageSize, (this.currentPage * this.pageSize) + this.pageSize)
  }


  onPagenation(i : number) {
    if( i > -1 && i < this.noOpages.length ) {
      this.currentPage =i;
      this.sliceArray()
    }

  }


  arr : Product[]=[]
  notfound :string[]=['not found']
  @ViewChild('input') input !: ElementRef;
  search(){
    this.arr=[]
    const searchInput = this.input.nativeElement as HTMLInputElement
    if( searchInput.value == "")
    {
      this.productListArray= this.productService.getAllProduct()
    }
    else{
      for(let i = 0; i < this.productListArray.length; i++){
        if(this.productListArray[i].basicData[0].name == searchInput.value){
          this.arr.push(this.productListArray[i])
        }
      }
      this.productListArray = this.arr
    }

    for(let i = 0; i < this.noOpages.length+1; i++){
    let numberOfPages =Math.ceil(this.productListArray.length/this.pageSize);
    if(numberOfPages < this.noOpages.length){
      this.noOpages.pop()
    }
    else{
      this.noOpages.push(i+this.noOpages.length+1)
    }
   }
  this.sliceArray()

}


  // newItemAdded(product : Product){
  //   console.log(product)
  //   this.outputItem.emit(product)
  // }

}
