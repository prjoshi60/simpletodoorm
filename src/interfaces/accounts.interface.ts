// Interfaces
import { IBaseQueryParams } from './common.interface';

export interface ICreateAccount {
  accountName: string;
  type: number;
  userId: number;
  accountBalance: number;
  description: string;
  isActive: boolean;
  createdDate: Date;
  modifiedDate: Date;
}

