import express, { Request, Response }  from 'express';
import categoryController from '../../controllers/category/category.controller'; 
// import userController = 


const categoryRouter = express.Router();

// define the home page route
// userRouter.get('/:id',  categoryController.findUser); 

// define the about route
categoryRouter.get('/all', categoryController.getAllCategories);

categoryRouter.post('/', 
    categoryController.create
); 

 


export default categoryRouter; 

// export default router;