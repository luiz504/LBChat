interface IUser {
  id: string;
  name: string;
  room: string;
}
const users: IUser[] = [];

const addUser = ({ id, name, room }: IUser): IUser => {
  const nameParsed = name.trim().toLocaleLowerCase();
  const roomParsed = name.trim().toLocaleLowerCase();

  const usersExists = users.find(
    (user) => user.room === room && nameParsed && user.name === roomParsed,
  );

  if (usersExists) {
    throw new Error('Username is taken!');
  }

  const user = { id, name, room };

  users.push(user);
  return user;
};

const removeUser = (id: string): IUser | undefined => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
  return undefined;
};

const getUser = (id: string): IUser => {
  return users.find((user) => user.id === id);
};

const getUsersInRoom = (room: string): IUser[] => {
  return users.filter((user) => user.room === room);
};

export { addUser, removeUser, getUser, getUsersInRoom };
