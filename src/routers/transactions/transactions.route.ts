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


import express, { Request, Response }  from 'express';
import transactionsController from '../../controllers/transactions/transaction.controller'; 
// import userController = 


const transactionRouter = express.Router();

// define the home page route
transactionRouter.get('/:id',  userController.findUser); 

// define the about route
transactionRouter.get('/about', (req, res) => {
  res.send('About birds')
}); 

transactionRouter.post('/', 
    userController.create
); 

 


export default userRouter; 

// export default router;