import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Users } from './src/entities/User';
import { Transactions } from './src/entities/transactions';
import { Category } from './src/entities/Category';
import { Accounts } from './src/entities/Accounts';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,//'practicetypeorm.cp0wu62asrii.ap-southeast-2.rds.amazonaws.com',
    port: 3306,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database:process.env.DB_NAME,
    synchronize: true,
    logging: true,
    entities:[Users, Transactions, Accounts, Category ]
})