import { Routes } from '@angular/router';
import {BankTransferComponent} from "./bank-transfer/bank-transfer.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'add-money', component: BankTransferComponent}
];
