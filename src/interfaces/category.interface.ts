// Interfaces
import { IBaseQueryParams } from './common.interface';

export interface ICreateCategory {
    categoryName: string;
    categoryType: number;
    userId: number;
    isActive: boolean;
    createdDate: Date,
    modifiedDate: Date,
    description: string;
}
