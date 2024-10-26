import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {LucideAngularModule} from "lucide-angular";
import {DemodataService} from "../shared/demodata.service";
import {Payment} from "../shared/payment";
import {NgForOf, NgIf} from "@angular/common";
import {User} from "../shared/user";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-friend-history',
  standalone: true,
  imports: [
    RouterOutlet,
    LucideAngularModule,
    RouterLink,
    NgForOf,
    NgIf
  ],
  templateUrl: './friend-history.component.html',
  styleUrl: './friend-history.component.css'
})
export class FriendHistoryComponent implements OnInit, OnDestroy {
  friendId: string = '';
  payments: Payment[] = [];
  user: User | undefined;
  private paymentUpdateSubscription: Subscription | undefined;

  constructor(private route: ActivatedRoute, private demoService: DemodataService) {}

  ngOnInit(): void {
    this.friendId = this.route.snapshot.paramMap.get('id') ?? '';
    this.user = this.demoService.getUserById(this.friendId);
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
    if (this.friendId) {
      this.payments = this.demoService.getPaymentsByUserId(this.friendId);
    }
  }


}
