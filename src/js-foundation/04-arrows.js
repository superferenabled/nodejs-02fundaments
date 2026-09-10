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

const getUserById = (id, cb) => {
  const user = users.find((user) => user.id === id);
  !user ? cb(new Error(`No user found with the id: ${id}`)) : cb(null, user);
};

module.exports = {
  getUserById,
};
