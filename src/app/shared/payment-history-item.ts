import {Payment} from "./payment";
import {User} from "./user";

export interface PaymentHistoryItem {
  user: User;
  payment: Payment;
}
