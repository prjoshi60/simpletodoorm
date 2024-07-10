import * as express from 'express';

import accountRouter from './accounts/accounts.route';
import userRouter from './user/user.route';
import categoryRouter from './category/category.route';

const router = express.Router();

router.use('/category', categoryRouter);
router.use('/user', userRouter);
router.use('/accounts', accountRouter);

export default router;