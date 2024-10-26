import {Component, OnInit} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {DemodataService} from "../shared/demodata.service";
import {Payment} from "../shared/payment";
import {Location, NgIf} from "@angular/common";
import {User} from "../shared/user";

@Component({
  selector: 'app-payment-info',
  standalone: true,
  imports: [
    LucideAngularModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './payment-info.component.html',
  styleUrl: './payment-info.component.css'
})
export class PaymentInfoComponent implements OnInit {
  paymentId: string = '';
  payment: Payment | undefined;
  user: User | undefined;

  constructor(private route: ActivatedRoute,
              private demoService: DemodataService,
              private location: Location) {}

  goBack(): void {
    this.location.back();
  }

  ngOnInit() {
    this.paymentId = this.route.snapshot.paramMap.get('paymentid') ?? '';
    if (this.paymentId) {
      this.payment = this.demoService.getPaymentById(this.paymentId);
    }
    this.user = this.demoService.getUserByPaymentId(this.paymentId)
  }

  getUserFromPaymentId() {
  }
}
