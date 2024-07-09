// user.controller.ts
import httpStatusCodes from 'http-status-codes';

// Interfaces
import IController from '../../interfaces/IController';
import {
  ICreateCategory,
} from '../../interfaces/category.interface';
import { IDeleteById, IDetailById } from '../../interfaces/common.interface';

// Errors
// import { StringError } from '../../errors/string.error';

// Services
import categoryService from '../../services/category/category.service';

// Utilities
import ApiResponse from '../../utilities/api-response.utitlity';
import { getCategoryType } from '../../utilities/app-utility';
// import Encryption from '../../utilities/encryption.utility';
// import ApiUtility from '../../utilities/api.utility';
import { getLoggedInUserId } from '../../utilities/auth-utility';

// Constants
// import constants from '../../constants';

const create: IController = async (req, res) => {
  try {
    
    const params: ICreateCategory = {
      categoryName: req.body.categoryName,
      userId: getLoggedInUserId(),
      isActive: true,
      categoryType: getCategoryType(req.body.categoryType), 
      description: req.body.description, 
      createdDate: new Date(), 
      modifiedDate: new Date()
      
    }
    
    const category = await categoryService.create(params);
    
    return ApiResponse.result(res, category, httpStatusCodes.CREATED);
  } catch (e) {
    // if (e.code === constants.ERROR_CODE.DUPLICATED) {
    //   return ApiResponse.error(res, httpStatusCodes.CONFLICT, 'Email already exists.');
    }
    // return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST);
    //}
}; 

const getAllCategories: IController = async (req, res) => {
    try {
      
      const categories = await categoryService.getAllCategories();

      if (categories) {
        return ApiResponse.result(res, categories, httpStatusCodes.OK);
      } else {
        const data =  'Categories not found';
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
  getAllCategories


};


/*

const login: IController = async (req, res) => {
  try {
    const params: ILoginUser = {
      email: req.body.email,
      password: req.body.password,
    }
    const user = await userService.login(params);
    const cookie = await generateUserCookie(user.id);
    return ApiResponse.result(res, user, httpStatusCodes.OK, cookie);
  } catch (e) {
    if (e instanceof StringError) {
      return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, e.message);
    }
    return ApiResponse.error(res, httpStatusCodes.BAD_REQUEST, 'Something went wrong');
  }
};

const me: IController = async (req, res) => {
  const cookie = await generateUserCookie(req.user.id);
  return ApiResponse.result(res, req.user, httpStatusCodes.OK, cookie);
};

const detail: IController = async (req, res) => {
  try {
    const params: IDetailById = {
      id: parseInt(req.params.id, 10),
    }
    const data = await userService.detail(params);
    return ApiResponse.result(res, data, httpStatusCodes.OK);
  } catch (e) {
    ApiResponse.exception(res, e);
  }
};

const update: IController = async (req, res) => {
  try {
    const params: IUpdateUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      id: parseInt(req.params.id, 10),
    }
    await userService.update(params);
    return ApiResponse.result(res, params, httpStatusCodes.OK);
  } catch (e) {
    ApiResponse.exception(res, e);
  }
};

const updateMe: IController = async (req, res) => {
  try {
    const params: IUpdateUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      id: req.user.id,
    }
    await userService.update(params);
    return ApiResponse.result(res, params, httpStatusCodes.OK);
  } catch (e) {
    ApiResponse.exception(res, e);
  }
};

const list: IController = async (req, res) => {
  try {
    const limit = ApiUtility.getQueryParam(req, 'limit');
    const page = ApiUtility.getQueryParam(req, 'page');
    const keyword = ApiUtility.getQueryParam(req, 'keyword');
    const params: IUserQueryParams = { limit, page, keyword };
    const data = await userService.list(params);
    return ApiResponse.result(res, data.response, httpStatusCodes.OK, null, data.pagination);
  } catch (e) {
    ApiResponse.exception(res, e);
  }
};

const remove: IController = async (req, res) => {
  try {
    const params: IDeleteById = {
      id: parseInt(req.params.id, 10),
    }
    await userService.remove(params);
    return ApiResponse.result(res, params, httpStatusCodes.OK);
  } catch (e) {
    ApiResponse.exception(res, e);
  }
};

const generateUserCookie = async (userId: number) => {
  return {
    key: constants.COOKIE.COOKIE_USER,
    value: await Encryption.generateCookie(constants.COOKIE.KEY_USER_ID, userId.toString()),
  };
}; */