/*import express from 'express';
// const schemaValidator = require('express-joi-validator');

// Controller
import userController from '../../controllers/user/user.controller';

// Schema
// import userSchema from '../../validations/schemas/user.schema';

// Middleware
// import { isAdmin } from '../../middlewares/permission-handler.middleware';

const router = express.Router();

router.get(
  '/',
  userController.create,
);

// router.delete(
//   '/:id',
//   isAdmin(),
//   userController.remove,
// ); */


import express  from 'express';
import transactionsController from '../../controllers/transactions/transactions.controller'; 
// import userController = 


const transactionRouter = express.Router();

// define the home page route
transactionRouter.get('/:id',  transactionsController.findUser);  

transactionRouter.post('/', 
  transactionsController.create
); 

 


export default transactionRouter; 

// export default router;