import { Component } from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {RouterModule} from "@angular/router";
import {User} from "../shared/user";
import {DemodataService} from "../shared/demodata.service";
import {NavbarComponent} from "../navbar/navbar.component";
import {HeaderComponent} from "../header/header.component";
import {Payments} from "../shared/payments";
import {NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule, RouterModule, NavbarComponent, HeaderComponent, NgForOf, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  user: User;
  paymentHistory: Payments[];

  constructor(private demoService: DemodataService) {
    this.user = this.demoService.getMainUser();
    this.paymentHistory = this.demoService.getPaymentHistoryMainUser();
  }
}
