

export interface ISaveTransaction {
  userId: number;
  accountId: number;
  categoryId: number;
  type: number;
  amount: number;
  accountBalance: number;
  description: string;
  isActive: boolean;
  createdDate: Date;
  modifiedDate: Date;
  transactionDate: Date;
};
