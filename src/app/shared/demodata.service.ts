import { Injectable } from '@angular/core';
import {User} from "./user";
import {BankingOptions} from "./banking-options";
import { v4 as uuidv4 } from 'uuid';
import {Payments} from "./payments";

@Injectable({
  providedIn: 'root'
})
export class DemodataService {
  mainUser: User = {
    userAccount: 'demo',
    userPassword: '124534',
    userFirstName: 'Nicole',
    userBalance: 123.53,
    iban: 'LV1234567890',
    id: uuidv4()
  }

  friendUser: User = {
    userAccount: 'friend',
    userPassword: '123456',
    userFirstName: 'Friend',
    userBalance: 234.56,
    iban: 'LV0987654321',
    id: uuidv4()
  }

  companyUser: User = {
    userAccount: 'company',
    userPassword: '123456',
    userFirstName: 'Booking.com',
    userBalance: 345.67,
    iban: 'LV5678901234',
    id: uuidv4()
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

  paymentHistoryMainUser: Payments[] = [
    {
      fromUser: this.friendUser,
      toUser: this.mainUser,
      amount: 50,
      date: '2024-10-31',
      description: 'Halloween Dinner',
      id: uuidv4()
    },
    {
      fromUser: this.companyUser,
      toUser: this.mainUser,
      amount: -100,
      date: '2024-11-05',
      description: 'Vilnius Hotel',
      id: uuidv4()
    }
  ]

  getMainUser(): User {
    return this.mainUser;
  }

  getFriendUser(): User {
    return this.friendUser;
  }

  getCompanyUser(): User {
    return this.companyUser;
  }

  getAllUsers(): User[] {
    return [this.mainUser, this.friendUser, this.companyUser];
  }

  getPaymentHistoryMainUser(): Payments[] {
    return this.paymentHistoryMainUser;
  }

  getBankingOptions(): BankingOptions[] {
    return this.transferOptions;
  }
}
