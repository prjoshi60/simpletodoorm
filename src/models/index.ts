import { Sequelize, DataType} from "sequelize-typescript";
import dotenv from 'dotenv';
import defineTasks from "./todoApp/tasks";

dotenv.config({ path: '.env' });

const sequelize = new Sequelize(
    process.env.DB_NAME || '', 
    process.env.DB_USER || '',
    process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
        max: 15,
        min: 5,
        idle: 20000,
        evict: 15000,
        acquire: 30000
    },
    ssl: true,
    dialectOptions: {
        "ssl": {
            "require": true
        }
    }
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

  const db: any = {};
  db.Sequelize = Sequelize; 
  db.sequelize = sequelize;
  db.Tasks = defineTasks(sequelize, DataType);

  db.sequelize.sync({force:false});

export default db;