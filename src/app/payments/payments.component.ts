import { Component } from '@angular/core';
import {NavbarComponent} from "../navbar/navbar.component";
import {HeaderComponent} from "../header/header.component";
import {NgForOf, NgIf} from "@angular/common";
import {RouterLink, RouterModule, RouterOutlet} from "@angular/router";
import {User} from "../shared/user";
import {Payment} from "../shared/payment";
import {DemodataService} from "../shared/demodata.service";
import {PaymentUser} from "../shared/payment-user";

@Component({
  selector: 'app-payments',
  standalone: true,
  imports: [
    NavbarComponent,
    HeaderComponent,
    NgForOf,
    NgIf,
    RouterModule
  ],
  templateUrl: './payments.component.html',
  styleUrl: './payments.component.css'
})
export class PaymentsComponent {
  friends: User[];
  payments: Payment[] = [];

  constructor(private demoService: DemodataService) {
    this.friends = this.demoService.getUniqueUsersForMainUserPayments();
  }

  getMostRecentPayment(id: string): Payment {
    this.payments = this.demoService.getPaymentHistoryForUniqueUser(id);
    return this.payments[this.payments.length - 1];
  }


}
