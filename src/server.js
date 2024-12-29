import express from 'express';
import User from './models/User.js';
import config from './config/database.js';
import  Sequelize from 'sequelize';
import userRoutes from './routes.js';

const app = express();
app.use(express.json());

const sequelize = new Sequelize(config);

User.init(sequelize);

app.use('/usuarios', userRoutes);

sequelize.authenticate().then(() => {
  console.log('Connection has been established successfully.');
  app.listen(3000, () => {
    console.log('Server is running on port 3000');
  })
}).catch(error => {
  console.error('Unable to connect to the database:', error);
});
