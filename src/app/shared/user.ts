import { v4 as uuidv4 } from 'uuid';

export interface User {
  userAccount: string;
  userPassword: string;
  userFirstName: string;
  userBalance: number;
  iban: string;
  id: string;
}
