import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {LucideAngularModule} from "lucide-angular";
import {DemodataService} from "../shared/demodata.service";
import {User} from "../shared/user";

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    RouterLink,
    LucideAngularModule
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  user: User;

  constructor(private demodata: DemodataService) {
    this.user = this.demodata.getMainUser();
  }

}
