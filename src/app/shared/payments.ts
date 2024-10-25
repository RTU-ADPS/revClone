import {User} from "./user";

export interface Payments {
  fromUser: User;
  toUser: User;
  amount: number;
  date: string;
  description: string;
  id: string;
}
