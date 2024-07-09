import { CREDIT_CATEGORY_TYPE, DEBIT_CATEGORY_TYPE } from '../constants/constants';


export const getCategoryType = (category: string) : number  => {
    if (category.toLowerCase() === 'credit') {
        return CREDIT_CATEGORY_TYPE; 
    } else {
        return DEBIT_CATEGORY_TYPE; 
    }
}