
import express from 'express'; 
import todoRouter from './todoRouter';


const router = express.Router();

router.use('/todo', todoRouter);

export default router;