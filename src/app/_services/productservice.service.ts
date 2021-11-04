import { EventEmitter } from "@angular/core";
import { Product } from "../_models/product.model";

export class productservice{

  itemAdded = new EventEmitter<Product>()
  itemDeleted = new EventEmitter()
  productchanged = new EventEmitter()



 private productArray : Product[] =[
  {id:1,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:2,basicData:[{id:1,name:'iphone',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:3,basicData:[{id:1,name:'iphone',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:4,basicData:[{id:1,name:'laptop',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:5,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:6,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:7,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:8,basicData:[{id:1,name:'laptop',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:9,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:10,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:11,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:12,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:13,basicData:[{id:1,name:'laptop',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:14,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:15,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:16,basicData:[{id:1,name:'iphone',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:17,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:18,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:19,basicData:[{id:1,name:'iphone',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:20,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:21,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:22,basicData:[{id:1,name:'iphone',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:23,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:24,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:25,basicData:[{id:1,name:'laptop',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:26,basicData:[{id:1,name:'laptop',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:27,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:28,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:29,basicData:[{id:1,name:'iphone',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},
  {id:30,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"]},

];

  getAllProduct(){
    return this.productArray;
  }

  getproductById(id :number){
    return this.productArray.find(product => product.id === id)
  }

  addProduct(product :Product){
    this.productArray.push(product);
    this.productchanged.emit(this.productArray)
  }

  updateProduct(product :Product){
    let index  = this.productArray.findIndex(p => p.id ==product.id);
    this.productArray[index] = product;
    return this.productArray;
  }

  deleteProduct(id :number){
    let index  = this.productArray.findIndex(p => p.id == id);
    this.productArray.splice(index, 1);
    this.itemDeleted.emit(this.productArray)
  }

}
