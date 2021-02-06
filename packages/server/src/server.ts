import express from 'express';
import { Server, Socket } from 'socket.io';
import cors from 'cors';

import http from 'http';
import routes from './routes';
import {
  addUser,
  getUser,
  removeUser,
  getUsersInRoom,
} from './repositories/UsersRepository';

const PORT = process.env.PORT || 3333;
const ORIGIN = process.env.ORIGIN || 'http://localhost:3000';

const app = express();
app.use(cors({ origin: ORIGIN }));
app.use(express.json());
app.use(routes);

const server = http.createServer(app);

const io = new Server(server, { cors: { origin: ORIGIN } });

io.on('connection', (socket: Socket) => {
  console.log('We have a new connection!'); //eslint-disable-line
  socket.on('join', ({ name, room }, callback) => {
    try {
      const user = addUser({ id: socket.id, name, room });

      socket.emit('message', {
        user: 'admin',
        text: `${user.name}, welcome to the room ${user.room}`,
      });

      socket.broadcast
        .to(user.room)
        .emit('message', { user: 'admin', text: `${user.name}, has joined!` });

      socket.join(user.room);

      io.to(user.room).emit(`roomData`, {
        room: user.room,
        users: getUsersInRoom(user.room),
      });
    } catch (err) {
      callback(err);
    }
  });

  socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit('message', { user: user.name, text: message });
    io.to(user.room).emit(`roomData`, {
      room: user.room,
      text: message,
    });
    callback({ message: 'sent' });
  });

  socket.on('leave', () => {
    const user = removeUser(socket.id);

    if (user) {
      io.to(user.room).emit('message', {
        user: 'admin',
        text: `${user.name} left the room.`,
      });
    }
    console.log('user had left!'); //eslint-disable-line
  });
});

server.listen(PORT, () => {
  console.log(`Server has started on port ${PORT}`); //eslint-disable-line
});
