import { User } from './04-arrows';

const users = [
  {
    id: 1,
    name: 'john doe',
  },
  {
    id: 2,
    name: 'jane doe',
  },
];

export const getUserById = (
  id: number,
  cb: (err?: Error | null, user?: User) => void,
) => {
  const user = users.find(function (user) {
    return user.id === id;
  });
  if (!user) {
    return cb(new Error(`No user found with the id: ${id}`));
  }
  return cb(null, user);
};
