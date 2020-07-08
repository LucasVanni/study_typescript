import { Router } from 'express'
import UserController from './controllers/UserController';

const routes = Router();

routes.get('/', (req, res) => {
  res.send('Hello World');
});

routes.post('/users', UserController.index);

routes.get('/email', UserController.create);

export default routes;