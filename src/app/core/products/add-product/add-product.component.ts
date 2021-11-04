import { Component, ElementRef, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { catogrey } from 'src/app/_models/catogrey.model';
import { payment } from 'src/app/_models/payment.model';
import { CategoryService } from 'src/app/_services/category.service';
import { PaymentService } from 'src/app/_services/payment.service';
import { Product } from 'src/app/_models/product.model';
import { productservice } from 'src/app/_services/productservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  category : catogrey[] =this.catogreyservice.getAllCategory();
  paymentMethod : payment[] = this.paymentService.getAllpayment();
  product  = <Product>{}
  // @ViewChild('form') form!:ElementRef;
  isEditMode = false;

  constructor(private catogreyservice: CategoryService , private paymentService: PaymentService
     , private productService: productservice,private router: Router,
     private activatedRoute: ActivatedRoute) {


    this.product={id:1,
      basicData:[{id:1,name:'',desc:''}]
      ,price:0,
      discount:0,
      paymentType:[],
      catogrey:{id:1,name:""},
      tags:[],
      imgUrls:["assets/img/layout-styles.png"]}

  }


  ngOnInit(): void {
    const productid = this.activatedRoute.snapshot.params.id;
    const product = this.productService.getproductById(+productid);

    if(product){
     this.product={...product}
     this.isEditMode =true;
    }
    console.log(productid);
    console.log(product)
  }



  onSubmint(form : NgForm){
    // this.product = {...form.value}

    const cat = this.catogreyservice.getCategorybyId(+form.value.category)

    for(let i = 0; i< this.paymentMethod.length; i++){
      if(form.value['check_'+i]){
        this.product.paymentType.push(this.paymentMethod[i])
      }
     }

    if(cat){
     this.product.catogrey =cat;}

     if(this.isEditMode){
      this.productService.updateProduct(this.product)
     }
     else{
      this.productService.addProduct(this.product)
     }
    this.router.navigateByUrl('home')
  }

  onTagAdded(tagInput :HTMLInputElement){
    this.product.tags?.push({name:tagInput.value})
    tagInput.value =""

  }





}


