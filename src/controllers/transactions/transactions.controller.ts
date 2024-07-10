// user.controller.ts
import httpStatusCodes from 'http-status-codes';

// Interfaces
import IController from '../../interfaces/IController';
import {
  ISaveTransaction
} from '../../interfaces/transactions.interface';
// import { IDeleteById, IDetailById } from '../../interfaces/common.interface';

// Errors
// import { StringError } from '../../errors/string.error';

// Services
import userService from '../../services/user/user.service';
import accountsService from '../../services/accounts/accounts.service';

// Utilities
import ApiResponse from '../../utilities/api-response.utitlity';
// import Encryption from '../../utilities/encryption.utility';
// import ApiUtility from '../../utilities/api.utility';

// Constants
// import constants from '../../constants';

const create: IController = async (req, res) => {
  try {

    if ()

    const accountId = accountsService.getAccountIdByName(req.params.accountName);
    
    const params: ISaveTransaction = {
      userId: req.body.userId, 
      accountId: req.body.accountsService
      categoryId
      type
      amount
      accountBalance
      description
      isActive
      createdDate
      modifiedDate
      transactionDate
    }
    
    const user = await userService.create(params);
    
    return ApiResponse.result(res, params, httpStatusCodes.CREATED);
  } catch (e) {
    // if (e.code === constants.ERROR_CODE.DUPLICATED) {
    //   return ApiResponse.error(res, httpStatusCodes.CONFLICT, 'Email already exists.');
    }
    // return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST);
    //}
}; 

const findUser: IController = async (req, res) => {
    try {
      console.log(" Params :: ", req.params);
      const id = parseInt(req.params.id);
      const user = await userService.getById(id);

      if (user) {
        return ApiResponse.result(res, user, httpStatusCodes.OK);
      } else {
        const data =  'User not found';
        return ApiResponse.result(res, data, httpStatusCodes.OK);
      }
      
    } catch (e) {
      // if (e.code === constants.ERROR_CODE.DUPLICATED) {
      //   return ApiResponse.error(res, httpStatusCodes.CONFLICT, 'Email already exists.');
      }
      // return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST);
      //}
  }; 


export default {
  create,
  findUser

};