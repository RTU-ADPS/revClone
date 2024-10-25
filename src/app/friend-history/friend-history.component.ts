import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {LucideAngularModule} from "lucide-angular";
import {DemodataService} from "../shared/demodata.service";
import {Payment} from "../shared/payment";
import {NgForOf, NgIf} from "@angular/common";
import {User} from "../shared/user";

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
export class FriendHistoryComponent implements OnInit {
  friendId: string = '';
  user: User;
  payments: Payment[];

  constructor(private route: ActivatedRoute, private demoService: DemodataService) {
    this.payments = this.demoService.getPaymentsByUserId(this.friendId);
    this.user = this.demoService.getUserById(this.friendId);
  }

  ngOnInit(): void {
    const routeId = this.route.snapshot.paramMap.get('id');

    if (routeId) {
      this.friendId = routeId;
      this.payments = this.demoService.getPaymentsByUserId(this.friendId);
    }
  }


}
