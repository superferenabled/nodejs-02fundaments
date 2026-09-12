const users = [
    {
        id: 1,
        name: 'john doe'
    },
    {
        id: 2,
        name: 'jane doe'
    }
]

const getUserById = function (id: number, cb: Function) {
  try {
    const user = users.find(function (user) {
      return user.id === id;
    });
    if (!user) {
      return cb(new Error(`No user found with the id: ${id}`));
    }
    return cb(null, user);
  } catch (error) {
    cb(error, null);
  }
};

module.exports = {
  getUserById,
};