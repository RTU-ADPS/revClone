import { Injectable } from '@angular/core';
import {User} from "./user";
import {BankingOptions} from "./banking-options";

@Injectable({
  providedIn: 'root'
})
export class DemodataService {
  user: User = {
    userAccount: 'demo',
    userPassword: '124534',
    userFirstName: 'Nicole',
    userBalance: 123.53,
  }

   transferOptions: BankingOptions[] = [
      {
        name: 'Easy Bank Transfer',
        icon: 'landmark',
        description: 'Secure transfer directly from your bank.',
      },
     {
       name: 'Google Pay',
       icon: 'credit-card',
       description: '',
     }
   ]

  getUser(): User {
    return this.user;
  }

  getBankingOptions(): BankingOptions[] {
    return this.transferOptions;
  }
}
