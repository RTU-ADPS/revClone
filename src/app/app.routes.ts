import { Routes } from '@angular/router';
import {BankTransferComponent} from "./bank-transfer/bank-transfer.component";
import {HomeComponent} from "./home/home.component";
import {PaymentsComponent} from "./payments/payments.component";
import {AccountComponent} from "./account/account.component";
import {BudgetComponent} from "./budget/budget.component";
import {FriendHistoryComponent} from "./friend-history/friend-history.component";
import {TransactionHistoryComponent} from "./transaction-history/transaction-history.component";
import {TransferToFriendComponent} from "./transfer-to-friend/transfer-to-friend.component";

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add-money', component: BankTransferComponent},
  { path: 'transactions', component: TransactionHistoryComponent},
  { path: 'payments', component: PaymentsComponent},
  { path: 'payments/:id', component: FriendHistoryComponent},
  { path: 'payments/:id/transfer/:action', component: TransferToFriendComponent},
  { path: 'user', component: AccountComponent},
  { path: 'budget', component: BudgetComponent},
];
