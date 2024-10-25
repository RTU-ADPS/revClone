import { Component } from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {RouterLink} from "@angular/router";
import {DemodataService} from "../shared/demodata.service";
import {Payment} from "../shared/payment";
import {PaymentUser} from "../shared/payment-user";
import {User} from "../shared/user";
import {NgForOf, NgIf, SlicePipe} from "@angular/common";

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [
    LucideAngularModule,
    RouterLink,
    NgForOf,
    NgIf,
    SlicePipe
  ],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css'
})
export class TransactionHistoryComponent {
  paymentHistory: PaymentUser[];
  allPayments: Payment[];


  constructor(private demoService: DemodataService) {
    this.paymentHistory = this.demoService.getPaymentHistoryMainUser();
    this.allPayments = this.demoService.getAllPayments();
  }

  getPaymentUser(paymentId: string): User {
    return <User>this.demoService.getUserByPaymentId(paymentId);
  }

  getPaymentById(paymentId: string): Payment | undefined {
    return this.demoService.getPaymentById(paymentId);
  }

  groupPaymentsByDate(): { date: string, payments: Payment[], total: number }[] {
    const paymentMap = new Map<string, Payment[]>();

    this.allPayments.forEach(payment => {
      if (!paymentMap.has(payment.date)) {
        paymentMap.set(payment.date, []);
      }
      paymentMap.get(payment.date)?.push(payment);
    });

    return Array.from(paymentMap, ([date, payments]) => ({
      date,
      payments,
      total: payments.reduce((sum, payment) => sum + payment.amount, 0)
    }));
  }


}
