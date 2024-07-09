import express, { Request, Response }  from 'express';
import accountsController from '../../controllers/accounts/accounts.controller'; 
// import userController = 


const accountsRouter = express.Router();

// define the home page route
// userRouter.get('/:id',  categoryController.findUser); 

// define the about route
accountsRouter.get('/all', accountsController.getAllAccounts);

accountsRouter.post('/', 
  accountsController.create
); 

 


export default accountsRouter; 

// export default router;