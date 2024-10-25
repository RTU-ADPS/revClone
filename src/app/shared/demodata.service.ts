import {Injectable} from '@angular/core';
import {User} from "./user";
import {BankingOptions} from "./banking-options";
import {v4 as uuidv4} from 'uuid';
import {Payment} from "./payment";
import {PaymentUser} from "./payment-user";

@Injectable({
  providedIn: 'root'
})
export class DemodataService {

  Users: User[] = [{
    userAccount: 'demo',
    userPassword: '124534',
    userFirstName: 'Nicole',
    userBalance: 123.53,
    iban: 'LV1234567890',
    id: uuidv4()
  },
    {
      userAccount: 'friend',
      userPassword: '123456',
      userFirstName: 'Friend',
      userBalance: 234.56,
      iban: 'LV0987654321',
      id: uuidv4()
    },
    {
      userAccount: 'company',
      userPassword: '123456',
      userFirstName: 'Booking.com',
      userBalance: 345.67,
      iban: 'LV5678901234',
      id: uuidv4()
    }
  ]

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

  paymentsMainUser: Payment[] = [
    {
      amount: 50,
      date: '2024-10-31',
      description: 'Halloween Dinner',
      id: uuidv4()
    },
    {
      amount: -100,
      date: '2024-11-05',
      description: 'Vilnius Hotel',
      id: uuidv4()
    },
    {
      amount: 200,
      date: '2024-11-15',
      description: 'Birthday Gift from Friends',
      id: uuidv4()
    },
    {
      amount: -100,
      date: '2024-11-15',
      description: 'Drinks with Friends',
      id: uuidv4()
    }
  ]

  paymentHistoryMainUser: PaymentUser[] = [
    {
      userId: this.Users[1].id,
      paymentId: this.paymentsMainUser[0].id,
    },
    {
      userId: this.Users[2].id,
      paymentId: this.paymentsMainUser[1].id,
    },
    {
      userId: this.Users[1].id,
      paymentId: this.paymentsMainUser[3].id,
    },
    {
      userId: this.Users[1].id,
      paymentId: this.paymentsMainUser[2].id,
    },
  ]

  getPaymentHistoryForUniqueUser(userId: string): Payment[] {
    const paymentHistoryForUniqueUser: Payment[] = [];
    this.paymentHistoryMainUser.forEach(paymentUser => {
      if (paymentUser.userId === userId) {
        const payment = this.paymentsMainUser.find(payment => payment.id === paymentUser.paymentId);
        if (payment) {
          paymentHistoryForUniqueUser.push(payment);
        }
      }
    });
    return paymentHistoryForUniqueUser;
  }

  getUniqueUsersForMainUserPayments(): User[] {
    const uniqueUsersMap = new Map<string, User>();
    this.paymentHistoryMainUser.forEach(payment => {
      const user = this.Users.find(u => u.id === payment.userId);
      if (user && !uniqueUsersMap.has(user.id)) {
        uniqueUsersMap.set(user.id, user);
      }
    });
    return Array.from(uniqueUsersMap.values());
  }

  getUserByPaymentId(paymentId: string): User | undefined {
    const paymentUser = this.paymentHistoryMainUser.find(pu => pu.paymentId === paymentId);
    if (paymentUser) {
      return this.getUserById(paymentUser.userId);
    }
    return undefined;
  }

  getPaymentsByUserId(userId: string | null): Payment[] {
    const paymentHistoryForUniqueUser: Payment[] = [];
    this.paymentHistoryMainUser.forEach(paymentUser => {
      if (paymentUser.userId === userId) {
        const payment = this.paymentsMainUser.find(payment => payment.id === paymentUser.paymentId);
        if (payment) {
          paymentHistoryForUniqueUser.push(payment);
        }
      }
    });
    return paymentHistoryForUniqueUser;
  }

  getAllPayments(): Payment[] {
    return this.paymentsMainUser;
  }

  getMainUser(): User {
    return this.Users[0];
  }

  getUserById(id: string): User {
    return <User>this.Users.find(user => user.id === id);
  }

  getPaymentById(paymentId: string): Payment | undefined {
    return this.paymentsMainUser.find(payment => payment.id === paymentId);
  }


  getPaymentHistoryMainUser(): PaymentUser[] {
    return this.paymentHistoryMainUser;
  }

  getBankingOptions(): BankingOptions[] {
    return this.transferOptions;
  }


}
