export interface User {
  id: number;
  name: string;
}

const users = [
  {
    id: 1,
    name: "john doe",
  },
  {
    id: 2,
    name: "jane doe",
  },
];

export const getUserById = (
  id: number,
  cb: (error?: Error | unknown, user?: User) => void,
) => {
  const user = users.find((user) => user.id === id);
  !user ? cb(new Error(`No user found with the id: ${id}`)) : cb(null, user);
};
