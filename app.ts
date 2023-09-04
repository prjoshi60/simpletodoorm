import express from 'express';
import dotenv from 'dotenv';

import bodyParser from 'body-parser';
import cors from 'cors';
// import './src/models';
import router from './src/routes';
import todoRouter from './src/routes/todoRouter';
// import sequelize from './src/config/sequellize';

// import publicRoutes from './src/routes/public';
// import apiRoutes from './src/routes/api';
// import adminRoutes from './src/routes/admin';
// import apiMiddleware from './src/middleware/apiAuth';
// import adminMiddleware from './src/middleware/adminAuth';
// import errorHandler from './src/middleware/errorHandler';

dotenv.config();


const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);

app.use(cors());
app.use(bodyParser.json());
app.use(router);
//app.use('/todo', todoRouter);
// app.use('/api', apiMiddleware, apiRoutes);
// app.use('/api/admin', apiMiddleware, adminMiddleware, adminRoutes);
// app.use(errorHandler);

export default app;