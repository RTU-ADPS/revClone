import {Component} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {RouterLink} from "@angular/router";
import {DemodataService} from "../shared/demodata.service";
import {BankingOptions} from "../shared/banking-options";
import {User} from "../shared/user";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-bank-transfer',
  standalone: true,
  imports: [
    LucideAngularModule,
    RouterLink,
    FormsModule
  ],
  templateUrl: './bank-transfer.component.html',
  styleUrl: './bank-transfer.component.css'
})
export class BankTransferComponent {
  bankingOptions: BankingOptions[];
  currentOption: BankingOptions;
  user: User;
  amount: number;

  constructor(private demoService: DemodataService) {
    this.bankingOptions = this.demoService.getBankingOptions();
    this.currentOption = this.bankingOptions[0];
    this.user = this.demoService.getUser();
    this.amount = 10;
  }

  addAmount(amount: number) {
    this.user.userBalance += amount;
  }

}
