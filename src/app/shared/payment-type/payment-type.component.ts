import { Component, OnInit } from '@angular/core';
import { payment } from 'src/app/_models/payment.model';
import { PaymentService } from 'src/app/_services/payment.service';

@Component({
  selector: 'app-payment-type',
  templateUrl: './payment-type.component.html',
  styleUrls: ['./payment-type.component.scss']
})
export class PaymentTypeComponent implements OnInit {

  payment : payment[]= this.paymentService.getAllpayment();

  constructor(private paymentService: PaymentService) {
   }

  ngOnInit(): void {
  }

}
