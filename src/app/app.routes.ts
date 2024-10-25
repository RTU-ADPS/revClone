import { Routes } from '@angular/router';
import {BankTransferComponent} from "./bank-transfer/bank-transfer.component";
import {HomeComponent} from "./home/home.component";
import {PaymentsComponent} from "./payments/payments.component";
import {AccountComponent} from "./account/account.component";
import {BudgetComponent} from "./budget/budget.component";

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add-money', component: BankTransferComponent},
  { path: 'payments', component: PaymentsComponent},
  { path: 'user', component: AccountComponent},
  { path: 'budget', component: BudgetComponent}
];
