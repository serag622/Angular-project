import { Injectable } from '@angular/core';
import { catogrey } from '../_models/catogrey.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  category : catogrey[]=[
    {id:1 ,name: 'Arts & Crafts'},
    {id:2 ,name: 'Automotive'},
    {id:3 ,name: 'Baby'},
    {id:4 ,name: 'Books'},
    {id:5 ,name: 'Eletronics'},
    {id:6 ,name: 'Womens Fashion'},
    {id:7 ,name: 'Mens Fashion'}
  ]

  constructor() { }

  getAllCategory() :catogrey[]{
      return [...this.category]
  }

  getCategorybyId(id : number) : catogrey | undefined {
    return this.category.find(c => c.id === id);
  }
}
