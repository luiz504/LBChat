import express from 'express';
// import { Server } from 'socket.io';
import cors from 'cors';

import http from 'http';
import routes from './routes';

const PORT = process.env.PORT || 3333;

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

const server = http.createServer(app);

// const io = new Server(server); //eslint-disable-line

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`); //eslint-disable-line
});
