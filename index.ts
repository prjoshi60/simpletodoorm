require('dotenv').config();
import express, { Application } from 'express'; 

import 'reflect-metadata';
import { AppDataSource } from './data-source';
import app from './src/config/express.config';

// const app: Application = express();



const PORT = process.env.PORT || 3000;

const connect = async () => {
  try {
    AppDataSource.initialize().then(() => {

        
        
        app.listen(3000, 'localhost', () => {
            console.log(`The connection to database was created successfully and application running at port ${PORT}`);
        } ); 
       
    }); 
  } catch (e) {
    console.log(`The connection to database was failed with error: ${e}`);
  }
}

connect();