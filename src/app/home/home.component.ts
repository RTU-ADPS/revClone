import { Component } from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {RouterModule} from "@angular/router";
import {User} from "../shared/user";
import {DemodataService} from "../shared/demodata.service";
import {NavbarComponent} from "../navbar/navbar.component";
import {HeaderComponent} from "../header/header.component";
import {Payment} from "../shared/payment";
import {NgForOf, NgIf, SlicePipe} from "@angular/common";
import {PaymentUser} from "../shared/payment-user";
import {PaymentHistoryItem} from "../shared/payment-history-item";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule, RouterModule, NavbarComponent, HeaderComponent, NgForOf, NgIf, SlicePipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: User;
  paymentHistory: PaymentHistoryItem[] = [];

  constructor(private demoService: DemodataService) {
    this.user = this.demoService.getMainUser();
    this.loadPaymentHistory();
  }

  private loadPaymentHistory(): void {
    const paymentUsers = this.demoService.getPaymentHistoryMainUser();
    this.paymentHistory = paymentUsers
      .map(paymentUser => {
        const user = this.demoService.getUserById(paymentUser.userId);
        const payment = this.demoService.getPaymentById(paymentUser.paymentId);
        return payment && user ? { user, payment } : undefined;
      })
      .filter((item): item is PaymentHistoryItem => item !== undefined); // Type guard to filter out undefined
  }

}
