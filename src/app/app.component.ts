import { Component, Input } from '@angular/core';
import { Product } from './_models/product.model';
import { productservice } from './_services/productservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'ang-project';


  constructor(){
  }

  // product : Product[] =[]

  // outPutItemAdded(product : Product){

  //   this.product.push(product);

  // }

}
