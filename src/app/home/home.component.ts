import { Component } from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {RouterModule} from "@angular/router";
import {User} from "../shared/user";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LucideAngularModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  title = 'revClone';
  userAccount = 'demo';
  userPassword = '124534';
  userFirstName = 'Nicole';
  userBalance = 123.53;
  constructor() {}
}
