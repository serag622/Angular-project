import { EventEmitter } from "@angular/core";
import { Product } from "../_models/product.model";

export class productservice{

  itemAdded = new EventEmitter<Product>()
  itemDeleted = new EventEmitter()
  productchanged = new EventEmitter()



 private productArray : Product[] =[
  {id:1,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[1,2,3,12]},
  {id:2,basicData:[{id:1,name:'iphone',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,2]},
  {id:3,basicData:[{id:1,name:'iphone-2',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[8,8,1,3]},
  {id:4,basicData:[{id:1,name:'laptop',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[14,9,2,4]},
  {id:5,basicData:[{id:1,name:'camera-2',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,5]},
  {id:6,basicData:[{id:1,name:'camera-3',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,6]},
  {id:7,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,7]},
  {id:8,basicData:[{id:1,name:'laptop-7',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,8]},
  {id:9,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,9]},
  {id:10,basicData:[{id:1,name:'camera-0',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,11]},
  {id:11,basicData:[{id:1,name:'camera-8',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,21]},
  {id:12,basicData:[{id:1,name:'camera-14',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,13]},
  {id:13,basicData:[{id:1,name:'laptop',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,9]},
  {id:14,basicData:[{id:1,name:'camera-5',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,8]},
  {id:15,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[2,8,12,7]},
  {id:16,basicData:[{id:1,name:'iphone',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,5]},
  {id:17,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,5,2,3]},
  {id:18,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[11,18,2,1]},
  {id:19,basicData:[{id:1,name:'iphone-6',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[17,14,10,4]},
  {id:20,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,6,11,10]},
  {id:21,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[2,5,1,11]},
  {id:22,basicData:[{id:1,name:'iphone-8',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12.13]},
  {id:23,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[19,8,21,14]},
  {id:24,basicData:[{id:1,name:'camera-7',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[6,3,12,15]},
  {id:25,basicData:[{id:1,name:'laptop',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[24,7,1,27]},
  {id:26,basicData:[{id:1,name:'laptop-6',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,23]},
  {id:27,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[10,7,2,24]},
  {id:28,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[27,5,22,25]},
  {id:29,basicData:[{id:1,name:'iphone',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[4,8,12,26]},
  {id:30,basicData:[{id:1,name:'camera',desc:'this is camera',lang:[{id:1,name:"English"}]}],price:100,discount:30,paymentType:[{id:1,name:"visa"}],catogrey:{id:1,name:"elctroni"},tags:[],imgUrls:["assets/img/layout-styles.png"],relatedProductsIds:[3,11,12,1]},

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
