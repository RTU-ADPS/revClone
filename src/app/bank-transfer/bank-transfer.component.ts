import {Component} from '@angular/core';
import {LucideAngularModule} from "lucide-angular";
import {RouterLink} from "@angular/router";
import {DemodataService} from "../shared/demodata.service";
import {BankingOptions} from "../shared/banking-options";

@Component({
  selector: 'app-bank-transfer',
  standalone: true,
  imports: [
    LucideAngularModule,
    RouterLink
  ],
  templateUrl: './bank-transfer.component.html',
  styleUrl: './bank-transfer.component.css'
})
export class BankTransferComponent {
  bankingOptions: BankingOptions[];
  currentOption: BankingOptions;

  constructor(private demoService: DemodataService) {
    this.bankingOptions = this.demoService.getBankingOptions();
    this.currentOption = this.bankingOptions[0];
  }

}
