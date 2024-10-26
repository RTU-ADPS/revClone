import {Component, OnDestroy, OnInit} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {RouterLink} from "@angular/router";
import {DemodataService} from "../shared/demodata.service";
import {Payment} from "../shared/payment";
import {PaymentUser} from "../shared/payment-user";
import {User} from "../shared/user";
import {NgForOf, NgIf, SlicePipe} from "@angular/common";
import {Subscription} from "rxjs";

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
export class TransactionHistoryComponent implements OnInit, OnDestroy {
  paymentHistory: PaymentUser[] = [];
  allPayments: Payment[] = [];
  private paymentUpdateSubscription: Subscription | undefined;

  constructor(private demoService: DemodataService) {
  }

  ngOnInit(): void {
    this.loadPayments();

    this.paymentUpdateSubscription = this.demoService.paymentUpdates$.subscribe(() => {
      this.loadPayments();
    });
  }

  ngOnDestroy(): void {
    if (this.paymentUpdateSubscription) {
      this.paymentUpdateSubscription.unsubscribe();
    }
  }

  loadPayments(): void {
    this.paymentHistory = this.demoService.getPaymentHistoryMainUser();
    this.allPayments = this.demoService.getAllPayments();
  }

  getPaymentUser(paymentId: string): User {
    return <User>this.demoService.getUserByPaymentId(paymentId);
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
