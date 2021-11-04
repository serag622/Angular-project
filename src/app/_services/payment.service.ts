import { Injectable } from '@angular/core';
import { payment } from '../_models/payment.model';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  payment : payment[]=[
    {id:1 ,name:'Direct Bank Transfare'},
    {id:2 ,name:'Cheque Payment'},
    {id:3 ,name:'Paypal'},
    {id:4 ,name:'Visa'},
    {id:5 ,name:'Mastercard'},
    {id:6 ,name:'On Dilivery'},
    {id:7 ,name:'MEZA'}
  ]

  constructor() { }

  getAllpayment(){
    return [...this.payment]
  }

  getPaymentById(id:number){
    return this.payment.find(p => p.id === id)
  }
}
