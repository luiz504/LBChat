import { Router } from 'express';

const routes = Router();

routes.get(`/`, (request, response) => {
  try {
    return response.json({ message: 'Hello word' });
  } catch (err) {
    return response.status(400).json(err.message);
  }
});

export default routes;
