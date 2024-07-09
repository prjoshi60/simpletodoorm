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
import userController from '../../controllers/user/users.controller'; 
// import userController = 


const userRouter = express.Router();

// define the home page route
userRouter.get('/:id',  userController.findUser); 

// define the about route
userRouter.get('/about', (req, res) => {
  res.send('About birds')
}); 

userRouter.post('/', 
    userController.create
); 

 


export default userRouter; 

// export default router;