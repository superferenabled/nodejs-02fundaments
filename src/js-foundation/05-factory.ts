export const buildMakePerson = ({uuidv4, getAge}: any) => {
  return ({ name, birthdate }: {name: string, birthdate: string}) => {
    return {
      id: uuidv4(),
      name: name,
      birthdate: birthdate,
      age: getAge(birthdate),
    };
  };
};
